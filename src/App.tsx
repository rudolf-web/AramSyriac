import React, { useState, useEffect } from "react";
import { 
  GraduationCap, 
  BookOpen, 
  Keyboard as KeyboardIcon, 
  Sparkles, 
  CheckCircle2, 
  Lock, 
  BookMarked, 
  Award, 
  RotateCcw, 
  Trophy, 
  Flame, 
  Check, 
  X,
  Volume2,
  Database,
  ShieldCheck,
  RefreshCw,
  FolderUp,
  FileText,
  AlertCircle,
  FileUp,
  Trash2,
  Download,
  Loader2,
  LogOut,
  Mail,
  User,
  Compass,
  Edit,
  Plus,
  Save,
  Paperclip,
  Youtube,
  Link2
} from "lucide-react";
import { syriacModules } from "./data/syriacModules";
import { Keyboard } from "./components/Keyboard";
import { VocabularyNotebook } from "./components/VocabularyNotebook";
import { AIAssistant } from "./components/AIAssistant";
import { FileManager } from "./components/FileManager";
import { AdminPanel } from "./components/AdminPanel";
import { AramiAuthGate } from "./components/AramiAuthGate";
import { CertificateModal } from "./components/CertificateModal";
import { DailyJournal } from "./components/DailyJournal";
import { UserProgress, Module, QuizQuestion, UserFile } from "./types";
import { LEVEL_EXAMS } from "./data/levelExams";
import { 
  isFirebaseConfigured, 
  auth, 
  db, 
  handleFirestoreError, 
  OperationType,
  uploadFileToStorage,
  deleteFileFromStorage
} from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { 
  doc, 
  onSnapshot, 
  getDocs, 
  collection, 
  setDoc, 
  deleteDoc, 
  query 
} from "firebase/firestore";

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  const videoId = (match && match[2].length === 11) ? match[2] : null;
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  if (url.includes("youtube.com/embed/")) {
    return url;
  }
  return null;
}

function renderModuleEmbed(embed: string | undefined): React.ReactNode {
  if (!embed || !embed.trim()) return null;
  const trimmed = embed.trim();

  // If it's a Raw IFrame code
  if (/<iframe/i.test(trimmed)) {
    return (
      <div className="space-y-2 font-sans text-xs bg-white border border-[#D1CCBD] rounded-2xl overflow-hidden mt-4">
        <div className="p-3 bg-[#FCFBF8] border-b border-[#D1CCBD] font-bold text-[#5A5A40] flex items-center justify-between">
          <span className="uppercase tracking-wider text-[10px]">Materi Multimedia & Rekomendasi Guru</span>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium font-sans">Semat Terpadu</span>
        </div>
        <div className="p-4 bg-[#F9F7F2]/40">
          <div 
            className="w-full overflow-hidden rounded-xl border border-[#D1CCBD]/40 shadow-inner flex items-center justify-center bg-black relative"
            style={{ minHeight: "350px" }}
            dangerouslySetInnerHTML={{ __html: trimmed }}
          />
        </div>
      </div>
    );
  }

  // Check if it's a YouTube URL
  const ytUrl = getYouTubeEmbedUrl(trimmed);
  if (ytUrl) {
    return (
      <div className="space-y-2 font-sans text-xs bg-white border border-[#D1CCBD] rounded-2xl overflow-hidden mt-4">
        <div className="p-3 bg-[#FCFBF8] border-b border-[#D1CCBD] font-bold text-[#5A5A40] flex items-center justify-between">
          <span className="uppercase tracking-wider text-[10px]">Materi Multimedia & Rekomendasi Guru</span>
          <span className="text-[10px] text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-medium font-sans">Video YouTube</span>
        </div>
        <div className="p-4 bg-[#F9F7F2]/40">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#D1CCBD]/40 shadow-sm bg-black">
            <iframe
              src={ytUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Media Pembelajaran Terintegrasi"
            />
          </div>
        </div>
      </div>
    );
  }

  // General URL link embed using standard iframe
  const isUrl = /^https?:\/\/[^\s$.?#].[^\s]*$/i.test(trimmed);
  if (isUrl) {
    return (
      <div className="space-y-2 font-sans text-xs bg-white border border-[#D1CCBD] rounded-2xl overflow-hidden mt-4 font-sans">
        <div className="p-3 bg-[#FCFBF8] border-b border-[#D1CCBD] font-bold text-[#5A5A40] flex items-center justify-between">
          <span className="uppercase tracking-wider text-[10px]">Situs Rujukan / Pranala Luar</span>
          <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded font-medium">Halaman Web</span>
        </div>
        <div className="p-4 bg-[#F9F7F2]/40 space-y-3">
          <div className="w-full h-[520px] rounded-xl overflow-hidden border border-[#D1CCBD]/40 shadow-inner bg-white">
            <iframe
              src={trimmed}
              className="w-full h-full border-0"
              loading="lazy"
              title="Situs Akademik / Referensi Web"
            />
          </div>
          <div className="text-right">
            <a 
              href={trimmed} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs text-[#5A5A40] hover:text-[#3D3A33] font-bold underline"
            >
              Buka dalam tab baru ↗
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Plain Text content
  return (
    <div className="space-y-2 font-sans text-xs bg-white border border-[#D1CCBD] rounded-2xl overflow-hidden mt-4">
      <div className="p-3 bg-[#FCFBF8] border-b border-[#D1CCBD] font-bold text-[#5A5A40] flex items-center justify-between">
        <span className="uppercase tracking-wider text-[10px]">Catatan Pembelajaran Tambahan</span>
        <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-medium">Catatan Guru</span>
      </div>
      <div className="p-4 bg-[#F9F7F2]/40">
        <div className="p-4 bg-white border border-[#D1CCBD]/30 rounded-xl text-xs leading-relaxed text-[#3D3A33]">
          {trimmed}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  // Unique session ID once per application lifecycle to enforce one-device session policy
  const [appSessionId] = useState(() => Math.random().toString(36).substring(2) + Date.now().toString(36));

  // Tabs: "dashboard" | "modules" | "keyboard" | "notebook" | "tutor" | "files" | "admin"
  const [activeTab, setActiveTab] = useState<"dashboard" | "modules" | "keyboard" | "notebook" | "tutor" | "files" | "admin">("dashboard");
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  
  // Real dynamic modules (loaded from cloud Firestore or local sandbox)
  const [modules, setModules] = useState<Module[]>([]);
  const [modulesLoading, setModulesLoading] = useState(true);

  // Authentication State
  const [user, setUser] = useState<any>(null);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Module uploaded files (student tasks)
  const [currModFiles, setCurrModFiles] = useState<UserFile[]>([]);
  const [currModFilesLoading, setCurrModFilesLoading] = useState(false);
  const [currModFilesError, setCurrModFilesError] = useState<string | null>(null);
  const [modFileDragOver, setModFileDragOver] = useState(false);

  // Progress State
  const [progress, setProgress] = useState<UserProgress>({
    completedModules: [],
    quizHighScores: {},
    savedVocabulary: [],
    streak: 1,
    lastActive: null
  });

  // Quiz active state
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [quizResult, setQuizResult] = useState<{ finalScore: number; totalQuestions: number; passed: boolean; scorePercent: number } | null>(null);

  // Level Final Exams state
  const [selectedLevelExam, setSelectedLevelExam] = useState<"A1" | "A2" | "B1" | null>(null);
  const [isLevelExamActive, setIsLevelExamActive] = useState(false);
  const [levelExamCurrentIndex, setLevelExamCurrentIndex] = useState(0);
  const [levelExamSelectedOption, setLevelExamSelectedOption] = useState<number | null>(null);
  const [isLevelExamAnswered, setIsLevelExamAnswered] = useState(false);
  const [levelExamScore, setLevelExamScore] = useState(0);
  const [levelExamResult, setLevelExamResult] = useState<{ score: number; passed: boolean; scorePercent: number } | null>(null);
  const [levelCertificateOpen, setLevelCertificateOpen] = useState(false);
  const [levelCertificateToOpen, setLevelCertificateToOpen] = useState<"A1" | "A2" | "B1" | null>(null);

  // Certificate Modal States
  const [isCertificateOpen, setIsCertificateOpen] = useState(false);
  const [certificateModule, setCertificateModule] = useState<Module | null>(null);

  // Syriac dynamic font toggle
  const [syriacFont, setSyriacFont] = useState<"estrangelo" | "serto" | "madenhoyo">("estrangelo");

  useEffect(() => {
    document.body.classList.remove("syriac-estrangelo", "syriac-serto", "syriac-madenhoyo");
    document.body.classList.add(`syriac-${syriacFont}`);
  }, [syriacFont]);

  // Helper font class selector
  const getSyriacFontClass = () => {
    if (syriacFont === "serto") return "font-syriac-serto";
    if (syriacFont === "madenhoyo") return "font-syriac-madenhoyo";
    return "font-syriac-estrangelo";
  };

  const isLevelUnlocked = (lvl: "A1" | "A2" | "B1") => {
    const isUserAdmin = userProfile?.role === "admin";
    if (isUserAdmin) return true;
    const levelModules = modules.filter(m => m.category === `Level ${lvl}`);
    if (levelModules.length === 0) return false;
    return levelModules.every(m => progress.completedModules.includes(m.id));
  };

  const isModuleNavigable = (mod: Module) => {
    const isUserAdmin = userProfile?.role === "admin";
    if (isUserAdmin) return true;
    
    // Level boundary gates:
    if (mod.category === "Level A2") {
      const a1Completed = progress.completedLevelExams?.includes("A1");
      if (!a1Completed) return false;
    }
    if (mod.category === "Level B1") {
      const a2Completed = progress.completedLevelExams?.includes("A2");
      if (!a2Completed) return false;
    }

    const sorted = [...modules].sort((a, b) => a.id - b.id);
    const idx = sorted.findIndex(item => item.id === mod.id);
    if (idx <= 0) return true; // first module is always unlocked
    
    const prevMod = sorted[idx - 1];
    return progress.completedModules.includes(prevMod.id);
  };

  const renderLevelExamSidebarItem = (lvl: "A1" | "A2" | "B1") => {
    const isCompleted = progress.completedLevelExams?.includes(lvl) || false;
    const isSelected = selectedLevelExam === lvl;
    const unlocked = isLevelUnlocked(lvl);
    
    return (
      <button
        key={`exam-sidebar-${lvl}`}
        onClick={() => {
          setSelectedLevelExam(lvl);
          setSelectedModuleId(null as any); // Clear selected module ID safely
          setIsQuizMode(false);
          setIsLevelExamActive(false);
          setLevelExamResult(null);
        }}
        className={`w-full text-left p-3.5 rounded-2xl border-2 transition-all flex items-center justify-between gap-3 mt-2.5 cursor-pointer hover:shadow-md ${
          isSelected
            ? "bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 border-amber-500 text-white shadow-md animate-gradient"
            : "bg-[#FCFBF8] border-[#E8E4D9] hover:border-amber-400 text-[#3D3A33]"
        }`}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`w-7 h-7 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
            isSelected ? "bg-amber-800 text-white animate-pulse" : "bg-[#F1EEE6] text-[#AA7C11]"
          }`}>
            🏆
          </span>
          <div className="min-w-0 font-sans">
            <h5 className={`text-xs font-extrabold truncate ${isSelected ? "text-white" : "text-[#5A5A40]"}`}>
              Ujian Akhir Level {lvl}
            </h5>
            <span className={`text-[9px] block font-semibold ${isSelected ? "text-amber-100" : "text-[#8A8471]"}`}>
              {unlocked ? "✓ Syarat Terbuka" : "🔒 Masih Terkunci"}
            </span>
          </div>
        </div>

        <div className="shrink-0 flex items-center gap-1.5 z-10">
          {isCompleted ? (
            <CheckCircle2 className={`w-4 h-4 ${isSelected ? "text-white" : "text-emerald-500"}`} />
          ) : !unlocked ? (
            <Lock className="w-3.5 h-3.5 text-slate-300" />
          ) : (
            <Award className={`w-4 h-4 text-amber-500 animate-pulse`} />
          )}
        </div>
      </button>
    );
  };

  // Admin inline editing states
  const [isAdminEditingMain, setIsAdminEditingMain] = useState(false);
  const [adminEditTitle, setAdminEditTitle] = useState("");
  const [adminEditTitleSyriac, setAdminEditTitleSyriac] = useState("");
  const [adminEditCategory, setAdminEditCategory] = useState<"Level A1" | "Level A2" | "Level B1">("Level A1");
  const [adminEditSummary, setAdminEditSummary] = useState("");
  const [adminEditIntroduction, setAdminEditIntroduction] = useState("");
  const [adminEditContent, setAdminEditContent] = useState("");
  const [adminEditEmbedCode, setAdminEditEmbedCode] = useState("");
  
  // States below are for item forms
  const [isAddingKeyRule, setIsAddingKeyRule] = useState(false);
  const [newKeyRuleText, setNewKeyRuleText] = useState("");
  
  const [isAddingVocab, setIsAddingVocab] = useState(false);
  const [newVocabSyriac, setNewVocabSyriac] = useState("");
  const [newVocabTranslit, setNewVocabTranslit] = useState("");
  const [newVocabMeaning, setNewVocabMeaning] = useState("");

  const [isAddingExample, setIsAddingExample] = useState(false);
  const [newExampleSyriac, setNewExampleSyriac] = useState("");
  const [newExampleTranslit, setNewExampleTranslit] = useState("");
  const [newExamplePhonetic, setNewExamplePhonetic] = useState("");
  const [newExampleIndonesian, setNewExampleIndonesian] = useState("");

  const [isAddingAttachmentInline, setIsAddingAttachmentInline] = useState(false);
  const [newAttachmentName, setNewAttachmentName] = useState("");
  const [newAttachmentType, setNewAttachmentType] = useState<"teks" | "pdf" | "mp3" | "mp4" | "web_link" | "youtube" | "embed_web" | "embed_text" | "embed_code">("pdf");
  const [newAttachmentUrl, setNewAttachmentUrl] = useState("");
  const [newAttachmentBase64, setNewAttachmentBase64] = useState("");
  const [newAttachmentError, setNewAttachmentError] = useState<string | null>(null);
  const [newAttachmentLoading, setNewAttachmentLoading] = useState(false);

  // 1. Observe Authentication & Profile Realtime Synchronizations
  useEffect(() => {
    if (isFirebaseConfigured && auth) {
      let unsubscribeProfile: (() => void) | null = null;

      const unsubscribeAuth = onAuthStateChanged(auth, async (currentUser) => {
        if (unsubscribeProfile) {
          unsubscribeProfile();
          unsubscribeProfile = null;
        }

        setUser(currentUser);
        if (currentUser) {
          if (db) {
            // Listen to dynamic user profile
            const userRef = doc(db, "users", currentUser.uid);
            unsubscribeProfile = onSnapshot(userRef, (docSnap) => {
              if (docSnap.exists()) {
                const profileData = docSnap.data();
                
                // 1. SINGLE SESSION/DEVICE CHECK
                if (profileData.activeSessionId && profileData.activeSessionId !== appSessionId) {
                  signOut(auth).then(() => {
                    localStorage.setItem("arami_kickout_reason", "Sesi Anda telah diakhiri karena akun ini masuk di perangkat lain. Sesuai dengan protokol keamanan, satu akun hanya diizinkan aktif di satu perangkat.");
                    window.location.reload();
                  });
                  return;
                }

                // Set active session if not matching ours
                if (profileData.activeSessionId !== appSessionId) {
                  setDoc(userRef, { activeSessionId: appSessionId }, { merge: true });
                }

                // Automatically check if email is Rudolf (admin)
                if (currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id" && profileData.role !== "admin") {
                  // Securely elevate role on the fly or keep local admin
                  profileData.role = "admin";
                  profileData.status = "APPROVED";
                }
                setUserProfile(profileData);
              } else {
                // Create dynamic profile if doesn't exist
                const isAdminEmail = currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id";
                const newProfile = {
                  userId: currentUser.uid,
                  email: currentUser.email?.toLowerCase() || "",
                  fullName: currentUser.displayName || "Siswa Arami",
                  role: isAdminEmail ? "admin" : "student",
                  status: isAdminEmail ? "APPROVED" : "PENDING",
                  learningReason: "Belajar sastra semitik kuno.",
                  activeSessionId: appSessionId,
                  createdAt: new Date().toISOString()
                };
                setDoc(userRef, newProfile);
                setUserProfile(newProfile);
              }
              setAuthLoading(false);
            }, (error) => {
              console.error("Profile listen failure:", error);
              setAuthLoading(false);
              if (auth.currentUser?.uid === currentUser.uid) {
                handleFirestoreError(error, OperationType.GET, `users/${currentUser.uid}`);
              }
            });
          } else {
            // Firestore is disabled -> compute user state and profile locally
            const localProfileKey = `arami_user_profile_${currentUser.uid}`;
            const savedProfile = localStorage.getItem(localProfileKey);
            let profileData = savedProfile ? JSON.parse(savedProfile) : null;
            
            if (!profileData) {
              const isAdminEmail = currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id";
              profileData = {
                userId: currentUser.uid,
                email: currentUser.email?.toLowerCase() || "",
                fullName: currentUser.displayName || "Siswa Arami",
                role: isAdminEmail ? "admin" : "student",
                status: "APPROVED",
                learningReason: "Belajar sastra semitik kuno.",
                activeSessionId: appSessionId,
                createdAt: new Date().toISOString()
              };
              localStorage.setItem(localProfileKey, JSON.stringify(profileData));
            } else {
              // Automatically check if email is Rudolf (admin)
              if (currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id" && profileData.role !== "admin") {
                profileData.role = "admin";
                profileData.status = "APPROVED";
                localStorage.setItem(localProfileKey, JSON.stringify(profileData));
              }
            }
            setUserProfile(profileData);
            setAuthLoading(false);
          }
        } else {
          setUserProfile(null);
          setAuthLoading(false);
        }
      });

      return () => {
        unsubscribeAuth();
        if (unsubscribeProfile) {
          unsubscribeProfile();
        }
      };
    } else {
      // Local Sandbox Simulation
      const loadSandboxAuth = () => {
        const savedDemo = localStorage.getItem("arami_demo_auth_user");
        if (savedDemo) {
          const parsedUser = JSON.parse(savedDemo);
          setUser(parsedUser);
          
          // Sandbox single-device simulation
          const globalActiveSessionKey = `arami_sb_active_session_${parsedUser.uid || parsedUser.userId}`;
          const dbActiveSessionId = localStorage.getItem(globalActiveSessionKey);
          
          if (dbActiveSessionId && dbActiveSessionId !== appSessionId) {
            localStorage.removeItem("arami_demo_auth_user");
            localStorage.setItem("arami_kickout_reason", "Sesi Sandbox Anda telah diakhiri karena akun ini masuk di perangkat simulasi lain. Sesuai dengan protokol keamanan, satu akun hanya diizinkan aktif di satu perangkat.");
            window.location.reload();
            return;
          }
          
          if (dbActiveSessionId !== appSessionId) {
            localStorage.setItem(globalActiveSessionKey, appSessionId);
          }

          // Load local profile
          const savedProfileObj = localStorage.getItem(`arami_sb_profile_${parsedUser.uid || parsedUser.userId}`);
          if (savedProfileObj) {
            setUserProfile(JSON.parse(savedProfileObj));
          } else {
            // default
            const newProfileObj = {
              userId: parsedUser.uid || parsedUser.userId,
              email: parsedUser.email || "demo@arami.com",
              fullName: parsedUser.displayName || "Siswa Sandbox",
              role: (parsedUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id") ? "admin" : "student",
              status: "APPROVED",
              learningReason: "Belajar dasar bahasa Aram",
              createdAt: new Date().toISOString()
            };
            setUserProfile(newProfileObj);
          }
        } else {
          setUser(null);
          setUserProfile(null);
        }
        setAuthLoading(false);
      };
      loadSandboxAuth();
    }
  }, []);

  // 2. Load Modules & Synchronize Cloud Seeding
  useEffect(() => {
    const fetchAndSeed = async () => {
      if (!user) {
        setModulesLoading(false);
        return;
      }
      setModulesLoading(true);
      if (isFirebaseConfigured && db) {
        try {
          const querySnapshot = await getDocs(collection(db, "modules"));
          const modsList: Module[] = [];
          
          querySnapshot.forEach((doc) => {
            modsList.push(doc.data() as Module);
          });

          if (modsList.length === 0) {
            // Seed modules securely to Firestore
            console.log("Seeding course modules into cloud...");
            for (const m of syriacModules) {
              await setDoc(doc(db, "modules", String(m.id)), m);
            }
            // Sort, assign
            const copy = [...syriacModules];
            copy.sort((a, b) => a.id - b.id);
            setModules(copy);
          } else {
            // If the database has fewer modules than standard syriacModules, let's sync and add the missing ones
            if (modsList.length < syriacModules.length) {
              console.log("Syncing missing course modules to cloud...");
              const existingIds = new Set(modsList.map(m => m.id));
              const missingModules = syriacModules.filter(m => !existingIds.has(m.id));
              for (const m of missingModules) {
                await setDoc(doc(db, "modules", String(m.id)), m);
                modsList.push(m);
              }
            }
            modsList.sort((a, b) => a.id - b.id);
            setModules(modsList);
          }
        } catch (err) {
          console.error("Gagal melacak database modul cloud:", err);
          setModules(syriacModules);
        } finally {
          setModulesLoading(false);
        }
      } else {
        // Sandbox modules
        const localCustom = localStorage.getItem("arami_custom_modules");
        if (localCustom) {
          setModules(JSON.parse(localCustom));
        } else {
          setModules(syriacModules);
        }
        setModulesLoading(false);
      }
    };
    fetchAndSeed();
  }, [user]);

  // 3. Load Progress Metrics
  useEffect(() => {
    const cacheKey = user ? `syriac_progress_${user.uid}` : "syriac_progress_sandbox";
    
    // First, try to load from the correct user cache or cloud profile
    let currentProgressData: UserProgress | null = null;

    if (user && userProfile && userProfile.progress) {
      currentProgressData = userProfile.progress;
    } else {
      const saved = localStorage.getItem(cacheKey);
      if (saved) {
        try {
          currentProgressData = JSON.parse(saved);
        } catch (e) {
          console.error("Gagal mengurai cache progress:", e);
        }
      }
    }

    if (currentProgressData) {
      const parsed = { ...currentProgressData };
      // Update Streak
      const todayStr = new Date().toDateString();
      if (parsed.lastActive) {
        const lastActiveDate = new Date(parsed.lastActive);
        const diffTime = Math.abs(new Date().getTime() - lastActiveDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          parsed.streak += 1;
        } else if (diffDays > 1) {
          parsed.streak = 1;
        }
      }
      parsed.lastActive = todayStr;
      
      setProgress(parsed);
      localStorage.setItem(cacheKey, JSON.stringify(parsed));
    } else {
      const initialProgress: UserProgress = {
        completedModules: [],
        quizHighScores: {},
        savedVocabulary: [],
        streak: 1,
        lastActive: new Date().toDateString()
      };
      setProgress(initialProgress);
      localStorage.setItem(cacheKey, JSON.stringify(initialProgress));
    }
  }, [user, userProfile?.progress]);

  // 4. Load files relevant to selectedModuleId
  useEffect(() => {
    if (user && selectedModuleId) {
      fetchModuleSpecificFiles();
    }
  }, [user, selectedModuleId]);

  const fetchModuleSpecificFiles = async () => {
    if (!user) return;
    setCurrModFilesLoading(true);
    setCurrModFilesError(null);

    const tag = "module_" + selectedModuleId;

    if (isFirebaseConfigured && db) {
      try {
        const q = query(collection(db, "users", user.uid, "files"));
        const snapshot = await getDocs(q);
        const list: UserFile[] = [];
        snapshot.forEach((doc) => {
          const item = doc.data() as UserFile;
          if (item.moduleId === tag) {
            list.push(item);
          }
        });
        list.sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime());
        setCurrModFiles(list);
      } catch (err: any) {
        setCurrModFilesError("Gagal melacak tugas modul: " + err.message);
      } finally {
        setCurrModFilesLoading(false);
      }
    } else {
      // Sandbox
      const localStore = localStorage.getItem(`arami_local_files_${user.uid}`);
      if (localStore) {
        const all: UserFile[] = JSON.parse(localStore);
        const filtered = all.filter(f => f.moduleId === tag);
        setCurrModFiles(filtered);
      } else {
        setCurrModFiles([]);
      }
      setCurrModFilesLoading(false);
    }
  };

  const saveProgress = async (newProgress: UserProgress) => {
    setProgress(newProgress);
    const cacheKey = user ? `syriac_progress_${user.uid}` : "syriac_progress_sandbox";
    localStorage.setItem(cacheKey, JSON.stringify(newProgress));
    
    if (user && isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "users", user.uid), { progress: newProgress }, { merge: true });
      } catch (err) {
        console.error("Gagal menyimpan kemajuan ke cloud:", err);
      }
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus seluruh kemajuan belajar? Tindakan ini bersifat permanen.")) {
      const resetState: UserProgress = {
        completedModules: [],
        quizHighScores: {},
        savedVocabulary: [],
        streak: 1,
        lastActive: new Date().toDateString()
      };
      saveProgress(resetState);
      setIsQuizMode(false);
    }
  };

  const handleRefreshProfile = async () => {
    // Trigger update components manually if needed or re-read local storage
    if (!isFirebaseConfigured) {
      const savedUser = localStorage.getItem("arami_demo_auth_user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        const savedProf = localStorage.getItem(`arami_sb_profile_${parsed.uid}`);
        if (savedProf) {
          setUserProfile(JSON.parse(savedProf));
        }
      }
    }
  };

  // Convert File to Base64 helper
  const getBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  // Client-side file uploading inside specific module
  const handleModFileUpload = async (e: React.ChangeEvent<HTMLInputElement> | React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCurrModFilesError(null);
    setModFileDragOver(false);

    if (!user) return;
    let rawFile: File | null = null;

    if ("files" in e.target && e.target.files) {
      rawFile = e.target.files[0];
    } else if ("dataTransfer" in e && e.dataTransfer.files) {
      rawFile = e.dataTransfer.files[0];
    }

    if (!rawFile) return;

    // Limit size is 1MB to enforce smooth database payload
    if (rawFile.size > 1.2 * 1024 * 1024) {
      setCurrModFilesError("Batas dokumen terlampaui. Dokumen tugas latihan di modul maksimal adalah 1.2MB.");
      return;
    }

    setCurrModFilesLoading(true);

    try {
      const fileId = "file_task_" + Date.now();
      const modTag = "module_" + selectedModuleId;

      let fileDataValue = "";
      if (isFirebaseConfigured && db) {
        fileDataValue = await uploadFileToStorage(user.uid, fileId, rawFile);
      } else {
        fileDataValue = await getBase64(rawFile);
      }

      const newFile: UserFile = {
        fileId: fileId,
        userId: user.uid,
        moduleId: modTag, // Bind file strictly to this module!
        fileName: rawFile.name,
        fileSize: rawFile.size,
        fileType: rawFile.type || "application/octet-stream",
        fileData: fileDataValue,
        uploadDate: new Date().toISOString()
      };

      if (isFirebaseConfigured && db) {
        await setDoc(doc(db, "users", user.uid, "files", fileId), newFile);
        fetchModuleSpecificFiles();
      } else {
        // Sandbox local simulation
        const localStore = localStorage.getItem(`arami_local_files_${user.uid}`);
        const all: UserFile[] = localStore ? JSON.parse(localStore) : [];
        all.push(newFile);
        localStorage.setItem(`arami_local_files_${user.uid}`, JSON.stringify(all));
        fetchModuleSpecificFiles();
      }
    } catch (err: any) {
      setCurrModFilesError("Pengunggahan gagal: " + err.message);
      setCurrModFilesLoading(false);
    }
  };

  // Delete specific module file
  const handleDeleteModFile = async (fileId: string) => {
    if (!window.confirm("Apakah Anda yakin ingin menghapus berkas latihan modul ini?")) return;

    if (isFirebaseConfigured && db) {
      try {
        const fileObj = currModFiles.find(f => f.fileId === fileId);
        if (fileObj) {
          await deleteFileFromStorage(user.uid, fileId, fileObj.fileName);
        }
        await deleteDoc(doc(db, "users", user.uid, "files", fileId));
        fetchModuleSpecificFiles();
      } catch (err: any) {
        alert("Gagal menghapus file: " + err.message);
      }
    } else {
      const localStore = localStorage.getItem(`arami_local_files_${user.uid}`);
      if (localStore) {
        const all: UserFile[] = JSON.parse(localStore);
        const filtered = all.filter(f => f.fileId !== fileId);
        localStorage.setItem(`arami_local_files_${user.uid}`, JSON.stringify(filtered));
        fetchModuleSpecificFiles();
      }
    }
  };

  // Sign out helper
  const handleLogOut = async () => {
    if (isFirebaseConfigured && auth) {
      try {
        await signOut(auth);
        setUser(null);
        setUserProfile(null);
        setActiveTab("dashboard");
      } catch (err: any) {
        console.error("Gagal melakukan sign out:", err);
      }
    } else {
      localStorage.removeItem("arami_demo_auth_user");
      setUser(null);
      setUserProfile(null);
      setActiveTab("dashboard");
    }
  };

  const getModuleProgressPercent = () => {
    if (modules.length === 0) return 0;
    return Math.round((progress.completedModules.length / modules.length) * 100);
  };

  const currentModule = modules.find(m => m.id === selectedModuleId) || modules[0] || syriacModules[0];

  // Quiz calculations
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswered) return;
    const correct = currentModule.quizzes[currentQuizIndex].correctAnswer;
    if (selectedOption === correct) {
      setQuizScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNextQuizQuestion = () => {
    if (currentQuizIndex < currentModule.quizzes.length - 1) {
      setSelectedOption(null);
      setIsAnswered(false);
      setCurrentQuizIndex(prev => prev + 1);
    } else {
      const isLastAnswerCorrect = selectedOption === currentModule.quizzes[currentQuizIndex].correctAnswer;
      const finalScore = quizScore + (isLastAnswerCorrect ? 1 : 0);
      const totalQuestions = currentModule.quizzes.length || 1;
      const scorePercent = Math.round((finalScore / totalQuestions) * 105) > 100 
        ? Math.min(100, Math.round((finalScore / totalQuestions) * 100))
        : Math.round((finalScore / totalQuestions) * 100);
      const passed = scorePercent >= 70;
      
      let updatedCompleted = [...progress.completedModules];
      if (passed && !updatedCompleted.includes(currentModule.id)) {
        updatedCompleted.push(currentModule.id);
      }

      const updatedScores = {
        ...progress.quizHighScores,
        [currentModule.id]: Math.max(progress.quizHighScores[currentModule.id] || 0, finalScore)
      };

      const updatedProgress = {
        ...progress,
        completedModules: updatedCompleted,
        quizHighScores: updatedScores
      };

      saveProgress(updatedProgress);
      
      // Set the quiz result instead of setting isQuizMode directly to false
      setQuizResult({
        finalScore,
        totalQuestions,
        passed,
        scorePercent
      });
    }
  };

  // Level Final Exam Handlers
  const handleStartLevelExam = () => {
    if (!selectedLevelExam) return;
    setLevelExamCurrentIndex(0);
    setLevelExamSelectedOption(null);
    setIsLevelExamAnswered(false);
    setLevelExamScore(0);
    setIsLevelExamActive(true);
    setLevelExamResult(null);
  };

  const handleLevelExamCheckAnswer = () => {
    if (levelExamSelectedOption === null || isLevelExamAnswered) return;
    const questions = LEVEL_EXAMS[selectedLevelExam!];
    const isCorrect = levelExamSelectedOption === questions[levelExamCurrentIndex].correctAnswer;
    if (isCorrect) {
      setLevelExamScore(prev => prev + 1);
    }
    setIsLevelExamAnswered(true);
  };

  const handleLevelExamNext = () => {
    const questions = LEVEL_EXAMS[selectedLevelExam!];
    if (levelExamCurrentIndex < questions.length - 1) {
      setLevelExamSelectedOption(null);
      setIsLevelExamAnswered(false);
      setLevelExamCurrentIndex(prev => prev + 1);
    } else {
      // Calculate final exam outcome
      const finalScore = levelExamScore;
      const scorePercent = Math.round((finalScore / 10) * 100);
      const passed = scorePercent >= 70;

      const prevExams = progress.completedLevelExams || [];
      const updatedExams = [...prevExams];
      if (passed && !updatedExams.includes(selectedLevelExam!)) {
        updatedExams.push(selectedLevelExam!);
      }

      const prevHighScores = progress.levelExamHighScores || {};
      const updatedHighScores = {
        ...prevHighScores,
        [selectedLevelExam!]: Math.max(prevHighScores[selectedLevelExam!] || 0, finalScore)
      };

      const updatedProgress = {
        ...progress,
        completedLevelExams: updatedExams,
        levelExamHighScores: updatedHighScores
      };

      saveProgress(updatedProgress);

      setLevelExamResult({
        score: finalScore,
        passed,
        scorePercent
      });
      setIsLevelExamActive(false);
    }
  };

  const renderLevelExamInterface = () => {
    if (!selectedLevelExam) return null;

    const questions = LEVEL_EXAMS[selectedLevelExam];
    const unlocked = isLevelUnlocked(selectedLevelExam);
    const completedLevelExams = progress.completedLevelExams || [];
    const isAlreadyPassed = completedLevelExams.includes(selectedLevelExam);
    const highScore = progress.levelExamHighScores?.[selectedLevelExam] || 0;

    // A1, A2, B1 Syriac titles
    const syriacNames: Record<"A1" | "A2" | "B1", { title: string, subtitle: string }> = {
      A1: { title: "ܫܶܐܠܳܐ ܕ݁ܫܽܘܪܳܝܳܐ", subtitle: "Ujian Kelulusan Tingkat Dasar - Beginner (A1)" },
      A2: { title: "ܫܶܐܠܳܐ ܕ݁ܶܡܨܳܥܳܝܳܐ", subtitle: "Ujian Kelulusan Tingkat Menengah - Intermediate (A2)" },
      B1: { title: "ܫܶܐܠܳܐ ܕ݁ܰܡܩܰܕ݁ܡܳܐ", subtitle: "Ujian Kelulusan Tingkat Lanjut - Threshold (B1)" },
    };

    const currentSyriac = syriacNames[selectedLevelExam];

    // Sub-view 1: Result screen
    if (levelExamResult) {
      return (
        <div className="space-y-8 animate-fade-in text-center p-4">
          <div className="flex justify-center mb-2">
            <div className={`p-5 rounded-full ${levelExamResult.passed ? "bg-amber-100/80 text-amber-600 animate-bounce" : "bg-rose-100 text-rose-500"}`}>
              {levelExamResult.passed ? <Trophy className="w-16 h-16" /> : <AlertCircle className="w-16 h-16" />}
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-serif font-extrabold text-[#3D3A33]">
              {levelExamResult.passed ? "Selamat, Anda Lulus!" : "Belum Berhasil Kelulusan"}
            </h2>
            <p className="text-[#8A8471] text-xs max-w-md mx-auto leading-relaxed">
              {levelExamResult.passed
                ? `Luar biasa! Anda telah menyelesaikan seluruh rangkaian evaluasi akademik komprehensif Bahasa Arami untuk Level ${selectedLevelExam} dengan standar kelulusan yang murni.`
                : `Sayang sekali Anda memperoleh skor di bawah batas kompetensi minimal 70% (minimal 7 soal benar). Mari tinjau materi dan coba lagi.`}
            </p>
          </div>

          <div className="bg-[#FCFBF8] border-2 border-[#E8E4D9] rounded-2xl p-6 max-w-sm mx-auto shadow-sm">
            <span className="text-[10px] uppercase font-bold text-[#8A8471] tracking-wider font-mono">Hasil Laporan Akademik</span>
            <div className="text-4xl font-extrabold text-[#5A5A40] font-sans mt-2 mb-1">
              {levelExamResult.score} / 10
            </div>
            <p className="text-xs font-semibold text-amber-700">
              Skor Persentase: {levelExamResult.scorePercent}%
            </p>
            <div className="mt-3">
              <span className={`inline-block text-xs font-extrabold px-4 py-1.5 rounded-full text-white uppercase tracking-wider ${
                levelExamResult.passed ? "bg-emerald-600 shadow" : "bg-rose-500"
              }`}>
                {levelExamResult.passed ? "Status: LULUS" : "Status: TIDAK LULUS"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <button
              onClick={() => {
                setSelectedLevelExam(null);
              }}
              className="px-6 py-3 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#5A5A40] text-xs sm:text-sm font-extrabold rounded-xl transition-all cursor-pointer"
            >
              Kembali ke Silabus
            </button>

            {levelExamResult.passed ? (
              <button
                onClick={() => {
                  setLevelCertificateToOpen(selectedLevelExam);
                  setLevelCertificateOpen(true);
                }}
                className="bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <Award className="w-4 h-4 text-white" />
                Cetak E-Sertifikat Level {selectedLevelExam}
              </button>
            ) : (
              <button
                onClick={handleStartLevelExam}
                className="bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-white" />
                Ulangi Ujian Level
              </button>
            )}
          </div>
        </div>
      );
    }

    // Sub-view 2: Active Exam Screen
    if (isLevelExamActive) {
      const currentQ = questions[levelExamCurrentIndex];
      const isCorrectCheck = levelExamSelectedOption === currentQ.correctAnswer;

      return (
        <div className="space-y-6 animate-fade-in font-sans">
          {/* Header Progress block */}
          <div className="border-b border-[#F1EEE6] pb-4 flex justify-between items-center flex-wrap gap-2">
            <div>
              <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                Ujian Evaluasi Kelulusan • Level {selectedLevelExam}
              </span>
              <h3 className="text-[#3D3A33] font-serif font-extrabold text-lg mt-1">
                Kuis Evaluasi {levelExamCurrentIndex + 1} dari 10
              </h3>
            </div>
            {/* Real Progress indicator */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#8A8471]">
                Progres: {Math.round(((levelExamCurrentIndex) / 10) * 100)}%
              </span>
              <div className="w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="bg-amber-500 h-full transition-all duration-700 ease-out" 
                  style={{ width: `${((levelExamCurrentIndex) / 10) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Question Text block */}
          <div className="bg-[#FDFCF9] border-2 border-[#F1EEE6] rounded-2xl p-5 shadow-sm space-y-4">
            <h4 className="text-[#3D3A33] font-extrabold text-sm sm:text-base leading-relaxed">
              {currentQ.question}
            </h4>
            
            {/* Options grid */}
            <div className="grid grid-cols-1 gap-3 font-sans mt-4">
              {currentQ.options.map((option, idx) => {
                const isSelected = levelExamSelectedOption === idx;
                const isCorrect = idx === currentQ.correctAnswer;

                let optStyle = "border-[#D1CCBD] hover:border-[#5A5A40] bg-white text-[#3D3A33]";
                if (isSelected) optStyle = "border-amber-500 ring-2 ring-[#F1EEE6] bg-amber-50/20 text-amber-950";
                if (isLevelExamAnswered) {
                  if (isCorrect) optStyle = "border-emerald-600 bg-emerald-55 text-emerald-950 ring-2 ring-emerald-50";
                  else if (isSelected) optStyle = "border-rose-600 bg-rose-50 text-rose-950 ring-2 ring-rose-50";
                }

                return (
                  <button
                    key={idx}
                    disabled={isLevelExamAnswered}
                    onClick={() => setLevelExamSelectedOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between gap-3 cursor-pointer ${optStyle}`}
                  >
                    <span>{option}</span>
                    <div className="shrink-0">
                      {isLevelExamAnswered && isCorrect && <Check className="w-5 h-5 text-emerald-600" />}
                      {isLevelExamAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-rose-500" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Answer Feed explanation block */}
            {isLevelExamAnswered && (
              <div className={`p-4 rounded-xl border text-xs leading-relaxed mt-4 animate-fade-in ${
                isCorrectCheck ? "bg-emerald-50 border-emerald-100 text-emerald-800" : "bg-rose-50 border-rose-100 text-rose-800"
              }`}>
                <strong>{isCorrectCheck ? "✓ Benar sekali!" : "✗ Jawaban kurang tepat!"}</strong>{" "}
                {currentQ.explanation}
              </div>
            )}
          </div>

          {/* Action trigger footer */}
          <div className="pt-6 border-t border-[#E8E4D9] flex justify-between items-center">
            <button
              onClick={() => {
                setIsLevelExamActive(false);
                setLevelExamSelectedOption(null);
                setIsLevelExamAnswered(false);
                setSelectedLevelExam(null);
              }}
              className="px-4 py-2 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs font-bold rounded-xl cursor-pointer"
            >
              Keluar Ujian
            </button>

            {!isLevelExamAnswered ? (
              <button
                onClick={handleLevelExamCheckAnswer}
                disabled={levelExamSelectedOption === null}
                className="bg-amber-600 disabled:bg-slate-200 hover:bg-amber-700 disabled:text-slate-400 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer shadow-md"
              >
                Kirim & Periksa Jawaban
              </button>
            ) : (
              <button
                onClick={handleLevelExamNext}
                className="bg-[#2D2A26] hover:bg-[#3D3A33] text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer shadow-md"
              >
                {levelExamCurrentIndex === 9 ? "Selesaikan Ujian" : "Pertanyaan Berikutnya"}
              </button>
            )}
          </div>
        </div>
      );
    }

    // Sub-view 3: Welcomes & Instruction Screen
    const missingModules = modules
      .filter(m => m.category === `Level ${selectedLevelExam}`)
      .filter(m => !progress.completedModules.includes(m.id));

    return (
      <div className="space-y-6 animate-fade-in text-center py-6">
        <div className="flex justify-center">
          <span className="text-4xl text-amber-500 animate-pulse">👑</span>
        </div>

        <div className="border-b border-[#F1EEE6] pb-4">
          <div className="text-2xl font-bold text-amber-700 tracking-wider font-serif py-1 animate-fade-in">
            {currentSyriac.title}
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#3D3A33] font-serif leading-tight">
            Ujian Akhir Kelulusan Level {selectedLevelExam}
          </h2>
          <p className="text-[#8A8471] text-xs mt-1 leading-relaxed font-sans font-semibold">
            {currentSyriac.subtitle}
          </p>
        </div>

        {/* Locked status logic */}
        {!unlocked ? (
          <div className="bg-rose-50/50 border-2 border-rose-100 rounded-3xl p-6 max-w-lg mx-auto shadow-sm space-y-4">
            <div className="flex justify-center text-rose-500">
              <Lock className="w-12 h-12" />
            </div>
            <h4 className="font-bold text-[#3D3A33] text-sm sm:text-base font-serif">Kunci Pelatihan Akademik Belum Terbuka</h4>
            <p className="text-xs text-[#8A8471] max-w-md mx-auto leading-relaxed">
              Anda wajib menyelesaikan seluruh kuis materi pembelajaran Bahasa Aram tingkat {selectedLevelExam} terlebih dahulu dengan ketuntasan penuh sebelum diizinkan menguji kelulusan komprehensif ini.
            </p>
            <div className="space-y-2 text-left bg-white border border-rose-100 rounded-2xl p-4 mt-2">
              <span className="text-[9px] uppercase font-bold text-rose-600 tracking-wider block mb-1">
                Sisa Modul yang Wajib Digarap:
              </span>
              <div className="max-h-40 overflow-y-auto space-y-1.5 scrollbar-thin">
                {missingModules.map(m => (
                  <div key={m.id} className="flex items-center gap-1.5 text-xs text-rose-950 font-sans font-semibold">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping mr-1" />
                    <span>Modul {m.id}: {m.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-lg mx-auto">
            {/* Unlocked instruction board */}
            <div className="bg-[#FCFBF8] border-2 border-[#E8E4D9] rounded-3xl p-6 text-left space-y-4 shadow-sm">
              <h4 className="font-extrabold text-[#5A5A40] text-sm sm:text-base font-serif">Aturan Ujian Kelulusan Resmi</h4>
              <ul className="space-y-2 text-xs text-[#3D3A33] font-medium leading-relaxed list-disc list-inside">
                <li>Terdiri dari <strong>10 butir pertanyaan pilihan ganda</strong>.</li>
                <li>Mencakup seluruh tata bahasa, kosa kata, sapaan murni, dan teologi historis Level {selectedLevelExam}.</li>
                <li><strong>Skor kelulusan minimal adalah 70%</strong> (menjawab 7 atau lebih pertanyaan secara benar).</li>
                <li>Jika dinyatakan lulus, Anda berhak memperoleh <strong>E-Sertifikat Kelulusan Level Resmi</strong> dengan nama pribadi Anda.</li>
              </ul>
            </div>

            {/* Already passed badge showcase */}
            {isAlreadyPassed && (
              <div className="bg-gradient-to-r from-emerald-50 via-[#FCFBF8] to-emerald-100/30 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between gap-4 text-left shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-600 text-white rounded-xl">
                    <Award className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h5 className="font-bold text-emerald-950 text-xs">✓ Anda Telah Lulus Level Ini!</h5>
                    <p className="text-[10px] text-emerald-800">Skor Tertinggi Anda: {highScore}/10 ({highScore * 10}%)</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setLevelCertificateToOpen(selectedLevelExam);
                    setLevelCertificateOpen(true);
                  }}
                  className="bg-[#D4AF37] hover:bg-amber-600 text-white font-extrabold text-[10px] px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap uppercase"
                >
                  Cetak E-Sertifikat
                </button>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <button
                onClick={() => setSelectedLevelExam(null)}
                className="px-6 py-2.5 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs font-bold rounded-xl cursor-pointer"
              >
                Kembali ke Silabus
              </button>
              
              <button
                onClick={handleStartLevelExam}
                className="bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 text-white" />
                {isAlreadyPassed ? "Ulangi Ujian Kelulusan" : "Mulai Ujian Kelulusan"}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Access check definitions
  const isAdmin = userProfile?.role === "admin";
  const isApproved = userProfile?.status === "APPROVED" || isAdmin;
  const isPending = userProfile?.status === "PENDING";
  const isRevise = userProfile?.status === "REVISE";
  const isDisapproved = userProfile?.status === "DISAPPROVED";

  // Base64 file downloader helper
  const handleDownloadFile = (f: UserFile) => {
    const link = document.createElement("a");
    link.href = f.fileData;
    link.download = f.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Super Admin action handlers
  const handleAddNewModuleInline = async () => {
    const nextId = modules.length > 0 ? Math.max(...modules.map(m => m.id)) + 1 : 1;
    const newMod: Module = {
      id: nextId,
      title: "Tata Bahasa Baru " + nextId,
      titleSyriac: "ܣܘܼܪܝܳܝܳα",
      category: "Level A1",
      summary: "Deskripsi ringkas materi bab baru.",
      introduction: "Pendahuluan pilar baru tata bahasa.",
      content: "Uraian teoretis komprehensif aksara dan tata bahasa bimbingan.",
      keyRules: ["Aturan dasar 1", "Aturan dasar 2"],
      vocabulary: [],
      examples: [],
      quizzes: [
        {
          id: 1,
          question: "Apakah nama materi bab baru ini?",
          options: ["Tata Bahasa Baru", "Manuskrip Kuno", "LMS Arami"],
          correctAnswer: "Tata Bahasa Baru",
          explanation: "Menandakan judul rujukan bab baru yang sukses dibuat."
        }
      ],
      attachments: []
    } as any;
    const updated = [...modules, newMod].sort((a, b) => a.id - b.id);
    setModules(updated);
    setSelectedModuleId(nextId);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(nextId)), newMod);
      } catch (err) {
        console.error("Gagal menyinkronkan modul baru ke Cloud:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updated));
    }
  };

  const handleDeleteModuleInline = async (id: number) => {
    if (!window.confirm(`Hapus Modul ${id} beserta kuis dan lampirannya secara permanen?`)) return;
    const updated = modules.filter(m => m.id !== id);
    setModules(updated);
    if (isFirebaseConfigured && db) {
      try {
        await deleteDoc(doc(db, "modules", String(id)));
      } catch (err) {
        console.error("Gagal menghapus modul dari Cloud:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updated));
    }
    if (selectedModuleId === id && updated.length > 0) {
      setSelectedModuleId(updated[0].id);
    }
  };

  const handleSaveMainDetails = async () => {
    const updated = modules.map(m => {
      if (m.id === selectedModuleId) {
        return {
          ...m,
          title: adminEditTitle,
          titleSyriac: adminEditTitleSyriac,
          category: adminEditCategory,
          summary: adminEditSummary,
          introduction: adminEditIntroduction,
          content: adminEditContent,
          embedCode: adminEditEmbedCode
        };
      }
      return m;
    });
    setModules(updated);
    setIsAdminEditingMain(false);
    const target = updated.find(m => m.id === selectedModuleId);
    if (target) {
      if (isFirebaseConfigured && db) {
        try {
          await setDoc(doc(db, "modules", String(selectedModuleId)), target);
        } catch (err) {
          console.error("Gagal memperbarui modul di Cloud:", err);
        }
      } else {
        localStorage.setItem("arami_custom_modules", JSON.stringify(updated));
      }
    }
  };

  const handleAddKeyRule = async () => {
    if (!newKeyRuleText.trim()) return;
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentRules = target.keyRules || [];
    const updatedRules = [...currentRules, newKeyRuleText.trim()];
    const updatedMod = { ...target, keyRules: updatedRules };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    setNewKeyRuleText("");
    setIsAddingKeyRule(false);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleDeleteKeyRule = async (index: number) => {
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentRules = target.keyRules || [];
    const updatedRules = currentRules.filter((_, idx) => idx !== index);
    const updatedMod = { ...target, keyRules: updatedRules };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleAddVocabInline = async () => {
    if (!newVocabSyriac.trim() || !newVocabTranslit.trim() || !newVocabMeaning.trim()) return;
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentVocab = target.vocabulary || [];
    const updatedVocab = [...currentVocab, {
      syriac: newVocabSyriac.trim(),
      translit: newVocabTranslit.trim(),
      meaning: newVocabMeaning.trim()
    }];
    const updatedMod = { ...target, vocabulary: updatedVocab };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    setNewVocabSyriac("");
    setNewVocabTranslit("");
    setNewVocabMeaning("");
    setIsAddingVocab(false);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleDeleteVocabInline = async (index: number) => {
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentVocab = target.vocabulary || [];
    const updatedVocab = currentVocab.filter((_, idx) => idx !== index);
    const updatedMod = { ...target, vocabulary: updatedVocab };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleAddExampleInline = async () => {
    if (!newExampleSyriac.trim() || !newExampleTranslit.trim() || !newExamplePhonetic.trim() || !newExampleIndonesian.trim()) return;
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentExamples = target.examples || [];
    const updatedExamples = [...currentExamples, {
      syriac: newExampleSyriac.trim(),
      translit: newExampleTranslit.trim(),
      phonetic: newExamplePhonetic.trim(),
      indonesian: newExampleIndonesian.trim()
    }];
    const updatedMod = { ...target, examples: updatedExamples };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    setNewExampleSyriac("");
    setNewExampleTranslit("");
    setNewExamplePhonetic("");
    setNewExampleIndonesian("");
    setIsAddingExample(false);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleDeleteExampleInline = async (index: number) => {
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    const currentExamples = target.examples || [];
    const updatedExamples = currentExamples.filter((_, idx) => idx !== index);
    const updatedMod = { ...target, examples: updatedExamples };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    setModules(updatedAll);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleAttachmentInlineFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAttachmentError(null);
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 1.5 * 1024 * 1024) {
      setNewAttachmentError("Ukuran maksimal bimbingan berkas lampiran adalah 1.5MB.");
      return;
    }
    setNewAttachmentLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setNewAttachmentBase64(reader.result as string);
      setNewAttachmentLoading(false);
    };
    reader.onerror = () => {
      setNewAttachmentError("Gagal membaca encoder berkas.");
      setNewAttachmentLoading(false);
    };
    reader.readAsDataURL(file);
  };

  const handleAddAttachmentInlineSubmit = async () => {
    if (!newAttachmentName.trim()) return;
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    
    let url = newAttachmentUrl.trim();
    if (["teks", "pdf", "mp3", "mp4"].includes(newAttachmentType) && newAttachmentBase64) {
      url = newAttachmentBase64;
    }
    if (!url) {
      alert("Masukkan tautan atau pilih unggahtan berkas rujukan.");
      return;
    }
    
    const newAttachmentItem = {
      id: "media_inline_" + Date.now(),
      name: newAttachmentName.trim(),
      type: newAttachmentType,
      url: url,
      size: newAttachmentBase64 ? Math.round(newAttachmentBase64.length * 0.75) : 0,
      fileType: newAttachmentType === "pdf" ? "application/pdf" : newAttachmentType === "mp3" ? "audio/mp3" : newAttachmentType === "mp4" ? "video/mp4" : "text/plain",
      uploadDate: new Date().toISOString()
    };
    
    const activeAttached = (target as any).attachments || [];
    const updatedAttached = [...activeAttached, newAttachmentItem];
    const updatedMod = { ...target, attachments: updatedAttached };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    
    setModules(updatedAll);
    setNewAttachmentName("");
    setNewAttachmentUrl("");
    setNewAttachmentBase64("");
    setIsAddingAttachmentInline(false);
    
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  const handleDeleteAttachmentInline = async (attachmentId: string) => {
    if (!window.confirm("Hapus lampiran materi rujukan ini?")) return;
    const target = modules.find(m => m.id === selectedModuleId);
    if (!target) return;
    
    const activeAttached = (target as any).attachments || [];
    const updatedAttached = activeAttached.filter((a: any) => a.id !== attachmentId);
    const updatedMod = { ...target, attachments: updatedAttached };
    const updatedAll = modules.map(m => m.id === selectedModuleId ? updatedMod : m);
    
    setModules(updatedAll);
    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(selectedModuleId)), updatedMod);
      } catch (err) {
        console.error("Gagal Cloud sync:", err);
      }
    } else {
      localStorage.setItem("arami_custom_modules", JSON.stringify(updatedAll));
    }
  };

  // Layout rendering blocker during initial Auth Check
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F4F1EA] flex flex-col items-center justify-center p-8 font-sans space-y-4 text-center">
        <Loader2 className="w-12 h-12 text-[#5A5A40] animate-spin" />
        <strong className="text-sm font-bold text-[#3D3A33] font-serif">Mempersiapkan Dokumen Akademi Sastra Arami...</strong>
        <p className="text-[#8A8471] text-xs max-w-sm">
          Menghubungkan jalur data terenkripsi dan hak kredensial aman dari Cloud Run server.
        </p>
      </div>
    );
  }

  // 1. Not Logged In state: Redirect block to Welcoming Authentication Portal Gateway
  if (!user) {
    return (
      <AramiAuthGate onSuccess={(mockUser, mockProfile) => {
        setUser(mockUser);
        setUserProfile(mockProfile);
      }} />
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#3D3A33] font-serif" id="applet-viewport">
      
      {/* Dynamic Header Navbar */}
      <header className="sticky top-0 bg-[#EBE7DC]/95 backdrop-blur-md border-b border-[#D1CCBD] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-[#5A5A40] rounded-xl flex items-center justify-center text-white font-bold select-none font-serif text-xl border border-[#494933]">
              ܐ
            </div>
            <div>
              <h1 className="font-extrabold text-[#5A5A40] leading-tight tracking-tight flex items-center gap-1.5 text-base md:text-lg">
                ܠܶܫܳܢܳܐ • KELAS SYRIAC
                <span className="text-[10px] bg-[#E8E4D9] text-[#5A5A40] px-2 py-0.5 rounded-full font-sans font-bold">
                  Indonesian LMS
                </span>
              </h1>
              <p className="text-[10px] text-[#8A8471] font-sans font-medium">Bimbingan Tata Bahasa Akademis oleh Rudolf A. Luhukay</p>
            </div>
          </div>

          {/* Quick Stats Summary */}
          <div className="flex items-center gap-4 text-xs font-sans">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#F9F7F2] border border-[#D1CCBD] px-3 py-1.5 rounded-full font-semibold text-[#5A5A40]">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{progress.streak} Hari Streak</span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#EBE7DC] rounded-xl font-bold border border-[#D1CCBD]/50 text-slate-700">
              <GraduationCap className="w-4.5 h-4.5" />
              <span>Selesai: {getModuleProgressPercent()}%</span>
            </div>

            {/* Profile Avatar Trigger */}
            <button
              onClick={() => { setActiveTab("files"); setIsQuizMode(false); }}
              className="py-1 px-3 bg-[#5A5A40] text-white hover:bg-[#4C4C36] font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="max-w-[120px] truncate">{userProfile?.fullName || "Siswa"}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs Bar */}
        <div className="flex bg-[#EBE7DC] p-1 rounded-2xl border border-[#D1CCBD] shadow-sm max-w-5xl mx-auto mb-8 overflow-x-auto whitespace-nowrap font-sans text-xs sm:text-sm">
          
          <button
            onClick={() => { setActiveTab("dashboard"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "dashboard" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Trophy className="w-4 h-4" />
            Dasbor Utama
          </button>

          <button
            onClick={() => { setActiveTab("modules"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "modules" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Kurikulum Modul Tata Bahasa
          </button>

          <button
            onClick={() => { setActiveTab("keyboard"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "keyboard" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <KeyboardIcon className="w-4 h-4" />
            Papan Ketik Aram
          </button>

          <button
            onClick={() => { setActiveTab("notebook"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "notebook" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <BookMarked className="w-4 h-4" />
            Buku Kosakata
          </button>

          <button
            onClick={() => { setActiveTab("tutor"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "tutor" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/10" />
            Tutor Bot AI
          </button>

          <button
            onClick={() => { setActiveTab("files"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "files" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Database className="w-4 h-4 text-emerald-600 animate-pulse" />
            Berkas & Akun
          </button>

          {/* Persistent Admin Control console (only shown if role is admin) */}
          {isAdmin && (
            <button
              onClick={() => { setActiveTab("admin"); setIsQuizMode(false); }}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-extrabold transition-all cursor-pointer ${
                activeTab === "admin" ? "bg-amber-400 text-slate-900 border border-amber-500" : "bg-yellow-400/20 text-yellow-800 hover:bg-yellow-400"
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              Kelola Kelas (Super Admin)
            </button>
          )}

        </div>

        {/* ACCESS EXCLUSION SHIELD LOCK: Gated for Pending / Revise / Disapproved users */}
        {!isApproved && activeTab !== "dashboard" && activeTab !== "files" ? (
          <div className="bg-white border border-[#E8E4D9] rounded-3xl p-12 text-center max-w-2xl mx-auto space-y-6 shadow-md" id="restrictive-shield-gate">
            <div className="w-20 h-20 bg-amber-50 text-amber-600 border border-amber-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Lock className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-100/50 text-amber-800 px-3 py-1 rounded-full">
                Sesi Akses Tertutup Sementara
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#3D3A33]">Menunggu Kelulusan Dokumen Mendaftar</h3>
              <p className="text-xs text-[#8A8471] leading-relaxed max-w-sm mx-auto font-sans">
                Aturan keselamatan kelas zero-trust melarang pembukaan Silabus, Kamus, Papan Ketik, dan Asisten Tutor AI sebelum profil Anda dikonfirmasi oleh **Rudolf A. Luhukay**.
              </p>
            </div>

            {/* Specific feedback boxes */}
            {isRevise && (
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl max-w-md mx-auto text-xs text-amber-900 leading-relaxed font-serif">
                <strong>Pesan Koreksi Guru Rudolf:</strong> <br />
                <span className="italic block mt-1 bg-white p-2.5 rounded-lg border">"{userProfile?.adminFeedback}"</span>
                <span className="block mt-2.5 text-[10px] font-sans text-amber-700">
                  Silakan buka tab <strong>"Berkas & Akun"</strong> untuk melengkapi justifies motivasi atau memperbarui nama profil belajar Anda.
                </span>
              </div>
            )}

            {isPending && (
              <div className="p-4 bg-sky-50 border border-sky-100 rounded-2xl max-w-md mx-auto text-xs text-sky-800 leading-relaxed font-sans text-center">
                <strong>Status Pendaftaran: PENDING</strong> <br />
                Permohonan mendaftar Anda saat ini sedang dikaji oleh Administrator. Rudolf akan segera meninjau keseriusan belajar Anda dalam 1x24 jam. Terima kasih atas kesabarannya!
              </div>
            )}

            {isDisapproved && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl max-w-md mx-auto text-xs text-red-800 leading-relaxed font-serif">
                <strong>Maaf, Pendaftaran Anda Ditangguhkan / Ditolak.</strong> <br />
                <span>Alasan: "{userProfile?.adminFeedback || "Profil dinilai belum memenuhi kriteria kualifikasi kelas."}"</span>
              </div>
            )}

            <button
              onClick={() => setActiveTab("files")}
              className="py-2 px-6 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5 font-sans"
            >
              Buka Berkas & Perbarui Profil
            </button>
          </div>
        ) : (
          /* ALL SECURE MODULE VIEWS EXECUTING NATIVELY */
          <>
            {/* TAB 1: DASHBOARD */}
            {activeTab === "dashboard" && (
              <div className="space-y-8 animate-fade-in" id="dashboard-routed">
                {/* Custom warning alert at dashboard if not approved yet */}
                {!isApproved && (
                  <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl text-xs flex gap-2 items-start font-sans">
                    <AlertCircle className="w-4.5 h-4.5 shrink-0 text-amber-600 mt-0.5" />
                    <div>
                      <strong>💡 Akun Anda Sedang Dalam Masa Peninjauan Rudolf A. Luhukay:</strong> <br />
                      Sembari menunggu disetujui, Anda diperbolehkan membaca artikel pengantar di bawah ini. Halaman silabus dan tutor bot akan terbuka otomatis sesaat setelah admin menyetujui akun Anda.
                    </div>
                  </div>
                )}

                {/* Dashboard Banner */}
                <div className="bg-gradient-to-br from-[#5A5A40] via-[#494933] to-[#2D2A26] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-lg border border-[#3D3A33]">
                  <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
                  <div className="relative z-10 max-w-3xl space-y-4">
                    <span className="text-xs bg-[#EBE7DC] text-[#5A5A40] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                      Akademi Bahasa Aram-Syriac Indonesia
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">
                      Kuasai Keindahan Bahasa Aram Syriac <br />
                      <span className="text-amber-400">Aksara Yesus & Sastra Timur Klasik</span>
                    </h2>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-serif">
                       Selamat datang di LMS (Learning Management System) terpadu. Mempersembahkan kurikulum modul tata bahasa Aram klasik dalam pengantar tata bahasa Indonesia. Pelajari abjad Alap-Beth, harakat Serto/Madnhaya, hingga analisis frasa doa Bapa Kami secara orisinal bersama program bimbingan Rudolf A. Luhukay.
                    </p>
                    
                    {isApproved && (
                      <div className="pt-2 flex flex-wrap gap-3 font-sans text-xs">
                        <button
                          onClick={() => setActiveTab("modules")}
                          className="bg-[#EBE7DC] hover:bg-[#D1CCBD] text-[#3D3A33] font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow"
                        >
                          Mulai Belajar (Syllabus Lengkap)
                        </button>
                        <button
                          onClick={() => setActiveTab("tutor")}
                          className="bg-white/10 hover:bg-white/20 border border-white/20 text-[#EBE7DC] font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          Buka Konsultasi Tutor AI
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* KPI Metrics */}
                {isApproved && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-2">Modul Selesai</span>
                      <div className="text-3xl font-extrabold text-[#3D3A33] font-mono mb-2">
                        {progress.completedModules.length} <span className="text-xs text-[#8A8471]">/ {modules.length || 20}</span>
                      </div>
                      <div className="w-full bg-[#F1EEE6] rounded-full h-1.5 overflow-hidden">
                        <div 
                          className="bg-[#5A5A40] h-1.5 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${getModuleProgressPercent()}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-2">Hafalan Kosakata</span>
                      <div className="text-3xl font-extrabold text-[#5A5A40] font-mono mb-1">
                        {progress.savedVocabulary?.length || 0} Kata
                      </div>
                      <span className="text-[10px] text-[#817A63] block">Tersimpan di Kamus Notebook</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-1">Ranking Akademis</span>
                      <div className="flex justify-center my-1">
                        <Award className="w-8 h-8 text-[#D1A153]" />
                      </div>
                      <strong className="text-xs font-bold text-[#3D3A33]">
                        {progress.completedModules.length >= 15 ? "Syamas Arami Utama" :
                         progress.completedModules.length >= 8 ? "Cendikiawan Madya" : "Cantrik Pemula"}
                      </strong>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm flex flex-col justify-between text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider">Mulai Ulang Kamus</span>
                      <button
                        onClick={handleResetProgress}
                        className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-1.5 rounded-xl border border-red-200 text-xs transition-colors cursor-pointer"
                      >
                        Mengulang Progress Kelas
                      </button>
                    </div>
                  </div>
                )}

                {/* Fitur Jurnal Harian Sederhana */}
                <DailyJournal 
                  userId={user?.uid || "sandbox"} 
                  userFullName={userProfile?.fullName || "Siswa Arami"} 
                />

                {/* Educational text block */}
                <div className="bg-white border border-[#E8E4D9] rounded-3xl p-6 sm:p-8 space-y-6">
                  <h3 className="font-bold text-lg sm:text-xl font-serif text-[#3D3A33]">
                    Pilar Keilmuan Aksara Sastrawi Arami
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#8A8471] leading-relaxed font-serif">
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">Gaya Tulis Serto Barat</strong>
                      <p className="text-slate-600">
                        Serto merupakan bentuk kursif ringkas nan estetik dari dinasti keagamaan barat. Memiliki keterbacaan yang tinggi serta tata letak harakat yang sangat saksama demi pengucapan suara liturgi kuno.
                      </p>
                    </div>
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">Doa Komunal Konsonantal</strong>
                      <p className="text-slate-600">
                        Setiap abjad merepresentasikan akar kata dasar Semitik yang membentuk makna universal. Belajar bahasa ini menghidupkan kembali pemahaman konteks hermeneutika teologi primer.
                      </p>
                    </div>
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">Bimbingan Terkelola</strong>
                      <p className="text-slate-600">
                        Dengan sistem kurikulum modul berjenjang, asisten bot pintar, serta gudang berkas mandiri, Rudolf A. Luhukay mempersembahkan metode murni, mengayomi setiap langkah studi saksama Anda.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ACTIVE MODULES AND EXAMPLES */}
            {activeTab === "modules" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-fade-in" id="modules-routed">
                
                {/* Modules navigation list */}
                <div className="lg:col-span-4 space-y-4 max-h-[640px] overflow-y-auto pr-2 scrollbar-thin">
                  <div className="p-3 bg-[#5A5A40] text-white rounded-xl flex items-center justify-between gap-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold text-[#F9F7F2]">Silabus Modul Tata Bahasa</span>
                    {isAdmin && (
                      <button
                        onClick={handleAddNewModuleInline}
                        className="py-1 px-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center gap-1 text-[9px] font-bold cursor-pointer"
                        title="Tambah Modul Baru"
                      >
                        <Plus className="w-3 h-3 text-amber-300" />
                        Tambah
                      </button>
                    )}
                  </div>

                  {/* Evaluasi Komprehensif / Quick Exam Access */}
                  <div className="bg-[#FAF8F5] border border-[#D1CCBD]/50 rounded-2xl p-3.5 space-y-2 text-sans shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono font-bold text-[#8A8471] tracking-wider flex items-center gap-1">
                        🏆 Evaluasi Akhir Kelulusan
                      </span>
                      {isAdmin && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-md font-bold uppercase tracking-wider font-sans">
                          Akses Pengajar
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {(["A1", "A2", "B1"] as const).map((lvl) => {
                        const isCompleted = progress.completedLevelExams?.includes(lvl) || false;
                        const isSelected = selectedLevelExam === lvl;
                        const unlocked = isLevelUnlocked(lvl);
                        return (
                          <button
                            key={`quick-access-exam-${lvl}`}
                            onClick={() => {
                              setSelectedLevelExam(lvl);
                              setSelectedModuleId(null as any);
                              setIsQuizMode(false);
                              setIsLevelExamActive(false);
                              setLevelExamResult(null);
                            }}
                            className={`px-2 py-2 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 hover:shadow-sm ${
                              isSelected
                                ? "bg-gradient-to-br from-amber-700 to-amber-600 border-amber-600 text-white shadow-xs"
                                : isCompleted
                                ? "bg-emerald-50 border-emerald-200 text-emerald-800 hover:bg-emerald-100"
                                : unlocked
                                ? "bg-white border-[#D1CCBD]/60 text-[#5A5A40] hover:bg-[#F9F7F2]"
                                : "bg-stone-50 border-[#E8E4D9]/80 text-[#A6A295] opacity-60"
                            }`}
                          >
                            <span className="text-[11px] font-extrabold font-sans">Level {lvl}</span>
                            <span className="text-[8.5px] font-sans font-medium">
                              {isCompleted ? "✓ Lulus" : !unlocked ? "🔒 Kunci" : "🚀 Mulai"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {(() => {
                      const lastA1Id = Math.max(...modules.filter(mod => mod.category === "Level A1").map(mod => mod.id), 0);
                      const lastA2Id = Math.max(...modules.filter(mod => mod.category === "Level A2").map(mod => mod.id), 0);
                      const lastB1Id = Math.max(...modules.filter(mod => mod.category === "Level B1").map(mod => mod.id), 0);
                      
                      return modules.map((m) => {
                        const isCompleted = progress.completedModules.includes(m.id);
                        const isSelected = selectedModuleId === m.id && selectedLevelExam === null;
                        const unlocked = isModuleNavigable(m);
                        
                        return (
                          <React.Fragment key={m.id}>
                            <button
                              onClick={() => {
                                setSelectedModuleId(m.id);
                                setSelectedLevelExam(null);
                                setIsQuizMode(false);
                              }}
                              className={`w-full text-left p-3 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer ${
                                !unlocked
                                  ? "bg-stone-50 border-[#E8E4D9] text-[#A6A295] opacity-80 hover:bg-stone-100"
                                  : isSelected
                                    ? "bg-[#5A5A40] border-[#3D3A33] text-white shadow-md shadow-[#5A5A40]/10"
                                    : "bg-white border-[#E8E4D9] hover:border-[#5A5A40] text-[#3D3A33]"
                              }`}
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <span className={`w-6 h-6 rounded-lg text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                                  !unlocked ? "bg-stone-200 text-stone-500" : isSelected ? "bg-[#4D4D36] text-white" : "bg-[#F1EEE6] text-[#8A8471]"
                                }`}>
                                  {m.id}
                                </span>
                                <div className="min-w-0 font-sans">
                                  <h5 className={`text-xs font-bold truncate ${!unlocked ? "text-stone-500" : isSelected ? "text-white" : "text-[#3D3A33]"}`}>{m.title}</h5>
                                  <span className={`text-[9px] block ${isSelected ? "text-[#E8E4D9]" : "text-[#8A8471]"}`}>{m.category}</span>
                                </div>
                              </div>

                              <div className="shrink-0 flex items-center gap-1.5 relative z-10">
                                {isAdmin && (
                                  <span
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      handleDeleteModuleInline(m.id);
                                    }}
                                    className="p-1 cursor-pointer text-red-400 hover:text-red-600 hover:bg-black/10 rounded transition-all"
                                    title="Hapus Modul"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </span>
                                )}
                                {isCompleted ? (
                                  <CheckCircle2 className={`w-4 h-4 ${isSelected ? "text-amber-300" : "text-emerald-500"}`} />
                                ) : !unlocked ? (
                                  <Lock className="w-3.5 h-3.5 text-stone-400" />
                                ) : (
                                  <span className={`w-2 h-2 rounded-full ${isSelected ? "bg-amber-300" : "bg-amber-600/65"} animate-pulse`} />
                                )}
                              </div>
                            </button>

                            {m.id === lastA1Id && renderLevelExamSidebarItem("A1")}
                            {m.id === lastA2Id && renderLevelExamSidebarItem("A2")}
                            {m.id === lastB1Id && renderLevelExamSidebarItem("B1")}
                          </React.Fragment>
                        );
                      });
                    })()}
                  </div>
                </div>

                {/* Modules core teaching pane */}
                <div className="lg:col-span-8 bg-white border border-[#E8E4D9] rounded-3xl p-6 shadow-sm min-h-[600px] flex flex-col justify-between font-sans">
                  {selectedLevelExam !== null ? (
                    renderLevelExamInterface()
                  ) : !isModuleNavigable(currentModule) ? (
                    <div className="space-y-8 animate-fade-in text-center py-16 px-4 flex flex-col items-center justify-center my-auto">
                      <div className="w-20 h-20 bg-rose-50 text-rose-500 border border-rose-200 rounded-full flex items-center justify-center shadow-sm">
                        <Lock className="w-9 h-9" />
                      </div>
                      <div className="space-y-3 max-w-md mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#3D3A33]">Modul Terkunci</h3>
                        <p className="text-xs text-[#8A8471] leading-relaxed font-sans font-medium">
                          Modul ini belum dapat diakses. Anda wajib meluluskan kuis pada modul sebelumnya dengan standar kelulusan kompetensi murni (minimal 70% atau menjawab benar 7 dari 10 soal) sebelum modul selanjutnya terbuka secara otomatis.
                        </p>
                      </div>
                      <div className="bg-[#FCFBF8] border border-[#E8E4D9] p-4.5 rounded-2xl max-w-sm text-left text-xs text-[#5A5A40] space-y-1">
                        <span className="font-extrabold text-[10px] uppercase tracking-wider block text-[#8A8471]">Prasyarat Pembelajaran:</span>
                        <p className="font-medium">Luluskan seluruh kuis modul pendahulu untuk meretas kunci silabus ini.</p>
                      </div>
                    </div>
                  ) : !isQuizMode ? (
                    <div className="space-y-6">
                      
                      {/* Title block */}
                      <div className="border-b border-[#F1EEE6] pb-4">
                        <div className="flex items-center justify-between gap-4 flex-wrap mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#E8E4D9] text-[#5A5A40] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                              Modul {currentModule.id} • {currentModule.category}
                            </span>
                            {isAdmin && !isAdminEditingMain && (
                              <button
                                onClick={() => {
                                  setIsAdminEditingMain(true);
                                  setAdminEditTitle(currentModule.title);
                                  setAdminEditTitleSyriac(currentModule.titleSyriac);
                                  setAdminEditCategory(currentModule.category);
                                  setAdminEditSummary(currentModule.summary || "");
                                  setAdminEditIntroduction(currentModule.introduction || "");
                                  setAdminEditContent(currentModule.content || "");
                                  setAdminEditEmbedCode(currentModule.embedCode || "");
                                }}
                                className="p-1 text-[#5A5A40] hover:text-[#3D3A33] bg-[#EBE7DC]/50 rounded hover:bg-[#EBE7DC] transition-all cursor-pointer flex items-center"
                                title="Edit Detail Utama Modul"
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          <span className={`text-2xl font-bold text-[#5A5A40] ${getSyriacFontClass()}`} dir="rtl">
                            {currentModule.titleSyriac}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#3D3A33] font-serif">{currentModule.title}</h3>
                        <p className="text-[#8A8471] text-xs leading-relaxed mt-0.5">{currentModule.summary}</p>
                      </div>

                      {/* Interactive Font Selector & Vowel Guide Panel */}
                      <div className="bg-[#F1EEE6]/40 border border-[#E8E4D9] rounded-2xl p-4 font-sans text-xs space-y-3" id="font-vowel-panel">
                        <div className="flex items-center justify-between gap-4 flex-wrap pb-2 border-b border-[#E8E4D9]">
                          <div className="space-y-1">
                            <h4 className="font-extrabold text-[#5A5A40] uppercase tracking-wide text-[10px]">Pilih Font Aksara & Panduan Vokal</h4>
                            <p className="text-[#8A8471] text-[9px]">Pilih jenis font dan fahami pelambangan tanda vokal bimbingan kurikulum.</p>
                          </div>
                          {/* Font switchers */}
                          <div className="flex gap-1.5 bg-white border border-[#D1CCBD] p-1 rounded-xl">
                            <button
                              type="button"
                              onClick={() => setSyriacFont("estrangelo")}
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                syriacFont === "estrangelo"
                                  ? "bg-[#5A5A40] text-white"
                                  : "text-[#8A8471] hover:text-[#3D3A33]"
                              }`}
                            >
                              Estrangelo
                            </button>
                            <button
                              type="button"
                              onClick={() => setSyriacFont("serto")}
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                syriacFont === "serto"
                                  ? "bg-[#5A5A40] text-white"
                                  : "text-[#8A8471] hover:text-[#3D3A33]"
                              }`}
                            >
                              Serto
                            </button>
                            <button
                              type="button"
                              onClick={() => setSyriacFont("madenhoyo")}
                              className={`px-3 py-1 rounded-lg text-[10px] font-bold transition-all cursor-pointer ${
                                syriacFont === "madenhoyo"
                                  ? "bg-[#5A5A40] text-white"
                                  : "text-[#8A8471] hover:text-[#3D3A33]"
                              }`}
                            >
                              Madenhoyo
                            </button>
                          </div>
                        </div>

                        {/* Vowel & script instruction block matching PDF guides */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-start">
                          <div className="md:col-span-4 bg-white border border-[#D1CCBD]/50 p-3 rounded-xl space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Karakteristik Gaya</span>
                            {syriacFont === "estrangelo" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܐܶܣܛܪܰܢܓܶܠܳܐ (Estrangelo Style)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  Aksara tertua dan paling geometris digunakan dalam manuskrip klasik awal. Secara historis tidak menggunakan sistem vokal diakritik penuh, melainkan hanya titik pluralitas (Seyame) atau titik pembeda homograf.
                                </p>
                              </>
                            )}
                            {syriacFont === "serto" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܣܶܪܛܳܐ (Western - Serto)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  Aksara mengalir/kursif versi Barat (Syria Barat). Menggunakan adaptasi huruf vokal Yunani versi kecil yang dilekatkan di atas atau di bawah huruf dasar untuk melambangkan kualitas ucapan vokal.
                                </p>
                              </>
                            )}
                            {syriacFont === "madenhoyo" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܡܲܕ݂ܢܚܵܝܵܐ (Eastern - Nestorian)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  Aksara Timur (Madenhoyo/Madenkhaya) yang digunakan secara tradisional di Irak, Persia Timur, dan liturgi Timur. Menggunakan tatanan titik diakritik yang diatur secara presisi di atas dan dibawah huruf dasar.
                                </p>
                              </>
                            )}
                          </div>

                          <div className="md:col-span-8 space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">Sistem Vokalisasi Terkait (Vowel Marks)</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {syriacFont === "serto" ? (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܰ</span>
                                    <strong className="text-[10px] block font-serif">Pthāḥā (a)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Simbol: ◌ܰ (Greek α)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܳ</span>
                                    <strong className="text-[10px] block font-serif">Zqāp̄ā (o/å)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Simbol: ◌ܳ (Greek ο)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܺ</span>
                                    <strong className="text-[10px] block font-serif">Ḥbāṣā (i)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Simbol: ◌ܺ (Greek η)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܽ</span>
                                    <strong className="text-[10px] block font-serif">Rbāṣā (e)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Simbol: ◌ܽ (Greek ε)</span>
                                  </div>
                                </>
                              ) : syriacFont === "madenhoyo" ? (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܲ</span>
                                    <strong className="text-[10px] block font-serif">Pthāḥā (a)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Dua titik sejajar atas</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܵ</span>
                                    <strong className="text-[10px] block font-serif">Zqāp̄ā (o/â)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Dua titik serong atas</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܼ</span>
                                    <strong className="text-[10px] block font-serif">Ḥbāṣā (i)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Satu titik di bawah</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܹ</span>
                                    <strong className="text-[10px] block font-serif">Rbāṣā (e)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Dua titik serong bawah</span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1 col-span-2">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܿ</span>
                                    <strong className="text-[10px] block font-serif">‘Ṣāṣā ruyāḥā (u)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Satu titik di atas Waw</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1 col-span-2">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܼ</span>
                                    <strong className="text-[10px] block font-serif">‘Ṣāṣā rṣīṣā (u)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">Satu titik di bawah Waw</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {isAdminEditingMain ? (
                        <div className="space-y-4 p-5 bg-[#F9F7F2]/80 border border-[#D1CCBD] rounded-2xl animate-fade-in font-sans text-xs">
                          <h4 className="font-extrabold text-sm text-[#5A5A40] font-serif">Formulir Koreksi Cepat Modul {currentModule.id}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">Judul Bahasa Indonesia:</label>
                              <input 
                                type="text"
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs"
                                value={adminEditTitle}
                                onChange={(e) => setAdminEditTitle(e.target.value)}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">Judul Aram (Syriac):</label>
                              <input 
                                type="text"
                                dir="rtl"
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-sm text-right font-serif font-bold"
                                value={adminEditTitleSyriac}
                                onChange={(e) => setAdminEditTitleSyriac(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">Kategori Level:</label>
                              <select
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white font-semibold text-xs outline-none"
                                value={adminEditCategory}
                                onChange={(e) => setAdminEditCategory(e.target.value as any)}
                              >
                                <option value="Level A1">Level A1</option>
                                <option value="Level A2">Level A2</option>
                                <option value="Level B1">Level B1</option>
                              </select>
                            </div>
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">Abstraksi Ringkas:</label>
                              <input 
                                type="text"
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs"
                                value={adminEditSummary}
                                onChange={(e) => setAdminEditSummary(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-[#8A8471]">Pengantar Kajian:</label>
                            <textarea 
                              rows={3}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs resize-none"
                              value={adminEditIntroduction}
                              onChange={(e) => setAdminEditIntroduction(e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-[#8A8471]">Teori Linguistik & Tata Bahasa (Konten):</label>
                            <textarea 
                              rows={6}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs font-serif leading-relaxed"
                              value={adminEditContent}
                              onChange={(e) => setAdminEditContent(e.target.value)}
                            />
                          </div>
                          <div className="space-y-1.5 p-3.5 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl font-sans text-xs">
                            <label className="font-extrabold text-[#5A5A40] block">Embed Materi Multimedia / Referensi Web (Opsional):</label>
                            <p className="text-[10px] text-[#8A8471] leading-relaxed">
                              Masukkan link YouTube, website interaktif, atau kode draf HTML <code>&lt;iframe&gt;</code>.
                            </p>
                            <textarea 
                              rows={2.5}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none font-mono text-xs"
                              placeholder="Contoh: https://www.youtube.com/embed/... atau <iframe src='...'></iframe>"
                              value={adminEditEmbedCode}
                              onChange={(e) => setAdminEditEmbedCode(e.target.value)}
                            />
                          </div>
                          <div className="flex gap-2 justify-end">
                            <button
                              type="button"
                              onClick={() => {
                                setIsAdminEditingMain(false);
                              }}
                              className="py-1.5 px-3 bg-[#F1EEE6] hover:bg-[#EBE7DC] text-[#8A8471] font-semibold rounded-xl text-xs cursor-pointer border border-[#D1CCBD]"
                            >
                              Batal
                            </button>
                            <button
                              type="button"
                              onClick={handleSaveMainDetails}
                              className="py-1.5 px-4 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                            >
                              <Save className="w-3 h-3 text-amber-300" />
                              Simpan
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Content block */
                        <div className="space-y-4">
                          <div className="bg-[#F1EEE6]/50 rounded-2xl p-4 border border-[#D1CCBD]/30 font-serif text-xs leading-relaxed whitespace-pre-line text-[#3D3A33]">
                            <strong className="text-[#5A5A40] text-[10px] uppercase font-bold tracking-wider font-sans block mb-1">Pengantar Kajian:</strong>
                            {currentModule.introduction}
                          </div>

                          <div className="space-y-2 font-serif text-xs leading-relaxed text-[#3D3A33]/90 whitespace-pre-line bg-[#F9F7F2]/40 p-4 rounded-xl border border-[#D1CCBD]/20">
                            <strong className="text-[#5A5A40] text-[10px] uppercase font-bold tracking-wider font-sans block mb-1">Teori Linguistik & Tata Bahasa:</strong>
                            {currentModule.content}
                          </div>

                          {renderModuleEmbed(currentModule.embedCode)}

                          {/* Rules list */}
                          <div className="p-4 bg-yellow-50/20 border border-[#D1CCBD]/50 rounded-2xl">
                            <div className="flex items-center justify-between gap-1.5 mb-2">
                              <span className="text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider block font-sans">Pedoman Praktis (Aturan Kunci):</span>
                              {isAdmin && !isAddingKeyRule && (
                                <button
                                  onClick={() => setIsAddingKeyRule(true)}
                                  className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer"
                                  title="Tambah Aturan Baru"
                                >
                                  <Plus className="w-3 h-3 text-emerald-600" />
                                  Aturan
                                </button>
                              )}
                            </div>

                            {isAddingKeyRule && (
                              <div className="p-2.5 bg-white border border-amber-200 rounded-xl mb-3 flex items-center gap-2 font-sans text-xs">
                                <input
                                  type="text"
                                  placeholder="Tulis aturan praktis..."
                                  value={newKeyRuleText}
                                  onChange={(e) => setNewKeyRuleText(e.target.value)}
                                  className="flex-1 p-1.5 border border-[#D1CCBD] rounded-lg outline-none max-h-8"
                                />
                                <button 
                                  onClick={handleAddKeyRule}
                                  className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px]"
                                >
                                  Simpan
                                </button>
                                <button 
                                  onClick={() => setIsAddingKeyRule(false)}
                                  className="px-2 py-1 bg-[#F1EEE6] text-[#8A8471] rounded-lg text-[10px] border border-[#D1CCBD]"
                                >
                                  Batal
                                </button>
                              </div>
                            )}

                            <ul className="list-disc list-inside space-y-1 text-xs leading-relaxed text-[#3D3A33] font-serif pl-1">
                              {currentModule.keyRules?.map((r, idx) => (
                                <li key={idx} className="group/item list-none flex items-center justify-between gap-2.5">
                                  <span className="flex items-center gap-1.5">
                                    <span className="text-amber-500">•</span>
                                    <span>{r}</span>
                                  </span>
                                  {isAdmin && (
                                    <button
                                      onClick={() => handleDeleteKeyRule(idx)}
                                      className="p-0.5 text-red-400 hover:text-red-600 opacity-60 hover:opacity-100 transition-all cursor-pointer"
                                      title="Hapus Aturan"
                                    >
                                      <Trash2 className="w-3 h-3" />
                                    </button>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Examples grid table */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-3">
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-widest block font-sans">Contoh Kalimat / Konteks:</span>
                            {isAdmin && !isAddingExample && (
                              <button
                                onClick={() => setIsAddingExample(true)}
                                className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer font-sans"
                                title="Tambah Contoh"
                              >
                                <Plus className="w-3 h-3 text-emerald-600" />
                                Contoh
                              </button>
                            )}
                          </div>

                          {isAddingExample && (
                            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl space-y-2 font-sans text-xs animate-fade-in">
                              <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif">TAMBAH CONTOH BARU</h5>
                              <div className="grid grid-cols-2 gap-2">
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Aram (Syriac): e.g. ܫܠܳܡܳܐ" 
                                  value={newExampleSyriac}
                                  dir="rtl"
                                  onChange={(e) => setNewExampleSyriac(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg text-right font-serif font-bold outline-none text-xs bg-white"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Transliterasi: e.g. Šlāmā" 
                                  value={newExampleTranslit}
                                  onChange={(e) => setNewExampleTranslit(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Fonetika: e.g. shlama" 
                                  value={newExamplePhonetic}
                                  onChange={(e) => setNewExamplePhonetic(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder="B. Indonesia: e.g. Halo" 
                                  value={newExampleIndonesian}
                                  onChange={(e) => setNewExampleIndonesian(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                              </div>
                              <div className="flex justify-end gap-1.5 text-[10px]">
                                <button type="button" onClick={() => setIsAddingExample(false)} className="px-2 py-1 bg-gray-100 rounded border border-[#D1CCBD] cursor-pointer">Batal</button>
                                <button type="button" onClick={handleAddExampleInline} className="px-2.5 py-1 bg-[#5A5A40] hover:bg-[#4C4C36] text-white rounded font-bold cursor-pointer">Simpan</button>
                              </div>
                            </div>
                          )}

                          <div className="space-y-2">
                            {currentModule.examples?.map((ex, i) => (
                              <div key={i} className="p-3 bg-[#F1EEE6] rounded-xl border border-[#D1CCBD]/30 flex justify-between gap-2.5 text-xs font-serif relative">
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <strong className="text-[#3D3A33] block">{ex.translit}</strong>
                                    {isAdmin && (
                                      <button 
                                        onClick={() => handleDeleteExampleInline(i)}
                                        className="p-0.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-all cursor-pointer"
                                        title="Hapus Contoh"
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                  <span className="text-[10px] text-slate-500 block">"{ex.phonetic}"</span>
                                  <span className="text-slate-600 block mt-1 text-[11px]">Artinya: {ex.indonesian}</span>
                                </div>
                                <span className={`text-xl font-bold text-[#5A5A40] ${getSyriacFontClass()}`} dir="rtl">{ex.syriac}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-widest block font-sans">Daftar Kosakata Bab:</span>
                            {isAdmin && !isAddingVocab && (
                              <button
                                onClick={() => setIsAddingVocab(true)}
                                className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer font-sans"
                                title="Tambah Kosakata"
                              >
                                <Plus className="w-3 h-3 text-emerald-600" />
                                Kosakata
                              </button>
                            )}
                          </div>

                          {isAddingVocab && (
                            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl space-y-2 font-sans text-xs animate-fade-in">
                              <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif">TAMBAH KOSAKATA BARU</h5>
                              <div className="grid grid-cols-3 gap-1.5">
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Aram: e.g. ܫܠܡ" 
                                  value={newVocabSyriac}
                                  dir="rtl"
                                  onChange={(e) => setNewVocabSyriac(e.target.value)}
                                  className={`p-1 border border-[#D1CCBD] rounded-lg text-right font-bold text-xs bg-white outline-none ${getSyriacFontClass()}`}
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Transliterasi" 
                                  value={newVocabTranslit}
                                  onChange={(e) => setNewVocabTranslit(e.target.value)}
                                  className="p-1 border border-[#D1CCBD] rounded-lg text-xs bg-white outline-none"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder="Arti" 
                                  value={newVocabMeaning}
                                  onChange={(e) => setNewVocabMeaning(e.target.value)}
                                  className="p-1 border border-[#D1CCBD] rounded-lg text-xs bg-white outline-none"
                                />
                              </div>
                              <div className="flex justify-end gap-1.5 text-[10px]">
                                <button type="button" onClick={() => setIsAddingVocab(false)} className="px-2 py-1 bg-gray-100 rounded border border-[#D1CCBD] cursor-pointer">Batal</button>
                                <button type="button" onClick={handleAddVocabInline} className="px-2.5 py-1 bg-[#5A5A40] hover:bg-[#4C4C36] text-white rounded font-bold cursor-pointer">Simpan</button>
                              </div>
                            </div>
                          )}

                          <div className="grid grid-cols-1 gap-2">
                            {currentModule.vocabulary?.map((v, i) => (
                              <div key={i} className="p-2.5 bg-white border border-[#E8E4D9] rounded-xl flex items-center justify-between text-xs gap-3 font-sans">
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <strong className="text-[#3D3A33] block">{v.translit}</strong>
                                    {isAdmin && (
                                      <button 
                                        onClick={() => handleDeleteVocabInline(i)}
                                        className="p-0.5 text-red-500 hover:text-red-750 transition-colors cursor-pointer"
                                        title="Hapus Kosakata"
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                  <span className="text-[#8A8471] text-[10px] block mt-0.5">{v.meaning}</span>
                                </div>
                                <span className={`text-lg font-bold text-[#3D3A33] ${getSyriacFontClass()}`} dir="rtl">{v.syriac}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* ADMIN-POSTED MODULE MATERIALS & DOWNLOADS (PDF, WORD, EXCEL, MP3, MP4) */}
                      <div className="pt-4 border-t border-[#F1EEE6] space-y-3 font-sans">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-[10px] text-amber-800 uppercase font-bold tracking-wider flex items-center gap-1">
                            📂 Materi Media & Audio Rujukan Guru Rudolf:
                          </span>
                          {isAdmin && !isAddingAttachmentInline && (
                            <button
                              onClick={() => {
                                setIsAddingAttachmentInline(true);
                                setNewAttachmentName("");
                                setNewAttachmentUrl("");
                                setNewAttachmentBase64("");
                                setNewAttachmentError(null);
                              }}
                              className="py-1 px-2 hover:bg-amber-100/50 rounded text-amber-800 transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer border border-amber-200"
                              title="Tambah Lampiran Baru"
                            >
                              <Plus className="w-3 h-3 text-emerald-600" />
                              Tambah Referensi
                            </button>
                          )}
                        </div>

                        {isAdmin && isAddingAttachmentInline && (
                          <div className="p-4 bg-[#F9F7F2]/90 border border-amber-200 rounded-xl space-y-3 font-sans text-xs animate-fade-in shadow-sm">
                            <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif uppercase tracking-wider block">Formulir Media Rujukan Baru (Teks, PDF, MP3, MP4, Web/YouTube)</h5>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-[#8A8471]">Nama Rujukan:</label>
                                <input 
                                  type="text" 
                                  required 
                                  placeholder="Contoh: Audio Nyanyian Kudus Modul" 
                                  value={newAttachmentName}
                                  onChange={(e) => setNewAttachmentName(e.target.value)}
                                  className="p-1.5 w-full border border-[#D1CCBD] rounded-lg bg-white outline-none"
                                />
                              </div>
                              
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-[#8A8471]">Tipe/Format Media:</label>
                                <select 
                                  value={newAttachmentType}
                                  onChange={(e) => {
                                    setNewAttachmentType(e.target.value as any);
                                    setNewAttachmentUrl("");
                                    setNewAttachmentBase64("");
                                    setNewAttachmentError(null);
                                  }}
                                  className="p-1.5 w-full border border-[#D1CCBD] rounded-lg bg-white font-semibold outline-none text-xs"
                                >
                                  <option value="youtube">Sematkan Video YouTube / Video Embed</option>
                                  <option value="embed_web">Sematkan Halaman Web / Web IFrame Embed</option>
                                  <option value="embed_text">Sematkan Teks Catatan / Rujukan Langsung</option>
                                  <option value="mp3">Sematkan Audio MP3 (Pemutar Suara/Lagu)</option>
                                  <option value="mp4">Sematkan Video MP4 (Pemutar Rekaman)</option>
                                  <option value="pdf">PDF (Buku Pegangan / Makalah) - Unduhan</option>
                                  <option value="teks">Teks / Rujukan Tertulis (.txt) - Unduhan</option>
                                  <option value="web_link">Tautan Web Umum (Hanya Link Luar)</option>
                                </select>
                              </div>
                            </div>

                            {newAttachmentType === "embed_text" || newAttachmentType === "embed_code" ? (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block mb-1">
                                  {newAttachmentType === "embed_text" ? "Tulis / Salin Catatan atau Teks Materi di Sini:" : "Tempel / Paste Kode HTML IFrame Kustom:"}
                                </label>
                                <textarea 
                                  rows={newAttachmentType === "embed_code" ? 5 : 4}
                                  placeholder={
                                    newAttachmentType === "embed_text" 
                                      ? "Ketik rujukan atau materi teks yang ingin Anda bagikan langsung ke siswa..." 
                                      : "Tempelkan kode <iframe ...></iframe> atau div HTML rujukan dari Wayground, Google Docs, dsb..."
                                  } 
                                  value={newAttachmentUrl}
                                  onChange={(e) => setNewAttachmentUrl(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg text-xs w-full bg-white outline-none font-mono"
                                />
                                {newAttachmentType === "embed_code" && (
                                  <p className="text-[9px] text-[#817A63] leading-relaxed">
                                    Sistem akan merender kode HTML secara langsung ke siswa tanpa merusak tatanan font Bahasa Arami. Gunakan dengan bijak.
                                  </p>
                                )}
                              </div>
                            ) : ["teks", "pdf", "mp3", "mp4"].includes(newAttachmentType) ? (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block mb-1">Pilih Berkas Komputer (Max 1.5MB):</label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                  <input 
                                    type="file" 
                                    accept={
                                      newAttachmentType === "pdf" ? ".pdf,application/pdf" : 
                                      newAttachmentType === "mp3" ? ".mp3,audio/mpeg,audio/mp3" : 
                                      newAttachmentType === "mp4" ? ".mp4,video/mp4" : 
                                      ".txt,text/plain"
                                    }
                                    onChange={handleAttachmentInlineFileChange}
                                    className="p-1 text-xs w-full bg-slate-50 border rounded"
                                  />
                                  <input 
                                    type="url" 
                                    placeholder="Atau Paste URL Tautan Berkas Langsung..." 
                                    value={newAttachmentUrl}
                                    onChange={(e) => setNewAttachmentUrl(e.target.value)}
                                    className="p-1.5 border border-[#D1CCBD] rounded-lg text-xs w-full bg-white outline-none"
                                  />
                                </div>
                                {newAttachmentLoading && <span className="text-[9px] text-[#5A5A40] animate-pulse block mt-1">Memproses encoder file...</span>}
                                {newAttachmentError && <span className="text-[9px] text-red-500 block mt-1">{newAttachmentError}</span>}
                              </div>
                            ) : (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block">
                                  {newAttachmentType === "youtube" ? "Alamat Video YouTube (URL / Share Link):" : 
                                   newAttachmentType === "embed_web" ? "Alamat Website / Halaman untuk di-Sematkan (URL):" :
                                   "Tautan Web Rujukan:"}
                                </label>
                                <input 
                                  type="url" 
                                  required 
                                  placeholder={
                                    newAttachmentType === "youtube" ? "Contoh: https://www.youtube.com/watch?v=..." :
                                    newAttachmentType === "embed_web" ? "Contoh: https://id.wikipedia.org/wiki/Bahasa_Aram" :
                                    "Contoh: https://situs-rujukan.com"
                                  } 
                                  value={newAttachmentUrl}
                                  onChange={(e) => setNewAttachmentUrl(e.target.value)}
                                  className="p-1.5 w-full border border-[#D1CCBD] rounded-lg bg-white outline-none text-xs"
                                />
                              </div>
                            )}

                            <div className="flex justify-end gap-1.5 pt-1 text-[10px]">
                              <button 
                                type="button" 
                                onClick={() => setIsAddingAttachmentInline(false)} 
                                className="px-2.5 py-1 bg-gray-100 border rounded font-semibold cursor-pointer"
                              >
                                Batal
                              </button>
                              <button 
                                type="button" 
                                onClick={handleAddAttachmentInlineSubmit}
                                disabled={newAttachmentLoading}
                                className="px-3 py-1 bg-[#5A5A40] text-amber-300 hover:bg-[#4C4C36] rounded font-bold cursor-pointer"
                              >
                                Simpan Referensi
                              </button>
                            </div>
                          </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {((currentModule as any).attachments || []).map((item: any) => (
                            <div key={item.id} className={`p-3 bg-amber-50/15 border border-[#D1CCBD]/50 rounded-xl flex flex-col justify-between gap-2 text-xs relative group ${item.type === "embed_code" || item.type === "embed_web" ? "col-span-full sm:col-span-2" : ""}`}>
                              <div className="flex items-start justify-between gap-1.5">
                                <div className="min-w-0">
                                  <strong className="text-slate-800 block truncate font-bold font-serif" title={item.name}>{item.name}</strong>
                                  <span className="text-[9px] text-[#837B64] block font-mono mt-0.5">Format/Jenis: {item.type.toUpperCase() === "EMBED_CODE" ? "MEDIA SEMATAN (IFRAME/HTML)" : item.type.toUpperCase()}</span>
                                </div>
                                {isAdmin && (
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteAttachmentInline(item.id)}
                                    className="p-1 text-red-400 hover:text-red-650 hover:bg-red-50 rounded transition-all cursor-pointer"
                                    title="Hapus referensi rujukan"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>

                              {item.type === "embed_code" ? (
                                <div className="mt-1 space-y-1.5 w-full overflow-hidden">
                                  <div 
                                    className="w-full overflow-auto rounded-xl border border-[#D1CCBD]/40 shadow-inner bg-white p-2 flex flex-col min-h-[300px] font-sans"
                                    dangerouslySetInnerHTML={{ __html: item.url }}
                                  />
                                </div>
                              ) : item.type === "youtube" ? (
                                <div className="mt-1 space-y-1.5 w-full">
                                  {getYouTubeEmbedUrl(item.url) ? (
                                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-[#D1CCBD]/50 bg-black">
                                      <iframe
                                        className="w-full h-full"
                                        src={getYouTubeEmbedUrl(item.url) || ""}
                                        title={item.name}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                      ></iframe>
                                    </div>
                                  ) : (
                                    <div className="pt-1 select-all bg-[#F9F7F2] p-1.5 rounded text-[10px] border font-mono text-red-500 truncate">
                                      Format URL tidak valid: {item.url}
                                    </div>
                                  )}
                                  <a 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="block font-bold text-[10px] text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg p-1.5 text-center border border-red-200 transition-colors"
                                  >
                                    Buka di YouTube ↗ (Masalah Pemutaran)
                                  </a>
                                </div>
                              ) : item.type === "embed_web" ? (
                                <div className="mt-1 space-y-1.5 w-full">
                                  <div className="w-full h-[280px] rounded-xl overflow-hidden shadow-inner border border-[#D1CCBD]/50 bg-white">
                                    <iframe
                                      className="w-full h-full border-0"
                                      src={item.url}
                                      title={item.name}
                                      loading="lazy"
                                    ></iframe>
                                  </div>
                                  <a 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="block font-bold text-[10px] text-[#5A5A40] hover:text-[#3D3A33] bg-amber-50 hover:bg-amber-100 rounded-lg p-1.5 text-center border border-[#D1CCBD] transition-colors"
                                  >
                                    Buka Situs di Tab Baru ↗
                                  </a>
                                </div>
                              ) : item.type === "embed_text" ? (
                                <div className="mt-1 w-full bg-white border border-[#D1CCBD]/40 rounded-xl p-2.5 max-h-[180px] overflow-y-auto shadow-inner text-xs leading-relaxed text-[#3D3A33] font-sans whitespace-pre-wrap">
                                  {item.url}
                                </div>
                              ) : item.type === "mp3" ? (
                                <div className="mt-1 space-y-1 w-full bg-white p-2 border border-[#D1CCBD]/40 rounded-xl shadow-sm">
                                  <audio controls className="w-full h-8" src={item.url} />
                                  <button
                                    onClick={() => handleDownloadFile(item)}
                                    className="w-full text-center text-[9px] font-bold text-[#8A8471] hover:text-[#3D3A33] mt-1 underline cursor-pointer"
                                  >
                                    Unduh File Audio MP3 ⤓
                                  </button>
                                </div>
                              ) : item.type === "mp4" ? (
                                <div className="mt-1 space-y-1.5 w-full">
                                  <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-[#D1CCBD]/50 bg-black">
                                    <video controls className="w-full h-full" src={item.url}></video>
                                  </div>
                                  <button
                                    onClick={() => handleDownloadFile(item)}
                                    className="w-full font-bold text-[10px] text-center bg-emerald-50 text-emerald-700 py-1.5 rounded-lg border border-emerald-200 hover:bg-emerald-100 transition-colors cursor-pointer"
                                  >
                                    Unduh Video MP4 ⤓
                                  </button>
                                </div>
                              ) : item.type === "pdf" ? (
                                <div className="mt-1 space-y-1.5 w-full">
                                  {item.url && item.url.startsWith("data:application/pdf") ? (
                                    <div className="w-full h-[200px] rounded-xl overflow-hidden border border-[#D1CCBD]/40 shadow-inner bg-white">
                                      <object data={item.url} type="application/pdf" className="w-full h-full">
                                        <embed src={item.url} type="application/pdf" className="w-full h-full" />
                                      </object>
                                    </div>
                                  ) : null}
                                  <button
                                    onClick={() => handleDownloadFile(item)}
                                    className="w-full py-1.5 px-3 bg-emerald-50 text-emerald-800 font-bold border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                                  >
                                    <Download className="w-3 h-3" />
                                    Buka / Unduh Dokumen PDF
                                  </button>
                                </div>
                              ) : item.type === "web_link" ? (
                                <a 
                                  href={item.url} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="w-full font-bold py-1.5 px-3 text-center bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-[10px] cursor-pointer"
                                >
                                  Buka Tautan Rujukan Luar ↗
                                </a>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleDownloadFile(item)}
                                  className="w-full font-bold py-1.5 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <Download className="w-3 h-3" />
                                  Kaji / Unduh Berkas
                                </button>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* ACTIVE TASK FILE UPLOAD AREA FOR STUDENTS INDIVIDUALLY FOR THIS MODULE */}
                      {!isAdmin && (
                        <div className="p-5 border border-dashed border-[#D1CCBD] bg-[#F9F7F2]/40 rounded-2xl space-y-4 font-sans text-xs mt-4">
                          <div className="space-y-0.5">
                            <h4 className="font-extrabold text-[#5A5A40] font-serif text-sm">Formulir Kirim Tugas Latihan Modul {currentModule.id}</h4>
                            <p className="text-slate-500 text-[11px]">Unggah berkas Word, Excel, PDF, atau gambar latihan latihan modul di sini untuk dikaji Bapak Rudolf.</p>
                          </div>

                          {/* Drag and Drop */}
                          <div
                            onDragOver={(e) => { e.preventDefault(); setModFileDragOver(true); }}
                            onDragLeave={() => setModFileDragOver(false)}
                            onDrop={handleModFileUpload}
                            className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer relative ${
                              modFileDragOver ? "bg-[#EBE7DC] border-[#5A5A40]" : "bg-white border-[#D1CCBD] hover:bg-[#F1EEE6]/20"
                            }`}
                          >
                            <input 
                              type="file"
                              onChange={handleModFileUpload}
                              className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            />
                            <FolderUp className="w-7 h-7 text-[#5A5A40] mx-auto mb-1.5" />
                            <span className="text-xs font-bold text-slate-700 block">Kirim Berkas Jawaban Modul {selectedModuleId}</span>
                            <span className="text-[9px] text-[#8A8471] font-mono mt-1 block">Tarik dokumen ke mari atau klik untuk mencari. Maksimal berkas 1.2MB</span>
                          </div>

                          {currModFilesError && (
                            <div className="p-2.5 bg-red-50 border border-red-100 text-red-600 rounded-xl text-[10px] flex items-center gap-2">
                              <AlertCircle className="w-4 h-4 shrink-0" />
                              <span>{currModFilesError}</span>
                            </div>
                          )}

                          {/* List uploaded student task files */}
                          {currModFiles.length > 0 && (
                            <div className="space-y-2 pt-1">
                              <span className="text-[10px] font-bold text-[#8A8471] uppercase tracking-wider block">Riwayat Pengiriman Tugas Anda ({currModFiles.length}):</span>
                              <div className="divide-y divide-[#F1EEE6] border border-[#E8E4D9] rounded-xl bg-white overflow-hidden text-xs">
                                {currModFiles.map((f) => (
                                  <div key={f.fileId} className="p-3 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors">
                                    <div className="flex items-center gap-2 min-w-0">
                                      <FileText className="w-4 h-4 text-[#5A5A40] shrink-0" />
                                      <div className="min-w-0">
                                        <span className="font-bold text-[#3D3A33] block truncate font-serif" title={f.fileName}>{f.fileName}</span>
                                        <span className="text-[9px] text-slate-400 block font-mono">
                                          {(f.fileSize / 1024).toFixed(1)} KB • {new Date(f.uploadDate).toLocaleDateString()}
                                        </span>
                                      </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => handleDownloadFile(f)}
                                        className="p-1 px-1.5 border border-[#D1CCBD] bg-white text-[#5A5A40] hover:bg-slate-100 rounded-lg cursor-pointer"
                                      >
                                        <Download className="w-3.5 h-3.5" />
                                      </button>
                                      <button
                                        onClick={() => handleDeleteModFile(f.fileId)}
                                        className="p-1 px-1.5 border border-red-200 bg-white text-red-500 hover:bg-red-50 rounded-lg cursor-pointer"
                                      >
                                        <Trash2 className="w-3.5 h-3.5" />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Controls Footer */}
                      {!isAdmin && (
                        <div className="pt-6 border-t border-[#E8E4D9] flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 font-sans">
                          <div className="space-y-1 text-center sm:text-left">
                            <span className="text-[11px] text-[#817A63] font-medium font-serif leading-relaxed">
                              {progress.completedModules.includes(currentModule.id) ? (
                                <span className="text-emerald-700 font-bold block font-sans">✓ Anda sukses menuntaskan kuis modul ini!</span>
                              ) : (
                                "Tuntaskan ujian kuis di modul untuk menandai kelulusan bab."
                              )}
                            </span>
                            {/* CEFR and completion badge */}
                            <p className="text-[10px] text-slate-500 font-mono block">
                              Ketuntasan Akademik: {currentModule.id >= 10 && currentModule.id <= 16 ? "CEFR A2 (Elementary)" : currentModule.id >= 18 ? "CEFR A2-B1" : "CEFR A1 (Beginner)"}
                            </p>
                          </div>
                          
                          <div className="flex gap-2.5 flex-wrap justify-center sm:justify-end">
                            {(() => {
                              if (!progress.completedModules.includes(currentModule.id)) return false;
                              const highScore = progress.quizHighScores[currentModule.id] || 0;
                              const totalQuestions = currentModule.quizzes?.length || 1;
                              const scorePercent = Math.round((highScore / totalQuestions) * 100);
                              return scorePercent >= 70;
                            })() && (
                              <button
                                onClick={() => {
                                  setCertificateModule(currentModule);
                                  setIsCertificateOpen(true);
                                }}
                                className="bg-amber-500 hover:bg-amber-600 border border-amber-600 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow transition-all cursor-pointer flex items-center gap-1.5"
                              >
                                <Award className="w-4 h-4 text-white" />
                                Cetak E-Sertifikat
                              </button>
                            )}
                            
                            <button
                              onClick={() => {
                                setIsQuizMode(true);
                                setCurrentQuizIndex(0);
                                setQuizScore(0);
                                setQuizResult(null);
                                setSelectedOption(null);
                                setIsAnswered(false);
                              }}
                              className="bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow transition-colors cursor-pointer"
                            >
                              {progress.completedModules.includes(currentModule.id) ? "Ulangi Kuis Modul" : `Buka Kuis Modul (${currentModule.quizzes?.length || 1} Soal)`}
                            </button>
                          </div>
                        </div>
                      )}

                    </div>
                  ) : (
                    /* INTERACTIVE QUIZ MODE */
                    <div className="space-y-6 flex-1 flex flex-col justify-between">
                      {quizResult ? (
                        /* BEAUTIFULLY STYLED RESULTS REPORT */
                        <div className="space-y-8 flex-1 flex flex-col justify-between animate-fade-in py-4">
                          <div className="space-y-6 text-center">
                            <div className="inline-flex p-1 rounded-full bg-amber-50">
                              <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 border-dashed border-[#5A5A40] bg-white">
                                <span className={`text-2xl font-black ${quizResult.passed ? "text-emerald-600" : "text-amber-600"}`}>
                                  {quizResult.scorePercent}%
                                </span>
                                <span className="text-[10px] uppercase font-bold text-slate-400">Skor</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h3 className="text-xl font-extrabold font-serif text-[#3D3A33]">
                                {quizResult.passed ? "✓ Selamat! Anda Lulus!" : "✗ Belum Memenuhi Batas Kelulusan"}
                              </h3>
                              <p className="text-xs text-[#817A63] max-w-md mx-auto leading-relaxed font-sans">
                                {quizResult.passed 
                                  ? `Luar biasa! Kemajuan belajar bahasa Aram Anda terbukti mantap dengan mencetak hasil ${quizResult.finalScore} benar dari ${quizResult.totalQuestions} pertanyaan (Kelulusan min. 70%).`
                                  : `Anda menjawab ${quizResult.finalScore} benar dari ${quizResult.totalQuestions} pertanyaan. Butuh minimal 70% jawaban benar untuk lulus materi ini dan membuka sertifikat. Mari pelajari kembali dan coba lagi!`
                                }
                              </p>
                            </div>

                            {/* Award Badge UI */}
                            {quizResult.passed ? (
                              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-sm mx-auto flex items-center gap-3 font-sans text-xs text-emerald-800 text-left">
                                <Award className="w-8 h-8 text-amber-500 shrink-0" />
                                <div>
                                  <strong className="block font-bold text-emerald-950">E-Sertifikat Terbuka!</strong>
                                  <span>Gelar kompetensi modul ini telah ditandatangani dan siap diunduh / dicetak.</span>
                                </div>
                              </div>
                            ) : (
                              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl max-w-sm mx-auto flex items-center gap-3 font-sans text-xs text-amber-800 text-left">
                                <BookOpen className="w-8 h-8 text-amber-600 shrink-0" />
                                <div>
                                  <strong className="block font-bold text-amber-950">Terus Berlatih</strong>
                                  <span>Bimbingan saksama Rudolf A. Luhukay mementingkan penguasaan yang murni.</span>
                                </div>
                              </div>
                            )}
                          </div>

                          <div className="pt-6 border-t border-[#E8E4D9] flex flex-col sm:flex-row items-center justify-end gap-3 mt-8 font-sans">
                            <button
                              onClick={() => {
                                setIsQuizMode(false);
                                setQuizResult(null);
                              }}
                              className="w-full sm:w-auto px-4 py-2 hover:bg-[#F1EEE6] text-[#817A63] text-xs font-semibold rounded-xl text-center cursor-pointer select-none border border-[#D1CCBD]"
                            >
                              Kembali ke Materi
                            </button>

                            {(() => {
                              const passedCurrent = quizResult.passed;
                              const passedPreviously = (() => {
                                if (!progress.completedModules.includes(currentModule.id)) return false;
                                const highScore = progress.quizHighScores[currentModule.id] || 0;
                                const totalQuestions = currentModule.quizzes?.length || 1;
                                return Math.round((highScore / totalQuestions) * 100) >= 70;
                              })();
                              return passedCurrent || passedPreviously;
                            })() ? (
                              <button
                                onClick={() => {
                                  setCertificateModule(currentModule);
                                  setIsCertificateOpen(true);
                                }}
                                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 font-bold text-white text-xs px-5 py-2.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                              >
                                <Award className="w-4 h-4" />
                                Cetak E-Sertifikat
                              </button>
                            ) : (
                              <button
                                onClick={() => {
                                  setQuizScore(0);
                                  setCurrentQuizIndex(0);
                                  setSelectedOption(null);
                                  setIsAnswered(false);
                                  setQuizResult(null);
                                }}
                                className="w-full sm:w-auto bg-[#5A5A40] hover:bg-[#4C4C36] font-bold text-white text-xs px-5 py-2.5 rounded-xl shadow-md cursor-pointer text-center select-none"
                              >
                                Ulangi Kuis Sekarang
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <>
                          <div>
                            <div className="border-b border-[#E8E4D9] pb-4 flex justify-between items-center mb-6">
                              <div>
                                <h4 className="text-[10px] uppercase font-bold text-[#5A5A40] tracking-wider font-mono">Ujian Kuis Modul {currentModule.id} • Min. Lulus 70%</h4>
                                <h3 className="text-[#3D3A33] font-extrabold text-base sm:text-lg font-serif">{currentModule.title}</h3>
                              </div>
                              <span className="text-xs font-mono font-bold bg-[#F1EEE6] text-[#5A5A40] px-3 py-1 rounded-full">
                                Soal {currentQuizIndex + 1} dari {currentModule.quizzes?.length || 1}
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-[#F1EEE6] rounded-full h-1.5 mb-8 overflow-hidden">
                              <div 
                                className="bg-[#5A5A40] h-1.5 rounded-full transition-all duration-500 ease-out"
                                style={{ width: `${((currentQuizIndex + 1) / (currentModule.quizzes?.length || 1)) * 100}%` }}
                              ></div>
                            </div>

                            {/* Questions */}
                            {currentModule.quizzes && currentModule.quizzes[currentQuizIndex] && (
                              <div className="space-y-6">
                                <div className="p-5 bg-[#F1EEE6]/60 border border-[#D1CCBD]/40 rounded-2xl text-[#3D3A33] font-semibold text-xs sm:text-sm leading-relaxed font-serif">
                                  {currentModule.quizzes[currentQuizIndex].question}
                                </div>

                                {/* Options */}
                                <div className="grid grid-cols-1 gap-3 font-sans">
                                  {currentModule.quizzes[currentQuizIndex].options.map((option, idx) => {
                                    const isSelected = selectedOption === option;
                                    const isCorrect = option === currentModule.quizzes[currentQuizIndex].correctAnswer;
                                    
                                    let optStyle = "border-[#D1CCBD] hover:border-[#5A5A40] bg-white text-[#3D3A33]";
                                    if (isSelected) optStyle = "border-[#5A5A40] ring-2 ring-[#F1EEE6] bg-[#F1EEE6]/40 text-[#5A5A40]";
                                    if (isAnswered) {
                                      if (isCorrect) optStyle = "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-50";
                                      else if (isSelected) optStyle = "border-red-600 bg-red-50 text-red-950 ring-2 ring-red-50";
                                    }

                                    return (
                                      <button
                                        key={idx}
                                        onClick={() => handleOptionSelect(option)}
                                        disabled={isAnswered}
                                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 cursor-pointer ${optStyle}`}
                                      >
                                        <span>{option}</span>
                                        <div className="shrink-0">
                                          {isAnswered && isCorrect && <Check className="w-5 h-5 text-emerald-600" />}
                                          {isAnswered && isSelected && !isCorrect && <X className="w-4 h-4 text-red-500" />}
                                        </div>
                                      </button>
                                    );
                                  })}
                                </div>
                              </div>
                            )}

                            {isAnswered && currentModule.quizzes && currentModule.quizzes[currentQuizIndex] && (
                              <div className={`p-4 rounded-2xl border text-xs leading-relaxed mt-6 font-sans ${
                                selectedOption === currentModule.quizzes[currentQuizIndex].correctAnswer
                                  ? "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                                  : "bg-red-50/50 border-red-100 text-red-800"
                              }`}>
                                <strong>{selectedOption === currentModule.quizzes[currentQuizIndex].correctAnswer ? "Benar sekali!" : "Jawaban kurang tepat!"}</strong>{" "}
                                {currentModule.quizzes[currentQuizIndex].explanation}
                              </div>
                            )}

                          </div>

                          {/* Controls navigation bar */}
                          <div className="pt-6 border-t border-[#E8E4D9] flex items-center justify-between mt-8 font-sans">
                            <button
                              onClick={() => {
                                setIsQuizMode(false);
                                setQuizResult(null);
                              }}
                              className="px-4 py-2 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs font-bold rounded-xl cursor-pointer"
                            >
                              Batal Kuis
                            </button>

                            <div className="flex gap-2">
                              {!isAnswered ? (
                                <button
                                  onClick={handleCheckAnswer}
                                  disabled={!selectedOption}
                                  className="bg-[#5A5A40] disabled:bg-[#D1CCBD] hover:bg-[#4C4C36] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer"
                                >
                                  Periksa Jawaban
                                </button>
                              ) : (
                                <button
                                  onClick={handleNextQuizQuestion}
                                  className="bg-[#2D2A26] hover:bg-[#3D3A33] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer"
                                >
                                  {currentQuizIndex === (currentModule.quizzes?.length || 1) - 1 ? "Selesaikan Ujian" : "Soal Berikutnya"}
                                </button>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>

              </div>
            )}

            {/* TAB 3: KEYBOARD SCREEN */}
            {activeTab === "keyboard" && (
              <div className="animate-fade-in" id="keyboard-routed">
                <Keyboard />
              </div>
            )}

            {/* TAB 4: NOTEBOOK & FLASHCARDS */}
            {activeTab === "notebook" && (
              <div className="animate-fade-in" id="notebook-routed">
                <VocabularyNotebook isAdmin={isAdmin} userId={user?.uid || "sandbox"} />
              </div>
            )}

            {/* TAB 5: AI TUTOR BOT CHAT */}
            {activeTab === "tutor" && (
              <div className="animate-fade-in max-w-4xl mx-auto animate-fade-in" id="tutor-routed">
                <AIAssistant />
              </div>
            )}

            {/* TAB 6: FILES AND ACCOUNT SETTINGS */}
            {activeTab === "files" && (
              <div className="animate-fade-in animate-fade-in" id="files-routed">
                <FileManager 
                  user={user}
                  userProfile={userProfile}
                  onLogOut={handleLogOut}
                  onRefreshProfile={handleRefreshProfile}
                />
              </div>
            )}

            {/* TAB 7: SUPER ADMIN EXCLUSIVE PANEL */}
            {activeTab === "admin" && isAdmin && (
              <div className="animate-fade-in" id="admin-routed">
                <AdminPanel 
                  currentModules={modules}
                  onModulesUpdated={(updated) => setModules(updated)}
                  adminEmail={userProfile?.email || "rudolfluhukay69@guru.smp.belajar.id"}
                />
              </div>
            )}
          </>
        )}

      </main>

      {/* FOOTER */}
      <footer className="bg-[#EBE7DC] border-t border-[#D1CCBD] py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-2 text-xs text-[#8A8471] font-sans">
          <p className="font-bold text-[#5A5A40] font-serif text-sm">Arami Academy • Indonesian Syriac LMS Portal</p>
          {isAdmin && (
            <p className="font-serif">Rujukan otentik bahasa Aram. Bimbingan murni oleh Rudolf A. Luhukay.</p>
          )}
        </div>
      </footer>

      {certificateModule && (
        <CertificateModal
          isOpen={isCertificateOpen}
          onClose={() => {
            setIsCertificateOpen(false);
            setCertificateModule(null);
          }}
          module={certificateModule}
          userFullName={userProfile?.fullName || "Siswa"}
        />
      )}

    </div>
  );
}
