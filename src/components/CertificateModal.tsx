import React, { useState } from "react";
import { useLang } from "../lang";
import { X, Printer, Award, Check } from "lucide-react";
import { Module } from "../types";

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  module?: Module;
  level?: "A1" | "A2" | "B1";
  userFullName: string;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  module,
  level,
  userFullName,
}) => {
  const { lang, t } = useLang();
  const [customName, setCustomName] = useState(userFullName || "");
  const [isSavedName, setIsSavedName] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  // Determine certificate metadata dynamically
  let cefrLevel = "CEFR Level A1 (Beginner)";
  let isLevelGraduation = false;
  let titleText = t("certModTitleText");
  let descriptionText = t("certModDesc");
  let credentialName = "";
  let credentialSubtitleSyriac = "";
  let certIdSuffix = "";

  if (level) {
    isLevelGraduation = true;
    certIdSuffix = `LV-${level}`;
    if (level === "A1") {
      cefrLevel = "CEFR Level A1 (Beginner)";
      titleText = t("certTitleA1");
      descriptionText = t("certDescA1");
      credentialName = t("certProgA1");
      credentialSubtitleSyriac = "ܡܫܰܠܡܳܢܽܘܬ݂ܳܐ ܕ݁ܰܕ݂ܰܪܓ݁ܳܐ ܩܰܕ݂ܡܳܝܳܐ ܐܰܠܰܦ݂ ܚܰܕ݂";
    } else if (level === "A2") {
      cefrLevel = "CEFR Level A2 (Elementary)";
      titleText = t("certTitleA2");
      descriptionText = t("certDescA2");
      credentialName = t("certProgA2");
      credentialSubtitleSyriac = "ܡܫܰܠܡܳܢܽܘܬ݂ܳܐ ܕ݁ܰܕ݂ܰܪܓ݁ܳܐ ܕ݁ܰܬ݂ܪܶܝܢ ܐܰܠܰܦ݂ ܬ݁ܪܶܝܢ";
    } else {
      cefrLevel = "CEFR Level B1 (Intermediate)";
      titleText = t("certTitleB1");
      descriptionText = t("certDescB1");
      credentialName = t("certProgB1");
      credentialSubtitleSyriac = "ܡܫܰܠܡܳܢܽܘܬ݂ܳܐ ܕ݁ܰܕ݂ܰܪܓ݁ܳܐ ܕ݁ܰܬ݂ܠܳܬ݂ܳܐ ܒ݁ܶܝܬ݂ ܚܰܕ݂";
    }
  } else if (module) {
    certIdSuffix = `MOD-${module.id}`;
    titleText = t("certModTitleText");
    descriptionText = t("certModDesc");
    credentialName = `${t("certModName")} ${module.id}: ${(lang === "en" && module.titleEn ? module.titleEn : module.title)}`;
    credentialSubtitleSyriac = module.titleSyriac;

    if (module.id >= 10 && module.id <= 16) {
      cefrLevel = "CEFR Level A2 (Elementary)";
    } else if (module.id >= 18) {
      cefrLevel = "CEFR Level A2-B1 (Pre-Intermediate)";
    } else {
      cefrLevel = "CEFR Level A1 (Beginner)";
    }
  }

  // Certificate date in the active language
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(lang === "en" ? "en-US" : "id-ID", options);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto font-sans print:p-0 print:bg-white print:absolute print:inset-0">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative shadow-2xl flex flex-col gap-6 print:shadow-none print:p-0 print:rounded-none no-print">
        
        {/* Header (No-print) */}
        <div className="flex items-center justify-between border-b border-[#F1EEE6] pb-4 no-print">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg font-bold text-[#3D3A33]">
              {isLevelGraduation ? `${t("certLevelTitle")} ${level}` : t("certModTitle")}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 px-1.5 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5 text-[#8A8471]" />
          </button>
        </div>

        {/* Name Input Box (No-print) */}
        <div className="bg-[#FAF8F5] border border-[#D1CCBD]/40 p-4 rounded-2xl space-y-3 no-print">
          <label className="block text-xs font-bold text-[#5A5A40] uppercase tracking-wider">
            {t("certNameLabel")}
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={customName}
              onChange={(e) => {
                setCustomName(e.target.value);
                setIsSavedName(false);
              }}
              placeholder={t("certNamePh")}
              className="flex-1 bg-white border border-[#D1CCBD] rounded-xl px-3.5 py-2 text-sm outline-none focus:border-[#5A5A40] text-[#3D3A33]"
            />
            <button
              onClick={() => setIsSavedName(true)}
              className="px-4 py-2 bg-[#5A5A40] hover:bg-[#4C4C36] text-white text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer"
            >
              {isSavedName ? <Check className="w-3.5 h-3.5" /> : null}
              {isSavedName ? t("certSaved") : t("certApply")}
            </button>
          </div>
          <p className="text-[10px] text-[#817A63]">
            {t("certNameHint")}
          </p>
        </div>

        {/* Certificate Card Content - Styled for high fidelity display and printing */}
        <div 
          id="arami-certificate-paper"
          className="border-8 border-double border-[#C5A059] bg-[#FCFBF8] p-8 sm:p-12 text-center relative overflow-hidden select-none shadow-inner print:border-8 print:shadow-none print:m-0 print:p-16 print:w-[297mm] print:h-[210mm]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(245,239,223,0.1) 0%, rgba(250,246,236,0.3) 100%)",
            boxShadow: "inset 0 0 40px rgba(184, 150, 87, 0.08)"
          }}
        >
          {/* Classical Corner Ornaments */}
          <div className="absolute top-3 left-3 w-10 h-10 border-t-2 border-l-2 border-[#C5A059]/60"></div>
          <div className="absolute top-3 right-3 w-10 h-10 border-t-2 border-r-2 border-[#C5A059]/60"></div>
          <div className="absolute bottom-3 left-3 w-10 h-10 border-b-2 border-l-2 border-[#C5A059]/60"></div>
          <div className="absolute bottom-3 right-3 w-10 h-10 border-b-2 border-r-2 border-[#C5A059]/60"></div>

          {/* Syriac Translucent Watermark Star */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
            <span className="font-serif text-[420px] leading-none text-[#C5A059] font-bold">ܐ</span>
          </div>

          <div className="space-y-4 sm:space-y-6 relative z-10">
            {/* Header Logos */}
            <div className="flex flex-col items-center justify-center space-y-1">
              <span className="text-xs tracking-[0.25em] font-bold text-[#8A8471] uppercase">Arami Academy</span>
              <div className="text-xl sm:text-2xl font-serif font-extrabold text-[#5A5A40] tracking-wide">
                ܐܳܟܰܕܶܝܡܺܝܰܐ ܐܰܪܳܡܳܝܬܳܐ
              </div>
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent"></div>
            </div>

            {/* Achievement Badge */}
            <div className="text-[#C5A059] uppercase tracking-[0.3em] text-[11px] font-extrabold font-serif">
              {t("certHonor")}
            </div>

            {/* Main Title Statement */}
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-serif tracking-tight text-[#3D3A33] font-bold uppercase">
                {titleText}
              </h1>
              <p className="text-[#817A63] text-xs italic font-serif">
                {t("certStates")}
              </p>
            </div>

            {/* Recipient Name */}
            <div className="py-2 inline-block border-b-2 border-dashed border-[#C5A059]/40 min-w-[280px]">
              <span className="text-2xl sm:text-3xl font-serif font-black text-[#5A5A40] uppercase tracking-wide leading-none">
                {customName || userFullName || t("certStudentFallback")}
              </span>
            </div>

            {/* Competency Statement */}
            <div className="space-y-2 max-w-2xl mx-auto px-4">
              <p className="text-xs sm:text-sm text-[#3D3A33] leading-relaxed font-serif">
                {descriptionText}
              </p>
              
              <div className="bg-[#F6F3EB]/80 border border-[#D1CCBD]/40 p-3 sm:p-4 rounded-2xl shadow-sm inline-block w-full">
                <span className="block text-[9px] uppercase text-[#817A63] tracking-widest font-bold font-sans">
                  {isLevelGraduation ? t("certLevelLabel") : t("certModuleLabel")}
                </span>
                <strong className="block text-base sm:text-lg font-serif font-extrabold text-[#5A5A40] mt-1">
                  {credentialName}
                </strong>
                <span className="block font-serif text-lg font-bold text-[#8A8471] mt-0.5" dir="rtl">
                  {credentialSubtitleSyriac}
                </span>
                <div className="mt-2 text-[10px] text-white bg-[#5A5A40] rounded-full inline-block px-3 py-0.5 font-bold uppercase font-sans tracking-widest">
                  {cefrLevel}
                </div>
              </div>
            </div>

            {/* Date and Signature Block */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto pt-4 sm:pt-6 border-t border-[#F1EEE6] text-[#3D3A33]">
              
              {/* Date Column */}
              <div className="text-left space-y-1 self-end font-serif pl-4 sm:pl-8">
                <span className="text-[10px] text-[#817A63] block uppercase tracking-wider font-sans font-bold">{t("certIssued")}</span>
                <span className="text-xs sm:text-sm font-semibold">{formattedDate}</span>
                <span className="text-[10px] text-[#A69F8B] block font-sans">
                  ID: AM-{certIdSuffix}-{Math.abs(userFullName.hashCode?.() || 11090)}
                </span>
                <span className="text-[8px] text-[#8A8471] block font-sans max-w-[220px] truncate mt-1 hover:text-amber-700 transition-colors" title="https://drive.google.com/file/d/1R1PgbhcyEJCrMTh6SX3kWfyoFeQHu0L0/view?usp=sharing">
                  <a href="https://drive.google.com/file/d/1R1PgbhcyEJCrMTh6SX3kWfyoFeQHu0L0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    https://drive.google.com/file/d/1R1PgbhcyEJCrMTh6SX3kWfyoFeQHu0L0/view?usp=sharing
                  </a>
                </span>
              </div>

              {/* Signature Column */}
              <div className="text-right space-y-1 self-end font-serif pr-4 sm:pr-8">
                <span className="text-[10px] text-[#817A63] block uppercase tracking-wider font-sans font-bold">{t("certTeacher")}</span>
                
                {/* Visual signature with real image */}
                <div className="h-16 flex items-center justify-end relative">
                  <img 
                    src="https://lh3.googleusercontent.com/d/1R1PgbhcyEJCrMTh6SX3kWfyoFeQHu0L0" 
                    referrerPolicy="no-referrer"
                    alt={t("certSigAlt")} 
                    className="h-16 w-auto object-contain z-10 mr-4"
                  />
                  {/* Digital seal */}
                  <div className="absolute right-0 top-0 w-11 h-11 border-2 border-dashed border-[#C5A059] rounded-full flex items-center justify-center opacity-30 select-none rotate-12 scale-110">
                    <span className="text-[7px] text-[#C5A059] font-sans font-bold uppercase tracking-tighter text-center block">ARAMI<br/>SEAL</span>
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-extrabold text-[#5A5A40] block border-t border-[#D1CCBD]/40 pt-1">
                  Rudolf A. Luhukay, S.T.
                </span>
                <span className="text-[10px] text-[#817A63] block">{t("certCouncil")}</span>
              </div>

            </div>

          </div>
        </div>

        {/* Footer actions (No-print) */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-[#F1EEE6] pt-4 no-print mt-2">
          <p className="text-[11px] text-[#817A63] leading-relaxed text-center sm:text-left">
            💡 <strong>{t("certPrintTipA")}</strong>{t("certPrintTipB")}<strong>{t("certPrintTipC")}</strong>{t("certPrintTipD")}
          </p>
          <div className="flex gap-2 w-full sm:w-auto shrink-0 justify-end">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial border border-[#D1CCBD] hover:bg-slate-50 text-[#868170] px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer text-center select-none"
            >
              {t("certBack")}
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 sm:flex-initial bg-[#5A5A40] hover:bg-[#4C4C36] text-white px-5 py-2 rounded-xl text-xs font-bold shadow-md inline-flex items-center justify-center gap-1.5 cursor-pointer text-center select-none"
            >
              <Printer className="w-3.5 h-3.5" />
              {t("certPrint")}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

// Add helper hashCode generator if not exists safely on local execution
declare global {
  interface String {
    hashCode(): number;
  }
}
if (!String.prototype.hashCode) {
  String.prototype.hashCode = function() {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
      chr   = this.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };
}
