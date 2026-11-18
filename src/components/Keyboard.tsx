import React, { useState } from "react";
import { useLang } from "../lang";
import { Info, Copy, ClipboardCheck, Eraser, MoveLeft } from "lucide-react";

interface LetterData {
  char: string;
  name: string;
  translit: string;
  pronunciation: string;
  pronunciationEn: string;
  gematria: number;
  notes: string;
  notesEn: string;
}

export function Keyboard() {
  const { lang, t } = useLang();
  const letterPron = (l: LetterData) => (lang === "en" ? l.pronunciationEn : l.pronunciation);
  const letterNotes = (l: LetterData) => (lang === "en" ? l.notesEn : l.notes);
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>({
    char: "ܐ",
    name: "Alap",
    translit: "A / '",
    pronunciation: "Suara vokal hening / glottal stop",
    pronunciationEn: "Silent vowel sound / glottal stop",
    gematria: 1,
    notes: "Huruf pertama. Hanya bersambung dengan huruf sebelumnya di sebelah kanan.",
    notesEn: "The first letter. It only connects to the preceding letter on the right."
  });

  const syriacLetters: LetterData[] = [
    { char: "ܐ", name: "Alap", translit: "A / '", pronunciation: "A / glottal hancur", pronunciationEn: "A / broken glottal", gematria: 1, notes: "Konsonan pembuka. Hanya menyambung ke kanan.", notesEn: "Opening consonant. Only connects to the right." },
    { char: "ܒ", name: "Beth", translit: "B / V", pronunciation: "B (kasar) atau V/W (lembut)", pronunciationEn: "B (hard) or V/W (soft)", gematria: 2, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܓ", name: "Gamal", translit: "G / Gh", pronunciation: "G (keras) atau Gh (seperti ghain)", pronunciationEn: "G (hard) or Gh (like ghain)", gematria: 3, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܕ", name: "Dalath", translit: "D / Dh", pronunciation: "D atau Dh (seperti Th dlm 'the')", pronunciationEn: "D or Dh (like Th in 'the')", gematria: 4, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." },
    { char: "ܗ", name: "He", translit: "H", pronunciation: "H seperti desahan nafas", pronunciationEn: "H like a breathy sigh", gematria: 5, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." },
    { char: "ܘ", name: "Waw", translit: "W / U / O", pronunciation: "W (konsonan) atau U/O (vokal)", pronunciationEn: "W (consonant) or U/O (vowel)", gematria: 6, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." },
    { char: "ܙ", name: "Zain", translit: "Z", pronunciation: "Z biasa", pronunciationEn: "Plain Z", gematria: 7, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." },
    { char: "ܚ", name: "Heth", translit: "H / Kh", pronunciation: "H serak tebal (seperti Ha' Arab)", pronunciationEn: "Thick rasping H (like Arabic Ha')", gematria: 8, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܛ", name: "Teth", translit: "T", pronunciation: "T tebal (seperti Tha' Arab)", pronunciationEn: "Thick T (like Arabic Tha')", gematria: 9, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܝ", name: "Yod", translit: "Y / I", pronunciation: "Y konsonan atau I vokal", pronunciationEn: "Y as a consonant or I as a vowel", gematria: 10, notes: "Konsonan semi-vokal berharga tinggi.", notesEn: "A high-value semi-vowel consonant." },
    { char: "ܟ", name: "Kaph", translit: "K / Kh", pronunciation: "K biasa atau Kh (seperti Khorasan)", pronunciationEn: "Plain K or Kh (like Khorasan)", gematria: 20, notes: "Memiliki bentuk khusus di akhir kata.", notesEn: "Has a special form at the end of a word." },
    { char: "ܠ", name: "Lamadh", translit: "L", pronunciation: "L biasa", pronunciationEn: "Plain L", gematria: 30, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܡ", name: "Min", translit: "M", pronunciation: "M biasa", pronunciationEn: "Plain M", gematria: 40, notes: "Memiliki bentuk khusus di akhir kata.", notesEn: "Has a special form at the end of a word." },
    { char: "ܢ", name: "Nun", translit: "N", pronunciation: "N biasa", pronunciationEn: "Plain N", gematria: 50, notes: "Huruf mati sengau. Sering tidak dibaca di sela kata.", notesEn: "A nasal silent letter. Often not pronounced in the middle of a word." },
    { char: "ܣ", name: "Semkath", translit: "S", pronunciation: "S desis tajam", pronunciationEn: "Sharp hissing S", gematria: 60, notes: "Selalu tersambung ke kiri dan kanan.", notesEn: "Always connects to the left and right." },
    { char: "ܥ", name: "E", translit: "` / Gh", pronunciation: "Suara tenggorokan serak ('Ain)", pronunciationEn: "Raspy throat sound ('Ain)", gematria: 70, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܦ", name: "Pe", translit: "P / Ph", pronunciation: "P keras atau F (lembut)", pronunciationEn: "Hard P or F (soft)", gematria: 80, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܨ", name: "Sade", translit: "S / Ts", pronunciation: "S tebal berbunyi 'ts'", pronunciationEn: "Thick S sounding like 'ts'", gematria: 90, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." },
    { char: "ܩ", name: "Qoph", translit: "Q", pronunciation: "Q kerongkongan (K tebal)", pronunciationEn: "Throaty Q (thick K)", gematria: 100, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܪ", name: "Resh", translit: "R", pronunciation: "R murni", pronunciationEn: "Pure R", gematria: 200, notes: "Hanya menyambung ke kanan. Memiliki titik di atas huruf.", notesEn: "Only connects to the right. Has a dot above the letter." },
    { char: "ܫ", name: "Shin", translit: "Sh / S", pronunciation: "Sh tebal (seperti Sy dalam Syukur)", pronunciationEn: "Thick Sh (like Sy in Syukur)", gematria: 300, notes: "Sepenuhnya tersambung.", notesEn: "Fully connected." },
    { char: "ܬ", name: "Taw", translit: "T / Th", pronunciation: "T keras atau Th (seperti 'thin' Inggris)", pronunciationEn: "Hard T or Th (like 'thin' in English)", gematria: 400, notes: "Hanya menyambung ke kanan.", notesEn: "Only connects to the right." }
  ];

  const sertoVowels = [
    { char: "ܰ", name: "Pthaha", vocal: "a" },
    { char: "ܳ", name: "Zqapha", vocal: "o" },
    { char: "ܶ", name: "Rbasa", vocal: "e" },
    { char: "ܺ", name: "Hbasa", vocal: "i" },
    { char: "ܽ", name: "Esasa", vocal: "u" }
  ];

  const handleKeyClick = (char: string) => {
    setTypedText(prev => prev + char);
    setCopied(false);
  };

  const handleBackspace = () => {
    setTypedText(prev => prev.slice(0, -1));
    setCopied(false);
  };

  const handleClear = () => {
    setTypedText("");
    setCopied(false);
  };

  const handleCopy = () => {
    if (!typedText) return;
    navigator.clipboard.writeText(typedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[#F1EEE6] rounded-2xl p-6 border border-[#D1CCBD] shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-6" id="syriac-keyboard-section">
      {/* Kolom Kiri: Papan ketik dan input */}
      <div className="lg:col-span-2 space-y-6">
        <div>
          <h3 className="font-semibold text-[#3D3A33] text-lg font-serif">{t("kbTitle")}</h3>
          <p className="text-[#8A8471] text-xs mt-1 font-sans">{t("kbSub")}</p>
        </div>

        {/* Input Screen */}
        <div className="bg-white border-2 border-[#D1CCBD] rounded-xl p-4 shadow-inner relative">
          <textarea
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            dir="rtl"
            className="w-full h-32 bg-transparent text-[#3D3A33] text-3xl text-right outline-none resize-none font-syriac"
            placeholder={t("kbTapHint")}
          />
          <div className="flex justify-end gap-2 border-t border-[#F1EEE6] pt-3 mt-1 font-sans">
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs transition-colors cursor-pointer"
              title={t("kbClearAll")}
            >
              <Eraser className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              onClick={handleBackspace}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs transition-colors cursor-pointer"
              title={t("kbDeleteOne")}
            >
              <MoveLeft className="w-3.5 h-3.5" />
              {t("kbDelete")}
            </button>
            <button
              onClick={handleCopy}
              disabled={!typedText}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-colors ${
                copied
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white animate-pulse"
                  : "bg-[#5A5A40] disabled:bg-[#D1CCBD]/70 hover:bg-[#4C4C36] text-white"
              }`}
            >
              {copied ? (
                <>
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  {t("kbCopied")}
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  {t("kbCopy")}
                </>
              )}
            </button>
          </div>
        </div>

        {/* Huruf Konsonan */}
        <div className="space-y-3 font-sans">
          <h4 className="text-xs font-semibold text-[#8A8471] uppercase tracking-wider">{t("kbConsonants")}</h4>
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-2" dir="rtl">
            {syriacLetters.map((letter) => (
              <button
                key={letter.char}
                onClick={() => handleKeyClick(letter.char)}
                onMouseEnter={() => setSelectedLetter(letter)}
                className="h-12 border border-[#D1CCBD] hover:border-[#5A5A40] bg-white active:bg-[#F1EEE6] rounded-lg text-2xl font-bold flex flex-col items-center justify-center text-[#3D3A33] transition-all cursor-pointer shadow-sm hover:translate-y-[-2px] font-syriac"
                type="button"
              >
                <span>{letter.char}</span>
                <span className="text-[10px] text-[#8A8471] font-normal font-sans">{letter.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tanda Harakat Vokal */}
        <div className="space-y-3 font-sans">
          <h4 className="text-xs font-semibold text-[#8A8471] uppercase tracking-wider">{t("kbVowels")}</h4>
          <div className="flex gap-2" dir="rtl">
            {sertoVowels.map((vowel) => (
              <button
                key={vowel.char}
                onClick={() => handleKeyClick(vowel.char)}
                className="h-12 w-20 border border-[#D1CCBD] hover:border-[#4C4C36] bg-[#F9F7F2] hover:bg-[#F1EEE6] active:bg-[#E8E4D9] rounded-lg text-xl flex flex-col items-center justify-center text-[#3D3A33] transition-all cursor-pointer shadow-sm hover:translate-y-[-2px]"
                type="button"
              >
                <span className="text-2xl mt-1 font-syriac">◌{vowel.char}</span>
                <span className="text-[9px] text-[#5A5A40] font-semibold">{vowel.name} ({vowel.vocal})</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Kolom Kanan: Detil Karakter */}
      <div className="bg-white p-5 rounded-2xl border border-[#E8E4D9] shadow-sm flex flex-col font-sans">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#F1EEE6]">
          <Info className="w-4 h-4 text-[#5A5A40]" />
          <h4 className="font-semibold text-[#3D3A33] text-sm font-serif">{t("kbCharInfo")}</h4>
        </div>

        {selectedLetter ? (
          <div className="space-y-4 flex-1 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-6xl font-bold text-[#5A5A40] bg-[#F1EEE6] w-20 h-20 rounded-2xl flex items-center justify-center border border-[#D1CCBD] font-syriac">
                  {selectedLetter.char}
                </div>
                <div className="text-right">
                  <h5 className="text-xl font-bold text-[#3D3A33] font-serif">{selectedLetter.name}</h5>
                  <p className="text-xs text-[#8A8471] font-mono">{t("kbTranslit")} {selectedLetter.translit}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm">
                <div>
                  <span className="text-[#8A8471] text-xs block">{t("kbPron")}</span>
                  <span className="text-[#3D3A33] font-semibold font-serif">{letterPron(selectedLetter)}</span>
                </div>
                <div>
                  <span className="text-[#8A8471] text-xs block">{t("kbGematria")}</span>
                  <span className="inline-block bg-[#F1EEE6] text-[#3D3A33] text-xs font-mono font-bold px-2.5 py-0.5 rounded border border-[#D1CCBD]">
                    {selectedLetter.gematria}
                  </span>
                </div>
                <div>
                  <span className="text-[#8A8471] text-xs block">{t("kbNotes")}</span>
                  <p className="text-[#3D3A33]/90 text-xs leading-relaxed mt-0.5 font-serif">{letterNotes(selectedLetter)}</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl text-[11px] text-[#3D3A33] leading-relaxed mt-4 font-serif">
              <strong>Gematria:</strong> {t("kbGematriaNote")} <strong>Alaha</strong> {t("kbGematriaNoteB")}
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#F1EEE6] rounded-xl">
            <p className="text-[#8A8471] text-xs">{t("kbHoverHint")}</p>
          </div>
        )}
      </div>
    </div>
  );
}
