import React, { useState, useEffect } from "react";
import { useLang } from "../lang";
import { BookOpen, HelpCircle, Save, Plus, Trash2, Milestone, Languages } from "lucide-react";
import { VocabularyWord } from "../types";

interface VocabularyNotebookProps {
  isAdmin?: boolean;
  userId?: string;
}

export function VocabularyNotebook({ isAdmin = false, userId = "sandbox" }: VocabularyNotebookProps) {
  const { lang, t } = useLang();
  // English notes for the built-in words (notes have no English field in types).
  const NOTE_EN: Record<string, string> = {
    "Setara dengan 'Shalom' (Ibrani) atau 'Salam' (Arab).": "Equivalent to 'Shalom' (Hebrew) or 'Salam' (Arabic).",
    "Menyiratkan cinta kasih yang tulus dan mendalam.": "Implies sincere and deep loving affection.",
    "Berakar dari rumpun kata El (Tuhan Semitik).": "Rooted in the El word family (Semitic God).",
    "Berasal dari akar kata K-Th-B (menulis).": "From the root K-Th-B (to write).",
    "Misal: 'Beyth Alaha' berarti Bait Allah (Gereja / Rumah Ibadah).": "E.g. 'Beyth Alaha' means the House of God (Church / House of Worship).",
    "Nama Aram bersejarah yang berarti 'Dia yang menyelamatkan'.": "A historic Aramaic name meaning 'He who saves'.",
    "Bernilai jamak secara tata bahasa tetapi bermakna tunggal.": "Grammatically plural in form but singular in meaning.",
    "Sering digunakan dlm naskah liturgi timur klasik.": "Often used in classical Eastern liturgical manuscripts.",
    "Setara dengan Malik (Arab) atau Melekh (Ibrani).": "Equivalent to Malik (Arabic) or Melekh (Hebrew).",
    "Sering merujuk pada Kerajaan Surga dlm teks teologi.": "Often refers to the Kingdom of Heaven in theological texts.",
    "Bentuk jamaknya adalah 'Ahe' (saudara-saudara).": "Its plural form is 'Ahe' (brothers).",
    "Bentuk feminin dari Aho.": "The feminine form of Aho.",
    "Kemurahan hati yang diberikan secara cuma-cuma.": "Generosity given freely.",
    "Artinya sembahyang atau permohonan khusyuk kepada Alaha.": "It means worship or devout petition to Alaha.",
  };
  const wordMeaning = (w: VocabularyWord) => (lang === "en" && w.meaningEn ? w.meaningEn : w.meaning);
  const wordNotes = (w: VocabularyWord) => (lang === "en" && w.notes ? (NOTE_EN[w.notes] ?? w.notes) : w.notes);
  const catLabel = (c?: string) => {
    switch (c) {
      case "Sapaan": return t("vocabCatGreet");
      case "Teologi & Perasaan": return t("vocabCatTheo");
      case "Benda & Alam": return t("vocabCatObjects");
      case "Keluarga": return t("vocabCatFamily");
      case "Nama Tokoh": return t("vocabCatNames");
      case "Semua": return t("vocabCatAll");
      default: return c || "";
    }
  };
  const defaultWords: VocabularyWord[] = [
    { syriac: "ܫܠܳܡܳܐ", translit: "Shlomo / Shlama", meaning: "Damai sejahtera (Halo / Sapaan)", meaningEn: "Peace and well-being (Hello / Greeting)", category: "Sapaan", notes: "Setara dengan 'Shalom' (Ibrani) atau 'Salam' (Arab)." },
    { syriac: "ܚܽܘܒ݁ܳܐ", translit: "Khuba", meaning: "Kasih / Cinta", meaningEn: "Love / Affection", category: "Teologi & Perasaan", notes: "Menyiratkan cinta kasih yang tulus dan mendalam." },
    { syriac: "ܐܰܠܳܗܳܐ", translit: "Alaha", meaning: "Tuhan / Allah", meaningEn: "God / Allah", category: "Teologi & Perasaan", notes: "Berakar dari rumpun kata El (Tuhan Semitik)." },
    { syriac: "ܟܬܳܒܳα", translit: "Kthobo / Kthaba", meaning: "Kitab / Buku", meaningEn: "Book / Scripture", category: "Benda & Alam", notes: "Berasal dari akar kata K-Th-B (menulis)." },
    { syriac: "ܒܰܝܬܳܐ", translit: "Bayto / Bayta", meaning: "Rumah / Bait", meaningEn: "House / Temple", category: "Benda & Alam", notes: "Misal: 'Beyth Alaha' berarti Bait Allah (Gereja / Rumah Ibadah)." },
    { syriac: "ܝܶܫܽܘܥ", translit: "Yeshu`", meaning: "Yesus", meaningEn: "Jesus", category: "Nama Tokoh", notes: "Nama Aram bersejarah yang berarti 'Dia yang menyelamatkan'." },
    { syriac: "ܚܰܝ̈ܶܐ", translit: "Haye", meaning: "Kehidupan / Hidup", meaningEn: "Life / Living", category: "Teologi & Perasaan", notes: "Bernilai jamak secara tata bahasa tetapi bermakna tunggal." },
    { syriac: "ܢܽܘܗܪܳܐ", translit: "Nuhro", meaning: "Terang / Cahaya", meaningEn: "Light / Radiance", category: "Benda & Alam", notes: "Sering digunakan dlm naskah liturgi timur klasik." },
    { syriac: "ܡܰܠܟܳܐ", translit: "Malko", meaning: "Raja", meaningEn: "King", category: "Benda & Alam", notes: "Setara dengan Malik (Arab) atau Melekh (Ibrani)." },
    { syriac: "ܡܰܠܟܽܘܬ݂ܳܐ", translit: "Malkutho", meaning: "Kerajaan", meaningEn: "Kingdom", category: "Benda & Alam", notes: "Sering merujuk pada Kerajaan Surga dlm teks teologi." },
    { syriac: "ܐܰܚܳܐ", translit: "Aho", meaning: "Saudara (Laki-laki)", meaningEn: "Brother (male)", category: "Keluarga", notes: "Bentuk jamaknya adalah 'Ahe' (saudara-saudara)." },
    { syriac: "ܐܰܚܬܳܐ", translit: "Ahto", meaning: "Saudari (Perempuan)", meaningEn: "Sister (female)", category: "Keluarga", notes: "Bentuk feminin dari Aho." },
    { syriac: "ܛܰܝܒܽܘܬ݂ܳܐ", translit: "Taybutho", meaning: "Rahmat / Kasih Karunia", meaningEn: "Grace / Mercy", category: "Teologi & Perasaan", notes: "Kemurahan hati yang diberikan secara cuma-cuma." },
    { syriac: "ܨܠܽܘܬ݂ܳܐ", translit: "Slutho", meaning: "Doa", meaningEn: "Prayer", category: "Teologi & Perasaan", notes: "Artinya sembahyang atau permohonan khusyuk kepada Alaha." }
  ];

  const [words, setWords] = useState<VocabularyWord[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [cardIndex, setCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Form tambah kata baru
  const [newSyriac, setNewSyriac] = useState("");
  const [newTranslit, setNewTranslit] = useState("");
  const [newMeaning, setNewMeaning] = useState("");
  const [newCategory, setNewCategory] = useState("Sapaan");
  const [newNotes, setNewNotes] = useState("");

  const storageKey = `syriac_vocabulary_saved_${userId}`;

  useEffect(() => {
    const savedWords = localStorage.getItem(storageKey);
    if (savedWords) {
      setWords(JSON.parse(savedWords));
    } else {
      setWords(defaultWords);
      localStorage.setItem(storageKey, JSON.stringify(defaultWords));
    }
  }, [userId, storageKey]);

  const handleAddNewWord = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSyriac.trim() || !newTranslit.trim() || !newMeaning.trim()) return;

    const newWord: VocabularyWord = {
      syriac: newSyriac,
      translit: newTranslit,
      meaning: newMeaning,
      category: newCategory,
      notes: newNotes
    };

    const updatedWords = [...words, newWord];
    setWords(updatedWords);
    localStorage.setItem(storageKey, JSON.stringify(updatedWords));

    // Reset Form
    setNewSyriac("");
    setNewTranslit("");
    setNewMeaning("");
    setNewNotes("");
  };

  const handleDeleteWord = (index: number) => {
    const updatedWords = words.filter((_, i) => i !== index);
    setWords(updatedWords);
    localStorage.setItem(storageKey, JSON.stringify(updatedWords));
    // Reset index card if out of bounds
    if (cardIndex >= updatedWords.length) {
      setCardIndex(Math.max(0, updatedWords.length - 1));
    }
  };

  const filteredWords = selectedCategory === "Semua" 
    ? words 
    : words.filter(w => w.category === selectedCategory);

  const handleNextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev + 1) % filteredWords.length);
    }, 150);
  };

  const handlePrevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCardIndex((prev) => (prev - 1 + filteredWords.length) % filteredWords.length);
    }, 150);
  };

  const categories = ["Semua", "Sapaan", "Teologi & Perasaan", "Benda & Alam", "Keluarga", "Nama Tokoh"]; // stored values stay Indonesian; display uses catLabel()

  return (
    <div className="space-y-8" id="vocabulary-notebook-tab">
      {/* Grid Utama */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Kolom Kiri: Flashcard Pembelajaran (Interaktif) (Makan 5 kolom) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#5A5A40] rounded-2xl p-6 text-white border border-[#4C4C36] shadow-md font-sans">
            <h3 className="font-semibold text-lg flex items-center gap-2 font-serif text-[#F9F7F2]">
              <Milestone className="w-5 h-5 text-[#E8E4D9]" />
              {t("vocabFlashTitle")}
            </h3>
            <p className="text-slate-200 text-xs mt-1">{t("vocabFlashSub")}</p>
            
            {filteredWords.length > 0 ? (
              <div className="my-6">
                {/* Outer Card */}
                <div 
                  onClick={() => setIsFlipped(!isFlipped)}
                  style={{ perspective: "1000px" }}
                  className="w-full h-64 cursor-pointer"
                >
                  <div 
                    className="relative w-full h-full text-center transition-transform duration-500"
                    style={{ 
                      transformStyle: "preserve-3d",
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
                    }}
                  >
                    {/* Front Side (Syriac) */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#5A5A40] to-[#454530] border border-[#4C4C36] rounded-2xl flex flex-col items-center justify-center p-4 shadow-inner"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <span className="text-xs bg-[#EBE7DC] text-[#5A5A40] border border-[#D1CCBD] px-3 py-1 rounded-full font-bold uppercase tracking-wider font-mono mb-2">
                        {catLabel(filteredWords[cardIndex]?.category)}
                      </span>
                      <div className="text-5xl font-extrabold text-[#F9F7F2] py-4 font-syriac select-none" dir="rtl">
                        {filteredWords[cardIndex]?.syriac}
                      </div>
                      <p className="text-slate-200/80 text-xs mt-4 flex items-center gap-1 font-sans">
                        <HelpCircle className="w-3.5 h-3.5" />
                        {t("vocabFlip")}
                      </p>
                    </div>

                    {/* Back Side (Meaning) */}
                    <div 
                      className="absolute inset-0 w-full h-full bg-[#EBE7DC] border border-[#D1CCBD] rounded-2xl flex flex-col items-center justify-center p-6 text-[#3D3A33]"
                      style={{ 
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)"
                      }}
                    >
                      <h4 className="text-[#5A5A40] font-serif text-xl font-bold">{filteredWords[cardIndex]?.translit}</h4>
                      <p className="text-lg font-semibold text-[#2D2A26] mt-1.5 font-serif">{filteredWords[cardIndex] ? wordMeaning(filteredWords[cardIndex]) : ""}</p>
                      {filteredWords[cardIndex]?.notes && (
                        <p className="text-[#8A8471] text-xs italic px-4 text-center mt-3 leading-relaxed border-t border-[#D1CCBD] pt-3 font-serif">
                          {filteredWords[cardIndex] ? wordNotes(filteredWords[cardIndex]) : ""}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Navigator */}
                <div className="flex items-center justify-between mt-6 font-sans">
                  <button 
                    onClick={handlePrevCard}
                    className="px-4 py-2 bg-[#4D4D36] border border-[#3D3A33] rounded-xl text-white hover:bg-[#3D3A33] active:bg-[#4D4D36] font-medium transition-colors cursor-pointer text-xs"
                  >
                    {t("vocabPrev")}
                  </button>
                  <span className="text-slate-100/90 text-xs font-mono">
                    {cardIndex + 1} / {filteredWords.length} {t("vocabWordsSuffix")}
                  </span>
                  <button 
                    onClick={handleNextCard}
                    className="px-4 py-2 bg-[#4D4D36] border border-[#3D3A33] rounded-xl text-white hover:bg-[#3D3A33] active:bg-[#4D4D36] font-medium transition-colors cursor-pointer text-xs"
                  >
                    {t("vocabNext")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center border border-dashed border-[#D1CCBD] rounded-2xl p-6 text-center mt-6">
                <p className="text-slate-200 text-sm">{t("vocabNoneCat")}</p>
              </div>
            )}
          </div>

          {/* Form input data kustom baru atau Informasi untuk Siswa */}
          {!isAdmin ? (
            <div className="bg-white p-6 border border-[#E8E4D9] rounded-2xl shadow-sm space-y-4 font-sans text-xs">
              <h4 className="font-semibold text-[#3D3A33] text-sm flex items-center gap-2 font-serif">
                <Languages className="w-4 h-4 text-[#5A5A40]" />
                {t("vocabRepoTitle")}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {t("vocabRepoText")} <strong>Bapak Rudolf A. Luhukay, S.T.</strong> {t("vocabRepoTextB")}
              </p>
              <div className="p-3 bg-[#F1EEE6]/60 border border-[#D1CCBD]/40 rounded-xl text-[11px] text-[#5A5A40] leading-relaxed">
                {t("vocabRepoTip")}
              </div>
            </div>
          ) : (
            <form onSubmit={handleAddNewWord} className="bg-white p-5 border border-[#E8E4D9] rounded-2xl shadow-sm space-y-4">
              <h4 className="font-semibold text-[#3D3A33] text-sm flex items-center gap-2 font-serif">
                <Plus className="w-4 h-4 text-[#5A5A40]" />
                {t("vocabAddTitle")}
              </h4>
              
              <div className="space-y-3 text-xs font-sans">
                <div>
                  <label className="text-[#8A8471] font-medium mb-1 block">{t("vocabSyriacLabel")}</label>
                  <input 
                    type="text" 
                    value={newSyriac}
                    onChange={(e) => setNewSyriac(e.target.value)}
                    placeholder="E.g. ܚܘܒܐ" 
                    className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl p-2.5 text-right font-serif text-lg outline-none focus:border-[#5A5A40]"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-3 font-sans">
                  <div>
                    <label className="text-[#8A8471] font-medium mb-1 block">{t("vocabTranslitLabel")}</label>
                    <input 
                      type="text" 
                      value={newTranslit}
                      onChange={(e) => setNewTranslit(e.target.value)}
                      placeholder="E.g. Khuba" 
                      className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                    />
                  </div>
                  <div>
                    <label className="text-[#8A8471] font-medium mb-1 block">{t("vocabCatLabel")}</label>
                    <select 
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                    >
                      <option value="Sapaan">{t("vocabCatGreet")}</option>
                      <option value="Teologi & Perasaan">{t("vocabCatTheo")}</option>
                      <option value="Benda & Alam">{t("vocabCatObjects")}</option>
                      <option value="Keluarga">{t("vocabCatFamily")}</option>
                      <option value="Nama Tokoh">{t("vocabCatNames")}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[#8A8471] font-medium mb-1 block">{t("vocabMeaningLabel")}</label>
                  <input 
                    type="text" 
                    value={newMeaning}
                    onChange={(e) => setNewMeaning(e.target.value)}
                    placeholder="E.g. Kasih murni" 
                    className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40]"
                  />
                </div>

                <div>
                  <label className="text-[#8A8471] font-medium mb-1 block">{t("vocabNotesLabel")}</label>
                  <textarea 
                    value={newNotes}
                    onChange={(e) => setNewNotes(e.target.value)}
                    placeholder={t("vocabNotesPh")} 
                    className="w-full bg-[#F1EEE6]/40 border border-[#D1CCBD] rounded-xl p-2.5 outline-none focus:border-[#5A5A40] h-16 resize-none"
                  />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#5A5A40] hover:bg-[#4C4C36] text-white font-medium text-xs py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Save className="w-4 h-4" />
                {t("vocabSave")}
              </button>
            </form>
          )}
        </div>

        {/* Kolom Kanan: Daftar istilah interaktif (Makan 7 kolom) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-[#3D3A33] text-lg flex items-center gap-2 font-serif">
                <BookOpen className="w-5 h-5 text-[#5A5A40]" />
                {t("vocabListTitle")}
              </h3>
              <p className="text-[#8A8471] text-xs">{t("vocabListSub")}</p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-1.5 bg-[#EBE7DC] p-1.5 rounded-xl border border-[#D1CCBD] font-sans">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedCategory(c);
                  setCardIndex(0);
                }}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer ${
                  selectedCategory === c
                    ? "bg-white text-[#3D3A33] shadow-sm border border-[#D1CCBD]"
                    : "text-[#8A8471] hover:text-[#3D3A33] hover:bg-white/40"
                }`}
              >
                {catLabel(c)}
              </button>
            ))}
          </div>

          {/* List panel */}
          <div className="bg-white rounded-2xl border border-[#E8E4D9] overflow-hidden divide-y divide-[#E8E4D9] shadow-sm max-h-[580px] overflow-y-auto">
            {filteredWords.length > 0 ? (
              filteredWords.map((word, i) => (
                <div key={i} className="p-4 hover:bg-[#F9F7F2]/60 transition-colors flex items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-sm text-[#3D3A33] font-serif">{word.translit}</h4>
                      <span className="text-[10px] bg-[#F1EEE6] text-[#5A5A40] border border-[#D1CCBD] px-2 py-0.5 rounded-full font-medium">
                        {catLabel(word.category)}
                      </span>
                    </div>
                    <p className="text-[#3D3A33] text-xs font-semibold font-serif">{wordMeaning(word)}</p>
                    {word.notes && <p className="text-[#8A8471] text-[11px] leading-relaxed font-serif">{wordNotes(word)}</p>}
                  </div>
                  
                  <div className="flex items-center gap-3 shrink-0">
                    {/* Visual Syriac String */}
                    <div className="text-2xl font-bold text-right text-[#5A5A40] px-3.5 py-1.5 bg-[#F1EEE6]/60 rounded-xl border border-[#D1CCBD] font-syriac" dir="rtl">
                      {word.syriac}
                    </div>

                    {/* Delete button */}
                    {isAdmin && (
                      <button
                        onClick={() => handleDeleteWord(words.indexOf(word))}
                        className="p-1.5 hover:bg-red-50 text-slate-400 hover:text-red-500 rounded-lg transition-colors cursor-pointer"
                        title={t("vocabDelete")}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="p-12 text-center text-slate-400 text-sm">
                <Languages className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                {t("vocabNoneFilter")}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
