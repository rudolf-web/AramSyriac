import React, { useState, useEffect } from "react";
import { useLang } from "../lang";
import { 
  Users, 
  BookOpen, 
  Paperclip, 
  Trash2, 
  Check, 
  X, 
  Edit, 
  Plus, 
  Youtube, 
  FileText, 
  Music, 
  Link2, 
  Loader2, 
  Save, 
  AlertCircle, 
  CheckCircle, 
  Database,
  ArrowRight,
  RefreshCw,
  FolderOpen
} from "lucide-react";
import { 
  db, 
  isFirebaseConfigured, 
  handleFirestoreError, 
  OperationType 
} from "../firebase";
import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  getDoc 
} from "firebase/firestore";
import { Module } from "../types";

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

interface AdminPanelProps {
  currentModules: Module[];
  onModulesUpdated: (updated: Module[]) => void;
  adminEmail: string;
}

export function AdminPanel({ currentModules, onModulesUpdated, adminEmail }: AdminPanelProps) {
  const { t } = useLang();
  const [activeSubTab, setActiveSubTab] = useState<"users" | "modules" | "materials">("users");

  // User list state
  const [usersList, setUsersList] = useState<any[]>([]);
  const [usersLoading, setUsersLoading] = useState(false);
  const [userActionLoading, setUserActionLoading] = useState<string | null>(null);
  const [feedbackInputs, setFeedbackInputs] = useState<Record<string, string>>({});

  // Module state
  const [selectedModuleId, setSelectedModuleId] = useState<number>(currentModules[0]?.id || 1);
  const [isEditingModule, setIsEditingModule] = useState<number | null>(null);
  const [isAddingModule, setIsAddingModule] = useState(false);

  // New Module form state
  const [newModuleId, setNewModuleId] = useState<number>(currentModules.length + 1);
  const [newTitle, setNewTitle] = useState("");
  const [newTitleSyriac, setNewTitleSyriac] = useState("");
  const [newCategory, setNewCategory] = useState<any>("Level A1");
  const [newSummary, setNewSummary] = useState("");
  const [newIntroduction, setNewIntroduction] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newKeyRulesText, setNewKeyRulesText] = useState(""); // Comma/newline separated
  const [newEmbedCode, setNewEmbedCode] = useState("");

  // Editing Module temporary buffers
  const [editTitle, setEditTitle] = useState("");
  const [editTitleSyriac, setEditTitleSyriac] = useState("");
  const [editCategory, setEditCategory] = useState<any>("Level A1");
  const [editSummary, setEditSummary] = useState("");
  const [editIntroduction, setEditIntroduction] = useState("");
  const [editContent, setEditContent] = useState("");
  const [editKeyRulesText, setEditKeyRulesText] = useState("");
  const [editEmbedCode, setEditEmbedCode] = useState("");

  // Material Attachments form state
  const [attName, setAttName] = useState("");
  const [attType, setAttType] = useState<"teks" | "pdf" | "mp3" | "mp4" | "web_link" | "youtube" | "embed_web" | "embed_text" | "embed_code" | "file">("youtube");
  const [attUrl, setAttUrl] = useState("");
  const [attFileBase64, setAttFileBase64] = useState<string>("");
  const [attFileSize, setAttFileSize] = useState<number>(0);
  const [attFileType, setAttFileType] = useState<string>("");
  const [uploadingAttachment, setUploadingAttachment] = useState(false);
  const [attachmentError, setAttachmentError] = useState<string | null>(null);
  const [expandedAdminYoutubeId, setExpandedAdminYoutubeId] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setUsersLoading(true);
    if (isFirebaseConfigured && db) {
      try {
        const snapshot = await getDocs(collection(db, "users"));
        const list: any[] = [];
        snapshot.forEach((docSnap) => {
          list.push(docSnap.data());
        });
        setUsersList(list);
      } catch (err: any) {
        console.error("Gagal memuat pengguna:", err);
        // Firestore read failed (e.g. rules not published yet): fall back to
        // locally registered profiles so pending accounts stay visible.
        const mockList: any[] = [];
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key && (key.startsWith("arami_sb_profile_") || key.startsWith("arami_user_profile_"))) {
            try {
              mockList.push(JSON.parse(localStorage.getItem(key) || ""));
            } catch (e) {}
          }
        }
        setUsersList(mockList);
      } finally {
        setUsersLoading(false);
      }
    } else {
      // Local sandbox users list fallback
      const mockList = [];
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith("arami_sb_profile_")) {
          try {
            mockList.push(JSON.parse(localStorage.getItem(key) || ""));
          } catch (e) {}
        }
      }
      setUsersList(mockList);
      setUsersLoading(false);
    }
  };

  // User actions (APPROVE / DISAPPROVE / REVISE)
  const handleUserStatusUpdate = async (userId: string, targetStatus: "APPROVED" | "DISAPPROVED" | "REVISE") => {
    setUserActionLoading(userId);
    const feedback = feedbackInputs[userId] || "";

    if (isFirebaseConfigured && db) {
      try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, {
          status: targetStatus,
          adminFeedback: feedback
        });
        // Clear feedback input
        setFeedbackInputs(prev => ({ ...prev, [userId]: "" }));
        await fetchUsers();
      } catch (err) {
        try {
          handleFirestoreError(err, OperationType.UPDATE, `users/${userId}`);
        } catch (e: any) {
          alert(t("adminUpdateFail") + e.message);
        }
      } finally {
        setUserActionLoading(null);
      }
    } else {
      // Sandbox fallback
      const key = `arami_sb_profile_${userId}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        const parsed = JSON.parse(saved);
        parsed.status = targetStatus;
        parsed.adminFeedback = feedback;
        localStorage.setItem(key, JSON.stringify(parsed));
        setFeedbackInputs(prev => ({ ...prev, [userId]: "" }));
        fetchUsers();
      }
      setUserActionLoading(null);
    }
  };

  // Convert Comma-separated or Newline-separated to array
  const parseKeyRules = (text: string): string[] => {
    return text.split(/[,\n]/).map(r => r.trim()).filter(r => r !== "");
  };

  // Add module
  const handleAddModuleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newTitleSyriac.trim() || !newSummary.trim()) return;

    const keyRulesArray = parseKeyRules(newKeyRulesText);
    const newMod: Module = {
      id: Number(newModuleId),
      title: newTitle.trim(),
      titleSyriac: newTitleSyriac.trim(),
      category: newCategory,
      summary: newSummary.trim(),
      introduction: newIntroduction.trim(),
      content: newContent.trim(),
      keyRules: keyRulesArray,
      vocabulary: [],
      examples: [],
      quizzes: [
        {
          id: 1,
          question: t("adminQuizQ").replace("{title}", newTitle),
          options: [t("adminQuizOpt1"), t("adminQuizOpt2"), t("adminQuizOpt3"), t("adminQuizOpt4")],
          correctAnswer: t("adminQuizOpt3"),
          explanation: t("adminQuizExpl")
        }
      ],
      embedCode: newEmbedCode.trim()
    };

    if (isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(newMod.id)), newMod);
        alert(t("adminModSaved"));
      } catch (err) {
        alert(t("adminModUploadFail") + String(err));
      }
    }

    const updated = [...currentModules, newMod];
    // Sort modules by ID
    updated.sort((a, b) => a.id - b.id);
    onModulesUpdated(updated);

    // Reset Form
    setIsAddingModule(false);
    setNewTitle("");
    setNewTitleSyriac("");
    setNewSummary("");
    setNewIntroduction("");
    setNewContent("");
    setNewKeyRulesText("");
    setNewEmbedCode("");
    setNewModuleId(updated.length + 1);
  };

  // Start editing mode
  const handleStartEditing = (mod: Module) => {
    setIsEditingModule(mod.id);
    setEditTitle(mod.title);
    setEditTitleSyriac(mod.titleSyriac);
    setEditCategory(mod.category);
    setEditSummary(mod.summary || "");
    setEditIntroduction(mod.introduction || "");
    setEditContent(mod.content || "");
    setEditKeyRulesText(mod.keyRules.join("\n"));
    setEditEmbedCode(mod.embedCode || "");
  };

  // Save module edits
  const handleSaveModuleEdits = async (moduleId: number) => {
    const updated = currentModules.map((m) => {
      if (m.id === moduleId) {
        return {
          ...m,
          title: editTitle.trim(),
          titleSyriac: editTitleSyriac.trim(),
          category: editCategory,
          summary: editSummary.trim(),
          introduction: editIntroduction.trim(),
          content: editContent.trim(),
          keyRules: parseKeyRules(editKeyRulesText),
          embedCode: editEmbedCode.trim()
        };
      }
      return m;
    });

    const activeMod = updated.find(m => m.id === moduleId);
    if (activeMod && isFirebaseConfigured && db) {
      try {
        await setDoc(doc(db, "modules", String(moduleId)), activeMod);
      } catch (err) {
        alert(t("adminDbFail") + String(err));
      }
    }

    onModulesUpdated(updated);
    setIsEditingModule(null);
  };

  // Delete module
  const handleDeleteModule = async (moduleId: number) => {
    if (!window.confirm(t("adminConfirmDeleteMod") + moduleId + t("adminConfirmDeleteModB"))) return;

    if (isFirebaseConfigured && db) {
      try {
        await deleteDoc(doc(db, "modules", String(moduleId)));
      } catch (err) {
        alert(t("adminDeleteCloudFail") + String(err));
      }
    }

    const updated = currentModules.filter(m => m.id !== moduleId);
    onModulesUpdated(updated);
  };

  // Base64 Converter for attachments
  const handleAttachmentFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setAttachmentError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    // Strict size constraint: 1.5MB to secure Firestore Base64 limits
    if (file.size > 1.5 * 1024 * 1024) {
      setAttachmentError(t("adminAttTooBig"));
      return;
    }

    setUploadingAttachment(true);
    const reader = new FileReader();
    reader.onload = () => {
      setAttFileBase64(reader.result as string);
      setAttFileSize(file.size);
      setAttFileType(file.type);
      setUploadingAttachment(false);
    };
    reader.onerror = () => {
      setAttachmentError(t("adminAttReadFail"));
      setUploadingAttachment(false);
    };
    reader.readAsDataURL(file);
  };

  // Submit media attachment
  const handleAddAttachment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!attName.trim()) return;

    let finalUrl = attUrl.trim();
    if (attType === "file") {
      if (!attFileBase64) {
        alert(t("adminPickFile"));
        return;
      }
      finalUrl = attFileBase64;
    }

    if (!finalUrl) {
      alert(t("adminGiveUrl"));
      return;
    }

    const newAttachment = {
      id: "media_" + Date.now(),
      name: attName.trim(),
      type: attType,
      url: finalUrl,
      size: attFileSize,
      fileType: attFileType,
      uploadDate: new Date().toISOString()
    };

    const targetMod = currentModules.find(m => m.id === selectedModuleId);
    if (!targetMod) {
      alert(t("adminBadTarget"));
      return;
    }

    // Append to attachments array (initialize check)
    const activeAtts = (targetMod as any).attachments || [];
    const updatedAttachments = [...activeAtts, newAttachment];

    const updated = currentModules.map((m) => {
      if (m.id === selectedModuleId) {
        return {
          ...m,
          attachments: updatedAttachments
        };
      }
      return m;
    });

    if (isFirebaseConfigured && db) {
      try {
        await updateDoc(doc(db, "modules", String(selectedModuleId)), {
          attachments: updatedAttachments
        });
        alert(t("adminAttOk"));
      } catch (err) {
        alert(t("adminAttCloudFail") + String(err));
      }
    }

    onModulesUpdated(updated);

    // Reset Form
    setAttName("");
    setAttUrl("");
    setAttFileBase64("");
    setAttFileSize(0);
    setAttFileType("");
  };

  // Delete specific attachment
  const handleDeleteAttachment = async (moduleId: number, attId: string) => {
    if (!window.confirm(t("adminConfirmDeleteAtt"))) return;

    const targetMod = currentModules.find(m => m.id === moduleId);
    if (!targetMod) return;

    const activeAtts = (targetMod as any).attachments || [];
    const updatedAttachments = activeAtts.filter((a: any) => a.id !== attId);

    const updated = currentModules.map((m) => {
      if (m.id === moduleId) {
        return {
          ...m,
          attachments: updatedAttachments
        };
      }
      return m;
    });

    if (isFirebaseConfigured && db) {
      try {
        await updateDoc(doc(db, "modules", String(moduleId)), {
          attachments: updatedAttachments
        });
      } catch (err) {
        alert(t("adminCloudDataFail") + String(err));
      }
    }

    onModulesUpdated(updated);
  };

  // Filter Categories
  const categories = ["Level A1", "Level A2", "Level B1"];

  return (
    <div className="space-y-8" id="super-admin-layout">
      
      {/* Title Header Banner Card */}
      <div className="bg-[#5A5A40] p-6 sm:p-10 text-white rounded-3xl relative overflow-hidden shadow-lg border border-[#3D3A33]">
        <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        <div className="relative z-10 space-y-2">
          <div className="bg-amber-400 text-slate-900 text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider inline-block">
            {t("adminAuthority")}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-serif">Arami Academy Control Console</h2>
          <p className="text-slate-100 text-xs sm:text-sm font-light leading-relaxed max-w-3xl">
            {t("adminWelcomeA")} <strong>{adminEmail}</strong>{t("adminWelcomeB")}
          </p>
        </div>
      </div>

      {/* Admin Panel Tabs Bar */}
      <div className="flex flex-wrap gap-2 bg-[#EBE7DC] p-1.5 border border-[#D1CCBD] rounded-2xl font-sans text-xs">
        <button
          onClick={() => setActiveSubTab("users")}
          className={`flex-1 py-2.5 px-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeSubTab === "users" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
          }`}
        >
          <Users className="w-4 h-4" />
          {t("adminTabUsers")} ({usersList.length})
        </button>

        <button
          onClick={() => setActiveSubTab("modules")}
          className={`flex-1 py-2.5 px-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeSubTab === "modules" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
          }`}
        >
          <BookOpen className="w-4 h-4" />
          {t("adminTabModules")}
        </button>

        <button
          onClick={() => setActiveSubTab("materials")}
          className={`flex-1 py-2.5 px-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${
            activeSubTab === "materials" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
          }`}
        >
          <Paperclip className="w-4 h-4" />
          {t("adminTabMaterials")}
        </button>
      </div>

      {/* SUB-TAB 1: MANAGE STUDENT ENROLLMENTS */}
      {activeSubTab === "users" && (
        <div className="bg-white p-6 border border-[#E8E4D9] rounded-2xl shadow-sm space-y-6">
          <div className="flex justify-between items-center gap-4 flex-wrap border-b border-[#F1EEE6] pb-4">
            <div>
              <h3 className="font-bold text-lg text-[#3D3A33] font-serif">{t("adminUsersTitle")}</h3>
              <p className="text-[#8A8471] text-xs">{t("adminUsersSub")}</p>
            </div>
            
            <button
              onClick={fetchUsers}
              disabled={usersLoading}
              className="px-4 py-2 bg-[#F1EEE6] text-[#5A5A40] font-semibold text-xs border border-[#D1CCBD] rounded-xl flex items-center gap-1.5 hover:bg-[#EBE7DC] transition-all cursor-pointer"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${usersLoading ? "animate-spin" : ""}`} />
              {t("adminRefresh")}
            </button>
          </div>

          {usersLoading ? (
            <div className="flex justify-center py-16">
              <Loader2 className="w-10 h-10 animate-spin text-[#5A5A40]" />
            </div>
          ) : usersList.length > 0 ? (
            <div className="divide-y divide-[#F1EEE6] border border-[#E8E4D9] rounded-2xl bg-white overflow-hidden">
              {usersList.map((usr) => {
                const isUserActionPending = userActionLoading === usr.userId;
                
                return (
                  <div key={usr.userId} className="p-5 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-[#F9F7F2]/40 transition-colors text-xs">
                    <div className="space-y-3 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <strong className="text-sm font-bold font-serif text-[#3D3A33]">{usr.fullName || t("adminAnon")}</strong>
                        <span className="text-[10px] bg-[#EBE7DC] text-[#3D3A33] py-0.5 px-2 rounded font-sans">{usr.email}</span>
                        
                        {/* Custom status badge */}
                        <span className={`text-[9px] font-bold py-0.5 px-2 rounded uppercase tracking-wider ${
                          usr.status === "APPROVED" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                          usr.status === "DISAPPROVED" ? "bg-red-50 text-red-700 border border-red-100" :
                          usr.status === "REVISE" ? "bg-amber-50 text-amber-700 border border-amber-100" :
                          "bg-blue-50 text-blue-700 border border-blue-100 animate-pulse"
                        }`}>
                          {usr.status || "PENDING"}
                        </span>
                      </div>

                      <div className="p-3 bg-[#F1EEE6]/50 border border-[#D1CCBD]/30 rounded-xl space-y-1.5 font-serif">
                        <span className="text-[10px] text-[#8A8471] uppercase font-bold tracking-wider block font-sans">{t("adminMotivation")}</span>
                        <p className="text-[#3D3A33] leading-relaxed text-xs italic">
                          "{usr.learningReason || t("adminMotivationEmpty")}"
                        </p>
                      </div>

                      {usr.adminFeedback && (
                        <div className="p-2.5 bg-yellow-50 border border-yellow-100 rounded-xl text-[10px] text-amber-900 leading-relaxed">
                          <strong>{t("adminPrevFeedback")}</strong> {usr.adminFeedback}
                        </div>
                      )}

                      {/* Revision Input Box */}
                      <div className="pt-1">
                        <input
                          type="text"
                          value={feedbackInputs[usr.userId] || ""}
                          onChange={(e) => setFeedbackInputs({ ...prev => ({ ...prev, [usr.userId]: e.target.value }) })}
                          placeholder={t("adminFeedbackPh")}
                          className="w-full max-w-lg bg-[#F9F7F2]/75 border border-[#D1CCBD] text-xs rounded-xl p-2 outline-none focus:border-[#5A5A40]"
                        />
                      </div>
                    </div>

                    {/* Operational Action Buttons */}
                    <div className="sm:shrink-0 flex items-center md:flex-col gap-2 font-sans self-end md:self-start">
                      {/* APPROVE ACTION */}
                      <button
                        onClick={() => handleUserStatusUpdate(usr.userId, "APPROVED")}
                        disabled={isUserActionPending}
                        className="py-2 px-3 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl flex items-center gap-1 cursor-pointer"
                        title={t("adminApproveTitle")}
                      >
                        <Check className="w-4 h-4" />
                        {t("adminApprove")}
                      </button>

                      {/* REQUEST REVISION ACTION */}
                      <button
                        onClick={() => handleUserStatusUpdate(usr.userId, "REVISE")}
                        disabled={isUserActionPending || !(feedbackInputs[usr.userId] || "").trim()}
                        className={`py-2 px-3 border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 font-bold rounded-xl flex items-center gap-1 cursor-pointer ${
                          !(feedbackInputs[usr.userId] || "").trim() && "opacity-50 cursor-not-allowed"
                        }`}
                        title={t("adminReviseTitle")}
                      >
                        <RefreshCw className="w-3.5 h-3.5" />
                        {t("adminRevise")}
                      </button>

                      {/* DISAPPROVE ACTION */}
                      <button
                        onClick={() => handleUserStatusUpdate(usr.userId, "DISAPPROVED")}
                        disabled={isUserActionPending}
                        className="py-2 px-3 border border-red-200 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl flex items-center gap-1 cursor-pointer"
                        title={t("adminRejectTitle")}
                      >
                        <X className="w-4 h-4" />
                        {t("adminReject")}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-16 text-center border-2 border-dashed border-[#D1CCBD] rounded-3xl bg-[#F9F7F2]/20">
              <Users className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <strong className="text-sm font-bold text-[#3D3A33] block">{t("adminNoUsers")}</strong>
              <p className="text-slate-400 text-xs mt-1">{t("adminNoUsersSub")}</p>
            </div>
          )}
        </div>
      )}

      {/* SUB-TAB 2: MANAGE GRAMMAR SYLLABUS & TEXT */}
      {activeSubTab === "modules" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Modules Left Navigation Column */}
          <div className="lg:col-span-4 space-y-4 max-h-[600px] overflow-y-auto pr-1">
            <button
              onClick={() => { setIsAddingModule(true); setIsEditingModule(null); }}
              className="w-full p-4.5 bg-[#5A5A40] text-white hover:bg-[#4C4C36] font-bold rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all text-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              {t("adminAddModuleBtn")}
            </button>

            <div className="space-y-2">
              {currentModules.map((m) => (
                <div 
                  key={m.id}
                  className={`w-full p-3 rounded-xl border flex items-center justify-between gap-2.5 transition-all ${
                    selectedModuleId === m.id && !isAddingModule
                      ? "bg-[#F1EEE6] border-[#5A5A40] text-[#3D3A33]"
                      : "bg-white border-[#E8E4D9] hover:border-[#D1CCBD] text-slate-600"
                  }`}
                >
                  <button
                    onClick={() => {
                      setSelectedModuleId(m.id);
                      setIsAddingModule(false);
                      handleStartEditing(m);
                    }}
                    className="flex-1 text-left min-w-0"
                  >
                    <span className="text-[9px] font-bold font-mono text-[#8A8471] block">{t("adminModBadge")} {m.id}</span>
                    <strong className="text-xs font-bold text-[#3D3A33] truncate block font-serif pr-1">{m.title}</strong>
                  </button>

                  <button
                    onClick={() => handleDeleteModule(m.id)}
                    className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title={t("adminDeleteMod")}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Module Writing Console */}
          <div className="lg:col-span-8 bg-white border border-[#E8E4D9] rounded-2xl p-6 shadow-sm">
            {isAddingModule ? (
              <form onSubmit={handleAddModuleSubmit} className="space-y-4 font-sans text-xs">
                <div className="pb-3 border-b border-[#F1EEE6]">
                  <h3 className="font-extrabold text-base text-[#3D3A33] font-serif flex items-center gap-2">
                    <Plus className="w-5 h-5 text-[#5A5A40]" />
                    {t("adminWriteModule")}
                  </h3>
                  <p className="text-[#8A8471] text-xs mt-0.5">{t("adminWriteModuleSub")}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminModNumber")}</label>
                    <input 
                      type="number" 
                      required 
                      value={newModuleId} 
                      onChange={(e) => setNewModuleId(Number(e.target.value))}
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-semibold focus:border-[#5A5A40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminTopicCat")}</label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full bg-white border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-semibold focus:border-[#5A5A40]"
                    >
                      {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminTitleId")}</label>
                    <input 
                      type="text" 
                      required 
                      value={newTitle} 
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder={t("adminTitleIdPh")}
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminTitleSyriac")}</label>
                    <input 
                      type="text" 
                      required 
                      value={newTitleSyriac} 
                      onChange={(e) => setNewTitleSyriac(e.target.value)}
                      placeholder={t("adminTitleSyriacPh")}
                      dir="rtl"
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none text-right font-syriac text-sm focus:border-[#5A5A40]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminSummary")}</label>
                  <input 
                    type="text" 
                    required 
                    value={newSummary} 
                    onChange={(e) => setNewSummary(e.target.value)}
                    placeholder={t("adminSummaryPh")}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminIntro")}</label>
                  <textarea 
                    rows={3}
                    required 
                    value={newIntroduction} 
                    onChange={(e) => setNewIntroduction(e.target.value)}
                    placeholder={t("adminIntroPh")}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminContent")}</label>
                  <textarea 
                    rows={6}
                    required 
                    value={newContent} 
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder={t("adminContentPh")}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] font-serif text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminRules")}</label>
                  <textarea 
                    rows={3}
                    required 
                    value={newKeyRulesText} 
                    onChange={(e) => setNewKeyRulesText(e.target.value)}
                    placeholder={t("adminRulesPh")}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div className="space-y-1.5 p-4.5 bg-[#FCFBF8] border border-[#D1CCBD]/50 rounded-2xl">
                  <label className="font-bold text-[#5A5A40] flex items-center gap-1">
                    <span>{t("adminEmbed")}</span>
                  </label>
                  <p className="text-[10px] text-[#817A63] leading-relaxed">
                    {t("adminEmbedHintA")}<strong>&lt;iframe&gt;</strong>{t("adminEmbedHintB")}
                  </p>
                  <textarea 
                    rows={2.5}
                    value={newEmbedCode} 
                    onChange={(e) => setNewEmbedCode(e.target.value)}
                    placeholder={t("adminEmbedPh")}
                    className="w-full bg-white border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-mono text-xs focus:border-[#5A5A40]"
                  />
                </div>

                <div className="flex gap-2 justify-end font-sans">
                  <button 
                    type="button" 
                    onClick={() => setIsAddingModule(false)}
                    className="py-2.5 px-4 bg-[#F1EEE6] text-[#8A8471] font-semibold rounded-xl border border-[#D1CCBD] hover:bg-[#EBE7DC] transition-all cursor-pointer"
                  >
                    {t("cancel")}
                  </button>
                  <button 
                    type="submit"
                    className="py-2.5 px-6 bg-[#5A5A40] text-white font-bold rounded-xl hover:bg-[#4C4C36] shadow transition-all cursor-pointer"
                  >
                    {t("adminSaveNew")}
                  </button>
                </div>
              </form>
            ) : isEditingModule !== null ? (
              // EDIT MODUL FORM CONSOLE
              <div className="space-y-4 font-sans text-xs">
                <div className="pb-3 border-b border-[#F1EEE6]">
                  <h3 className="font-extrabold text-base text-[#3D3A33] font-serif flex items-center gap-2">
                    <Edit className="w-5 h-5 text-[#5A5A40]" />
                    {t("adminEditTitle")} {isEditingModule}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminTitleId")}</label>
                    <input 
                      type="text" 
                      required 
                      value={editTitle} 
                      onChange={(e) => setEditTitle(e.target.value)}
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#8A8471]">{t("adminTitleSyriac2")}</label>
                    <input 
                      type="text" 
                      required 
                      value={editTitleSyriac} 
                      onChange={(e) => setEditTitleSyriac(e.target.value)}
                      dir="rtl"
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] text-right font-syriac font-bold text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminTopic")}</label>
                  <select 
                    value={editCategory}
                    onChange={(e: any) => setEditCategory(e.target.value)}
                    className="w-full bg-white border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-bold text-[#5A5A40]"
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminSummary2")}</label>
                  <input 
                    type="text" 
                    value={editSummary}
                    onChange={(e) => setEditSummary(e.target.value)}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminIntro")}</label>
                  <textarea 
                    rows={3} 
                    value={editIntroduction}
                    onChange={(e) => setEditIntroduction(e.target.value)}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] resize-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminContent2")}</label>
                  <textarea 
                    rows={7} 
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] font-serif text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-[#8A8471]">{t("adminRules2")}</label>
                  <textarea 
                    rows={3} 
                    value={editKeyRulesText}
                    onChange={(e) => setEditKeyRulesText(e.target.value)}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div className="space-y-1.5 p-4.5 bg-[#FCFBF8] border border-[#D1CCBD]/50 rounded-2xl">
                  <label className="font-bold text-[#5A5A40] flex items-center gap-1">
                    <span>{t("adminEmbed")}</span>
                  </label>
                  <p className="text-[10px] text-[#817A63] leading-relaxed">
                    {t("adminEmbedHintA")}<strong>&lt;iframe&gt;</strong>{t("adminEmbedHintB")}
                  </p>
                  <textarea 
                    rows={2.5}
                    value={editEmbedCode} 
                    onChange={(e) => setEditEmbedCode(e.target.value)}
                    placeholder={t("adminEmbedPh")}
                    className="w-full bg-white border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-mono text-xs focus:border-[#5A5A40]"
                  />
                </div>

                <div className="flex gap-2 justify-end pt-2 font-sans">
                  <button 
                    type="button" 
                    onClick={() => setIsEditingModule(null)}
                    className="py-2 px-4 rounded-xl border border-[#D1CCBD] bg-[#F1EEE6] text-[#8A8471] font-bold"
                  >
                    {t("cancel")}
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleSaveModuleEdits(isEditingModule)}
                    className="py-2 px-6 rounded-xl bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-bold inline-flex items-center gap-1.5"
                  >
                    <Save className="w-4 h-4" />
                    {t("adminSaveChanges")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-16 text-center space-y-3">
                <BookOpen className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="font-extrabold text-sm text-[#3D3A33] font-serif">{t("adminEmptyModule")}</h4>
                <p className="text-slate-400 text-xs font-serif leading-relaxed max-w-sm mx-auto">
                  {t("adminEmptyModuleSub")}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: MEDIA ATTACHMENTS AND UPLOADS */}
      {activeSubTab === "materials" && (
        <div className="bg-white p-6 border border-[#E8E4D9] rounded-2xl shadow-sm space-y-8">
          <div className="border-b border-[#F1EEE6] pb-4">
            <h3 className="font-bold text-lg text-[#3D3A33] font-serif">{t("adminMaterialsTitle")}</h3>
            <p className="text-[#8A8471] text-xs font-sans">{t("adminMaterialsSub")}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Form Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 bg-[#F9F7F2] border border-[#D1CCBD] rounded-2xl space-y-4">
                <h4 className="font-extrabold text-xs text-[#5A5A40] uppercase tracking-wider font-sans">{t("adminUploadNew")}</h4>
                
                <form onSubmit={handleAddAttachment} className="space-y-4 font-sans text-xs">
                  <div className="space-y-1">
                    <label className="font-semibold text-[#8A8471]">{t("adminRefModule")}</label>
                    <select
                      value={selectedModuleId}
                      onChange={(e) => setSelectedModuleId(Number(e.target.value))}
                      className="w-full bg-white border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-bold text-xs"
                    >
                      {currentModules.map(m => (
                        <option key={m.id} value={m.id}>{t("module")} {m.id}: {m.title}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-semibold text-[#8A8471]">{t("adminAttName")}</label>
                    <input 
                      type="text" 
                      required
                      value={attName}
                      onChange={(e) => setAttName(e.target.value)}
                      placeholder={t("adminAttNamePh")}
                      className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none text-xs"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-[#5A5A40] text-xs">{t("adminMediaType")}</label>
                    <select 
                      value={attType}
                      onChange={(e) => {
                        setAttType(e.target.value as any);
                        setAttUrl("");
                        setAttFileBase64("");
                        setAttFileSize(0);
                        setAttFileType("");
                        setAttachmentError(null);
                      }}
                      className="p-2.5 w-full border border-[#D1CCBD] rounded-xl bg-white font-bold outline-none text-xs text-[#5A5A40] focus:border-[#5A5A40]"
                    >
                      <option value="youtube">{t("adminOptYoutube")}</option>
                      <option value="embed_code">{t("adminOptCode")}</option>
                      <option value="embed_web">{t("adminOptWeb")}</option>
                      <option value="embed_text">{t("adminOptText")}</option>
                      <option value="mp3">{t("adminOptMp3")}</option>
                      <option value="mp4">{t("adminOptMp4")}</option>
                      <option value="pdf">{t("adminOptPdf")}</option>
                      <option value="teks">{t("adminOptTxt")}</option>
                      <option value="web_link">{t("adminOptLink")}</option>
                      <option value="file">{t("adminOptFile")}</option>
                    </select>
                  </div>

                  {attType === "embed_text" || attType === "embed_code" ? (
                    <div className="space-y-1">
                      <label className="font-semibold text-[#8A8471] text-xs block">
                        {attType === "embed_text" ? t("adminWriteNote") : t("adminPasteCode")}
                      </label>
                      <textarea 
                        rows={5}
                        required
                        placeholder={
                          attType === "embed_text" 
                            ? t("adminNotePh") 
                            : t("adminCodePh")
                        } 
                        value={attUrl}
                        onChange={(e) => setAttUrl(e.target.value)}
                        className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none font-mono text-xs focus:border-[#5A5A40]"
                      />
                      {attType === "embed_code" && (
                        <p className="text-[10px] text-[#817A63] leading-relaxed">
                          {t("adminCodeHint")}
                        </p>
                      )}
                    </div>
                  ) : attType === "file" ? (
                    <div className="space-y-2">
                      <label className="font-semibold text-[#8A8471] block">{t("adminPickFileLabel")}</label>
                      <div className="border border-dashed border-[#D1CCBD] p-4 text-center rounded-xl bg-white relative cursor-pointer hover:bg-[#F1EEE6]/10">
                        <input
                          type="file"
                          onChange={handleAttachmentFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <Paperclip className="w-6 h-6 text-[#5A5A40] mx-auto mb-1.5" />
                        <span className="text-[10px] text-slate-400 block font-sans">
                          {attName ? `${t("adminPickDocA")}${attName}${t("adminPickDocB")}` : t("adminPickDocC")}
                        </span>
                        {attFileSize > 0 && (
                          <span className="text-[10px] text-emerald-600 mt-1 block font-mono font-bold">
                            {t("adminSelected")} {(attFileSize / 1024).toFixed(1)} KB
                          </span>
                        )}
                        {attachmentError && (
                          <span className="text-[10px] text-red-500 font-bold block mt-1">{attachmentError}</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <label className="font-semibold text-[#8A8471]">
                        {attType === "youtube" ? t("adminYtUrl") : 
                         attType === "embed_web" ? t("adminWebUrl") :
                         t("adminRefUrl")}
                      </label>
                      <input 
                        type="url"
                        required
                        value={attUrl}
                        onChange={(e) => setAttUrl(e.target.value)}
                        placeholder={
                          attType === "youtube" ? t("adminUrlPhYt") :
                          attType === "embed_web" ? t("adminUrlPhWiki") :
                          t("adminUrlPhSite")
                        }
                        className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-2.5 outline-none text-xs text-[#5A5A40]"
                      />
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={uploadingAttachment}
                    className="w-full py-2.5 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-bold rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs disabled:bg-slate-300"
                  >
                    {uploadingAttachment && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    {t("adminAttachSubmit")} {selectedModuleId}
                  </button>
                </form>
              </div>
            </div>

            {/* List Table Column */}
            <div className="lg:col-span-7 space-y-4 pr-1">
              <h4 className="font-extrabold text-xs text-[#5A5A40] uppercase tracking-wider font-sans">{t("adminAttList")}</h4>

              <div className="space-y-4">
                {currentModules.map((m) => {
                  const items = (m as any).attachments || [];
                  if (items.length === 0) return null;
                  
                  return (
                    <div key={m.id} className="border border-[#E8E4D9] rounded-2xl p-4 bg-white space-y-2">
                      <span className="text-[10px] bg-[#F1EEE6] text-[#5A5A40] py-0.5 px-2 rounded-full font-mono font-bold">{t("adminModBadge")} {m.id}: {m.title}</span>
                      
                      <div className="divide-y divide-[#F1EEE6] font-sans text-xs pt-1">
                        {items.map((item: any) => {
                          const isExpanded = expandedAdminYoutubeId === `${m.id}-${item.id}`;
                          const embedUrl = getYouTubeEmbedUrl(item.url);
                          return (
                            <div key={item.id} className="py-2.5 space-y-2">
                              <div className="flex items-center justify-between gap-3 text-xs">
                                <div className="flex items-center gap-2.5 min-w-0">
                                  {item.type === "youtube" && <Youtube className="w-4.5 h-4.5 text-red-500 shrink-0" />}
                                  {item.type === "web_link" && <Link2 className="w-4.5 h-4.5 text-blue-500 shrink-0" />}
                                  {item.type === "file" && item.fileType?.startsWith("audio") ? (
                                    <Music className="w-4.5 h-4.5 text-emerald-500 shrink-0" />
                                  ) : item.type === "file" ? (
                                    <FileText className="w-4.5 h-4.5 text-[#5A5A40] shrink-0" />
                                  ) : null}
                                  
                                  <div className="min-w-0">
                                    <span className="font-bold text-[#3D3A33] block truncate" title={item.name}>{item.name}</span>
                                    <span className="text-[9px] text-[#8A8471] block font-light truncate">
                                      {item.type === "file" ? `Local upload file (${(item.size / 1024).toFixed(1)} KB)` : `${t("adminRefLink")}${item.url}`}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-1.5 shrink-0">
                                  {item.type === "youtube" && (
                                    <button
                                      type="button"
                                      onClick={() => setExpandedAdminYoutubeId(isExpanded ? null : `${m.id}-${item.id}`)}
                                      className="px-2 py-0.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded text-[10px] font-bold cursor-pointer transition-colors"
                                    >
                                      {isExpanded ? t("adminClose") : t("adminPlayVideo")}
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDeleteAttachment(m.id, item.id)}
                                    className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                                    title={t("adminDeleteAtt")}
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                              </div>

                              {isExpanded && embedUrl && (
                                <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm border border-red-200 bg-black animate-fade-in">
                                  <iframe
                                    className="w-full h-full"
                                    src={embedUrl}
                                    title={item.name}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                  ></iframe>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}

                {/* If no module has any attachments */}
                {!currentModules.some(m => ((m as any).attachments || []).length > 0) && (
                  <div className="p-12 text-center border border-dashed border-[#D1CCBD] rounded-2xl bg-[#F9F7F2]/25 font-sans">
                    <FolderOpen className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                    <span className="text-xs font-bold text-[#3D3A33] block">{t("adminNoMedia")}</span>
                    <p className="text-[10px] text-slate-400 mt-0.5">{t("adminNoMediaSub")}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
