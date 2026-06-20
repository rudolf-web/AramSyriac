import { Module } from "../types";

export const modulesB1: Module[] = [
  {
    id: 41,
    title: "Kata Kerja Lemah & Konsonan Tenggorokan",
    titleSyriac: "ܡܰܠܝ̈ܳܬ݂ܳܐ ܟ݁ܪ̈ܺܝܗܳܬ݂ܳܐ",
    category: "Level B1",
    summary: "Aturan konjugasi kata kerja yang mengandung huruf lemah (Yodh, Alap, Waw) atau konsonan tenggorokan.",
    introduction: "Kata kerja lemah (weak verbs) mengalami penyusutan vokal atau penghilangan konsonan di dalam konjugasi tertentu.",
    content: "Konsonan lemah seperti Alap (ܐ), Waw (ܘ), atau Yodh (ܝ), serta huruf tenggorokan (Ayn ܥ, Heth ܚ) seringkali memicu modifikasi vokal demi kelapangan artikulasi bunyi Semitik.\nContoh: Qam (ܩܳܡ - berdiri) yang aslinya memiliki huruf tengah Waw (q-w-m). Saat perfect 3ms, huruf Waw-nya terserap menjadi vokal panjang.",
    keyRules: [
      "Kandungan huruf lemah merubah pola reguler sufiks verba.",
      "Konsonan guttural (tenggorokan) menolak geminasi (pengetatan ganda) di pola Pael."
    ],
    vocabulary: [
      { syriac: "ܩܡ", translit: "Qam", meaning: "Dia telah berdiri (lemah tengah Waw)", category: "Verba Lemah" },
      { syriac: "ܚܙܐ", translit: "Hzo", meaning: "Dia telah melihat (lemah akhir Alap/Yodh)", category: "Verba Lemah" },
      { syriac: "ܡܝܬ", translit: "Mith", meaning: "Dia telah mati", category: "Verba Lemah" }
    ],
    examples: [
      { syriac: "ܩܳܡ ܡܰܠܟܳܐ", translit: "Qam malka", phonetic: "Qom malko", indonesian: "Sang raja telah berdiri" },
      { syriac: "ܚܙܳܐ ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ", translit: "Hzo Alaha nuhra", phonetic: "Ḥzō Alaho nūhrō", indonesian: "Allah telah melihat terang itu" }
    ],
    quizzes: [
      {
        id: 4101,
        question: "Apakah yang dimaksud dengan 'Kata Kerja Lemah' (Weak Verbs) dalam bahasa Aram?",
        options: ["Kata kerja yang jarang dipakai", "Kata kerja yang mengandung huruf Alap, Waw, atau Yodh", "Kata kerja yang tidak memiliki subjek", "Kata kerja benda"],
        correctAnswer: "Kata kerja yang mengandung huruf Alap, Waw, atau Yodh",
        explanation: "Huruf Alap, Waw, dan Yodh adalah konsonan lemah (quiescent) yang dapat luluh atau berasimilasi."
      },
      {
        id: 4102,
        question: "Kata kerja 'ܩܳܡ' (Qam) sebenarnya diturunkan dari akar kata triliteral asli...",
        options: ["q-w-m (ܩ-ܘ-ܡ)", "q-m-m", "q-y-m", "m-l-k"],
        correctAnswer: "q-w-m (ܩ-ܘ-ܡ)",
        explanation: "Qam adalah kata kerja berongga (hollow) dengan vokal tengah Waw yang luluh."
      },
      {
        id: 4103,
        question: "Akibat dari keberadaan huruf guttural (tenggorokan, seperti ܥ atau ܚ) pada kata kerja adalah...",
        options: ["Mengubah total arti kata", "Menolak geminasi/penekanan ganda pada kategori Pael", "Membuat kata tidak bisa dijamakkan", "Menjadi kata sifat"],
        correctAnswer: "Menolak geminasi/penekanan ganda pada kategori Pael",
        explanation: "Guttural memiliki artikulasi unik yang resisten terhadap penekanan ganda (geminasi)."
      },
      {
        id: 4104,
        question: "Apakah arti dari kata kerja lemah 'Hzo' (ܚܙܐ)?",
        options: ["Mendengar", "Melihat", "Berdiri", "Mati"],
        correctAnswer: "Melihat",
        explanation: "Hzo / Ḥzō berarti melihat, menengok, atau memandang."
      },
      {
        id: 4105,
        question: "Bentuk lampau 'Mith' (ܡܝܬ) berarti...",
        options: ["Dia telah bangkit", "Dia telah mati", "Dia telah lari", "Dia telah lahir"],
        correctAnswer: "Dia telah mati",
        explanation: "Mith berasal dari akar m-w-t, mengekspresikan perihal kematian."
      }
    ]
  },
  {
    id: 42,
    title: "Sintaksis Majemuk & Hubungan Subordinatif",
    titleSyriac: "ܣܺܝܳܩܳܐ ܡܰܓ݁ܕ݁ܠܳܐ",
    category: "Level B1",
    summary: "Membuat konstruksi kompleks menggunakan anak kalimat bertingkat.",
    introduction: "Level B1 menuntut kemampuan merangkai argumen kompleks dengan anak kalimat.",
    content: "Pola subordinatif dibentuk dengan menyematkan partikel relatif 'd-' (ܕ) di belakang konjugasi keterangan.\nContoh: Metul d- (karena yang / sebab), Men d- (semenjak yang), Ad d- (hingga saat yang). Ini mempermudah penyusunan klausa akibat-sebab yang kohesif dalam diskusi analitis.",
    keyRules: [
      "Perpaduan konjungsi d- merekatkan klausa utama dengan klausa pelengkap.",
      "Sering memicu perubahan susunan kata kerja ke awal anak kalimat."
    ],
    vocabulary: [
      { syriac: "ܡܛܠ ܕ", translit: "Metul d-", meaning: "Sebab / Karena yang", category: "Sintaksis" },
      { syriac: "ܐܝܟܢܐ ܕ", translit: "Aykan d-", meaning: "Sehingga / Agar yang", category: "Sintaksis" },
      { syriac: "ܡܢ ܕ", translit: "Men d-", meaning: "Semenjak yang", category: "Sintaksis" }
    ],
    examples: [
      { syriac: "ܐܳܡܪܶܬ݂ ܠܟ݂ܽܘܢ ܡܶܛܽܠ ܕ݁ܰܚܙܰܝܬܽܘܢ", translit: "Amreth lakhon metul d-hazayton", phonetic: "Amret l-khūn metul d-ḥazayton", indonesian: "Aku berkata kepadamu karena kalian telah melihat" },
      { syriac: "ܐܰܝܟ݁ܰܢ ܕ݁ܢܶܫܡܥܽܘܢ ܩܳܠܳܐ", translit: "Aykan d-neshme'un qolo", phonetic: "Aykan d-neshme`ūn qōlō", indonesian: "Sehingga mereka akan mendengar suara itu" }
    ],
    quizzes: [
      {
        id: 4201,
        question: "Partikel satu huruf apakah yang mutlak mengunci sifat subordinatif anak kalimat?",
        options: ["B-", "W-", "D- (ܕ)", "L-"],
        correctAnswer: "D- (ܕ)",
        explanation: "Partikel relatif D- (ܕ) disematkan untuk menyambung anak kalimat bertingkat."
      },
      {
        id: 4202,
        question: "Apakah arti dari frasa penggabung 'Aykan d-'?",
        options: ["Semenjak dahulu", "Agar supaya / Sehingga", "Karena siapa", "Di bawah kolong"],
        correctAnswer: "Agar supaya / Sehingga",
        explanation: "Aykan d- berarti 'dengan cara yang' atau 'supaya/sehingga'."
      },
      {
        id: 4203,
        question: "Terjemahan dari 'Amreth lakhon metul d-hazayton' adalah...",
        options: ["Aku berkata kepadamu karena kalian telah melihat", "Kamu mendengar karena kami pergi", "Dia telah menulis apa yang didengarnya", "Mereka bangkit setelah mati"],
        correctAnswer: "Aku berkata kepadamu karena kalian telah melihat",
        explanation: "Amreth (saya berkata) + lakhon (kepada kalian) + metul d- (karena) + hazayton (kalian melihat)."
      },
      {
        id: 4204,
        question: "Konjungsi 'Men d-' mengekspresikan relasi...",
        options: ["Asal-usul temporal (sejak / semenjak)", "Pertentangan ekstrem", "Pertanyaan lokasi", "Alasan tujuan"],
        correctAnswer: "Asal-usul temporal (sejak / semenjak)",
        explanation: "Men d- berarti 'sejak yang' atau 'semenjak'."
      },
      {
        id: 4205,
        question: "Sintaksis majemuk Syriac umumnya memposisikan kata kerja anak kalimat di...",
        options: ["Ujung paragraf", "Samping kata benda subjek langsung", "Awal anak kalimat", "Dalam kurung"],
        correctAnswer: "Awal anak kalimat",
        explanation: "Secara sintaksis klasik, verba sering melompat mendahului subjek di awal klausul subordinat."
      }
    ]
  },
  {
    id: 43,
    title: "Puitika & Metrum Sastra Syriac Klasik",
    titleSyriac: "ܡܶܫܚܳܬ݂ܳܐ ܕ݁ܣܶܦ݂ܪܽܘܬ݂ܳܐ Sota",
    category: "Level B1",
    summary: "Memahami gaya puitis, rima, dan metrum (Madrashe u-Memre) dari Ephrem Pemusik.",
    introduction: "Sastra Syriac kuno sangat termasyhur lewat puitika teologis (hymns) bermetrum seni tinggi.",
    content: "Pustaka puitis terbagi menjadi:\n1. Memre (ܡܺܐܡܪ̈ܶܐ) : Homili puitis berbentuk narasi meter teratur (misalnya 7-7 suku kata milik St. Ephrem).\n2. Madrashe (ܡܰܕ݂ܪ̈ܳܫܶܐ) : Nyanyian paduan suara teologis dengan bait bertingkat dan refrein indah.",
    keyRules: [
      "Metrum Syriac dihitung murni berdasarkan jumlah suku kata (syllabic meter), bukan suku kata panjang-pendek (kuantitatif Yunani)."
    ],
    vocabulary: [
      { syriac: "ܡܐܡܪܐ", translit: "Memra", meaning: "Wacana puitis / Homili", category: "Sastra" },
      { syriac: "ܡܕܪܫܐ", translit: "Madrasha", meaning: "Hymne pengajaran", category: "Sastra" },
      { syriac: "ܡܪܢܝܬܐ", translit: "Mranita", meaning: "Pujian rohani", category: "Sastra" }
    ],
    examples: [
      { syriac: "ܡܺܐܡܪܳܐ ܕ݁ܡܳܪܝ ܐܶܦ݂ܪܶܝܡ", translit: "Memra d-Mar Ephrem", phonetic: "Memrō d-Mor Ephrem", indonesian: "Puisi/Homili dari Santo Ephrem" },
      { syriac: "ܩܳܠܳܐ ܕ݁ܡܰܕ݂ܪܳܫܳܐ", translit: "Qolo d-madrasha", phonetic: "Qōlō d-madrashō", indonesian: "Melodi/Suara nyanyian teologis" }
    ],
    quizzes: [
      {
        id: 4301,
        question: "Apakah perbedaan mendasar sistem bait/metrum (meter) puitis Syriac dibanding Yunani kuno?",
        options: ["Mengikuti panjang pendek suara", "Menggunakan jumlah suku kata konstan (Syllabic Meter)", "Hanya ditulis lisan tanpa rima", "Ditulis dari kiri ke kanan"],
        correctAnswer: "Menggunakan jumlah suku kata konstan (Syllabic Meter)",
        explanation: "Metrum Syriac berakar pada struktur silabis tegap (misal metrum 7 suku kata per baris)."
      },
      {
        id: 4302,
        question: "Istilah teologis untuk homili berparagraf puitis penceritaan adalah...",
        options: ["Malktha", "Memre (ܡܺܐܡܪ̈ܶܐ)", "Meyya", "Mayya"],
        correctAnswer: "Memre (ܡܺܐܡܪ̈ܶܐ)",
        explanation: "Memre melambangkan diskursus puitik penceritaan teologi."
      },
      {
        id: 4303,
        question: "Nyanyian teologis paduan suara bersahut-sahutan dengan refrain disebut...",
        options: ["Madrasha (ܡܕܪܫܐ)", "Memra", "Aryo", "Mdintha"],
        correctAnswer: "Madrasha (ܡܕܪܫܐ)",
        explanation: "Madrasha adalah kidung bernilai edukatif rohani (hymns of instruction)."
      },
      {
        id: 4304,
        question: "Siapakah pujangga/teolog Syriac abad ke-4 paling tenar yang metrumnya dipakai sebagai standar emas?",
        options: ["Rudolf Luhukay", "St. Ephrem dari Nisibis / Mar Ephrem", "Bar Hebraeus", "Yuhanon d-Dara"],
        correctAnswer: "St. Ephrem dari Nisibis / Mar Ephrem",
        explanation: "Mar Ephrem Syrus adalah bapa puitika Syriac termasyhur pelopor ribuan homili puitik."
      },
      {
        id: 4305,
        question: "Apakah arti literal dari kata 'Madrasha'?",
        options: ["Sekolah", "Pengajaran / Pencarian makna mendalam", "Lautan lepas", "Reruntuhan"],
        correctAnswer: "Pengajaran / Pencarian makna mendalam",
        explanation: "Madrasha berkerabat dengan radas (mengkaji/belajar), melambangkan lagu edukatif penuh pengajaran."
      }
    ]
  },
  {
    id: 44,
    title: "Varian Dialek Serto, Estrangela & Madnhaya",
    titleSyriac: "ܐܣܛܪܢܓܠܐ ܘܣܪܛܐ ܘܡܕܢܝܚܐ",
    category: "Level B1",
    summary: "Memahami perbedaan ortografi, aksara, dan fonologi tiga dialek besar Syriac.",
    introduction: "Bahasa Syriac mengkristal dalam tiga aksara besar seiring sejarah perkembangan teologinya.",
    content: "Tiga Font/Gaya Penulisan:\n1. Estrangela (ܐܣܛܪܢܓܠܐ) : Gaya klasik tertua, formal, tebal, monumental.\n2. Serto (ܣܶܪܛܳܐ) : Gaya Barat (Antiokhia), kursif tipis, vokal Yunani kecil.\n3. Madnhaya (ܡܰܕ݂ܢܚܳܝܳܐ) : Gaya Timur (Persia/Assyria), tegap, vokal sistem titik ganda.",
    keyRules: [
      "Pelafalan vokal Zqapha di Barat berbunyi 'o', sedangkan di Timur berbunyi 'a' panjang."
    ],
    vocabulary: [
      { syriac: "ܐܣܛܪܢܓܠܐ", translit: "Estrangela", meaning: "Gaya tulisan bulat klasik", category: "Ortografi" },
      { syriac: "ܣܪܛܐ", translit: "Serto", meaning: "Gaya tulisan barat (linier/tipis)", category: "Ortografi" },
      { syriac: "ܡܕܢܚܝܐ", translit: "Madnhaya", meaning: "Gaya tulisan timur (terang/fajar)", category: "Ortografi" }
    ],
    examples: [
      { syriac: "ܒܰܝܬܳܐ", translit: "Bayto", phonetic: "Baytō (Barat)", indonesian: "Rumah (Aksen Barat)" },
      { syriac: "ܒܰܝܬ݁ܳܐ", translit: "Bayta", phonetic: "Baytā (Timur)", indonesian: "Rumah (Aksen Timur)" }
    ],
    quizzes: [
      {
        id: 4401,
        question: "Gaya penulisan monumental tertua yang dipakai menyalin naskah Injil kuno adalah...",
        options: ["Serto", "Estrangela (ܐܣܛܪܢܓܠܐ)", "Madnhaya", "Kufik"],
        correctAnswer: "Estrangela (ܐܣܛܪܢܓܠܐ)",
        explanation: "Estrangela melambangkan bentuk orisinil huruf cetak monumental bulat."
      },
      {
        id: 4402,
        question: "Dialek Barat (Serto) melfalkan tanda vokal Zqapha sebagai...",
        options: ["Vokal 'a' pendek", "Vokal 'o' bulat", "Vokal 'i' renggang", "Vokal 'u' berat"],
        correctAnswer: "Vokal 'o' bulat",
        explanation: "Di Barat Barat (Barat), Zqapha dibunyikan sebagai 'o' (misal: Shlomo)."
      },
      {
        id: 4403,
        question: "Aksara 'Madnhaya' secara etimologis berati...",
        options: ["Bulat orisinil", "Garis lurus", "Timur / Terbitnya fajar", "Rahasia"],
        correctAnswer: "Timur / Terbitnya fajar",
        explanation: "Madnhaya berasal dari akar d-n-h (terbit/fajar), mencirikan aliran Timur (Persia)."
      },
      {
        id: 4404,
        question: "Bagaimanakah bunyi kata 'Damai' (ܫܠܡܐ) dalam aksen Timur (Madnhaya)?",
        options: ["Shlomo", "Shlama", "Shlomet", "Shlimu"],
        correctAnswer: "Shlama",
        explanation: "Timur mempertahankan bunyi vokal aseli Semitik A-panjang 'Shlama'."
      },
      {
        id: 4405,
        question: "Sistem penanda vokal Serto Barat diletakkan menggunakan simbol huruf...",
        options: ["Koptik kuno", "Yunani berukuran mini", "Ibrani kuno", "Fenisia"],
        correctAnswer: "Yunani berukuran mini",
        explanation: "Serto menggunakan modifikasi huruf vokal Yunani mini sebagai indikator suara."
      }
    ]
  },
  {
    id: 45,
    title: "Pola Pasif Intensif Ethpaal (Eth-pa-al)",
    titleSyriac: "ܡܠܬܐ ܕܐܬ݁ܦ݁ܰܥܰܠ",
    category: "Level B1",
    summary: "Memahami struktur pembentukan konjugasi pasif intensif Ethpaal.",
    introduction: "Keluarga verba kategorial Ethpaal melambangkan bentuk pasif reflektif dari pola aktif Pael (intensif).",
    content: "Dibentuk dengan menyematkan prefiks 'Eth-' (ܐܬ) dipadu dengan vokal ganda 'a' tebal di tengah verba.\nContoh perbandingan:\n- Shabbah (Pael): Memuji.\n- Ethshabbah (Ethpaal): Telah mulia / Dipuji berat.\n- Qaddesh (Pael): Menyucikan.\n- Ethqaddash (Ethpaal): Telah disucikan gila-gilaan.",
    keyRules: [
      "Ethpaal mempertahankan geminasi huruf kedua layaknya Pael aktif.",
      "Vokal tengah berubah menjadi Pthaha (a) tebal menggantikan Rbasa (e) milik Pael."
    ],
    vocabulary: [
      { syriac: "ܐܬܫܒܚ", translit: "Ethshabbah", meaning: "Telah dimuliakan", category: "Verba Ethpaal" },
      { syriac: "ܐܬܩܕܫ", translit: "Ethqaddash", meaning: "Telah disucikan", category: "Verba Ethpaal" },
      { syriac: "ܐܬܡܠܠ", translit: "Ethmallah", meaning: "Telah dibicarakan", category: "Verba Ethpaal" }
    ],
    examples: [
      { syriac: "ܐܶܬ݂ܫܰܒ݁ܰܚ ܫܡܳܟ݂", translit: "Ethshabbah shmakh", phonetic: "Ethshabbaḥ shmokh", indonesian: "Telah dimuliakanlah nama-Mu" },
      { syriac: "ܐܶܬ݂ܩܰܕ݁ܰܫ ܗܰܝܟܠܳܐ", translit: "Ethqaddash haykla", phonetic: "Ethqaddash hayklō", indonesian: "Bait suci itu telah dikuduskan dengan agung" }
    ],
    quizzes: [
      {
        id: 4501,
        question: "Ethpaal adalah modifikasi pasif-reflektif khusus dari stem...",
        options: ["Peal", "Pael (Intensif)", "Aphel", "Shaphel"],
        correctAnswer: "Pael (Intensif)",
        explanation: "Ethpaal bersesuaian pasif langsung dengan perbuatan intensif Pael."
      },
      {
        id: 4502,
        question: "Perubahan vokal apakah yang dominan di akhir verba Ethpaal dibanding Pael?",
        options: ["Vokal Hbasa (i)", "Vokal Pthaha (a) menggantikan Rbasa (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)", "Vokal Esasa (u)", "Vokal Zqapha"],
        correctAnswer: "Vokal Pthaha (a) menggantikan Rbasa (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)",
        explanation: "Vokal tengah bergeser ke 'a' tebal (Pthaha) mencirikan struktur pasif intensif."
      },
      {
        id: 4503,
        question: "Apakah makna dari kata 'ܐܶܬ݂ܫܰܒ݁ܰܚ' (Ethshabbah)?",
        options: ["Telah memuji", "Telah dimuliakan / dipuji mulia", "Telah menulis", "Telah mendikte"],
        correctAnswer: "Telah dimuliakan / dipuji mulia",
        explanation: "Berasal dari kata dasar Shabbah (memuji) pasif intensif."
      },
      {
        id: 4504,
        question: "Pola Ethpaal orisinil 3ms ditandai awalan huruf...",
        options: ["ܐܬ- (Eth-)", "ܢ- (N-)", "ܡ- (M-)", "ܠ- (L-)"],
        correctAnswer: "ܐܬ- (Eth-)",
        explanation: "Sistem pasif melingkar konsisten diawali ligan Eth-. "
      },
      {
        id: 4505,
        question: "Terjemahan 'Ethqaddash haykla' adalah...",
        options: ["Bait suci itu menguduskan", "Bait suci itu telah dikuduskan", "Rumah bapa besar", "Saya telah disucikan"],
        correctAnswer: "Bait suci itu telah dikuduskan",
        explanation: "Ethqaddash = telah dikuduskan (pasif intensif), haykla = bait suci/kuil."
      }
    ]
  },
  {
    id: 46,
    title: "Idiom Teologis & Diplomasi Lanjut",
    titleSyriac: "ܡܰܫܠܡܳܢܽܘܬ݂ܳܐ ܕ݁ܡܶܠܶܐ",
    category: "Level B1",
    summary: "Telaah ungkapan teologis luhur, diplomasi kuno, dan bahasa sastra tinggi.",
    introduction: "Bahasa Syriac klasik sarat kiasan konseptual bercitarasa filsafat tinggi Semitik.",
    content: "Ungkapan khas Semiotik Klasik:\n- Bar Nasha (Anak Manusia / Spesies Manusia).\n- Naphsha (Jiwa / Diri Sendiri).\n- Mshiha Alaha (Kristus Allah).\n- Razin / Roze (Misteri mendalam/Sakramen).",
    keyRules: [
      "Pemahaman idiomatis mencegah salah terjemahan harfiah dalam menterjemahkan sastra kuno."
    ],
    vocabulary: [
      { syriac: "ܪܐܙܐ", translit: "Raza / Rozo", meaning: "Misteri / Sakramen", category: "Idiom" },
      { syriac: "ܒܪܢܫܐ", translit: "Bar Nasha", meaning: "Anak Manusia / Manusia", category: "Idiom" },
      { syriac: "ܢܦܫܐ", translit: "Naphsho", meaning: "Jiwa / Diri sendiri", category: "Idiom" }
    ],
    examples: [
      { syriac: "ܪܳܐܙܳܐ ܪܰܒܳܐ ܗܽܘ", translit: "Raza rabo hu", phonetic: "Rozō Rabō hū", indonesian: "Ini adalah misteri/sakramen yang agung" },
      { syriac: "ܢܰܦ݂ܫܳܐ ܫܰܦ݁ܺܝܪܬ݁ܳܐ", translit: "Naphsha shapirtha", phonetic: "Naphshō shapīrtō", indonesian: "Jiwa yang indah" }
    ],
    quizzes: [
      {
        id: 4601,
        question: "Kombinasi kata bermakna harfiah 'Anak Manusia' yang mewakili genus umat manusia adalah...",
        options: ["Bar Malka", "Bar Nasha (ܒܪܢܫܐ)", "Bar Alaha", "Bar Bayto"],
        correctAnswer: "Bar Nasha (ܒܪܢܫܐ)",
        explanation: "Bar Nasha adalah idiom terkenal Semitik menyatakan 'Anak Adam/Manusia'."
      },
      {
        id: 4602,
        question: "Istilah 'Rozo' or 'Raza' (ܪܐܙܐ) dalam literatur tradisi keagamaan Syriac mengacu kepada...",
        options: ["Hukum negara", "Misteri suci / Sakramen", "Makanan penutup", "Peta dunia"],
        correctAnswer: "Misteri suci / Sakramen",
        explanation: "Raza / Rozo berarti rahasia, misteri kosmis, atau sakramen ritual suci."
      },
      {
        id: 4603,
        question: "Kata 'Jiwa' atau 'Diri Sendiri' diekspresikan dengan kata...",
        options: ["Malktha", "Naphsha (ܢܦܫܐ)", "Nura", "Mayya"],
        correctAnswer: "Naphsha (ܢܦܫܐ)",
        explanation: "Naphsha melambangkan nafas hidup, jiwa, atau esensi ego diri."
      },
      {
        id: 4604,
        question: "Apakah arti dari 'Raza rabo hu'?",
        options: ["Raja telah pergi", "Ini adalah misteri/rahsa yang agung", "Airnya sangat jernih", "Rumah yang besar"],
        correctAnswer: "Ini adalah misteri/rahsa yang agung",
        explanation: "Raza = misteri, rabo = agung/besar, hu = dia (is). Berarti 'Misteri agung hal ini'."
      },
      {
        id: 4605,
        question: "Bagaimanakah menyebut 'Anak Allah'?",
        options: ["Bar Nasha", "Bar Alaha (ܒܪ ܐܠܗܐ)", "Aba Alaha", "Malka Alaha"],
        correctAnswer: "Bar Alaha (ܒܪ ܐܠܗܐ)",
        explanation: "Bar = anak l, Alaha = Allah. Berarti Anak Allah."
      }
    ]
  },
  {
    id: 47,
    title: "Bedah Terjemahan Naskah Peshitta Kuno",
    titleSyriac: "ܟܬܳܒܳܐ ܩܰܕ݁ܺܝܫܳܐ ܕ݁ܫܰܠܚܶܐ",
    category: "Level B1",
    summary: "Mencerna secara komprehensif susunan kalimat dan kosa kata dari Alkitab Peshitta Aramaik.",
    introduction: "Peshitta (ܦܫܝܛܬܐ) artinya versi lugas/sederhana, menyajikan naskah sakral tertua bercitayasa tinggi.",
    content: "Analisa Injil Yohanes 1:1:\n'B-reshith ithawhy wa meltha...' (Pada mulanya adalah Firman...):\n- b-Reshith: b- (Preposisi pada) + reshith (permulaan/kepala).\n- ithawhy wa: Penegasan eksistensi kala lampau (Adalah Dia).\n- meltha: Sang Firman / Sabda.",
    keyRules: [
      "Membongkar teks Peshitta melatih kepekaan tata bahasa terhadap sastra abad ke-1 hingga ke-5 Masehi."
    ],
    vocabulary: [
      { syriac: "ܦܫܝܛܬܐ", translit: "Peshitta", meaning: "Sederhana / Versi Standar Peshitta", category: "Sastra" },
      { syriac: "ܒܪܫܝܬ", translit: "b-Reshith", meaning: "Pada mulanya", category: "Sastra" },
      { syriac: "ܡܠܬܐ", translit: "Meltha", meaning: "Firman / Sabda / Kata (Emphatic)", category: "Sastra" }
    ],
    examples: [
      { syriac: "ܒ݁ܪܺܫܺܝܬ݂ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ ܡܶܠܬ݂ܳܐ", translit: "B-reshith ithawhy wa meltha", phonetic: "B-rēshīt īthawhy wō melthō", indonesian: "Pada mulanya adalah Firman" },
      { syriac: "ܡܶܠܬ݂ܳܐ ܓ݁ܶܝܪ ܐܰܠܳܗܳܐ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ", translit: "Meltha ger Alaha ithawhy wa", phonetic: "Melthō gēr Alahō īthawhy wō", indonesian: "Firman itu adalah Allah" }
    ],
    quizzes: [
      {
        id: 4701,
        question: "Apakah nama terjemahan standar Alkitab bahasa Syriac yang legendaris?",
        options: ["Septuaginta", "Vulgata", "Peshitta (ܦܫܝܛܬܐ)", "Targum"],
        correctAnswer: "Peshitta (ܦܫܝܛܬܐ)",
        explanation: "Peshitta (makna harafiah: jujur/bebas/lugas) adalah Alkitab otoritas tradisi Syriac."
      },
      {
        id: 4702,
        question: "Penggapuran kata 'ܒ݁ܪܺܫܺܝܬ݂' (B-reshith) memiliki padanan bahasa Indonesia...",
        options: ["Milik kami", "Pada mulanya", "Di akhir hayat", "Hari esok"],
        correctAnswer: "Pada mulanya",
        explanation: "B- (pada) + resh (kepala/awal) + ith (akhiran nominatif) = pada mulanya."
      },
      {
        id: 4703,
        question: "Makna kata penunjuk 'Meltha' (ܡܶܠܬ݂ܳα) dalam Yohanes 1:1 merepresentasikan...",
        options: ["Sang Firman / Sang Sabda", "Anak Daud", "Air bah", "Kota suci"],
        correctAnswer: "Sang Firman / Sang Sabda",
        explanation: "Meltha (feminin dari maltha) melambangkan 'kata' atau 'Firman' (ekivalen Logos)."
      },
      {
        id: 4704,
        question: "Apakah arti kata 'Ger' (ܓ݁ܶܝܪ) yang sering ditemui di sela-sela kalimat Peshitta?",
        options: [" Tidak ada", "Sesungguhnya / Sebab / Karena", "Pergi", "Besok"],
        correctAnswer: "Sesungguhnya / Sebab / Karena",
        explanation: "Ger adalah partikel post-positif mengindikasikan kelanjutan sebab ('sebab/sesungguhnya')."
      },
      {
        id: 4705,
        question: "Ungkapan harafiah 'ithawhy wa' (ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ) setara dengan kopula Inggris...",
        options: ["Is", "Was (Kala Lampau)", "Will be", "Are"],
        correctAnswer: "Was (Kala Lampau)",
        explanation: "Ithawhy + wa melambangkan kopula keadaan masa lampau ('was/telah adalah')."
      }
    ]
  },
  {
    id: 48,
    title: "Pembentukan Kausatif Pasif Ettaphal",
    titleSyriac: "ܡܠܬܐ ܕܐܬ݁ܬ݁ܰܦ݂ܥܰܠ",
    category: "Level B1",
    summary: "Memahami struktur terdalam verba kausatif pasif Ettaphal.",
    introduction: "System verba terakhir yang dikaji di B1 adalah Ettaphal, bentuk pasif reflektif dari stem kausatif Aphel.",
    content: "Dibentuk dengan melampirkan prefiks 'Ett-' (ܐܬܬ - dua huruf Taw dengan daddan geminasi tebal).\nContoh perbandingan:\n- Anhar (Aphel): Telah menerangi.\n- Ettanhar (Ettaphal): Telah diterangi / Telah dibuat bersinar terang-benderang.",
    keyRules: [
      "Dua huruf Taw berjejer 'ܐܬܬ' mengidentifikasi status mutlak keluarga verba pasif tingkat kausatif tertinggi."
    ],
    vocabulary: [
      { syriac: "ܐܬܬܢܗܪ", translit: "Ettanhar", meaning: "Telah diterangi (Kausatif Pasif)", category: "Ettaphal" },
      { syriac: "ܐܬܬܩܝܡ", translit: "Ettaqam", meaning: "Telah didirikan / Dibangkitkan pasif", category: "Ettaphal" },
      { syriac: "ܐܬܬܣܝܡ", translit: "Ettasam", meaning: "Telah diletakkan / Ditetapkan", category: "Ettaphal" }
    ],
    examples: [
      { syriac: "ܐܶܬ݁ܬ݁ܰܢܗܰܪܘ ܒ݁ܢܽܘܗܪܳܐ", translit: "Ettanharu b-nuhra", phonetic: "Ettanharū b-nūhrō", indonesian: "Mereka telah dibuat diterangi oleh cahaya itu" },
      { syriac: "ܐܶܬ݁ܬ݁ܰܩܺܝܡ ܟܽܘܪܣܝܳܐ", translit: "Ettaqim kursya", phonetic: "Ettaqīm kursyō", indonesian: "Takhta itu telah didirikan" }
    ],
    quizzes: [
      {
        id: 4801,
        question: "Ettaphal adalah sistem pasif refleksif langsung dari kata kerja tingkat...",
        options: ["Peal", "Pael", "Aphel (Kausatif Aktif)", "Shaphel"],
        correctAnswer: "Aphel (Kausatif Aktif)",
        explanation: "Ettaphal menyajikan asimtot pasif dari perbuatan kausatif Aphel."
      },
      {
        id: 4802,
        question: "Apakah tanda ortografis visual mutlak permulaan kata kerja Ettaphal?",
        options: ["Double Taw 'ܐܬܬ' (Ett-)", "Nun", "Mim tunggal", "Waw"],
        correctAnswer: "Double Taw 'ܐܬܬ' (Ett-)",
        explanation: "Dua huruf Taw berdampingan melambangkan ciri khas asimilasi ganda Ettaphal."
      },
      {
        id: 4803,
        question: "Makna kata 'ܐܶܬ݁ܬ݁ܰܢܗܰܪ' (Ettanhar) adalah...",
        options: ["Menulis kembali", "Telah dibuat diterangi / bersinar", "Tolak", "Mengasihi diri"],
        correctAnswer: "Telah dibuat diterangi / bersinar",
        explanation: "Pasif kausatif dari menerangi (anhar) yaitu dijadikan diterangi."
      },
      {
        id: 4804,
        question: "Bentuk plural 3mp 'Ettanharu' ditandai penambahan huruf belakang...",
        options: ["Yodh", "Waw (ܘ)", "Nun", "Alap"],
        correctAnswer: "Waw (ܘ)",
        explanation: "Huruf Waw (u) di akhir kata kerja mengekspresikan pelaku jamak maskulin lampau pasif."
      },
      {
        id: 4805,
        question: "Apakah arti dari kata 'Kursya' (ܟܽܘܪܣܝܳܐ)?",
        options: ["Peta", "Takhta / Kursi kekuasaan", "Meja makan", "Bara api"],
        correctAnswer: "Takhta / Kursi kekuasaan",
        explanation: "Kursya berarti kursi kehormatan kemegahan raja (takhta), sepadan bahasa Arab 'Kursi'."
      }
    ]
  },
  {
    id: 49,
    title: "Struktur Kalimat Kondisional Kompleks Bertingkat",
    titleSyriac: "ܐܣܳܪ̈ܶܐ ܕܰܬ݂ܢܳܝܳܐ ܩܫܝܳܐ",
    category: "Level B1",
    summary: "Memasangkan anak kalimat pengandaian kontrafaktual (andai saja seandainya).",
    introduction: "Mempelajari pengandaian yang tak terwujud (kontrafaktual) menggunakan partikel 'Hwa' dan 'En-la'.",
    content: "Di dalam bahasa Aram, pengandaian fakta bertingkat dibentuk dari susunan 'Illu... wa hwa...' (Andai saja... maka pastilah telah...).\nContoh: Illu hwayton harka, la mit hwa ahy (Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati).\nIllu (ܐܠܘ) melambangkan andai seandainya kontrafaktual.",
    keyRules: [
      "Partikel penegas 'Hwa' (ܗܘܐ) wajib mengiringi klausa akibat untuk menciptakan mood pengandaian masa lalu lampau."
    ],
    vocabulary: [
      { syriac: "ܐܠܘ", translit: "Illu", meaning: "Andai saja seandainya (kontrafaktual)", category: "Kondisional" },
      { syriac: "ܗܘܐ", translit: "Hwa", meaning: "Telah / Berada (Partikel penegas modalitas)", category: "Kondisional" },
      { syriac: "ܐܠܘܠܐ", translit: "Illula", meaning: "Andai saja jika tidak", category: "Kondisional" }
    ],
    examples: [
      { syriac: "ܐܶܠܽܘ ܗܘܰܝܬܽܘܢ ܗܳܪܟܳܐ", translit: "Illu hwayton harka", phonetic: "Illū hwayton harkō", indonesian: "Seandainya saja kalian ada di sini" },
      { syriac: "ܠܳܐ ܡܺܝܬ݂ ܗܘܳܐ ܐܰܚܝ", translit: "la mit hwa ahy", phonetic: "lō mīt wō aḥy", indonesian: "niscaya saudaraku tidak akan mati" }
    ],
    quizzes: [
      {
        id: 4901,
        question: "Partikel kondisional kontrafaktual 'Seandainya saja (faktanya tidak terjadi)' diwakili oleh...",
        options: ["En", "Illu (ܐܠܘ)", "Ela", "Kad"],
        correctAnswer: "Illu (ܐܠܘ)",
        explanation: "Illu melambangkan pengandaian imajiner di masa lalu."
      },
      {
        id: 4902,
        question: "Partikel pelengkap apakah yang wajib mengiringi verba klausa akibat pada kalimat kondisional kontrafaktual?",
        options: ["Hwa (ܗܘܐ)", "Mayya", "Malka", "Ger"],
        correctAnswer: "Hwa (ܗܘܐ)",
        explanation: "Hwa bertindak sebagai auxiliary penjelas status imajiner/past modal."
      },
      {
        id: 4903,
        question: "Terjemahan dari 'Illu hwayton harka, la mit hwa ahy' menceritakan...",
        options: ["Saudaraku pergi menemui kalian kemarin", "Mengapa kalian membiarkan saudaraku mati", "Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati", "Kami di sini bersama saudaramu yang sakit"],
        correctAnswer: "Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati",
        explanation: "Struktur kontrafaktual meletakkan Illu (seandainya) + hwayton harka (kalian di sini) + la mit hwa ahy (saudaraku tidak mati)."
      },
      {
        id: 4904,
        question: "Apakah lawan kata dari 'Ahy' (Saudaraku laki-laki)?",
        options: ["Hathy (ܚܳܬ݂ܝ - Saudara perempuanku)", "Aba", "Ema", "Maltha"],
        correctAnswer: "Hathy (ܚܳܬ݂ܝ - Saudara perempuanku)",
        explanation: "Hathy (saudaraku perempuan) adalah keselarasan gender dari Aha/Ahy."
      },
      {
        id: 4905,
        question: "Apakah arti dari 'Illula'?",
        options: ["Bila saja", "Hanya jika", "Seandainya saja jika tidak", "Bagaimana bisa"],
        correctAnswer: "Seandainya saja jika tidak",
        explanation: "Illu (seandainya) + la (tidak) = andai saja jika tidak."
      }
    ]
  },
  {
    id: 50,
    title: "Puncak Kompetensi Sastra & Tradisi Akademis Aram",
    titleSyriac: "ܫܽܘܠܳܡܳܐ ܘܣܳܗܕܽܘܬ݂ܳܐ ܕ݁ܩܶܢܝܳܢܳܐ",
    category: "Level B1",
    summary: "Refleksi komprehensif seluruh materi kursus dan ujian akhir akreditasi luhur.",
    introduction: "Modul ke-50 ini merangkum perjalan akademis murni dari gerbang aksara dasar A1 hingga sintaksis sastra bertingkat B1.",
    content: "Selamat! Anda telah purna membaca, mengurai, menyusun, dan menjawab tantangan teologi, budaya, bilangan, serta konjugasi 6 silsilah verba utama: Peal, Ethpeel, Pael, Ethpaal, Aphel, dan Ettaphal. Pelestarian sastra peninggalan luhur ini kini bersemayam di dalam pemahaman batin akademis Anda. Anda berhak memegang sertifikasi kelulusan agung Arami Academy.",
    keyRules: [
      "Kelulusan nilai di atas minimal passing score 70% diujikan mutlak demi merawat tradisi ilmiah yang kredibel."
    ],
    vocabulary: [
      { syriac: "ܫܘܠܡܐ", translit: "Shulama", meaning: "Puncak / Penyelesaian / Kesempurnaan", category: "Wisuda" },
      { syriac: "ܣܗܕܘܬܐ", translit: "Sahdutha", meaning: "Kesaksian / Sertifikasi / Pengakuan", category: "Wisuda" },
      { syriac: "ܩܢܝܢܐ", translit: "Qnyana", meaning: "Kepemilikan ilmu / Pencapaian", category: "Wisuda" }
    ],
    examples: [
      { syriac: "ܫܽܘܠܳܡܳܐ ܫܰܦ݁ܺܝܪܳܐ ܕ݁ܩܶܢܝܳܢܳܐ", translit: "Shulama shapira d-qnyana", phonetic: "Shulomō shapīrō d-qnyonō", indonesian: "Pencapaian akhir studi yang indah" },
      { syriac: "ܣܳܗܕܽܘܬ݂ܳܐ ܕ݁ܫܽܘܠܳܡܳܐ", translit: "Sahdutha d-shulama", phonetic: "Sahdūthō d-shūlomō", indonesian: "Sertifikasi kelulusan penyelesaian kuliah" }
    ],
    quizzes: [
      {
        id: 5001,
        question: "Apakah makna dari kata wisuda kelulusan 'ܫܽܘܠܳܡܳܐ' (Shulama)?",
        options: ["Permulaan", "Puncak / Penyelesaian / Kesempurnaan", "Musibah", "Kemunduran"],
        correctAnswer: "Puncak / Penyelesaian / Kesempurnaan",
        explanation: "Shulama / Shulomo berarti penyelesaian akhir atau pelunasan puncak kesuksesan studi."
      },
      {
        id: 5002,
        question: "Kata 'ܣܳܗܕܽܘܬ݂ܳܐ' (Sahdutha) mengekspresikan arti...",
        options: ["Harta karun", "Kesaksian / Bukti otentik / Sertifikasi", "Kesedihan", "Penjara"],
        correctAnswer: "Kesaksian / Bukti otentik / Sertifikasi",
        explanation: "Sahdutha melambangkan sertifikat, pembuktian tuntas, atau piagam kesaksian lulus ujian."
      },
      {
        id: 5003,
        question: "Kemampuan menguraikan kalimat naskah Peshitta orisinil mengimplikasikan penguasaan...",
        options: ["Hanya kosakata", "Pemahaman gramatikal, sintaksis melingkat, dan kosa kata terpadu", "Kecepatan berlari", "Metode menulis angka belasan saja"],
        correctAnswer: "Pemahaman gramatikal, sintaksis melingkat, dan kosa kata terpadu",
        explanation: "Membaca teks orisinil Peshitta membutuhkan keterkaitan seluruh materi A1 hingga B1."
      },
      {
        id: 4804,
        question: "Berapakah jumlah total modul wajib yang berhasil Anda tuntaskan dari awal dalam kursus ini?",
        options: ["10 modul", "20 modul", "30 modul", "50 modul"],
        correctAnswer: "50 modul",
        explanation: "Anda telah meniti dari Modul 1 hingga mencapai garis finish di Modul 50 secara legasi."
      },
      {
        id: 4805,
        question: "Berapakah nilai presentase minimal kelulusan (passing score) ujian kelayakan sertifikat kelulusan di Arami Academy?",
        options: ["50%", "60%", "70%", "90%"],
        correctAnswer: "70%",
        explanation: "Sesuai regulasi ketat dewan pengajar, hak cetak sertifikat diperoleh bila skor evaluasi Anda minimal mencapai 70%."
      }
    ]
  }
];
