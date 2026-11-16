import React, { useState } from "react";
import { Heart, QrCode, MessageCircle } from "lucide-react";

// Donasi sukarela untuk Learn Syriac. Aplikasi tetap GRATIS untuk semua;
// donasi seikhlasnya membantu biaya server dan pengembangan materi.
// Gambar kode QRIS berada di public/qris.png (ditampilkan otomatis bila ada).
//
// Nomor WhatsApp admin (opsional, untuk konfirmasi donasi).
// Format internasional tanpa tanda +, contoh: 6281234567890.
// TODO: isi nomor WhatsApp Anda di sini. Kosongkan bila tidak perlu.
const WA_NUMBER = "";

export function DonationCard() {
  const [qrisFailed, setQrisFailed] = useState(false);
  const qrisUrl = (import.meta.env.BASE_URL || "/") + "qris.png";
  const waLink = WA_NUMBER
    ? "https://wa.me/" +
      WA_NUMBER +
      "?text=" +
      encodeURIComponent("Halo, saya mau berdonasi untuk Learn Syriac. Berikut bukti donasinya:")
    : "";

  return (
    <div className="bg-white border border-[#E8E4D9] rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
      <div className="flex items-start gap-3">
        <div className="w-11 h-11 bg-rose-50 border border-rose-100 rounded-2xl flex items-center justify-center shrink-0">
          <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
        </div>
        <div>
          <h3 className="font-bold text-lg sm:text-xl font-serif text-[#3D3A33]">
            Dukung Learn Syriac
          </h3>
          <p className="text-xs text-[#8A8471] leading-relaxed font-sans mt-1">
            Aplikasi ini gratis untuk semua. Bila Anda terbantu dan ingin mendukung,
            donasi seikhlasnya sangat berarti untuk biaya server dan pengembangan materi.
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6">
        {!qrisFailed ? (
          <img
            src={qrisUrl}
            alt="Kode QRIS donasi Learn Syriac"
            onError={() => setQrisFailed(true)}
            className="w-48 h-48 object-contain bg-white border border-[#E8E4D9] rounded-2xl p-2 shrink-0"
          />
        ) : (
          <div className="w-48 h-48 border-2 border-dashed border-[#D1CCBD] rounded-2xl p-6 text-center bg-[#F9F7F2]/60 flex flex-col items-center justify-center shrink-0">
            <QrCode className="w-10 h-10 text-slate-300 mb-2" />
            <p className="text-xs text-[#8A8471] leading-relaxed font-sans">
              Kode QRIS segera tampil di sini.
            </p>
          </div>
        )}

        <div className="space-y-3 font-sans text-xs text-[#3D3A33] flex-1 w-full">
          <p className="leading-relaxed">
            <strong className="font-serif text-sm">Cara berdonasi:</strong>
            <br />
            1. Buka aplikasi bank atau e-wallet Anda.
            <br />
            2. Pindai kode QRIS di samping ini.
            <br />
            3. Masukkan nominal seikhlasnya, lalu bayar.
          </p>
          <p className="text-[#8A8471] leading-relaxed">
            Nominal bebas — tidak ada jumlah minimum. Terima kasih atas dukungan Anda.
          </p>
          {waLink && (
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Konfirmasi Donasi via WhatsApp
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
