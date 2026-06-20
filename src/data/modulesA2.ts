import { Module } from "../types";

export const modulesA2: Module[] = [
  {
    id: 21,
    title: "Kosakata Nama Hari & Pembagian Waktu",
    titleSyriac: "ܝܘܡܬ̈ܐ ܘܙܒܢ̈ܐ",
    category: "Level A2",
    summary: "Belajar nama-nama hari dalam seminggu dan pembagian waktu dalam bahasa Aram Syriac.",
    introduction: "Bahasa Aram mengadopsi penamaan hari berdasarkan ordinal (hitungan angka), menyejajarkan sistem hari dengan tradisi Ibrani.",
    content: "Nama hari di Aram:\n- Minggu (Hari Satu): ܚܰܕܒ݁ܫܰܒ݁ܳܐ (Hadbshaba)\n- Senin (Hari Dua): ܬܪܶܝܢܒ݁ܫܰܒ݁ܳܐ (Trenbshaba)\n- Selasa (Hari Tiga): ܬܠܳܬ݂ܳܐ ܒ݁ܫܰܒ݁ܳܐ (Tlatha bshaba)\n- Rabu (Hari Empat): ܐܰܪܒ݁ܥܳܐ ܒ݁ܫܰܒ݁ܳܐ (Arb'a bshaba)\n- Kamis (Hari Lima): ܚܰܡܫܳܐ ܒ݁ܫܰܒ݁ܳܐ (Hamsha bshaba)\n- Jumat (Malam Sabtu): ܥܪܽܘܒ݂ܬܳܐ ('Arubtha)\n- Sabtu (Sabat): ܫܰܒ݁ܬ݂ܳܐ (Shabtha).",
    keyRules: [
      "Sebagian besar nama hari merupakan gabungan angka dengan 'b-Shaba' (di dalam minggu).",
      "Hari Jumat memiliki istilah tersendiri 'Arubto' yang berarti persiapan/malam masuknya sabat."
    ],
    vocabulary: [
      { syriac: "ܚܕܒܫܒܐ", translit: "Hadbshaba", meaning: "Hari Minggu", category: "Hari" },
      { syriac: "ܥܪܘܒܬܐ", translit: "Arubtha", meaning: "Hari Jumat (Persiapan)", category: "Hari" },
      { syriac: "ܨܦܪܐ", translit: "Saphra / Tsaphro", meaning: "Pagi", category: "Waktu" }
    ],
    examples: [
      { syriac: "ܒܚܕܒܫܒܐ ܐܙܠ ܐܢܐ ܠܥܕܬܐ", translit: "B-hadbshaba azel eno l-`idta", phonetic: "B-ḥadbshabō azel enō l-`īdtō", indonesian: "Pada hari Minggu saya pergi ke gereja" },
      { syriac: "ܫܠܡܐ ܒܨܦܪܐ", translit: "Shlomo b-saphra", phonetic: "Shlōmō b-ṣaphrō", indonesian: "Selamat pagi" }
    ],
    quizzes: [
      {
        id: 2101,
        question: "Apakah nama hari Minggu dalam bahasa Aram Syriac?",
        options: ["Shabtha", "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)", "Arubtha", "Trenbshaba"],
        correctAnswer: "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)",
        explanation: "Hadbshaba secara harafiah berarti 'Satu di dalam pekan/minggu', merepresentasikan hari Minggu."
      },
      {
        id: 2102,
        question: "Hari 'ܥܪܽܘܒ݂ܬܳܐ' (Arubtha) dipadankan dengan hari...",
        options: ["Senin", "Jumat", "Sabtu", "Rabu"],
        correctAnswer: "Jumat",
        explanation: "Arubtha melambangkan hari persiapan (Jumat) menyongsong Sabat."
      },
      {
        id: 2103,
        question: "Apakah arti dari kata 'ܨܦܪܐ' (Saphra)?",
        options: ["Pagi", "Siang", "Malam", "Senja"],
        correctAnswer: "Pagi",
        explanation: "Saphra / Tsaphro berarti fajar atau pagi."
      },
      {
        id: 2104,
        question: "Hari 'ܫܰܒ݁ܬ݂ܳܐ' (Shabtha) melambangkan hari...",
        options: ["Minggu", "Senin", "Sabtu", "Kamis"],
        correctAnswer: "Sabtu",
        explanation: "Shabtha berasal dari kata dasar Sabat, melambangkan hari Sabtu."
      },
      {
        id: 2105,
        question: "Kata dasar 'Zabna' (ܙܒܢܐ) memiliki arti...",
        options: ["Tempat", "Waktu / Zaman", "Buku", "Kata kerja"],
        correctAnswer: "Waktu / Zaman",
        explanation: "Zabna berarti waktu, durasi, era, atau waktu tata bahasa."
      }
    ]
  },
  {
    id: 22,
    title: "Siklus Bulan & Penanda Tahun",
    titleSyriac: "ܝܪ̈ܚܐ ܘܫܢܺܝ̈ܐ",
    category: "Level A2",
    summary: "Mengulas penamaan bulan klasik Aramaik dan struktur tahunan.",
    introduction: "Bahasa Syriac mengadopsi penamaan bulan kalender Seleukid/Babilonia kuno yang unik.",
    content: "Nama Bulan Penting:\n- Nisan (April): ܢܺܝܣܳܢ (Nisan)\n- Tammuz (Juli): ܬܰܡܽܘܙ (Tammuz)\n- Tishri I (Oktober): ܬܶܫܪܺܝ ܩܰܕ݂ܺܝܡ (Tishri Qadim)\n- Kanun I (Desember): ܟܳܢܽܘܢ ܩܰܕ݂ܺܝܡ (Kanun Qadim).\n\nTahun disebut 'Shnato' (ܫܢܰܬ݂ܳܐ).",
    keyRules: [
      "Bulan klasik Aram terkait dengan perubahan siklus musim agraris Timur Tengah kuno.",
      "Untuk menyatakan tahun, digunakan kata 'Shena' (tunggal) atau 'Shne' (jamak)."
    ],
    vocabulary: [
      { syriac: "ܝܪܚܐ", translit: "Yarha", meaning: "Bulan (Month / Moon)", category: "Waktu" },
      { syriac: "ܫܢܬܐ", translit: "Shnato", meaning: "Tahun", category: "Waktu" },
      { syriac: "ܢܝܣܢ", translit: "Nisan", meaning: "Bulan Nisan", category: "Bulan" }
    ],
    examples: [
      { syriac: "ܫܢܰܬ݂ܳܐ ܚܕܰܬ݂ܳܐ", translit: "Shnato hdatha", phonetic: "Shnatō ḥdatō", indonesian: "Tahun baru" },
      { syriac: "ܝܰܪܚܳܐ ܫܰܦܺܝܪܳܐ", translit: "Yarha shapira", phonetic: "Yarḥō shapīrō", indonesian: "Rembulan yang indah" }
    ],
    quizzes: [
      {
        id: 2201,
        question: "Apakah bahasa Aram dari kata 'Bulan' (baik kalender maupun benda langit)?",
        options: ["Shnato", "Yarha (ܝܪܚܐ)", "Zabna", "Yawma"],
        correctAnswer: "Yarha (ܝܪܚܐ)",
        explanation: "Yarha / Yarḥō berarti bulan (secara penanggalan maupun bulan di langit)."
      },
      {
        id: 2202,
        question: "Kata 'ܫܢܰܬ݂ܳܐ ܚܕܰܬ݂ܳܐ' (Shnato hdatha) diterjemahkan sebagai...",
        options: ["Bulan Baru", "Hari Baru", "Tahun Baru", "Kelahiran Baru"],
        correctAnswer: "Tahun Baru",
        explanation: "Shnato = tahun, hdatha = baru. Berarti 'Tahun Baru'."
      },
      {
        id: 2203,
        question: "Bulan 'Nisan' diidentikkan dengan awal musim...",
        options: ["Dingin (Winter)", "Gugur (Autumn)", "Semi (Spring)", "Panas (Summer)"],
        correctAnswer: "Semi (Spring)",
        explanation: "Nisan adalah bulan pertama di musim semi dalam sistem kuno Mesopotamia."
      },
      {
        id: 2204,
        question: "Apakah arti dari kata 'Shne' (ܫܢܝ̈ܐ) dengan Seyame?",
        options: ["Bulan-bulan", "Tahun-tahun", "Jam-jam", "Hari-hari"],
        correctAnswer: "Tahun-tahun",
        explanation: "Shne adalah plural jamak dari Shnato (tahun)."
      },
      {
        id: 2205,
        question: "Bulan 'Kanun Qadim' setara dengan bulan...",
        options: ["Januari", "Juni", "Desember", "Agustus"],
        correctAnswer: "Desember",
        explanation: "Kanun Qadim adalah sebutan ekivalen untuk bulan Desember klasik."
      }
    ]
  },
  {
    id: 23,
    title: "Sistem Sufiks Kepemilikan (Sufiks Pronominal)",
    titleSyriac: "ܟܢܝ̈ܐ ܨܒܝ̈ܢܐ",
    category: "Level A2",
    summary: "Mempelajari penambahan akhiran kepemilikan langsung pada kata benda.",
    introduction: "Bahasa Aram jarang memakai kata 'milikku' terpisah, melainkan menempelkan sufiks pronominal di ujung kata benda.",
    content: "Sufiks kepemilikan tunggal (pada kata 'Bayto' / Rumah):\n- Rumahku: ܒܰܝܬ݁ܝ (Bayty / Baythi)\n- Rumahmu (pria): ܒܰܝܬ݁ܳܟ݂ (Baythakh)\n- Rumahmu (perempuan): ܒܰܝܬ݁ܶܟ݂ (Baythekh)\n- Rumahnya (pria): ܒܰܝܬ݁ܶܗ (Baytheh)\n- Rumahnya (perempuan): ܒܰܝܬ݁ܳܗ (Baythah)\n- Rumah kami: ܒܰܝܬ݁ܰܢ (Baythan).",
    keyRules: [
      "Sufiks disesuaikan berdasarkan jumlah kata benda (tunggal versus jamak sebelum ditempeli).",
      "Pencegahan tabrakan vokal memicu peleburan vokal akhir leksikal '-a'."
    ],
    vocabulary: [
      { syriac: "ܒܝܬܝ", translit: "Baythy", meaning: "Rumahku", category: "Sufiks" },
      { syriac: "ܟܬܳܒܳܟ݂", translit: "Kthobakh", meaning: "Bukumu (m)", category: "Sufiks" },
      { syriac: "ܐܒܘܢ", translit: "Abun", meaning: "Bapa kami", category: "Sufiks" }
    ],
    examples: [
      { syriac: "ܗܳܢܳܐ ܟܬܳܒ݁ܝ", translit: "Hono Kthoby", phonetic: "Hono Kthōby", indonesian: "Ini adalah bukuku" },
      { syriac: "ܐܰܝܟܳܐ ܗܽܘ ܒܰܝܬ݁ܳܟ݂", translit: "Ayka hu baythakh", phonetic: "Ayko hū baythokh", indonesian: "Di manakah rumahmu (pria)?" }
    ],
    quizzes: [
      {
        id: 2301,
        question: "Akhiran apakah yang melambangkan kepemilikan 'Saya' (-ku) pada kata benda tunggal?",
        options: ["-akh", "-edh", "-y (ܝ)", "-an"],
        correctAnswer: "-y (ܝ)",
        explanation: "-y (Yodh) di akhir kata melambangkan arti 'kemilikan saya' (misil: baythy = rumahku)."
      },
      {
        id: 2302,
        question: "Kata 'ܟܬܳܒܳܗ' (Kthobah) menterjemahkan konsep kepemilikan...",
        options: ["Bukumu (pria)", "Bukunya (wanita)", "Bukunya (pria)", "Buku kami"],
        correctAnswer: "Bukunya (wanita)",
        explanation: "Sufiks '-ah' (ܗ dengan vokal) melambangkan 'dia/nya perempuan'."
      },
      {
        id: 2303,
        question: "Bagaimanakah menulis 'Buku kami' dari kata dasar 'Kthobo'?",
        options: ["Kthobakh", "Kthoby", "Kthoban (ܟܬܳܒܰܢ)", "Kthobeh"],
        correctAnswer: "Kthoban (ܟܬܳܒܰܢ)",
        explanation: "Akhiran '-an / -nan' melambangkan kepemilikan jamak pertama (buku kami)."
      },
      {
        id: 2304,
        question: "Sufiks '-akh' pada 'Baythakh' bertumpu pada subjek...",
        options: ["Kamu (pria)", "Kamu (perempuan)", "Saya", "Dia"],
        correctAnswer: "Kamu (pria)",
        explanation: "Sufiks '-akh' melambangkan kepunyaan milik kamu tunggal maskulin."
      },
      {
        id: 2305,
        question: "Bentuk 'Shem' (Nama) diberi sufiks '-akh' (kamu pria) dibaca...",
        options: ["Shemy", "Shemakh", "Sheman", "Shemeh"],
        correctAnswer: "Shemakh",
        explanation: "Shemakh (ܫܡܟ) berarti Nama-Mu atau Nama kamu."
      }
    ]
  },
  {
    id: 24,
    title: "Preposisi Menengah - Istimewa",
    titleSyriac: "ܐܘܣ̈ܦܐ ܩܫܝ̈ܐ",
    category: "Level A2",
    summary: "Menguasai preposisi lepasan menengah: Men (dari), `Al (atas/tentang), Lwat (kepada/bersama).",
    introduction: "Selain preposisi melekat satu huruf, terdapat jajaran preposisi utuh mandiri.",
    content: "Preposisi Lepas Terpilih:\n- Men (ܡܶܢ) : Dari / Semenjak (sering melebur menjadi prefiks m-).\n- `Al (ܥܰܠ) : Di atas, tentang, kepada.\n- Lwat (ܠܘܳܬ݂) : Menuju, ke arah, bersama (menyatakan relasi personal).",
    keyRules: [
      "Preposisi 'Men' jika disandingkan dengan kata bersuku awal lemah dapat berasimilasi konsonannya.",
      "Preposisi '`Al' sering berpasangan dengan sufiks pronominal."
    ],
    vocabulary: [
      { syriac: "ܡܢ", translit: "Men", meaning: "Dari", category: "Preposisi" },
      { syriac: "ܥܠ", translit: "Al", meaning: "Di atas / Tentang", category: "Preposisi" },
      { syriac: "ܠܘܬ", translit: "Lwat", meaning: "Kepada / Bersama", category: "Preposisi" }
    ],
    examples: [
      { syriac: "ܡܶܢ ܐܰܝܟܳܐ ܐܰܢ݁ܬ݁", translit: "Men ayka at", phonetic: "Men ayko at", indonesian: "Dari manakah kamu?" },
      { syriac: "ܥܰܠ ܡܰܠܟܳܐ", translit: "al malka", phonetic: "`al malko", indonesian: "tentang sang raja" }
    ],
    quizzes: [
      {
        id: 2401,
        question: "Apakah makna dari kata preposisi klasik 'ܡܶܢ' (Men)?",
        options: ["Kepada", "Dari / Semenjak", "Di atas", "Dengan"],
        correctAnswer: "Dari / Semenjak",
        explanation: "Men melambangkan asal, asimilasi, atau arti 'dari'."
      },
      {
        id: 2402,
        question: "Kata preposisi 'ܠܘܳܬ݂' (Lwat) bermakna...",
        options: ["Menuju / Kebersamaan personal", "Tentang saja", "Sebab akibat", "Pencegahan"],
        correctAnswer: "Menuju / Kebersamaan personal",
        explanation: "Lwat melambangkan asimtot direksional personal ('ke/bersama seseorang')."
      },
      {
        id: 2403,
        question: "Bagaimanakah mengekspresikan 'tentang sang ratu' (ratu = malktha)?",
        options: ["men malktha", "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)", "lwat malktha", "b-malktha"],
        correctAnswer: "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)",
        explanation: "`Al melambangkan arti 'tentang/mengenai' atau 'di atas'."
      },
      {
        id: 2404,
        question: "Jika menyatu dengan kata 'Eno' (Saya), preposisi 'Men' menjadi 'Meny', melambangkan...",
        options: ["Dariku", "Kepadaku", "Denganku", "Atasku"],
        correctAnswer: "Dariku",
        explanation: "Men + y (sufiks saya) menjadi Meny/Meni, berarti 'dariku'."
      },
      {
        id: 2405,
        question: "Kata preposisi '`Al' sering diterjemahkan sebagai...",
        options: ["Di bawah", "Di atas / Mengenai", " Ke dalam", "Sebelum"],
        correctAnswer: "Di atas / Mengenai",
        explanation: "`Al (ܥܠ) melambangkan letak posisi di atas atau menceritakan tentang."
      }
    ]
  },
  {
    id: 25,
    title: "Kata Kerja Pael Perfect Lampau (Intensif)",
    titleSyriac: "ܡܠܬܐ ܕܦܥܠ",
    category: "Level A2",
    summary: "Memahami tema kata kerja intensif/kausatif Pael dalam kala lampau.",
    introduction: "Bahasa Semitik menggunakan modifikasi vokal internal (stem) untuk merubah intensitas arti kata kerja. Pael adalah kategori intensif.",
    content: "Di bawah tema Pael, huruf konsonan kedua diberi penekanan berat (geminasi) dan perubahan pola vokal.\nContoh perbandingan:\n- Qadash (Peal): Kudus.\n- Qaddesh (Pael): Menguduskan / Menyucikan.\n\nKonjugasi Pael Perfect Lampau:\n- Dia pria menyucikan: ܩܰܕ݁ܶܫ (Qaddesh)\n- Dia wanita menyucikan: ܩܰܕ݁ܫܰܬ݂ (Qaddshath)\n- Saya menyucikan: ܩܰܕ݁ܫܶܬ݂ (Qaddshet).",
    keyRules: [
      "Ciri khas visual Pael di naskah vokal adalah penempatan tanda Qushaya (titik pengetat) di konsonan tengah pembentuk suku kata intensif."
    ],
    vocabulary: [
      { syriac: "ܩܕܫ", translit: "Qaddesh", meaning: "Dia telah menguduskan / menyucikan", category: "Kata Kerja Pael" },
      { syriac: "ܡܠܠ", translit: "Mallel", meaning: "Dia telah berbicara (dari malal = kata)", category: "Kata Kerja Pael" },
      { syriac: "ܫܒܚ", translit: "Shabbah", meaning: "Dia telah memuji / memuliakan", category: "Kata Kerja Pael" }
    ],
    examples: [
      { syriac: "ܩܰܕ݁ܶܫ ܐܰܠܳܗܳܐ ܝܰܘܡܳܐ", translit: "Qaddesh Alaha yawma", phonetic: "Qaddesh Alaho yawmō", indonesian: "Allah telah menguduskan hari itu" },
      { syriac: "ܫܰܒ݁ܚܶܬ݂ ܠܐܰܠܳܗܳܐ", translit: "Shabbahet l-Alaha", phonetic: "Shabbaḥet l-Alaho", indonesian: "Saya telah memuliakan Allah" }
    ],
    quizzes: [
      {
        id: 2501,
        question: "Apakah fungsi semantik utama dari kategori kata kerja 'Pael' dibanding Peal dasar?",
        options: ["Menyatakan aspek pasif", "Menyatakan makna Intensif / Kausatif Aktif", "Membuat kalimat tanya", "Meniadakan perbuatan"],
        correctAnswer: "Menyatakan makna Intensif / Kausatif Aktif",
        explanation: "Pael melambangkan penguatan perbuatan (misal: kudus menjadi menyucikan/menguduskan)."
      },
      {
        id: 2502,
        question: "Kata 'ܩܰܕ݁ܶܫ' (Qaddesh) berbunyi vokal 'e' miring tebal di suku kata kedua, melambangkan pelaku...",
        options: ["Dia tunggal pria lampau (3ms)", "Dia tunggal wanita lampau", "Saya lampau", "Kalian jamak"],
        correctAnswer: "Dia tunggal pria lampau (3ms)",
        explanation: "Qaddesh adalah bentuk dasar leksikal Pael Perfect 3ms."
      },
      {
        id: 2503,
        question: "Bagaimana melafalkan kata Pael yang berarti 'Dia (m) telah memuji/memuliakan'?",
        options: ["Shabah", "Shabbah (ܫܒܚ)", "Shabla", "Shabbat"],
        correctAnswer: "Shabbah (ܫܒܚ)",
        explanation: "Mempunyai penekanan konsonan 'b' ganda: Shabbah."
      },
      {
        id: 2504,
        question: "Ubah kata kerja Peal 'Mallel' ke dalam bentuk orang pertama tunggal 'Saya telah berbicara'!",
        options: ["Mallely", "Mallahe", "Mallelt (ܡܰܠܠܶܬ݂)", "Mallelun"],
        correctAnswer: "Mallelt (ܡܰܠܠܶܬ݂)",
        explanation: "Sufiks '-et' (melekat pada kata kerja Pael) menghasilkan 'Mallelt' (Saya telah berbicara)."
      },
      {
        id: 2505,
        question: "Apakah arti dari kata kerja 'Qaddshath' (ܩܰܕ݁ܫܰܬ݂)?",
        options: ["Saya menyucikan", "Dia (perempuan) telah menyucikan", "Kalian menyucikan", "Kami menyucikan"],
        correctAnswer: "Dia (perempuan) telah menyucikan",
        explanation: "Akhiran '-ath' menandai pelaku orang ketiga tunggal feminin lampau."
      }
    ]
  },
  {
    id: 26,
    title: "Pola Kata Kerja Pael Masa Kini & Nanti",
    titleSyriac: "ܡܠܬܐ ܕܦܥܠ ܒܥܬܝܕܐ",
    category: "Level A2",
    summary: "Konjugasi Imperfect (Kini/Nanti) untuk kata kerja kelompok intensif Pael.",
    introduction: "Mempelajari penyesuaian prefiks dan perubahan vokal internal Pael Imperfect.",
    content: "Pola Imperfect Pael ditandai dengan vokal prefiks yang cenderung melemah (shwa/vokal e tipis).\nSistem konjugasi (Menguduskan):\n- Dia pria akan menguduskan (3ms): ܢܩܰܕ݁ܶܫ (Nqaddesh)\n- Dia wanita akan menguduskan (3fs): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- Kamu pria akan menguduskan (2ms): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- Saya akan menguduskan (1cs): ܐܩܰܕ݁ܶܫ (Eqaddesh)\n- Kami akan menguduskan (1cp): ܢܩܰܕ݁ܶܫ (Nqaddesh).",
    keyRules: [
      "Meskipun prefiks hurufnya mirip Peal, vokalisasi vokal internal 'e' (Rbasa) di suku kata penutup mencirikan status Pael ini."
    ],
    vocabulary: [
      { syriac: "ܢܩܕܫ", translit: "Nqaddesh", meaning: "Dia (m) akan menguduskan", category: "Kata Kerja Pael" },
      { syriac: "ܢܡܠܠ", translit: "Nmallel", meaning: "Dia (m) akan berbicara", category: "Kata Kerja Pael" },
      { syriac: "ܐܨܒܚ", translit: "Eshabbah", meaning: "Saya akan memuji", category: "Kata Kerja Pael" }
    ],
    examples: [
      { syriac: "ܗܽܘ ܢܡܰܠܶܠ ܥܰܡܳܟ݂", translit: "Hu nmallel `amakh", phonetic: "Hu nmallel `amokh", indonesian: "Dia akan berbicara denganmu" },
      { syriac: "ܢܩܰܕ݁ܶܫ ܫܡܳܟ݂", translit: "Nqaddesh shmakh", phonetic: "Nqaddesh shmokh", indonesian: "Kami akan menguduskan nama-Mu" }
    ],
    quizzes: [
      {
        id: 2601,
        question: "Apakah terjemahan dari kata Pael imperfect 'ܢܡܰܠܶܠ' (Nmallel)?",
        options: ["Dia telah berkata", "Dia (Laki-laki) akan berbicara", "Saya berbicara", "Bicaralah!"],
        correctAnswer: "Dia (Laki-laki) akan berbicara",
        explanation: "Prefiks Nun (ܢ) + Mallel = Nmallel, dia akan berbicara."
      },
      {
        id: 2602,
        question: "Bentuk 'ܐܩܰܕ݁ܶܫ' (Eqaddesh) diawali prefiks Alap, ditujukan untuk subjek...",
        options: ["Dia", "Kami", "Saya", "Kalian"],
        correctAnswer: "Saya",
        explanation: "Prefiks Alap 'ܐ-' menandakan subjek Saya akan melakukan penyucian."
      },
      {
        id: 2603,
        question: "Suku kata penutup verba Pael Imperfect 3ms umumnya diakhiri dengan vocal...",
        options: ["Pthaha (a)", "Rbasa (e) miring (ܩܰܕ݁ܶܫ)", "Hbasa (i)", "Zqapha (o)"],
        correctAnswer: "Rbasa (e) miring (ܩܰܕ݁ܶܫ)",
        explanation: "Vokal Rbasa (ܶ) konsisten mengakhiri pola konjugasi aktif Pael."
      },
      {
        id: 2604,
        question: "Apakah arti dari 'Hu nmallel `amokh'?",
        options: ["Saya akan berbicara denganmu", "Dia akan berbicara denganmu", "Mereka telah memuji kamu", "Kami akan menyuci tempat ini"],
        correctAnswer: "Dia akan berbicara denganmu",
        explanation: "Hu = dia, nmallel = akan berbicara, `amokh = denganmu. Berarti 'Dia akan berbicara denganmu'."
      },
      {
        id: 2605,
        question: "Manakah bentuk imperatif dari 'Mallel' (Bicaralah!)?",
        options: ["Nmallel", "Mallel (ܡܰܠܶܠ)", "Mallelt", "Emallel"],
        correctAnswer: "Mallel (ܡܰܠܶܠ)",
        explanation: "Bentuk imperatif Pael mirip visualnya dengan perfect 3ms, diucapkan 'Mallel'."
      }
    ]
  },
  {
    id: 27,
    title: "Kata Benda Jamak Feminin & Konstruksi Khusus",
    titleSyriac: "ܫܡܳܗ̈ܐ ܣܓܝܳܐܢ̈ܐ ܕܢܩܒܬܐ",
    category: "Level A2",
    summary: "Memahami fleksi jamak feminin kata benda yang diakhiri sufiks '-atha'.",
    introduction: "Pluralisasi nomina feminin memiliki pola khas yang membedakannya dari nomina maskulin.",
    content: "Kata benda feminin tunggal berakhiran '-tha' atau '-ta' diubah menjadi jamak dengan sufiks '-atha' (ܥܳܬ݂ܳܐ) disertai penomoran Seyame.\nContoh melingkar:\n- Egrtha (surat) -> Egratha (surat-surat).\n- Maltha (kata) -> Melatha (kata-kata).\n- Mdintha (kota) -> Mdinatha (kota-kota).",
    keyRules: [
      "Sufiks '-atha' mengandung transisi letupan aspirasi lunak 'th' yang dominan.",
      "Vokal Zqapha panjang mengiringi suku kata akhiran ini."
    ],
    vocabulary: [
      { syriac: "ܐܓܪ̈ܬܐ", translit: "Egratha", meaning: "Surat-surat (Jamak dari Egrtha)", category: "Kata Benda" },
      { syriac: "ܡܕܝ̈ܢܬܐ", translit: "Mdinatha", meaning: "Kota-kota (Jamak dari Mdintha)", category: "Kata Benda" },
      { syriac: "ܡܠ̈ܐ", translit: "Melatha", meaning: "Kata-kata (Jamak dari Maltha)", category: "Kata Benda" }
    ],
    examples: [
      { syriac: "ܟܬܰܒܬ ܐܺܓܪ̈ܳܬ݂ܳܐ", translit: "Kthabeth egratha", phonetic: "Kthabet egrōthō", indonesian: "Saya telah menulis beberapa surat" },
      { syriac: "ܡܕܺܝ̈ܢܳܬ݂ܳܐ ܫܰܦܺܝܪ̈ܳܬ݂ܳܐ", translit: "Mdinatha shapiratha", phonetic: "Mdinōthō shapīrōthō", indonesian: "Kota-kota yang indah" }
    ],
    quizzes: [
      {
        id: 2701,
        question: "Sufiks akhiran apakah yang menandai jamak feminin kata benda secara reguler?",
        options: ["-e", "-in", "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)", "-un"],
        correctAnswer: "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)",
        explanation: "-atha adalah penanda jamak feminin tipikal (misal: mdinatha = kota-kota)."
      },
      {
        id: 2702,
        question: "Apakah bentuk tunggal dari kata kebendaan jamak 'Melatha' (Kata-kata)?",
        options: ["Malka", "Maltha (ܡܰܠܬ݂ܳܐ)", "Mdintha", "Malktho"],
        correctAnswer: "Maltha (ܡܰܠܬ݂ܳܐ)",
        explanation: "Maltha (Kata/Logos) memiliki bentuk bentuk jamak 'Melatha'."
      },
      {
        id: 2703,
        question: "Sesuai hukum keselarasan, frase 'Kota-kota (jamak feminin) yang indah' diterjemahkan sebagai...",
        options: ["Mdinatha shapira", "Mdinatha shapire", "Mdinatha shapiratha", "Mdintha shapirtha"],
        correctAnswer: "Mdinatha shapiratha",
        explanation: "Adjektiva wajib jamak feminin '-atha' menyelaraskan nomina 'mdinatha'."
      },
      {
        id: 2704,
        question: "Apakah arti tunggal dari 'Egrtha' (ܐܺܓܪܬ݂ܳܐ)?",
        options: ["Buku", "Raja", "Surat", "Gereja"],
        correctAnswer: "Surat",
        explanation: "Egrtha berarti surat tunggal, jamaknya adalah Egratha."
      },
      {
        id: 2705,
        question: "Bentuk jamak dari 'Mdintha' (Kota) mengandung titik Seyame diletakkan pada huruf...",
        options: ["Nun", "Yodh", "Dalath", "Mim"],
        correctAnswer: "Yodh",
        explanation: "Seyame diletakkan di atas huruf Yodh (ܡܕܺܝ̈ܢܬ݂ܳܐ) sebagai sign plural feminin jamak mdinatha."
      }
    ]
  },
  {
    id: 28,
    title: "Sistem Bilangan Belasan (11-19)",
    titleSyriac: "ܡܢܝܢ̈ܐ ܥܣܝܪ̈ܝܐ",
    category: "Level A2",
    summary: "Memahami struktur pembentukan angka belasan dalam bahasa Syriac.",
    introduction: "Angka belasan dibentuk dari perpaduan angka satuan dasar dipadukan dengan dasar angka sepuluh (`asra).",
    content: "Angka Belasan Maskulin (menyertai objek maskulin):\n- Sebelas: ܚܰܕ݂ܥܣܰܪ (Hadesar)\n- Dua belas: ܬܪܶܥܣܰܪ (Tre'sar)\n- Tiga belas: ܬܠܳܬ݂ܥܣܰܪ (Tlath'sar)\n- Empat belas: ܐܰܪܒܰܥܥܣܰܪ (Arba'sar).\n\nAngka Belasan Feminin (menyertai objek feminin):\n- Sebelas: ܚܕܰܥܶܣܪܺܐ (Hda'esre)\n- Dua belas: ܬܰܪܬܶܥܶܣܪܺܐ (Tarte'esre)\n- Tiga belas: ܬܠܳܬ݂ܥܶܣܪܺܐ (Tlath'esre).",
    keyRules: [
      "Suku kata sepuluh menyatu membentuk satu kesatuan kata majemuk ringkas."
    ],
    vocabulary: [
      { syriac: "ܬܪܥܣܪ", translit: "Tre'sar", meaning: "Dua Belas (m)", category: "Angka" },
      { syriac: "ܚܕܥܣܪ", translit: "Hadesar", meaning: "Sebelas (m)", category: "Angka" },
      { syriac: "ܚܕܥܣܪܐ", translit: "Hda'esre", meaning: "Sebelas (f)", category: "Angka" }
    ],
    examples: [
      { syriac: "ܬܪܶܥܣܰܪ ܬܰܠܡܺܝܕ̈ܶܐ", translit: "Tre'sar talmide", phonetic: "Tre'sar talmīdē", indonesian: "Dua belas murid (pria)" },
      { syriac: "ܬܰܪܬܶܥܶܣܪܺܐ ܢܶܫܺܝ̈ܢ", translit: "Tarte'esre neshin", phonetic: "Tarte`esre neshīn", indonesian: "Dua belas orang wanita" }
    ],
    quizzes: [
      {
        id: 2801,
        question: "Apakah penyebutan angka 'Dua Belas' untuk menyertai murid-murid pria (talmide)?",
        options: ["Hadesar", "Tre'sar (ܬܪܶܥܣܰܪ)", "Tarten", "Tarte'esre"],
        correctAnswer: "Tre'sar (ܬܪܶܥܣܰܪ)",
        explanation: "Tre'sar adalah dua belas m. Sangat kondang merepresentasikan 12 rasul."
      },
      {
        id: 2802,
        question: "Kata 'ܚܰܕ݂ܥܣܰܪ' (Hadesar) melambangkan bilangan...",
        options: ["Satu", "Sebelas", "Dua puluh", "Sembilan"],
        correctAnswer: "Sebelas",
        explanation: "Hadesar dibentuk dari Had (1) + `Asar (10) penyusutan fonetis menjadi sebelas."
      },
      {
        id: 2803,
        question: "Angka belasan faksi Feminin diakhiri dengan pola penutup...",
        options: ["-sar", "-esre (ܥܶܣܪܺܐ)", "-in", "-atha"],
        correctAnswer: "-esre (ܥܶܣܪܺܐ)",
        explanation: "-esre melambangkan akhiran feminin belasan (misal: Tlath'esre = 13 feminin)."
      },
      {
        id: 2804,
        question: "Apakah terjemahan dari 'Tre'sar talmide'?",
        options: ["Satu murid", "Dua murid", "Dua belas murid", "Dua puluh murid"],
        correctAnswer: "Dua belas murid",
        explanation: "Tre'sar = dua belas, talmide = murid-murid. Berarti 'Dua belas murid'."
      },
      {
        id: 2805,
        question: "Bilangan belasan faksi Maskulin selalu diakhiri suku kata...",
        options: ["-esre", "-sar", "-had", "-tren"],
        correctAnswer: "-sar",
        explanation: "-sar adalah kontraksi dialek dari 'asar (sepuluh) khusus belasan maskulin."
      }
    ]
  },
  {
    id: 29,
    title: "Angka Puluhan, Ratusan & Ribuan",
    titleSyriac: "ܡܢܝܢ̈ܐ ܪ̈ܘܪܒܐ",
    category: "Level A2",
    summary: "Memahami hitungan besar: puluhan, ratusan, hingga ribuan.",
    introduction: "Hitungan besar dibentuk secara teratur mirip rumpun Semitik lainnya.",
    content: "Daftar Bilangan Besar:\n- Dua puluh: ܥܶܣܪܺܝܢ (`Esrin)\n- Tiga puluh: ܬܠܳܬ݂ܺܝܢ (Tlathin)\n- Empat puluh: ܐܰܪܒܥܺܝܢ (Arb'in)\n- Lima puluh: ܚܰܡܫܺܝܢ (Hamshin)\n- Seratus: ܡܳܐܐ (M'o)\n- Seribu: ܐܰܠܦܳܐ (Alpho).",
    keyRules: [
      "Puluhan dibentuk dengan akhiran plural '-in' dari akar kata bilangannya (misal: tlatha -> tlathin).",
      "Dua puluh adalah pengecualian, dibentuk secara langsung '`Esrin'."
    ],
    vocabulary: [
      { syriac: "ܥܣܪܝܢ", translit: "Esrin", meaning: "Dua Puluh", category: "Angka" },
      { syriac: "ܡܐܐ", translit: "Mo", meaning: "Seratus", category: "Angka" },
      { syriac: "ܐܠܦܐ", translit: "Alpho", meaning: "Seribu", category: "Angka" }
    ],
    examples: [
      { syriac: "ܥܣܪܺܝܢ ܟܬܳܒܺܝ̈ܢ", translit: "Esrin kthobin", phonetic: "Asrīn kthōbīn", indonesian: "Dua puluh buku" },
      { syriac: "ܐܰܠܦܳܐ ܓܰܒ݂ܪܺܝ̈ܢ", translit: "Alpho gabrin", phonetic: "Alphō gabrīn", indonesian: "Seribu orang laki-laki" }
    ],
    quizzes: [
      {
        id: 2901,
        question: "Apakah sebutan bahasa Aram untuk angka 'Dua Puluh'?",
        options: ["Tren", "Esrin (ܥܶܣܪܺܝܢ)", "Tlathin", "Mo"],
        correctAnswer: "Esrin (ܥܶܣܪܺܝܢ)",
        explanation: "`Esrin melambangkan angka 20."
      },
      {
        id: 2902,
        question: "Akhiran apakah yang mencirikan angka puluhan (30, 40, 50)?",
        options: ["-ton", "-in (ܺܝܢ)", "-atha", "-sar"],
        correctAnswer: "-in (ܺܝܢ)",
        explanation: "-in ditambahkan ke akar bilangan dasar pembentuk angka puluhan."
      },
      {
        id: 2903,
        question: "Kata 'Seribu' dalam bahasa Aram adalah...",
        options: ["M'o", "Alpho (ܐܰܠܦܳܐ)", "Esrin", "Hamshin"],
        correctAnswer: "Alpho (ܐܰܠܦܳܐ)",
        explanation: "Alpho / Alpa adalah bilangan cardinal seribu."
      },
      {
        id: 2904,
        question: "Seratus dalam bahasa Syriac adalah...",
        options: ["Hamshin", "Mo (ܡܳܐܐ)", "Alpho", "Esrin"],
        correctAnswer: "Mo (ܡܳܐܐ)",
        explanation: "Mo / M'o (ܡܐܐ) melambangkan bilangan seratus."
      },
      {
        id: 2905,
        question: "Bilangan 30 dalam bahasa Aram adalah...",
        options: ["Tren", "Tlathin", "Esrin", "Arb'in"],
        correctAnswer: "Tlathin",
        explanation: "Tlathin berasal dari Tlatha (3) + akhiran -in puluhan."
      }
    ]
  },
  {
    id: 30,
    title: "Struktur Kalimat Pasif Sederhana (Ethpeel)",
    titleSyriac: "ܡܠܬܐ ܕܐܬܦܥܠ",
    category: "Level A2",
    summary: "Memahami bentukan dasar kata kerja pasif Ethpeel.",
    introduction: "Pola pasif (passive voice) dalam Syriac dibentuk dengan menambahkan prefiks 'Eth-' (ܐܬ) di depan akar kata.",
    content: "Kategori Ethpeel adalah bentuk pasif dari Peal dasar. \nContoh perbandingan:\n- Kthab (Menulis) -> Ethktheb (Ditulis).\n- Shma' (Mendengar) -> Ethshma' (Didengar).\n\nKonjugasi Tunggal Lampau Ethpeel:\n- Itu telah ditulis (3ms): ܐܶܬ݂ܟ݁ܬ݂ܶܒ݂ (Ethktheb)\n- Saya telah terdaftar/tertulis: ܐܶܬ݂ܟ݁ܬ݂ܒ݁ܶܬ݂ (Ethkthebeth).",
    keyRules: [
      "Prefiks 'Eth-' (ܐܬ) adalah ciri khas mutlak seluruh keluarga verba pasif di dalam bahasa Aram klasik."
    ],
    vocabulary: [
      { syriac: "ܐܬܟܬܒ", translit: "Ethktheb", meaning: "Telah ditulis (Pasif)", category: "Kata Kerja Pasif" },
      { syriac: "ܐܬܦܬܚ", translit: "Ethpthah", meaning: "Telah dibuka (dari pthah - membuka)", category: "Kata Kerja Pasif" },
      { syriac: "ܐܬܩܛܠ", translit: "Ethqtel", meaning: "Telah dibunuh (dari qtal - membunuh)", category: "Kata Kerja Pasif" }
    ],
    examples: [
      { syriac: "ܐܶܬ݂ܦ݁ܬ݂ܰܚܬ ܗܰܝܟܠܳܐ", translit: "Ethpthah haykla", phonetic: "Ethpthaḥ hayklō", indonesian: "Bait suci itu telah dibuka" },
      { syriac: "ܐܶܬ݂ܟ݁ܬ݂ܶܒ݂ ܟܬܳܒܳܐ", translit: "Ethktheb kthobo", phonetic: "Ethktheb kthōbō", indonesian: "Buku itu telah ditulis" }
    ],
    quizzes: [
      {
        id: 3001,
        question: "Prefiks penanda apakah yang wajib mengawali silsilah kata kerja pasif (Ethpeel)?",
        options: ["Ma-", "Ne-", "Eth- (ܐܬ)", "Qa-"],
        correctAnswer: "Eth- (ܐܬ)",
        explanation: "Prefiks Eth- (ܐܬ) melambangkan modifikasi pasif konjugasi refleksif."
      },
      {
        id: 3002,
        question: "Apakah makna dari kata kerja pasif 'ܐܶܬ݂ܦ݁ܬ݂ܰܚ' (Ethpthah)?",
        options: ["Telah menulis", "Telah dibuka", "Telah didengar", "Telah dibunuh"],
        correctAnswer: "Telah dibuka",
        explanation: "Ethpthah berasal dari Pthah (membuka), menerima prefiks pasif menjadi 'dibuka'."
      },
      {
        id: 3003,
        question: "Bentuk pasif dari kata kerja membunuh 'Qtal' dalam pola Ethpeel 3ms adalah...",
        options: ["Ethqtel (ܐܬܩܛܠ)", "Qattel", "Neqtol", "Ethktheb"],
        correctAnswer: "Ethqtel (ܐܬܩܛܠ)",
        explanation: "Ethqtel berarti telah dibunuh secara pasif."
      },
      {
        id: 3004,
        question: "Menerjemahkan 'Saya telah terdaftar/tertulis' dalam Ethpeel tunggal CS adalah...",
        options: ["Ethktheb", "Ethkthebeth", "Ethkthebton", "Ethkthebath"],
        correctAnswer: "Ethkthebeth",
        explanation: "Sufiks '-eth' digabung dengan prefiks pasif Ethktheb melahirkan makna 'saya ditulis/terdaftar'."
      },
      {
        id: 3005,
        question: "Rumpun kata dasar 'Malka' menerima awalan pasif menjadi...",
        options: ["Malka tidak dikonjugasikan pasif karena itu kata benda", "Ethmalka", "Malktha", "Malke"],
        correctAnswer: "Malka tidak dikonjugasikan pasif karena itu kata benda",
        explanation: "Konjugasi pasif melingkar mutlak hanya berlaku untuk kata kerja (verba), bukan kata benda."
      }
    ]
  },
  {
    id: 31,
    title: "Pembentukan Nomina Verba (Infinitive & Participle)",
    titleSyriac: "ܫܡܐ ܕܡܦܥܠܢܘܬܐ",
    category: "Level A2",
    summary: "Aturan mengubah kata kerja menjadi format kata benda (infinitive) atau kata sifat pelaku (participle).",
    introduction: "Infinitive (kata benda tindakan) dan Participle (pelaku perbuatan) berperan penting memperluas kosakara sintaksis.",
    content: "Di bawah tradisi Peal:\n1. Infinitive dibentuk dengan pola prefiks 'M-' (Mim) + akhiran '-u / -utha'.\nContoh: Kthab (menulis) -> Mekthab (tindakan menulis).\n2. Active Participle mengekspresikan pelaku atau perbuatan yang sedang berlangsung.\nContoh: Koteb (menulis / sang penulis).",
    keyRules: [
      "Infinitive sering didahului preposisi 'L-' (L-mekthab = untuk menulis).",
      "Active participle sering digunakan menggantikan kala masa kini."
    ],
    vocabulary: [
      { syriac: "ܡܟܬܒ", translit: "Mekthab", meaning: "Menulis (Infinitive)", category: "Nomina Verba" },
      { syriac: "ܟܘܬܒ", translit: "Koteb", meaning: "Yang sedang menulis / Penulis (Participle)", category: "Nomina Verba" },
      { syriac: "ܠܡܟܬܒ", translit: "l-mekthab", meaning: "untuk menulis", category: "Nomina Verba" }
    ],
    examples: [
      { syriac: "ܨܒܐ ܐܢܐ ܠܡܟܬܒ", translit: "Sbe eno l-mekthab", phonetic: "Sbe enō l-mekthab", indonesian: "Saya ingin menulis" },
      { syriac: "ܗܽܘ ܟܳܬ݂ܶܒ݂ ܟܬܳܒܳܐ", translit: "Hu koteb kthobo", phonetic: "Hu kōtheb kthōbō", indonesian: "Dia sedang menulis sebuah buku" }
    ],
    quizzes: [
      {
        id: 3101,
        question: "Prefiks huruf apakah yang mutlak mengawali bentukan kata benda tindakan (Infinitive)?",
        options: ["Yodh", "Mim (ܡ)", "Alap", "Waw"],
        correctAnswer: "Mim (ܡ)",
        explanation: "Infinitive Syriac diawali huruf Mim (M- / Ma-). Misal: Mekthab."
      },
      {
        id: 3102,
        question: "Apakah arti dari bentukan 'Koteb' (ܟܳܬ݂ܶܒ݂)?",
        options: ["Dia telah menulis", "Saya akan menulis", "Sang penulis / Sedang menulis (Active Participle)", "Jangan menulis!"],
        correctAnswer: "Sang penulis / Sedang menulis (Active Participle)",
        explanation: "Koteb merujuk aktif participle pelaku 'penulis/sedang menulis'."
      },
      {
        id: 3103,
        question: "Bagaimanakah mengekspresikan 'untuk menulis' ?",
        options: ["mekthab", "l-mekthab (ܠܡܟܬܒ)", "b-kthab", "d-kthab"],
        correctAnswer: "l-mekthab (ܠܡܟܬܒ)",
        explanation: "Preposisi L- digabung dengan infinitive melahirkan arti direktif tugas 'untuk melakukan'."
      },
      {
        id: 3104,
        question: "Kata 'Mekthab' diturunkan dari akar kata dasar...",
        options: ["Malka", "Kthab (ܟܬܒ)", "Shma'", "Alaha"],
        correctAnswer: "Kthab (ܟܬܒ)",
        explanation: "Mekthab adalah bentuk infinitive orisinil verba Kthab (menulis)."
      },
      {
        id: 3105,
        question: "Active Participle dalam kehidupan lisan sering dipergunakan untuk mewakili kala...",
        options: ["Masa Kini (Present)", "Masa Lampau (Past)", "Masa Depan (Future)", "Larangan"],
        correctAnswer: "Masa Kini (Present)",
        explanation: "Participle sangat lazim dipakai mengekspresikan aksi waktu dekat/seketika ini (present continuous)."
      }
    ]
  },
  {
    id: 32,
    title: "Ungkapan Percakapan Harian Dasar",
    titleSyriac: "ܗܘܡܪ̈ܐ ܕܫܠܡܐ",
    category: "Level A2",
    summary: "Belajar salam, perkenalan, dan percakapan harian praktis harian.",
    introduction: "Mempelajari frasa fungsional agar dapat berkomunikasi secara verbal sederhana dalam dialek klasik/modern.",
    content: "Daftar Salam Klasik:\n- Salam sejahtera / Halo: ܫܠܳܡܳܐ (Shlomo)\n- Atasmu damai sejahtera: ܫܠܳܡܳܐ ܥܰܠܳܟ݂ (Shlomo `alakh)\n- Terima kasih: ܬܰܘܕ݁ܺܝ (Tawdi)\n- Siapa namamu?: ܡܰܢܽܘ ܫܡܳܟ݂ (Mano shmakh)\n- Namaku...: ܫܡܝܳܐ ܗܽܘ (Shmy hu...).\n- Sampai jumpa: ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ (Push bashlomo).",
    keyRules: [
      "Pelafalan dialek barat cenderung menonjolkan bunyi vokal 'o' (Shlomo), sedangkan dialek timur mempertahankan vokal 'a' (Shlama)."
    ],
    vocabulary: [
      { syriac: "ܫܠܡܐ", translit: "Shlomo", meaning: "Salam / Damai / Halo", category: "Percakapan" },
      { syriac: "ܬܘܕܝ", translit: "Tawdi", meaning: "Terima kasih", category: "Percakapan" },
      { syriac: "ܒܒܥܘ", translit: "B-b'u", meaning: "Tolong / Silakan", category: "Percakapan" }
    ],
    examples: [
      { syriac: "ܫܠܳܡܳܐ ܥܰܠܳܟ݂ ܡܰܠܦܳܢܳܐ", translit: "Shlomo `alakh malpono", phonetic: "Shlōmō `alokh malpōnō", indonesian: "Salam sejahtera atasmu, Guru" },
      { syriac: "ܬܰܘܕ݁ܺܝ ܪܰܒ݁ܬ݂ܳܐ", translit: "Tawdi rabtha", phonetic: "Tawdī rabtō", indonesian: "Terima kasih banyak" }
    ],
    quizzes: [
      {
        id: 3201,
        question: "Apakah arti dari ucapan salam universal 'ܫܠܳܡܳܐ' (Shlomo)?",
        options: ["Selamat pagi", "Sampai jumpa", "Salam / Damai / Halo", "Terima kasih"],
        correctAnswer: "Salam / Damai / Halo",
        explanation: "Shlomo / Shlama melambangkan ucapan damai atau salam penjelas kekerabatan."
      },
      {
        id: 3202,
        question: "Ungkapan apresiatif 'Tawdi' (ܬܰܘܕ݁ܺܝ) menterjemahkan...",
        options: ["Sama-sama", "Terima kasih", "Tolong", "Maaf"],
        correctAnswer: "Terima kasih",
        explanation: "Tawdi / Tawdi rabto melambangkan ungkapan rasa syukur atau terima kasih."
      },
      {
        id: 3203,
        question: "Bagaimanakah menanyakan nama seseorang pria 'Siapa namamu?'",
        options: ["Man at", "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)", "Ayka at", "Push bashlomo"],
        correctAnswer: "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)",
        explanation: "Mano shmakh diterjemahkan harafiah 'apa namamu (m)'."
      },
      {
        id: 3204,
        question: "Ucapan pelepas perpisahan 'sampai jumpa / tinggallah dalam damai' adalah...",
        options: ["Shlomo `alakh", "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)", "Tawdi", "B-b'u"],
        correctAnswer: "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)",
        explanation: "Push bashlomo berarti ditinggalkan dalam damai (sampai jumpa)."
      },
      {
        id: 3205,
        question: "Apakah arti dari frasa 'Tawdi rabtha'?",
        options: ["Tolong bantu saya", "Terima kasih banyak", "Siapa kamu", "Halo semuanya"],
        correctAnswer: "Terima kasih banyak",
        explanation: "Tawdi = terima kasih, rabtha = besar (f). Berarti 'Terima kasih banyak'."
      }
    ]
  },
  {
    id: 33,
    title: "Anggota Keluarga & Hubungan Sosial",
    titleSyriac: "ܗܕ̈ܡܐ ܕܝܩܪܬܐ",
    category: "Level A2",
    summary: "Kosakata seputar keluarga inti dan hubungan sosial terdekat.",
    introduction: "Menguasai panggilan akrab keluarga di dalam tatanan silsilah rumah tangga.",
    content: "Kosakata Anggota Keluarga:\n- Ayah: ܐܰܒܳܐ (Aba)\n- Ibu: ܐܶܡܳܐ (Ema)\n- Anak laki-laki: ܒ݁ܪܳܐ (Bra / Bera)\n- Anak perempuan: ܒ݁ܰܪܬܳܐ (Bartha)\n- Saudara laki-laki: ܐܰܚܳܐ (Aha)\n- Saudara perempuan: ܚܳܬ݂ܳܐ (Hatha).",
    keyRules: [
      "Bentuk jamak dari 'Aha' (saudara laki-laki) memiliki pola tidak beraturan 'Ahe' (ܐܚ̈ܐ).",
      "Keluarga disebut 'Yqarto' (ܝܰܩܰܪܬܳܐ)."
    ],
    vocabulary: [
      { syriac: "ܐܒܐ", translit: "Aba", meaning: "Ayah / Bapa", category: "Keluarga" },
      { syriac: "ܐܡܐ", translit: "Ema", meaning: "Ibu", category: "Keluarga" },
      { syriac: "ܒܪܐ", translit: "Bera", meaning: "Anak Laki-laki", category: "Keluarga" }
    ],
    examples: [
      { syriac: "ܐܰܒ݁ܳܐ ܘܐܶܡܳܐ ܘܒ݂ܪܳܐ", translit: "Aba w-Ema w-Bra", phonetic: "Abō w-Emō w-Brō", indonesian: "Ayah, Ibu, dan Anak laki-laki" },
      { syriac: "ܗܳܕܶܐ ܚܳܬ݂ܝ", translit: "Hade hathy", phonetic: "Hodē ḥōty", indonesian: "Ini adalah saudara perempuanku" }
    ],
    quizzes: [
      {
        id: 3301,
        question: "Apakah padanan kata bahasa Aram untuk 'Anak laki-laki'?",
        options: ["Aba", "Ema", "Bra / Bera (ܒ݁ܪܳܐ)", "Bartha"],
        correctAnswer: "Bra / Bera (ܒ݁ܪܳܐ)",
        explanation: "Bera / Bra melambangkan anak laki-laki."
      },
      {
        id: 3302,
        question: "Kata 'ܚܳܬ݂ܳܐ' (Hatha) bertumpu pada anggota keluarga...",
        options: ["Saudara Laki-laki", "Saudara Perempuan", "Paman", "Kakek"],
        correctAnswer: "Saudara Perempuan",
        explanation: "Hatha / Ḥōthō melambangkan saudara perempuan."
      },
      {
        id: 3303,
        question: "Bagaimanakah memanggil 'Ibuku' dengan akhiran sufiks yang tepat?",
        options: ["Emy (ܐܶܡܝ)", "Emakh", "Emtheh", "Eme"],
        correctAnswer: "Emy (ܐܶܡܝ)",
        explanation: "Ema + y = Emy (Ibuku)."
      },
      {
        id: 3304,
        question: "Apakah arti dari kata 'Bartha' (ܒ݁ܰܪܬܳܐ)?",
        options: ["Ibu", "Ratu", "Anak perempuan", "Nenek"],
        correctAnswer: "Anak perempuan",
        explanation: "Bartha / Bartō melambangkan anak perempuan, bentuk feminin dari Bera."
      },
      {
        id: 3305,
        question: "Keluarga secara kolektif diistilahkan sebagai...",
        options: ["Mdintha", "Yqarta (ܝܰܩܰܪܬܳܐ)", "Malpetha", "Edta"],
        correctAnswer: "Yqarta (ܝܰܩܰܪܬܳܐ)",
        explanation: "Yqarta / Yqartō memiliki makna harfiah 'yang berharga', digunakan untuk mendeskripsikan rukun keluarga."
      }
    ]
  },
  {
    id: 34,
    title: "Nama Hewan Klasik",
    titleSyriac: "ܫܡܳܗ̈ܐ ܕܚܝܘܬ̈ܐ",
    category: "Level A2",
    summary: "Kosakata seputar binatang dalam pustaka herba dan sastra klasik.",
    introduction: "Hewan memiliki peran sosiologis kuat dalam pepatah dan kiasan teks Timur Tengah kuno.",
    content: "Kosakata Binatang Dasar:\n- Singa: ܐܰܪܝܳܐ (Aryo)\n- Domba: ܥܶܪܒܳܐ ('Erbo)\n- Merpati: ܝܰܘܢܳܐ (Yawno)\n- Keledai: ܚܡܳܪܳܐ (Hmoro)\n- Serigala: ܕܺܐܒܳܐ (Dibo).",
    keyRules: [
      "Secara teologis domba (Erbo) melambangkan jemaat, sementara singa (Aryo) keperkasaan."
    ],
    vocabulary: [
      { syriac: "ܐܪܝܐ", translit: "Aryo", meaning: "Singa", category: "Hewan" },
      { syriac: "ܥܪܒܐ", translit: "Erbo", meaning: "Domba", category: "Hewan" },
      { syriac: "ܝܘܢܐ", translit: "Yawno", meaning: "Merpati", category: "Hewan" }
    ],
    examples: [
      { syriac: "ܐܰܪܝܳܐ ܪܰܒܳܐ", translit: "Aryo rabo", phonetic: "Aryō Rabō", indonesian: "Singa yang besar" },
      { syriac: "ܥܶܪܒܳܐ ܫܡܳܥ ܩܳܠܳܐ", translit: "Erbo shmá qolo", phonetic: "`Erbō shma` qōlō", indonesian: "Domba itu mendengar suara itu" }
    ],
    quizzes: [
      {
        id: 3401,
        question: "Binatang manakah yang dilambangkan oleh kata 'ܐܰܪܝܳܐ' (Aryo)?",
        options: ["Domba", "Singa", "Burung", "Serigala"],
        correctAnswer: "Singa",
        explanation: "Aryo / Aryā berarti singa (lambang kekuasaan/kekuatan)."
      },
      {
        id: 3402,
        question: "Kata 'ܝܰܘܢܳܐ' (Yawno) menceritakan unggas...",
        options: ["Rajawali", "Merpati", "Ayam", "Gagak"],
        correctAnswer: "Merpati",
        explanation: "Yawno / Yawnā melambangkan burung merpati."
      },
      {
        id: 3403,
        question: "Apakah makna dari kata 'ܥܶܪܒܳܐ' (Erbo)?",
        options: ["Domba", "Keledai", "Ular", "Kuda"],
        correctAnswer: "Domba",
        explanation: "`Erbo / `Erbā adalah domba."
      },
      {
        id: 3404,
        question: "Siapakah musuh domba di hutan yang diistilahkan 'Dibo' (ܕܺܐܒܳܐ)?",
        options: ["Merpati", "Ular", "Serigala", "Singa"],
        correctAnswer: "Serigala",
        explanation: "Dibo secara harafiah berarti serigala."
      },
      {
        id: 3405,
        question: "Hewan beban 'Hmoro' (ܚܡܳܪܳܐ) merepresentasikan...",
        options: ["Kuda", "Keledai", "Sapi", "Unta"],
        correctAnswer: "Keledai",
        explanation: "Hmoro / Ḥmōrō bernilai arti keledai."
      }
    ]
  },
  {
    id: 35,
    title: "Geografi, Cuaca & Alam Raya",
    titleSyriac: "ܟܝܢܐ ܘܐܝܪܐ",
    category: "Level A2",
    summary: "Mengulas unsur bumi, gejala cuaca, dan alam semesta.",
    introduction: "Mempelajari nama obyek alam raya mengukuhkan literatur pembacaan teks natural.",
    content: "Kosakata Alam:\n- Langit/Surga: ܫܡܰܝܳܐ (Shmayya)\n- Bumi/Tanah: ܐܰܪܥܳܐ (Ar'a)\n- Air: ܡܰܝܳܐ (Mayya)\n- Api: ܢܽܘܪܳܐ (Nura)\n- Angin/Roh: ܪܽܘܚܳܐ (Ruha).",
    keyRules: [
      "Bumi (Ar'a) dan Roh/Angin (Ruha) secara gramatikal dinilai bergender Feminin."
    ],
    vocabulary: [
      { syriac: "ܐܪܥܐ", translit: "Ar'a", meaning: "Bumi / Tanah", category: "Geografi" },
      { syriac: "ܡܝܐ", translit: "Mayya", meaning: "Air", category: "Geografi" },
      { syriac: "ܪܘܚܐ", translit: "Ruha", meaning: "Angin / Roh / Nafas", category: "Geografi" }
    ],
    examples: [
      { syriac: "ܫܡܰܝܳܐ ܘܐܰܪܥܳܐ", translit: "Shmayya w-Ar'a", phonetic: "Shmayō w-Ar`ō", indonesian: "Langit dan Bumi" },
      { syriac: "ܡܰܝܳܐ ܚܰܝ̈ܶܐ", translit: "Mayya hayye", phonetic: "Mayyō ḥayyē", indonesian: "Air kehidupan" }
    ],
    quizzes: [
      {
        id: 3501,
        question: "Manakah di antara kata berikut yang berarti 'Bumi atau Tanah'?",
        options: ["Shmayya", "Ar'a (ܐܰܪܥܳܐ)", "Mayya", "Nura"],
        correctAnswer: "Ar'a (ܐܰܪܥܳܐ)",
        explanation: "Ar'a / Ar`ō melambangkan bumi, tanah, atau negeri."
      },
      {
        id: 3502,
        question: "Kata cair 'ܡܰܝܳܐ' (Mayya) diterjemahkan sebagai...",
        options: ["Batu", "Air", "Api", "Angin"],
        correctAnswer: "Air",
        explanation: "Mayya adalah air (jamak bawaan intrinsik)."
      },
      {
        id: 3503,
        question: "Apakah makna ganda dari partikel teologis 'ܪܽܘܚܳܐ' (Ruha)?",
        options: ["Tanah & Pasir", "Api & Cahaya", "Angin / Roh / Nafas kehidupan", "Langit & Awan"],
        correctAnswer: "Angin / Roh / Nafas kehidupan",
        explanation: "Ruha / Ruḥō melambangkan angin fisik, hembusan nafas, maupun jati diri Roh."
      },
      {
        id: 3504,
        question: "Elemen membakar 'Nura' (ܢܽܘܪܳܐ) berarti...",
        options: ["Darat", "Air", "Api", "Asap"],
        correctAnswer: "Api",
        explanation: "Nura berarti api atau kobaran pembakaran."
      },
      {
        id: 3505,
        question: "Apakah arti dari frasa 'Mayya hayye'?",
        options: ["Udar segar", "Tanah subur", "Air kehidupan", "Api besar"],
        correctAnswer: "Air kehidupan",
        explanation: "Mayye = air, hayye = hidup/kehidupan. Berarti 'Air kehidupan'."
      }
    ]
  },
  {
    id: 36,
    title: "Kosakata Makanan & Minuman",
    titleSyriac: "ܫܡܳܗ̈ܐ ܕܡܶܐܟܘܠܬ݂ܳܐ",
    category: "Level A2",
    summary: "Kumpulan nama kuliner khas Timur Tengah kuno, sayur, roti, anggur.",
    introduction: "Dapur kuliner klasik memperkaya pengetahuan idiomatis kehidupan purba.",
    content: "Kosakata Konsumsi:\n- Roti: ܠܰܚܡܳܐ (Lakhma)\n- Anggur: ܚܰܡܪܳܐ (Hamra)\n- Garam: ܡܶܠܚܳܐ (Melha)\n- Madu: ܕܶܒ݂ܫܳܐ (Debsho)\n- Minyak: ܡܶܫܚܳܐ (Mesha).",
    keyRules: [
      "Minyak urapan jasmani suci disebut 'Meshha' (Minyak), asal nama Mesias/Mshiha (yang diurapi)."
    ],
    vocabulary: [
      { syriac: "ܠܚܡܐ", translit: "Lakhma", meaning: "Roti / Makanan utama", category: "Konsumsi" },
      { syriac: "ܚܡܪܐ", translit: "Hamra", meaning: "Anggur (Wine)", category: "Konsumsi" },
      { syriac: "ܡܠܚܐ", translit: "Melha", meaning: "Garam", category: "Konsumsi" }
    ],
    examples: [
      { syriac: "ܠܰܚܡܳܐ ܕ݁ܩܽܘܪܒܳܢܳܐ", translit: "Lakhma d-qurbana", phonetic: "Laḥmō d-qurbonō", indonesian: "Roti persembahan" },
      { syriac: "ܚܰܡܪܳܐ ܚܰܕ݂ܬܳܐ", translit: "Hamra hdatha", phonetic: "Ḥamrō ḥdatō", indonesian: "Anggur baru" }
    ],
    quizzes: [
      {
        id: 3601,
        question: "Makanan pokok universal 'Roti' diistilahkan sebagai...",
        options: ["Hamra", "Lakhma (ܠܰܚܡܳܐ)", "Melha", "Debsho"],
        correctAnswer: "Lakhma (ܠܰܚܡܳܐ)",
        explanation: "Lakhma melambangkan roti atau makanan primer penopang hidup."
      },
      {
        id: 3602,
        question: "Keperluan perjamuan 'Anggur suci' diwakili oleh kata...",
        options: ["Lakhma", "Hamra (ܚܰܡܪܳܐ)", "Mesha", "Debsho"],
        correctAnswer: "Hamra (ܚܰܡܪܳܐ)",
        explanation: "Hamra / Ḥamrō melambangkan sari buah anggur."
      },
      {
        id: 3603,
        question: "Bumbu penyedap pengawet 'Melha' (ܡܶܠܚܳܐ) berarti...",
        options: ["Ragi", "Garam", "Madu", "Cuka"],
        correctAnswer: "Garam",
        explanation: "Melha mengacu kepada komoditas garam pelestari rasa."
      },
      {
        id: 3604,
        question: "Cairan manis 'Debsho' (ܕܶܒ݂ܫܳܐ) merepresentasikan...",
        options: ["Susu", "Madu", "Mecen", "Sari buah"],
        correctAnswer: "Madu",
        explanation: "Debsho / Debshā adalah madu hutan alami."
      },
      {
        id: 3605,
        question: "Minyak secara umum diistilahkan 'Mesha' (ܡܶܫܚܳܐ), yang menjadi akar kata...",
        options: ["Malka (Raja)", "Mshiha (Mesias / Yang diurapi)", "Shlomo (Damai)", "Alaha"],
        correctAnswer: "Mshiha (Mesias / Yang diurapi)",
        explanation: "Mesha (minyak urapan) melandasi sebutan Mshiha (Mesias) atau 'Yang mendapat sapuan minyak suci'."
      }
    ]
  },
  {
    id: 37,
    title: "Konjungsi Kompleks & Anak Kalimat",
    titleSyriac: "ܩܫܪ̈ܐ ܕܣܝܳܩܐ",
    category: "Level A2",
    summary: "Mengaplikasikan kata hubung bersyarat dan temporal: Kad (ketika), En (jika), d-layt (supaya tidak).",
    introduction: "Anak kalimat (dependent clause) membutuhkan penunjuk sebab-akibat yang mendalam.",
    content: "Daftar Konjungsi Bersyarat:\n- Kad (ܟܰܕ݂) : Ketika, tatkala, saat sedang.\n- En (ܐܶܢ) : Jika.\n- Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ) : Agar tidak / Supaya jangan.\n- 'Ad (ܥܰܕ݂) : Hingga, sampai, selama.",
    keyRules: [
      "Penerapan partikel ini membentuk lompatan logika waktu di dalam susunan klausa teks narasi sejarah."
    ],
    vocabulary: [
      { syriac: "ܟܕ", translit: "Kad", meaning: "Ketika / Saat sedang", category: "Konjungsi" },
      { syriac: "ܥܕ", translit: "Ad", meaning: "Hingga / Selama", category: "Konjungsi" },
      { syriac: "ܐܢ ܠܐ", translit: "En la", meaning: "Jika tidak (Unless)", category: "Konjungsi" }
    ],
    examples: [
      { syriac: "ܟܰܕ݂ ܐܳܬ݂ܶܐ ܗܽܘ", translit: "Kad athe hu", phonetic: "Kad otē hū", indonesian: "Ketika dia sedang datang" },
      { syriac: "ܥܰܕ݂ ܐܺܝܬ݂ ܠܟ݂ܽܘܢ ܢܽܘܗܪܳܐ", translit: "Ad ith lakhon nuhra", phonetic: "`Ad īt l-khūn nūhrō", indonesian: "Selama kalian memiliki terang" }
    ],
    quizzes: [
      {
        id: 3701,
        question: "Kata hubung temporal 'ܟܰܕ݂' (Kad) mengekspresikan arti...",
        options: ["Sebab", "Jika", "Ketika / Saat sedang", "Setelah selesai"],
        correctAnswer: "Ketika / Saat sedang",
        explanation: "Kad memancarkan relasi waktu berbenturan simultan ('tatkala/ketika sedang')."
      },
      {
        id: 3702,
        question: "Frasa 'ܥܰܕ݂ ܐܺܝܬ݂ ܠܟ݂ܽܘܢ ܢܽܘܗܪܳܐ' berarti...",
        options: ["Sampai kalian melihat gelap", "Selama kalian memiliki terang", "Terang telah pergi darimu", "Kami tidak ada cahaya"],
        correctAnswer: "Selama kalian memiliki terang",
        explanation: "Ad = selama, Ith = ada, l-khon = bagi kalian, nuhra = terang. 'Selama terang ada padamu'."
      },
      {
        id: 3703,
        question: "Mengekspresikan pencegahan 'Supaya jangan / Agar tidak' digunakan...",
        options: ["Metul-man", "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)", "Hono", "Ela"],
        correctAnswer: "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)",
        explanation: "Metul d-la bermakna 'demi/karena yang jangan' atau 'supaya tidak'."
      },
      {
        id: 3704,
        question: "Kata hubung 'En la' berarti...",
        options: ["Bila ada", "Jika tidak", "Karena itu", "Meskipun"],
        correctAnswer: "Jika tidak",
        explanation: "En = jika, la = tidak. Gabungan kondisional negatif."
      },
      {
        id: 3705,
        question: "Konjungsi temporal '`Ad' mengekspresikan...",
        options: ["Kemarin", "Hingga / Selama / Sampai", "Setelah", "Mungkin"],
        correctAnswer: "Hingga / Selama / Sampai",
        explanation: "`Ad menandai batas rentang waktu atau kontinuitas."
      }
    ]
  },
  {
    id: 38,
    title: "Kata Keterangan Waktu & Tempat",
    titleSyriac: "ܗܘܡܪ̈ܝ ܕܬܚܘܝܬܐ",
    category: "Level A2",
    summary: "Kosakata adverbia esensial: tman (di sana), rka (di sini), tmol (kemarin), yawmono (hari ini).",
    introduction: "Kata keterangan (adverb) menentukan koordinat ruang dan waktu jalannya aksi.",
    content: "Adverbia Ruang (Spesifik):\n- Di sini: ܗܳܪܟܳܐ (Harka)\n- Di sana: ܬܰܡܳܢ (Tman)\n\nAdverbia Waktu:\n- Hari ini: ܝܰܘܡܳܢܳܐ (Yawmono)\n- Kemarin: ܐܶܬ݂ܡܳܠܝ (Ethmoly)\n- Besok: ܡܚܳܪ (Mhar)\n- Sekarang: ܗܳܫܳܐ (Hasha).",
    keyRules: [
      "Banyak adverbia waktu dibentuk dengan menggabungkan kata benda dasar penunjuk temporal."
    ],
    vocabulary: [
      { syriac: "ܗܪܟܐ", translit: "Harka", meaning: "Di sini", category: "Adverbia" },
      { syriac: "ܬܡܢ", translit: "Tman", meaning: "Di sana", category: "Adverbia" },
      { syriac: "ܗܫܐ", translit: "Hasha", meaning: "Sekarang", category: "Adverbia" }
    ],
    examples: [
      { syriac: "ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ", translit: "Hu ithawhy harka", phonetic: "Hū īthawhy harkō", indonesian: "Dia ada di sini" },
      { syriac: "ܬܡܰܢ ܐܰܙܠܽܘܢ", translit: "Tman azlun", phonetic: "Tman azlūn", indonesian: "Ke sana mereka telah pergi" }
    ],
    quizzes: [
      {
        id: 3801,
        question: "Manakah penunjuk keterangan ruang yang berarti 'Di sini'?",
        options: ["Tman", "Harka (ܗܳܪܟܳܐ)", "Hasha", "Mhar"],
        correctAnswer: "Harka (ܗܳܪܟܳܐ)",
        explanation: "Harka melambangkan letak posisi kedekatan ('di sini')."
      },
      {
        id: 3802,
        question: "Kata penunjuk waktu 'ܗܳܫܳܐ' (Hasha) memiliki makna...",
        options: ["Hari ini", "Kemarin", "Sekarang / Saat ini", "Besok"],
        correctAnswer: "Sekarang / Saat ini",
        explanation: "Hasha / Hōshō melambangkan waktu sekarang atau saat ini seketika."
      },
      {
        id: 3803,
        question: "Penunjuk tempat jauh 'ܬܰܡܳܢ' (Tman) berarti...",
        options: ["Di sana", "Ke atas", "Di sini", "Di dalam"],
        correctAnswer: "Di sana",
        explanation: "Tman melambangkan letak koordinat jauh ('di sana')."
      },
      {
        id: 3804,
        question: "Bagaimanakah menterjemahkan 'Dia (pria) ada di sini' ?",
        options: ["Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)", "Hu ithawhy tman", "Layt harka", "Eno harka"],
        correctAnswer: "Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)",
        explanation: "Hu = dia, ithawhy = penegas keadaan ada (verb 'to be' enklitik), harka = di sini."
      },
      {
        id: 3805,
        question: "Apakah arti dari kata 'Mhar' (ܡܚܳܪ)?",
        options: ["Kemarin", "Hari ini", "Besok", "Tahun lalu"],
        correctAnswer: "Besok",
        explanation: "Mhar / Mḥor melambangkan hari esok/besok."
      }
    ]
  },
  {
    id: 39,
    title: "Pola Kata Kerja Aphel (Kausatif Aktif)",
    titleSyriac: "ܡܠܬܐ ܕܐܦܥܠ",
    category: "Level A2",
    summary: "Memahami struktur pembentukan kata kerja kausatif aktif Aphel.",
    introduction: "Pola Aphel digunakan untuk mengekspresikan instruktif-kausatif berupa 'menyuruh melakukan' atau 'membuat menjadi'.",
    content: "Ciri khas pembentukan Aphel adalah penambahan prefiks 'A-' (Alap dengan harakat) di depan akar kata perfect.\nContoh perbandingan:\n- Nehad (Peal): Terang / Bersinar.\n- Anhar (Aphel): Menerangi / Membuat menjadi terang.\n- Kthab (Menulis) -> Akhtheb (Mendikte/Menyuruh menulis).",
    keyRules: [
      "Huruf prefiks Alap (ܐ) adalah penanda mutlak klasifikasi orisinil verba Aphel."
    ],
    vocabulary: [
      { syriac: "ܐܢܗܪ", translit: "Anhar", meaning: "Telah menerangi (dari nehad)", category: "Kata Kerja Aphel" },
      { syriac: "ܐܩܝܡ", translit: "Aqim", meaning: "Telah membangkitkan (dari qam - berdiri)", category: "Kata Kerja Aphel" },
      { syriac: "ܐܚܬܒ", translit: "Akhtheb", meaning: "Telah mendikte (menyuruh menulis)", category: "Kata Kerja Aphel" }
    ],
    examples: [
      { syriac: "ܐܰܢܗܰܪ ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ", translit: "Anhar Alaha nuhra", phonetic: "Anhar Alaho nūhrō", indonesian: "Allah telah menerangkan cahaya itu" },
      { syriac: "ܐܰܩܺܝܡ ܡܰܠܟܳܐ ܬܰܠܡܺܝܕܳܐ", translit: "Aqim malka talmida", phonetic: "Aqīm malkō talmīdō", indonesian: "Raja telah membangunkan siswa itu" }
    ],
    quizzes: [
      {
        id: 3901,
        question: "Apakah makna gramatikal utama dari penambahan kelompok kata kerja 'Aphel'?",
        options: ["Menandakan arti pasif murni", "Menandakan Kausatif / Membuat subjek melakukan sesuatu", "Kondisi ragu-ragu", "Perintah langsung tanpa subjek"],
        correctAnswer: "Menandakan Kausatif / Membuat subjek melakukan sesuatu",
        explanation: "Aphel melambangkan aspek kausatif (membuat perbuatan terjadi)."
      },
      {
        id: 3902,
        question: "Prefiks huruf apakah yang wajib diletakkan di depan akar kata bentuk Perfect Aphel?",
        options: ["Taw", "Nun", "Alap (ܐ)", "Mim"],
        correctAnswer: "Alap (ܐ)",
        explanation: "Penambahan huruf Alap (ܐ-) di awal mencirikan pola utama Aphel 3ms."
      },
      {
        id: 3903,
        question: "Apakah arti dari kata kerja 'ܐܰܩܺܝܡ' (Aqim) diturunkan dari akar berdiri 'Qam'?",
        options: ["Membunuh", "Mendirikan / Membangkitkan", "Pergi keluar", "Kembali pulang"],
        correctAnswer: "Mendirikan / Membangkitkan",
        explanation: "Aqim berarti mendirikan, membangunkan, atau membangkitkan (kausatif dari berdiri)."
      },
      {
        id: 3904,
        question: "Kata kerja Aphel 'Anhar' berarti...",
        options: ["Menerangi / Membuat bercahaya", "Mendengar", "Menulis cepat", "Menolak"],
        correctAnswer: "Menerangi / Membuat bercahaya",
        explanation: "Anhar melambangkan arti kausatif menyinari/menerangi."
      },
      {
        id: 3905,
        question: "Kata 'Akhtheb' (ܐܚܬܒ) menterjemahkan perbuatan...",
        options: ["Mencatat harian", "Mendikte / Menyuruh menulis", "Membaca nyaring", "Menghapus tulisan"],
        correctAnswer: "Mendikte / Menyuruh menulis",
        explanation: "Kausatif dari menulis (Kthab) melahirkan arti menyuruh menulis atau mendikte."
      }
    ]
  },
  {
    id: 40,
    title: "Sintaksis & Analisis Sastra Klasik Sederhana",
    titleSyriac: "ܒܘܚܪܢܐ ܕܣܦܪܘܬܐ ܦܫܝܛܬܐ",
    category: "Level A2",
    summary: "Analisis sintaksis utuh naskah pendek untuk mempersiapkan transisi ke Level B1.",
    introduction: "Modul penutup Level A2 ini menguji kapabilitas baca Anda dengan mengintegrasikan sintaksis, sufiks, dan verba kausatif.",
    content: "Kita meneliti klausa pendek dari Kitab Kebijaksanaan:\n'Aba rahem l-breh, w-maqim leh b-nuhra raba' (Bapa mengasihi anaknya, dan membangkitkannya di dalam terang yang besar):\n- rahem: Mengasihi (Peal active participle).\n- l-breh: l- (kepada) + bera (anak) + -eh (sufiks -nya).\n- w-maqim: w- (dan) + maqim (Participle Aphel dari Aqim).\n- leh: l- (untuk) + -eh (dia).",
    keyRules: [
      "Keberhasilan menganalisis struktur kalimat membuktikan siswa telah menguasai kompetensi dasar intermedier Level A2."
    ],
    vocabulary: [
      { syriac: "ܪܚܡ", translit: "Rahem", meaning: "Mengasihi / Mencintai", category: "Analisis" },
      { syriac: "ܡܩܝܡ", translit: "Maqim", meaning: "Yang membangkitkan (Participle Aphel)", category: "Analisis" },
      { syriac: "ܠܒܪܗ", translit: "l-breh", meaning: "kepada anaknya (m)", category: "Analisis" }
    ],
    examples: [
      { syriac: "ܐܰܒܳܐ ܪܳܚܶܡ ܠܰܒ݂ܪܶܗ", translit: "Aba rahem l-breh", phonetic: "Abō rāḥem l-brēh", indonesian: "Bapa mengasihi anaknya" },
      { syriac: "ܡܰܩܺܝܡ ܠܶܗ ܒ݁ܢܽܘܗܪܳܐ", translit: "Maqim leh b-nuhra", phonetic: "Māqīm lēh b-nūhrō", indonesian: "Membangunkan dia di dalam terang" }
    ],
    quizzes: [
      {
        id: 4001,
        question: "Apakah arti dari kata kerja active participle 'ܪܳܚܶܡ' (Rahem)?",
        options: ["Menulis", "Mengasihi / Mencintai", "Membenci", "Mengajar"],
        correctAnswer: "Mengasihi / Mencintai",
        explanation: "Rahem / Rohem berasal dari r-h-m (kasih/sayang)."
      },
      {
        id: 4002,
        question: "Penggalan kata 'l-breh' (ܠܰܒ݂ܪܶܗ) diurai secara tepat menjadi...",
        options: ["Dan anak kami", "Kepada anaknya (m)", "Dari gurunya", "Tanpa anak perempuannya"],
        correctAnswer: "Kepada anaknya (m)",
        explanation: "Terdiri dari L- (kepada) + Bera (anak laki-laki) + -eh (sufiks -nya m tunggal)."
      },
      {
        id: 4003,
        question: "Bentuk participle kausatif 'Maqim' (ܡܩܝܡ) mengekspresikan peran...",
        options: ["Orang yang mengaji", "Orang yang mendirikan / membangkitkan", "Pencuri malam", "Raja yang tunduk"],
        correctAnswer: "Orang yang mendirikan / membangkitkan",
        explanation: "Maqim adalah active participle bentukan binner Aphel."
      },
      {
        id: 4004,
        question: "Bentuk feminin dari 'Aba rahem' (Bapa mengasihi) adalah 'Ema rahmo' yang berarti...",
        options: ["Kakak menolong", "Ibu mengasihi", "Ayah datang", "Anak pergi"],
        correctAnswer: "Ibu mengasihi",
        explanation: "Ema = ibu, rahmo = mengasihi (f participle)."
      },
      {
        id: 4005,
        question: "Uji pencapaian: Manakah di antara tingkat CEFR berikut yang merepresentasikan kompetensi modul 21-40 ini?",
        options: ["Level A1", "Level A2", "Level B1", "Level C2"],
        correctAnswer: "Level A2",
        explanation: "Modul 21-40 didesain khusus melayani penguasaan kompetensi tingkat CEFR Level A2."
      }
    ]
  }
];
