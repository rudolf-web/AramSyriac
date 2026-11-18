import React, { useState, useEffect, useRef } from "react";
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
import PronunciationRecorder from "./components/PronunciationRecorder";
import { AIAssistant } from "./components/AIAssistant";
import { FileManager } from "./components/FileManager";
import { AdminPanel } from "./components/AdminPanel";
import { AramiAuthGate } from "./components/AramiAuthGate";
import { CertificateModal } from "./components/CertificateModal";
import { DailyJournal } from "./components/DailyJournal";
import { DonationCard } from "./components/DonationCard";
import { UserProgress, Module, QuizQuestion, UserFile, ExampleSentence, VocabularyWord } from "./types";
import { LEVEL_EXAMS, LevelExamQuestion } from "./data/levelExams";
import { LangContext, LangValue } from "./lang";
import { 
  isFirebaseConfigured, 
  auth, 
  db,
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

function renderModuleEmbed(embed: string | undefined, tr: (key: string) => string): React.ReactNode {
  if (!embed || !embed.trim()) return null;
  const trimmed = embed.trim();

  // If it's a Raw IFrame code
  if (/<iframe/i.test(trimmed)) {
    return (
      <div className="space-y-2 font-sans text-xs bg-white border border-[#D1CCBD] rounded-2xl overflow-hidden mt-4">
        <div className="p-3 bg-[#FCFBF8] border-b border-[#D1CCBD] font-bold text-[#5A5A40] flex items-center justify-between">
          <span className="uppercase tracking-wider text-[10px]">{tr("embedTitle")}</span>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-medium font-sans">{tr("embedIntegrated")}</span>
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
          <span className="uppercase tracking-wider text-[10px]">{tr("embedTitle")}</span>
          <span className="text-[10px] text-red-700 bg-red-50 border border-red-200 px-2 py-0.5 rounded font-medium font-sans">{tr("embedYoutube")}</span>
        </div>
        <div className="p-4 bg-[#F9F7F2]/40">
          <div className="w-full aspect-video rounded-xl overflow-hidden border border-[#D1CCBD]/40 shadow-sm bg-black">
            <iframe
              src={ytUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title={lang === "en" ? "Integrated Learning Media" : "Media Pembelajaran Terintegrasi"}
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
          <span className="uppercase tracking-wider text-[10px]">{tr("embedRefSite")}</span>
          <span className="text-[10px] text-indigo-700 bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded font-medium">{tr("embedWebPage")}</span>
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
              {tr("embedOpenNew")}
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
        <span className="uppercase tracking-wider text-[10px]">{tr("embedNotes")}</span>
        <span className="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded font-medium">{tr("embedTeacherNote")}</span>
      </div>
      <div className="p-4 bg-[#F9F7F2]/40">
        <div className="p-4 bg-white border border-[#D1CCBD]/30 rounded-xl text-xs leading-relaxed text-[#3D3A33]">
          {trimmed}
        </div>
      </div>
    </div>
  );
}

// ---- Bilingual UI dictionary (Indonesian default, English for learners abroad) ----
// Covers the full visible interface: header, tabs, dashboard, syllabus,
// module view, quiz, level exams, admin screens, journal, file manager,
// certificate modal, auth gate, keyboard, notebook, pronunciation and
// donation card. Components read it through LangContext (see src/lang.ts).
const UI_STRINGS = {
  dashboard: { id: "Dasbor Utama", en: "Dashboard" },
  curriculum: { id: "Kurikulum Modul Tata Bahasa", en: "Grammar Modules Curriculum" },
  keyboard: { id: "Papan Ketik Aram", en: "Syriac Keyboard" },
  notebook: { id: "Buku Kosakata", en: "Vocabulary Book" },
  tutor: { id: "Tutor Bot AI", en: "AI Tutor Bot" },
  files: { id: "Berkas & Akun", en: "Files & Account" },
  completed: { id: "Selesai", en: "Completed" },
  startLearning: { id: "Mulai Belajar (Syllabus Lengkap)", en: "Start Learning (Full Syllabus)" },
  openTutor: { id: "Buka Konsultasi Tutor AI", en: "Open AI Tutor Consultation" },
  modulesDone: { id: "Modul Selesai", en: "Modules Completed" },
  vocabMemorized: { id: "Hafalan Kosakata", en: "Vocabulary Memorized" },
  words: { id: "Kata", en: "Words" },
  savedInNotebook: { id: "Tersimpan di Kamus Notebook", en: "Saved in the Vocabulary Notebook" },
  academicRanking: { id: "Ranking Akademis", en: "Academic Ranking" },
  restartDictionary: { id: "Mulai Ulang Kamus", en: "Reset Dictionary" },
  repeatProgress: { id: "Mengulang Progress Kelas", en: "Reset Class Progress" },
  syllabus: { id: "Silabus Modul Tata Bahasa", en: "Grammar Modules Syllabus" },
  finalEval: { id: "Evaluasi Akhir Kelulusan", en: "Final Graduation Evaluation" },
  teacherAccess: { id: "Akses Pengajar", en: "Teacher Access" },
  passed: { id: "✓ Lulus", en: "✓ Passed" },
  locked: { id: "🔒 Kunci", en: "🔒 Locked" },
  start: { id: "🚀 Mulai", en: "🚀 Start" },
  backToSyllabus: { id: "← Kembali ke Silabus", en: "← Back to Syllabus" },
  moduleLocked: { id: "Modul Terkunci", en: "Module Locked" },
  moduleLockedMsg: { id: "Modul ini belum dapat diakses. Anda wajib meluluskan kuis pada modul sebelumnya dengan standar kelulusan kompetensi murni (minimal 70% atau menjawab benar 7 dari 10 soal) sebelum modul selanjutnya terbuka secara otomatis.", en: "This module is not available yet. You must pass the previous module's quiz with a minimum score of 70% before the next module opens automatically." },
  prereq: { id: "Prasyarat Pembelajaran:", en: "Learning Prerequisite:" },
  prereqMsg: { id: "Luluskan seluruh kuis modul pendahulu untuk meretas kunci silabus ini.", en: "Pass all previous module quizzes to unlock this syllabus." },
  module: { id: "Modul", en: "Module" },
  introLabel: { id: "Pengantar Kajian:", en: "Introduction:" },
  contentLabel: { id: "Teori Linguistik & Tata Bahasa:", en: "Linguistics & Grammar Theory:" },
  rulesLabel: { id: "Pedoman Praktis (Aturan Kunci):", en: "Practical Guide (Key Rules):" },
  examplesLabel: { id: "Contoh Kalimat / Konteks:", en: "Example Sentences / Context:" },
  vocabLabel: { id: "Daftar Kosakata Bab:", en: "Chapter Vocabulary:" },
  means: { id: "Artinya:", en: "Meaning:" },
  fontLabel: { id: "Pilih Font Aksara & Panduan Vokal", en: "Choose Script Font & Vowel Guide" },
  fontSub: { id: "Pilih jenis font dan fahami pelambangan tanda vokal bimbingan kurikulum.", en: "Choose a font style and learn the vowel marks from the curriculum guide." },
  quizDone: { id: "✓ Anda sukses menuntaskan kuis modul ini!", en: "✓ You have completed this module's quiz!" },
  quizTodo: { id: "Tuntaskan ujian kuis di modul untuk menandai kelulusan bab.", en: "Complete the module quiz to mark this chapter as passed." },
  academicMastery: { id: "Ketuntasan Akademik:", en: "Academic Mastery:" },
  openQuiz: { id: "Buka Kuis Modul", en: "Start Module Quiz" },
  retakeQuiz: { id: "Ulangi Kuis Modul", en: "Retake Module Quiz" },
  questions: { id: "Soal", en: "Questions" },
  quizTitle: { id: "Ujian Kuis Modul", en: "Module Quiz" },
  minPass: { id: "Min. Lulus 70%", en: "Min. Pass 70%" },
  questionOf: { id: "Soal", en: "Question" },
  of: { id: "dari", en: "of" },
  checkAnswer: { id: "Periksa Jawaban", en: "Check Answer" },
  nextQuestion: { id: "Soal Berikutnya", en: "Next Question" },
  finishQuiz: { id: "Selesaikan Ujian", en: "Finish Quiz" },
  cancelQuiz: { id: "Batal Kuis", en: "Cancel Quiz" },
  correct: { id: "Benar sekali!", en: "That's correct!" },
  incorrect: { id: "Jawaban kurang tepat!", en: "Not quite right!" },
  score: { id: "Skor", en: "Score" },
  passedQuiz: { id: "✓ Selamat! Anda Lulus!", en: "✓ Congratulations! You Passed!" },
  failedQuiz: { id: "✗ Belum Memenuhi Batas Kelulusan", en: "✗ Passing Score Not Reached" },
  certOpen: { id: "E-Sertifikat Terbuka!", en: "E-Certificate Unlocked!" },
  certOpenMsg: { id: "Gelar kompetensi modul ini telah ditandatangani dan siap diunduh / dicetak.", en: "This module's competency certificate has been signed and is ready to download / print." },
  keepPracticing: { id: "Terus Berlatih", en: "Keep Practicing" },
  keepPracticingMsg: { id: "Bimbingan saksama Rudolf A. Luhukay mementingkan penguasaan yang murni.", en: "Rudolf A. Luhukay's careful guidance values true mastery." },
  backToMaterial: { id: "Kembali ke Materi", en: "Back to Material" },
  retakeNow: { id: "Ulangi Kuis Sekarang", en: "Retake the Quiz Now" },
  nextModule: { id: "Lanjut ke Modul", en: "Go to Module" },
  openExam: { id: "Buka Ujian", en: "Open Exam" },
  // ---- Generic ----
  cancel: { id: "Batal", en: "Cancel" },
  save: { id: "Simpan", en: "Save" },
  studentFallback: { id: "Siswa", en: "Student" },
  studentArami: { id: "Siswa Arami", en: "Arami Student" },
  sandboxStudent: { id: "Siswa Sandbox", en: "Sandbox Student" },
  defaultReason: { id: "Belajar sastra semitik kuno.", en: "Learning ancient Semitic literature." },
  defaultReasonBasic: { id: "Belajar dasar bahasa Aram", en: "Learning the basics of Aramaic" },
  dayStreak: { id: "Hari Streak", en: "Day Streak" },
  headerSubtitle: { id: "Bimbingan Tata Bahasa Akademis oleh Rudolf A. Luhukay", en: "Academic Grammar Guidance by Rudolf A. Luhukay" },
  headerBadge: { id: "Indonesian LMS", en: "Bilingual LMS" },
  headerBrand: { id: "ܠܶܫܳܢܳܐ • KELAS SYRIAC", en: "ܠܶܫܳܢܳܐ • SYRIAC CLASS" },
  headerHomeTitle: { id: "Kembali ke Beranda", en: "Back to Home" },
  manageClass: { id: "Kelola Kelas (Super Admin)", en: "Manage Class (Super Admin)" },
  footerNote: { id: "Rujukan otentik bahasa Aram. Bimbingan murni oleh Rudolf A. Luhukay.", en: "Authentic Aramaic references. Pure guidance by Rudolf A. Luhukay." },
  loadingTitle: { id: "Mempersiapkan Dokumen Akademi Sastra Arami...", en: "Preparing the Arami Literature Academy documents..." },
  loadingSub: { id: "Menghubungkan jalur data terenkripsi dan hak kredensial aman dari Cloud Run server.", en: "Connecting the encrypted data channel and secure credentials from the Cloud Run server." },
  editMain: { id: "Edit Detail Utama Modul", en: "Edit Module Main Details" },
  addModule: { id: "Tambah Modul Baru", en: "Add New Module" },
  addShort: { id: "Tambah", en: "Add" },
  deleteModule: { id: "Hapus Modul", en: "Delete Module" },
  // ---- Access gate ----
  gateBadge: { id: "Sesi Akses Tertutup Sementara", en: "Temporary Closed Access Session" },
  gateTitle: { id: "Menunggu Kelulusan Dokumen Mendaftar", en: "Waiting for Your Registration to Be Approved" },
  gateMsg: { id: "Aturan keselamatan kelas zero-trust melarang pembukaan Silabus, Kamus, Papan Ketik, dan Asisten Tutor AI sebelum profil Anda dikonfirmasi oleh **Rudolf A. Luhukay**.", en: "The class zero-trust safety rules do not allow opening the Syllabus, Dictionary, Keyboard, or AI Tutor Assistant until your profile is confirmed by **Rudolf A. Luhukay**." },
  gateFeedback: { id: "Pesan Koreksi Guru Rudolf:", en: "Teacher Rudolf's Correction Note:" },
  gateGoFilesA: { id: "Silakan buka tab", en: "Please open the" },
  gateGoFilesB: { id: "untuk melengkapi justifies motivasi atau memperbarui nama profil belajar Anda.", en: "tab to complete your learning motivation or update your study profile name." },
  gatePendingTitle: { id: "Status Pendaftaran: PENDING", en: "Registration Status: PENDING" },
  gatePendingMsg: { id: "Permohonan mendaftar Anda saat ini sedang dikaji oleh Administrator. Rudolf akan segera meninjau keseriusan belajar Anda dalam 1x24 jam. Terima kasih atas kesabarannya!", en: "Your registration request is currently being reviewed by the Administrator. Rudolf will review your commitment to learning within 24 hours. Thank you for your patience!" },
  gateRejected: { id: "Maaf, Pendaftaran Anda Ditangguhkan / Ditolak.", en: "Sorry, Your Registration Has Been Suspended / Rejected." },
  gateReason: { id: "Alasan:", en: "Reason:" },
  gateDefaultReason: { id: "Profil dinilai belum memenuhi kriteria kualifikasi kelas.", en: "Your profile was judged not to meet the class qualification criteria." },
  gateOpenFiles: { id: "Buka Berkas & Perbarui Profil", en: "Open Files & Update Profile" },
  // ---- Dashboard ----
  dashReviewTitle: { id: "💡 Akun Anda Sedang Dalam Masa Peninjauan Rudolf A. Luhukay:", en: "💡 Your Account Is Currently Under Review by Rudolf A. Luhukay:" },
  dashReviewBody: { id: "Sembari menunggu disetujui, Anda diperbolehkan membaca artikel pengantar di bawah ini. Halaman silabus dan tutor bot akan terbuka otomatis sesaat setelah admin menyetujui akun Anda.", en: "While waiting for approval, you may read the introductory articles below. The syllabus and tutor bot pages will open automatically as soon as the admin approves your account." },
  dashAcademy: { id: "Akademi Bahasa Aram-Syriac Indonesia", en: "Indonesian Aramaic-Syriac Academy" },
  dashHero1: { id: "Kuasai Keindahan Bahasa Aram Syriac", en: "Master the Beauty of the Syriac Aramaic Language" },
  dashHero2: { id: "Aksara Yesus & Sastra Timur Klasik", en: "The Script of Jesus & Classical Eastern Literature" },
  dashWelcome: { id: "Selamat datang di LMS (Learning Management System) terpadu. Mempersembahkan kurikulum modul tata bahasa Aram klasik dalam pengantar tata bahasa Indonesia. Pelajari abjad Alap-Beth, harakat Serto/Madnhaya, hingga analisis frasa doa Bapa Kami secara orisinal bersama program bimbingan Rudolf A. Luhukay.", en: "Welcome to the integrated LMS (Learning Management System). Presenting a classical Aramaic grammar module curriculum in Indonesian. Learn the Alap-Beth alphabet, Serto/Madnhaya vowels, and an original analysis of the Lord's Prayer phrases with Rudolf A. Luhukay's guidance programme." },
  rankTop: { id: "Syamas Arami Utama", en: "Chief Arami Syamas" },
  rankMid: { id: "Cendikiawan Madya", en: "Intermediate Scholar" },
  rankLow: { id: "Cantrik Pemula", en: "Beginner Student" },
  dashPillars: { id: "Pilar Keilmuan Aksara Sastrawi Arami", en: "Pillars of Aramaic Literary Scholarship" },
  dashPillar1T: { id: "Gaya Tulis Serto Barat", en: "Western Serto Writing Style" },
  dashPillar1X: { id: "Serto merupakan bentuk kursif ringkas nan estetik dari dinasti keagamaan barat. Memiliki keterbacaan yang tinggi serta tata letak harakat yang sangat saksama demi pengucapan suara liturgi kuno.", en: "Serto is a concise, aesthetic cursive form from the Western religious tradition. It is highly readable, with carefully placed vowel marks for pronouncing the ancient liturgical sounds." },
  dashPillar2T: { id: "Doa Komunal Konsonantal", en: "Communal Consonantal Prayer" },
  dashPillar2X: { id: "Setiap abjad merepresentasikan akar kata dasar Semitik yang membentuk makna universal. Belajar bahasa ini menghidupkan kembali pemahaman konteks hermeneutika teologi primer.", en: "Every letter represents a Semitic root that carries universal meaning. Learning this language revives an understanding of the primary theological hermeneutics context." },
  dashPillar3T: { id: "Bimbingan Terkelola", en: "Guided Mentorship" },
  dashPillar3X: { id: "Dengan sistem kurikulum modul berjenjang, asisten bot pintar, serta gudang berkas mandiri, Rudolf A. Luhukay mempersembahkan metode murni, mengayomi setiap langkah studi saksama Anda.", en: "With a leveled module curriculum, a smart bot assistant, and a personal file library, Rudolf A. Luhukay offers a pure method that guides every step of your careful study." },
  // ---- Level exam ----
  examSidebarTitle: { id: "Ujian Akhir Level", en: "Level Final Exam" },
  examReqOpen: { id: "✓ Syarat Terbuka", en: "✓ Requirements Met" },
  examReqLocked: { id: "🔒 Masih Terkunci", en: "🔒 Still Locked" },
  examSubA1: { id: "Ujian Kelulusan Tingkat Dasar - Beginner (A1)", en: "Beginner Level Graduation Exam (A1)" },
  examSubA2: { id: "Ujian Kelulusan Tingkat Menengah - Intermediate (A2)", en: "Intermediate Level Graduation Exam (A2)" },
  examSubB1: { id: "Ujian Kelulusan Tingkat Lanjut - Threshold (B1)", en: "Advanced Level Graduation Exam (B1)" },
  examPassedTitle: { id: "Selamat, Anda Lulus!", en: "Congratulations, You Passed!" },
  examFailedTitle: { id: "Belum Berhasil Kelulusan", en: "Not Passed Yet" },
  examPassedMsg: { id: "Luar biasa! Anda telah menyelesaikan seluruh rangkaian evaluasi akademik komprehensif Bahasa Arami untuk Level {level} dengan standar kelulusan yang murni.", en: "Amazing! You have completed the full comprehensive Aramaic academic evaluation for Level {level} to a pure passing standard." },
  examFailedMsg: { id: "Sayang sekali Anda memperoleh skor di bawah batas kompetensi minimal 70% (minimal 7 soal benar). Mari tinjau materi dan coba lagi.", en: "Unfortunately your score is below the minimum competency threshold of 70% (at least 7 correct answers). Review the material and try again." },
  examReport: { id: "Hasil Laporan Akademik", en: "Academic Report" },
  examScorePct: { id: "Skor Persentase:", en: "Percentage Score:" },
  examStatusPass: { id: "Status: LULUS", en: "Status: PASSED" },
  examStatusFail: { id: "Status: TIDAK LULUS", en: "Status: FAILED" },
  examPrintLevel: { id: "Cetak E-Sertifikat Level", en: "Print Level E-Certificate" },
  examRetakeLevel: { id: "Ulangi Ujian Level", en: "Retake Level Exam" },
  examEvalBadge: { id: "Ujian Evaluasi Kelulusan", en: "Graduation Evaluation Exam" },
  examQuizOf: { id: "Kuis Evaluasi", en: "Evaluation Quiz" },
  examProgress: { id: "Progres:", en: "Progress:" },
  examCorrect: { id: "✓ Benar sekali!", en: "✓ That's correct!" },
  examIncorrect: { id: "✗ Jawaban kurang tepat!", en: "✗ Not quite right!" },
  examExit: { id: "Keluar Ujian", en: "Exit Exam" },
  examSubmit: { id: "Kirim & Periksa Jawaban", en: "Submit & Check Answer" },
  examNextQ: { id: "Pertanyaan Berikutnya", en: "Next Question" },
  examFinalTitle: { id: "Ujian Akhir Kelulusan Level", en: "Level Graduation Final Exam" },
  examLockedTitle: { id: "Kunci Pelatihan Akademik Belum Terbuka", en: "Academic Training Key Not Yet Unlocked" },
  examLockedMsg: { id: "Anda wajib menyelesaikan seluruh kuis materi pembelajaran Bahasa Aram tingkat {level} terlebih dahulu dengan ketuntasan penuh sebelum diizinkan menguji kelulusan komprehensif ini.", en: "You must first complete all Aramaic learning material quizzes for Level {level} in full before you may take this comprehensive graduation exam." },
  examMissingTitle: { id: "Sisa Modul yang Wajib Digarap:", en: "Modules Still to Complete:" },
  examRulesTitle: { id: "Aturan Ujian Kelulusan Resmi", en: "Official Graduation Exam Rules" },
  examRule1a: { id: "Terdiri dari", en: "Consists of" },
  examRule1b: { id: "10 butir pertanyaan pilihan ganda", en: "10 multiple-choice questions" },
  examRule2: { id: "Mencakup seluruh tata bahasa, kosa kata, sapaan murni, dan teologi historis Level {level}.", en: "Covers all grammar, vocabulary, pure greetings, and historical theology of Level {level}." },
  examRule3a: { id: "Skor kelulusan minimal adalah 70%", en: "The minimum passing score is 70%" },
  examRule3b: { id: "(menjawab 7 atau lebih pertanyaan secara benar).", en: "(answer 7 or more questions correctly)." },
  examRule4a: { id: "Jika dinyatakan lulus, Anda berhak memperoleh", en: "If you pass, you are entitled to receive" },
  examRule4b: { id: "E-Sertifikat Kelulusan Level Resmi", en: "an Official Level Graduation E-Certificate" },
  examRule4c: { id: "dengan nama pribadi Anda.", en: "with your own name on it." },
  examAlreadyPassed: { id: "✓ Anda Telah Lulus Level Ini!", en: "✓ You Have Passed This Level!" },
  examHighScore: { id: "Skor Tertinggi Anda:", en: "Your Highest Score:" },
  examPrintCert: { id: "Cetak E-Sertifikat", en: "Print E-Certificate" },
  examRetakeFull: { id: "Ulangi Ujian Kelulusan", en: "Retake Graduation Exam" },
  examStartFull: { id: "Mulai Ujian Kelulusan", en: "Start Graduation Exam" },
  // ---- Confirms / alerts / errors (visible) ----
  confirmReset: { id: "Apakah Anda yakin ingin menghapus seluruh kemajuan belajar? Tindakan ini bersifat permanen.", en: "Are you sure you want to delete all your learning progress? This action is permanent." },
  errFileTooBig: { id: "Batas dokumen terlampaui. Dokumen tugas latihan di modul maksimal adalah 1.2MB.", en: "Document size limit exceeded. Module practice task documents may be at most 1.2MB." },
  errUploadFailed: { id: "Pengunggahan gagal: ", en: "Upload failed: " },
  confirmDeleteModFile: { id: "Apakah Anda yakin ingin menghapus berkas latihan modul ini?", en: "Are you sure you want to delete this module practice file?" },
  errDeleteFile: { id: "Gagal menghapus file: ", en: "Failed to delete file: " },
  newModTitle: { id: "Tata Bahasa Baru", en: "New Grammar Topic" },
  newModSummary: { id: "Deskripsi ringkas materi bab baru.", en: "A brief description of the new chapter material." },
  newModIntro: { id: "Pendahuluan pilar baru tata bahasa.", en: "Introduction to a new grammar pillar." },
  newModContent: { id: "Uraian teoretis komprehensif aksara dan tata bahasa bimbingan.", en: "A comprehensive theoretical overview of the guided script and grammar." },
  newModRule1: { id: "Aturan dasar 1", en: "Basic rule 1" },
  newModRule2: { id: "Aturan dasar 2", en: "Basic rule 2" },
  newModQuizQ: { id: "Apakah nama materi bab baru ini?", en: "What is the name of this new chapter material?" },
  newModQuizOpt2: { id: "Manuskrip Kuno", en: "Ancient Manuscript" },
  newModQuizOpt3: { id: "LMS Arami", en: "Arami LMS" },
  newModQuizExpl: { id: "Menandakan judul rujukan bab baru yang sukses dibuat.", en: "It marks the title of a newly created chapter reference." },
  confirmDeleteModule: { id: "Hapus Modul {id} beserta kuis dan lampirannya secara permanen?", en: "Permanently delete Module {id} with its quiz and attachments?" },
  errAttachTooBig: { id: "Ukuran maksimal bimbingan berkas lampiran adalah 1.5MB.", en: "The maximum guided attachment file size is 1.5MB." },
  errAttachRead: { id: "Gagal membaca encoder berkas.", en: "Failed to read the file encoder." },
  alertAttachNeed: { id: "Masukkan tautan atau pilih unggahtan berkas rujukan.", en: "Enter a link or choose a reference file to upload." },
  confirmDeleteAttach: { id: "Hapus lampiran materi rujukan ini?", en: "Delete this reference material attachment?" },
  // ---- Embedded material helper ----
  embedTitle: { id: "Materi Multimedia & Rekomendasi Guru", en: "Multimedia Material & Teacher Recommendations" },
  embedIntegrated: { id: "Semat Terpadu", en: "Integrated Embed" },
  embedYoutube: { id: "Video YouTube", en: "YouTube Video" },
  embedRefSite: { id: "Situs Rujukan / Pranala Luar", en: "Reference Site / External Link" },
  embedWebPage: { id: "Halaman Web", en: "Web Page" },
  embedOpenNew: { id: "Buka dalam tab baru ↗", en: "Open in a new tab ↗" },
  embedNotes: { id: "Catatan Pembelajaran Tambahan", en: "Additional Learning Notes" },
  embedTeacherNote: { id: "Catatan Guru", en: "Teacher's Note" },
  // ---- Font / vowel panel ----
  fontStyle: { id: "Karakteristik Gaya", en: "Style Characteristics" },
  fontEstrDesc: { id: "Aksara tertua dan paling geometris digunakan dalam manuskrip klasik awal. Secara historis tidak menggunakan sistem vokal diakritik penuh, melainkan hanya titik pluralitas (Seyame) atau titik pembeda homograf.", en: "The oldest and most geometric script, used in early classical manuscripts. Historically it did not use a full diacritic vowel system, only plurality dots (Seyame) or dots that distinguish homographs." },
  fontSertoDesc: { id: "Aksara mengalir/kursif versi Barat (Syria Barat). Menggunakan adaptasi huruf vokal Yunani versi kecil yang dilekatkan di atas atau di bawah huruf dasar untuk melambangkan kualitas ucapan vokal.", en: "The flowing/cursive Western (West Syrian) script. It uses small adapted Greek vowel letters attached above or below the base letter to mark vowel quality." },
  fontEastDesc: { id: "Aksara Timur (Madenhoyo/Madenkhaya) yang digunakan secara tradisional di Irak, Persia Timur, dan liturgi Timur. Menggunakan tatanan titik diakritik yang diatur secara presisi di atas dan dibawah huruf dasar.", en: "The Eastern (Madenhoyo/Madenkhaya) script traditionally used in Iraq, Eastern Persia, and Eastern liturgy. It uses diacritic dots arranged precisely above and below the base letter." },
  fontVowels: { id: "Sistem Vokalisasi Terkait (Vowel Marks)", en: "Related Vocalisation System (Vowel Marks)" },
  fontSymbol: { id: "Simbol:", en: "Symbol:" },
  fontDotsTop: { id: "Dua titik sejajar atas", en: "Two dots level above" },
  fontDotsDiagTop: { id: "Dua titik serong atas", en: "Two dots slanted above" },
  fontDotBelow: { id: "Satu titik di bawah", en: "One dot below" },
  fontDotsDiagBelow: { id: "Dua titik serong bawah", en: "Two dots slanted below" },
  fontWawAbove: { id: "Satu titik di atas Waw", en: "One dot above Waw" },
  fontWawBelow: { id: "Satu titik di bawah Waw", en: "One dot below Waw" },
  // ---- Admin inline forms ----
  adminQuickForm: { id: "Formulir Koreksi Cepat Modul", en: "Module Quick Correction Form" },
  formTitleId: { id: "Judul Bahasa Indonesia:", en: "Indonesian Title:" },
  formTitleSyriac: { id: "Judul Aram (Syriac):", en: "Aramaic (Syriac) Title:" },
  formCategory: { id: "Kategori Level:", en: "Level Category:" },
  formSummary: { id: "Abstraksi Ringkas:", en: "Brief Summary:" },
  formContent: { id: "Teori Linguistik & Tata Bahasa (Konten):", en: "Linguistics & Grammar Theory (Content):" },
  formEmbed: { id: "Embed Materi Multimedia / Referensi Web (Opsional):", en: "Embed Multimedia Material / Web Reference (Optional):" },
  formEmbedHint: { id: "Masukkan link YouTube, website interaktif, atau kode draf HTML", en: "Enter a YouTube link, interactive website, or HTML draft code" },
  formEmbedPh: { id: "Contoh: https://www.youtube.com/embed/... atau <iframe src='...'></iframe>", en: "Example: https://www.youtube.com/embed/... or <iframe src='...'></iframe>" },
  addRule: { id: "Tambah Aturan Baru", en: "Add New Rule" },
  ruleShort: { id: "Aturan", en: "Rule" },
  rulePh: { id: "Tulis aturan praktis...", en: "Write a practical rule..." },
  delRule: { id: "Hapus Aturan", en: "Delete Rule" },
  addExample: { id: "Tambah Contoh", en: "Add Example" },
  exampleShort: { id: "Contoh", en: "Example" },
  addExampleTitle: { id: "TAMBAH CONTOH BARU", en: "ADD NEW EXAMPLE" },
  exPhTranslit: { id: "Transliterasi: e.g. Šlāmā", en: "Transliteration: e.g. Šlāmā" },
  exPhPhonetic: { id: "Fonetika: e.g. shlama", en: "Phonetics: e.g. shlama" },
  exPhIndonesian: { id: "B. Indonesia: e.g. Halo", en: "Indonesian: e.g. Halo" },
  delExample: { id: "Hapus Contoh", en: "Delete Example" },
  addVocab: { id: "Tambah Kosakata", en: "Add Vocabulary" },
  vocabShort: { id: "Kosakata", en: "Vocabulary" },
  addVocabTitle: { id: "TAMBAH KOSAKATA BARU", en: "ADD NEW VOCABULARY" },
  vocabPhTranslit: { id: "Transliterasi", en: "Transliteration" },
  vocabPhMeaning: { id: "Arti", en: "Meaning" },
  delVocab: { id: "Hapus Kosakata", en: "Delete Vocabulary" },
  // ---- Inline attachments (module pane) ----
  attachTitle: { id: "📂 Materi Media & Audio Rujukan Guru Rudolf:", en: "📂 Teacher Rudolf's Reference Media & Audio Material:" },
  addAttach: { id: "Tambah Lampiran Baru", en: "Add New Attachment" },
  addRef: { id: "Tambah Referensi", en: "Add Reference" },
  attachFormTitle: { id: "Formulir Media Rujukan Baru (Teks, PDF, MP3, MP4, Web/YouTube)", en: "New Reference Media Form (Text, PDF, MP3, MP4, Web/YouTube)" },
  attachName: { id: "Nama Rujukan:", en: "Reference Name:" },
  attachNamePh: { id: "Contoh: Audio Nyanyian Kudus Modul", en: "Example: Module Sacred Chant Audio" },
  attachType: { id: "Tipe/Format Media:", en: "Media Type/Format:" },
  attOptYoutube: { id: "Sematkan Video YouTube / Video Embed", en: "Embed YouTube Video / Video Embed" },
  attOptWeb: { id: "Sematkan Halaman Web / Web IFrame Embed", en: "Embed Web Page / Web IFrame Embed" },
  attOptText: { id: "Sematkan Teks Catatan / Rujukan Langsung", en: "Embed Note Text / Direct Reference" },
  attOptMp3: { id: "Sematkan Audio MP3 (Pemutar Suara/Lagu)", en: "Embed MP3 Audio (Sound/Song Player)" },
  attOptMp4: { id: "Sematkan Video MP4 (Pemutar Rekaman)", en: "Embed MP4 Video (Recording Player)" },
  attOptPdf: { id: "PDF (Buku Pegangan / Makalah) - Unduhan", en: "PDF (Handbook / Paper) - Download" },
  attOptTxt: { id: "Teks / Rujukan Tertulis (.txt) - Unduhan", en: "Text / Written Reference (.txt) - Download" },
  attOptLink: { id: "Tautan Web Umum (Hanya Link Luar)", en: "General Web Link (External Link Only)" },
  attachWriteText: { id: "Tulis / Salin Catatan atau Teks Materi di Sini:", en: "Write / Paste the Note or Material Text Here:" },
  attachPasteCode: { id: "Tempel / Paste Kode HTML IFrame Kustom:", en: "Paste Custom HTML IFrame Code:" },
  attachTypeTextPh: { id: "Ketik rujukan atau materi teks yang ingin Anda bagikan langsung ke siswa...", en: "Type the reference or text material you want to share directly with students..." },
  attachPastePh: { id: "Tempelkan kode <iframe ...></iframe> atau div HTML rujukan dari Wayground, Google Docs, dsb...", en: "Paste an <iframe ...></iframe> code or HTML div reference from Wayground, Google Docs, etc..." },
  attachHtmlNote: { id: "Sistem akan merender kode HTML secara langsung ke siswa tanpa merusak tatanan font Bahasa Arami. Gunakan dengan bijak.", en: "The system will render the HTML code directly to students without breaking the Aramaic font layout. Use it wisely." },
  attachPickFile: { id: "Pilih Berkas Komputer (Max 1.5MB):", en: "Choose a File from Your Computer (Max 1.5MB):" },
  attachOrPaste: { id: "Atau Paste URL Tautan Berkas Langsung...", en: "Or Paste a Direct File Link URL..." },
  attachProcessing: { id: "Memproses encoder file...", en: "Processing file encoder..." },
  attachYtLabel: { id: "Alamat Video YouTube (URL / Share Link):", en: "YouTube Video Address (URL / Share Link):" },
  attachWebLabel: { id: "Alamat Website / Halaman untuk di-Sematkan (URL):", en: "Website Address / Page to Embed (URL):" },
  attachWebLinkLabel: { id: "Tautan Web Rujukan:", en: "Reference Web Link:" },
  attachUrlPhYt: { id: "Contoh: https://www.youtube.com/watch?v=...", en: "Example: https://www.youtube.com/watch?v=..." },
  attachUrlPhWiki: { id: "Contoh: https://id.wikipedia.org/wiki/Bahasa_Aram", en: "Example: https://en.wikipedia.org/wiki/Aramaic_language" },
  attachUrlPhSite: { id: "Contoh: https://situs-rujukan.com", en: "Example: https://reference-site.com" },
  saveRef: { id: "Simpan Referensi", en: "Save Reference" },
  attachFormat: { id: "Format/Jenis:", en: "Format/Type:" },
  attachEmbedMedia: { id: "MEDIA SEMATAN (IFRAME/HTML)", en: "EMBEDDED MEDIA (IFRAME/HTML)" },
  delRef: { id: "Hapus referensi rujukan", en: "Delete reference" },
  attachBadUrl: { id: "Format URL tidak valid: ", en: "Invalid URL format: " },
  openYoutube: { id: "Buka di YouTube ↗ (Masalah Pemutaran)", en: "Open on YouTube ↗ (Playback Issue)" },
  openSite: { id: "Buka Situs di Tab Baru ↗", en: "Open Site in New Tab ↗" },
  dlMp3: { id: "Unduh File Audio MP3 ⤓", en: "Download MP3 Audio File ⤓" },
  dlMp4: { id: "Unduh Video MP4 ⤓", en: "Download MP4 Video ⤓" },
  openPdf: { id: "Buka / Unduh Dokumen PDF", en: "Open / Download PDF Document" },
  openRef: { id: "Buka Tautan Rujukan Luar ↗", en: "Open External Reference Link ↗" },
  reviewFile: { id: "Kaji / Unduh Berkas", en: "Review / Download File" },
  taskFormTitle: { id: "Formulir Kirim Tugas Latihan Modul", en: "Module Practice Task Submission Form" },
  taskSubmitLabel: { id: "Kirim Berkas Jawaban Modul", en: "Submit Module Answer File" },
  taskFilesError: { id: "Gagal melacak tugas modul: ", en: "Failed to load module tasks: " },
  taskFormSub: { id: "Unggah berkas Word, Excel, PDF, atau gambar latihan latihan modul di sini untuk dikaji Bapak Rudolf.", en: "Upload your Word, Excel, PDF, or module practice image files here for Mr Rudolf to review." },
  taskDrop: { id: "Tarik dokumen ke mari atau klik untuk mencari. Maksimal berkas 1.2MB", en: "Drag your document here or click to browse. Maximum file size 1.2MB" },
  taskHistory: { id: "Riwayat Pengiriman Tugas Anda", en: "Your Task Submission History" },
  // ---- Auth gate (AramiAuthGate) ----
  authResetSent: { id: "Tautan penyetelan ulang kata sandi telah berhasil dikirim ke ", en: "A password reset link has been sent to " },
  authResetSentB: { id: ". Silakan periksa folder kotak masuk atau spam email Anda.", en: ". Please check your inbox or spam folder." },
  authFillAll: { id: "Mohon lengkapi seluruh kolom pendaftaran.", en: "Please complete all registration fields." },
  authSignupReview: { id: "Pendaftaran berhasil diajukan! Formulir Anda sekarang sedang ditinjau oleh Rudolf A. Luhukay.", en: "Registration submitted! Your form is now being reviewed by Rudolf A. Luhukay." },
  authSignupActive: { id: "Pendaftaran berhasil! Akun Anda aktif. Silakan lakukan masuk.", en: "Registration successful! Your account is active. Please sign in." },
  authSignedIn: { id: "Berhasil masuk ke ruang kelas!", en: "Welcome to the classroom!" },
  authNoAccount: { id: "Akun tidak ditemukan. Silakan lakukan pendaftaran.", en: "Account not found. Please register." },
  authWrongPass: { id: "Kata sandi salah. Silakan coba kembali.", en: "Wrong password. Please try again." },
  authBadCred: { id: "Email atau kata sandi Anda salah. Silakan periksa kembali.", en: "Your email or password is wrong. Please check again." },
  authEmailUsed: { id: "Alamat email sudah digunakan oleh anggota lain.", en: "This email address is already used by another member." },
  authFailed: { id: "Gagal memproses permintaan otentikasi.", en: "Failed to process the authentication request." },
  authSandboxReset: { id: "Mode Sandbox: Tautan penyetelan ulang disimulasikan dikirim ke ", en: "Sandbox Mode: A reset link was simulated as sent to " },
  authSandboxResetB: { id: ". Di Mode Sandbox, silakan langsung masuk menggunakan kata sandi apa saja!", en: ". In Sandbox Mode, just sign in with any password!" },
  authSandboxNew: { id: "Siswa Baru Sandbox", en: "New Sandbox Student" },
  authSandboxRegistered: { id: "Akun Sandbox sukses didaftarkan (PENDING)! Silakan melakukan login.", en: "Sandbox account registered (PENDING)! Please log in." },
  authSandboxReason: { id: "Belajar tata bahasa Semit dari nol", en: "Learning Semitic grammar from scratch" },
  authGoogleStudent: { id: "Siswa Arami Google", en: "Arami Google Student" },
  authGoogleReason: { id: "Belajar di Akademi", en: "Learning at the Academy" },
  authGoogleOk: { id: "Sukses sign in menggunakan akun Google!", en: "Signed in with Google successfully!" },
  authGoogleFail: { id: "Gagal masuk lewat Google Authentication.", en: "Failed to sign in with Google Authentication." },
  authGoogleSandbox: { id: "Siswa Google Sandbox", en: "Google Sandbox Student" },
  authSandboxLiturgy: { id: "Kebutuhan liturgi dan hermeneutika", en: "Liturgy and hermeneutics needs" },
  authSandboxBible: { id: "Mempelajari manuskrip Alkitab Aram", en: "Studying Aramaic Bible manuscripts" },
  authSandboxSuffix: { id: " (Siswa Sandbox)", en: " (Sandbox Student)" },
  authBadge: { id: "Sistem LMS Terpadu", en: "Integrated LMS System" },
  authHero: { id: "Selamat datang di platform akademik digital khusus pembelajaran aksara dan tata bahasa Aram-Syriac dalam pengantar bahasa Indonesia.", en: "Welcome to the digital academic platform for learning the Aramaic-Syriac script and grammar in Indonesian." },
  authFeatTitle: { id: "Modul Terstruktur Berkelanjutan", en: "Structured Ongoing Modules" },
  authFeatText: { id: "Kurikulum komprehensif dari dasar abjad Aram hingga puisi liturgi klasik.", en: "A comprehensive curriculum from the basics of the Aramaic alphabet to classical liturgical poetry." },
  authQuote: { id: "Kuasai keindahan linguistik timur tengah klasik bersama bimbingan akademis murni.", en: "Master the beauty of classical Middle Eastern linguistics with pure academic guidance." },
  authWelcome: { id: "Selamat Datang di Portal", en: "Welcome to the Portal" },
  authSignupTitle: { id: "Ajukan Pendaftaran Anggota Baru", en: "Apply for New Membership" },
  authForgotTitle: { id: "Atur Ulang Kata Sandi", en: "Reset Password" },
  authSigninSub: { id: "Silakan masuk dengan email terdaftar Anda untuk melihat silabus & materi.", en: "Please sign in with your registered email to see the syllabus & materials." },
  authSignupSub: { id: "Mohon isi formulir motivasi belajar secara jujur untuk peninjauan Rudolf Luhukay.", en: "Please fill in the learning motivation form honestly for Rudolf Luhukay's review." },
  authForgotSub: { id: "Masukkan alamat email terdaftar Anda untuk menerima tautan instruksi penyetelan ulang kata sandi.", en: "Enter your registered email address to receive password reset instructions." },
  authNameLabel: { id: "Nama Lengkap (Siswa):", en: "Full Name (Student):" },
  authNamePh: { id: "Contoh: Rudolf Augustinus", en: "Example: Rudolf Augustinus" },
  authEmailLabel: { id: "Alamat Surat Elektronik (Email):", en: "Email Address:" },
  authEmailPh: { id: "Contoh: nama@domain.com", en: "Example: name@domain.com" },
  authPassLabel: { id: "Kata Sandi (Min 6 Karakter):", en: "Password (Min 6 Characters):" },
  authForgotLink: { id: "Lupa kata sandi?", en: "Forgot password?" },
  authReasonLabel: { id: "Mengapa Anda Ingin Belajar Bahasa Aram Syriac?:", en: "Why Do You Want to Learn Syriac Aramaic?:" },
  authReasonPh: { id: "Sebutkan tujuan Anda bergabung (misal: Penelitian teologis, minat linguistik Semit, rujukan manuskrip sejarah...)", en: "State your reason for joining (e.g. theological research, interest in Semitic linguistics, historical manuscript references...)" },
  authSandboxNote: { id: "💡 Info Mode Demo Sandbox:", en: "💡 Sandbox Demo Mode Info:" },
  authSandboxNoteB: { id: "Anda dapat menggunakan email mana pun untuk simulasi. Untuk masuk admin, gunakan email", en: "You can use any email for the simulation. To sign in as admin, use the email" },
  authSandboxNoteC: { id: "(kata sandi bebas).", en: "(any password)." },
  authLoading: { id: "Mengontak Pusat Data Kelas...", en: "Contacting the Class Data Centre..." },
  authSigninBtn: { id: "Masuk Kelas Sastra", en: "Enter Literature Class" },
  authSignupBtn: { id: "Ajukan Formulir Keanggotaan", en: "Submit Membership Form" },
  authForgotBtn: { id: "Kirim Tautan Atur Ulang", en: "Send Reset Link" },
  authNewHere: { id: "Siswa baru dan belum memiliki akun?", en: "New student without an account yet?" },
  authRegisterHere: { id: "Daftar / Registrasi Di Sini", en: "Register Here" },
  authHaveAccount: { id: "Sudah terdaftar sebagai siswa?", en: "Already registered as a student?" },
  authLoginHere: { id: "Masuk / Login Di Sini", en: "Sign In Here" },
  authBackSignin: { id: "Kembali ke Halaman Masuk", en: "Back to Sign-In Page" },
  authOr: { id: "atau", en: "or" },
  authGoogleBtn: { id: "Lanjutkan dengan Google", en: "Continue with Google" },
  // ---- Certificate modal ----
  certLevelTitle: { id: "Sertifikat Kelulusan Resmi Level", en: "Official Level Graduation Certificate" },
  certModTitle: { id: "Sertifikat Kompetensi Modul", en: "Module Competency Certificate" },
  certNameLabel: { id: "Konfirmasi Nama Lengkap Penerima (Dapat Diubah untuk Dicetak)", en: "Confirm Recipient's Full Name (Can Be Changed for Printing)" },
  certNamePh: { id: "Masukkan nama lengkap beserta gelar...", en: "Enter your full name with titles..." },
  certApply: { id: "Terapkan", en: "Apply" },
  certSaved: { id: "Tersimpan", en: "Saved" },
  certNameHint: { id: "* Silakan ketik nama lengkap Anda untuk ditampilkan secara estetis di lembar sertifikat di bawah ini.", en: "* Please type your full name to be displayed elegantly on the certificate below." },
  certHonor: { id: "Sertifikat Kehormatan Akademik", en: "Academic Honour Certificate" },
  certStates: { id: "Dengan penuh apresiasi akademis, dewan pengajar akademi menyatakan bahwa:", en: "With full academic appreciation, the academy's teaching board declares that:" },
  certStudentFallback: { id: "Siswa Arami Academy", en: "Arami Academy Student" },
  certLevelLabel: { id: "TINGKAT KELULUSAN BAHASA", en: "LANGUAGE GRADUATION LEVEL" },
  certModuleLabel: { id: "JUDUL MODUL KURSUS", en: "COURSE MODULE TITLE" },
  certIssued: { id: "Diterbitkan Pada", en: "Issued On" },
  certTeacher: { id: "Guru Pengampu Bahasa Aram", en: "Aramaic Language Teacher" },
  certCouncil: { id: "Dewan Pengajar Arami Academy", en: "Arami Academy Teaching Board" },
  certPrintTipA: { id: "Saran Pencetakan", en: "Printing Tip" },
  certPrintTipB: { id: ": Atur orientasi cetak/save PDF Anda ke ", en: ": Set your print/save PDF orientation to " },
  certPrintTipC: { id: "Landscape (Lanskap)", en: "Landscape" },
  certPrintTipD: { id: " agar sertifikat tercetak secara penuh dan proporsional.", en: " so the certificate prints fully and proportionally." },
  certBack: { id: "Kembali", en: "Back" },
  certPrint: { id: "Cetak / Simpan PDF", en: "Print / Save PDF" },
  certSigAlt: { id: "Tanda Tangan Rudolf A. Luhukay", en: "Signature of Rudolf A. Luhukay" },
  certTitleA1: { id: "KELULUSAN TATA BAHASA TINGKAT A1", en: "LEVEL A1 GRAMMAR GRADUATION" },
  certDescA1: { id: "Telah lulus secara komprehensif setelah menempuh evaluasi materi murni, menguasai naskah Serto Barat, pengenalan vokal, pelafalan liturgy asli, kata dasar, dan interaksi partikel bahasa Aram level awal pada:", en: "Has passed comprehensively after completing the pure material evaluation, mastering the Western Serto script, vowel recognition, original liturgical pronunciation, root words, and Aramaic particle interaction at beginner level, in:" },
  certProgA1: { id: "PROGRAM SERTIFIKASI TINGKAT A1 (BEGINNER)", en: "LEVEL A1 CERTIFICATION PROGRAMME (BEGINNER)" },
  certTitleA2: { id: "KELULUSAN TATA BAHASA TINGKAT A2", en: "LEVEL A2 GRAMMAR GRADUATION" },
  certDescA2: { id: "Telah lulus secara komprehensif dalam penguasaan tata bahasa lanjutan, mencakup status mutlak kata benda (Absolute State), relasi genetif konstruktif, konjugasi kata kerja Peal lampau (Perfect Aspect), serta pemahaman pronomina terikat dalam literatur Semitik Klasik pada:", en: "Has passed comprehensively in advanced grammar mastery, covering the absolute state of nouns, constructive genitive relations, Peal past verb conjugation (Perfect Aspect), and bound pronouns in Classical Semitic literature, in:" },
  certProgA2: { id: "PROGRAM SERTIFIKASI TINGKAT A2 (ELEMENTARY)", en: "LEVEL A2 CERTIFICATION PROGRAMME (ELEMENTARY)" },
  certTitleB1: { id: "KELULUSAN TATA BAHASA TINGKAT B1", en: "LEVEL B1 GRAMMAR GRADUATION" },
  certDescB1: { id: "Telah lulus secara istimewa dalam program kemandirian sistem verba intensif (Pael), kausatif aktif (Aphel), pasif-refleksif murni (Ethpeel), serta transliterasi analitis-kritis karya puisi dan doa Doa Liturgi Klasik Bapa Kami pada:", en: "Has passed with distinction in the intensive verb system programme (Pael), active causative (Aphel), pure passive-reflexive (Ethpeel), and the analytical-critical transliteration of classical liturgical poetry and the Lord's Prayer, in:" },
  certProgB1: { id: "PROGRAM SERTIFIKASI TINGKAT B1 (INTERMEDIATE)", en: "LEVEL B1 CERTIFICATION PROGRAMME (INTERMEDIATE)" },
  certModTitleText: { id: "KOMPETENSI MATERI AJAR", en: "TEACHING MATERIAL COMPETENCY" },
  certModDesc: { id: "Telah dinyatakan lulus secara gemilang dalam menyelesaikan modul interaktif, menguasai kosakata murni, dan menyelesaikan ujian evaluasi terkelola pada:", en: "Has passed with distinction in completing the interactive module, mastering pure vocabulary, and completing the managed evaluation exam, in:" },
  certModName: { id: "Modul", en: "Module" },
  // ---- Daily journal ----
  journalTitle: { id: "Jurnal Harian & Refleksi Belajar", en: "Daily Journal & Learning Reflections" },
  journalSub: { id: "Tulis kesimpulan, kosakata baru, atau kesulitan belajar yang Anda hadapi hari ini.", en: "Write today's conclusions, new vocabulary, or learning difficulties you faced." },
  journalTotal: { id: "Total Refleksi:", en: "Total Reflections:" },
  journalNotes: { id: "Catatan", en: "Notes" },
  journalWelcome: { id: "Halo! Ini adalah Jurnal Harian saya pertama kali bergabung di Akademi Arami-Syriac. Saya siap mempelajari aksara Alap-Beth dan teks teologis Semitik kuno bersama Rudolf Luhukay.", en: "Hello! This is my Daily Journal entry from when I first joined the Arami-Syriac Academy. I am ready to learn the Alap-Beth script and ancient Semitic theological texts with Rudolf Luhukay." },
  journalSaved: { id: "Entri Jurnal Harian Anda berhasil disimpan!", en: "Your Daily Journal entry was saved!" },
  journalConfirmDelete: { id: "Apakah Anda yakin ingin menghapus refleksi jurnal ini?", en: "Are you sure you want to delete this journal reflection?" },
  journalWriteToday: { id: "Tulis Catatan Hari Ini", en: "Write Today's Note" },
  journalScale: { id: "Skala Pemahaman Hari Ini:", en: "Today's Understanding Scale:" },
  journalUnderstood: { id: "Paham", en: "Understood" },
  journalOk: { id: "Cukup", en: "Fair" },
  journalConfused: { id: "Bingung", en: "Confused" },
  journalReflection: { id: "Refleksi Belajar Anda:", en: "Your Learning Reflection:" },
  journalPh: { id: "Contoh: Hari ini saya berhasil menghafal 5 huruf konsonan baru (Alap, Beth, Gamal, Dalath, He) dan memahami struktur penulisan dari kanan ke kiri...", en: "Example: Today I memorised 5 new consonants (Alap, Beth, Gamal, Dalath, He) and understood the right-to-left writing structure..." },
  journalSave: { id: "Simpan Refleksi Jurnal", en: "Save Journal Reflection" },
  journalSearchPh: { id: "Cari refleksi sebelumnya...", en: "Search previous reflections..." },
  journalEmpty: { id: "Tidak ditemukan catatan refleksi.", en: "No reflection notes found." },
  journalEmptyHint: { id: "Silakan tulis entri baru atau periksa filter pencarian Anda.", en: "Please write a new entry or check your search filter." },
  journalDelete: { id: "Hapus Jurnal", en: "Delete Journal" },
  // ---- Donation card (Lynk.id page itself stays Indonesian) ----
  donateTitle: { id: "Dukung Learn Syriac", en: "Support Learn Syriac" },
  donateSub: { id: "Aplikasi ini gratis untuk semua. Bila Anda terbantu dan ingin mendukung, donasi seikhlasnya sangat berarti untuk biaya server dan pengembangan materi.", en: "This app is free for everyone. If it has helped you and you would like to support it, any donation means a lot for server costs and material development." },
  donateHow: { id: "Cara berdonasi:", en: "How to donate:" },
  donateStep1: { id: "1. Klik tombol di bawah ini.", en: "1. Click the button below." },
  donateStep2: { id: "2. Masukkan nominal seikhlasnya.", en: "2. Enter any amount you like." },
  donateStep3: { id: "3. Bayar dengan QRIS, e-wallet, atau virtual account.", en: "3. Pay with QRIS, e-wallet, or virtual account." },
  donateFree: { id: "Nominal bebas — tidak ada jumlah minimum. Terima kasih atas dukungan Anda.", en: "Any amount — there is no minimum. Thank you for your support." },
  donateBtn: { id: "Donasi via Lynk.id", en: "Donate via Lynk.id" },
  donateWaBtn: { id: "Konfirmasi Donasi via WhatsApp", en: "Confirm Donation via WhatsApp" },
  donateWaMsg: { id: "Halo, saya mau berdonasi untuk Learn Syriac. Berikut bukti donasinya:", en: "Hello, I would like to donate to Learn Syriac. Here is the proof of donation:" },
  // ---- File manager ----
  fmLoadFail: { id: "Gagal memuat berkas dari cloud: ", en: "Failed to load files from the cloud: " },
  fmSizeFail: { id: "Batasan ukuran terlampaui. Ukuran tugas modul maksimal adalah 1MB untuk integritas database.", en: "Size limit exceeded. Module task size is at most 1MB for database integrity." },
  fmUploadFail: { id: "Gagal mengunggah berkas: ", en: "Failed to upload file: " },
  fmConfirmDelete: { id: "Apakah Anda yakin ingin menghapus berkas tugas ini?", en: "Are you sure you want to delete this task file?" },
  fmDeleteFail: { id: "Gagal menghapus berkas di cloud: ", en: "Failed to delete file in the cloud: " },
  fmDownloadFail: { id: "Koneksi unduhan gagal: ", en: "Download connection failed: " },
  fmProfileOk: { id: "Profil berhasil diperbarui!", en: "Profile updated successfully!" },
  fmProfileFail: { id: "Gagal memperbarui profil: ", en: "Failed to update profile: " },
  fmSandboxOk: { id: "Profil Sandbox berhasil diperbarui!", en: "Sandbox profile updated successfully!" },
  fmCloudTitle: { id: "Terhubung Cloud Firestore & Authentication!", en: "Connected to Cloud Firestore & Authentication!" },
  fmCloudSub: { id: "Otoritas enkripsi dan perlindungan profil murni diawasi penuh oleh server.", en: "Encryption authority and pure profile protection are fully supervised by the server." },
  fmSandboxTitle: { id: "Mode Sandbox Lokal Aktif", en: "Local Sandbox Mode Active" },
  fmSandboxSub: { id: "Sesi simulasi berjalan lancar di dalam memory lokal browser Anda.", en: "The simulation session runs smoothly in your browser's local memory." },
  fmProfileTitle: { id: "Profil & Status Siswa", en: "Student Profile & Status" },
  fmEmailFallback: { id: "Email Rujukan", en: "Reference Email" },
  fmNameLabel: { id: "Nama Lengkap Siswa:", en: "Student's Full Name:" },
  fmReasonLabel: { id: "Tujuan & Justifikasi Belajar (Revisi):", en: "Learning Goal & Justification (Revision):" },
  fmSubmitRevision: { id: "Kirim Revisi", en: "Submit Revision" },
  fmClassStatus: { id: "Status Kelas Anda:", en: "Your Class Status:" },
  fmApproved: { id: "DISETUJUI MASUK KELAS", en: "APPROVED TO JOIN CLASS" },
  fmPending: { id: "PENDING / MENUNGGU PENINJAUAN", en: "PENDING / AWAITING REVIEW" },
  fmRevise: { id: "BUTUH REVISI DATA", en: "DATA REVISION NEEDED" },
  fmRejected: { id: "PENDAFTARAN DITOLAK", en: "REGISTRATION REJECTED" },
  fmTeacherNote: { id: "Catatan Rudolf A. Luhukay:", en: "Note from Rudolf A. Luhukay:" },
  fmMotivation: { id: "Motivasi Kursus:", en: "Course Motivation:" },
  fmMotivationFallback: { id: "Belajar dasar bahasa Semitik klasik.", en: "Learning the basics of classical Semitic." },
  fmUpdateApp: { id: "Perbarui Aplikasi", en: "Update Application" },
  fmSignOut: { id: "Keluar Akun (Sign Out)", en: "Sign Out" },
  fmVaultTitle: { id: "Gudang Berkas & Tugas Mandiri", en: "File Vault & Independent Tasks" },
  fmVaultSub: { id: "Kumpulkan salinan teks, manuskrip, tulisan tangan harakat, kata kunci, dsb. untuk dipelajari dari perangkat mana pun.", en: "Collect copies of texts, manuscripts, handwritten vowel notes, keywords, etc. to study from any device." },
  fmUploadNew: { id: "Unggah Berkas Baru", en: "Upload New File" },
  fmDropHint: { id: "Tarik berkas Anda ke sini, atau klik untuk berburu berkas. Ukuran file maksimum 1MB.", en: "Drag your file here, or click to browse for a file. Maximum file size 1MB." },
  fmUploaded: { id: "Berkas Terunggah", en: "Uploaded Files" },
  fmDownloadFile: { id: "Unduh / Tampilkan Berkas", en: "Download / View File" },
  fmDeleteFile: { id: "Hapus Berkas", en: "Delete File" },
  fmEmpty: { id: "Gudang Penyimpanan Kosong", en: "Storage Vault Empty" },
  fmEmptySub: { id: "Kumpulkan salinan manuskrip atau tugas belajar Anda di sini.", en: "Collect copies of your manuscripts or study tasks here." },
  fmLocked: { id: "Gudang Berkas Dikunci", en: "File Vault Locked" },
  fmLockedSub: { id: "Akses unggah ke dalam arsip hanya terbuka bagi siswa kelas yang telah **Disetujui** oleh Super Admin Rudolf.", en: "Upload access to the archive is only open to class students who have been **Approved** by Super Admin Rudolf." },
  // ---- Syriac keyboard ----
  kbTitle: { id: "Papan Ketik Virtual Aram (Syriac)", en: "Virtual Aramaic (Syriac) Keyboard" },
  kbSub: { id: "Gunakan tombol-tombol di bawah untuk merangkai kalimat dalam abjad Aram. Ingat, tulisan akan tersambung otomatis dari kanan ke kiri!", en: "Use the buttons below to compose sentences in the Aramaic alphabet. Remember, the writing connects automatically from right to left!" },
  kbTapHint: { id: "Ketuk abjad di bawah...", en: "Tap a letter below..." },
  kbClearAll: { id: "Hapus Semua", en: "Clear All" },
  kbDeleteOne: { id: "Hapus Satu Huruf", en: "Delete One Letter" },
  kbDelete: { id: "Hapus", en: "Delete" },
  kbCopied: { id: "Tersalin!", en: "Copied!" },
  kbCopy: { id: "Salin Teks", en: "Copy Text" },
  kbConsonants: { id: "Konsonan Dasar (22 Abjad)", en: "Basic Consonants (22 Letters)" },
  kbVowels: { id: "Harakat Vokal Serto Barat", en: "Western Serto Vowel Marks" },
  kbCharInfo: { id: "Informasi Karakter Syriac", en: "Syriac Character Information" },
  kbTranslit: { id: "Transliterasi:", en: "Transliteration:" },
  kbPron: { id: "Vokal & Pelafalan:", en: "Vowel & Pronunciation:" },
  kbGematria: { id: "Nilai Numerik (Gematria):", en: "Numerical Value (Gematria):" },
  kbNotes: { id: "Catatan Karakter:", en: "Character Notes:" },
  kbGematriaNote: { id: "Angka suci dihitung berdasarkan gabungan abjad Semit. Misalnya, kata", en: "Sacred numbers are calculated from the combination of Semitic letters. For example, the word" },
  kbGematriaNoteB: { id: "(Tuhan) memiliki total nilai abjad 1 (Alap) + 30 (Lamadh) + 5 (He) + 1 (Alap) = 37.", en: "(God) has a total letter value of 1 (Alap) + 30 (Lamadh) + 5 (He) + 1 (Alap) = 37." },
  kbHoverHint: { id: "Arahkan kursor atau ketuk salah satu abjad di kiri untuk melihat informasi detail karakter.", en: "Hover over or tap a letter on the left to see detailed character information." },
  // ---- Pronunciation recorder ----
  pronTitle: { id: "Latihan Pengucapan — Rekam & Dengarkan", en: "Pronunciation Practice — Record & Listen" },
  pronSubB: { id: "— rekam suaramu, putar kembali, bandingkan dengan panduan transliterasi.", en: "— record your voice, play it back, and compare it with the transliteration guide." },
  pronUnsupported: { id: "Browser ini belum mendukung perekaman suara. Coba Chrome, Edge, atau Safari terbaru.", en: "This browser does not support voice recording yet. Try the latest Chrome, Edge, or Safari." },
  pronUnsupportedBox: { id: "Perekaman suara belum didukung browser ini. Coba", en: "Voice recording is not supported in this browser yet. Try" },
  pronBrowsers: { id: "Chrome, Edge, atau Safari terbaru", en: "the latest Chrome, Edge, or Safari" },
  pronUnsupportedBoxB: { id: "di HP atau laptop.", en: "on your phone or laptop." },
  pronMicDenied: { id: "Izin mikrofon ditolak. Izinkan akses mikrofon di browser, lalu coba lagi.", en: "Microphone permission denied. Allow microphone access in your browser, then try again." },
  pronNoMic: { id: "Tidak ada mikrofon yang ditemukan di perangkat ini.", en: "No microphone was found on this device." },
  pronStartFail: { id: "Tidak bisa memulai perekaman. Coba lagi.", en: "Could not start recording. Try again." },
  pronPlayFail: { id: "Tidak bisa memutar rekaman. Coba lagi.", en: "Could not play the recording. Try again." },
  pronStopRec: { id: "Berhenti — sedang merekam…", en: "Stop — recording…" },
  pronRerecord: { id: "Rekam Ulang", en: "Re-record" },
  pronRecord: { id: "Rekam Suaramu", en: "Record Your Voice" },
  pronStop: { id: "Berhenti", en: "Stop" },
  pronPlay: { id: "Putar Rekaman", en: "Play Recording" },
  pronSaved: { id: "Rekaman tersimpan", en: "Recording saved" },
  pronNote: { id: "Rekaman hanya tersimpan selama halaman ini dibuka — kalau halaman ditutup atau di-refresh, rekaman hilang. Ucapkan perlahan mengikuti transliterasi di atas, lalu dengarkan kembali untuk memeriksa pengucapanmu.", en: "Recordings are only kept while this page is open — if the page is closed or refreshed, the recordings are lost. Speak slowly following the transliteration above, then listen back to check your pronunciation." },
  // ---- Vocabulary notebook ----
  vocabFlashTitle: { id: "Flashcard Hafalan Arami", en: "Arami Memorisation Flashcards" },
  vocabFlashSub: { id: "Latih ingatan Anda dengan membalik kartu untuk mencocokkan teks Syriac dengan makna Indonesianya.", en: "Train your memory by flipping the card to match the Syriac text with its English meaning." },
  vocabFlip: { id: "Klik kartu untuk membalik", en: "Click the card to flip it" },
  vocabPrev: { id: "Sebelumnya", en: "Previous" },
  vocabNext: { id: "Selanjutnya", en: "Next" },
  vocabWordsSuffix: { id: "kosakata", en: "words" },
  vocabNoneCat: { id: "Tidak ada kosakata di bawah kategori ini.", en: "No vocabulary under this category." },
  vocabRepoTitle: { id: "Repository Kosakata Terkelola", en: "Managed Vocabulary Repository" },
  vocabRepoText: { id: "Daftar kosa kata dan glosarium ini dikonfigurasi secara lengkap oleh", en: "This vocabulary list and glossary were fully configured by" },
  vocabRepoTextB: { id: "untuk memandu studi saksama Anda.", en: "to guide your careful study." },
  vocabRepoTip: { id: "💡 Siswa tidak memiliki izin untuk mengedit, menambah, atau menghapus kosakata agar kurikulum belajar tetap seragam dan sesuai standar pengajaran.", en: "💡 Students are not permitted to edit, add, or delete vocabulary so the learning curriculum stays uniform and up to teaching standards." },
  vocabAddTitle: { id: "Tambahkan Kata Kustom Baru", en: "Add a New Custom Word" },
  vocabSyriacLabel: { id: "Teks Aram (Syriac):", en: "Aramaic (Syriac) Text:" },
  vocabTranslitLabel: { id: "Transliterasi:", en: "Transliteration:" },
  vocabCatLabel: { id: "Kategori:", en: "Category:" },
  vocabMeaningLabel: { id: "Arti Bahasa Indonesia:", en: "Meaning (Indonesian):" },
  vocabNotesLabel: { id: "Catatan Tambahan (Opsional):", en: "Additional Notes (Optional):" },
  vocabNotesPh: { id: "Keterangan singkat historis...", en: "A brief historical note..." },
  vocabSave: { id: "Simpan ke Notebook", en: "Save to Notebook" },
  vocabListTitle: { id: "Daftar Istilah & Kamus Penting", en: "Glossary & Key Dictionary" },
  vocabListSub: { id: "Simak database kosakata Aram terlengkap di sini untuk belajar mandiri.", en: "Browse the most complete Aramaic vocabulary database here for independent study." },
  vocabDelete: { id: "Hapus dari notebook", en: "Delete from notebook" },
  vocabNoneFilter: { id: "Belum ada kosakata di filter ini. Anda dapat menambahkannya menggunakan form di kiri!", en: "No vocabulary in this filter yet. You can add some using the form on the left!" },
  vocabCatAll: { id: "Semua", en: "All" },
  vocabCatGreet: { id: "Sapaan", en: "Greetings" },
  vocabCatTheo: { id: "Teologi & Perasaan", en: "Theology & Feelings" },
  vocabCatObjects: { id: "Benda & Alam", en: "Objects & Nature" },
  vocabCatFamily: { id: "Keluarga", en: "Family" },
  vocabCatNames: { id: "Nama Tokoh", en: "Names of Figures" },
  // ---- Admin panel ----
  adminUpdateFail: { id: "Gagal memperbarui status siswa: ", en: "Failed to update student status: " },
  adminModSaved: { id: "Modul sukses disimpan ke Cloud Firestore!", en: "Module saved to Cloud Firestore!" },
  adminModUploadFail: { id: "Gagal mengunggah modul ke Cloud: ", en: "Failed to upload module to the Cloud: " },
  adminDbFail: { id: "Gagal memperbarui database modul: ", en: "Failed to update the module database: " },
  adminConfirmDeleteMod: { id: "Apakah Anda yakin ingin menghapus Modul ", en: "Are you sure you want to delete Module " },
  adminConfirmDeleteModB: { id: " sepenuhnya?", en: " completely?" },
  adminDeleteCloudFail: { id: "Gagal menghapus modul dari Cloud: ", en: "Failed to delete the module from the Cloud: " },
  adminAttTooBig: { id: "Maaf, ukuran lampiran berkas maksimal adalah 1.5MB.", en: "Sorry, the maximum attachment file size is 1.5MB." },
  adminAttReadFail: { id: "Gagal membaca encoder berkas.", en: "Failed to read the file encoder." },
  adminPickFile: { id: "Silakan pilih berkas terlebih dahulu.", en: "Please choose a file first." },
  adminGiveUrl: { id: "Silakan berikan URL / rujukan link media.", en: "Please provide a media URL / link reference." },
  adminBadTarget: { id: "Modul sasaran tidak absah.", en: "The target module is not valid." },
  adminAttOk: { id: "Lampiran media materi berhasil diunggah!", en: "The material media attachment was uploaded!" },
  adminAttCloudFail: { id: "Gagal memperbarui lampiran modul ke cloud: ", en: "Failed to update the module attachments in the cloud: " },
  adminConfirmDeleteAtt: { id: "Apakah Anda yakin ingin menghapus materi lampiran ini?", en: "Are you sure you want to delete this attachment material?" },
  adminCloudDataFail: { id: "Gagal memperbarui data di Cloud: ", en: "Failed to update data in the Cloud: " },
  adminFeedbackPh: { id: "Ketik saran revisi atau alasan penolakan di sini...", en: "Type a revision suggestion or rejection reason here..." },
  adminApproveTitle: { id: "Setujui Masuk Kelas", en: "Approve Class Entry" },
  adminApprove: { id: "Setujui", en: "Approve" },
  adminReviseTitle: { id: "Minta Revisi Motivasi / Lengkapi Data", en: "Request Motivation Revision / Complete Data" },
  adminRevise: { id: "Minta Revisi", en: "Request Revision" },
  adminRejectTitle: { id: "Tolak Pendaftaran", en: "Reject Registration" },
  adminReject: { id: "Tolak", en: "Reject" },
  adminDeleteMod: { id: "Hapus Modul", en: "Delete Module" },
  adminQuizQ: { id: "Apa arti utama dari bab '{title}'?", en: "What is the main meaning of the chapter '{title}'?" },
  adminQuizOpt1: { id: "Menandakan dasar linguistik sembiring", en: "Marks the chapter's basic linguistics" },
  adminQuizOpt2: { id: "Menandakan sintaksis klasikal", en: "Marks classical syntax" },
  adminQuizOpt3: { id: "Bahan rujukan murni", en: "Pure reference material" },
  adminQuizOpt4: { id: "Tata cara abjad terpadu", en: "Integrated alphabet procedures" },
  adminQuizExpl: { id: "Menandakan ringkasan struktural dari bab rujukan murni.", en: "Marks the structural summary of a pure reference chapter." },
  adminAuthority: { id: "🛡️ Otoritas Tinggi Super Admin", en: "🛡️ High Super Admin Authority" },
  adminWelcomeA: { id: "Selamat datang Bapak", en: "Welcome, Mr" },
  adminWelcomeB: { id: ". Di halaman panel ini, Anda dapat menyetujui akun santri/anggota, meminta revisi motivasi belajar, menambah/menghapus modul ajar, mengedit materi pengantar, hingga mengunggah audio pengucapan (MP3), salinan kaligrafi, PDF rujukan, serta menautkan video tutorial YouTube.", en: ". On this panel page, you can approve student/member accounts, request learning motivation revisions, add/remove teaching modules, edit introductory material, and upload pronunciation audio (MP3), calligraphy copies, reference PDFs, and link YouTube tutorial videos." },
  adminTabUsers: { id: "Kelola Pendaftaran Anggota", en: "Manage Member Registrations" },
  adminTabModules: { id: "Kelola Silabus & Edit Teks Modul", en: "Manage Syllabus & Edit Module Text" },
  adminTabMaterials: { id: "Unggah Lampiran Media & Audio", en: "Upload Media & Audio Attachments" },
  adminUsersTitle: { id: "Persetujuan Formulir Anggota", en: "Member Form Approvals" },
  adminUsersSub: { id: "Siswa yang mendaftar harus disetujui untuk dapat mengakses modul, kuis, kosakata, dan asisten bot.", en: "Students who register must be approved to access modules, quizzes, vocabulary, and the bot assistant." },
  adminRefresh: { id: "Segarkan Data", en: "Refresh Data" },
  adminAnon: { id: "Taliha Anonim", en: "Anonymous Student" },
  adminMotivation: { id: "Motivasi Bergabung:", en: "Reason for Joining:" },
  adminMotivationEmpty: { id: "Siswa mendaftar tanpa menyertakan pesan perihal motivasi belajar.", en: "The student registered without including a message about learning motivation." },
  adminPrevFeedback: { id: "Komentar Koreksi Anda Sebelumnya:", en: "Your Previous Correction Comment:" },
  adminNoUsers: { id: "Belum Ada Anggota Lain yang Mendaftar", en: "No Other Members Have Registered Yet" },
  adminNoUsersSub: { id: "Siswa yang mendaftar menggunakan email & sandi akan segera unjuk diri di panel ini.", en: "Students who register with email & password will appear in this panel soon." },
  adminAddModuleBtn: { id: "Tambah Modul Pembelajaran Baru", en: "Add New Learning Module" },
  adminWriteModule: { id: "Tulis Modul Baru", en: "Write a New Module" },
  adminWriteModuleSub: { id: "Definisikan nomor, judul bahasa, judul Syriac, dan materi teoretis.", en: "Define the number, language title, Syriac title, and theoretical material." },
  adminModNumber: { id: "Nomor Urut Modul:", en: "Module Order Number:" },
  adminTopicCat: { id: "Kategori Topik:", en: "Topic Category:" },
  adminTitleId: { id: "Judul Modul (Indonesia):", en: "Module Title (Indonesian):" },
  adminTitleIdPh: { id: "Contoh: Huruf Harakat Dasar", en: "Example: Basic Vowel Letters" },
  adminTitleSyriac: { id: "Judul Modul (Aksara Syriac / Aram):", en: "Module Title (Syriac / Aramaic Script):" },
  adminTitleSyriacPh: { id: "Contoh: ܙܘܼܥܹ̈ܐ", en: "Example: ܙܘܼܥܹ̈ܐ" },
  adminSummary: { id: "Abstraksi Ringkas (Summary):", en: "Brief Summary:" },
  adminSummaryPh: { id: "Abstraksi satu kalimat perihal fokus bab...", en: "A one-sentence summary of the chapter focus..." },
  adminIntro: { id: "Teks Pendahuluan:", en: "Introduction Text:" },
  adminIntroPh: { id: "Uraian ringkas pembuka bab...", en: "A brief opening description of the chapter..." },
  adminContent: { id: "Struktur Konteks Kajian Teoretis (Markdown):", en: "Theoretical Study Context Structure (Markdown):" },
  adminContentPh: { id: "Uraikan komprehensif aturan linguistik, contoh, harakat, makhraj, dsb...", en: "Describe the linguistic rules, examples, vowels, articulation points, etc. comprehensively..." },
  adminRules: { id: "Aturan Kunci Tatabahasa (Aturan Emas - Pisahkan Dengan Baris Baru / Enter):", en: "Key Grammar Rules (Golden Rules - Separate with a New Line / Enter):" },
  adminRulesPh: { id: "Kunci 1: Huruf Alap melambangkan glottal stop.&#10;Kunci 2: Dibaca tegak bila diberi harakat.", en: "Key 1: The letter Alap represents a glottal stop.&#10;Key 2: Read upright when given a vowel mark." },
  adminEmbed: { id: "Embed Materi Multimedia / Referensi Web (Opsional):", en: "Embed Multimedia Material / Web Reference (Optional):" },
  adminEmbedHintA: { id: "Masukkan URL video YouTube, link situs web interaktif, atau draf kode HTML ", en: "Enter a YouTube video URL, interactive website link, or HTML draft code " },
  adminEmbedHintB: { id: " rujukan dari Google Docs/Drive, SoundCloud, dsb. Siswa akan dapat membaca, menonton, atau mendengarnya langsung ditiap materi.", en: " referenced from Google Docs/Drive, SoundCloud, etc. Students will be able to read, watch, or listen to it directly in each lesson." },
  adminEmbedPh: { id: "Contoh: https://www.youtube.com/embed/... ATAU <iframe src='...'></iframe>", en: "Example: https://www.youtube.com/embed/... OR <iframe src='...'></iframe>" },
  adminSaveNew: { id: "Simpan Modul Baru", en: "Save New Module" },
  adminEditTitle: { id: "Edit Konten Modul", en: "Edit Module Content" },
  adminTitleSyriac2: { id: "Judul Modul (Syriac):", en: "Module Title (Syriac):" },
  adminTopic: { id: "Topik Silabus:", en: "Syllabus Topic:" },
  adminSummary2: { id: "Ringkasan Abstraksi:", en: "Summary:" },
  adminContent2: { id: "Struktur Konteks Kajian Teoretis (Markdown / Tulisan):", en: "Theoretical Study Context Structure (Markdown / Writing):" },
  adminRules2: { id: "Aturan Penting Tatabahasa (Masing-masing pisahkan dengan Baris Baru):", en: "Important Grammar Rules (Separate Each with a New Line):" },
  adminSaveChanges: { id: "Simpan Perubahan", en: "Save Changes" },
  adminEmptyModule: { id: "Selamat Mengabdi, Guru!", en: "Happy Teaching, Teacher!" },
  adminEmptyModuleSub: { id: "Silakan tentukan salah satu modul dari daftar sebelah kiri untuk memulai peninjauan atau pembaruan teks. Klik \"Tambah Modul\" jika ingin menulis silabus baru.", en: "Please choose a module from the list on the left to start reviewing or updating its text. Click \"Add Module\" to write a new syllabus." },
  adminMaterialsTitle: { id: "Kelola Lampiran Media & Materi Bab", en: "Manage Media Attachments & Chapter Material" },
  adminMaterialsSub: { id: "Unggah materi bersuara (MP3), video, file Word/Excel referensi, atau rekatkan tautan audio web & YouTube pada modul yang Anda tunjuk.", en: "Upload voiced material (MP3), videos, reference Word/Excel files, or attach web & YouTube audio links to the module you choose." },
  adminUploadNew: { id: "Unggah Materi Rujukan Baru", en: "Upload New Reference Material" },
  adminRefModule: { id: "Rujuk pada Modul:", en: "Reference Module:" },
  adminAttName: { id: "Nama Tampilan Lampiran:", en: "Attachment Display Name:" },
  adminAttNamePh: { id: "Contoh: Pengucapan Doa Bapa Kami (Aram Serto)", en: "Example: Lord's Prayer Pronunciation (Western Serto)" },
  adminMediaType: { id: "Tipe/Format Media Rujukan:", en: "Reference Media Type/Format:" },
  adminOptYoutube: { id: "Sematkan Video YouTube / Video Embed", en: "Embed YouTube Video / Video Embed" },
  adminOptCode: { id: "Sematkan Kode IFrame / HTML Kustom", en: "Embed Custom IFrame / HTML Code" },
  adminOptWeb: { id: "Sematkan Halaman Web / Web IFrame Embed", en: "Embed Web Page / Web IFrame Embed" },
  adminOptText: { id: "Sematkan Teks Catatan / Rujukan Langsung", en: "Embed Note Text / Direct Reference" },
  adminOptMp3: { id: "Sematkan Audio MP3 (Pemutar Suara/Lagu)", en: "Embed MP3 Audio (Sound/Song Player)" },
  adminOptMp4: { id: "Sematkan Video MP4 (Pemutar Rekaman)", en: "Embed MP4 Video (Recording Player)" },
  adminOptPdf: { id: "PDF (Buku Pegangan / Makalah) - Unduhan", en: "PDF (Handbook / Paper) - Download" },
  adminOptTxt: { id: "Teks / Rujukan Tertulis (.txt) - Unduhan", en: "Text / Written Reference (.txt) - Download" },
  adminOptLink: { id: "Tautan Web Umum (Hanya Link Luar)", en: "General Web Link (External Link Only)" },
  adminOptFile: { id: "Unggah / Upload File Bebas dari Komputer", en: "Upload Any File from Computer" },
  adminWriteNote: { id: "Tulis / Salin Catatan atau Teks Materi di Sini:", en: "Write / Paste the Note or Material Text Here:" },
  adminPasteCode: { id: "Tempel / Paste Kode HTML IFrame / Embed Kustom Anda:", en: "Paste Your Custom HTML IFrame / Embed Code:" },
  adminNotePh: { id: "Ketik rujukan atau materi teks yang ingin Anda bagikan langsung ke siswa...", en: "Type the reference or text material you want to share directly with students..." },
  adminCodePh: { id: "Tempelkan kode <iframe ...></iframe> atau div HTML rujukan dari Wayground, Google Docs, dsb...", en: "Paste an <iframe ...></iframe> code or HTML div reference from Wayground, Google Docs, etc..." },
  adminCodeHint: { id: "Siswa akan dapat menjalankan game rujukan, kuis Wayground, pemutar khusus, dsb secara terintegrasi.", en: "Students will be able to run reference games, Wayground quizzes, special players, etc. in an integrated way." },
  adminPickFileLabel: { id: "Pilih Berkas Lampiran (MP3/MP4/Doc/PDF/Excel, maks 1.5MB):", en: "Choose Attachment File (MP3/MP4/Doc/PDF/Excel, max 1.5MB):" },
  adminPickDocA: { id: "Klik untuk memilih dokumen untuk '", en: "Click to choose a document for '" },
  adminPickDocB: { id: "'", en: "'" },
  adminPickDocC: { id: "Klik untuk memilih dokumen dari komputer Anda", en: "Click to choose a document from your computer" },
  adminSelected: { id: "Terpilih:", en: "Selected:" },
  adminYtUrl: { id: "Alamat Video YouTube (URL / Share Link):", en: "YouTube Video Address (URL / Share Link):" },
  adminWebUrl: { id: "Alamat Website / Halaman untuk di-Sematkan (URL):", en: "Website Address / Page to Embed (URL):" },
  adminRefUrl: { id: "Tautan Web Rujukan:", en: "Reference Web Link:" },
  adminUrlPhYt: { id: "Contoh: https://www.youtube.com/watch?v=...", en: "Example: https://www.youtube.com/watch?v=..." },
  adminUrlPhWiki: { id: "Contoh: https://id.wikipedia.org/wiki/Bahasa_Aram", en: "Example: https://en.wikipedia.org/wiki/Aramaic_language" },
  adminUrlPhSite: { id: "Contoh: https://situs-rujukan.com", en: "Example: https://reference-site.com" },
  adminAttachSubmit: { id: "Kirim & Kaitkan Ke Modul", en: "Send & Link to Module" },
  adminAttList: { id: "Materi Lampiran Terdaftar", en: "Registered Attachment Material" },
  adminPlayVideo: { id: "Putar Video", en: "Play Video" },
  adminClose: { id: "Tutup", en: "Close" },
  adminDeleteAtt: { id: "Hapus Lampiran", en: "Delete Attachment" },
  adminRefLink: { id: "Rujukan link: ", en: "Reference link: " },
  adminNoMedia: { id: "Belum Ada Materi Rujukan Media", en: "No Reference Media Material Yet" },
  adminNoMediaSub: { id: "Semua data rekaman, salinan dsb. yang Anda tautkan ke modul mendaftarkan baris pajangannya di sini.", en: "All recordings, copies, etc. that you link to a module will list their display rows here." },
  adminModBadge: { id: "MODUL", en: "MODULE" },
} as const;

export default function App() {
  // Unique session ID once per application lifecycle to enforce one-device session policy
  const [appSessionId] = useState(() => Math.random().toString(36).substring(2) + Date.now().toString(36));

  // Tabs: "dashboard" | "modules" | "keyboard" | "notebook" | "tutor" | "files" | "admin"
  const [activeTab, setActiveTab] = useState<"dashboard" | "modules" | "keyboard" | "notebook" | "tutor" | "files" | "admin">("dashboard");
  const [selectedModuleId, setSelectedModuleId] = useState<number>(1);
  const contentPaneRef = useRef<HTMLDivElement>(null);
  
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
  // Certificate Modal States (level graduation only — no per-module certificates)
  const [levelCertificateOpen, setLevelCertificateOpen] = useState(false);
  const [levelCertificateToOpen, setLevelCertificateToOpen] = useState<"A1" | "A2" | "B1" | null>(null);

  // Syriac dynamic font toggle
  const [syriacFont, setSyriacFont] = useState<"estrangelo" | "serto" | "madenhoyo">("estrangelo");

  // Bilingual UI language: 'id' (default) or 'en', persisted locally
  type Lang = "id" | "en";
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("arami_lang") === "en" ? "en" : "id") as Lang;
    } catch {
      return "id";
    }
  });
  const switchLang = (l: Lang) => {
    setLang(l);
    try { localStorage.setItem("arami_lang", l); } catch { /* ignore */ }
  };
  const t = (key: keyof typeof UI_STRINGS) => UI_STRINGS[key][lang];
  // Value shared with all child components through LangContext.
  const langValue: LangValue = { lang, t: (key: string) => t(key as keyof typeof UI_STRINGS) };

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

  // All modules are freely open (user request 2026-11-17: "klik manapun
  // bisa bahkan ulang") — students may open any module, in any order, and
  // re-read completed ones. Level exams are still gated by
  // isLevelUnlocked (all modules of that level must be completed).
  const isModuleNavigable = (_mod: Module) => {
    return true;
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
              {t("examSidebarTitle")} {lvl}
            </h5>
            <span className={`text-[9px] block font-semibold ${isSelected ? "text-amber-100" : "text-[#8A8471]"}`}>
              {unlocked ? t("examReqOpen") : t("examReqLocked")}
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

                // Google sign-in is auto-approved (verified Google identity):
                // upgrade an older PENDING profile created by a Google login.
                const signedInWithGoogleHere = (currentUser.providerData || []).some((p: any) => p.providerId === "google.com");
                if (signedInWithGoogleHere && profileData.status === "PENDING") {
                  profileData.status = "APPROVED";
                  setDoc(userRef, { status: "APPROVED" }, { merge: true });
                }
                setUserProfile(profileData);
              } else {
                // Create dynamic profile if doesn't exist
                const isAdminEmail = currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id";
                // Google sign-in is auto-approved (verified Google identity);
                // only email/password signups start as PENDING for admin review.
                const signedInWithGoogle = (currentUser.providerData || []).some((p: any) => p.providerId === "google.com");
                const newProfile = {
                  userId: currentUser.uid,
                  email: currentUser.email?.toLowerCase() || "",
                  fullName: currentUser.displayName || t("studentArami"),
                  role: isAdminEmail ? "admin" : "student",
                  status: (isAdminEmail || signedInWithGoogle) ? "APPROVED" : "PENDING",
                  learningReason: t("defaultReason"),
                  activeSessionId: appSessionId,
                  createdAt: new Date().toISOString()
                };
                setDoc(userRef, newProfile);
                setUserProfile(newProfile);
              }
              setAuthLoading(false);
            }, (error) => {
              console.error("Profile listen failure:", error);
              // Jangan rusak aplikasi bila Firestore belum siap
              // (misalnya rules belum dipasang): pakai profil lokal darurat.
              const isAdminEmail = currentUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id";
              setUserProfile({
                userId: currentUser.uid,
                email: currentUser.email?.toLowerCase() || "",
                fullName: currentUser.displayName || t("studentArami"),
                role: isAdminEmail ? "admin" : "student",
                status: "APPROVED",
                learningReason: t("defaultReason"),
                activeSessionId: appSessionId,
                createdAt: new Date().toISOString()
              });
              setAuthLoading(false);
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
                fullName: currentUser.displayName || t("studentArami"),
                role: isAdminEmail ? "admin" : "student",
                status: "APPROVED",
                learningReason: t("defaultReason"),
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
              fullName: parsedUser.displayName || t("sandboxStudent"),
              role: (parsedUser.email?.toLowerCase() === "rudolfluhukay69@guru.smp.belajar.id") ? "admin" : "student",
              status: "APPROVED",
              learningReason: t("defaultReasonBasic"),
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

          // The bundled modules are the source of truth for the catalogue:
          // overlay cloud versions (admin edits) on top, but never let a
          // partial cloud list hide modules from students.
          const cloudById = new Map(modsList.map(m => [m.id, m]));
          const merged: Module[] = syriacModules.map(b => cloudById.get(b.id) || b);
          for (const m of modsList) {
            if (!merged.some(x => x.id === m.id)) merged.push(m);
          }
          merged.sort((a, b) => a.id - b.id);
          setModules(merged);

          // Best-effort background sync of any missing bundled modules
          // to the cloud (admin edits stay intact; failures are ignored).
          for (const m of syriacModules) {
            if (!cloudById.has(m.id)) {
              setDoc(doc(db, "modules", String(m.id)), m).catch(() => {});
            }
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
        setCurrModFilesError(t("taskFilesError") + err.message);
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
    if (window.confirm(t("confirmReset"))) {
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
      setCurrModFilesError(t("errFileTooBig"));
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
      setCurrModFilesError(t("errUploadFailed") + err.message);
      setCurrModFilesLoading(false);
    }
  };

  // Delete specific module file
  const handleDeleteModFile = async (fileId: string) => {
    if (!window.confirm(t("confirmDeleteModFile"))) return;

    if (isFirebaseConfigured && db) {
      try {
        const fileObj = currModFiles.find(f => f.fileId === fileId);
        if (fileObj) {
          await deleteFileFromStorage(user.uid, fileId, fileObj.fileName);
        }
        await deleteDoc(doc(db, "users", user.uid, "files", fileId));
        fetchModuleSpecificFiles();
      } catch (err: any) {
        alert(t("errDeleteFile") + err.message);
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

  // ---- Bilingual field helpers (English when available, Indonesian fallback) ----
  const modTitle = (m: Module) => (lang === "en" && m.titleEn ? m.titleEn : m.title);
  const modSummary = (m: Module) => (lang === "en" && m.summaryEn ? m.summaryEn : m.summary);
  const modIntro = (m: Module) => (lang === "en" && m.introductionEn ? m.introductionEn : m.introduction);
  const modContent = (m: Module) => (lang === "en" && m.contentEn ? m.contentEn : m.content);
  const modKeyRules = (m: Module) => (lang === "en" && m.keyRulesEn ? m.keyRulesEn : m.keyRules);
  const vocabMeaning = (v: VocabularyWord) => (lang === "en" && v.meaningEn ? v.meaningEn : v.meaning);
  const exMeaning = (ex: ExampleSentence) => (lang === "en" && ex.english ? ex.english : ex.indonesian);
  const localizeQuiz = (q: QuizQuestion): QuizQuestion => {
    if (lang === "en" && q.questionEn && q.optionsEn && q.correctAnswerEn !== undefined && q.explanationEn) {
      return { ...q, question: q.questionEn, options: q.optionsEn, correctAnswer: q.correctAnswerEn, explanation: q.explanationEn };
    }
    return q;
  };
  // Display version of the current module's quizzes in the active language
  const displayQuizzes: QuizQuestion[] = (currentModule?.quizzes || []).map(localizeQuiz);

  // ---- Bilingual level-exam helper ----
  // The English exam fields (questionEn/optionsEn/correctAnswerEn/
  // explanationEn) land in src/data/levelExams.ts via a parallel pass; this
  // helper tolerates their absence (falls back to Indonesian) until then.
  type ExamQuestionEn = LevelExamQuestion & {
    questionEn?: string;
    optionsEn?: string[];
    correctAnswerEn?: number | string;
    explanationEn?: string;
  };
  const localizeExamQ = (q: LevelExamQuestion): LevelExamQuestion => {
    if (lang !== "en") return q;
    const e = q as ExamQuestionEn;
    let correct = q.correctAnswer;
    if (typeof e.correctAnswerEn === "number") correct = e.correctAnswerEn;
    else if (typeof e.correctAnswerEn === "string" && e.optionsEn) {
      const idx = e.optionsEn.indexOf(e.correctAnswerEn);
      if (idx >= 0) correct = idx;
    }
    return {
      question: e.questionEn ?? q.question,
      options: e.optionsEn ?? q.options,
      correctAnswer: correct,
      explanation: e.explanationEn ?? q.explanation,
    };
  };

  // Quiz calculations
  const handleOptionSelect = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswered) return;
    const correct = displayQuizzes[currentQuizIndex].correctAnswer;
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
      const isLastAnswerCorrect = selectedOption === displayQuizzes[currentQuizIndex].correctAnswer;
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

  // Next-step button after finishing a module: the next module, or the
  // level exam when the next module sits behind a level gate. Certificates
  // are only given at the end of a level, never per module.
  const renderNextStepButton = (className: string) => {
    const sorted = [...modules].sort((a, b) => a.id - b.id);
    const idx = sorted.findIndex(m => m.id === currentModule.id);
    const next = sorted[idx + 1];
    // Modules are freely open now (user request 2026-11-17), so the next
    // button always navigates — no locked state here anymore.
    const goToExam = (lvl: "A1" | "A2" | "B1") => {
      setSelectedLevelExam(lvl);
      setIsQuizMode(false);
      setQuizResult(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    if (!next) {
      const lvl = currentModule.category === "Level A1" ? "A1" : currentModule.category === "Level A2" ? "A2" : "B1";
      return (
        <button onClick={() => goToExam(lvl as any)} className={className}>
          {t("openExam")} {lvl} →
        </button>
      );
    }
    if (isModuleNavigable(next)) {
      return (
        <button
          onClick={() => { setSelectedModuleId(next.id); setIsQuizMode(false); setQuizResult(null); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className={className}
        >
          {t("nextModule")} {next.id} →
        </button>
      );
    }
    const examLevel = next.category === "Level A2" ? "A1" : next.category === "Level B1" ? "A2" : null;
    if (!examLevel) return null;
    return (
      <button onClick={() => goToExam(examLevel as any)} className={className}>
        {t("openExam")} {examLevel} →
      </button>
    );
  };

  const renderLevelExamInterface = () => {
    if (!selectedLevelExam) return null;

    const questions = LEVEL_EXAMS[selectedLevelExam].map(localizeExamQ);
    const unlocked = isLevelUnlocked(selectedLevelExam);
    const completedLevelExams = progress.completedLevelExams || [];
    const isAlreadyPassed = completedLevelExams.includes(selectedLevelExam);
    const highScore = progress.levelExamHighScores?.[selectedLevelExam] || 0;

    // A1, A2, B1 Syriac titles
    const syriacNames: Record<"A1" | "A2" | "B1", { title: string, subtitle: string }> = {
      A1: { title: "ܫܶܐܠܳܐ ܕ݁ܫܽܘܪܳܝܳܐ", subtitle: t("examSubA1") },
      A2: { title: "ܫܶܐܠܳܐ ܕ݁ܶܡܨܳܥܳܝܳܐ", subtitle: t("examSubA2") },
      B1: { title: "ܫܶܐܠܳܐ ܕ݁ܰܡܩܰܕ݁ܡܳܐ", subtitle: t("examSubB1") },
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
              {levelExamResult.passed ? t("examPassedTitle") : t("examFailedTitle")}
            </h2>
            <p className="text-[#8A8471] text-xs max-w-md mx-auto leading-relaxed">
              {levelExamResult.passed
                ? t("examPassedMsg").replace("{level}", selectedLevelExam)
                : t("examFailedMsg")}
            </p>
          </div>

          <div className="bg-[#FCFBF8] border-2 border-[#E8E4D9] rounded-2xl p-6 max-w-sm mx-auto shadow-sm">
            <span className="text-[10px] uppercase font-bold text-[#8A8471] tracking-wider font-mono">{t("examReport")}</span>
            <div className="text-4xl font-extrabold text-[#5A5A40] font-sans mt-2 mb-1">
              {levelExamResult.score} / 10
            </div>
            <p className="text-xs font-semibold text-amber-700">
              {t("examScorePct")} {levelExamResult.scorePercent}%
            </p>
            <div className="mt-3">
              <span className={`inline-block text-xs font-extrabold px-4 py-1.5 rounded-full text-white uppercase tracking-wider ${
                levelExamResult.passed ? "bg-emerald-600 shadow" : "bg-rose-500"
              }`}>
                {levelExamResult.passed ? t("examStatusPass") : t("examStatusFail")}
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
              {t("backToSyllabus")}
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
                {t("examPrintLevel")} {selectedLevelExam}
              </button>
            ) : (
              <button
                onClick={handleStartLevelExam}
                className="bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4 text-white" />
                {t("examRetakeLevel")}
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
                {t("examEvalBadge")} • Level {selectedLevelExam}
              </span>
              <h3 className="text-[#3D3A33] font-serif font-extrabold text-lg mt-1">
                {t("examQuizOf")} {levelExamCurrentIndex + 1} {t("of")} 10
              </h3>
            </div>
            {/* Real Progress indicator */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#8A8471]">
                {t("examProgress")} {Math.round(((levelExamCurrentIndex) / 10) * 100)}%
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
                <strong>{isCorrectCheck ? t("examCorrect") : t("examIncorrect")}</strong>{" "}
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
              {t("examExit")}
            </button>

            {!isLevelExamAnswered ? (
              <button
                onClick={handleLevelExamCheckAnswer}
                disabled={levelExamSelectedOption === null}
                className="bg-amber-600 disabled:bg-slate-200 hover:bg-amber-700 disabled:text-slate-400 text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer shadow-md"
              >
                {t("examSubmit")}
              </button>
            ) : (
              <button
                onClick={handleLevelExamNext}
                className="bg-[#2D2A26] hover:bg-[#3D3A33] text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer shadow-md"
              >
                {levelExamCurrentIndex === 9 ? t("finishQuiz") : t("examNextQ")}
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
            {t("examFinalTitle")} {selectedLevelExam}
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
            <h4 className="font-bold text-[#3D3A33] text-sm sm:text-base font-serif">{t("examLockedTitle")}</h4>
            <p className="text-xs text-[#8A8471] max-w-md mx-auto leading-relaxed">
              {t("examLockedMsg").replace("{level}", selectedLevelExam)}
            </p>
            <div className="space-y-2 text-left bg-white border border-rose-100 rounded-2xl p-4 mt-2">
              <span className="text-[9px] uppercase font-bold text-rose-600 tracking-wider block mb-1">
                {t("examMissingTitle")}
              </span>
              <div className="max-h-40 overflow-y-auto space-y-1.5 scrollbar-thin">
                {missingModules.map(m => (
                  <div key={m.id} className="flex items-center gap-1.5 text-xs text-rose-950 font-sans font-semibold">
                    <span className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping mr-1" />
                    <span>{t("module")} {m.id}: {modTitle(m)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 max-w-lg mx-auto">
            {/* Unlocked instruction board */}
            <div className="bg-[#FCFBF8] border-2 border-[#E8E4D9] rounded-3xl p-6 text-left space-y-4 shadow-sm">
              <h4 className="font-extrabold text-[#5A5A40] text-sm sm:text-base font-serif">{t("examRulesTitle")}</h4>
              <ul className="space-y-2 text-xs text-[#3D3A33] font-medium leading-relaxed list-disc list-inside">
                <li>{t("examRule1a")} <strong>{t("examRule1b")}</strong>.</li>
                <li>{t("examRule2").replace("{level}", selectedLevelExam)}</li>
                <li><strong>{t("examRule3a")}</strong> {t("examRule3b")}</li>
                <li>{t("examRule4a")} <strong>{t("examRule4b")}</strong> {t("examRule4c")}</li>
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
                    <h5 className="font-bold text-emerald-950 text-xs">{t("examAlreadyPassed")}</h5>
                    <p className="text-[10px] text-emerald-800">{t("examHighScore")} {highScore}/10 ({highScore * 10}%)</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setLevelCertificateToOpen(selectedLevelExam);
                    setLevelCertificateOpen(true);
                  }}
                  className="bg-[#D4AF37] hover:bg-amber-600 text-white font-extrabold text-[10px] px-3.5 py-2 rounded-lg shadow-sm transition-all cursor-pointer whitespace-nowrap uppercase"
                >
                  {t("examPrintCert")}
                </button>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
              <button
                onClick={() => setSelectedLevelExam(null)}
                className="px-6 py-2.5 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs font-bold rounded-xl cursor-pointer"
              >
                {t("backToSyllabus")}
              </button>
              
              <button
                onClick={handleStartLevelExam}
                className="bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 text-white" />
                {isAlreadyPassed ? t("examRetakeFull") : t("examStartFull")}
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
      title: t("newModTitle") + " " + nextId,
      titleSyriac: "ܣܘܼܪܝܳܝܳα",
      category: "Level A1",
      summary: t("newModSummary"),
      introduction: t("newModIntro"),
      content: t("newModContent"),
      keyRules: [t("newModRule1"), t("newModRule2")],
      vocabulary: [],
      examples: [],
      quizzes: [
        {
          id: 1,
          question: t("newModQuizQ"),
          options: [t("newModTitle"), t("newModQuizOpt2"), t("newModQuizOpt3")],
          correctAnswer: t("newModTitle"),
          explanation: t("newModQuizExpl")
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
    if (!window.confirm(t("confirmDeleteModule").replace("{id}", String(id)))) return;
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
      setNewAttachmentError(t("errAttachTooBig"));
      return;
    }
    setNewAttachmentLoading(true);
    const reader = new FileReader();
    reader.onload = () => {
      setNewAttachmentBase64(reader.result as string);
      setNewAttachmentLoading(false);
    };
    reader.onerror = () => {
      setNewAttachmentError(t("errAttachRead"));
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
      alert(t("alertAttachNeed"));
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
    if (!window.confirm(t("confirmDeleteAttach"))) return;
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
      <LangContext.Provider value={langValue}>
      <div className="min-h-screen bg-[#F4F1EA] flex flex-col items-center justify-center p-8 font-sans space-y-4 text-center">
        <Loader2 className="w-12 h-12 text-[#5A5A40] animate-spin" />
        <strong className="text-sm font-bold text-[#3D3A33] font-serif">{t("loadingTitle")}</strong>
        <p className="text-[#8A8471] text-xs max-w-sm">
          {t("loadingSub")}
        </p>
      </div>
      </LangContext.Provider>
    );
  }

  // 1. Not Logged In state: Redirect block to Welcoming Authentication Portal Gateway
  if (!user) {
    return (
      <LangContext.Provider value={langValue}>
      <AramiAuthGate onSuccess={(mockUser, mockProfile) => {
        setUser(mockUser);
        setUserProfile(mockProfile);
      }} />
      </LangContext.Provider>
    );
  }

  return (
    <LangContext.Provider value={langValue}>
    <div className="min-h-screen bg-[#F4F1EA] text-[#3D3A33] font-serif" id="applet-viewport">
      
      {/* Dynamic Header Navbar */}
      <header className="sticky top-0 bg-[#EBE7DC]/95 backdrop-blur-md border-b border-[#D1CCBD] z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3 cursor-pointer" title={t("headerHomeTitle")} onClick={() => { setActiveTab("dashboard"); setIsQuizMode(false); setSelectedLevelExam(null); }}>
            <div className="w-11 h-11 bg-[#5A5A40] rounded-xl flex items-center justify-center text-white font-bold select-none font-serif text-xl border border-[#494933]">
              ܐ
            </div>
            <div>
              <h1 className="font-extrabold text-[#5A5A40] leading-tight tracking-tight flex items-center gap-1.5 text-base md:text-lg">
                {t("headerBrand")}
                <span className="text-[10px] bg-[#E8E4D9] text-[#5A5A40] px-2 py-0.5 rounded-full font-sans font-bold">
                  {t("headerBadge")}
                </span>
              </h1>
              <p className="text-[10px] text-[#8A8471] font-sans font-medium">{t("headerSubtitle")}</p>
            </div>
          </div>

          {/* Quick Stats Summary */}
          <div className="flex items-center gap-4 text-xs font-sans">
            <div className="hidden sm:flex items-center gap-1.5 bg-[#F9F7F2] border border-[#D1CCBD] px-3 py-1.5 rounded-full font-semibold text-[#5A5A40]">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{progress.streak} {t("dayStreak")}</span>
            </div>

            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#EBE7DC] rounded-xl font-bold border border-[#D1CCBD]/50 text-slate-700">
              <GraduationCap className="w-4.5 h-4.5" />
              <span>{t("completed")}: {getModuleProgressPercent()}%</span>
            </div>

            {/* Language toggle ID | EN */}
            <div className="flex items-center bg-[#EBE7DC] border border-[#D1CCBD]/50 rounded-xl overflow-hidden font-bold text-xs">
              <button
                onClick={() => switchLang("id")}
                className={`px-2.5 py-1.5 cursor-pointer ${lang === "id" ? "bg-[#5A5A40] text-white" : "text-[#8A8471] hover:text-[#3D3A33]"}`}
              >
                ID
              </button>
              <button
                onClick={() => switchLang("en")}
                className={`px-2.5 py-1.5 cursor-pointer ${lang === "en" ? "bg-[#5A5A40] text-white" : "text-[#8A8471] hover:text-[#3D3A33]"}`}
              >
                EN
              </button>
            </div>

            {/* Profile Avatar Trigger */}
            <button
              onClick={() => { setActiveTab("files"); setIsQuizMode(false); }}
              className="py-1 px-3 bg-[#5A5A40] text-white hover:bg-[#4C4C36] font-semibold rounded-xl flex items-center gap-1.5 cursor-pointer"
            >
              <User className="w-4 h-4" />
              <span className="max-w-[120px] truncate">{userProfile?.fullName || t("studentFallback")}</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs Bar */}
        <div className="flex bg-[#EBE7DC] p-1 rounded-2xl border border-[#D1CCBD] shadow-sm max-w-5xl mx-auto mb-8 overflow-x-auto whitespace-nowrap font-sans text-xs sm:text-sm">
          
          <button
            onClick={() => { setActiveTab("dashboard"); setIsQuizMode(false); setSelectedLevelExam(null); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "dashboard" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Trophy className="w-4 h-4" />
            {t("dashboard")}
          </button>

          <button
            onClick={() => { setActiveTab("modules"); setIsQuizMode(false); setSelectedLevelExam(null); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "modules" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            {t("curriculum")}
          </button>

          <button
            onClick={() => { setActiveTab("keyboard"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "keyboard" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <KeyboardIcon className="w-4 h-4" />
            {t("keyboard")}
          </button>

          <button
            onClick={() => { setActiveTab("notebook"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "notebook" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <BookMarked className="w-4 h-4" />
            {t("notebook")}
          </button>

          <button
            onClick={() => { setActiveTab("tutor"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "tutor" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500/10" />
            {t("tutor")}
          </button>

          <button
            onClick={() => { setActiveTab("files"); setIsQuizMode(false); }}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold transition-all cursor-pointer ${
              activeTab === "files" ? "bg-[#5A5A40] text-white shadow" : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-[#F1EEE6]"
            }`}
          >
            <Database className="w-4 h-4 text-emerald-600 animate-pulse" />
            {t("files")}
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
              {t("manageClass")}
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
                {t("gateBadge")}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#3D3A33]">{t("gateTitle")}</h3>
              <p className="text-xs text-[#8A8471] leading-relaxed max-w-sm mx-auto font-sans">
                {t("gateMsg")}
              </p>
            </div>

            {/* Specific feedback boxes */}
            {isRevise && (
              <div className="p-4 bg-amber-50 border border-amber-100 rounded-2xl max-w-md mx-auto text-xs text-amber-900 leading-relaxed font-serif">
                <strong>{t("gateFeedback")}</strong> <br />
                <span className="italic block mt-1 bg-white p-2.5 rounded-lg border">"{userProfile?.adminFeedback}"</span>
                <span className="block mt-2.5 text-[10px] font-sans text-amber-700">
                  {t("gateGoFilesA")} <strong>"{t("files")}"</strong> {t("gateGoFilesB")}
                </span>
              </div>
            )}

            {isPending && (
              <div className="p-4 bg-sky-50 border border-sky-100 rounded-2xl max-w-md mx-auto text-xs text-sky-800 leading-relaxed font-sans text-center">
                <strong>{t("gatePendingTitle")}</strong> <br />
                {t("gatePendingMsg")}
              </div>
            )}

            {isDisapproved && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl max-w-md mx-auto text-xs text-red-800 leading-relaxed font-serif">
                <strong>{t("gateRejected")}</strong> <br />
                <span>{t("gateReason")} "{userProfile?.adminFeedback || t("gateDefaultReason")}"</span>
              </div>
            )}

            <button
              onClick={() => setActiveTab("files")}
              className="py-2 px-6 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-semibold rounded-xl text-xs transition-colors cursor-pointer inline-flex items-center gap-1.5 font-sans"
            >
              {t("gateOpenFiles")}
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
                      <strong>{t("dashReviewTitle")}</strong> <br />
                      {t("dashReviewBody")}
                    </div>
                  </div>
                )}

                {/* Dashboard Banner */}
                <div className="bg-gradient-to-br from-[#5A5A40] via-[#494933] to-[#2D2A26] rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-lg border border-[#3D3A33]">
                  <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
                  <div className="relative z-10 max-w-3xl space-y-4">
                    <span className="text-xs bg-[#EBE7DC] text-[#5A5A40] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                      {t("dashAcademy")}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-serif leading-tight">
                      {t("dashHero1")} <br />
                      <span className="text-amber-400">{t("dashHero2")}</span>
                    </h2>
                    <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-serif">
                       {t("dashWelcome")}
                    </p>
                    
                    {isApproved && (
                      <div className="pt-2 flex flex-wrap gap-3 font-sans text-xs">
                        <button
                          onClick={() => { setActiveTab("modules"); setSelectedLevelExam(null); }}
                          className="bg-[#EBE7DC] hover:bg-[#D1CCBD] text-[#3D3A33] font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer shadow"
                        >
                          {t("startLearning")}
                        </button>
                        <button
                          onClick={() => setActiveTab("tutor")}
                          className="bg-white/10 hover:bg-white/20 border border-white/20 text-[#EBE7DC] font-semibold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                          {t("openTutor")}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Donasi sukarela — aplikasi tetap gratis untuk semua */}
                <DonationCard />

                {/* KPI Metrics */}
                {isApproved && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-2">{t("modulesDone")}</span>
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
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-2">{t("vocabMemorized")}</span>
                      <div className="text-3xl font-extrabold text-[#5A5A40] font-mono mb-1">
                        {progress.savedVocabulary?.length || 0} {t("words")}
                      </div>
                      <span className="text-[10px] text-[#817A63] block">{t("savedInNotebook")}</span>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider mb-1">{t("academicRanking")}</span>
                      <div className="flex justify-center my-1">
                        <Award className="w-8 h-8 text-[#D1A153]" />
                      </div>
                      <strong className="text-xs font-bold text-[#3D3A33]">
                        {progress.completedModules.length >= 15 ? t("rankTop") :
                         progress.completedModules.length >= 8 ? t("rankMid") : t("rankLow")}
                      </strong>
                    </div>

                    <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm flex flex-col justify-between text-center">
                      <span className="text-[#8A8471] font-bold text-xs block uppercase tracking-wider">{t("restartDictionary")}</span>
                      <button
                        onClick={handleResetProgress}
                        className="w-full bg-red-50 hover:bg-red-100 text-red-600 font-semibold py-1.5 rounded-xl border border-red-200 text-xs transition-colors cursor-pointer"
                      >
                        {t("repeatProgress")}
                      </button>
                    </div>
                  </div>
                )}

                {/* Fitur Jurnal Harian Sederhana */}
                <DailyJournal 
                  userId={user?.uid || "sandbox"} 
                  userFullName={userProfile?.fullName || t("studentArami")} 
                />

                {/* Educational text block */}
                <div className="bg-white border border-[#E8E4D9] rounded-3xl p-6 sm:p-8 space-y-6">
                  <h3 className="font-bold text-lg sm:text-xl font-serif text-[#3D3A33]">
                    {t("dashPillars")}
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#8A8471] leading-relaxed font-serif">
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">{t("dashPillar1T")}</strong>
                      <p className="text-slate-600">
                        {t("dashPillar1X")}
                      </p>
                    </div>
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">{t("dashPillar2T")}</strong>
                      <p className="text-slate-600">
                        {t("dashPillar2X")}
                      </p>
                    </div>
                    <div className="bg-[#F1EEE6]/60 p-4.5 rounded-2xl border border-[#D1CCBD]/40 space-y-2">
                      <strong className="font-bold text-[#3D3A33] block text-sm">{t("dashPillar3T")}</strong>
                      <p className="text-slate-600">
                        {t("dashPillar3X")}
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
                    <span className="text-[10px] uppercase font-mono font-bold text-[#F9F7F2]">{t("syllabus")}</span>
                    {isAdmin && (
                      <button
                        onClick={handleAddNewModuleInline}
                        className="py-1 px-2 border border-white/20 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all flex items-center gap-1 text-[9px] font-bold cursor-pointer"
                        title={t("addModule")}
                      >
                        <Plus className="w-3 h-3 text-amber-300" />
                        {t("addShort")}
                      </button>
                    )}
                  </div>

                  {/* Evaluasi Komprehensif / Quick Exam Access */}
                  <div className="bg-[#FAF8F5] border border-[#D1CCBD]/50 rounded-2xl p-3.5 space-y-2 text-sans shadow-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono font-bold text-[#8A8471] tracking-wider flex items-center gap-1">
                        🏆 {t("finalEval")}
                      </span>
                      {isAdmin && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-amber-100 text-amber-800 rounded-md font-bold uppercase tracking-wider font-sans">
                          {t("teacherAccess")}
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
                              {isCompleted ? t("passed") : !unlocked ? t("locked") : t("start")}
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
                                // On phones the module content sits below the list:
                                // scroll it into view so the tap visibly opens it.
                                if (window.innerWidth < 1024) {
                                  setTimeout(() => contentPaneRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
                                }
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
                                  <h5 className={`text-xs font-bold truncate ${!unlocked ? "text-stone-500" : isSelected ? "text-white" : "text-[#3D3A33]"}`}>{modTitle(m)}</h5>
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
                                    title={t("deleteModule")}
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
                <div ref={contentPaneRef} className="lg:col-span-8 bg-white border border-[#E8E4D9] rounded-3xl p-6 shadow-sm min-h-[600px] flex flex-col justify-between font-sans">
                  {selectedLevelExam !== null ? (
                    <div>
                      <button
                        onClick={() => setSelectedLevelExam(null)}
                        className="mb-4 px-4 py-2 border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#5A5A40] text-xs font-bold rounded-xl cursor-pointer"
                      >
                        {t("backToSyllabus")}
                      </button>
                      {renderLevelExamInterface()}
                    </div>
                  ) : !isModuleNavigable(currentModule) ? (
                    <div className="space-y-8 animate-fade-in text-center py-16 px-4 flex flex-col items-center justify-center my-auto">
                      <div className="w-20 h-20 bg-rose-50 text-rose-500 border border-rose-200 rounded-full flex items-center justify-center shadow-sm">
                        <Lock className="w-9 h-9" />
                      </div>
                      <div className="space-y-3 max-w-md mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#3D3A33]">{t("moduleLocked")}</h3>
                        <p className="text-xs text-[#8A8471] leading-relaxed font-sans font-medium">
                          {t("moduleLockedMsg")}
                        </p>
                      </div>
                      <div className="bg-[#FCFBF8] border border-[#E8E4D9] p-4.5 rounded-2xl max-w-sm text-left text-xs text-[#5A5A40] space-y-1">
                        <span className="font-extrabold text-[10px] uppercase tracking-wider block text-[#8A8471]">{t("prereq")}</span>
                        <p className="font-medium">{t("prereqMsg")}</p>
                      </div>
                    </div>
                  ) : !isQuizMode ? (
                    <div className="space-y-6">
                      
                      {/* Title block */}
                      <div className="border-b border-[#F1EEE6] pb-4">
                        <div className="flex items-center justify-between gap-4 flex-wrap mb-1.5">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] bg-[#E8E4D9] text-[#5A5A40] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                              {t("module")} {currentModule.id} • {currentModule.category}
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
                                title={t("editMain")}
                              >
                                <Edit className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </div>
                          <span className={`text-2xl font-bold text-[#5A5A40] ${getSyriacFontClass()}`} dir="rtl">
                            {currentModule.titleSyriac}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#3D3A33] font-serif">{modTitle(currentModule)}</h3>
                        <p className="text-[#8A8471] text-xs leading-relaxed mt-0.5">{modSummary(currentModule)}</p>
                      </div>

                      {/* Interactive Font Selector & Vowel Guide Panel */}
                      <div className="bg-[#F1EEE6]/40 border border-[#E8E4D9] rounded-2xl p-4 font-sans text-xs space-y-3" id="font-vowel-panel">
                        <div className="flex items-center justify-between gap-4 flex-wrap pb-2 border-b border-[#E8E4D9]">
                          <div className="space-y-1">
                            <h4 className="font-extrabold text-[#5A5A40] uppercase tracking-wide text-[10px]">{t("fontLabel")}</h4>
                            <p className="text-[#8A8471] text-[9px]">{t("fontSub")}</p>
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
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">{t("fontStyle")}</span>
                            {syriacFont === "estrangelo" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܐܶܣܛܪܰܢܓܶܠܳܐ (Estrangelo Style)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  {t("fontEstrDesc")}
                                </p>
                              </>
                            )}
                            {syriacFont === "serto" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܣܶܪܛܳܐ (Western - Serto)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  {t("fontSertoDesc")}
                                </p>
                              </>
                            )}
                            {syriacFont === "madenhoyo" && (
                              <>
                                <h5 className="font-extrabold text-xs text-[#5A5A40] font-serif">ܡܲܕ݂ܢܚܵܝܵܐ (Eastern - Nestorian)</h5>
                                <p className="text-[10px] text-slate-600 leading-relaxed font-sans">
                                  {t("fontEastDesc")}
                                </p>
                              </>
                            )}
                          </div>

                          <div className="md:col-span-8 space-y-1.5">
                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-sans">{t("fontVowels")}</span>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                              {syriacFont === "serto" ? (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܰ</span>
                                    <strong className="text-[10px] block font-serif">Pthāḥā (a)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontSymbol")} ◌ܰ (Greek α)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܳ</span>
                                    <strong className="text-[10px] block font-serif">Zqāp̄ā (o/å)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontSymbol")} ◌ܳ (Greek ο)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܺ</span>
                                    <strong className="text-[10px] block font-serif">Ḥbāṣā (i)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontSymbol")} ◌ܺ (Greek η)</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܽ</span>
                                    <strong className="text-[10px] block font-serif">Rbāṣā (e)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontSymbol")} ◌ܽ (Greek ε)</span>
                                  </div>
                                </>
                              ) : syriacFont === "madenhoyo" ? (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܲ</span>
                                    <strong className="text-[10px] block font-serif">Pthāḥā (a)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontDotsTop")}</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܵ</span>
                                    <strong className="text-[10px] block font-serif">Zqāp̄ā (o/â)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontDotsDiagTop")}</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܼ</span>
                                    <strong className="text-[10px] block font-serif">Ḥbāṣā (i)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontDotBelow")}</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܹ</span>
                                    <strong className="text-[10px] block font-serif">Rbāṣā (e)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontDotsDiagBelow")}</span>
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1 col-span-2">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܿ</span>
                                    <strong className="text-[10px] block font-serif">‘Ṣāṣā ruyāḥā (u)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontWawAbove")}</span>
                                  </div>
                                  <div className="p-2 bg-white rounded-xl border border-[#D1CCBD]/40 text-center space-y-1 col-span-2">
                                    <span className="text-xl font-bold block text-[#5A5A40]">◌ܼ</span>
                                    <strong className="text-[10px] block font-serif">‘Ṣāṣā rṣīṣā (u)</strong>
                                    <span className="text-[9px] text-slate-400 block font-sans">{t("fontWawBelow")}</span>
                                  </div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {isAdminEditingMain ? (
                        <div className="space-y-4 p-5 bg-[#F9F7F2]/80 border border-[#D1CCBD] rounded-2xl animate-fade-in font-sans text-xs">
                          <h4 className="font-extrabold text-sm text-[#5A5A40] font-serif">{t("adminQuickForm")} {currentModule.id}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">{t("formTitleId")}</label>
                              <input 
                                type="text"
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs"
                                value={adminEditTitle}
                                onChange={(e) => setAdminEditTitle(e.target.value)}
                              />
                            </div>
                            <div className="space-y-1">
                              <label className="font-bold text-[#8A8471]">{t("formTitleSyriac")}</label>
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
                              <label className="font-bold text-[#8A8471]">{t("formCategory")}</label>
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
                              <label className="font-bold text-[#8A8471]">{t("formSummary")}</label>
                              <input 
                                type="text"
                                className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs"
                                value={adminEditSummary}
                                onChange={(e) => setAdminEditSummary(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-[#8A8471]">{t("introLabel")}</label>
                            <textarea 
                              rows={3}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs resize-none"
                              value={adminEditIntroduction}
                              onChange={(e) => setAdminEditIntroduction(e.target.value)}
                            />
                          </div>
                          <div className="space-y-1">
                            <label className="font-bold text-[#8A8471]">{t("formContent")}</label>
                            <textarea 
                              rows={6}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none text-xs font-serif leading-relaxed"
                              value={adminEditContent}
                              onChange={(e) => setAdminEditContent(e.target.value)}
                            />
                          </div>
                          <div className="space-y-1.5 p-3.5 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl font-sans text-xs">
                            <label className="font-extrabold text-[#5A5A40] block">{t("formEmbed")}</label>
                            <p className="text-[10px] text-[#8A8471] leading-relaxed">
                              {t("formEmbedHint")} <code>&lt;iframe&gt;</code>.
                            </p>
                            <textarea 
                              rows={2.5}
                              className="w-full border border-[#D1CCBD] p-2 rounded-xl bg-white focus:border-[#5A5A40] outline-none font-mono text-xs"
                              placeholder={t("formEmbedPh")}
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
                              {t("cancel")}
                            </button>
                            <button
                              type="button"
                              onClick={handleSaveMainDetails}
                              className="py-1.5 px-4 bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-extrabold rounded-xl text-xs flex items-center gap-1 cursor-pointer"
                            >
                              <Save className="w-3 h-3 text-amber-300" />
                              {t("save")}
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* Content block */
                        <div className="space-y-4">
                          <div className="bg-[#F1EEE6]/50 rounded-2xl p-4 border border-[#D1CCBD]/30 font-serif text-xs leading-relaxed whitespace-pre-line text-[#3D3A33]">
                            <strong className="text-[#5A5A40] text-[10px] uppercase font-bold tracking-wider font-sans block mb-1">{t("introLabel")}</strong>
                            {modIntro(currentModule)}
                          </div>

                          <div className="space-y-2 font-serif text-xs leading-relaxed text-[#3D3A33]/90 whitespace-pre-line bg-[#F9F7F2]/40 p-4 rounded-xl border border-[#D1CCBD]/20">
                            <strong className="text-[#5A5A40] text-[10px] uppercase font-bold tracking-wider font-sans block mb-1">{t("contentLabel")}</strong>
                            {modContent(currentModule)}
                          </div>

                          {renderModuleEmbed(currentModule.embedCode, langValue.t)}

                          {/* Rules list */}
                          <div className="p-4 bg-yellow-50/20 border border-[#D1CCBD]/50 rounded-2xl">
                            <div className="flex items-center justify-between gap-1.5 mb-2">
                              <span className="text-[#5A5A40] text-[10px] font-bold uppercase tracking-wider block font-sans">{t("rulesLabel")}</span>
                              {isAdmin && !isAddingKeyRule && (
                                <button
                                  onClick={() => setIsAddingKeyRule(true)}
                                  className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer"
                                  title={t("addRule")}
                                >
                                  <Plus className="w-3 h-3 text-emerald-600" />
                                  {t("ruleShort")}
                                </button>
                              )}
                            </div>

                            {isAddingKeyRule && (
                              <div className="p-2.5 bg-white border border-amber-200 rounded-xl mb-3 flex items-center gap-2 font-sans text-xs">
                                <input
                                  type="text"
                                  placeholder={t("rulePh")}
                                  value={newKeyRuleText}
                                  onChange={(e) => setNewKeyRuleText(e.target.value)}
                                  className="flex-1 p-1.5 border border-[#D1CCBD] rounded-lg outline-none max-h-8"
                                />
                                <button 
                                  onClick={handleAddKeyRule}
                                  className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-bold text-[10px]"
                                >
                                  {t("save")}
                                </button>
                                <button 
                                  onClick={() => setIsAddingKeyRule(false)}
                                  className="px-2 py-1 bg-[#F1EEE6] text-[#8A8471] rounded-lg text-[10px] border border-[#D1CCBD]"
                                >
                                  {t("cancel")}
                                </button>
                              </div>
                            )}

                            <ul className="list-disc list-inside space-y-1 text-xs leading-relaxed text-[#3D3A33] font-serif pl-1">
                              {modKeyRules(currentModule)?.map((r, idx) => (
                                <li key={idx} className="group/item list-none flex items-center justify-between gap-2.5">
                                  <span className="flex items-center gap-1.5">
                                    <span className="text-amber-500">•</span>
                                    <span>{r}</span>
                                  </span>
                                  {isAdmin && (
                                    <button
                                      onClick={() => handleDeleteKeyRule(idx)}
                                      className="p-0.5 text-red-400 hover:text-red-600 opacity-60 hover:opacity-100 transition-all cursor-pointer"
                                      title={t("delRule")}
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
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-widest block font-sans">{t("examplesLabel")}</span>
                            {isAdmin && !isAddingExample && (
                              <button
                                onClick={() => setIsAddingExample(true)}
                                className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer font-sans"
                                title={t("addExample")}
                              >
                                <Plus className="w-3 h-3 text-emerald-600" />
                                {t("exampleShort")}
                              </button>
                            )}
                          </div>

                          {isAddingExample && (
                            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl space-y-2 font-sans text-xs animate-fade-in">
                              <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif">{t("addExampleTitle")}</h5>
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
                                  placeholder={t("exPhTranslit")} 
                                  value={newExampleTranslit}
                                  onChange={(e) => setNewExampleTranslit(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder={t("exPhPhonetic")} 
                                  value={newExamplePhonetic}
                                  onChange={(e) => setNewExamplePhonetic(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder={t("exPhIndonesian")} 
                                  value={newExampleIndonesian}
                                  onChange={(e) => setNewExampleIndonesian(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg outline-none text-xs bg-white"
                                />
                              </div>
                              <div className="flex justify-end gap-1.5 text-[10px]">
                                <button type="button" onClick={() => setIsAddingExample(false)} className="px-2 py-1 bg-gray-100 rounded border border-[#D1CCBD] cursor-pointer">{t("cancel")}</button>
                                <button type="button" onClick={handleAddExampleInline} className="px-2.5 py-1 bg-[#5A5A40] hover:bg-[#4C4C36] text-white rounded font-bold cursor-pointer">{t("save")}</button>
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
                                        title={t("delExample")}
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                  <span className="text-[10px] text-slate-500 block">"{ex.phonetic}"</span>
                                  <span className="text-slate-600 block mt-1 text-[11px]">{t("means")} {exMeaning(ex)}</span>
                                </div>
                                <span className={`text-xl font-bold text-[#5A5A40] ${getSyriacFontClass()}`} dir="rtl">{ex.syriac}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between gap-1.5">
                            <span className="text-[10px] text-[#5A5A40] uppercase font-bold tracking-widest block font-sans">{t("vocabLabel")}</span>
                            {isAdmin && !isAddingVocab && (
                              <button
                                onClick={() => setIsAddingVocab(true)}
                                className="p-1 hover:bg-black/5 rounded text-[#5A5A40] transition-all flex items-center gap-0.5 text-[9px] font-bold cursor-pointer font-sans"
                                title={t("addVocab")}
                              >
                                <Plus className="w-3 h-3 text-emerald-600" />
                                {t("vocabShort")}
                              </button>
                            )}
                          </div>

                          {isAddingVocab && (
                            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl space-y-2 font-sans text-xs animate-fade-in">
                              <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif">{t("addVocabTitle")}</h5>
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
                                  placeholder={t("vocabPhTranslit")} 
                                  value={newVocabTranslit}
                                  onChange={(e) => setNewVocabTranslit(e.target.value)}
                                  className="p-1 border border-[#D1CCBD] rounded-lg text-xs bg-white outline-none"
                                />
                                <input 
                                  type="text" 
                                  required
                                  placeholder={t("vocabPhMeaning")} 
                                  value={newVocabMeaning}
                                  onChange={(e) => setNewVocabMeaning(e.target.value)}
                                  className="p-1 border border-[#D1CCBD] rounded-lg text-xs bg-white outline-none"
                                />
                              </div>
                              <div className="flex justify-end gap-1.5 text-[10px]">
                                <button type="button" onClick={() => setIsAddingVocab(false)} className="px-2 py-1 bg-gray-100 rounded border border-[#D1CCBD] cursor-pointer">{t("cancel")}</button>
                                <button type="button" onClick={handleAddVocabInline} className="px-2.5 py-1 bg-[#5A5A40] hover:bg-[#4C4C36] text-white rounded font-bold cursor-pointer">{t("save")}</button>
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
                                        title={t("delVocab")}
                                      >
                                        <Trash2 className="w-3 h-3" />
                                      </button>
                                    )}
                                  </div>
                                  <span className="text-[#8A8471] text-[10px] block mt-0.5">{vocabMeaning(v)}</span>
                                </div>
                                <span className={`text-lg font-bold text-[#3D3A33] ${getSyriacFontClass()}`} dir="rtl">{v.syriac}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* PRONUNCIATION PRACTICE: RECORD & LISTEN BACK */}
                      <PronunciationRecorder
                        moduleTitle={modTitle(currentModule) || `${t("module")} ${currentModule.id}`}
                        items={[
                          ...(currentModule.examples || []).slice(0, 5).map((ex) => ({
                            syriac: ex.syriac,
                            translit: ex.translit,
                            translation: exMeaning(ex),
                          })),
                          ...(currentModule.vocabulary || []).slice(0, 4).map((v) => ({
                            syriac: v.syriac,
                            translit: v.translit,
                            translation: vocabMeaning(v),
                          })),
                        ]}
                      />

                      {/* ADMIN-POSTED MODULE MATERIALS & DOWNLOADS (PDF, WORD, EXCEL, MP3, MP4) */}
                      <div className="pt-4 border-t border-[#F1EEE6] space-y-3 font-sans">
                        <div className="flex items-center justify-between gap-1.5">
                          <span className="text-[10px] text-amber-800 uppercase font-bold tracking-wider flex items-center gap-1">
                            {t("attachTitle")}
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
                              title={t("addAttach")}
                            >
                              <Plus className="w-3 h-3 text-emerald-600" />
                              {t("addRef")}
                            </button>
                          )}
                        </div>

                        {isAdmin && isAddingAttachmentInline && (
                          <div className="p-4 bg-[#F9F7F2]/90 border border-amber-200 rounded-xl space-y-3 font-sans text-xs animate-fade-in shadow-sm">
                            <h5 className="font-extrabold text-[#5A5A40] text-[10px] font-serif uppercase tracking-wider block">{t("attachFormTitle")}</h5>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-[#8A8471]">{t("attachName")}</label>
                                <input 
                                  type="text" 
                                  required 
                                  placeholder={t("attachNamePh")} 
                                  value={newAttachmentName}
                                  onChange={(e) => setNewAttachmentName(e.target.value)}
                                  className="p-1.5 w-full border border-[#D1CCBD] rounded-lg bg-white outline-none"
                                />
                              </div>
                              
                              <div className="space-y-1">
                                <label className="text-[10px] font-bold text-[#8A8471]">{t("attachType")}</label>
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
                                  <option value="youtube">{t("attOptYoutube")}</option>
                                  <option value="embed_web">{t("attOptWeb")}</option>
                                  <option value="embed_text">{t("attOptText")}</option>
                                  <option value="mp3">{t("attOptMp3")}</option>
                                  <option value="mp4">{t("attOptMp4")}</option>
                                  <option value="pdf">{t("attOptPdf")}</option>
                                  <option value="teks">{t("attOptTxt")}</option>
                                  <option value="web_link">{t("attOptLink")}</option>
                                </select>
                              </div>
                            </div>

                            {newAttachmentType === "embed_text" || newAttachmentType === "embed_code" ? (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block mb-1">
                                  {newAttachmentType === "embed_text" ? t("attachWriteText") : t("attachPasteCode")}
                                </label>
                                <textarea 
                                  rows={newAttachmentType === "embed_code" ? 5 : 4}
                                  placeholder={
                                    newAttachmentType === "embed_text" 
                                      ? t("attachTypeTextPh") 
                                      : t("attachPastePh")
                                  } 
                                  value={newAttachmentUrl}
                                  onChange={(e) => setNewAttachmentUrl(e.target.value)}
                                  className="p-1.5 border border-[#D1CCBD] rounded-lg text-xs w-full bg-white outline-none font-mono"
                                />
                                {newAttachmentType === "embed_code" && (
                                  <p className="text-[9px] text-[#817A63] leading-relaxed">
                                    {t("attachHtmlNote")}
                                  </p>
                                )}
                              </div>
                            ) : ["teks", "pdf", "mp3", "mp4"].includes(newAttachmentType) ? (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block mb-1">{t("attachPickFile")}</label>
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
                                    placeholder={t("attachOrPaste")} 
                                    value={newAttachmentUrl}
                                    onChange={(e) => setNewAttachmentUrl(e.target.value)}
                                    className="p-1.5 border border-[#D1CCBD] rounded-lg text-xs w-full bg-white outline-none"
                                  />
                                </div>
                                {newAttachmentLoading && <span className="text-[9px] text-[#5A5A40] animate-pulse block mt-1">{t("attachProcessing")}</span>}
                                {newAttachmentError && <span className="text-[9px] text-red-500 block mt-1">{newAttachmentError}</span>}
                              </div>
                            ) : (
                              <div className="space-y-1 bg-white p-2.5 rounded-lg border border-[#D1CCBD]">
                                <label className="text-[10px] font-bold text-[#8A8471] block">
                                  {newAttachmentType === "youtube" ? t("attachYtLabel") : 
                                   newAttachmentType === "embed_web" ? t("attachWebLabel") :
                                   t("attachWebLinkLabel")}
                                </label>
                                <input 
                                  type="url" 
                                  required 
                                  placeholder={
                                    newAttachmentType === "youtube" ? t("attachUrlPhYt") :
                                    newAttachmentType === "embed_web" ? t("attachUrlPhWiki") :
                                    t("attachUrlPhSite")
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
                                {t("cancel")}
                              </button>
                              <button 
                                type="button" 
                                onClick={handleAddAttachmentInlineSubmit}
                                disabled={newAttachmentLoading}
                                className="px-3 py-1 bg-[#5A5A40] text-amber-300 hover:bg-[#4C4C36] rounded font-bold cursor-pointer"
                              >
                                {t("saveRef")}
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
                                  <span className="text-[9px] text-[#837B64] block font-mono mt-0.5">{t("attachFormat")} {item.type.toUpperCase() === "EMBED_CODE" ? t("attachEmbedMedia") : item.type.toUpperCase()}</span>
                                </div>
                                {isAdmin && (
                                  <button
                                    type="button"
                                    onClick={() => handleDeleteAttachmentInline(item.id)}
                                    className="p-1 text-red-400 hover:text-red-650 hover:bg-red-50 rounded transition-all cursor-pointer"
                                    title={t("delRef")}
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
                                      {t("attachBadUrl")}{item.url}
                                    </div>
                                  )}
                                  <a 
                                    href={item.url} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="block font-bold text-[10px] text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 rounded-lg p-1.5 text-center border border-red-200 transition-colors"
                                  >
                                    {t("openYoutube")}
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
                                    {t("openSite")}
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
                                    {t("dlMp3")}
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
                                    {t("dlMp4")}
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
                                    {t("openPdf")}
                                  </button>
                                </div>
                              ) : item.type === "web_link" ? (
                                <a 
                                  href={item.url} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="w-full font-bold py-1.5 px-3 text-center bg-blue-50 text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors text-[10px] cursor-pointer"
                                >
                                  {t("openRef")}
                                </a>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => handleDownloadFile(item)}
                                  className="w-full font-bold py-1.5 px-3 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition-colors text-[10px] flex items-center justify-center gap-1 cursor-pointer"
                                >
                                  <Download className="w-3 h-3" />
                                  {t("reviewFile")}
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
                            <h4 className="font-extrabold text-[#5A5A40] font-serif text-sm">{t("taskFormTitle")} {currentModule.id}</h4>
                            <p className="text-slate-500 text-[11px]">{t("taskFormSub")}</p>
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
                            <span className="text-xs font-bold text-slate-700 block">{t("taskSubmitLabel")} {selectedModuleId}</span>
                            <span className="text-[9px] text-[#8A8471] font-mono mt-1 block">{t("taskDrop")}</span>
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
                              <span className="text-[10px] font-bold text-[#8A8471] uppercase tracking-wider block">{t("taskHistory")} ({currModFiles.length}):</span>
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
                                <span className="text-emerald-700 font-bold block font-sans">{t("quizDone")}</span>
                              ) : (
                                t("quizTodo")
                              )}
                            </span>
                            {/* CEFR and completion badge */}
                            <p className="text-[10px] text-slate-500 font-mono block">
                              {t("academicMastery")} {currentModule.id >= 10 && currentModule.id <= 16 ? "CEFR A2 (Elementary)" : currentModule.id >= 18 ? "CEFR A2-B1" : "CEFR A1 (Beginner)"}
                            </p>
                          </div>
                          
                          <div className="flex gap-2.5 flex-wrap justify-center sm:justify-end">
                            {renderNextStepButton("bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow transition-colors cursor-pointer")}
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
                              {progress.completedModules.includes(currentModule.id) ? t("retakeQuiz") : `${t("openQuiz")} (${currentModule.quizzes?.length || 1} ${t("questions")})`}
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
                                <span className="text-[10px] uppercase font-bold text-slate-400">{t("score")}</span>
                              </div>
                            </div>

                            <div className="space-y-2">
                              <h3 className="text-xl font-extrabold font-serif text-[#3D3A33]">
                                {quizResult.passed ? t("passedQuiz") : t("failedQuiz")}
                              </h3>
                              <p className="text-xs text-[#817A63] max-w-md mx-auto leading-relaxed font-sans">
                                {quizResult.passed 
                                  ? lang === "en" ? `Amazing! Your Syriac learning progress is proven solid — you answered ${quizResult.finalScore} out of ${quizResult.totalQuestions} questions correctly (minimum pass 70%).` : `Luar biasa! Kemajuan belajar bahasa Aram Anda terbukti mantap dengan mencetak hasil ${quizResult.finalScore} benar dari ${quizResult.totalQuestions} pertanyaan (Kelulusan min. 70%).`
                                  : lang === "en" ? `You answered ${quizResult.finalScore} out of ${quizResult.totalQuestions} questions correctly. You need at least 70% correct answers to pass this material. Review the lesson and try again!` : `Anda menjawab ${quizResult.finalScore} benar dari ${quizResult.totalQuestions} pertanyaan. Butuh minimal 70% jawaban benar untuk lulus materi ini dan membuka sertifikat. Mari pelajari kembali dan coba lagi!`
                                }
                              </p>
                            </div>

                            {/* Award Badge UI */}
                            {quizResult.passed ? (
                              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl max-w-sm mx-auto flex items-center gap-3 font-sans text-xs text-emerald-800 text-left">
                                <Award className="w-8 h-8 text-amber-500 shrink-0" />
                                <div>
                                  <strong className="block font-bold text-emerald-950">{t("certOpen")}</strong>
                                  <span>{t("certOpenMsg")}</span>
                                </div>
                              </div>
                            ) : (
                              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl max-w-sm mx-auto flex items-center gap-3 font-sans text-xs text-amber-800 text-left">
                                <BookOpen className="w-8 h-8 text-amber-600 shrink-0" />
                                <div>
                                  <strong className="block font-bold text-amber-950">{t("keepPracticing")}</strong>
                                  <span>{t("keepPracticingMsg")}</span>
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
                              {t("backToMaterial")}
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
                              renderNextStepButton("w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 font-bold text-white text-xs px-5 py-2.5 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-1.5")
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
                                {t("retakeNow")}
                              </button>
                            )}
                          </div>
                        </div>
                      ) : (
                        <>
                          <div>
                            <div className="border-b border-[#E8E4D9] pb-4 flex justify-between items-center mb-6">
                              <div>
                                <h4 className="text-[10px] uppercase font-bold text-[#5A5A40] tracking-wider font-mono">{t("quizTitle")} {currentModule.id} • {t("minPass")}</h4>
                                <h3 className="text-[#3D3A33] font-extrabold text-base sm:text-lg font-serif">{modTitle(currentModule)}</h3>
                              </div>
                              <span className="text-xs font-mono font-bold bg-[#F1EEE6] text-[#5A5A40] px-3 py-1 rounded-full">
                                {t("questionOf")} {currentQuizIndex + 1} {t("of")} {currentModule.quizzes?.length || 1}
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
                                  {displayQuizzes[currentQuizIndex].question}
                                </div>

                                {/* Options */}
                                <div className="grid grid-cols-1 gap-3 font-sans">
                                  {displayQuizzes[currentQuizIndex].options.map((option, idx) => {
                                    const isSelected = selectedOption === option;
                                    const isCorrect = option === displayQuizzes[currentQuizIndex].correctAnswer;
                                    
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
                                selectedOption === displayQuizzes[currentQuizIndex].correctAnswer
                                  ? "bg-emerald-50/50 border-emerald-100 text-emerald-800"
                                  : "bg-red-50/50 border-red-100 text-red-800"
                              }`}>
                                <strong>{selectedOption === displayQuizzes[currentQuizIndex].correctAnswer ? t("correct") : t("incorrect")}</strong>{" "}
                                {displayQuizzes[currentQuizIndex].explanation}
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
                              {t("cancelQuiz")}
                            </button>

                            <div className="flex gap-2">
                              {!isAnswered ? (
                                <button
                                  onClick={handleCheckAnswer}
                                  disabled={!selectedOption}
                                  className="bg-[#5A5A40] disabled:bg-[#D1CCBD] hover:bg-[#4C4C36] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer"
                                >
                                  {t("checkAnswer")}
                                </button>
                              ) : (
                                <button
                                  onClick={handleNextQuizQuestion}
                                  className="bg-[#2D2A26] hover:bg-[#3D3A33] text-white font-bold text-xs sm:text-sm px-6 py-2.5 rounded-xl cursor-pointer"
                                >
                                  {currentQuizIndex === (currentModule.quizzes?.length || 1) - 1 ? t("finishQuiz") : t("nextQuestion")}
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
                <AIAssistant lang={lang} />
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
            <p className="font-serif">{t("footerNote")}</p>
          )}
        </div>
      </footer>

      {levelCertificateOpen && levelCertificateToOpen && (
        <CertificateModal
          isOpen={levelCertificateOpen}
          onClose={() => {
            setLevelCertificateOpen(false);
            setLevelCertificateToOpen(null);
          }}
          level={levelCertificateToOpen}
          userFullName={userProfile?.fullName || t("studentFallback")}
        />
      )}

    </div>
    </LangContext.Provider>
  );
}
