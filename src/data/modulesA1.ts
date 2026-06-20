import { Module } from "../types";

export const modulesA1: Module[] = [
  {
    id: 1,
    title: "Alfabet Syriac Kuno u-Ktiba (Konsonan Dasar)",
    titleSyriac: "ܐܠܦܒܝܬ ܣܘܪܝܝܐ",
    category: "Level A1",
    summary: "Mengenal sistem abjad bahasa Aram (Syriac) yang terdiri dari 22 konsonan, ditulis dari kanan ke kiri, dan memiliki gaya penulisan Estrangela.",
    introduction: "Bahasa Aram dialek Syriac ditulis menggunakan abjad Semitik kuno yang merupakan salah satu varian dari rumpun abjad Aramaik. Abjad ini ditulis dari kanan ke kiri (RTL) dan bersifat kursif. Gaya penulisan klasik yang umum disebut Estrangela (ܐܣܛܪܢܓܠܐ).",
    content: "Di dalam modul pertama ini, kita akan mempelajari bahwa bahasa Aram Syriac memiliki 22 huruf, semuanya adalah konsonan. Tidak terdapat huruf kapital. Huruf-huruf ini juga melambangkan angka (Gematria). Beberapa huruf berubah bentuknya saat diletakkan di awal, tengah, atau akhir kalimat.",
    keyRules: [
      "Bahasa Syriac ditulis & dibaca dari kanan ke kiri (RTL).",
      "Ada 22 huruf dasar, semuanya adalah huruf mati (konsonan).",
      "Huruf-huruf seperti Alap (ܐ) dan Dalath (ܕ) hanya menyambung ke arah kanan; tidak menyambung ke kiri."
    ],
    vocabulary: [
      { syriac: "ܐܠܦ", translit: "Alap", meaning: "Huruf pertama (A)", category: "Alfabet" },
      { syriac: "ܒܝܬ", translit: "Beth", meaning: "Huruf kedua (B)", category: "Alfabet" },
      { syriac: "ܓܡܠ", translit: "Gamal", meaning: "Huruf ketiga (G)", category: "Alfabet" },
      { syriac: "ܕܠܬ", translit: "Dalath", meaning: "Huruf keempat (D)", category: "Alfabet" }
    ],
    examples: [
      { syriac: "ܐܒܐ", translit: "Aba", phonetic: "Abā", indonesian: "Bapa / Ayah" },
      { syriac: "ܐܡܐ", translit: "Ema", phonetic: "Emā", indonesian: "Ibu" },
      { syriac: "ܒܝܬܐ", translit: "Bayta", phonetic: "Baytā", indonesian: "Rumah" }
    ],
    quizzes: [
      {
        id: 101,
        question: "Berapakah jumlah huruf konsonan dasar dalam abjad Aram Syriac?",
        options: ["18 huruf", "22 huruf", "28 huruf", "24 huruf"],
        correctAnswer: "22 huruf",
        explanation: "Alfabet Aram Syriac memiliki tepat 22 huruf konsonan, yang semuanya ditulis dari kanan ke kiri."
      },
      {
        id: 102,
        question: "Arah penulisan dan pembacaan teks bahasa Syriac adalah...",
        options: ["Kiri ke kanan", "Atas ke bawah", "Kanan ke kiri", "Bebas secara spiral"],
        correctAnswer: "Kanan ke kiri",
        explanation: "Sebagai rumpun bahasa Semit, bahasa Syriac ditulis dan dibaca dari kanan ke kiri."
      },
      {
        id: 103,
        question: "Manakah di antara huruf berikut yang hanya menyambung ke kanan (tidak bisa menyambung ke kiri)?",
        options: ["Alap (ܐ)", "Beth (ܒ)", "Gamal (ܓ)", "Min (ܡ)"],
        correctAnswer: "Alap (ܐ)",
        explanation: "Alap (ܐ) adalah salah satu huruf yang bersifat non-connective ke arah kiri."
      },
      {
        id: 104,
        question: "Apakah nama gaya penulisan klasik tertua dalam bahasa Aram Syriac?",
        options: ["Estrangela", "Serto", "Madnhaya", "Kufik"],
        correctAnswer: "Estrangela",
        explanation: "Estrangela adalah gaya penulisan tertua dan paling monumental dalam bahasa Aram Syriac."
      },
      {
        id: 105,
        question: "Apakah arti dari kata dasar 'Aba' (ܐܒܐ)?",
        options: ["Ibu", "Rumah", "Bapa / Ayah", "Anak"],
        correctAnswer: "Bapa / Ayah",
        explanation: "Kata 'Aba' (ܐܒܐ) berarti Bapa atau Ayah."
      }
    ]
  },
  {
    id: 2,
    title: "Sistem Vokal (Vokalisasi Serto & Madnhaya)",
    titleSyriac: "ܢܩܙ̈ܐ ܘܙܘܥ̈α",
    category: "Level A1",
    summary: "Mempelajari tanda baca vokal (harakat) dalam dialek Barat (Serto) yang dipengaruhi Yunani, dan dialek Timur (Madnhaya).",
    introduction: "Awalnya, bahasa Aram tidak memiliki tanda vokal tertulis. Di tradisi Serto (Barat), digunakan visualisasi huruf vokal Yunani kecil di atas atau di bawah konsonan.",
    content: "Di bawah tradisi Serto (Barat), terdapat 5 vokal utama: Pthaha (a), Zqapha (o), Rbasa (e), Hbasa (i), dan Esasa (u).",
    keyRules: [
      "Harakat diletakkan di atas atau di bawah konsonan untuk menentukan bunyi vokalnya.",
      "Vokal 'Zqapha' berbunyi 'o' dalam tradisi Serto Barat (misal: 'Abā' menjadi 'Abō').",
      "Seyame melambangkan bentuk jamak, bukan vokal."
    ],
    vocabulary: [
      { syriac: "ܦܬܚܐ", translit: "Pthaha", meaning: "Vokal 'a' pendek", category: "Tanda Baca" },
      { syriac: "ܙܩܦܐ", translit: "Zqapha", meaning: "Vokal 'o' berbunyi tinggi", category: "Tanda Baca" },
      { syriac: "ܪܒܨܐ", translit: "Rbasa", meaning: "Vokal 'e' miring", category: "Tanda Baca" }
    ],
    examples: [
      { syriac: "ܒܰܝܬܳܐ", translit: "Bayto", phonetic: "Baytō", indonesian: "Rumah itu" },
      { syriac: "ܟܬܳܒܳܐ", translit: "Kthobo", phonetic: "Kthōbō", indonesian: "Buku itu" }
    ],
    quizzes: [
      {
        id: 201,
        question: "Apakah nama vokal yang melambangkan bunyi 'o' dalam Serto Barat?",
        options: ["Pthaha", "Zqapha", "Hbasa", "Esasa"],
        correctAnswer: "Zqapha",
        explanation: "Zqapha melambangkan bunyi 'o' dalam dialek Barat."
      },
      {
        id: 202,
        question: "Sistem vokal Serto Barat berakar dari bentuk huruf...",
        options: ["Yunani", "Koptik", "Ibrani", "Arab"],
        correctAnswer: "Yunani",
        explanation: "Sistem vokal Barat dirancang berdampingan dengan huruf vokal Yunani kecil."
      },
      {
        id: 203,
        question: "Simbol harakat vokal 'Hbasa' melambangkan bunyi vokal...",
        options: ["a", "e", "i", "u"],
        correctAnswer: "i",
        explanation: "Hbasa melambangkan bunyi vokal 'i'."
      },
      {
        id: 204,
        question: "Apakah arti dari vokal 'Pthaha'?",
        options: ["Mencium", "Pembukaan (suara 'a')", "Penutupan", "Peninggian"],
        correctAnswer: "Pembukaan (suara 'a')",
        explanation: "Pthaha berarti 'pembukaan', melambangkan bunyi 'a'."
      },
      {
        id: 205,
        question: "Titik Seyame (titik dua sejajar di atas kata) melambangkan...",
        options: ["Kata Kerja", "Bentuk Jamak", "Vokal Panjang", "Pertanyaan"],
        correctAnswer: "Bentuk Jamak",
        explanation: "Seyame (ܳ̈) digunakan khusus untuk menandai nomina atau adjektiva berbentuk jamak."
      }
    ]
  },
  {
    id: 3,
    title: "Kata Ganti Tunggal (Kinaya d-Parsopa Ihidaya)",
    titleSyriac: "ܩܢܘܡ̈ܐ ܝܚܝܕܝ̈ܐ",
    category: "Level A1",
    summary: "Memahami struktur kata ganti pribadi tunggal untuk 'Saya', 'Kamu', dan 'Dia'.",
    introduction: "Bahasa Aram sangat spesifik menentukan gender pada kata ganti orang kedua dan ketiga.",
    content: "Kata ganti tunggal dasar meliputi:\n- Saya: ܐܶܢܳܐ (Eno)\n- Kamu (m): ܐܰܢ݁ܬ݁ (At)\n- Kamu (f): ܐܰܢ݁ܬ݁ܝ݂ (Ati)\n- Dia (m): ܗܽܘ (Hu)\n- Dia (f): ܗܺܝ (Hi).",
    keyRules: [
      "Kata ganti pertama (Saya / Eno) bersifat netral gender.",
      "Kata ganti kedua 'At' (Kamu pria) memiliki huruf Nun (ܢ) yang tergolong silent."
    ],
    vocabulary: [
      { syriac: "ܐܢܐ", translit: "Eno", meaning: "Saya (Netral)", category: "Kata Ganti" },
      { syriac: "ܐܢܬ", translit: "At", meaning: "Kamu (Laki-laki)", category: "Kata Ganti" },
      { syriac: "ܗܘ", translit: "Hu", meaning: "Dia (Laki-laki)", category: "Kata Ganti" }
    ],
    examples: [
      { syriac: "ܐܶܢܳܐ ܐܰܒܳܐ", translit: "Eno Aba", phonetic: "Eno Abā", indonesian: "Saya adalah seorang bapa" },
      { syriac: "ܗܽܘ ܡܰܠܟܳܐ", translit: "Hu Malko", phonetic: "Hu Malkō", indonesian: "Dia adalah sang raja" }
    ],
    quizzes: [
      {
        id: 301,
        question: "Bagaimanakah melafalkan kata ganti 'Kamu (Laki-laki)' yang ditulis 'ܐܰܢ݁ܬ݁'?",
        options: ["Ant", "At", "Anat", "Etahi"],
        correctAnswer: "At",
        explanation: "Huruf Nun pada 'ܐܢܬ' adalah silent letter, sehingga dibaca 'At'."
      },
      {
        id: 302,
        question: "Apakah arti dari kata ganti 'Eno' (ܐܢܐ)?",
        options: ["Dia", "Saya", "Kalian", "Kami"],
        correctAnswer: "Saya",
        explanation: "Eno (ܐܢܐ) berarti Saya (netral gender)."
      },
      {
        id: 303,
        question: "Kata ganti 'ܗܺܝ' (Hi) memiliki makna...",
        options: ["Dia (Laki-laki)", "Dia (Perempuan)", "Mereka", "Kalian"],
        correctAnswer: "Dia (Perempuan)",
        explanation: "Hi (ܗܝ) melambangkan dia perempuan."
      },
      {
        id: 304,
        question: "Manakah kata ganti untuk 'Dia (Laki-laki)'?",
        options: ["Eno", "At", "Hu (ܗܘ)", "Hi"],
        correctAnswer: "Hu (ܗܘ)",
        explanation: "Hu (ܗܘ) berarti Dia (pria/laki-laki)."
      },
      {
        id: 305,
        question: "Apakah ciri khas kata ganti 'Eno' dibanding kata ganti lainnya?",
        options: ["Hanya untuk perempuan", "Hanya untuk pria", "Netral gender", "Hanya untuk hewan"],
        correctAnswer: "Netral gender",
        explanation: "Eno boleh digunakan oleh laki-laki maupun perempuan secara netral."
      }
    ]
  },
  {
    id: 4,
    title: "Kata Ganti Jamak (Kinaya d-Parsopa Sgiyana)",
    titleSyriac: "ܩܢܘܡ̈ܐ ܣܓܝܐܢ̈ܐ",
    category: "Level A1",
    summary: "Memahami struktur kata ganti pribadi jamak untuk 'Kami', 'Kalian', dan 'Mereka'.",
    introduction: "Bentuk jamak kata ganti pribadi Syriac memperluas perbedaan gender di orang kedua dan ketiga.",
    content: "Kata ganti jamak meliputi:\n- Kami / Kita: ܚܢܰܢ (Hnan)\n- Kalian (pria): ܐܰܢ݁ܬ݁ܽܘܢ (Atton)\n- Kalian (wanita): ܐܰܢ݁ܬ݁ܶܝܢ (Atten)\n- Mereka (pria): ܗܶܢܽܘܢ (Henon)\n- Mereka (wanita): ܗܶܢܶܝܢ (Henen).",
    keyRules: [
      "Kata ganti 'Kami/Hnan' bersifat netral gender.",
      "Kalian dan Mereka memiliki bentuk maskulin (-on) dan feminin (-en) yang sangat reguler."
    ],
    vocabulary: [
      { syriac: "ܚܢܢ", translit: "Hnan", meaning: "Kami / Kita", category: "Kata Ganti" },
      { syriac: "ܐܢܬܘܢ", translit: "Atton", meaning: "Kalian (Maskulin)", category: "Kata Ganti" },
      { syriac: "ܗܢܘܢ", translit: "Henon", meaning: "Mereka (Maskulin)", category: "Kata Ganti" }
    ],
    examples: [
      { syriac: "ܚܢܰܢ ܡܰܠܦܳܢ̈ܶܐ", translit: "Hnan Malpone", phonetic: "Ḥnan Malpōnē", indonesian: "Kami adalah guru-guru" },
      { syriac: "ܗܶܢܽܘܢ ܬܰܠܡܺܝܕ̈ܶܐ", translit: "Henon Talmide", phonetic: "Henōn Talmīdē", indonesian: "Mereka adalah siswa-siswa" }
    ],
    quizzes: [
      {
        id: 401,
        question: "Apakah makna dari kata ganti 'ܚܢܰܢ' (Hnan)?",
        options: ["Dia", "Kalian", "Kami / Kita", "Mereka"],
        correctAnswer: "Kami / Kita",
        explanation: "Hnan (ܚܢܢ) berarti Kami atau Kita."
      },
      {
        id: 402,
        question: "Manakah kata ganti yang berarti 'Kalian (Laki-laki)'?",
        options: ["Atton (ܐܢܬܘܢ)", "Atten", "Henon", "Hnan"],
        correctAnswer: "Atton (ܐܢܬܘܢ)",
        explanation: "Atton (ܐܢܬܘܢ) melambangkan 'Kalian (pria/maskulin)'."
      },
      {
        id: 403,
        question: "Kata 'ܗܶܢܶܝܢ' (Henen) berarti...",
        options: ["Mereka (Laki-laki)", "Mereka (Perempuan)", "Kalian (Perempuan)", "Kami"],
        correctAnswer: "Mereka (Perempuan)",
        explanation: "Henen (ܗܢܝܢ) adalah kata ganti orang ketiga jamak feminin (Mereka perempuan)."
      },
      {
        id: 404,
        question: "Apakah akhiran yang umum menandai bentuk jamak maskulin kata ganti kedua/ketiga?",
        options: ["-on", "-en", "-at", "-utha"],
        correctAnswer: "-on",
        explanation: "Akhiran '-on' menandai gender maskulin jamak seperti Atton dan Henon."
      },
      {
        id: 405,
        question: "Apakah padanan kata untuk 'Mereka (Laki-laki)'?",
        options: ["Henon", "Henen", "Atton", "Hnan"],
        correctAnswer: "Henon",
        explanation: "Henon (ܗܢܘܢ) berarti Mereka (laki-laki/maskulin)."
      }
    ]
  },
  {
    id: 5,
    title: "Kata Benda - Gender & Jumlah (Shma - Gensa u-Minyana)",
    titleSyriac: "ܫܡܐ ܓܢܣܐ ܘܡܢܝܢܐ",
    category: "Level A1",
    summary: "Memahami struktur pembagian gender (Maskulin/Feminin) dan jumlah (Tunggal/Jamak) pada kata benda.",
    introduction: "Semua kata benda dalam bahasa Aram digolongkan sebagai maskulin (dkra) atau feminin (nqbtha). Sifatnya sangat mirip dengan tata bahasa Arab atau Ibrani.",
    content: "Sebagian besar kata benda dasar berakhiran '-a' (vokal Zqapha) dalam keadaan emphatic. Kata feminin umumnya memiliki sufiks '-ta' atau '-tha'. Bentuk jamak ditandai dengan perubahan vokal akhiran dan penulisan sign plural 'Seyame' (titik dua).",
    keyRules: [
      "Kata benda feminin mayoritas diakhiri sufiks '-ta', '-tha', atau '-utha'.",
      "Titik Seyame wajib ditulis pada semua kata benda berstatus jamak."
    ],
    vocabulary: [
      { syriac: "ܟܬܳܒܳܐ", translit: "Kthobo", meaning: "Buku (Maskulin)", category: "Kata Benda" },
      { syriac: "ܡܕܺܝ̈ܢܳܬ݂ܳܐ", translit: "Mdinatha", meaning: "Kota-kota (Feminin Jamak)", category: "Kata Benda" },
      { syriac: "ܡܰܠܟܬ݂ܳܐ", translit: "Malktha", meaning: "Ratu (Feminin Tunggal)", category: "Kata Benda" }
    ],
    examples: [
      { syriac: "ܡܰܠܟܬ݂ܳܐ ܫܰܦܺܝܪܬܳܐ", translit: "Malktha Shapirtha", phonetic: "Malkthe Shapīrto", indonesian: "Ratu yang cantik" },
      { syriac: "ܟܬܳܒܳܐ ܪܰܒܳܐ", translit: "Kthobo Rabo", phonetic: "Kthōbō Rabō", indonesian: "Buku yang besar" }
    ],
    quizzes: [
      {
        id: 501,
        question: "Akhiran apa yang umumnya mencirikan suatu kata benda tunggal bersifat Feminin?",
        options: ["-o / -a", "-ta / -tha / -utha", "-e", "-in"],
        correctAnswer: "-ta / -tha / -utha",
        explanation: "Akhiran '-ta', '-tha', atau '-utha' melambangkan gender feminin pada kata benda Aramaean."
      },
      {
        id: 502,
        question: "Kata 'ܟܬܳܒܳܐ' (Kthobo - Buku) tergolong kata benda bergender...",
        options: ["Maskulin", "Feminin", "Netral", "Ganda"],
        correctAnswer: "Maskulin",
        explanation: "Kthobo tidak berakhiran feminin sehingga bergender maskulin."
      },
      {
        id: 503,
        question: "Kombinasi dua titik horizontal di atas kata benda jamak disebut...",
        options: ["Rukkakha", "Seyame", "Qushaya", "Marhetana"],
        correctAnswer: "Seyame",
        explanation: "Dua titik di atas huruf dasar itu adalah Seyame (ܳ̈), indikator status jamak."
      },
      {
        id: 504,
        question: "Apakah arti dari kata 'Malktha' (ܡܰܠܟܬ݂ܳܐ)?",
        options: ["Raja", "Ratu", "Guru", "Gereja"],
        correctAnswer: "Ratu",
        explanation: "Malktha berarti Ratu, bentuk feminin dari Malka (Raja)."
      },
      {
        id: 505,
        question: "Bagaimanakah bentuk jamak dari kata 'Malka' (Raja)?",
        options: ["Malkone", "Malke", "Malktha", "Malkatha"],
        correctAnswer: "Malke",
        explanation: "Malke (ܡܰܠܟ̈ܶܐ) dengan Seyame menyatakan 'para raja'."
      }
    ]
  },
  {
    id: 6,
    title: "Tiga Status Kata Benda (Emphatic, Absolute, Construct)",
    titleSyriac: "ܫܠܫܐ ܛܟܣ̈ܐ ܕܫܡܐ",
    category: "Level A1",
    summary: "Memahami 3 status fungsional kata benda: Emphatic (Ditentukan), Absolute (Bebas), dan Construct (Kepemilikan).",
    introduction: "Bahasa Aram klasik tidak memiliki partikel kata sandang seperti 'the' dalam bahasa Inggris. Melainkan, status kata benda terbagi menjadi tiga bentuk sintaksis.",
    content: "1. Emphatic Status: Bentuk standar berakhiran '-a' (misal: Malko - sang raja/raja itu).\n2. Absolute Status: Bentuk indefinit (misal: Melek - seorang raja).\n3. Construct Status: Bentuk hubungan kepemilikan (misal: Malkath Shaba - ratu Syeba).",
    keyRules: [
      "Secara default di kamus Syriac, kata benda ditulis dalam status Emphatic (berakhiran -a).",
      "Construct status memotong vokal akhiran untuk menyambung kepemilikan kata berikutnya."
    ],
    vocabulary: [
      { syriac: "ܡܠܟܬ", translit: "Malkath", meaning: "Ratu (Construct)", category: "Tata Bahasa" },
      { syriac: "ܡܠܟ", translit: "Melek", meaning: "Seorang Raja (Absolute)", category: "Tata Bahasa" },
      { syriac: "ܡܠܟܐ", translit: "Malka / Malko", meaning: "Malka / Sang Raja (Emphatic)", category: "Tata Bahasa" }
    ],
    examples: [
      { syriac: "ܫ ܒܰܪ ܐ̱ܢܳܫܳܐ", translit: "Bar Nasha", phonetic: "Bar Nāshā", indonesian: "Anak Manusia (Bar = construct dari bera)" },
      { syriac: "ܒܶܝܬ݂ ܡܰܠܟܳܐ", translit: "Beyth Malka", phonetic: "Beyt Malko", indonesian: "Rumah raja (Beyth = construct dari bayta)" }
    ],
    quizzes: [
      {
        id: 601,
        question: "Status kata benda manakah yang menjadi bentuk dasar leksikal berakhiran '-a' di kamus?",
        options: ["Absolute Status", "Construct Status", "Emphatic Status", "Genitive Status"],
        correctAnswer: "Emphatic Status",
        explanation: "Emphatic Status melambangkan bentuk formal definitif bawaan kamus bahasa Syriac."
      },
      {
        id: 602,
        question: "Kata 'ܒܶܝܬ݂' (Beyth - Griya/Rumah) dalam istilah 'Beyth Malko' berstatus...",
        options: ["Absolute", "Construct", "Emphatic", "Nominatif"],
        correctAnswer: "Construct",
        explanation: "Gaya construct memangkas kata 'Bayto' menjadi 'Beyth' untuk menyatakannya sebagai milik kata sesudahnya."
      },
      {
        id: 603,
        question: "Apakah arti dari kata construct 'Bar' pada 'Bar Nasha'?",
        options: ["Rumah", "Anak laki-laki", "Utusan", "Dunia"],
        correctAnswer: "Anak laki-laki",
        explanation: "Bar (ܒܪ) adalah construct dari Bera (Anak laki-laki)."
      },
      {
        id: 604,
        question: "Apakah fungsi utama dari Construct Status?",
        options: ["Menunjuk tempat", "Menyatakan hubungan kepemilikan", "Membuat kalimat tanya", "Menunjukkan waktu lampau"],
        correctAnswer: "Menyatakan hubungan kepemilikan",
        explanation: "Construct Status digunakan untuk menyambungkan dua kata benda dalam hubungan 'milik/kepemilikan'."
      },
      {
        id: 605,
        question: "Bentuk Absolute dari 'Bayto' (Rumah itu) adalah...",
        options: ["Bayt", "Beyth", "Bayin", "Bto"],
        correctAnswer: "Bayt",
        explanation: "Bentuk absolute indefinit (sebuah rumah) adalah Bayt atau Bayin."
      }
    ]
  },
  {
    id: 7,
    title: "Kata Sifat Penyanding (Shma d-Gensha / Adjective)",
    titleSyriac: "ܫܡܐ ܕܓܢܫܐ",
    category: "Level A1",
    summary: "Aturan penyelarasan kata sifat dengan kata benda dalam segi Gender, Jumlah, dan Status.",
    introduction: "Kata sifat (adjective) harus diletakkan setelah kata benda yang diterangkannya dan harus selaras secara gramatikal.",
    content: "Keselarasan ini meliputi:\n1. Gender (Maskulin-Maskulin, Feminin-Feminin).\n2. Jumlah (Tunggal-Tunggal, Jamak-Jamak).\n3. Status (Umumnya sama-sama Emphatic).",
    keyRules: [
      "Kata Sifat mutlak diletakkan di belakang kata benda (Noun + Adjective).",
      "Jika kata benda feminin tunggal berakhiran '-ta', kata sifat penyandingnya juga wajib mengambil bentuk akhiran feminin '-ta'."
    ],
    vocabulary: [
      { syriac: "ܫܰܦܺܝܪܳܐ", translit: "Shapira", meaning: "Indah / Tampan (m)", category: "Kata Sifat" },
      { syriac: "ܫܰܦܺܝܪܬܳܐ", translit: "Shapirtha", meaning: "Cantik / Indah (f)", category: "Kata Sifat" },
      { syriac: "ܪܰܒܳܐ", translit: "Raba / Rabo", meaning: "Besar / Agung", category: "Kata Sifat" }
    ],
    examples: [
      { syriac: "ܒܰܝܬܳܐ ܪܰܒܳܐ", translit: "Bayto Rabo", phonetic: "Baytō Rabō", indonesian: "Rumah yang besar" },
      { syriac: "ܐܰܢ݁ܬ݁ܬ݂ܳܐ ܫܰܦܺܝܪܬܳܐ", translit: "Anttho Shapirtha", phonetic: "Attho Shapīrto", indonesian: "Wanita yang cantik itu" }
    ],
    quizzes: [
      {
        id: 701,
        question: "Letak posisi kata sifat yang menerangkan kata benda dalam sintaksis Syriac adalah...",
        options: ["Sebelum kata benda", "Setelah kata benda", "Bebas di mana saja", "Di awal paragraf saja"],
        correctAnswer: "Setelah kata benda",
        explanation: "Kata sifat dalam Syriac secara konsisten diposisikan setelah kata benda utama yang diterangkannya."
      },
      {
        id: 702,
        question: "Manakah penyelarasan adjektiva yang tepat untuk frasa 'Wanita (feminin) yang baik'?",
        options: ["Anttho Shapira", "Anttho Shapirtha", "Aba Shapira", "Eno Shapira"],
        correctAnswer: "Anttho Shapirtha",
        explanation: "Anttho (Wanita) bergender feminin, sehingga membutuhkan adjektiva feminin 'Shapirtha'."
      },
      {
        id: 703,
        question: "Jika kata bendanya berkategori maskulin tunggal, bentuk kata sifat yang disandingkan harus...",
        options: ["Maskulin tunggal", "Feminin tunggal", "Maskulin jamak", "Feminin jamak"],
        correctAnswer: "Maskulin tunggal",
        explanation: "Kata sifat wajib selaras dalam gender dan jumlah dengan nominanya."
      },
      {
        id: 704,
        question: "Apakah arti kata sifat 'Raba'?",
        options: ["Kecil", "Besar / Agung", "Cantik", "Baru"],
        correctAnswer: "Besar / Agung",
        explanation: "Raba (ܪܒܐ) memiliki arti besar, agung, atau utama."
      },
      {
        id: 705,
        question: "Bagaimanakah bentuk jamak maskulin dari 'Shapira' (indah)?",
        options: ["Shapiratha", "Shapire", "Shapirton", "Shapiroth"],
        correctAnswer: "Shapire",
        explanation: "Akhiran '-e' menandakan jamak maskulin untuk kata sifat (Shapire = indah-indah)."
      }
    ]
  },
  {
    id: 8,
    title: "Kata Tunjuk / Demonstrative (Kinaya d-Gushama)",
    titleSyriac: "ܟܢܝܐ ܕܓܘܫܡܐ",
    category: "Level A1",
    summary: "Mengenal kata tunjuk dekat (Ini) dan jauh (Itu) dalam bentuk maskulin dan feminin.",
    introduction: "Demonstrative pronoun digunakan untuk menunjuk benda secara spesifik berdasarkan jarak dan gender benda tersebut.",
    content: "Kata tunjuk dekat (Ini):\n- Maskulin Tunggal: ܗܳܢܳܐ (Hana / Hono)\n- Feminin Tunggal: ܗܳܕܶܐ (Hade)\n- Jamak (Netral): ܗܳܠܶܝܢ (Halen)\n\nKata tunjuk jauh (Itu):\n- Maskulin Tunggal: ܗܰܘ (Haw)\n- Feminin Tunggal: ܗܳܝ (Hay)\n- Jamak (Netral): ܗܶܢܽܘܢ (Henon).",
    keyRules: [
      "Kata tunjuk dekat jamak 'Halen' dipakai sama baik untuk maskulin maupun feminin.",
      "Kata tunjuk diletakkan sebelum atau sesudah kata benda dengan variasi konvensi gaya penulisan."
    ],
    vocabulary: [
      { syriac: "ܗܳܢܳܐ", translit: "Hono", meaning: "Ini (Maskulin)", category: "Kata Tunjuk" },
      { syriac: "ܗܳܕܶܐ", translit: "Hade", meaning: "Ini (Feminin)", category: "Kata Tunjuk" },
      { syriac: "ܗܳܠܶܝܢ", translit: "Halen", meaning: "Ini semua (Jamak)", category: "Kata Tunjuk" }
    ],
    examples: [
      { syriac: "ܗܳܢܳܐ ܒܰܝܬܳܐ", translit: "Hono Bayto", phonetic: "Hono Bayto", indonesian: "Rumah ini" },
      { syriac: "ܗܳܕܶܐ ܡܰܠܟܬ݂ܳܐ", translit: "Hade Malktha", phonetic: "Hade Malkto", indonesian: "Ratu ini" }
    ],
    quizzes: [
      {
        id: 801,
        question: "Apakah padanan kata tunjuk 'Ini' untuk kata benda Maskulin Tunggal?",
        options: ["Hono (ܗܢܐ)", "Hade", "Halen", "Haw"],
        correctAnswer: "Hono (ܗܢܐ)",
        explanation: "Hono (ܗܢܐ) adalah kata tunjuk dekat maskulin tunggal."
      },
      {
        id: 802,
        question: "Manakah kata tunjuk yang mengekspresikan makna 'Ini semua' (Jamak)?",
        options: ["Hono", "Halen (ܗܠܝܢ)", "Hade", "Haw"],
        correctAnswer: "Halen (ܗܠܝܢ)",
        explanation: "Halen (ܗܠܝܢ) melambangkan kata tunjuk dekat jamak."
      },
      {
        id: 803,
        question: "Kata tunjuk jauh feminin tunggal 'Itu (Wanita/Gereja)' dalam Syriac adalah...",
        options: ["Haw", "Hay (ܗܝ)", "Hono", "Hade"],
        correctAnswer: "Hay (ܗܝ)",
        explanation: "Hay (ܗܝ) bermakna 'Itu' untuk nomina tunggal feminin."
      },
      {
        id: 804,
        question: "Untuk merujuk 'Buku ini' (buku = maskulin), frase yang tepat adalah...",
        options: ["Hono Kthobo", "Hade Kthobo", "Halen Kthobe", "Haw Kthobo"],
        correctAnswer: "Hono Kthobo",
        explanation: "Kthobo adalah maskulin, maka dipasangkan dengan Hono."
      },
      {
        id: 805,
        question: "Apakah arti dari kata tunjuk jauh maskulin tunggal 'Haw' (ܗܰܘ)?",
        options: ["Ini", "Itu", "Sana", "Sini"],
        correctAnswer: "Itu",
        explanation: "Haw (ܗܰܘ) berarti 'Itu' untuk maskulin tunggal."
      }
    ]
  },
  {
    id: 9,
    title: "Kata Depan Melekat Dasar (Prep: B-, L-, D-)",
    titleSyriac: "ܐܘܣ̈ܦܐ ܕܫܡܐ",
    category: "Level A1",
    summary: "Memahami ketiga preposisi melekat satu huruf integral: B- (di dalam/dengan), L- (kepada/untuk), dan D- (milik).",
    introduction: "Preposisi dasar bahasa Syriac sering berupa awalan satu huruf yang disambung langsung di awal kata benda.",
    content: "Preposisi melekat meliputi:\n1. B- (ܒ݁) : Di dalam, dengan, menggunakan.\n2. L- (ܠ) : Kepada, untuk (penunjuk objek tidak langsung).\n3. D- (ܕ݁) : Yang, bahwa, milik (mengindikasikan relasi genetif).",
    keyRules: [
      "Huruf preposisi disambung rapat dengan huruf awal kata benda berikutnya tanpa spasi.",
      "Vokalisasi preposisi bergantung pada susunan konsonan huruf pertama kata benda (biasanya berbunyi 'b-', 'l-', 'd-')."
    ],
    vocabulary: [
      { syriac: "ܒܒܝܬܐ", translit: "b-bayta", meaning: "di dalam rumah", category: "Preposisi" },
      { syriac: "ܠܡܠܟܐ", translit: "l-malka", meaning: "kepada raja", category: "Preposisi" },
      { syriac: "ܕܐܠܗܐ", translit: "d-Alaha", meaning: "milik Allah / dari Allah", category: "Preposisi" }
    ],
    examples: [
      { syriac: "ܒ݁ܰܫܡܰܝܳܐ", translit: "ba-shmayya", phonetic: "bashmayō", indonesian: "di surga (b- + shmayya)" },
      { syriac: "ܟܬܳܒܳܐ ܕ݁ܡܰܠܟܳܐ", translit: "Kthobo d-Malka", phonetic: "Kthōbō d-Malkō", indonesian: "Buku milik raja" }
    ],
    quizzes: [
      {
        id: 901,
        question: "Apakah arti dari preposisi 'ܒ݁' (B-) yang ditempel di depan kata benda?",
        options: ["Milik", "Kepada / Untuk", "Di dalam / Dengan / Pada", "Daripada / Keluar"],
        correctAnswer: "Di dalam / Dengan / Pada",
        explanation: "Awalan B- (ܒ) melambangkan preposisi lokatif ('di') atau instrumen ('dengan')."
      },
      {
        id: 902,
        question: "Preposisi manakah yang merepresentasikan kepunyaan atau penghubung 'yang' ?",
        options: ["B- (ܒ)", "L- (ܠ)", "D- (ܕ)", "M- (ܡ)"],
        correctAnswer: "D- (ܕ)",
        explanation: "Awalan D- (ܕ) memiliki peran serbaguna seperti penanda 'yang' atau kepemilikan."
      },
      {
        id: 903,
        question: "Bagaimana menterjemahkan 'kepada sang raja' jika raja adalsh 'Malka' ?",
        options: ["b-Malka", "l-Malka", "d-Malka", "men Malka"],
        correctAnswer: "l-Malka",
        explanation: "Preposisi L- melambangkan dative/direktif ('kepada'). Maka ditulis l-Malka."
      },
      {
        id: 904,
        question: "Jika kita ingin menulis 'di surga' (surga = shmayya), preposisi yang dilekatkan adalah...",
        options: ["B-", "L-", "D-", "M-"],
        correctAnswer: "B-",
        explanation: "Di surga menggunakan preposisi lokatif B- sehingga menjadi 'bashmayya'."
      },
      {
        id: 905,
        question: "Kata 'd-Alaha' berarti...",
        options: ["Kepada Allah", "Milik Allah / Dari Allah", "Di dalam Allah", "Allah adalah"],
        correctAnswer: "Milik Allah / Dari Allah",
        explanation: "D- di depan kata Alaha menunjukkan makna penanda kepemilikan atau asal-usul."
      }
    ]
  },
  {
    id: 10,
    title: "Kata Kerja Peal Perfect Tunggal (Kala Lampau)",
    titleSyriac: "ܡܠܬܐ ܦܫܝܛܬܐ ܝܚܝܕܝܬܐ",
    category: "Level A1",
    summary: "Mempelajari konjugasi dasar kata kerja Peal (Kategori Sederhana) waktu lampau untuk pelaku tunggal.",
    introduction: "Kata kerja bahasa Aram diklasifikasikan ke dalam sistem verba berbasis akar kata konsonan (umumnya 3 huruf). Peal adalah bentuk aktif orisinil paling dasar.",
    content: "Konjugasi Peal Perfect Tunggal:\n- Dia pria menulis (3ms): ܟܬܰܒ (Kthab)\n- Dia wanita menulis (3fs): ܟܬܰܒܰܬ (Kthabath)\n- Kamu pria menulis (2ms): ܟܬܰܒܬ (Kthabt)\n- Kamu wanita menulis (2fs): ܟܬܰܒܬܝ (Kthabti)\n- Saya menulis (1cs): ܟܬܰܒܶܬ (Kthabeth).",
    keyRules: [
      "Bentuk leksikal dasar kata kerja di kamus adalah orang ketiga tunggal maskulin perfect (3ms).",
      "Pola sufiks perfect konsisten menandai gender pelaku verba."
    ],
    vocabulary: [
      { syriac: "ܟܬܒ", translit: "Kthab", meaning: "Dia (m) telah menulis", category: "Kata Kerja" },
      { syriac: "ܫܡܥ", translit: "Shmá", meaning: "Dia (m) telah mendengar", category: "Kata Kerja" },
      { syriac: "ܐܡܪ", translit: "Amar", meaning: "Dia (m) telah berkata", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "ܟܬܰܒܶܬ ܟܬܳܒܳܐ", translit: "Kthabeth Kthobo", phonetic: "Kthabet Kthōbō", indonesian: "Saya telah menulis sebuah buku" },
      { syriac: "ܫܡܰܥܬ ܩܳܠܳܐ", translit: "Shma't Qolo", phonetic: "Shma't Qōlō", indonesian: "Kamu (pria) telah mendengar suara itu" }
    ],
    quizzes: [
      {
        id: 1001,
        question: "Kata kerja dalam kamus Syriac umumnya diindeks dalam bentuk...",
        options: ["Infinitif", "Orang ke-1 tunggal", "Orang ke-3 tunggal maskulin perfect (3ms)", "Imperative"],
        correctAnswer: "Orang ke-3 tunggal maskulin perfect (3ms)",
        explanation: "Bentuk 3ms Perfect (seperti Kthab - Dia telah menulis) adalah akar kata standar sistem kamus Semit."
      },
      {
        id: 1002,
        question: "Bagaimana melafalkan bentuk 'Saya telah menulis' ?",
        options: ["Kthab", "Kthabath", "Kthabeth (ܟܬܰܒܶܬ)", "Kthabti"],
        correctAnswer: "Kthabeth (ܟܬܰܒܶܬ)",
        explanation: "Akhiran '-eth' (ܟܬܒܬ) melambangkan aksi orang pertama tunggal 'Saya' telah melakukan."
      },
      {
        id: 1003,
        question: "Verba 'ܟܬܰܒܰܬ' (Kthabath) berati...",
        options: ["Dia (Laki-laki) telah menulis", "Dia (Perempuan) telah menulis", "Saya telah menulis", "Kami telah menulis"],
        correctAnswer: "Dia (Perempuan) telah menulis",
        explanation: "Sufiks '-ath' melambangkan pelaku orang ketiga tunggal feminin."
      },
      {
        id: 1004,
        question: "Apakah arti dari kata kerja 'Amar'?",
        options: ["Menulis", "Mendengar", "Berkata", "Melihat"],
        correctAnswer: "Berkata",
        explanation: "Amar (ܐܡܪ) berarti berkata atau berucap."
      },
      {
        id: 1005,
        question: "Bagaimanakah konjugasi 'Kamu (perempuan) telah mendengar'?",
        options: ["Shmá", "Shma'ath", "Shma'ti", "Shma't"],
        correctAnswer: "Shma'ti",
        explanation: "Sufiks '-ti' digunakan untuk kata kerja orang kedua tunggal feminin lampau."
      }
    ]
  },
  {
    id: 11,
    title: "Kata Kerja Peal Perfect Jamak",
    titleSyriac: "ܡܠܬܐ ܦܫܝܛܬܐ ܣܓܝܐܝܬܐ",
    category: "Level A1",
    summary: "Konjugasi Peal Perfect lampau untuk subjek jamak (Kami, Kalian, Mereka).",
    introduction: "Setelah menguasai verba tunggal, pemahaman diperluas ke bentuk verba kelompok (jamak/plural).",
    content: "Konjugasi Peal Perfect Jamak:\n- Mereka pria menulis (3mp): ܟܬܰܒܘ (Kthabun / Kthabw)\n- Mereka wanita menulis (3fp): ܟܬܰܒܝ (Kthaby)\n- Kalian pria menulis (2mp): ܟܬܰܒܬܽܘܢ (Kthabton)\n- Kalian wanita menulis (2fp): ܟܬܰܒܬܶܝܢ (Kthabten)\n- Kami menulis (1cp): ܟܬܰܒܢ (Kthabnan).",
    keyRules: [
      "Huruf Waw di ujung bentuk 3mp 'ܟܬܒܘ' biasanya berbunyi 'u' panjang.",
      "Sufiks jamak serupa dengan penanda kata ganti pelakunya (misal: -ton, -ten)."
    ],
    vocabulary: [
      { syriac: "ܟܬܒܘܢ", translit: "Kthabun", meaning: "Mereka (m) telah menulis", category: "Kata Kerja" },
      { syriac: "ܫܡܥܢܢ", translit: "Shma'nan", meaning: "Kami telah mendengar", category: "Kata Kerja" },
      { syriac: "ܢܦܩܬܘܢ", translit: "Npaqton", meaning: "Kalian (m) telah keluar", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "ܟܬܰܒܢܰܢ ܐܺܓܪܰܬ݂ܳܐ", translit: "Kthabnan igratha", phonetic: "Kthabnan īgrathō", indonesian: "Kami telah menulis surat itu" },
      { syriac: "ܫܡܰܥܬܽܘܢ ܩܳܠܳܐ", translit: "Shma'ton qolo", phonetic: "Shma'ton qōlō", indonesian: "Kalian (pria) telah mendengar suara" }
    ],
    quizzes: [
      {
        id: 1101,
        question: "Konjugasi 'Kami telah menulis' dalam bahasa Syriac adalah...",
        options: ["Kthabon", "Kthabnan (ܟܬܰܒܢ)", "Kthabton", "Kthabth"],
        correctAnswer: "Kthabnan (ܟܬܰܒܢ)",
        explanation: "Sufiks '-nan' melambangkan pelaku jamak pertama 'Kami/Kita'."
      },
      {
        id: 1102,
        question: "Sufiks '-ton' (ܿܐܢܬܘܢ) pada kata kerja lampau menunjukkan subjek pelaku...",
        options: ["Mereka pria", "Kalian pria", "Kalian wanita", "Kami"],
        correctAnswer: "Kalian pria",
        explanation: "Akhiran '-ton' melambangkan pelaku orang kedua jamak maskulin 'Kalian pria'."
      },
      {
        id: 1103,
        question: "Bentuk 'Kthabun' (ܟܬܒܘ) memiliki arti...",
        options: ["Saya telah menulis", "Mereka (pria) telah menulis", "Mereka (wanita) telah menulis", "Kalian telah menulis"],
        correctAnswer: "Mereka (pria) telah menulis",
        explanation: "Sufiks '-u / -un' melambangkan pronominal ketiga jamak maskulin lampau."
      },
      {
        id: 1104,
        question: "Apakah arti dari kata kerja 'Npaqton'?",
        options: ["Kalian telah masuk", "Kalian telah keluar", "Kalian telah berkata", "Kalian telah mendengar"],
        correctAnswer: "Kalian telah keluar",
        explanation: "Npaqton berasal dari kata dasar Npaq (keluar) untuk pelaku kalian maskulin."
      },
      {
        id: 1105,
        question: "Apakah sufiks untuk pelaku Mereka Perempuan jamak lampau (3fp)?",
        options: ["-u", "-y", "-nan", "-ten"],
        correctAnswer: "-y",
        explanation: "Akhiran huruf Yodh (-y/i) melambangkan subjek pelaku orang ketiga jamak feminin lampau."
      }
    ]
  },
  {
    id: 12,
    title: "Kata Kerja Peal Imperfect Tunggal (Kala Nanti/Kini)",
    titleSyriac: "ܡܠܬܐ ܕܥܬܝܕܐ",
    category: "Level A1",
    summary: "Memahami pola konjugasi Imperfect (melambangkan masa kini atau masa depan) pelaku tunggal.",
    introduction: "Sistem verba Aram menggunakan bentuk Imperfect untuk aksi yang belum tuntas, umumnya didahului dengan penambahan prefiks di awal kata.",
    content: "Konjugasi Peal Imperfect Tunggal (Menulis):\n- Dia pria akan menulis (3ms): ܢܶܟܬܽܘܒ (Nektob)\n- Dia wanita akan menulis (3fs): ܬܶܟܬܽܘܒ (Tektob)\n- Kamu pria akan menulis (2ms): ܬܶܟܬܽܘܒ (Tektob)\n- Kamu wanita akan menulis (2fs): ܬܶܟܬܒܺܝܢ (Tektbin)\n- Saya akan menulis (1cs): ܐܶܟܬܽܘܒ (Ektob).",
    keyRules: [
      "Imperfect menggunakan prefiks/awalan huruf: Nun (ܢ), Taw (ܬ), atau Alap (ܐ).",
      "Bentuk 3fs dan 2ms memiliki kesamaan visual (Tektob), kontekstualisasi kalimat membantu pembedaan."
    ],
    vocabulary: [
      { syriac: "ܢܟܬܘܒ", translit: "Nektob", meaning: "Dia (m) akan menulis", category: "Kata Kerja" },
      { syriac: "ܐܟܬܘܒ", translit: "Ektob", meaning: "Saya akan menulis", category: "Kata Kerja" },
      { syriac: "ܬܫܡܥ", translit: "Teshma'", meaning: "Dia (f) / Kamu (m) akan mendengar", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "ܐܶܟܬܽܘܒ ܐܺܓܪܰܬ݂ܳܐ", translit: "Ektob igratha", phonetic: "Ektob īgrathō", indonesian: "Saya akan menulis surat itu" },
      { syriac: "ܗܽܘ ܢܶܟܬܽܘܒ ܟܬܳܒܳܐ", translit: "Hu nektob kthobo", phonetic: "Hu nektob kthōbō", indonesian: "Dia akan menulis buku itu" }
    ],
    quizzes: [
      {
        id: 1201,
        question: "Prefiks huruf apa yang menandai subjek pelaku orang pertama tunggal 'Saya' akan melakukan?",
        options: ["Nun (ܢ)", "Taw (ܬ)", "Alap (ܐ)", "Yodh (ܝ)"],
        correctAnswer: "Alap (ܐ)",
        explanation: "Prefiks Alap (ܐ) melambangkan subjek 'Saya' pada kala kini/nanti (misal: Ektob)."
      },
      {
        id: 1202,
        question: "Kata 'ܢܶܟܬܽܘܒ' (Nektob) memiliki makna...",
        options: ["Dia telah menulis", "Dia (Laki-laki) akan menulis", "Kamu perempuan menulis", "Tulis olehmu!"],
        correctAnswer: "Dia (Laki-laki) akan menulis",
        explanation: "Awalan Nun (ܢ) melambangkan orang ketiga tunggal maskulin (Dia akan menulis)."
      },
      {
        id: 1203,
        question: "Subjek pelaku mana saja yang memiliki bentuk visual konjugasi sama 'ܬܶܟܬܽܘܒ'?",
        options: ["Saya & Kami", "Kamu pria & Dia wanita", "Mereka & Kalian", "Dia pria & Dia wanita"],
        correctAnswer: "Kamu pria & Dia wanita",
        explanation: "Bentuk 'Tektob' merujuk ganda kepada 'Kamu pria' (2ms) atau 'Dia wanita' (3fs)."
      },
      {
        id: 1204,
        question: "Bagaimanakah menerjemahkan 'Saya akan mendengar'?",
        options: ["Neshma'", "Eshma'", "Teshma'", "Npaq"],
        correctAnswer: "Eshma'",
        explanation: "Eshma' diawali huruf Alap, melambangkan 'Saya akan mendengar'."
      },
      {
        id: 1205,
        question: "Bentuk 'Tektbin' (ܬܶܟܬܒܺܝܢ) ditujukan untuk pelaku...",
        options: ["Kamu pria", "Kamu wanita", "Dia wanita", "Kalian wanita"],
        correctAnswer: "Kamu wanita",
        explanation: "Prefiks Taw dan sufiks -in menyatakan pelaku kamu tunggal feminin."
      }
    ]
  },
  {
    id: 13,
    title: "Kata Kerja Peal Imperfect Jamak",
    titleSyriac: "ܡܠܬܐ ܕܥܬܝܕܐ ܕܣܓܝܐܐ",
    category: "Level A1",
    summary: "Konjugasi Peal Imperfect (Kala Nanti/Kini) untuk pelaku jamak.",
    introduction: "Melanjutkan materi imperfect tunggal ke dalam konjugasi yang kompleks berorientasi komunal.",
    content: "Konjugasi Peal Imperfect Jamak:\n- Mereka pria akan menulis (3mp): ܢܶܟܬܒܽܘܢ (Nektbun)\n- Mereka wanita akan menulis (3fp): ܢܶܟܬܒܳܢ (Nektban)\n- Kalian pria akan menulis (2mp): ܬܶܟܬܒܽܘܢ (Tektbun)\n- Kalian wanita akan menulis (2fp): ܬܶܟܬܒܳܢ (Tektban)\n- Kami akan menulis (1cp): ܢܶܟܬܽܘܒ (Nektob).",
    keyRules: [
      "Penanda kala depan jamak menggunakan kombinasi imbuhan prefiks di awal dan sufiks akhiran (seperti -un atau -an).",
      "Subjek pelaku 'Kami' (1cp) memakai prefiks Nun tunggal tanpa akhiran tambahan ('Nektob')."
    ],
    vocabulary: [
      { syriac: "ܢܟܬܒܘܢ", translit: "Nektbun", meaning: "Mereka (m) akan menulis", category: "Kata Kerja" },
      { syriac: "ܬܟܬܒܘܢ", translit: "Tektbun", meaning: "Kalian (m) akan menulis", category: "Kata Kerja" },
      { syriac: "ܢܫܡܥܘܢ", translit: "Neshme'un", meaning: "Mereka (m) akan mendengar", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "ܚܢܰܢ ܢܶܟܬܽܘܒ ܐܺܓܪܰܬ݂ܳܐ", translit: "Hnan nektob igratha", phonetic: "Ḥnan nektob īgrathō", indonesian: "Kami akan menulis surat itu" },
      { syriac: "ܬܶܟܬܒܽܘܢ ܟܬܳܒܳܐ", translit: "Tektbun kthobo", phonetic: "Tektbūn kthōbō", indonesian: "Kalian (pria) akan menulis buku" }
    ],
    quizzes: [
      {
        id: 1301,
        question: "Apakah bentuk konjugasi 'Kami akan menulis' dalam imperfect?",
        options: ["Nektbun", "Nektob (ܢܶܟܬܽܘܒ)", "Tektbun", "Ektob"],
        correctAnswer: "Nektob (ܢܶܟܬܽܘܒ)",
        explanation: "Imperfect 'Kami' diawali prefiks Nun tanpa tambahan akhiran."
      },
      {
        id: 1302,
        question: "Akhiran '-un' (ܘܢ) pada 'ܢܶܟܬܒܽܘܢ' menandai gender subjek...",
        options: ["Maskulin Jamak", "Feminin Jamak", "Tunggal Maskulin", "Tunggal Feminin"],
        correctAnswer: "Maskulin Jamak",
        explanation: "Akhiran '-un' adalah penanda reguler untuk jamak maskulin kini/nanti."
      },
      {
        id: 1303,
        question: "Makna dari verba 'ܬܶܟܬܒܽܘܢ' (Tektbun) adalah...",
        options: ["Mereka akan menulis", "Kalian (Laki-laki) akan menulis", "Kami akan menulis", "Kalian (Perempuan) telah menulis"],
        correctAnswer: "Kalian (Laki-laki) akan menulis",
        explanation: "Awalan Taw (ܬ) dikombinasikan dengan '-un' (ܘܢ) merujuk kepada 'Kalian pria'."
      },
      {
        id: 1304,
        question: "Apakah terjemahan dari 'Neshme'un'?",
        options: ["Saya akan mendengar", "Kalian akan mendengar", "Mereka (pria) akan mendengar", "Kami akan mendengar"],
        correctAnswer: "Mereka (pria) akan mendengar",
        explanation: "Neshme'un diawali Nun dan berakhiran -un, berarti Mereka maskulin akan mendengar."
      },
      {
        id: 1305,
        question: "Apakah penanda khusus untuk Mereka Perempuan jamak pada imperfect?",
        options: ["-un", "-an", "-nan", "-bin"],
        correctAnswer: "-an",
        explanation: "Sufiks '-an' (ܳܢ) dikombinasikan dengan prefiks Nun menandakan Mereka feminin (imperfect)."
      }
    ]
  },
  {
    id: 14,
    title: "Kata Kerja Peal Imperative (Kala Perintah)",
    titleSyriac: "ܦܘܩܕܢܐ ܕܡܠܬܐ",
    category: "Level A1",
    summary: "Memahami struktur pembentukan kata kerja perintah (imperative) maskulin dan feminin.",
    introduction: "Sistem imperatif bahasa Aram dibentuk langsung dari akar kata imperfect dengan memotong prefiksnya.",
    content: "Bentuk Imperative (Menulis / Tulis!):\n- Tulis olehmu pria (2ms): ܟܬܽܘܒ (Kthob)\n- Tulis olehmu wanita (2fs): ܟܬܽܘܒܝ (Kthoby)\n- Tulis olehmu sekalian pria (2mp): ܟܬܽܘܒܘ (Kthobu / Kthobw)\n- Tulis olehmu sekalian wanita (2fp): ܟܬܽܘܒܢ (Kthobyan).",
    keyRules: [
      "Kata kerja perintah ditujukan mutlak hanya ke orang kedua (kamu / kalian).",
      "Bentuk imperatif maskulin tunggal (2ms) tampak identik dengan akar konsonannya namun bervokalisasi 'o'."
    ],
    vocabulary: [
      { syriac: "ܟܬܘܒ", translit: "Kthob", meaning: "Tulislah! (m)", category: "Kata Kerja" },
      { syriac: "ܫܡܥ", translit: "Shma'", meaning: "Dengarlah! (m)", category: "Kata Kerja" },
      { syriac: "ܬܘܒ", translit: "Tob", meaning: "Kembalilah! / Bertobatlah!", category: "Kata Kerja" }
    ],
    examples: [
      { syriac: "ܫܡܰܥ ܩܳܠܳܐ", translit: "Shma' qolo", phonetic: "Shma' qōlō", indonesian: "Dengarlah suara itu!" },
      { syriac: "ܟܬܽܘܒܝ ܐܺܓܪܰܬ݂ܳܐ", translit: "Kthoby igratha", phonetic: "Kthobym īgrathō", indonesian: "Tulislah (wahai wanita) surat itu!" }
    ],
    quizzes: [
      {
        id: 1401,
        question: "Bagaimanakah bentuk perintah 'Tulislah!' untuk satu orang Laki-laki?",
        options: ["Kthob (ܟܬܽܘܒ)", "Kthoby", "Kthobu", "Kthobnan"],
        correctAnswer: "Kthob (ܟܬܽܘܒ)",
        explanation: "Kthob (ܟܬܽܘܒ) adalah bentuk imperatif tunggal maskulin."
      },
      {
        id: 1402,
        question: "Sufiks huruf apa yang ditambahkan untuk memerintah satu orang Perempuan?",
        options: ["Huruf Alap", "Huruf Yodh (ܝ)", "Huruf Nun", "Huruf Waw"],
        correctAnswer: "Huruf Yodh (ܝ)",
        explanation: "Huruf Yodh (-y) ditambahkan di akhir verba perintah tunggal feminin (seperti 'Kthoby')."
      },
      {
        id: 1403,
        question: "Kata 'ܫܡܰܥ' (Shma') memiliki arti...",
        options: ["Katakanlah olehmu!", "Dengarlah olehmu (pria)!", "Tulislah!", "Masuklah!"],
        correctAnswer: "Dengarlah olehmu (pria)!",
        explanation: "Shma' adalah perintah tunggal maskulin untuk mendengar."
      },
      {
        id: 1404,
        question: "Bagaimanakah bentuk perintah untuk 'Kalian pria (jamak)'?",
        options: ["Kthob", "Kthoby", "Kthobu", "Kthobyan"],
        correctAnswer: "Kthobu",
        explanation: "Sufiks '-u' (konsonan Waw) menandakan bentuk perintah jamak maskulin."
      },
      {
        id: 1405,
        question: "Apakah arti dari kata dasar 'Tob' (ܬܘb)?",
        options: ["Makanlah!", "Bertobatlah! / Kembalilah!", "Mati!", "Dengarlah!"],
        correctAnswer: "Bertobatlah! / Kembalilah!",
        explanation: "Tob (ܬܘܒ) adalah seruan perintah rohani klasik untuk bertaubat atau kembali."
      }
    ]
  },
  {
    id: 15,
    title: "Kalimat Nomina (Persamaan Tanpa Kata Kerja)",
    titleSyriac: "ܡܠܬܐ ܫܡܝܬܐ",
    category: "Level A1",
    summary: "Memahami struktur pembentukan kalimat deklaratif sederhana tanpa verba (nominal sentence).",
    introduction: "Bahasa Aram tidak memerlukan kata kerja penghubung 'to be' (is/am/are) untuk membangun kalimat pernyataan identitas sederhana.",
    content: "Di dalam kalimat nomina, kata ganti orang sering bertindak langsung sebagai subjek sekaligus copula jika disandingkan tepat setelah kata benda predikat.\nContoh: \n- Alaha rabo = Allah itu agung.\n- Malpono-na (ܡܰܠܦܳܢܳܐ ܐ̱ܢܳܐ) = Saya adalah seorang guru (na = enklitik eno).",
    keyRules: [
      "Subjek + Adjektiva/Predikat disusun berdampingan untuk mencetak arti 'A adalah B'.",
      "Kombinasi kata ganti enklitik pendek sering dilekatkan erat di belakang predikat."
    ],
    vocabulary: [
      { syriac: "ܐܠܗܐ", translit: "Alaha", meaning: "Allah / Tuhan", category: "Nomina" },
      { syriac: "ܢܘܗܪܐ", translit: "Nuhra", meaning: "Terang / Cahaya", category: "Nomina" },
      { syriac: "ܚܫܘܟܐ", translit: "Hshokha", meaning: "Kegelapan", category: "Nomina" }
    ],
    examples: [
      { syriac: "ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ ܗܽܘ", translit: "Alaha nuhra hu", phonetic: "Alaho nūhrō hū", indonesian: "Allah adalah terang (Allah terang Dia)" },
      { syriac: "ܚܢܰܢ ܬܰܠܡܺܝܕ̈ܶܐ", translit: "Hnan talmide", phonetic: "Ḥnan talmīdē", indonesian: "Kami adalah murid-murid" }
    ],
    quizzes: [
      {
        id: 1501,
        question: "Dalam tata bahasa Aram, kalimat nomina (tanpa kata kerja) dibentuk dengan cara...",
        options: ["Menyandingkan Subjek dan Predikat langsung", "Wajib menyisipkan kata kerja 'To be'", "Menambah partikel tanya", "Selalu menaruh objek di awal"],
        correctAnswer: "Menyandingkan Subjek dan Predikat langsung",
        explanation: "Pecahan nomina didampingkan langsung menyemburkan arti kopula intrinsik."
      },
      {
        id: 1502,
        question: "Terjemahan harfiah kalimat 'Alaha nuhra hu' (ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ ܗܽܘ) adalah...",
        options: ["Allah ada kegelapan", "Allah adalah terang", "Terang milik Allah", "Di dalam terang Allah"],
        correctAnswer: "Allah adalah terang",
        explanation: "Alaha = Allah, nuhra = terang, hu = dia (berperan sebagai copula). Maka 'Allah adalah terang'."
      },
      {
        id: 1503,
        question: "Penghubung pendek 'na' pada 'Malpono na' berasal dari ringkasan kata ganti...",
        options: ["Eno (Saya)", "At (Kamu)", "Hu (Dia)", "Hnan (Kami)"],
        correctAnswer: "Eno (Saya)",
        explanation: "Enklitik 'na/no' diserap dari pronoun utama Eno (Saya)."
      },
      {
        id: 1504,
        question: "Apakah arti dari kata 'Nuhra'?",
        options: ["Kegelapan", "Terang / Cahaya", "Air", "Roti"],
        correctAnswer: "Terang / Cahaya",
        explanation: "Nuhra (ܢܘܗܪܐ) berarti terang, cahaya, atau sinar."
      },
      {
        id: 1505,
        question: "Frase 'Hnan talmide' berarti...",
        options: ["Mereka adalah guru", "Kami adalah murid-murid", "Kalian adalah raja", "Saya adalah utusan"],
        correctAnswer: "Kami adalah murid-murid",
        explanation: "Hnan = kami, talmide = murid-murid (jamak). Berarti 'Kami adalah murid-murid'."
      }
    ]
  },
  {
    id: 16,
    title: "Partikel Eksistensi (Ith u-Layt)",
    titleSyriac: "ܐܝܬ ܘܠܝܬ",
    category: "Level A1",
    summary: "Penggunaan partikel keberadaan 'Ith' (Ada) dan ketiadaan 'Layt' (Tidak Ada).",
    introduction: "Untuk menyatakan keberadaan ('there is / there are') atau ketidakadaan, bahasa Aram menggunakan partikel khusus.",
    content: "Partikel ini adalah:\n1. Ith (ܐܝܬ) : Ada / Eksis (sejajar dengan kata Arab 'Yujad' atau Ibrani 'Yesh').\n2. Layt (ܠܝܬ) : Tidak ada (kontraksi dari 'La-Ith').\n\nSering ditampeli akhiran kata ganti untuk kepemilikan. Misal: Ith-ly (ܐܝܬ ܠܝ) = Ada pada saya / Saya punya.",
    keyRules: [
      "Ith + subjek menyatakan eksistensi.",
      "Sufiks preposisi L- (l-y, l-akh) setelah Ith melambangkan makna kepemilikan murni."
    ],
    vocabulary: [
      { syriac: "ܐܝܬ", translit: "Ith", meaning: "Ada", category: "Partikel" },
      { syriac: "ܠܝܬ", translit: "Layt", meaning: "Tidak ada", category: "Partikel" },
      { syriac: "ܐܝܬ ܠܝ", translit: "Ith ly", meaning: "Saya mempunyai (ada bagi saya)", category: "Partikel" }
    ],
    examples: [
      { syriac: "ܐܝ݂ܬ݂ ܠܰܗܡܳܐ ܒ݁ܒ݂ܰܝܬܳܐ", translit: "Ith lakhma b-bayto", phonetic: "Īt laḥmō b-baytō", indonesian: "Ada roti di dalam rumah" },
      { syriac: "ܠܰܝܬ݁ ܐܰܠܳܗܳܐ ܐ̱ܚܪܺܝܢܳܐ", translit: "Layt Alaha hrina", phonetic: "Layt Alaho ḥrīnō", indonesian: "Tidak ada allah lain" }
    ],
    quizzes: [
      {
        id: 1601,
        question: "Partikel manakah yang menyatakan makna 'Ada / Eksis'?",
        options: ["Layt", "Ith (ܐܝܬ)", "La", "Ina"],
        correctAnswer: "Ith (ܐܝܬ)",
        explanation: "Ith (ܐܝܬ) melambangkan kehadiran atau eksistensi ('ada')."
      },
      {
        id: 1602,
        question: "Kata 'Layt' (ܠܝܬ) tersusun atas peleburan gabungan partikel...",
        options: ["La + Ith (Tidak + Ada)", "Ith + Ly (Ada + Milikku)", "Eno + At (Saya + Kamu)", "La + Alaha (Tidak + Allah)"],
        correctAnswer: "La + Ith (Tidak + Ada)",
        explanation: "Layt secara etimologis adalah ligan penolakan 'La' (Tidak) dan 'Ith' (Ada)."
      },
      {
        id: 1603,
        question: "Ungkapan mengekspresikan kepunyaan 'Saya memiliki' dilambangkan dengan...",
        options: ["Ith ly (ܐܝܬ ܠܝ)", "Layt ly", "Eno Alaha", "Hu malka"],
        correctAnswer: "Ith ly (ܐܝܬ ܠܝ)",
        explanation: "Ith ly secara literal berarti 'ada bagi saya', padanan konstruksi kepemilikan."
      },
      {
        id: 1604,
        question: "Apakah arti dari 'Layt lakhma b-bayto'?",
        options: ["Ada roti di rumah", "Tidak ada roti di rumah", "Rumah terbuat dari roti", "Saya membawa roti ke rumah"],
        correctAnswer: "Tidak ada roti di rumah",
        explanation: "Layt = tidak ada, lakhma = roti, b-bayto = di rumah. Berarti 'Tidak ada roti di rumah'."
      },
      {
        id: 1605,
        question: "Apakah arti dari kata 'Hrina' (ܐ̱ܚܪܺܝܢܳܐ)?",
        options: ["Satu", "Lain / Berbeda", "Agung", "Indah"],
        correctAnswer: "Lain / Berbeda",
        explanation: "Hrina (ܐ̱ܚܪܺܝܢܳܐ) berarti lain atau yang lain."
      }
    ]
  },
  {
    id: 17,
    title: "Angka & Bilangan Dasar (Minyane)",
    titleSyriac: "ܡܢܝܢ̈ܐ ܫܪܫܝ̈ܐ",
    category: "Level A1",
    summary: "Mempelajari angka cardinal (1 sampai 10) beserta aturan maskulin dan femininnya.",
    introduction: "Sistem bilangan bahasa Aram memiliki keunikan pemisahan gender yang kontraintuitif (kebalikan gender nominal).",
    content: "Angka 1-5 faksi Maskulin:\n- Satu: ܚܰܕ (Had)\n- Dua: ܬܪܶܝܢ (Tren)\n- Tiga: ܬܠܳܬܳܐ (Tlatha)\n- Empat: ܐܰܪܒܥܳܐ (Arb'a)\n- Lima: ܚܰܡܫܳܐ (Hamsha).\n\nAngka 1-5 faksi Feminin:\n- Satu: ܚܕܳܐ (Hda)\n- Dua: ܬܰܪܬܶܝܢ (Tarten)\n- Tiga: ܬܠܳܬ (Tlat)\n- Empat: ܐܰܪܒܰܥ (Arba')\n- Lima: ܚܡܶܫ (Hmesh).",
    keyRules: [
      "Secara gramatikal, angka 3-10 maskulin menggunakan bentuk berakhiran '-a' (menggunakan akhiran feminin layaknya nomina), sedangkan versi femininnya tanpa akhiran '-a'."
    ],
    vocabulary: [
      { syriac: "ܚܕ", translit: "Had", meaning: "Satu (m)", category: "Angka" },
      { syriac: "ܬܪܝܢ", translit: "Tren", meaning: "Dua (m)", category: "Angka" },
      { syriac: "ܬܠܬܐ", translit: "Tlatha", meaning: "Tiga (m)", category: "Angka" }
    ],
    examples: [
      { syriac: "ܚܰܕ ܟܬܳܒܳܐ", translit: "Had kthobo", phonetic: "Had kthōbō", indonesian: "Satu buku" },
      { syriac: "ܬܠܳܬ݂ ܢܶܫܺܝ̈ܢ", translit: "Tlat neshin", phonetic: "Tlat neshīn", indonesian: "Tiga orang wanita" }
    ],
    quizzes: [
      {
        id: 1701,
        question: "Apakah bahasa Syriac dari bilangan 'Satu (m)' ?",
        options: ["Had (ܚܕ)", "Hda", "Tren", "Tlat"],
        correctAnswer: "Had (ܚܕ)",
        explanation: "Had adalah bilangan cardinal satu untuk nomina maskulin."
      },
      {
        id: 1702,
        question: "Bagaimanakah menyebut angka 'Dua (m)' ?",
        options: ["Tren (ܬܪܝܢ)", "Tarten", "Hamsha", "Arb'a"],
        correctAnswer: "Tren (ܬܪܝܢ)",
        explanation: "Tren melambangkan bilangan kardinal dua maskulin."
      },
      {
        id: 1703,
        question: "Bilangan feminim 'Tiga' tanpa akhiran '-a' adalah...",
        options: ["Tlatha", "Tlat (ܬܠܬ)", "Tren", "Hda"],
        correctAnswer: "Tlat (ܬܠܬ)",
        explanation: "Tlat (ܬܠܬ) dipakai untuk modifikasi hitungan nomina feminin."
      },
      {
        id: 1704,
        question: "Frase 'Had kthobo' berarti...",
        options: ["Satu surat", "Satu buku", "Dua buku", "Buku lama"],
        correctAnswer: "Satu buku",
        explanation: "Had = satu, kthobo = buku. Berarti 'Satu buku'."
      },
      {
        id: 1705,
        question: "Apakah arti dari angka 'Hamsha' (ܚܰܡܫܳܐ)?",
        options: ["Tiga", "Empat", "Lima", "Sepuluh"],
        correctAnswer: "Lima",
        explanation: "Hamsha (ܚܰܡܫܳܐ) melambangkan bilangan kardinal lima."
      }
    ]
  },
  {
    id: 18,
    title: "Kata Tanya Dasar (She'ele)",
    titleSyriac: "ܫܐܠ̈ܐ ܕܡܠܬܐ",
    category: "Level A1",
    summary: "Memahami interogasi dasar seperti 'Siapa', 'Apa', 'Di mana', 'Mengapa', dan 'Bagaimana'.",
    introduction: "Kata tanya (interrogative particle) mutlak diperlukan untuk membentuk struktur percakapan harian.",
    content: "Partikel interogatif utama:\n- Siapa: ܡܰܢ (Man)\n- Apa: ܡܳܢܳܐ (Mano / Mana)\n- Mengapa: ܡܶܛܽܠ ܡܳܢ (Metul-man)\n- Di mana: ܐܰܝܟܳܐ (Ayka)\n- Bagaimana: ܐܰܝܟܰܢ (Aykan).",
    keyRules: [
      "Kata depan diletakkan tepat di baris terdepan kalimat interogatif.",
      "Partikel tanya 'Man' (Siapa) ditulis dengan huruf Mim dan Nun."
    ],
    vocabulary: [
      { syriac: "ܡܢ", translit: "Man", meaning: "Siapa", category: "Kata Tanya" },
      { syriac: "ܡܢܘ", translit: "Mano", meaning: "Apa", category: "Kata Tanya" },
      { syriac: "ܐܝܟܐ", translit: "Ayka", meaning: "Di mana", category: "Kata Tanya" }
    ],
    examples: [
      { syriac: "ܡܰܢ ܐܰܢ݁ܬ݁", translit: "Man at", phonetic: "Man at", indonesian: "Siapakah kamu (pria)?" },
      { syriac: "ܐܰܝܟܳܐ ܗܽܘ ܒܰܝܬܳܐ", translit: "Ayka hu bayto", phonetic: "Ayko hū baytō", indonesian: "Di manakah rumah itu?" }
    ],
    quizzes: [
      {
        id: 1801,
        question: "Apakah arti kata tanya 'ܡܰܢ' (Man)?",
        options: ["Apa", "Siapa", "Mengapa", "Di mana"],
        correctAnswer: "Siapa",
        explanation: "Man (ܡܢ) melambangkan interogasi personal ('Siapa')."
      },
      {
        id: 1802,
        question: "Bagaimanakah mengekspresikan interogasi penunjuk lokasi 'Di mana'?",
        options: ["Ayka (ܐܝܟܐ)", "Aykan", "Mano", "Man"],
        correctAnswer: "Ayka (ܐܝܟܐ)",
        explanation: "Ayka (ܐܝܟܐ) adalah kata tanya lokatif ('Di mana')."
      },
      {
        id: 1803,
        question: "Kata 'ܡܶܛܽܠ ܡܳܢ' (Metul-man) berarti...",
        options: ["Bagaimana", "Mengapa / Karena Apa", "Kapan", "Berapa"],
        correctAnswer: "Mengapa / Karena Apa",
        explanation: "Metul-man secara harafiah berarti 'untuk apa' atau 'mengapa'."
      },
      {
        id: 1804,
        question: "Bagaimanakah menterjemahkan 'Apakah ini?' (ini = hono)?",
        options: ["Man hono", "Mano hono", "Ayka hono", "Aykan hono"],
        correctAnswer: "Mano hono",
        explanation: "Mano = apa, hono = ini (maskulin). Berarti 'Apakah ini?'."
      },
      {
        id: 1805,
        question: "Kata tanya 'Aykan' (ܐܰܝܟܰܢ) memiliki arti...",
        options: ["Kapan", "Berapa", "Bagaimana", "Siapa"],
        correctAnswer: "Bagaimana",
        explanation: "Aykan (ܐܰܝܟܰܢ) melambangkan kata tanya untuk cara atau metode ('Bagaimana')."
      }
    ]
  },
  {
    id: 19,
    title: "Kata Hubung & Konjungsi (Asare - Conjunctions)",
    titleSyriac: "ܐܣܪ̈ܐ ܕܡܠܬܐ",
    category: "Level A1",
    summary: "Aturan penggabungan klausa menggunakan kata hubung 'Dan', 'Tetapi', 'Atau', dan 'Sebab'.",
    introduction: "Konjungsi merekatkan elemen kata maupun kalimat majemuk terstruktur.",
    content: "Kata hubung dasar meliputi:\n- Dan: ܘ- (W- / Wa- melekat)\n- Atau: ܐܰܘ (Aw)\n- Tetapi / Namun: ܐܶܠܳܐ (Ela)\n- Sebab / Karena: ܡܶܛܽܠ ܕ݁- (Metul d-).\n- Jika: ܐܶܢ (En).",
    keyRules: [
      "Konjungsi 'W-' (Dan) menempel langsung di awal kata berikutnya tanpa dipisahkan spasi.",
      "Sedangkan 'Metul d-' menggabungkan preposisi 'Metul' (karena) dengan partikel relatif 'd-' (yang)."
    ],
    vocabulary: [
      { syriac: "ܐܠܐ", translit: "Ela", meaning: "Tetapi / Melainkan", category: "Konjungsi" },
      { syriac: "ܐܘ", translit: "Aw", meaning: "Atau", category: "Konjungsi" },
      { syriac: "ܐܢ", translit: "En", meaning: "Jika / Apabila", category: "Konjungsi" }
    ],
    examples: [
      { syriac: "ܐܰܒܳܐ ܘܐܶܡܳܐ", translit: "Aba w-Ema", phonetic: "Abō w-Emō", indonesian: "Bapa dan Ibu" },
      { syriac: "ܟܬܳܒܳܐ ܐܰܘ ܐܺܓܪܰܬ݂ܳܐ", translit: "Kthobo aw igratha", phonetic: "Kthōbō aw īgrathō", indonesian: "Buku atau surat" }
    ],
    quizzes: [
      {
        id: 1901,
        question: "Bagaimanakah cara menulis konjungsi 'Dan' dalam kalimat Aram?",
        options: ["Ditulis terpisah 'Aw'", "Dilekatkan langsung sebagai awalan 'W-' (ܘ)", "Menulis kata 'Ela'", "Dipasang di akhir kata benda"],
        correctAnswer: "Dilekatkan langsung sebagai awalan 'W-' (ܘ)",
        explanation: "Konjungsi 'Dan' diwakili oleh huruf Waw (ܘ) melekat di awal kata benda berikutnya."
      },
      {
        id: 1902,
        question: "Partikel 'ܐܶܠܳܐ' (Ela) menterjemahkan konsep...",
        options: ["Dan", "Atau", "Tetapi / Melainkan / Kecuali", "Sebab"],
        correctAnswer: "Tetapi / Melainkan / Kecuali",
        explanation: "Ela melambangkan pengecualian atau pertentangan ('tetapi' / 'kecuali')."
      },
      {
        id: 1903,
        question: "Kata 'ܐܶܢ' (En) menyajikan prasyarat...",
        options: ["Karena", "Jika / Bilamana", "Apakah", "Siapa"],
        correctAnswer: "Jika / Bilamana",
        explanation: "En (ܐܢ) adalah partikel kondisional 'jika'."
      },
      {
        id: 1904,
        question: "Frase 'Aba w-Ema' berarti...",
        options: ["Ayah dan Anak", "Bapa dan Ibu", "Hari dan Bulan", "Guru dan Murid"],
        correctAnswer: "Bapa dan Ibu",
        explanation: "Aba = bapa, w- = dan, Ema = ibu. Berarti 'Bapa dan Ibu'."
      },
      {
        id: 1905,
        question: "Apakah arti dari 'Metul d-'?",
        options: ["Tetapi", "Atau", "Karena / Sebab", "Jika tidak"],
        correctAnswer: "Karena / Sebab",
        explanation: "Metul d- secara umum diartikan sebagai 'karena' atau 'sebab'."
      }
    ]
  },
  {
    id: 20,
    title: "Sintaksis & Analisis Doa Klasik 'Abun d-Bashmayya'",
    titleSyriac: "ܨܠܘܬܐ ܡܪܢܝܬܐ",
    category: "Level A1",
    summary: "Refleksi dan pembongkaran tata bahasa dari doa klasik 'Bapa Kami' dalam bahasa Aram Syriac.",
    introduction: "Modul penutup Level A1 ini menggabungkan semua komponen tata bahasa dasar ke dalam telaah teks doa Kristen legendaris.",
    content: "Abun d-bashmayya (Bapa kami yang ada di surga):\n- Abun: Abu (Bapa) + -n (sufiks kami).\n- d-bashmayya: d- (relatif yang) + b- (preposisi di) + shmayya (surga).\nNethqadash shmakh (Dikuduskanlah nama-Mu):\n- Nethqadash: Kata kerja pasif (Akan dikuduskan).\n- shmakh: shem (nama) + -akh (sufiks kepemilikan-Mu).",
    keyRules: [
      "Penerapan gabungan noun suffix, preposisi melekat, dan bentukan verba pasif terpadu.",
      "Menganalisa teks otentik mengukuhkan pemahaman seluruh gramatika dasar A1."
    ],
    vocabulary: [
      { syriac: "ܐܒܘܢ", translit: "Abun", meaning: "Bapa Kami (Abu + -n)", category: "Teologi" },
      { syriac: "ܫܡܝܐ", translit: "Shmayya / Shmoyo", meaning: "Surga", category: "Teologi" },
      { syriac: "ܢܬܩܕܫ", translit: "Nethqadash", meaning: "Akan dikuduskan (Pasif)", category: "Teologi" }
    ],
    examples: [
      { syriac: "ܐܒܘܢ ܕܒܫܡܝܐ", translit: "Abun d-bashmayya", phonetic: "Abūn d-bashmayō", indonesian: "Bapa kami yang di surga" },
      { syriac: "ܢܬܩܕܫ ܫܡܟ", translit: "Nethqadash shmakh", phonetic: "Nethqadash shmokh", indonesian: "Dikuduskanlah nama-Mu" }
    ],
    quizzes: [
      {
        id: 2001,
        question: "Sufiks akhiran '-un' pada kata 'Abun' menterjemahkan kepemilikan...",
        options: ["Milikku", "Milikmu (pria)", "Milik kami / Bapa Kami", "Milik mereka"],
        correctAnswer: "Milik kami / Bapa Kami",
        explanation: "Sufiks akhiran '-un/-nan' melambangkan kepemilikan jamak orang pertama ('Kami')."
      },
      {
        id: 2002,
        question: "Penggalan komponen 'd-b-shmayya' memiliki arti literal...",
        options: ["Dan di surga", "Milik surga", "Yang berada di dalam surga", "Surga mulia"],
        correctAnswer: "Yang berada di dalam surga",
        explanation: "Terdiri berurutan atas d- (Yang) + b- (Di dalam) + shmayya (Surga)."
      },
      {
        id: 2003,
        question: "Kata 'ܫܡܳܟ݂' (Shmakh / Shmokh) berarti...",
        options: ["Namanya", "Nama-Mu (tunggal maskulin)", "Nama kami", "Nama agung"],
        correctAnswer: "Nama-Mu (tunggal maskulin)",
        explanation: "Sufiks akhiran '-akh' menunjukkan kepemilikan orang kedua tunggal maskulin ('-Mu')."
      },
      {
        id: 2004,
        question: "Apakah arti dari kata kerja 'Nethqadash'?",
        options: ["Mari berdoa", "Dikuduskanlah / Dianggap suci (pasif)", "Datanglah", "Jadilah"],
        correctAnswer: "Dikuduskanlah / Dianggap suci (pasif)",
        explanation: "Nethqadash berasal dari bentuk pasif intensif dari kata dasar Qadash (kudus)."
      },
      {
        id: 2005,
        question: "Kata 'Shmayya' (ܫܡܝܐ) berarti...",
        options: ["Dunia", "Bumi", "Surga / Langit", "Lautan"],
        correctAnswer: "Surga / Langit",
        explanation: "Shmayya melambangkan langit atau surga."
      }
    ]
  }
];
