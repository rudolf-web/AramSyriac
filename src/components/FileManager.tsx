import React, { useState, useEffect } from "react";
import { 
  FileUp, 
  File, 
  Trash2, 
  Download, 
  LogOut, 
  FolderOpen, 
  Loader2,
  CheckCircle,
  Database,
  User,
  HelpCircle,
  RefreshCw,
  AlertTriangle,
  Award
} from "lucide-react";
import { 
  isFirebaseConfigured, 
  db, 
  handleFirestoreError, 
  OperationType,
  uploadFileToStorage,
  deleteFileFromStorage
} from "../firebase";
import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  deleteDoc, 
  query, 
  updateDoc 
} from "firebase/firestore";
import { UserFile } from "../types";

interface FileManagerProps {
  user: any;
  userProfile: any;
  onLogOut: () => void;
  onRefreshProfile: () => void;
}

export function FileManager({ user, userProfile, onLogOut, onRefreshProfile }: FileManagerProps) {
  // File states
  const [files, setFiles] = useState<UserFile[]>([]);
  const [filesLoading, setFilesLoading] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);
  const [dragProgress, setDragProgress] = useState(false);

  // Profile Edit states
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editFullName, setEditFullName] = useState(userProfile?.fullName || "");
  const [editReason, setEditReason] = useState(userProfile?.learningReason || "");
  const [updatingProfile, setUpdatingProfile] = useState(false);

  useEffect(() => {
    if (user) {
      fetchUserFiles();
    }
  }, [user]);

  // Fetch student files
  const fetchUserFiles = async () => {
    if (!user) return;
    setFilesLoading(true);
    setFileError(null);

    if (isFirebaseConfigured && db) {
      const path = `users/${user.uid}/files`;
      try {
        const q = query(collection(db, "users", user.uid, "files"));
        const snapshot = await getDocs(q);
        const fetchedFiles: UserFile[] = [];
        snapshot.forEach((doc) => {
          fetchedFiles.push(doc.data() as UserFile);
        });
        // Sort files by date descending
        fetchedFiles.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
        setFiles(fetchedFiles);
      } catch (error) {
        try {
          handleFirestoreError(error, OperationType.LIST, path);
        } catch (err: any) {
          setFileError("Gagal memuat berkas dari cloud: " + err.message);
        }
      } finally {
        setFilesLoading(false);
      }
    } else {
      // Local simulation files
      const localStore = localStorage.getItem(`arami_local_files_${user.uid}`);
      if (localStore) {
        setFiles(JSON.parse(localStore));
      } else {
        setFiles([]);
      }
      setFilesLoading(false);
    }
  };

  // Convert File to Base64
  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Handle uploading files (drag & drop + picker)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setFileError(null);
    setDragProgress(false);

    if (!user) return;
    let rawFile: File | null = null;

    if ("files" in e.target && e.target.files) {
      rawFile = e.target.files[0];
    } else if ("dataTransfer" in e && e.dataTransfer.files) {
      rawFile = e.dataTransfer.files[0];
    }

    if (!rawFile) return;

    // Strict 1MB size limit
    const sizeCap = 1024 * 1024;
    if (rawFile.size > sizeCap) {
      setFileError("Batasan ukuran terlampaui. Ukuran tugas modul maksimal adalah 1MB untuk integritas database.");
      return;
    }

    setFilesLoading(true);

    try {
      const fileId = "file_" + Date.now();
      
      let fileDataValue = "";
      if (isFirebaseConfigured && db) {
        fileDataValue = await uploadFileToStorage(user.uid, fileId, rawFile);
      } else {
        fileDataValue = await getBase64(rawFile);
      }
      
      const newFile: UserFile = {
        fileId: fileId,
        userId: user.uid,
        moduleId: "general", // general workspace file
        fileName: rawFile.name,
        fileSize: rawFile.size,
        fileType: rawFile.type || "application/octet-stream",
        fileData: fileDataValue,
        uploadDate: new Date().toISOString()
      };

      if (isFirebaseConfigured && db) {
        const filePath = `users/${user.uid}/files/${fileId}`;
        try {
          await setDoc(doc(db, "users", user.uid, "files", fileId), newFile);
          await fetchUserFiles();
        } catch (dbErr) {
          handleFirestoreError(dbErr, OperationType.CREATE, filePath);
        }
      } else {
        // Sandbox local simulation
        const localList = [...files, newFile];
        localStorage.setItem(`arami_local_files_${user.uid}`, JSON.stringify(localList));
        localList.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
        setFiles(localList);
      }
    } catch (err: any) {
      setFileError("Gagal mengunggah berkas: " + err.message);
    } finally {
      setFilesLoading(false);
    }
  };

  // Remove uploaded file
  const handleDeleteFile = async (fileId: string) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus berkas tugas ini?")) return;

    setFilesLoading(true);
    setFileError(null);

    if (isFirebaseConfigured && db) {
      const filePath = `users/${user.uid}/files/${fileId}`;
      try {
        const fileObj = files.find(f => f.fileId === fileId);
        if (fileObj) {
          await deleteFileFromStorage(user.uid, fileId, fileObj.fileName);
        }
        await deleteDoc(doc(db, "users", user.uid, "files", fileId));
        await fetchUserFiles();
      } catch (dbErr) {
        try {
          handleFirestoreError(dbErr, OperationType.DELETE, filePath);
        } catch (err: any) {
          setFileError("Gagal menghapus berkas di cloud: " + err.message);
        }
      } finally {
        setFilesLoading(false);
      }
    } else {
      const updated = files.filter(f => f.fileId !== fileId);
      localStorage.setItem(`arami_local_files_${user.uid}`, JSON.stringify(updated));
      setFiles(updated);
      setFilesLoading(false);
    }
  };

  // Download Action
  const handleDownloadFile = (file: UserFile) => {
    try {
      const link = document.createElement("a");
      link.href = file.fileData;
      link.download = file.fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err: any) {
      setFileError("Koneksi unduhan gagal: " + err.message);
    }
  };

  // Update profile handler (especially for revising metadata)
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editFullName.trim() || !editReason.trim()) return;

    setUpdatingProfile(true);
    if (isFirebaseConfigured && db) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          fullName: editFullName.trim(),
          learningReason: editReason.trim(),
          // Return role to standard to trigger re-approval if they changed critical motivation
          status: userProfile.status === "REVISE" ? "PENDING" : userProfile.status
        });
        setIsEditingProfile(false);
        onRefreshProfile();
        alert("Profil berhasil diperbarui!");
      } catch (err: any) {
        alert("Gagal memperbarui profil: " + err.message);
      } finally {
        setUpdatingProfile(false);
      }
    } else {
      // Sandbox fallback
      const key = `arami_sb_profile_${user.uid}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.fullName = editFullName.trim();
        parsed.learningReason = editReason.trim();
        if (parsed.status === "REVISE") parsed.status = "PENDING";
        localStorage.setItem(key, JSON.stringify(parsed));
        setIsEditingProfile(false);
        onRefreshProfile();
        alert("Profil Sandbox berhasil diperbarui!");
      }
      setUpdatingProfile(false);
    }
  };

  // Formatter info helper
  const formatBytes = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED": return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "REVISE": return "bg-amber-50 text-amber-700 border-amber-200 animate-pulse";
      case "DISAPPROVED": return "bg-red-50 text-red-700 border-red-200";
      default: return "bg-blue-50 text-blue-700 border-blue-200 animate-pulse";
    }
  };

  return (
    <div className="space-y-8" id="student-cockpit-layout">
      
      {/* Cloud Status Banner */}
      {userProfile?.role === "admin" && (
        isFirebaseConfigured ? (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 font-sans text-xs">
            <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <p className="text-emerald-950 font-bold">Terhubung Cloud Firestore & Authentication!</p>
              <p className="text-emerald-900/80">Otoritas enkripsi dan perlindungan profil murni diawasi penuh oleh server.</p>
            </div>
          </div>
        ) : (
          <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl flex items-center gap-3 font-sans text-xs">
            <Database className="w-5 h-5 text-amber-600 shrink-0" />
            <div>
              <p className="text-amber-950 font-bold">Mode Sandbox Lokal Aktif</p>
              <p className="text-amber-900/80">Sesi simulasi berjalan lancar di dalam memory lokal browser Anda.</p>
            </div>
          </div>
        )
      )}

      {/* Grid: Profile and general file list */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
        
        {/* Profile Card & Info */}
        <div className="lg:col-span-5 bg-white border border-[#E8E4D9] rounded-2xl p-6 shadow-sm h-fit space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[#F1EEE6]">
            <div className="w-10 h-10 bg-[#5A5A40] text-white rounded-full flex items-center justify-center font-bold">
              {userProfile?.fullName?.charAt(0) || "S"}
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-[#3D3A33] font-serif">Profil & Status Siswa</h3>
              <p className="text-[10px] text-[#8A8471]">{user?.email || "Email Rujukan"}</p>
            </div>
          </div>

          {isEditingProfile ? (
            <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-[#8A8471]">Nama Lengkap Siswa:</label>
                <input
                  type="text"
                  required
                  value={editFullName}
                  onChange={(e) => setEditFullName(e.target.value)}
                  className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] p-2.5 rounded-xl outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-[#8A8471]">Tujuan & Justifikasi Belajar (Revisi):</label>
                <textarea
                  required
                  rows={4}
                  value={editReason}
                  onChange={(e) => setEditReason(e.target.value)}
                  className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] p-2.5 rounded-xl outline-none resize-none font-serif text-xs leading-relaxed"
                />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsEditingProfile(false)}
                  className="flex-1 py-2 bg-[#F1EEE6] text-[#8A8471] font-bold border border-[#D1CCBD] rounded-xl cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={updatingProfile}
                  className="flex-1 py-2 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-bold rounded-xl cursor-pointer flex items-center justify-center gap-1.5"
                >
                  {updatingProfile && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  Kirim Revisi
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4 text-xs text-[#3D3A33]">
              
              <div className="space-y-1">
                <span className="text-[#8A8471] text-[10px] uppercase font-bold tracking-wider">Status Kelas Anda:</span>
                <div className={`p-3 border rounded-xl font-bold flex items-center gap-2 ${getStatusColor(userProfile?.status)}`}>
                  <Award className="w-4 h-4 shrink-0" />
                  <span className="text-xs">
                    {userProfile?.status === "APPROVED" && "DISETUJUI MASUK KELAS"}
                    {userProfile?.status === "PENDING" && "PENDING / MENUNGGU PENINJAUAN"}
                    {userProfile?.status === "REVISE" && "BUTUH REVISI DATA"}
                    {userProfile?.status === "DISAPPROVED" && "PENDAFTARAN DITOLAK"}
                  </span>
                </div>
              </div>

              {userProfile?.adminFeedback && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-xl text-[11px] leading-relaxed relative">
                  <div className="absolute top-1 right-2 shrink-0">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                  </div>
                  <strong className="text-amber-900 block font-bold mb-0.5">Catatan Rudolf A. Luhukay:</strong>
                  <span className="text-amber-950 italic">"{userProfile.adminFeedback}"</span>
                </div>
              )}

              <div className="space-y-1 bg-[#F9F7F2] p-3 rounded-xl border border-[#E8E4D9]">
                <strong className="font-bold block font-serif">{userProfile?.fullName || "Arami Student"}</strong>
                <span className="text-[10px] text-[#8A8471] block mt-1 uppercase font-bold">Motivasi Kursus:</span>
                <p className="text-slate-600 text-xs italic font-serif leading-relaxed mt-0.5">
                  "{userProfile?.learningReason || "Belajar dasar bahasa Semitik klasik."}"
                </p>
              </div>

              <div className="pt-2 border-t border-[#F1EEE6] flex gap-2 font-sans">
                {userProfile?.status === "REVISE" && (
                  <button
                    onClick={() => {
                      setEditFullName(userProfile.fullName || "");
                      setEditReason(userProfile.learningReason || "");
                      setIsEditingProfile(true);
                    }}
                    className="flex-1 py-2 px-3 border border-amber-300 bg-amber-50 hover:bg-amber-100/70 text-amber-800 rounded-xl font-bold transition-all inline-flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    Perbarui Aplikasi
                  </button>
                )}

                <button
                  type="button"
                  onClick={onLogOut}
                  className="flex-1 py-2 px-3 border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl transition-all inline-flex items-center justify-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  Keluar Akun (Sign Out)
                </button>
              </div>
            </div>
          )}
        </div>

        {/* General File Upload & Vault storage list */}
        <div className="lg:col-span-7 bg-white border border-[#E8E4D9] rounded-2xl p-6 shadow-sm space-y-6">
          <div>
            <h3 className="font-extrabold text-sm text-[#3D3A33] font-serif flex items-center gap-2">
              <FolderOpen className="w-5 h-5 text-[#5A5A40]" />
              Gudang Berkas & Tugas Mandiri
            </h3>
            <p className="text-[#8A8471] text-xs font-sans mt-0.5">Kumpulkan salinan teks, manuskrip, tulisan tangan harakat, kata kunci, dsb. untuk dipelajari dari perangkat mana pun.</p>
          </div>

          {/* Drap and drop widget */}
          {userProfile?.status === "APPROVED" ? (
            <>
              <div
                onDragOver={(e) => { e.preventDefault(); setDragProgress(true); }}
                onDragLeave={() => setDragProgress(false)}
                onDrop={handleFileUpload}
                className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer relative ${
                  dragProgress ? "border-[#5A5A40] bg-[#F1EEE6]" : "border-[#D1CCBD] bg-[#F9F7F2]/40 hover:bg-[#F1EEE6]/25"
                }`}
              >
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <FileUp className="w-8 h-8 text-[#5A5A40] mx-auto mb-2" />
                <strong className="text-xs font-bold text-[#3D3A33] block">Unggah Berkas Baru</strong>
                <span className="text-[10px] text-slate-400 block mt-1 tracking-wide">
                  Tarik berkas Anda ke sini, atau klik untuk berburu berkas. Ukuran file maksimum 1MB.
                </span>
              </div>

              {fileError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-[11px] leading-relaxed">
                  {fileError}
                </div>
              )}

              {/* List table */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] text-[#8A8471] uppercase font-bold tracking-wider block">Berkas Terunggah ({files.length}):</span>
                
                {filesLoading ? (
                  <div className="flex justify-center p-8">
                    <Loader2 className="w-7 h-7 text-[#5A5A40] animate-spin" />
                  </div>
                ) : files.length > 0 ? (
                  <div className="divide-y divide-[#F1EEE6] border border-[#E8E4D9] rounded-xl overflow-hidden bg-white max-h-[250px] overflow-y-auto">
                    {files.map((f) => (
                      <div key={f.fileId} className="p-3 flex items-center justify-between gap-4 text-xs font-sans hover:bg-[#F9F7F2]/30 transition-colors">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <File className="w-4.5 h-4.5 text-[#5A5A40] shrink-0" />
                          <div className="min-w-0">
                            <span className="font-bold text-[#3D3A33] block truncate font-serif" title={f.fileName}>{f.fileName}</span>
                            <div className="flex items-center gap-1.5 text-[9px] text-slate-400 font-mono mt-0.5">
                              <span className="bg-[#EBE7DC] text-[#3D3A33] px-1.5 py-0.2 rounded font-bold">{formatBytes(f.fileSize)}</span>
                              <span>•</span>
                              <span>{new Date(f.uploadDate).toLocaleDateString()}</span>
                              {f.moduleId !== "general" && (
                                <>
                                  <span>•</span>
                                  <span className="text-[#5A5A40] font-sans font-bold uppercase">Modul {f.moduleId.replace("module_", "")}</span>
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <button
                            onClick={() => handleDownloadFile(f)}
                            className="p-1 px-2 border border-[#D1CCBD] bg-white text-[#5A5A40] hover:text-[#3D3A33] hover:bg-[#F1EEE6] rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                            title="Unduh / Tampilkan Berkas"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                          
                          <button
                            onClick={() => handleDeleteFile(f.fileId)}
                            className="p-1 px-2 border border-red-200 bg-white text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-all cursor-pointer flex items-center justify-center"
                            title="Hapus Berkas"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center border border-dashed border-[#D1CCBD] rounded-xl bg-[#F9F7F2]/10">
                    <FolderOpen className="w-6 h-6 text-slate-300 mx-auto mb-1.5" />
                    <span className="text-xs font-bold text-[#8A8471] block">Gudang Penyimpanan Kosong</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">Kumpulkan salinan manuskrip atau tugas belajar Anda di sini.</p>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="p-8 border-2 border-dashed border-[#D1CCBD] rounded-xl text-center bg-[#F9F7F2]/20 font-sans">
              <AlertTriangle className="w-6 h-6 text-[#8A8471] mx-auto mb-2" />
              <strong className="text-xs font-bold text-[#3D3A33] block">Gudang Berkas Dikunci</strong>
              <p className="text-[10px] text-slate-400 mt-1">Akses unggah ke dalam arsip hanya terbuka bagi siswa kelas yang telah **Disetujui** oleh Super Admin Rudolf.</p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
