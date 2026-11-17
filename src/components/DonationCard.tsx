import React from "react";
import { Heart, ExternalLink, MessageCircle } from "lucide-react";

// Donasi sukarela untuk Learn Syriac. Aplikasi tetap GRATIS untuk semua;
// donasi seikhlasnya membantu biaya server dan pengembangan materi.
// Donasi lewat halaman Lynk.id (bayar dengan QRIS / e-wallet / virtual account).
const LYNK_URL = "https://lynk.id/rudolf/08qejqowre1y";

// Nomor WhatsApp admin (opsional, untuk konfirmasi donasi).
// Format internasional tanpa tanda +, contoh: 6281234567890.
// TODO: isi nomor WhatsApp Anda di sini. Kosongkan bila tidak perlu.
const WA_NUMBER = "";

export function DonationCard() {
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

      <div className="space-y-3 font-sans text-xs text-[#3D3A33]">
        <p className="leading-relaxed">
          <strong className="font-serif text-sm">Cara berdonasi:</strong>
          <br />
          1. Klik tombol di bawah ini.
          <br />
          2. Masukkan nominal seikhlasnya.
          <br />
          3. Bayar dengan QRIS, e-wallet, atau virtual account.
        </p>
        <p className="text-[#8A8471] leading-relaxed">
          Nominal bebas — tidak ada jumlah minimum. Terima kasih atas dukungan Anda.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <a
            href={LYNK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 py-2.5 px-5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-colors shadow-sm"
          >
            <Heart className="w-4 h-4 fill-white" />
            Donasi via Lynk.id
            <ExternalLink className="w-4 h-4" />
          </a>
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
