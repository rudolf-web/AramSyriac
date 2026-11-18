import React, { useState } from "react";
import { useLang } from "../lang";
import { 
  LogIn, 
  UserPlus, 
  ShieldAlert, 
  Lock, 
  Mail, 
  User, 
  CheckCircle, 
  Loader2, 
  BookOpen,
  ArrowRight,
  Database,
  AlertCircle
} from "lucide-react";
import { 
  isFirebaseConfigured, 
  auth, 
  db, 
  handleFirestoreError, 
  OperationType 
} from "../firebase";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

interface AramiAuthGateProps {
  onSuccess: (user: any, profile: any) => void;
}

export function AramiAuthGate({ onSuccess }: AramiAuthGateProps) {
  const { t } = useLang();
  const [activeForm, setActiveForm] = useState<"signin" | "signup" | "admin" | "forgot">("signin");
  
  // Input fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [learningReason, setLearningReason] = useState("");
  
  // Statuses
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    if (activeForm !== "forgot" && !password.trim()) return;

    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    const lowercaseEmail = email.trim().toLowerCase();

    // Firebase Auth logic
    if (isFirebaseConfigured && auth) {
      try {
        if (activeForm === "forgot") {
          await sendPasswordResetEmail(auth, lowercaseEmail);
          setSuccessMsg(t("authResetSent") + lowercaseEmail + t("authResetSentB"));
          setActiveForm("signin");
        } else if (activeForm === "signup") {
          if (!fullName.trim() || !learningReason.trim()) {
            throw new Error(t("authFillAll"));
          }
          // Register Firebase User
          const res = await createUserWithEmailAndPassword(auth, lowercaseEmail, password);
          const userId = res.user.uid;
          const isAdminEmail = lowercaseEmail === "rudolfluhukay69@guru.smp.belajar.id";
          const userProfile = {
            userId: userId,
            email: lowercaseEmail,
            fullName: fullName.trim(),
            role: isAdminEmail ? "admin" : "student",
            status: "APPROVED", // Auto-approved when using Auth-Only
            learningReason: learningReason.trim(),
            adminFeedback: "",
            createdAt: new Date().toISOString()
          };

          if (db) {
            const path = `users/${userId}`;
            try {
              await setDoc(doc(db, "users", userId), userProfile);
            } catch (dbErr) {
              handleFirestoreError(dbErr, OperationType.CREATE, path);
            }
            setSuccessMsg(t("authSignupReview"));
          } else {
            localStorage.setItem(`arami_user_profile_${userId}`, JSON.stringify(userProfile));
            setSuccessMsg(t("authSignupActive"));
          }
          setActiveForm("signin");
        } else {
          // Standard student/admin sign-in (Unified)
          await signInWithEmailAndPassword(auth, lowercaseEmail, password);
          setSuccessMsg(t("authSignedIn"));
        }
      } catch (err: any) {
        console.error("Auth error:", err);
        let msg = err.message;
        if (err.code === "auth/user-not-found") msg = t("authNoAccount");
        if (err.code === "auth/wrong-password") msg = t("authWrongPass");
        if (err.code === "auth/invalid-credential") msg = t("authBadCred");
        if (err.code === "auth/email-already-in-use") msg = t("authEmailUsed");
        setErrorMsg(msg || t("authFailed"));
      } finally {
        setLoading(false);
      }
    } else {
      // Sandboxed Mode fallback logic
      setTimeout(() => {
        const mockUid = "sandbox_" + btoa(lowercaseEmail).slice(0, 8);
        if (activeForm === "forgot") {
          setSuccessMsg(t("authSandboxReset") + lowercaseEmail + t("authSandboxResetB"));
          setActiveForm("signin");
        } else if (activeForm === "signup") {
          const mockProfile = {
            userId: mockUid,
            email: lowercaseEmail,
            fullName: fullName || t("authSandboxNew"),
            role: "student",
            status: "PENDING",
            learningReason: learningReason || t("authSandboxBible"),
            adminFeedback: "",
            createdAt: new Date().toISOString()
          };
          localStorage.setItem(`arami_sb_profile_${mockUid}`, JSON.stringify(mockProfile));
          setSuccessMsg(t("authSandboxRegistered"));
          setActiveForm("signin");
        } else {
          // Unified Sign in - Check Admin or student in Sandbox
          if (lowercaseEmail === "admin@arami.com" || lowercaseEmail === "rudolfluhukay69@guru.smp.belajar.id") {
            const mockAdmin = {
              uid: "sandbox_admin_01",
              email: lowercaseEmail,
              displayName: "Rudolf A. Luhukay",
              isDemo: true
            };
            const mockProfile = {
              userId: "sandbox_admin_01",
              email: lowercaseEmail,
              fullName: "Rudolf A. Luhukay (Super Admin)",
              role: "admin",
              status: "APPROVED",
              createdAt: new Date().toISOString()
            };
            localStorage.setItem("arami_demo_auth_user", JSON.stringify(mockAdmin));
            localStorage.setItem(`arami_sb_profile_sandbox_admin_01`, JSON.stringify(mockProfile));
            onSuccess(mockAdmin, mockProfile);
          } else {
            // Sign in student sandbox
            const savedProfileObj = localStorage.getItem(`arami_sb_profile_${mockUid}`);
            let parsedProfile = savedProfileObj ? JSON.parse(savedProfileObj) : null;
            
            if (!parsedProfile) {
              // Auto generate standard sandbox account for convenient testing
              parsedProfile = {
                userId: mockUid,
                email: lowercaseEmail,
                fullName: lowercaseEmail.split("@")[0].toUpperCase() + t("authSandboxSuffix"),
                role: "student",
                status: "PENDING", // default to pending for demo!
                learningReason: t("authSandboxReason"),
                adminFeedback: "",
                createdAt: new Date().toISOString()
              };
              localStorage.setItem(`arami_sb_profile_${mockUid}`, JSON.stringify(parsedProfile));
            }

            const mockUser = {
              uid: mockUid,
              email: lowercaseEmail,
              displayName: parsedProfile.fullName,
              isDemo: true
            };
            localStorage.setItem("arami_demo_auth_user", JSON.stringify(mockUser));
            onSuccess(mockUser, parsedProfile);
          }
        }
        setLoading(false);
      }, 700);
    }
  };

  const handleGoogleLogin = async () => {
    setErrorMsg(null);
    setLoading(true);
    if (isFirebaseConfigured && auth) {
      const provider = new GoogleAuthProvider();
      try {
        const res = await signInWithPopup(auth, provider);
        const emailVal = res.user.email || "";
        const isAdminEmail = emailVal.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id";
        
        // Check if profile exists, if not create as student Group
        const userProfile = {
          userId: res.user.uid,
          email: emailVal,
          fullName: res.user.displayName || t("authGoogleStudent"),
          role: isAdminEmail ? "admin" : "student",
          status: "APPROVED", // Auto-approved when using Auth-Only
          learningReason: t("authGoogleReason"),
          createdAt: new Date().toISOString()
        };
        if (db) {
          await setDoc(doc(db, "users", res.user.uid), userProfile);
        } else {
          localStorage.setItem(`arami_user_profile_${res.user.uid}`, JSON.stringify(userProfile));
        }
        setSuccessMsg(t("authGoogleOk"));
      } catch (err: any) {
        setErrorMsg(err.message || t("authGoogleFail"));
      } finally {
        setLoading(false);
      }
    } else {
      // Standboxed simulation
      const mockUid = "google_sandbox_user";
      const mockUser = {
        uid: mockUid,
        email: "rudolf.student@gmail.com",
        displayName: t("authGoogleSandbox"),
        isDemo: true
      };
      const mockProfile = {
        userId: mockUid,
        email: "rudolf.student@gmail.com",
        fullName: t("authGoogleSandbox"),
        role: "student",
        status: "APPROVED",
        learningReason: t("authSandboxLiturgy"),
        createdAt: new Date().toISOString()
      };
      localStorage.setItem("arami_demo_auth_user", JSON.stringify(mockUser));
      localStorage.setItem(`arami_sb_profile_${mockUid}`, JSON.stringify(mockProfile));
      onSuccess(mockUser, mockProfile);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4 sm:p-8 font-sans" id="arami-auth-gate-page">
      <div className="w-full max-w-5xl bg-white rounded-3xl border border-[#E8E4D9] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        
        {/* LEFT COLUMN: HERO MARKETING FOR LITERATE INDONESIAN USERS */}
        <div className="lg:col-span-5 bg-[#5A5A40] p-8 sm:p-12 text-[#F9F7F2] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="space-y-6 relative z-10">
            <div className="w-12 h-12 bg-[#F9F7F2] text-[#5A5A40] rounded-2xl flex items-center justify-center text-xl font-bold font-serif shadow-md">
              ܐ
            </div>
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest bg-white/15 px-3 py-1 rounded-full inline-block">
                {t("authBadge")}
              </span>
              <h2 className="text-3xl font-extrabold font-serif leading-tight text-white">
                Syriac-Aramaic Academy
              </h2>
              <p className="text-[#E8E4D9] text-xs leading-relaxed font-light">
                {t("authHero")}
              </p>
            </div>

            <div className="border-t border-[#F9F7F2]/20 pt-4 space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 bg-white/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                  <BookOpen className="w-3 h-3 text-[#EBE7DC]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold">{t("authFeatTitle")}</h4>
                  <p className="text-[10px] text-slate-300">{t("authFeatText")}</p>
                </div>
              </div>


            </div>
          </div>

          <div className="pt-8 border-t border-[#F9F7F2]/10 mt-8 relative z-10">
            <p className="text-[10px] text-[#EBE7DC]/80 italic">
              "{t("authQuote")}"
            </p>
            <span className="text-[9px] block text-amber-300 font-bold tracking-wider mt-1 uppercase font-serif">
              — Rudolf A. Luhukay, Direktur Akademi
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: INTERACTIVE LOGIN & REGISTRATION FORMS */}
        <div className="lg:col-span-7 p-6 sm:p-12 flex flex-col justify-center space-y-8">
          
          <div className="space-y-2">
            <h3 className="text-2xl font-bold font-serif text-[#3D3A33]">
              {activeForm === "signin" && t("authWelcome")}
              {activeForm === "signup" && t("authSignupTitle")}
              {activeForm === "forgot" && t("authForgotTitle")}
            </h3>
            <p className="text-xs text-[#8A8471]">
              {activeForm === "signin" && t("authSigninSub")}
              {activeForm === "signup" && t("authSignupSub")}
              {activeForm === "forgot" && t("authForgotSub")}
            </p>
          </div>

          {/* Response Alerts */}
          {errorMsg && (
            <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-xs flex gap-2 items-start relative animate-fade-in col-span-1">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-red-500" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-2xl text-xs flex gap-2 items-start relative animate-fade-in col-span-1">
              <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
              <span>{successMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Nama Lengkap (Registration ONLY) */}
            {activeForm === "signup" && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#8A8471] block">{t("authNameLabel")}</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t("authNamePh")}
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-[#5A5A40] text-xs transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Email Address Input */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#8A8471] block">{t("authEmailLabel")}</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("authEmailPh")}
                  className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-[#5A5A40] text-xs transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            {activeForm !== "forgot" && (
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#8A8471] block">{t("authPassLabel")}</label>
                  {activeForm === "signin" && (
                    <button
                      type="button"
                      onClick={() => { setActiveForm("forgot"); setErrorMsg(null); setSuccessMsg(null); }}
                      className="text-[11px] text-[#5A5A40] hover:underline font-medium cursor-pointer"
                    >
                      {t("authForgotLink")}
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="password"
                    required
                    value={password}
                    minLength={6}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl py-2.5 pl-10 pr-4 outline-none focus:border-[#5A5A40] text-xs transition-colors"
                  />
                </div>
              </div>
            )}

            {/* Learning Reason (Registration ONLY) */}
            {activeForm === "signup" && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#8A8471] block">{t("authReasonLabel")}</label>
                <textarea
                  required
                  value={learningReason}
                  onChange={(e) => setLearningReason(e.target.value)}
                  placeholder={t("authReasonPh")}
                  rows={3}
                  className="w-full bg-[#F1EEE6]/30 border border-[#D1CCBD] rounded-xl p-3 outline-none focus:border-[#5A5A40] text-xs transition-colors resize-none"
                />
              </div>
            )}

            {/* Mode Sandbox Notification for testing simplicity */}
            {!isFirebaseConfigured && (
              <div className="p-3 bg-amber-50 border border-amber-100 rounded-xl text-[10px] text-amber-900 leading-relaxed font-sans">
                <strong>{t("authSandboxNote")}</strong> {t("authSandboxNoteB")} 
                <code>rudolfluhukay69@guru.smp.belajar.id</code> {t("authSandboxNoteC")}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#5A5A40] hover:bg-[#494933] text-white font-bold rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-md shadow-[#5A5A40]/10 cursor-pointer disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  {t("authLoading")}
                </>
              ) : (
                <>
                  {activeForm === "signin" && t("authSigninBtn")}
                  {activeForm === "signup" && t("authSignupBtn")}
                  {activeForm === "forgot" && t("authForgotBtn")}
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Footer switcher links */}
            {activeForm === "signin" && (
              <div className="text-center pt-2 font-sans text-xs">
                <span className="text-[#8A8471]">{t("authNewHere")} </span>
                <button
                  type="button"
                  onClick={() => { setActiveForm("signup"); setErrorMsg(null); setSuccessMsg(null); }}
                  className="text-[#5A5A40] hover:underline font-bold cursor-pointer"
                >
                  {t("authRegisterHere")}
                </button>
              </div>
            )}

            {activeForm === "signup" && (
              <div className="text-center pt-2 font-sans text-xs">
                <span className="text-[#8A8471]">{t("authHaveAccount")} </span>
                <button
                  type="button"
                  onClick={() => { setActiveForm("signin"); setErrorMsg(null); setSuccessMsg(null); }}
                  className="text-[#5A5A40] hover:underline font-bold cursor-pointer"
                >
                  {t("authLoginHere")}
                </button>
              </div>
            )}

            {activeForm === "forgot" && (
              <div className="text-center pt-2">
                <button
                  type="button"
                  onClick={() => { setActiveForm("signin"); setErrorMsg(null); setSuccessMsg(null); }}
                  className="text-xs text-[#5A5A40] hover:underline font-bold cursor-pointer"
                >
                  {t("authBackSignin")}
                </button>
              </div>
            )}
          </form>

          {/* Google Login for Quick testing (Student & Auto checks) */}
          <div className="space-y-4 font-sans text-xs">
            <div className="relative flex py-1 items-center">
              <div className="flex-grow border-t border-[#E8E4D9]"></div>
              <span className="flex-shrink mx-4 text-xs text-slate-400">{t("authOr")}</span>
              <div className="flex-grow border-t border-[#E8E4D9]"></div>
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="w-full py-2.5 bg-white border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#3D3A33] font-semibold text-xs rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-sm cursor-pointer"
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22-.19-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              {t("authGoogleBtn")}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
