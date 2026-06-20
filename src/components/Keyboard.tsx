import React, { useState } from "react";
import { Info, Copy, ClipboardCheck, Eraser, MoveLeft } from "lucide-react";

interface LetterData {
  char: string;
  name: string;
  translit: string;
  pronunciation: string;
  gematria: number;
  notes: string;
}

export function Keyboard() {
  const [typedText, setTypedText] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>({
    char: "ܐ",
    name: "Alap",
    translit: "A / '",
    pronunciation: "Suara vokal hening / glottal stop",
    gematria: 1,
    notes: "Huruf pertama. Hanya bersambung dengan huruf sebelumnya di sebelah kanan."
  });

  const syriacLetters: LetterData[] = [
    { char: "ܐ", name: "Alap", translit: "A / '", pronunciation: "A / glottal hancur", gematria: 1, notes: "Konsonan pembuka. Hanya menyambung ke kanan." },
    { char: "ܒ", name: "Beth", translit: "B / V", pronunciation: "B (kasar) atau V/W (lembut)", gematria: 2, notes: "Sepenuhnya tersambung." },
    { char: "ܓ", name: "Gamal", translit: "G / Gh", pronunciation: "G (keras) atau Gh (seperti ghain)", gematria: 3, notes: "Sepenuhnya tersambung." },
    { char: "ܕ", name: "Dalath", translit: "D / Dh", pronunciation: "D atau Dh (seperti Th dlm 'the')", gematria: 4, notes: "Hanya menyambung ke kanan." },
    { char: "ܗ", name: "He", translit: "H", pronunciation: "H seperti desahan nafas", gematria: 5, notes: "Hanya menyambung ke kanan." },
    { char: "ܘ", name: "Waw", translit: "W / U / O", pronunciation: "W (konsonan) atau U/O (vokal)", gematria: 6, notes: "Hanya menyambung ke kanan." },
    { char: "ܙ", name: "Zain", translit: "Z", pronunciation: "Z biasa", gematria: 7, notes: "Hanya menyambung ke kanan." },
    { char: "ܚ", name: "Heth", translit: "H / Kh", pronunciation: "H serak tebal (seperti Ha' Arab)", gematria: 8, notes: "Sepenuhnya tersambung." },
    { char: "ܛ", name: "Teth", translit: "T", pronunciation: "T tebal (seperti Tha' Arab)", gematria: 9, notes: "Sepenuhnya tersambung." },
    { char: "ܝ", name: "Yod", translit: "Y / I", pronunciation: "Y konsonan atau I vokal", gematria: 10, notes: "Konsonan semi-vokal berharga tinggi." },
    { char: "ܟ", name: "Kaph", translit: "K / Kh", pronunciation: "K biasa atau Kh (seperti Khorasan)", gematria: 20, notes: "Memiliki bentuk khusus di akhir kata." },
    { char: "ܠ", name: "Lamadh", translit: "L", pronunciation: "L biasa", gematria: 30, notes: "Sepenuhnya tersambung." },
    { char: "ܡ", name: "Min", translit: "M", pronunciation: "M biasa", gematria: 40, notes: "Memiliki bentuk khusus di akhir kata." },
    { char: "ܢ", name: "Nun", translit: "N", pronunciation: "N biasa", gematria: 50, notes: "Huruf mati sengau. Sering tidak dibaca di sela kata." },
    { char: "ܣ", name: "Semkath", translit: "S", pronunciation: "S desis tajam", gematria: 60, notes: "Selalu tersambung ke kiri dan kanan." },
    { char: "ܥ", name: "E", translit: "` / Gh", pronunciation: "Suara tenggorokan serak ('Ain)", gematria: 70, notes: "Sepenuhnya tersambung." },
    { char: "ܦ", name: "Pe", translit: "P / Ph", pronunciation: "P keras atau F (lembut)", gematria: 80, notes: "Sepenuhnya tersambung." },
    { char: "ܨ", name: "Sade", translit: "S / Ts", pronunciation: "S tebal berbunyi 'ts'", gematria: 90, notes: "Hanya menyambung ke kanan." },
    { char: "ܩ", name: "Qoph", translit: "Q", pronunciation: "Q kerongkongan (K tebal)", gematria: 100, notes: "Sepenuhnya tersambung." },
    { char: "ܪ", name: "Resh", translit: "R", pronunciation: "R murni", gematria: 200, notes: "Hanya menyambung ke kanan. Memiliki titik di atas huruf." },
    { char: "ܫ", name: "Shin", translit: "Sh / S", pronunciation: "Sh tebal (seperti Sy dalam Syukur)", gematria: 300, notes: "Sepenuhnya tersambung." },
    { char: "ܬ", name: "Taw", translit: "T / Th", pronunciation: "T keras atau Th (seperti 'thin' Inggris)", gematria: 400, notes: "Hanya menyambung ke kanan." }
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
          <h3 className="font-semibold text-[#3D3A33] text-lg font-serif">Papan Ketik Virtual Aram (Syriac)</h3>
          <p className="text-[#8A8471] text-xs mt-1 font-sans">Gunakan tombol-tombol di bawah untuk merangkai kalimat dalam abjad Aram. Ingat, tulisan akan tersambung otomatis dari kanan ke kiri!</p>
        </div>

        {/* Input Screen */}
        <div className="bg-white border-2 border-[#D1CCBD] rounded-xl p-4 shadow-inner relative">
          <textarea
            value={typedText}
            onChange={(e) => setTypedText(e.target.value)}
            dir="rtl"
            className="w-full h-32 bg-transparent text-[#3D3A33] text-3xl text-right outline-none resize-none font-syriac"
            placeholder="Ketuk abjad di bawah..."
          />
          <div className="flex justify-end gap-2 border-t border-[#F1EEE6] pt-3 mt-1 font-sans">
            <button
              onClick={handleClear}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs transition-colors cursor-pointer"
              title="Hapus Semua"
            >
              <Eraser className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              onClick={handleBackspace}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#D1CCBD] hover:bg-[#F1EEE6] text-[#8A8471] text-xs transition-colors cursor-pointer"
              title="Hapus Satu Huruf"
            >
              <MoveLeft className="w-3.5 h-3.5" />
              Hapus
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
                  Tersalin!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  Salin Teks
                </>
              )}
            </button>
          </div>
        </div>

        {/* Huruf Konsonan */}
        <div className="space-y-3 font-sans">
          <h4 className="text-xs font-semibold text-[#8A8471] uppercase tracking-wider">Konsonan Dasar (22 Abjad)</h4>
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
          <h4 className="text-xs font-semibold text-[#8A8471] uppercase tracking-wider">Harakat Vokal Serto Barat</h4>
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
          <h4 className="font-semibold text-[#3D3A33] text-sm font-serif">Informasi Karakter Syriac</h4>
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
                  <p className="text-xs text-[#8A8471] font-mono">Transliterasi: {selectedLetter.translit}</p>
                </div>
              </div>

              <div className="space-y-2.5 text-sm">
                <div>
                  <span className="text-[#8A8471] text-xs block">Vokal & Pelafalan:</span>
                  <span className="text-[#3D3A33] font-semibold font-serif">{selectedLetter.pronunciation}</span>
                </div>
                <div>
                  <span className="text-[#8A8471] text-xs block">Nilai Numerik (Gematria):</span>
                  <span className="inline-block bg-[#F1EEE6] text-[#3D3A33] text-xs font-mono font-bold px-2.5 py-0.5 rounded border border-[#D1CCBD]">
                    {selectedLetter.gematria}
                  </span>
                </div>
                <div>
                  <span className="text-[#8A8471] text-xs block">Catatan Karakter:</span>
                  <p className="text-[#3D3A33]/90 text-xs leading-relaxed mt-0.5 font-serif">{selectedLetter.notes}</p>
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F9F7F2] border border-[#D1CCBD] rounded-xl text-[11px] text-[#3D3A33] leading-relaxed mt-4 font-serif">
              <strong>Gematria:</strong> Angka suci dihitung berdasarkan gabungan abjad Semit. Misalnya, kata <strong>Alaha</strong> (Tuhan) memiliki total nilai abjad 1 (Alap) + 30 (Lamadh) + 5 (He) + 1 (Alap) = 37.
            </div>
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-6 bg-[#F1EEE6] rounded-xl">
            <p className="text-[#8A8471] text-xs">Arahkan kursor atau ketuk salah satu abjad di kiri untuk melihat informasi detail karakter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
