import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles, MessageSquare, AlertCircle } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { ChatMessage } from "../types";

export function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome",
      sender: "bot",
      text: "Shlomo! Halo! Saya adalah Tutor AI Arami, asisten pribadi Anda untuk belajar bahasa Aram Syriac. Anda bisa bertanya tentang kosa kata, tata bahasa Barat (Serto) atau Timur (Madnhaya), cara menerjemahkan dari Indonesia ke Aram, atau menganalisis teks kuno. Silakan ajukan pertanyaan Anda!",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const presetPrompts = [
    "Terjemahkan 'Damai Sejahtera dan Kasih' ke bahasa Aram",
    "Jelaskan huruf Alap, Beth, Gamal secara singkat",
    "Bagaimana menulis 'Rumahku adalah istanaku' dalam naskah Syriac?",
    "Jelaskan arti dari kata 'Alaha' (Tuhan)"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    setErrorStatus(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt: textToSend,
          history: messages.map(m => ({
            role: m.sender === "user" ? "user" : "model",
            text: m.text
          }))
        })
      });

      if (!response.ok) {
        let serverErrorMessage = "Gagal terhubung dengan server Tutor AI.";
        try {
          const errData = await response.json();
          if (errData && errData.reply) {
            serverErrorMessage = errData.reply;
          }
        } catch (e) {
          // ignore parsing error, fallback to original message
        }
        throw new Error(serverErrorMessage);
      }

      const data = await response.json();
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.reply || "Maaf, saya tidak menerima respons yang valid.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMsg]);
    } catch (err: any) {
      console.error(err);
      setErrorStatus(err.message || "Terjadi kesalahan koneksi.");
      const botErrorMsg: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        sender: "bot",
        text: err.message ? `Maaf, koneksi atau proses AI terhambat: ${err.message}` : "Maaf, koneksi ke server AI terganggu. Silakan cek file .env Anda atau coba sesaat lagi.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botErrorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#E8E4D9] flex flex-col h-[600px] overflow-hidden" id="ai-tutor-container">
      {/* Header */}
      <div className="bg-[#5A5A40] text-white p-4 flex items-center justify-between font-sans">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[#EBE7DC] flex items-center justify-center border border-[#D1CCBD]">
            <Bot className="w-5 h-5 text-[#5A5A40]" />
          </div>
          <div>
            <h3 className="font-semibold text-sm md:text-base flex items-center gap-2 font-serif text-[#F9F7F2]">
              Asisten AI Syriac Tutor
              <span className="text-[10px] bg-[#4D4D36]/20 text-[#EBE7DC] px-2 py-0.5 rounded border border-[#EBE7DC]/30 font-mono font-bold">
                GEMINI 3.5
              </span>
            </h3>
            <p className="text-slate-100/90 text-xs font-serif">Aktif merespons kueri tata bahasa Aram secara langsung</p>
          </div>
        </div>
        <Sparkles className="w-5 h-5 text-[#EBE7DC] animate-pulse" />
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F1EEE6]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 max-w-[85%] ${
              msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                msg.sender === "user" ? "bg-[#5A5A40] text-white" : "bg-[#E8E4D9] text-[#5A5A40]"
              }`}
            >
              {msg.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div>
              <div
                className={`rounded-2xl px-4 py-2.5 text-sm ${
                  msg.sender === "user"
                    ? "bg-[#5A5A40] text-white rounded-tr-none font-sans"
                    : "bg-white text-[#3D3A33] border border-[#E8E4D9] shadow-sm rounded-tl-none font-serif md:max-w-2xl"
                }`}
              >
                {msg.sender === "user" ? (
                  <p className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </p>
                ) : (
                  <div className="markdown-body space-y-2">
                    <ReactMarkdown
                      components={{
                        h1: ({ children }) => <h1 className="text-base font-bold font-serif text-[#3D3A33] mt-3 mb-1.5 border-b border-[#F1EEE6] pb-1">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-sm font-bold font-serif text-[#3D3A33] mt-3 mb-1.5">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xs font-extrabold font-serif text-[#5A5A40] mt-2.5 mb-1">{children}</h3>,
                        h4: ({ children }) => <h4 className="text-[11px] font-extrabold font-serif text-[#5A5A40]/80 mt-2 mb-1">{children}</h4>,
                        p: ({ children }) => <p className="mb-2 leading-relaxed text-xs sm:text-sm text-[#3D3A33]">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc pl-4 mb-2.5 space-y-1 text-xs sm:text-sm text-[#3D3A33]">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal pl-4 mb-2.5 space-y-1 text-xs sm:text-sm text-[#3D3A33]">{children}</ol>,
                        li: ({ children }) => <li className="pl-0.5 leading-relaxed">{children}</li>,
                        hr: () => <hr className="my-3 border-[#E8E4D9]" />,
                        strong: ({ children }) => <strong className="font-extrabold text-[#5A5A40]">{children}</strong>,
                        em: ({ children }) => <em className="italic text-[#817A63] bg-[#FCFBF8] px-1 rounded border border-[#E8E4D9]/40">{children}</em>,
                        code: ({ children }) => <code className="bg-[#F1EEE6] px-1.5 py-0.5 rounded font-mono text-xs text-[#5A5A40]">{children}</code>,
                      }}
                    >
                      {msg.text}
                    </ReactMarkdown>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-[#817A63] mt-1 block px-2 font-mono">
                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-3 max-w-[85%] mr-auto">
            <div className="w-8 h-8 rounded-full bg-[#E8E4D9] flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#5A5A40]" />
            </div>
            <div className="bg-white border border-[#E8E4D9] rounded-2xl rounded-tl-none px-4 py-2.5 shadow-sm">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5A5A40] rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-[#5A5A40] rounded-full animate-bounce delay-200"></span>
                <span className="w-2 h-2 bg-[#5A5A40] rounded-full animate-bounce delay-300"></span>
              </div>
            </div>
          </div>
        )}
        {errorStatus && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs flex items-center gap-2 font-serif">
            <AlertCircle className="w-4 h-4" />
            <span>Error: {errorStatus}</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Preset suggestions */}
      <div className="p-3 bg-white border-t border-[#F1EEE6] overflow-x-auto whitespace-nowrap flex gap-2">
        {presetPrompts.map((p, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(p)}
            type="button"
            className="text-xs bg-[#F1EEE6] hover:bg-[#E8E4D9] text-[#5A5A40] hover:text-[#3D3A33] border border-[#D1CCBD] px-3 py-1.5 rounded-full cursor-pointer transition-colors shrink-0 font-serif"
          >
            {p}
          </button>
        ))}
      </div>

      {/* Input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="p-3 border-t border-[#F1EEE6] flex gap-2 items-center bg-white font-sans"
      >
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Tanyakan tata bahasa Aram..."
          disabled={isLoading}
          className="flex-1 bg-white border border-[#D1CCBD] outline-none rounded-xl px-4 py-2 text-sm focus:border-[#5A5A40] focus:ring-2 focus:ring-[#F1EEE6] transition-all"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || isLoading}
          className="p-2 bg-[#5A5A40] disabled:bg-[#D1CCBD] text-white rounded-xl hover:bg-[#4C4C36] transition-colors cursor-pointer"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}
