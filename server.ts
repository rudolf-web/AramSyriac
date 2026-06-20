import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini client securely server-side if API key exists
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
} else {
  console.warn("Peringatan: GEMINI_API_KEY tidak dikonfigurasi di environment. Fitur Asisten AI akan luring.");
}

// SECURE API Endpoints FIRST
app.post("/api/tutor", async (req, res) => {
  if (!ai) {
    return res.status(500).json({ 
      reply: "Fitur AI Tutor belum aktif. Silakan konfigurasikan GEMINI_API_KEY di pengaturan rahasia AI Studio Anda." 
    });
  }

  try {
    const { prompt, history } = req.body;
    
    // Construct system instructions
    const systemInstruction = 
      "Anda adalah 'Tutor AI Arami', asisten ahli bahasa Aram Syriac klasik serta dialek Barat (Serto) dan Timur (Madnhaya) untuk siswa berbahasa Indonesia.\n" +
      "Tugas Anda:\n" +
      "1. Membantu menerjemahkan kata/kalimat Indonesia ke Aram Syriac (lengkap dengan aksara asli Syriac, transliterasi bahasa Indonesia, dan cara baca fonetiknya).\n" +
      "2. Menjelaskan 20 bab teori tata bahasa secara sabar, berikan contoh relevan, dan dukung dengan penjelasan ilmiah.\n" +
      "3. Selalu bersikap ramah, sopan, dan berikan dorongan bagi siswa.\n" +
      "4. Gunakan huruf Syriac (RTL) yang benar ketika menulis istilah aslinya.\n" +
      "5. Jawab dalam bahasa Indonesia yang ringkas, terstruktur, dan mudah dipahami oleh pemula.";

    // Format previous messages for our chat API format
    // Since history format might be: [{ role: "user", text: "hi" }, { role: "model", text: "hello" }]
    const formattedContents: any[] = [];
    
    if (history && Array.isArray(history)) {
      history.forEach((msg: any) => {
        formattedContents.push({
          role: msg.role === "user" ? "user" : "model",
          parts: [{ text: msg.text }]
        });
      });
    }

    // Append current prompt
    formattedContents.push({
      role: "user",
      parts: [{ text: prompt }]
    });

    // Use a sequential model chain to gracefully handle high-demand/temporary rate limits
    const modelsToTry = ["gemini-2.5-flash", "gemini-2.0-flash", "gemini-2.5-pro"];
    let replyText = "";
    let lastError: any = null;

    // Helper functions for delay
    const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    for (const modelName of modelsToTry) {
      let attempts = 0;
      const maxAttempts = 2; // Retry up to 2 times for temporary/transient failures

      while (attempts < maxAttempts) {
        try {
          const response = await ai.models.generateContent({
            model: modelName,
            contents: formattedContents,
            config: {
              systemInstruction: systemInstruction,
              temperature: 0.7,
            },
          });
          if (response && response.text) {
            replyText = response.text;
            break;
          }
        } catch (err: any) {
          attempts++;
          lastError = err;
          const errMsg = err.message || "";
          const isTransient = errMsg.includes("503") || 
                              errMsg.includes("500") || 
                              errMsg.includes("high demand") || 
                              errMsg.includes("RESOURCE_EXHAUSTED") || 
                              errMsg.includes("limit") || 
                              (err.status && (err.status === 503 || err.status === 429));

          if (isTransient && attempts < maxAttempts) {
            console.warn(`Model ${modelName} sedang sibuk atau kehabisan kuota (Percobaan ke-${attempts}/${maxAttempts}). Menunggu 1 detik...`);
            await delay(1000);
            continue;
          }

          console.warn(`Model ${modelName} gagal diproses (error: ${errMsg}), beralih ke cadangan...`);
          break; // Exit retry loop and move to next model
        }
      }

      if (replyText) {
        break; // Successfully got a response, stop trying other models
      }
    }

    if (!replyText) {
      throw lastError || new Error("Semua opsi model asisten AI tidak dapat merespons saat ini.");
    }

    res.json({ reply: replyText });

  } catch (error: any) {
    console.error("Kesalahan API Tutor:", error);
    res.status(500).json({ 
      reply: `Maaf, terjadi kendala saat menghubungi asisten AI: ${error.message || error}` 
    });
  }
});

// Configure Vite middleware or serve static files
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("Memulai server Express dalam modus pengembangan dengan Vite...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Memulai server Express dalam modus produksi...");
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server web berjalan lancar di http://0.0.0.0:${PORT}`);
  });
}

setupServer();
