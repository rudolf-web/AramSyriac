import React, { useEffect, useRef, useState } from "react";
import { useLang } from "../lang";
import { Mic, Square, Play, RotateCcw, AlertTriangle } from "lucide-react";

export interface PronunciationItem {
  syriac: string; // Syriac text to say
  translit: string; // Latin transliteration (pronunciation guide)
  translation: string; // Meaning in the active language (localized by App)
}

interface PronunciationRecorderProps {
  items: PronunciationItem[];
  moduleTitle: string;
}

// Record-your-own-voice practice for Syriac.
// Browsers have no Syriac speech recognition or text-to-speech, so there is
// no automatic scoring here: the student records, plays it back, and compares
// with the transliteration guide. Recordings live only in this page session.
export default function PronunciationRecorder({ items, moduleTitle }: PronunciationRecorderProps) {
  const { t } = useLang();
  const [recordingIdx, setRecordingIdx] = useState<number | null>(null);
  const [recordings, setRecordings] = useState<Record<number, string>>({});
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const supported =
    typeof window !== "undefined" &&
    typeof window.MediaRecorder !== "undefined" &&
    !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

  useEffect(() => {
    return () => {
      // Clean up blob URLs and mic stream on unmount.
      Object.values(recordings).forEach((url) => URL.revokeObjectURL(url));
      if (streamRef.current) streamRef.current.getTracks().forEach((t) => t.stop());
      if (audioRef.current) audioRef.current.pause();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stopStream = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
  };

  const startRecording = async (idx: number) => {
    setError(null);
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayingIdx(null);
    }
    if (!supported) {
      setError(t("pronUnsupported"));
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (e: BlobEvent) => {
        if (e.data && e.data.size > 0) chunksRef.current.push(e.data);
      };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordings((prev) => {
          if (prev[idx]) URL.revokeObjectURL(prev[idx]);
          return { ...prev, [idx]: url };
        });
        stopStream();
        setRecordingIdx(null);
      };
      recorder.start();
      setRecordingIdx(idx);
    } catch (e: any) {
      stopStream();
      setRecordingIdx(null);
      if (e && (e.name === "NotAllowedError" || e.name === "SecurityError")) {
        setError(t("pronMicDenied"));
      } else if (e && e.name === "NotFoundError") {
        setError(t("pronNoMic"));
      } else {
        setError(t("pronStartFail"));
      }
    }
  };

  const stopRecording = () => {
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  };

  const playRecording = (idx: number) => {
    const url = recordings[idx];
    if (!url) return;
    if (playingIdx === idx && audioRef.current) {
      audioRef.current.pause();
      setPlayingIdx(null);
      return;
    }
    if (audioRef.current) audioRef.current.pause();
    const audio = new Audio(url);
    audioRef.current = audio;
    setPlayingIdx(idx);
    audio.onended = () => setPlayingIdx(null);
    audio.play().catch(() => {
      setPlayingIdx(null);
      setError(t("pronPlayFail"));
    });
  };

  if (items.length === 0) return null;

  return (
    <div className="pt-4 border-t border-[#F1EEE6] space-y-3 font-sans">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 bg-[#5A5A40] rounded-xl flex items-center justify-center text-white">
          <Mic className="w-4 h-4" />
        </span>
        <div>
          <h4 className="font-extrabold text-[#5A5A40] font-serif text-sm leading-tight">
            {t("pronTitle")}
          </h4>
          <p className="text-[11px] text-[#8A8471]">
            {t("module")} {moduleTitle} {t("pronSubB")}
          </p>
        </div>
      </div>

      {!supported && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 flex gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            {t("pronUnsupportedBox")} <strong>{t("pronBrowsers")}</strong> {t("pronUnsupportedBoxB")}
          </span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-[11px] text-rose-700">
          {error}
        </div>
      )}

      <div className="space-y-2.5">
        {items.map((item, i) => {
          const hasRecording = !!recordings[i];
          const isRecording = recordingIdx === i;
          const isPlaying = playingIdx === i;
          return (
            <div key={i} className="p-3 bg-white border border-[#E8E4D9] rounded-xl space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-[#3D3A33] text-lg font-serif" dir="rtl">
                    {item.syriac}
                  </p>
                  <p className="text-xs text-slate-600">{item.translit}</p>
                  <p className="text-[11px] text-slate-500">{t("means")} {item.translation}</p>
                </div>
                <span className="text-[10px] font-bold text-[#8A8471] bg-[#F1EEE6] px-2 py-1 rounded-full whitespace-nowrap">
                  {i + 1} / {items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {isRecording ? (
                  <button
                    onClick={stopRecording}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-500 text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors animate-pulse"
                  >
                    <Square className="w-3.5 h-3.5" />
                    {t("pronStopRec")}
                  </button>
                ) : (
                  <button
                    onClick={() => startRecording(i)}
                    disabled={!supported}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#5A5A40] hover:bg-[#4C4C36] text-white text-[11px] font-bold rounded-lg cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mic className="w-3.5 h-3.5" />
                    {hasRecording ? t("pronRerecord") : t("pronRecord")}
                  </button>
                )}
                {hasRecording && !isRecording && (
                  <button
                    onClick={() => playRecording(i)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EBE7DC] hover:bg-[#D1CCBD] text-[#3D3A33] text-[11px] font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    {isPlaying ? <Square className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    {isPlaying ? t("pronStop") : t("pronPlay")}
                  </button>
                )}
                {hasRecording && !isRecording && (
                  <span className="flex items-center gap-1 px-2 py-1.5 text-[11px] font-bold text-emerald-700">
                    <RotateCcw className="w-3.5 h-3.5" />
                    {t("pronSaved")}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-[#8A8471] leading-relaxed">
        {t("pronNote")}
      </p>
    </div>
  );
}
