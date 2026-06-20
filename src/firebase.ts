import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  signInWithPopup, 
  GoogleAuthProvider,
  User as FirebaseUser
} from "firebase/auth";
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  collection, 
  deleteDoc, 
  getDocFromServer,
  query,
  where
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyChwkDVZbCoHjEjQ8XTI7BTu9_Gkx7iReg",
  authDomain: "gen-lang-client-0222238326.firebaseapp.com",
  projectId: "gen-lang-client-0222238326",
  storageBucket: "gen-lang-client-0222238326.firebasestorage.app",
  messagingSenderId: "554965954840",
  appId: "1:554965954840:web:b2758442e7922a9a59ee6d"
};

export enum OperationType {
  CREATE = "create",
  UPDATE = "update",
  DELETE = "delete",
  LIST = "list",
  GET = "get",
  WRITE = "write",
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  }
}

// Check if we are using the placeholder configuration or a valid custom one
export const isFirebaseConfigured = true;

let app: any = null;
export let db: any = null; // Do not use Firestore for now
export let auth: any = null;
export let storage: any = null; // Do not use Storage for now

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
} catch (error) {
  console.error("Gagal melakukan inisialisasi Firebase Auth:", error);
}

// Helper function to upload files to Firebase Storage
export async function uploadFileToStorage(userId: string, fileId: string, file: File): Promise<string> {
  if (!isFirebaseConfigured || !storage) {
    throw new Error("Firebase storage is not configured.");
  }
  const storageRef = ref(storage, `users/${userId}/files/${fileId}_${file.name}`);
  const snapshot = await uploadBytes(storageRef, file);
  const downloadUrl = await getDownloadURL(snapshot.ref);
  return downloadUrl;
}

// Helper function to delete files from Firebase Storage
export async function deleteFileFromStorage(userId: string, fileId: string, fileName: string): Promise<void> {
  if (!isFirebaseConfigured || !storage) return;
  try {
    const storageRef = ref(storage, `users/${userId}/files/${fileId}_${fileName}`);
    await deleteObject(storageRef);
  } catch (error) {
    console.warn("Failed to delete file from storage bucket (it might not exist):", error);
  }
}

// Global strict error handler requested by system skill
export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const currentAuthUser = auth?.currentUser;
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: currentAuthUser?.uid || null,
      email: currentAuthUser?.email || null,
      emailVerified: currentAuthUser?.emailVerified || null,
      isAnonymous: currentAuthUser?.isAnonymous || null,
      tenantId: currentAuthUser?.tenantId || null,
      providerInfo: currentAuthUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error("Firestore Error Detailed info: ", JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}
