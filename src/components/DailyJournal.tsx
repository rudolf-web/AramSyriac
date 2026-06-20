import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Trash2, 
  Calendar, 
  PlusCircle, 
  Search, 
  PenTool,
  Smile,
  Meh,
  Frown,
  CheckCircle2
} from "lucide-react";

export interface JournalEntry {
  id: string;
  userId: string;
  date: string;
  content: string;
  feeling: "paham" | "cukup" | "bingung";
}

interface DailyJournalProps {
  userId: string;
  userFullName: string;
}

export function DailyJournal({ userId, userFullName }: DailyJournalProps) {
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [content, setContent] = useState("");
  const [feeling, setFeeling] = useState<"paham" | "cukup" | "bingung">("paham");
  const [searchTerm, setSearchTerm] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Load journal entries from localStorage on mount or userId change
  useEffect(() => {
    const cacheKey = `arami_journal_${userId}`;
    const saved = localStorage.getItem(cacheKey);
    if (saved) {
      try {
        setEntries(JSON.parse(saved));
      } catch (e) {
        console.error("Gagal mengurai logs jurnal:", e);
        setEntries([]);
      }
    } else {
      // Default initial welcome entry for demo
      const initialEntries: JournalEntry[] = [
        {
          id: "welcome-journal-entry",
          userId: userId,
          date: new Date(Date.now() - 24 * 60 * 60 * 1000).toLocaleDateString("id-ID", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }),
          content: "Halo! Ini adalah Jurnal Harian saya pertama kali bergabung di Akademi Arami-Syriac. Saya siap mempelajari aksara Alap-Beth dan teks teologis Semitik kuno bersama Rudolf Luhukay.",
          feeling: "paham"
        }
      ];
      setEntries(initialEntries);
      localStorage.setItem(cacheKey, JSON.stringify(initialEntries));
    }
  }, [userId]);

  // Save entries to localStorage
  const saveEntriesToStorage = (newEntries: JournalEntry[]) => {
    const cacheKey = `arami_journal_${userId}`;
    localStorage.setItem(cacheKey, JSON.stringify(newEntries));
    setEntries(newEntries);
  };

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    const formattedDate = new Date().toLocaleDateString("id-ID", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });

    const newEntry: JournalEntry = {
      id: "journal_" + Math.random().toString(36).substring(2) + Date.now().toString(36),
      userId: userId,
      date: formattedDate,
      content: content.trim(),
      feeling: feeling
    };

    const updated = [newEntry, ...entries];
    saveEntriesToStorage(updated);
    setContent("");
    setFeeling("paham");
    setSuccessMessage("Entri Jurnal Harian Anda berhasil disimpan!");
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleDeleteEntry = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus refleksi jurnal ini?")) {
      const filtered = entries.filter(e => e.id !== id);
      saveEntriesToStorage(filtered);
    }
  };

  // Filter entries based on search text
  const filteredEntries = entries.filter(entry => 
    entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white border border-[#E8E4D9] rounded-3xl p-6 sm:p-8 space-y-6 font-sans shadow-sm" id="jurnal-harian-section">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E8E4D9] pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#5A5A40]">
            <PenTool className="w-5 h-5" />
            <h3 className="font-extrabold text-lg sm:text-xl font-serif text-[#3D3A33]">
              Jurnal Harian & Refleksi Belajar
            </h3>
          </div>
          <p className="text-xs text-[#8A8471]">
            Tulis kesimpulan, kosakata baru, atau kesulitan belajar yang Anda hadapi hari ini.
          </p>
        </div>

        {/* Small Progress Hint */}
        <span className="text-[10px] bg-[#F1EEE6] text-[#5A5A40] font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-center">
          Total Refleksi: {entries.length} Catatan
        </span>
      </div>

      {successMessage && (
        <div className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs flex gap-2 items-center animate-fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{successMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* INPUT FORM */}
        <form onSubmit={handleAddEntry} className="lg:col-span-5 space-y-4 bg-[#F1EEE6]/30 p-5 rounded-2xl border border-[#E8E4D9]/60">
          <h4 className="font-bold text-xs text-[#3D3A33] uppercase tracking-wider flex items-center gap-1.5">
            <PlusCircle className="w-4 h-4 text-[#5A5A40]" />
            Tulis Catatan Hari Ini
          </h4>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#8A8471] block">
              Skala Pemahaman Hari Ini:
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setFeeling("paham")}
                className={`py-2 px-1.5 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                  feeling === "paham" 
                    ? "bg-emerald-50 border-emerald-400 text-emerald-800 shadow-sm" 
                    : "bg-white border-[#D1CCBD] text-[#8A8471] hover:bg-slate-50"
                }`}
              >
                <Smile className={`w-5 h-5 ${feeling === "paham" ? "text-emerald-600" : "text-slate-400"}`} />
                <span>Paham</span>
              </button>

              <button
                type="button"
                onClick={() => setFeeling("cukup")}
                className={`py-2 px-1.5 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                  feeling === "cukup" 
                    ? "bg-amber-50 border-amber-400 text-amber-800 shadow-sm" 
                    : "bg-white border-[#D1CCBD] text-[#8A8471] hover:bg-slate-50"
                }`}
              >
                <Meh className={`w-5 h-5 ${feeling === "cukup" ? "text-amber-600" : "text-slate-400"}`} />
                <span>Cukup</span>
              </button>

              <button
                type="button"
                onClick={() => setFeeling("bingung")}
                className={`py-2 px-1.5 rounded-xl border text-[11px] font-bold transition-all flex flex-col items-center gap-1 cursor-pointer ${
                  feeling === "bingung" 
                    ? "bg-rose-50 border-rose-400 text-rose-800 shadow-sm" 
                    : "bg-white border-[#D1CCBD] text-[#8A8471] hover:bg-slate-50"
                }`}
              >
                <Frown className={`w-5 h-5 ${feeling === "bingung" ? "text-rose-600" : "text-slate-400"}`} />
                <span>Bingung</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[11px] font-bold text-[#8A8471] block">
              Refleksi Belajar Anda:
            </label>
            <textarea
              required
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Contoh: Hari ini saya berhasil menghafal 5 huruf konsonan baru (Alap, Beth, Gamal, Dalath, He) dan memahami struktur penulisan dari kanan ke kiri..."
              className="w-full bg-white border border-[#D1CCBD] rounded-xl p-3 outline-none focus:border-[#5A5A40] text-xs transition-colors resize-none placeholder-slate-400 leading-relaxed text-[#3D3A33]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#5A5A40] hover:bg-[#494933] text-white font-bold rounded-xl text-xs transition-colors shadow flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            Simpan Refleksi Jurnal
          </button>
        </form>

        {/* JOURNAL LIST */}
        <div className="lg:col-span-7 flex flex-col space-y-4">
          
          {/* SEARCH BAR */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari refleksi sebelumnya..."
              className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl py-2 pl-9 pr-4 outline-none focus:border-[#5A5A40] text-xs transition-colors"
            />
          </div>

          {/* LIST BOX */}
          <div className="flex-grow max-h-[320px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
            {filteredEntries.length === 0 ? (
              <div className="text-center py-10 bg-slate-50 rounded-2xl border border-dashed border-[#D1CCBD] space-y-1">
                <p className="text-xs font-bold text-[#8A8471]">Tidak ditemukan catatan refleksi.</p>
                <p className="text-[10px] text-slate-400">Silakan tulis entri baru atau periksa filter pencarian Anda.</p>
              </div>
            ) : (
              filteredEntries.map((entry) => {
                let badgeBg = "bg-emerald-50 text-emerald-800 border-emerald-200";
                let emojiIcon = <Smile className="w-3.5 h-3.5 text-emerald-600" />;
                let badgeText = "Paham";

                if (entry.feeling === "cukup") {
                  badgeBg = "bg-amber-50 text-amber-800 border-amber-200";
                  emojiIcon = <Meh className="w-3.5 h-3.5 text-amber-600" />;
                  badgeText = "Cukup";
                } else if (entry.feeling === "bingung") {
                  badgeBg = "bg-rose-50 text-rose-800 border-rose-200";
                  emojiIcon = <Frown className="w-3.5 h-3.5 text-rose-600" />;
                  badgeText = "Bingung";
                }

                return (
                  <div 
                    key={entry.id}
                    className="p-4 bg-[#F9F7F2]/40 hover:bg-[#F9F7F2]/80 border border-[#E8E4D9] rounded-2xl transition-all relative group space-y-2.5 shadow-sm"
                  >
                    <div className="flex items-start justify-between gap-2 border-b border-dashed border-[#E8E4D9] pb-2">
                      <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{entry.date}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-bold border ${badgeBg}`}>
                          {emojiIcon}
                          {badgeText}
                        </span>

                        <button
                          type="button"
                          onClick={() => handleDeleteEntry(entry.id)}
                          className="p-1 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-600 transition-colors duration-150 cursor-pointer"
                          title="Hapus Jurnal"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed font-serif whitespace-pre-wrap">
                      {entry.content}
                    </p>
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
