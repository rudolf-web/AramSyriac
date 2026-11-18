import { Module } from "../types";

export const modulesA2: Module[] = [
  {
    id: 21,
    title: "Kosakata Nama Hari & Pembagian Waktu",
    titleEn: "Vocabulary: Names of the Days & Divisions of Time",
    titleSyriac: "ܝܘܡܬ̈ܐ ܘܙܒܢ̈ܐ",
    category: "Level A2",
    summary: "Belajar nama-nama hari dalam seminggu dan pembagian waktu dalam bahasa Aram Syriac.",
    summaryEn: "Learn the names of the days of the week and the divisions of time in Syriac Aramaic.",
    introduction: "Bahasa Aram mengadopsi penamaan hari berdasarkan ordinal (hitungan angka), menyejajarkan sistem hari dengan tradisi Ibrani.",
    introductionEn: "Aramaic names the days by ordinals (counting numbers), aligning its system of days with the Hebrew tradition.",
    content: "Nama hari di Aram:\n- Minggu (Hari Satu): ܚܰܕܒ݁ܫܰܒ݁ܳܐ (Hadbshaba)\n- Senin (Hari Dua): ܬܪܶܝܢܒ݁ܫܰܒ݁ܳܐ (Trenbshaba)\n- Selasa (Hari Tiga): ܬܠܳܬ݂ܳܐ ܒ݁ܫܰܒ݁ܳܐ (Tlatha bshaba)\n- Rabu (Hari Empat): ܐܰܪܒ݁ܥܳܐ ܒ݁ܫܰܒ݁ܳܐ (Arb'a bshaba)\n- Kamis (Hari Lima): ܚܰܡܫܳܐ ܒ݁ܫܰܒ݁ܳܐ (Hamsha bshaba)\n- Jumat (Malam Sabtu): ܥܪܽܘܒ݂ܬܳܐ ('Arubtha)\n- Sabtu (Sabat): ܫܰܒ݁ܬ݂ܳܐ (Shabtha).",
    contentEn: "The names of the days in Aramaic:\n- Sunday (Day One): ܚܰܕܒ݁ܫܰܒ݁ܳܐ (Hadbshaba)\n- Monday (Day Two): ܬܪܶܝܢܒ݁ܫܰܒ݁ܳܐ (Trenbshaba)\n- Tuesday (Day Three): ܬܠܳܬ݂ܳܐ ܒ݁ܫܰܒ݁ܳܐ (Tlatha bshaba)\n- Wednesday (Day Four): ܐܰܪܒ݁ܥܳܐ ܒ݁ܫܰܒ݁ܳܐ (Arb'a bshaba)\n- Thursday (Day Five): ܚܰܡܫܳܐ ܒ݁ܫܰܒ݁ܳܐ (Hamsha bshaba)\n- Friday (Eve of Saturday): ܥܪܽܘܒ݂ܬܳܐ ('Arubtha)\n- Saturday (Sabbath): ܫܰܒ݁ܬ݂ܳܐ (Shabtha).",
    keyRules: [
      "Sebagian besar nama hari merupakan gabungan angka dengan 'b-Shaba' (di dalam minggu).",
      "Hari Jumat memiliki istilah tersendiri 'Arubto' yang berarti persiapan/malam masuknya sabat."
    ],
    keyRulesEn: [
      "Most day names combine a number with 'b-Shaba' (within the week).",
      "Friday has its own term, 'Arubto', which means preparation / the evening the Sabbath begins."
    ],
    vocabulary: [
      { syriac: "ܚܕܒܫܒܐ", translit: "Hadbshaba", meaning: "Hari Minggu", meaningEn: "Sunday", category: "Hari" },
      { syriac: "ܥܪܘܒܬܐ", translit: "Arubtha", meaning: "Hari Jumat (Persiapan)", meaningEn: "Friday (Preparation)", category: "Hari" },
      { syriac: "ܨܦܪܐ", translit: "Saphra / Tsaphro", meaning: "Pagi", meaningEn: "Morning", category: "Waktu" }
    ],
    examples: [
      { syriac: "ܒܚܕܒܫܒܐ ܐܙܠ ܐܢܐ ܠܥܕܬܐ", translit: "B-hadbshaba azel eno l-`idta", phonetic: "B-ḥadbshabō azel enō l-`īdtō", indonesian: "Pada hari Minggu saya pergi ke gereja", english: "On Sunday I go to church" },
      { syriac: "ܫܠܡܐ ܒܨܦܪܐ", translit: "Shlomo b-saphra", phonetic: "Shlōmō b-ṣaphrō", indonesian: "Selamat pagi", english: "Good morning" }
    ],
    quizzes: [
      {
        id: 2101,
        question: "Apakah nama hari Minggu dalam bahasa Aram Syriac?",
        questionEn: "What is the name for Sunday in Syriac Aramaic?",
        options: ["Shabtha", "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)", "Arubtha", "Trenbshaba"],
        optionsEn: ["Shabtha", "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)", "Arubtha", "Trenbshaba"],
        correctAnswer: "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)",
        correctAnswerEn: "Hadbshaba (ܚܰܕܒ݁ܫܰܒ݁ܳܐ)",
        explanation: "Hadbshaba secara harafiah berarti 'Satu di dalam pekan/minggu', merepresentasikan hari Minggu.",
        explanationEn: "Hadbshaba literally means 'One within the week', representing Sunday."
      },
      {
        id: 2102,
        question: "Hari 'ܥܪܽܘܒ݂ܬܳܐ' (Arubtha) dipadankan dengan hari...",
        questionEn: "The day 'ܥܪܽܘܒ݂ܬܳܐ' (Arubtha) corresponds to...",
        options: ["Senin", "Jumat", "Sabtu", "Rabu"],
        optionsEn: ["Monday", "Friday", "Saturday", "Wednesday"],
        correctAnswer: "Jumat",
        correctAnswerEn: "Friday",
        explanation: "Arubtha melambangkan hari persiapan (Jumat) menyongsong Sabat.",
        explanationEn: "Arubtha marks the day of preparation (Friday) ahead of the Sabbath."
      },
      {
        id: 2103,
        question: "Apakah arti dari kata 'ܨܦܪܐ' (Saphra)?",
        questionEn: "What does the word 'ܨܦܪܐ' (Saphra) mean?",
        options: ["Pagi", "Siang", "Malam", "Senja"],
        optionsEn: ["Morning", "Noon", "Night", "Evening"],
        correctAnswer: "Pagi",
        correctAnswerEn: "Morning",
        explanation: "Saphra / Tsaphro berarti fajar atau pagi.",
        explanationEn: "Saphra / Tsaphro means dawn or morning."
      },
      {
        id: 2104,
        question: "Hari 'ܫܰܒ݁ܬ݂ܳܐ' (Shabtha) melambangkan hari...",
        questionEn: "The day 'ܫܰܒ݁ܬ݂ܳܐ' (Shabtha) represents...",
        options: ["Minggu", "Senin", "Sabtu", "Kamis"],
        optionsEn: ["Sunday", "Monday", "Saturday", "Thursday"],
        correctAnswer: "Sabtu",
        correctAnswerEn: "Saturday",
        explanation: "Shabtha berasal dari kata dasar Sabat, melambangkan hari Sabtu.",
        explanationEn: "Shabtha comes from the root Sabbath, representing Saturday."
      },
      {
        id: 2105,
        question: "Kata dasar 'Zabna' (ܙܒܢܐ) memiliki arti...",
        questionEn: "The root word 'Zabna' (ܙܒܢܐ) means...",
        options: ["Tempat", "Waktu / Zaman", "Buku", "Kata kerja"],
        optionsEn: ["Place", "Time / Era", "Book", "Verb"],
        correctAnswer: "Waktu / Zaman",
        correctAnswerEn: "Time / Era",
        explanation: "Zabna berarti waktu, durasi, era, atau waktu tata bahasa.",
        explanationEn: "Zabna means time, duration, era, or grammatical tense."
      }
    ]
  },
  {
    id: 22,
    title: "Siklus Bulan & Penanda Tahun",
    titleEn: "The Cycle of Months & Markers of the Year",
    titleSyriac: "ܝܪ̈ܚܐ ܘܫܢܺܝ̈ܐ",
    category: "Level A2",
    summary: "Mengulas penamaan bulan klasik Aramaik dan struktur tahunan.",
    summaryEn: "A look at the classical Aramaic names of the months and the structure of the year.",
    introduction: "Bahasa Syriac mengadopsi penamaan bulan kalender Seleukid/Babilonia kuno yang unik.",
    introductionEn: "Syriac adopted the unique month names of the ancient Seleucid/Babylonian calendar.",
    content: "Nama Bulan Penting:\n- Nisan (April): ܢܺܝܣܳܢ (Nisan)\n- Tammuz (Juli): ܬܰܡܽܘܙ (Tammuz)\n- Tishri I (Oktober): ܬܶܫܪܺܝ ܩܰܕ݂ܺܝܡ (Tishri Qadim)\n- Kanun I (Desember): ܟܳܢܽܘܢ ܩܰܕ݂ܺܝܡ (Kanun Qadim).\n\nTahun disebut 'Shnato' (ܫܢܰܬ݂ܳܐ).",
    contentEn: "Important Month Names:\n- Nisan (April): ܢܺܝܣܳܢ (Nisan)\n- Tammuz (July): ܬܰܡܽܘܙ (Tammuz)\n- Tishri I (October): ܬܶܫܪܺܝ ܩܰܕ݂ܺܝܡ (Tishri Qadim)\n- Kanun I (December): ܟܳܢܽܘܢ ܩܰܕ݂ܺܝܡ (Kanun Qadim).\n\nThe year is called 'Shnato' (ܫܢܰܬ݂ܳܐ).",
    keyRules: [
      "Bulan klasik Aram terkait dengan perubahan siklus musim agraris Timur Tengah kuno.",
      "Untuk menyatakan tahun, digunakan kata 'Shena' (tunggal) atau 'Shne' (jamak)."
    ],
    keyRulesEn: [
      "The classical Aramaic months are tied to the changing seasons of the ancient Middle Eastern agricultural cycle.",
      "To express a year, the word 'Shena' (singular) or 'Shne' (plural) is used."
    ],
    vocabulary: [
      { syriac: "ܝܪܚܐ", translit: "Yarha", meaning: "Bulan (Month / Moon)", meaningEn: "Month (Month / Moon)", category: "Waktu" },
      { syriac: "ܫܢܬܐ", translit: "Shnato", meaning: "Tahun", meaningEn: "Year", category: "Waktu" },
      { syriac: "ܢܝܣܢ", translit: "Nisan", meaning: "Bulan Nisan", meaningEn: "The month of Nisan", category: "Bulan" }
    ],
    examples: [
      { syriac: "ܫܢܰܬ݂ܳܐ ܚܕܰܬ݂ܳܐ", translit: "Shnato hdatha", phonetic: "Shnatō ḥdatō", indonesian: "Tahun baru", english: "New year" },
      { syriac: "ܝܰܪܚܳܐ ܫܰܦܺܝܪܳܐ", translit: "Yarha shapira", phonetic: "Yarḥō shapīrō", indonesian: "Rembulan yang indah", english: "A beautiful moon" }
    ],
    quizzes: [
      {
        id: 2201,
        question: "Apakah bahasa Aram dari kata 'Bulan' (baik kalender maupun benda langit)?",
        questionEn: "What is the Aramaic word for 'month' (both the calendar month and the moon)?",
        options: ["Shnato", "Yarha (ܝܪܚܐ)", "Zabna", "Yawma"],
        optionsEn: ["Shnato", "Yarha (ܝܪܚܐ)", "Zabna", "Yawma"],
        correctAnswer: "Yarha (ܝܪܚܐ)",
        correctAnswerEn: "Yarha (ܝܪܚܐ)",
        explanation: "Yarha / Yarḥō berarti bulan (secara penanggalan maupun bulan di langit).",
        explanationEn: "Yarha / Yarḥō means month (both the calendar month and the moon in the sky)."
      },
      {
        id: 2202,
        question: "Kata 'ܫܢܰܬ݂ܳܐ ܚܕܰܬ݂ܳܐ' (Shnato hdatha) diterjemahkan sebagai...",
        questionEn: "The phrase 'ܫܢܰܬ݂ܳܐ ܚܕܰܬ݂ܳܐ' (Shnato hdatha) translates as...",
        options: ["Bulan Baru", "Hari Baru", "Tahun Baru", "Kelahiran Baru"],
        optionsEn: ["New Moon", "New Day", "New Year", "New Birth"],
        correctAnswer: "Tahun Baru",
        correctAnswerEn: "New Year",
        explanation: "Shnato = tahun, hdatha = baru. Berarti 'Tahun Baru'.",
        explanationEn: "Shnato = year, hdatha = new. It means 'New Year'."
      },
      {
        id: 2203,
        question: "Bulan 'Nisan' diidentikkan dengan awal musim...",
        questionEn: "The month 'Nisan' is associated with the beginning of which season?",
        options: ["Dingin (Winter)", "Gugur (Autumn)", "Semi (Spring)", "Panas (Summer)"],
        optionsEn: ["Winter", "Autumn", "Spring", "Summer"],
        correctAnswer: "Semi (Spring)",
        correctAnswerEn: "Spring",
        explanation: "Nisan adalah bulan pertama di musim semi dalam sistem kuno Mesopotamia.",
        explanationEn: "Nisan is the first month of spring in the ancient Mesopotamian system."
      },
      {
        id: 2204,
        question: "Apakah arti dari kata 'Shne' (ܫܢܝ̈ܐ) dengan Seyame?",
        questionEn: "What does the word 'Shne' (ܫܢܝ̈ܐ) with Seyame mean?",
        options: ["Bulan-bulan", "Tahun-tahun", "Jam-jam", "Hari-hari"],
        optionsEn: ["Months", "Years", "Hours", "Days"],
        correctAnswer: "Tahun-tahun",
        correctAnswerEn: "Years",
        explanation: "Shne adalah plural jamak dari Shnato (tahun).",
        explanationEn: "Shne is the plural of Shnato (year)."
      },
      {
        id: 2205,
        question: "Bulan 'Kanun Qadim' setara dengan bulan...",
        questionEn: "The month 'Kanun Qadim' is equivalent to...",
        options: ["Januari", "Juni", "Desember", "Agustus"],
        optionsEn: ["January", "June", "December", "August"],
        correctAnswer: "Desember",
        correctAnswerEn: "December",
        explanation: "Kanun Qadim adalah sebutan ekivalen untuk bulan Desember klasik.",
        explanationEn: "Kanun Qadim is the classical name equivalent to December."
      }
    ]
  },
  {
    id: 23,
    title: "Sistem Sufiks Kepemilikan (Sufiks Pronominal)",
    titleEn: "The Possessive Suffix System (Pronominal Suffixes)",
    titleSyriac: "ܟܢܝ̈ܐ ܨܒܝ̈ܢܐ",
    category: "Level A2",
    summary: "Mempelajari penambahan akhiran kepemilikan langsung pada kata benda.",
    summaryEn: "Learn how possessive endings are attached directly to nouns.",
    introduction: "Bahasa Aram jarang memakai kata 'milikku' terpisah, melainkan menempelkan sufiks pronominal di ujung kata benda.",
    introductionEn: "Aramaic rarely uses a separate word for 'my' or 'mine'; instead it attaches a pronominal suffix to the end of the noun.",
    content: "Sufiks kepemilikan tunggal (pada kata 'Bayto' / Rumah):\n- Rumahku: ܒܰܝܬ݁ܝ (Bayty / Baythi)\n- Rumahmu (pria): ܒܰܝܬ݁ܳܟ݂ (Baythakh)\n- Rumahmu (perempuan): ܒܰܝܬ݁ܶܟ݂ (Baythekh)\n- Rumahnya (pria): ܒܰܝܬ݁ܶܗ (Baytheh)\n- Rumahnya (perempuan): ܒܰܝܬ݁ܳܗ (Baythah)\n- Rumah kami: ܒܰܝܬ݁ܰܢ (Baythan).",
    contentEn: "Singular possessive suffixes (on the word 'Bayto' / House):\n- My house: ܒܰܝܬ݁ܝ (Bayty / Baythi)\n- Your house (masculine): ܒܰܝܬ݁ܳܟ݂ (Baythakh)\n- Your house (feminine): ܒܰܝܬ݁ܶܟ݂ (Baythekh)\n- His house: ܒܰܝܬ݁ܶܗ (Baytheh)\n- Her house: ܒܰܝܬ݁ܳܗ (Baythah)\n- Our house: ܒܰܝܬ݁ܰܢ (Baythan).",
    keyRules: [
      "Sufiks disesuaikan berdasarkan jumlah kata benda (tunggal versus jamak sebelum ditempeli).",
      "Pencegahan tabrakan vokal memicu peleburan vokal akhir leksikal '-a'."
    ],
    keyRulesEn: [
      "The suffix is adjusted according to the number of the noun (singular versus plural before the suffix is attached).",
      "To avoid a clash of vowels, the final lexical vowel '-a' merges away."
    ],
    vocabulary: [
      { syriac: "ܒܝܬܝ", translit: "Baythy", meaning: "Rumahku", meaningEn: "My house", category: "Sufiks" },
      { syriac: "ܟܬܳܒܳܟ݂", translit: "Kthobakh", meaning: "Bukumu (m)", meaningEn: "Your book (m)", category: "Sufiks" },
      { syriac: "ܐܒܘܢ", translit: "Abun", meaning: "Bapa kami", meaningEn: "Our Father", category: "Sufiks" }
    ],
    examples: [
      { syriac: "ܗܳܢܳܐ ܟܬܳܒ݁ܝ", translit: "Hono Kthoby", phonetic: "Hono Kthōby", indonesian: "Ini adalah bukuku", english: "This is my book" },
      { syriac: "ܐܰܝܟܳܐ ܗܽܘ ܒܰܝܬ݁ܳܟ݂", translit: "Ayka hu baythakh", phonetic: "Ayko hū baythokh", indonesian: "Di manakah rumahmu (pria)?", english: "Where is your house (masculine)?" }
    ],
    quizzes: [
      {
        id: 2301,
        question: "Akhiran apakah yang melambangkan kepemilikan 'Saya' (-ku) pada kata benda tunggal?",
        questionEn: "Which ending marks the possession 'I' (-my) on a singular noun?",
        options: ["-akh", "-edh", "-y (ܝ)", "-an"],
        optionsEn: ["-akh", "-edh", "-y (ܝ)", "-an"],
        correctAnswer: "-y (ܝ)",
        correctAnswerEn: "-y (ܝ)",
        explanation: "-y (Yodh) di akhir kata melambangkan arti 'kemilikan saya' (misil: baythy = rumahku).",
        explanationEn: "The ending -y (Yodh) marks 'my' possession (for example: baythy = my house)."
      },
      {
        id: 2302,
        question: "Kata 'ܟܬܳܒܳܗ' (Kthobah) menterjemahkan konsep kepemilikan...",
        questionEn: "The word 'ܟܬܳܒܳܗ' (Kthobah) expresses the possession...",
        options: ["Bukumu (pria)", "Bukunya (wanita)", "Bukunya (pria)", "Buku kami"],
        optionsEn: ["Your book (masculine)", "Her book", "His book", "Our book"],
        correctAnswer: "Bukunya (wanita)",
        correctAnswerEn: "Her book",
        explanation: "Sufiks '-ah' (ܗ dengan vokal) melambangkan 'dia/nya perempuan'.",
        explanationEn: "The suffix '-ah' (ܗ with a vowel) marks 'she/her'."
      },
      {
        id: 2303,
        question: "Bagaimanakah menulis 'Buku kami' dari kata dasar 'Kthobo'?",
        questionEn: "How do you write 'Our book' from the root word 'Kthobo'?",
        options: ["Kthobakh", "Kthoby", "Kthoban (ܟܬܳܒܰܢ)", "Kthobeh"],
        optionsEn: ["Kthobakh", "Kthoby", "Kthoban (ܟܬܳܒܰܢ)", "Kthobeh"],
        correctAnswer: "Kthoban (ܟܬܳܒܰܢ)",
        correctAnswerEn: "Kthoban (ܟܬܳܒܰܢ)",
        explanation: "Akhiran '-an / -nan' melambangkan kepemilikan jamak pertama (buku kami).",
        explanationEn: "The ending '-an / -nan' marks first-person plural possession (our book)."
      },
      {
        id: 2304,
        question: "Sufiks '-akh' pada 'Baythakh' bertumpu pada subjek...",
        questionEn: "The suffix '-akh' in 'Baythakh' refers to the subject...",
        options: ["Kamu (pria)", "Kamu (perempuan)", "Saya", "Dia"],
        optionsEn: ["You (masculine)", "You (feminine)", "I", "He"],
        correctAnswer: "Kamu (pria)",
        correctAnswerEn: "You (masculine)",
        explanation: "Sufiks '-akh' melambangkan kepunyaan milik kamu tunggal maskulin.",
        explanationEn: "The suffix '-akh' marks possession belonging to you, singular masculine."
      },
      {
        id: 2305,
        question: "Bentuk 'Shem' (Nama) diberi sufiks '-akh' (kamu pria) dibaca...",
        questionEn: "The form 'Shem' (Name) with the suffix '-akh' (you, masculine) is read...",
        options: ["Shemy", "Shemakh", "Sheman", "Shemeh"],
        optionsEn: ["Shemy", "Shemakh", "Sheman", "Shemeh"],
        correctAnswer: "Shemakh",
        correctAnswerEn: "Shemakh",
        explanation: "Shemakh (ܫܡܟ) berarti Nama-Mu atau Nama kamu.",
        explanationEn: "Shemakh (ܫܡܟ) means Your name."
      }
    ]
  },
  {
    id: 24,
    title: "Preposisi Menengah - Istimewa",
    titleEn: "Intermediate Prepositions — Special Ones",
    titleSyriac: "ܐܘܣ̈ܦܐ ܩܫܝ̈ܐ",
    category: "Level A2",
    summary: "Menguasai preposisi lepasan menengah: Men (dari), `Al (atas/tentang), Lwat (kepada/bersama).",
    summaryEn: "Master the standalone prepositions: Men (from), `Al (on/about), Lwat (to/with).",
    introduction: "Selain preposisi melekat satu huruf, terdapat jajaran preposisi utuh mandiri.",
    introductionEn: "Besides the one-letter attached prepositions, there is a set of full, independent prepositions.",
    content: "Preposisi Lepas Terpilih:\n- Men (ܡܶܢ) : Dari / Semenjak (sering melebur menjadi prefiks m-).\n- `Al (ܥܰܠ) : Di atas, tentang, kepada.\n- Lwat (ܠܘܳܬ݂) : Menuju, ke arah, bersama (menyatakan relasi personal).",
    contentEn: "Selected Standalone Prepositions:\n- Men (ܡܶܢ): From / Since (often merging into the prefix m-).\n- `Al (ܥܰܠ): On, about, to.\n- Lwat (ܠܘܳܬ݂): Towards, to, with (expressing a personal relationship).",
    keyRules: [
      "Preposisi 'Men' jika disandingkan dengan kata bersuku awal lemah dapat berasimilasi konsonannya.",
      "Preposisi '`Al' sering berpasangan dengan sufiks pronominal."
    ],
    keyRulesEn: [
      "When the preposition 'Men' stands next to a word beginning with a weak syllable, its consonant can assimilate.",
      "The preposition '`Al' often pairs with pronominal suffixes."
    ],
    vocabulary: [
      { syriac: "ܡܢ", translit: "Men", meaning: "Dari", meaningEn: "From", category: "Preposisi" },
      { syriac: "ܥܠ", translit: "Al", meaning: "Di atas / Tentang", meaningEn: "On / About", category: "Preposisi" },
      { syriac: "ܠܘܬ", translit: "Lwat", meaning: "Kepada / Bersama", meaningEn: "To / With", category: "Preposisi" }
    ],
    examples: [
      { syriac: "ܡܶܢ ܐܰܝܟܳܐ ܐܰܢ݁ܬ݁", translit: "Men ayka at", phonetic: "Men ayko at", indonesian: "Dari manakah kamu?", english: "Where are you from?" },
      { syriac: "ܥܰܠ ܡܰܠܟܳܐ", translit: "al malka", phonetic: "`al malko", indonesian: "tentang sang raja", english: "about the king" }
    ],
    quizzes: [
      {
        id: 2401,
        question: "Apakah makna dari kata preposisi klasik 'ܡܶܢ' (Men)?",
        questionEn: "What is the meaning of the classical preposition 'ܡܶܢ' (Men)?",
        options: ["Kepada", "Dari / Semenjak", "Di atas", "Dengan"],
        optionsEn: ["To", "From / Since", "On", "With"],
        correctAnswer: "Dari / Semenjak",
        correctAnswerEn: "From / Since",
        explanation: "Men melambangkan asal, asimilasi, atau arti 'dari'.",
        explanationEn: "Men marks origin, assimilation, or the meaning 'from'."
      },
      {
        id: 2402,
        question: "Kata preposisi 'ܠܘܳܬ݂' (Lwat) bermakna...",
        questionEn: "The preposition 'ܠܘܳܬ݂' (Lwat) means...",
        options: ["Menuju / Kebersamaan personal", "Tentang saja", "Sebab akibat", "Pencegahan"],
        optionsEn: ["Towards / Personal togetherness", "About only", "Cause and effect", "Prevention"],
        correctAnswer: "Menuju / Kebersamaan personal",
        correctAnswerEn: "Towards / Personal togetherness",
        explanation: "Lwat melambangkan asimtot direksional personal ('ke/bersama seseorang').",
        explanationEn: "Lwat marks a personal directional relationship ('to/with someone')."
      },
      {
        id: 2403,
        question: "Bagaimanakah mengekspresikan 'tentang sang ratu' (ratu = malktha)?",
        questionEn: "How do you express 'about the queen' (queen = malktha)?",
        options: ["men malktha", "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)", "lwat malktha", "b-malktha"],
        optionsEn: ["men malktha", "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)", "lwat malktha", "b-malktha"],
        correctAnswer: "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)",
        correctAnswerEn: "al malktha (ܥܰܠ ܡܰܠܟܬ݂ܳܐ)",
        explanation: "`Al melambangkan arti 'tentang/mengenai' atau 'di atas'.",
        explanationEn: "`Al marks the meaning 'about/concerning' or 'on'."
      },
      {
        id: 2404,
        question: "Jika menyatu dengan kata 'Eno' (Saya), preposisi 'Men' menjadi 'Meny', melambangkan...",
        questionEn: "When joined to the word 'Eno' (I), the preposition 'Men' becomes 'Meny', meaning...",
        options: ["Dariku", "Kepadaku", "Denganku", "Atasku"],
        optionsEn: ["From me", "To me", "With me", "Above me"],
        correctAnswer: "Dariku",
        correctAnswerEn: "From me",
        explanation: "Men + y (sufiks saya) menjadi Meny/Meni, berarti 'dariku'.",
        explanationEn: "Men + y (the suffix 'my/I') becomes Meny/Meni, meaning 'from me'."
      },
      {
        id: 2405,
        question: "Kata preposisi '`Al' sering diterjemahkan sebagai...",
        questionEn: "The preposition '`Al' is often translated as...",
        options: ["Di bawah", "Di atas / Mengenai", " Ke dalam", "Sebelum"],
        optionsEn: ["Under", "On / Concerning", "Into", "Before"],
        correctAnswer: "Di atas / Mengenai",
        correctAnswerEn: "On / Concerning",
        explanation: "`Al (ܥܠ) melambangkan letak posisi di atas atau menceritakan tentang.",
        explanationEn: "`Al (ܥܠ) marks a position above or talking about something."
      }
    ]
  },
  {
    id: 25,
    title: "Kata Kerja Pael Perfect Lampau (Intensif)",
    titleEn: "Pael Perfect Past Verbs (Intensive)",
    titleSyriac: "ܡܠܬܐ ܕܦܥܠ",
    category: "Level A2",
    summary: "Memahami tema kata kerja intensif/kausatif Pael dalam kala lampau.",
    summaryEn: "Understand the intensive/causative Pael verb theme in the past tense.",
    introduction: "Bahasa Semitik menggunakan modifikasi vokal internal (stem) untuk merubah intensitas arti kata kerja. Pael adalah kategori intensif.",
    introductionEn: "Semitic languages use internal vowel changes (stems) to alter the intensity of a verb's meaning. Pael is the intensive category.",
    content: "Di bawah tema Pael, huruf konsonan kedua diberi penekanan berat (geminasi) dan perubahan pola vokal.\nContoh perbandingan:\n- Qadash (Peal): Kudus.\n- Qaddesh (Pael): Menguduskan / Menyucikan.\n\nKonjugasi Pael Perfect Lampau:\n- Dia pria menyucikan: ܩܰܕ݁ܶܫ (Qaddesh)\n- Dia wanita menyucikan: ܩܰܕ݁ܫܰܬ݂ (Qaddshath)\n- Saya menyucikan: ܩܰܕ݁ܫܶܬ݂ (Qaddshet).",
    contentEn: "In the Pael theme, the second root consonant is given heavy stress (gemination) and the vowel pattern changes.\nA comparison:\n- Qadash (Peal): Holy.\n- Qaddesh (Pael): To sanctify / To make holy.\n\nPael Perfect Past conjugation:\n- He sanctified: ܩܰܕ݁ܶܫ (Qaddesh)\n- She sanctified: ܩܰܕ݁ܫܰܬ݂ (Qaddshath)\n- I sanctified: ܩܰܕ݁ܫܶܬ݂ (Qaddshet).",
    keyRules: [
      "Ciri khas visual Pael di naskah vokal adalah penempatan tanda Qushaya (titik pengetat) di konsonan tengah pembentuk suku kata intensif."
    ],
    keyRulesEn: [
      "The visual hallmark of Pael in vocalized manuscripts is the Qushaya mark (a hardening dot) placed on the middle consonant that forms the intensive syllable."
    ],
    vocabulary: [
      { syriac: "ܩܕܫ", translit: "Qaddesh", meaning: "Dia telah menguduskan / menyucikan", meaningEn: "He has sanctified / made holy", category: "Kata Kerja Pael" },
      { syriac: "ܡܠܠ", translit: "Mallel", meaning: "Dia telah berbicara (dari malal = kata)", meaningEn: "He has spoken (from malal = word)", category: "Kata Kerja Pael" },
      { syriac: "ܫܒܚ", translit: "Shabbah", meaning: "Dia telah memuji / memuliakan", meaningEn: "He has praised / glorified", category: "Kata Kerja Pael" }
    ],
    examples: [
      { syriac: "ܩܰܕ݁ܶܫ ܐܰܠܳܗܳܐ ܝܰܘܡܳܐ", translit: "Qaddesh Alaha yawma", phonetic: "Qaddesh Alaho yawmō", indonesian: "Allah telah menguduskan hari itu", english: "God has sanctified that day" },
      { syriac: "ܫܰܒ݁ܚܶܬ݂ ܠܐܰܠܳܗܳܐ", translit: "Shabbahet l-Alaha", phonetic: "Shabbaḥet l-Alaho", indonesian: "Saya telah memuliakan Allah", english: "I have glorified God" }
    ],
    quizzes: [
      {
        id: 2501,
        question: "Apakah fungsi semantik utama dari kategori kata kerja 'Pael' dibanding Peal dasar?",
        questionEn: "What is the main semantic function of the verb category 'Pael' compared to the basic Peal?",
        options: ["Menyatakan aspek pasif", "Menyatakan makna Intensif / Kausatif Aktif", "Membuat kalimat tanya", "Meniadakan perbuatan"],
        optionsEn: ["It expresses the passive aspect", "It expresses an Intensive / Active Causative meaning", "It makes a question sentence", "It negates the action"],
        correctAnswer: "Menyatakan makna Intensif / Kausatif Aktif",
        correctAnswerEn: "It expresses an Intensive / Active Causative meaning",
        explanation: "Pael melambangkan penguatan perbuatan (misal: kudus menjadi menyucikan/menguduskan).",
        explanationEn: "Pael marks a strengthened action (for example: holy becomes to sanctify / to make holy)."
      },
      {
        id: 2502,
        question: "Kata 'ܩܰܕ݁ܶܫ' (Qaddesh) berbunyi vokal 'e' miring tebal di suku kata kedua, melambangkan pelaku...",
        questionEn: "The word 'ܩܰܕ݁ܶܫ' (Qaddesh) has a thick slanted 'e' vowel in the second syllable, marking the doer as...",
        options: ["Dia tunggal pria lampau (3ms)", "Dia tunggal wanita lampau", "Saya lampau", "Kalian jamak"],
        optionsEn: ["He, singular, past (3ms)", "She, singular, past", "I, past", "You, plural"],
        correctAnswer: "Dia tunggal pria lampau (3ms)",
        correctAnswerEn: "He, singular, past (3ms)",
        explanation: "Qaddesh adalah bentuk dasar leksikal Pael Perfect 3ms.",
        explanationEn: "Qaddesh is the basic lexical form of the Pael Perfect 3ms."
      },
      {
        id: 2503,
        question: "Bagaimana melafalkan kata Pael yang berarti 'Dia (m) telah memuji/memuliakan'?",
        questionEn: "How do you pronounce the Pael word meaning 'He has praised/glorified'?",
        options: ["Shabah", "Shabbah (ܫܒܚ)", "Shabla", "Shabbat"],
        optionsEn: ["Shabah", "Shabbah (ܫܒܚ)", "Shabla", "Shabbat"],
        correctAnswer: "Shabbah (ܫܒܚ)",
        correctAnswerEn: "Shabbah (ܫܒܚ)",
        explanation: "Mempunyai penekanan konsonan 'b' ganda: Shabbah.",
        explanationEn: "It has a doubled 'b' consonant: Shabbah."
      },
      {
        id: 2504,
        question: "Ubah kata kerja Peal 'Mallel' ke dalam bentuk orang pertama tunggal 'Saya telah berbicara'!",
        questionEn: "Change the Peal verb 'Mallel' into the first-person singular form 'I have spoken'!",
        options: ["Mallely", "Mallahe", "Mallelt (ܡܰܠܠܶܬ݂)", "Mallelun"],
        optionsEn: ["Mallely", "Mallahe", "Mallelt (ܡܰܠܠܶܬ݂)", "Mallelun"],
        correctAnswer: "Mallelt (ܡܰܠܠܶܬ݂)",
        correctAnswerEn: "Mallelt (ܡܰܠܠܶܬ݂)",
        explanation: "Sufiks '-et' (melekat pada kata kerja Pael) menghasilkan 'Mallelt' (Saya telah berbicara).",
        explanationEn: "The suffix '-et' (attached to a Pael verb) produces 'Mallelt' (I have spoken)."
      },
      {
        id: 2505,
        question: "Apakah arti dari kata kerja 'Qaddshath' (ܩܰܕ݁ܫܰܬ݂)?",
        questionEn: "What does the verb 'Qaddshath' (ܩܰܕ݁ܫܰܬ݂) mean?",
        options: ["Saya menyucikan", "Dia (perempuan) telah menyucikan", "Kalian menyucikan", "Kami menyucikan"],
        optionsEn: ["I sanctify", "She has sanctified", "You sanctify", "We sanctify"],
        correctAnswer: "Dia (perempuan) telah menyucikan",
        correctAnswerEn: "She has sanctified",
        explanation: "Akhiran '-ath' menandai pelaku orang ketiga tunggal feminin lampau.",
        explanationEn: "The ending '-ath' marks a third-person singular feminine doer in the past."
      }
    ]
  },
  {
    id: 26,
    title: "Pola Kata Kerja Pael Masa Kini & Nanti",
    titleEn: "Pael Verb Patterns: Present & Future",
    titleSyriac: "ܡܠܬܐ ܕܦܥܠ ܒܥܬܝܕܐ",
    category: "Level A2",
    summary: "Konjugasi Imperfect (Kini/Nanti) untuk kata kerja kelompok intensif Pael.",
    summaryEn: "Imperfect (Present/Future) conjugation for intensive Pael verbs.",
    introduction: "Mempelajari penyesuaian prefiks dan perubahan vokal internal Pael Imperfect.",
    introductionEn: "Learn the prefix adjustments and internal vowel changes of the Pael Imperfect.",
    content: "Pola Imperfect Pael ditandai dengan vokal prefiks yang cenderung melemah (shwa/vokal e tipis).\nSistem konjugasi (Menguduskan):\n- Dia pria akan menguduskan (3ms): ܢܩܰܕ݁ܶܫ (Nqaddesh)\n- Dia wanita akan menguduskan (3fs): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- Kamu pria akan menguduskan (2ms): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- Saya akan menguduskan (1cs): ܐܩܰܕ݁ܶܫ (Eqaddesh)\n- Kami akan menguduskan (1cp): ܢܩܰܕ݁ܶܫ (Nqaddesh).",
    contentEn: "The Pael Imperfect pattern is marked by a prefix vowel that tends to weaken (shwa / a thin 'e' vowel).\nConjugation system (To sanctify):\n- He will sanctify (3ms): ܢܩܰܕ݁ܶܫ (Nqaddesh)\n- She will sanctify (3fs): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- You (m) will sanctify (2ms): ܬܩܰܕ݁ܶܫ (Tqaddesh)\n- I will sanctify (1cs): ܐܩܰܕ݁ܶܫ (Eqaddesh)\n- We will sanctify (1cp): ܢܩܰܕ݁ܶܫ (Nqaddesh).",
    keyRules: [
      "Meskipun prefiks hurufnya mirip Peal, vokalisasi vokal internal 'e' (Rbasa) di suku kata penutup mencirikan status Pael ini."
    ],
    keyRulesEn: [
      "Although the prefix letters resemble Peal, the internal 'e' vowel (Rbasa) in the closing syllable is what marks this as Pael."
    ],
    vocabulary: [
      { syriac: "ܢܩܕܫ", translit: "Nqaddesh", meaning: "Dia (m) akan menguduskan", meaningEn: "He will sanctify", category: "Kata Kerja Pael" },
      { syriac: "ܢܡܠܠ", translit: "Nmallel", meaning: "Dia (m) akan berbicara", meaningEn: "He will speak", category: "Kata Kerja Pael" },
      { syriac: "ܐܨܒܚ", translit: "Eshabbah", meaning: "Saya akan memuji", meaningEn: "I will praise", category: "Kata Kerja Pael" }
    ],
    examples: [
      { syriac: "ܗܽܘ ܢܡܰܠܶܠ ܥܰܡܳܟ݂", translit: "Hu nmallel `amakh", phonetic: "Hu nmallel `amokh", indonesian: "Dia akan berbicara denganmu", english: "He will speak with you" },
      { syriac: "ܢܩܰܕ݁ܶܫ ܫܡܳܟ݂", translit: "Nqaddesh shmakh", phonetic: "Nqaddesh shmokh", indonesian: "Kami akan menguduskan nama-Mu", english: "We will sanctify Your name" }
    ],
    quizzes: [
      {
        id: 2601,
        question: "Apakah terjemahan dari kata Pael imperfect 'ܢܡܰܠܶܠ' (Nmallel)?",
        questionEn: "What is the translation of the Pael imperfect word 'ܢܡܰܠܶܠ' (Nmallel)?",
        options: ["Dia telah berkata", "Dia (Laki-laki) akan berbicara", "Saya berbicara", "Bicaralah!"],
        optionsEn: ["He has spoken", "He (masculine) will speak", "I speak", "Speak!"],
        correctAnswer: "Dia (Laki-laki) akan berbicara",
        correctAnswerEn: "He (masculine) will speak",
        explanation: "Prefiks Nun (ܢ) + Mallel = Nmallel, dia akan berbicara.",
        explanationEn: "The prefix Nun (ܢ) + Mallel = Nmallel, he will speak."
      },
      {
        id: 2602,
        question: "Bentuk 'ܐܩܰܕ݁ܶܫ' (Eqaddesh) diawali prefiks Alap, ditujukan untuk subjek...",
        questionEn: "The form 'ܐܩܰܕ݁ܶܫ' (Eqaddesh) begins with the prefix Alap, and is aimed at the subject...",
        options: ["Dia", "Kami", "Saya", "Kalian"],
        optionsEn: ["He", "We", "I", "You (plural)"],
        correctAnswer: "Saya",
        correctAnswerEn: "I",
        explanation: "Prefiks Alap 'ܐ-' menandakan subjek Saya akan melakukan penyucian.",
        explanationEn: "The Alap prefix 'ܐ-' marks the subject 'I' who will sanctify."
      },
      {
        id: 2603,
        question: "Suku kata penutup verba Pael Imperfect 3ms umumnya diakhiri dengan vocal...",
        questionEn: "The closing syllable of a Pael Imperfect 3ms verb usually ends with the vowel...",
        options: ["Pthaha (a)", "Rbasa (e) miring (ܩܰܕ݁ܶܫ)", "Hbasa (i)", "Zqapha (o)"],
        optionsEn: ["Pthaha (a)", "Rbasa (e) slanted (ܩܰܕ݁ܶܫ)", "Hbasa (i)", "Zqapha (o)"],
        correctAnswer: "Rbasa (e) miring (ܩܰܕ݁ܶܫ)",
        correctAnswerEn: "Rbasa (e) slanted (ܩܰܕ݁ܶܫ)",
        explanation: "Vokal Rbasa (ܶ) konsisten mengakhiri pola konjugasi aktif Pael.",
        explanationEn: "The Rbasa vowel (ܶ) consistently ends the active Pael conjugation pattern."
      },
      {
        id: 2604,
        question: "Apakah arti dari 'Hu nmallel `amokh'?",
        questionEn: "What does 'Hu nmallel `amokh' mean?",
        options: ["Saya akan berbicara denganmu", "Dia akan berbicara denganmu", "Mereka telah memuji kamu", "Kami akan menyuci tempat ini"],
        optionsEn: ["I will speak with you", "He will speak with you", "They have praised you", "We will purify this place"],
        correctAnswer: "Dia akan berbicara denganmu",
        correctAnswerEn: "He will speak with you",
        explanation: "Hu = dia, nmallel = akan berbicara, `amokh = denganmu. Berarti 'Dia akan berbicara denganmu'.",
        explanationEn: "Hu = he, nmallel = will speak, `amokh = with you. It means 'He will speak with you'."
      },
      {
        id: 2605,
        question: "Manakah bentuk imperatif dari 'Mallel' (Bicaralah!)?",
        questionEn: "Which is the imperative form of 'Mallel' (Speak!)?",
        options: ["Nmallel", "Mallel (ܡܰܠܶܠ)", "Mallelt", "Emallel"],
        optionsEn: ["Nmallel", "Mallel (ܡܰܠܶܠ)", "Mallelt", "Emallel"],
        correctAnswer: "Mallel (ܡܰܠܶܠ)",
        correctAnswerEn: "Mallel (ܡܰܠܶܠ)",
        explanation: "Bentuk imperatif Pael mirip visualnya dengan perfect 3ms, diucapkan 'Mallel'.",
        explanationEn: "The Pael imperative looks similar to the perfect 3ms, pronounced 'Mallel'."
      }
    ]
  },
  {
    id: 27,
    title: "Kata Benda Jamak Feminin & Konstruksi Khusus",
    titleEn: "Feminine Plural Nouns & Special Constructions",
    titleSyriac: "ܫܡܳܗ̈ܐ ܣܓܝܳܐܢ̈ܐ ܕܢܩܒܬܐ",
    category: "Level A2",
    summary: "Memahami fleksi jamak feminin kata benda yang diakhiri sufiks '-atha'.",
    summaryEn: "Understand the feminine plural inflection of nouns ending with the suffix '-atha'.",
    introduction: "Pluralisasi nomina feminin memiliki pola khas yang membedakannya dari nomina maskulin.",
    introductionEn: "Pluralizing feminine nouns follows a distinctive pattern that sets them apart from masculine nouns.",
    content: "Kata benda feminin tunggal berakhiran '-tha' atau '-ta' diubah menjadi jamak dengan sufiks '-atha' (ܥܳܬ݂ܳܐ) disertai penomoran Seyame.\nContoh melingkar:\n- Egrtha (surat) -> Egratha (surat-surat).\n- Maltha (kata) -> Melatha (kata-kata).\n- Mdintha (kota) -> Mdinatha (kota-kota).",
    contentEn: "A singular feminine noun ending in '-tha' or '-ta' becomes plural with the suffix '-atha' (ܥܳܬ݂ܳܐ), together with the Seyame dots.\nExamples:\n- Egrtha (letter) -> Egratha (letters).\n- Maltha (word) -> Melatha (words).\n- Mdintha (city) -> Mdinatha (cities).",
    keyRules: [
      "Sufiks '-atha' mengandung transisi letupan aspirasi lunak 'th' yang dominan.",
      "Vokal Zqapha panjang mengiringi suku kata akhiran ini."
    ],
    keyRulesEn: [
      "The suffix '-atha' carries a soft aspirated 'th' burst that dominates it.",
      "A long Zqapha vowel accompanies the final syllable of this ending."
    ],
    vocabulary: [
      { syriac: "ܐܓܪ̈ܬܐ", translit: "Egratha", meaning: "Surat-surat (Jamak dari Egrtha)", meaningEn: "Letters (plural of Egrtha)", category: "Kata Benda" },
      { syriac: "ܡܕܝ̈ܢܬܐ", translit: "Mdinatha", meaning: "Kota-kota (Jamak dari Mdintha)", meaningEn: "Cities (plural of Mdintha)", category: "Kata Benda" },
      { syriac: "ܡܠ̈ܐ", translit: "Melatha", meaning: "Kata-kata (Jamak dari Maltha)", meaningEn: "Words (plural of Maltha)", category: "Kata Benda" }
    ],
    examples: [
      { syriac: "ܟܬܰܒܬ ܐܺܓܪ̈ܳܬ݂ܳܐ", translit: "Kthabeth egratha", phonetic: "Kthabet egrōthō", indonesian: "Saya telah menulis beberapa surat", english: "I have written several letters" },
      { syriac: "ܡܕܺܝ̈ܢܳܬ݂ܳܐ ܫܰܦܺܝܪ̈ܳܬ݂ܳܐ", translit: "Mdinatha shapiratha", phonetic: "Mdinōthō shapīrōthō", indonesian: "Kota-kota yang indah", english: "Beautiful cities" }
    ],
    quizzes: [
      {
        id: 2701,
        question: "Sufiks akhiran apakah yang menandai jamak feminin kata benda secara reguler?",
        questionEn: "Which ending regularly marks the feminine plural of a noun?",
        options: ["-e", "-in", "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)", "-un"],
        optionsEn: ["-e", "-in", "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)", "-un"],
        correctAnswer: "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)",
        correctAnswerEn: "-atha (ܳܬ݂ܳܐ / ܳܬܳܐ)",
        explanation: "-atha adalah penanda jamak feminin tipikal (misal: mdinatha = kota-kota).",
        explanationEn: "-atha is the typical feminine plural marker (for example: mdinatha = cities)."
      },
      {
        id: 2702,
        question: "Apakah bentuk tunggal dari kata kebendaan jamak 'Melatha' (Kata-kata)?",
        questionEn: "What is the singular form of the plural noun 'Melatha' (words)?",
        options: ["Malka", "Maltha (ܡܰܠܬ݂ܳܐ)", "Mdintha", "Malktho"],
        optionsEn: ["Malka", "Maltha (ܡܰܠܬ݂ܳܐ)", "Mdintha", "Malktho"],
        correctAnswer: "Maltha (ܡܰܠܬ݂ܳܐ)",
        correctAnswerEn: "Maltha (ܡܰܠܬ݂ܳܐ)",
        explanation: "Maltha (Kata/Logos) memiliki bentuk bentuk jamak 'Melatha'.",
        explanationEn: "Maltha (Word/Logos) has the plural form 'Melatha'."
      },
      {
        id: 2703,
        question: "Sesuai hukum keselarasan, frase 'Kota-kota (jamak feminin) yang indah' diterjemahkan sebagai...",
        questionEn: "According to the agreement rule, the phrase 'Beautiful cities (feminine plural)' is translated as...",
        options: ["Mdinatha shapira", "Mdinatha shapire", "Mdinatha shapiratha", "Mdintha shapirtha"],
        optionsEn: ["Mdinatha shapira", "Mdinatha shapire", "Mdinatha shapiratha", "Mdintha shapirtha"],
        correctAnswer: "Mdinatha shapiratha",
        correctAnswerEn: "Mdinatha shapiratha",
        explanation: "Adjektiva wajib jamak feminin '-atha' menyelaraskan nomina 'mdinatha'.",
        explanationEn: "The adjective must take the feminine plural '-atha' to agree with the noun 'mdinatha'."
      },
      {
        id: 2704,
        question: "Apakah arti tunggal dari 'Egrtha' (ܐܺܓܪܬ݂ܳܐ)?",
        questionEn: "What is the singular meaning of 'Egrtha' (ܐܺܓܪܬ݂ܳܐ)?",
        options: ["Buku", "Raja", "Surat", "Gereja"],
        optionsEn: ["Book", "King", "Letter", "Church"],
        correctAnswer: "Surat",
        correctAnswerEn: "Letter",
        explanation: "Egrtha berarti surat tunggal, jamaknya adalah Egratha.",
        explanationEn: "Egrtha means a single letter; its plural is Egratha."
      },
      {
        id: 2705,
        question: "Bentuk jamak dari 'Mdintha' (Kota) mengandung titik Seyame diletakkan pada huruf...",
        questionEn: "In the plural form of 'Mdintha' (city), the Seyame dots are placed on the letter...",
        options: ["Nun", "Yodh", "Dalath", "Mim"],
        optionsEn: ["Nun", "Yodh", "Dalath", "Mim"],
        correctAnswer: "Yodh",
        correctAnswerEn: "Yodh",
        explanation: "Seyame diletakkan di atas huruf Yodh (ܡܕܺܝ̈ܢܬ݂ܳܐ) sebagai sign plural feminin jamak mdinatha.",
        explanationEn: "The Seyame is placed above the letter Yodh (ܡܕܺܝ̈ܢܬ݂ܳܐ) as the sign of the feminine plural mdinatha."
      }
    ]
  },
  {
    id: 28,
    title: "Sistem Bilangan Belasan (11-19)",
    titleEn: "The Teen Number System (11–19)",
    titleSyriac: "ܡܢܝܢ̈ܐ ܥܣܝܪ̈ܝܐ",
    category: "Level A2",
    summary: "Memahami struktur pembentukan angka belasan dalam bahasa Syriac.",
    summaryEn: "Understand how teen numbers are formed in Syriac.",
    introduction: "Angka belasan dibentuk dari perpaduan angka satuan dasar dipadukan dengan dasar angka sepuluh (`asra).",
    introductionEn: "Teen numbers are formed by combining a basic unit number with the base number ten (`asra).",
    content: "Angka Belasan Maskulin (menyertai objek maskulin):\n- Sebelas: ܚܰܕ݂ܥܣܰܪ (Hadesar)\n- Dua belas: ܬܪܶܥܣܰܪ (Tre'sar)\n- Tiga belas: ܬܠܳܬ݂ܥܣܰܪ (Tlath'sar)\n- Empat belas: ܐܰܪܒܰܥܥܣܰܪ (Arba'sar).\n\nAngka Belasan Feminin (menyertai objek feminin):\n- Sebelas: ܚܕܰܥܶܣܪܺܐ (Hda'esre)\n- Dua belas: ܬܰܪܬܶܥܶܣܪܺܐ (Tarte'esre)\n- Tiga belas: ܬܠܳܬ݂ܥܶܣܪܺܐ (Tlath'esre).",
    contentEn: "Masculine teen numbers (with masculine objects):\n- Eleven: ܚܰܕ݂ܥܣܰܪ (Hadesar)\n- Twelve: ܬܪܶܥܣܰܪ (Tre'sar)\n- Thirteen: ܬܠܳܬ݂ܥܣܰܪ (Tlath'sar)\n- Fourteen: ܐܰܪܒܰܥܥܣܰܪ (Arba'sar).\n\nFeminine teen numbers (with feminine objects):\n- Eleven: ܚܕܰܥܶܣܪܺܐ (Hda'esre)\n- Twelve: ܬܰܪܬܶܥܶܣܪܺܐ (Tarte'esre)\n- Thirteen: ܬܠܳܬ݂ܥܶܣܪܺܐ (Tlath'esre).",
    keyRules: [
      "Suku kata sepuluh menyatu membentuk satu kesatuan kata majemuk ringkas."
    ],
    keyRulesEn: [
      "The 'ten' syllable fuses into a single compact compound word."
    ],
    vocabulary: [
      { syriac: "ܬܪܥܣܪ", translit: "Tre'sar", meaning: "Dua Belas (m)", meaningEn: "Twelve (m)", category: "Angka" },
      { syriac: "ܚܕܥܣܪ", translit: "Hadesar", meaning: "Sebelas (m)", meaningEn: "Eleven (m)", category: "Angka" },
      { syriac: "ܚܕܥܣܪܐ", translit: "Hda'esre", meaning: "Sebelas (f)", meaningEn: "Eleven (f)", category: "Angka" }
    ],
    examples: [
      { syriac: "ܬܪܶܥܣܰܪ ܬܰܠܡܺܝܕ̈ܶܐ", translit: "Tre'sar talmide", phonetic: "Tre'sar talmīdē", indonesian: "Dua belas murid (pria)", english: "Twelve disciples (male)" },
      { syriac: "ܬܰܪܬܶܥܶܣܪܺܐ ܢܶܫܺܝ̈ܢ", translit: "Tarte'esre neshin", phonetic: "Tarte`esre neshīn", indonesian: "Dua belas orang wanita", english: "Twelve women" }
    ],
    quizzes: [
      {
        id: 2801,
        question: "Apakah penyebutan angka 'Dua Belas' untuk menyertai murid-murid pria (talmide)?",
        questionEn: "What is the word for 'Twelve' used with male disciples (talmide)?",
        options: ["Hadesar", "Tre'sar (ܬܪܶܥܣܰܪ)", "Tarten", "Tarte'esre"],
        optionsEn: ["Hadesar", "Tre'sar (ܬܪܶܥܣܰܪ)", "Tarten", "Tarte'esre"],
        correctAnswer: "Tre'sar (ܬܪܶܥܣܰܪ)",
        correctAnswerEn: "Tre'sar (ܬܪܶܥܣܰܪ)",
        explanation: "Tre'sar adalah dua belas m. Sangat kondang merepresentasikan 12 rasul.",
        explanationEn: "Tre'sar is twelve (masculine). It famously represents the 12 apostles."
      },
      {
        id: 2802,
        question: "Kata 'ܚܰܕ݂ܥܣܰܪ' (Hadesar) melambangkan bilangan...",
        questionEn: "The word 'ܚܰܕ݂ܥܣܰܪ' (Hadesar) represents the number...",
        options: ["Satu", "Sebelas", "Dua puluh", "Sembilan"],
        optionsEn: ["One", "Eleven", "Twenty", "Nine"],
        correctAnswer: "Sebelas",
        correctAnswerEn: "Eleven",
        explanation: "Hadesar dibentuk dari Had (1) + `Asar (10) penyusutan fonetis menjadi sebelas.",
        explanationEn: "Hadesar is formed from Had (1) + `Asar (10), with phonetic shortening, to make eleven."
      },
      {
        id: 2803,
        question: "Angka belasan faksi Feminin diakhiri dengan pola penutup...",
        questionEn: "Feminine teen numbers end with the closing pattern...",
        options: ["-sar", "-esre (ܥܶܣܪܺܐ)", "-in", "-atha"],
        optionsEn: ["-sar", "-esre (ܥܶܣܪܺܐ)", "-in", "-atha"],
        correctAnswer: "-esre (ܥܶܣܪܺܐ)",
        correctAnswerEn: "-esre (ܥܶܣܪܺܐ)",
        explanation: "-esre melambangkan akhiran feminin belasan (misal: Tlath'esre = 13 feminin).",
        explanationEn: "-esre marks the feminine teen ending (for example: Tlath'esre = 13, feminine)."
      },
      {
        id: 2804,
        question: "Apakah terjemahan dari 'Tre'sar talmide'?",
        questionEn: "What is the translation of 'Tre'sar talmide'?",
        options: ["Satu murid", "Dua murid", "Dua belas murid", "Dua puluh murid"],
        optionsEn: ["One disciple", "Two disciples", "Twelve disciples", "Twenty disciples"],
        correctAnswer: "Dua belas murid",
        correctAnswerEn: "Twelve disciples",
        explanation: "Tre'sar = dua belas, talmide = murid-murid. Berarti 'Dua belas murid'.",
        explanationEn: "Tre'sar = twelve, talmide = disciples. It means 'Twelve disciples'."
      },
      {
        id: 2805,
        question: "Bilangan belasan faksi Maskulin selalu diakhiri suku kata...",
        questionEn: "Masculine teen numbers always end with the syllable...",
        options: ["-esre", "-sar", "-had", "-tren"],
        optionsEn: ["-esre", "-sar", "-had", "-tren"],
        correctAnswer: "-sar",
        correctAnswerEn: "-sar",
        explanation: "-sar adalah kontraksi dialek dari 'asar (sepuluh) khusus belasan maskulin.",
        explanationEn: "-sar is a dialect contraction of 'asar (ten), used specifically for masculine teens."
      }
    ]
  },
  {
    id: 29,
    title: "Angka Puluhan, Ratusan & Ribuan",
    titleEn: "Tens, Hundreds & Thousands",
    titleSyriac: "ܡܢܝܢ̈ܐ ܪ̈ܘܪܒܐ",
    category: "Level A2",
    summary: "Memahami hitungan besar: puluhan, ratusan, hingga ribuan.",
    summaryEn: "Understand large numbers: tens, hundreds, and thousands.",
    introduction: "Hitungan besar dibentuk secara teratur mirip rumpun Semitik lainnya.",
    introductionEn: "Large numbers are formed regularly, much like in other Semitic languages.",
    content: "Daftar Bilangan Besar:\n- Dua puluh: ܥܶܣܪܺܝܢ (`Esrin)\n- Tiga puluh: ܬܠܳܬ݂ܺܝܢ (Tlathin)\n- Empat puluh: ܐܰܪܒܥܺܝܢ (Arb'in)\n- Lima puluh: ܚܰܡܫܺܝܢ (Hamshin)\n- Seratus: ܡܳܐܐ (M'o)\n- Seribu: ܐܰܠܦܳܐ (Alpho).",
    contentEn: "List of Large Numbers:\n- Twenty: ܥܶܣܪܺܝܢ (`Esrin)\n- Thirty: ܬܠܳܬ݂ܺܝܢ (Tlathin)\n- Forty: ܐܰܪܒܥܺܝܢ (Arb'in)\n- Fifty: ܚܰܡܫܺܝܢ (Hamshin)\n- One hundred: ܡܳܐܐ (M'o)\n- One thousand: ܐܰܠܦܳܐ (Alpho).",
    keyRules: [
      "Puluhan dibentuk dengan akhiran plural '-in' dari akar kata bilangannya (misal: tlatha -> tlathin).",
      "Dua puluh adalah pengecualian, dibentuk secara langsung '`Esrin'."
    ],
    keyRulesEn: [
      "Tens are formed with the plural ending '-in' from the root of the number (for example: tlatha -> tlathin).",
      "Twenty is the exception, formed directly as '`Esrin'."
    ],
    vocabulary: [
      { syriac: "ܥܣܪܝܢ", translit: "Esrin", meaning: "Dua Puluh", meaningEn: "Twenty", category: "Angka" },
      { syriac: "ܡܐܐ", translit: "Mo", meaning: "Seratus", meaningEn: "One hundred", category: "Angka" },
      { syriac: "ܐܠܦܐ", translit: "Alpho", meaning: "Seribu", meaningEn: "One thousand", category: "Angka" }
    ],
    examples: [
      { syriac: "ܥܣܪܺܝܢ ܟܬܳܒܺܝ̈ܢ", translit: "Esrin kthobin", phonetic: "Asrīn kthōbīn", indonesian: "Dua puluh buku", english: "Twenty books" },
      { syriac: "ܐܰܠܦܳܐ ܓܰܒ݂ܪܺܝ̈ܢ", translit: "Alpho gabrin", phonetic: "Alphō gabrīn", indonesian: "Seribu orang laki-laki", english: "One thousand men" }
    ],
    quizzes: [
      {
        id: 2901,
        question: "Apakah sebutan bahasa Aram untuk angka 'Dua Puluh'?",
        questionEn: "What is the Aramaic word for the number 'Twenty'?",
        options: ["Tren", "Esrin (ܥܶܣܪܺܝܢ)", "Tlathin", "Mo"],
        optionsEn: ["Tren", "Esrin (ܥܶܣܪܺܝܢ)", "Tlathin", "Mo"],
        correctAnswer: "Esrin (ܥܶܣܪܺܝܢ)",
        correctAnswerEn: "Esrin (ܥܶܣܪܺܝܢ)",
        explanation: "`Esrin melambangkan angka 20.",
        explanationEn: "`Esrin represents the number 20."
      },
      {
        id: 2902,
        question: "Akhiran apakah yang mencirikan angka puluhan (30, 40, 50)?",
        questionEn: "Which ending characterizes the tens (30, 40, 50)?",
        options: ["-ton", "-in (ܺܝܢ)", "-atha", "-sar"],
        optionsEn: ["-ton", "-in (ܺܝܢ)", "-atha", "-sar"],
        correctAnswer: "-in (ܺܝܢ)",
        correctAnswerEn: "-in (ܺܝܢ)",
        explanation: "-in ditambahkan ke akar bilangan dasar pembentuk angka puluhan.",
        explanationEn: "-in is added to the root of the basic number to form the tens."
      },
      {
        id: 2903,
        question: "Kata 'Seribu' dalam bahasa Aram adalah...",
        questionEn: "The word for 'One thousand' in Aramaic is...",
        options: ["M'o", "Alpho (ܐܰܠܦܳܐ)", "Esrin", "Hamshin"],
        optionsEn: ["M'o", "Alpho (ܐܰܠܦܳܐ)", "Esrin", "Hamshin"],
        correctAnswer: "Alpho (ܐܰܠܦܳܐ)",
        correctAnswerEn: "Alpho (ܐܰܠܦܳܐ)",
        explanation: "Alpho / Alpa adalah bilangan cardinal seribu.",
        explanationEn: "Alpho / Alpa is the cardinal number one thousand."
      },
      {
        id: 2904,
        question: "Seratus dalam bahasa Syriac adalah...",
        questionEn: "One hundred in Syriac is...",
        options: ["Hamshin", "Mo (ܡܳܐܐ)", "Alpho", "Esrin"],
        optionsEn: ["Hamshin", "Mo (ܡܳܐܐ)", "Alpho", "Esrin"],
        correctAnswer: "Mo (ܡܳܐܐ)",
        correctAnswerEn: "Mo (ܡܳܐܐ)",
        explanation: "Mo / M'o (ܡܐܐ) melambangkan bilangan seratus.",
        explanationEn: "Mo / M'o (ܡܐܐ) represents the number one hundred."
      },
      {
        id: 2905,
        question: "Bilangan 30 dalam bahasa Aram adalah...",
        questionEn: "The number 30 in Aramaic is...",
        options: ["Tren", "Tlathin", "Esrin", "Arb'in"],
        optionsEn: ["Tren", "Tlathin", "Esrin", "Arb'in"],
        correctAnswer: "Tlathin",
        correctAnswerEn: "Tlathin",
        explanation: "Tlathin berasal dari Tlatha (3) + akhiran -in puluhan.",
        explanationEn: "Tlathin comes from Tlatha (3) + the tens ending -in."
      }
    ]
  },
  {
    id: 30,
    title: "Struktur Kalimat Pasif Sederhana (Ethpeel)",
    titleEn: "Simple Passive Sentence Structure (Ethpeel)",
    titleSyriac: "ܡܠܬܐ ܕܐܬܦܥܠ",
    category: "Level A2",
    summary: "Memahami bentukan dasar kata kerja pasif Ethpeel.",
    summaryEn: "Understand the basic formation of the passive Ethpeel verb.",
    introduction: "Pola pasif (passive voice) dalam Syriac dibentuk dengan menambahkan prefiks 'Eth-' (ܐܬ) di depan akar kata.",
    introductionEn: "The passive voice in Syriac is formed by adding the prefix 'Eth-' (ܐܬ) in front of the root.",
    content: "Kategori Ethpeel adalah bentuk pasif dari Peal dasar. \nContoh perbandingan:\n- Kthab (Menulis) -> Ethktheb (Ditulis).\n- Shma' (Mendengar) -> Ethshma' (Didengar).\n\nKonjugasi Tunggal Lampau Ethpeel:\n- Itu telah ditulis (3ms): ܐܶܬ݂ܟ݁ܬ݂ܶܒ݂ (Ethktheb)\n- Saya telah terdaftar/tertulis: ܐܶܬ݂ܟ݁ܬ݂ܒ݁ܶܬ݂ (Ethkthebeth).",
    contentEn: "The Ethpeel category is the passive form of the basic Peal. \nA comparison:\n- Kthab (To write) -> Ethktheb (Written).\n- Shma' (To hear) -> Ethshma' (Heard).\n\nSingular Past conjugation of Ethpeel:\n- It was written (3ms): ܐܶܬ݂ܟ݁ܬ݂ܶܒ݂ (Ethktheb)\n- I was registered/written: ܐܶܬ݂ܟ݁ܬ݂ܒ݁ܶܬ݂ (Ethkthebeth).",
    keyRules: [
      "Prefiks 'Eth-' (ܐܬ) adalah ciri khas mutlak seluruh keluarga verba pasif di dalam bahasa Aram klasik."
    ],
    keyRulesEn: [
      "The prefix 'Eth-' (ܐܬ) is the absolute hallmark of the whole family of passive verbs in classical Aramaic."
    ],
    vocabulary: [
      { syriac: "ܐܬܟܬܒ", translit: "Ethktheb", meaning: "Telah ditulis (Pasif)", meaningEn: "Was written (Passive)", category: "Kata Kerja Pasif" },
      { syriac: "ܐܬܦܬܚ", translit: "Ethpthah", meaning: "Telah dibuka (dari pthah - membuka)", meaningEn: "Was opened (from pthah - to open)", category: "Kata Kerja Pasif" },
      { syriac: "ܐܬܩܛܠ", translit: "Ethqtel", meaning: "Telah dibunuh (dari qtal - membunuh)", meaningEn: "Was killed (from qtal - to kill)", category: "Kata Kerja Pasif" }
    ],
    examples: [
      { syriac: "ܐܶܬ݂ܦ݁ܬ݂ܰܚܬ ܗܰܝܟܠܳܐ", translit: "Ethpthah haykla", phonetic: "Ethpthaḥ hayklō", indonesian: "Bait suci itu telah dibuka", english: "The temple was opened" },
      { syriac: "ܐܶܬ݂ܟ݁ܬ݂ܶܒ݂ ܟܬܳܒܳܐ", translit: "Ethktheb kthobo", phonetic: "Ethktheb kthōbō", indonesian: "Buku itu telah ditulis", english: "The book was written" }
    ],
    quizzes: [
      {
        id: 3001,
        question: "Prefiks penanda apakah yang wajib mengawali silsilah kata kerja pasif (Ethpeel)?",
        questionEn: "Which prefix must begin the family of passive verbs (Ethpeel)?",
        options: ["Ma-", "Ne-", "Eth- (ܐܬ)", "Qa-"],
        optionsEn: ["Ma-", "Ne-", "Eth- (ܐܬ)", "Qa-"],
        correctAnswer: "Eth- (ܐܬ)",
        correctAnswerEn: "Eth- (ܐܬ)",
        explanation: "Prefiks Eth- (ܐܬ) melambangkan modifikasi pasif konjugasi refleksif.",
        explanationEn: "The prefix Eth- (ܐܬ) marks the passive modification of the reflexive conjugation."
      },
      {
        id: 3002,
        question: "Apakah makna dari kata kerja pasif 'ܐܶܬ݂ܦ݁ܬ݂ܰܚ' (Ethpthah)?",
        questionEn: "What does the passive verb 'ܐܶܬ݂ܦ݁ܬ݂ܰܚ' (Ethpthah) mean?",
        options: ["Telah menulis", "Telah dibuka", "Telah didengar", "Telah dibunuh"],
        optionsEn: ["Was written", "Was opened", "Was heard", "Was killed"],
        correctAnswer: "Telah dibuka",
        correctAnswerEn: "Was opened",
        explanation: "Ethpthah berasal dari Pthah (membuka), menerima prefiks pasif menjadi 'dibuka'.",
        explanationEn: "Ethpthah comes from Pthah (to open), taking the passive prefix to become 'was opened'."
      },
      {
        id: 3003,
        question: "Bentuk pasif dari kata kerja membunuh 'Qtal' dalam pola Ethpeel 3ms adalah...",
        questionEn: "The passive form of the verb to kill 'Qtal' in the Ethpeel 3ms pattern is...",
        options: ["Ethqtel (ܐܬܩܛܠ)", "Qattel", "Neqtol", "Ethktheb"],
        optionsEn: ["Ethqtel (ܐܬܩܛܠ)", "Qattel", "Neqtol", "Ethktheb"],
        correctAnswer: "Ethqtel (ܐܬܩܛܠ)",
        correctAnswerEn: "Ethqtel (ܐܬܩܛܠ)",
        explanation: "Ethqtel berarti telah dibunuh secara pasif.",
        explanationEn: "Ethqtel means 'was killed' in the passive."
      },
      {
        id: 3004,
        question: "Menerjemahkan 'Saya telah terdaftar/tertulis' dalam Ethpeel tunggal CS adalah...",
        questionEn: "Translating 'I was registered/written' in the singular Ethpeel 1cs form is...",
        options: ["Ethktheb", "Ethkthebeth", "Ethkthebton", "Ethkthebath"],
        optionsEn: ["Ethktheb", "Ethkthebeth", "Ethkthebton", "Ethkthebath"],
        correctAnswer: "Ethkthebeth",
        correctAnswerEn: "Ethkthebeth",
        explanation: "Sufiks '-eth' digabung dengan prefiks pasif Ethktheb melahirkan makna 'saya ditulis/terdaftar'.",
        explanationEn: "The suffix '-eth' combined with the passive prefix Ethktheb gives the meaning 'I was written/registered'."
      },
      {
        id: 3005,
        question: "Rumpun kata dasar 'Malka' menerima awalan pasif menjadi...",
        questionEn: "The root word 'Malka' takes the passive prefix to become...",
        options: ["Malka tidak dikonjugasikan pasif karena itu kata benda", "Ethmalka", "Malktha", "Malke"],
        optionsEn: ["Malka cannot be conjugated in the passive because it is a noun", "Ethmalka", "Malktha", "Malke"],
        correctAnswer: "Malka tidak dikonjugasikan pasif karena itu kata benda",
        correctAnswerEn: "Malka cannot be conjugated in the passive because it is a noun",
        explanation: "Konjugasi pasif melingkar mutlak hanya berlaku untuk kata kerja (verba), bukan kata benda.",
        explanationEn: "Passive conjugation applies absolutely only to verbs, not to nouns."
      }
    ]
  },
  {
    id: 31,
    title: "Pembentukan Nomina Verba (Infinitive & Participle)",
    titleEn: "Forming Verbal Nouns (Infinitive & Participle)",
    titleSyriac: "ܫܡܐ ܕܡܦܥܠܢܘܬܐ",
    category: "Level A2",
    summary: "Aturan mengubah kata kerja menjadi format kata benda (infinitive) atau kata sifat pelaku (participle).",
    summaryEn: "Rules for turning a verb into a noun form (infinitive) or an agent adjective (participle).",
    introduction: "Infinitive (kata benda tindakan) dan Participle (pelaku perbuatan) berperan penting memperluas kosakara sintaksis.",
    introductionEn: "The infinitive (the noun of an action) and the participle (the doer of an action) play an important role in expanding syntactic vocabulary.",
    content: "Di bawah tradisi Peal:\n1. Infinitive dibentuk dengan pola prefiks 'M-' (Mim) + akhiran '-u / -utha'.\nContoh: Kthab (menulis) -> Mekthab (tindakan menulis).\n2. Active Participle mengekspresikan pelaku atau perbuatan yang sedang berlangsung.\nContoh: Koteb (menulis / sang penulis).",
    contentEn: "In the Peal tradition:\n1. The infinitive is formed with the prefix pattern 'M-' (Mim) + the ending '-u / -utha'.\nExample: Kthab (to write) -> Mekthab (the act of writing).\n2. The active participle expresses the doer or an ongoing action.\nExample: Koteb (writing / the writer).",
    keyRules: [
      "Infinitive sering didahului preposisi 'L-' (L-mekthab = untuk menulis).",
      "Active participle sering digunakan menggantikan kala masa kini."
    ],
    keyRulesEn: [
      "The infinitive is often preceded by the preposition 'L-' (L-mekthab = to write).",
      "The active participle is often used in place of the present tense."
    ],
    vocabulary: [
      { syriac: "ܡܟܬܒ", translit: "Mekthab", meaning: "Menulis (Infinitive)", meaningEn: "To write (Infinitive)", category: "Nomina Verba" },
      { syriac: "ܟܘܬܒ", translit: "Koteb", meaning: "Yang sedang menulis / Penulis (Participle)", meaningEn: "The one writing / Writer (Participle)", category: "Nomina Verba" },
      { syriac: "ܠܡܟܬܒ", translit: "l-mekthab", meaning: "untuk menulis", meaningEn: "to write", category: "Nomina Verba" }
    ],
    examples: [
      { syriac: "ܨܒܐ ܐܢܐ ܠܡܟܬܒ", translit: "Sbe eno l-mekthab", phonetic: "Sbe enō l-mekthab", indonesian: "Saya ingin menulis", english: "I want to write" },
      { syriac: "ܗܽܘ ܟܳܬ݂ܶܒ݂ ܟܬܳܒܳܐ", translit: "Hu koteb kthobo", phonetic: "Hu kōtheb kthōbō", indonesian: "Dia sedang menulis sebuah buku", english: "He is writing a book" }
    ],
    quizzes: [
      {
        id: 3101,
        question: "Prefiks huruf apakah yang mutlak mengawali bentukan kata benda tindakan (Infinitive)?",
        questionEn: "Which letter must begin the formation of a noun of action (infinitive)?",
        options: ["Yodh", "Mim (ܡ)", "Alap", "Waw"],
        optionsEn: ["Yodh", "Mim (ܡ)", "Alap", "Waw"],
        correctAnswer: "Mim (ܡ)",
        correctAnswerEn: "Mim (ܡ)",
        explanation: "Infinitive Syriac diawali huruf Mim (M- / Ma-). Misal: Mekthab.",
        explanationEn: "The Syriac infinitive begins with the letter Mim (M- / Ma-). For example: Mekthab."
      },
      {
        id: 3102,
        question: "Apakah arti dari bentukan 'Koteb' (ܟܳܬ݂ܶܒ݂)?",
        questionEn: "What does the form 'Koteb' (ܟܳܬ݂ܶܒ݂) mean?",
        options: ["Dia telah menulis", "Saya akan menulis", "Sang penulis / Sedang menulis (Active Participle)", "Jangan menulis!"],
        optionsEn: ["He has written", "I will write", "The writer / Writing (Active Participle)", "Do not write!"],
        correctAnswer: "Sang penulis / Sedang menulis (Active Participle)",
        correctAnswerEn: "The writer / Writing (Active Participle)",
        explanation: "Koteb merujuk aktif participle pelaku 'penulis/sedang menulis'.",
        explanationEn: "Koteb refers to the active participle of the doer, 'writer / writing'."
      },
      {
        id: 3103,
        question: "Bagaimanakah mengekspresikan 'untuk menulis' ?",
        questionEn: "How do you express 'to write'?",
        options: ["mekthab", "l-mekthab (ܠܡܟܬܒ)", "b-kthab", "d-kthab"],
        optionsEn: ["mekthab", "l-mekthab (ܠܡܟܬܒ)", "b-kthab", "d-kthab"],
        correctAnswer: "l-mekthab (ܠܡܟܬܒ)",
        correctAnswerEn: "l-mekthab (ܠܡܟܬܒ)",
        explanation: "Preposisi L- digabung dengan infinitive melahirkan arti direktif tugas 'untuk melakukan'.",
        explanationEn: "The preposition L- joined to the infinitive gives the directive meaning 'to do'."
      },
      {
        id: 3104,
        question: "Kata 'Mekthab' diturunkan dari akar kata dasar...",
        questionEn: "The word 'Mekthab' is derived from the root word...",
        options: ["Malka", "Kthab (ܟܬܒ)", "Shma'", "Alaha"],
        optionsEn: ["Malka", "Kthab (ܟܬܒ)", "Shma'", "Alaha"],
        correctAnswer: "Kthab (ܟܬܒ)",
        correctAnswerEn: "Kthab (ܟܬܒ)",
        explanation: "Mekthab adalah bentuk infinitive orisinil verba Kthab (menulis).",
        explanationEn: "Mekthab is the original infinitive form of the verb Kthab (to write)."
      },
      {
        id: 3105,
        question: "Active Participle dalam kehidupan lisan sering dipergunakan untuk mewakili kala...",
        questionEn: "In everyday speech, the active participle is often used to represent the tense...",
        options: ["Masa Kini (Present)", "Masa Lampau (Past)", "Masa Depan (Future)", "Larangan"],
        optionsEn: ["Present", "Past", "Future", "Prohibition"],
        correctAnswer: "Masa Kini (Present)",
        correctAnswerEn: "Present",
        explanation: "Participle sangat lazim dipakai mengekspresikan aksi waktu dekat/seketika ini (present continuous).",
        explanationEn: "The participle is very commonly used to express an action happening right now (present continuous)."
      }
    ]
  },
  {
    id: 32,
    title: "Ungkapan Percakapan Harian Dasar",
    titleEn: "Basic Daily Conversation Phrases",
    titleSyriac: "ܗܘܡܪ̈ܐ ܕܫܠܡܐ",
    category: "Level A2",
    summary: "Belajar salam, perkenalan, dan percakapan harian praktis harian.",
    summaryEn: "Learn greetings, introductions, and practical everyday conversation.",
    introduction: "Mempelajari frasa fungsional agar dapat berkomunikasi secara verbal sederhana dalam dialek klasik/modern.",
    introductionEn: "Learn functional phrases so you can communicate in simple spoken words in the classical/modern dialect.",
    content: "Daftar Salam Klasik:\n- Salam sejahtera / Halo: ܫܠܳܡܳܐ (Shlomo)\n- Atasmu damai sejahtera: ܫܠܳܡܳܐ ܥܰܠܳܟ݂ (Shlomo `alakh)\n- Terima kasih: ܬܰܘܕ݁ܺܝ (Tawdi)\n- Siapa namamu?: ܡܰܢܽܘ ܫܡܳܟ݂ (Mano shmakh)\n- Namaku...: ܫܡܝܳܐ ܗܽܘ (Shmy hu...).\n- Sampai jumpa: ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ (Push bashlomo).",
    contentEn: "List of Classical Greetings:\n- Peace / Hello: ܫܠܳܡܳܐ (Shlomo)\n- Peace be upon you: ܫܠܳܡܳܐ ܥܰܠܳܟ݂ (Shlomo `alakh)\n- Thank you: ܬܰܘܕ݁ܺܝ (Tawdi)\n- What is your name?: ܡܰܢܽܘ ܫܡܳܟ݂ (Mano shmakh)\n- My name is...: ܫܡܝܳܐ ܗܽܘ (Shmy hu...).\n- Goodbye: ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ (Push bashlomo).",
    keyRules: [
      "Pelafalan dialek barat cenderung menonjolkan bunyi vokal 'o' (Shlomo), sedangkan dialek timur mempertahankan vokal 'a' (Shlama)."
    ],
    keyRulesEn: [
      "Western dialect pronunciation tends to emphasize the 'o' vowel (Shlomo), while the Eastern dialect keeps the 'a' vowel (Shlama)."
    ],
    vocabulary: [
      { syriac: "ܫܠܡܐ", translit: "Shlomo", meaning: "Salam / Damai / Halo", meaningEn: "Peace / Hello", category: "Percakapan" },
      { syriac: "ܬܘܕܝ", translit: "Tawdi", meaning: "Terima kasih", meaningEn: "Thank you", category: "Percakapan" },
      { syriac: "ܒܒܥܘ", translit: "B-b'u", meaning: "Tolong / Silakan", meaningEn: "Please", category: "Percakapan" }
    ],
    examples: [
      { syriac: "ܫܠܳܡܳܐ ܥܰܠܳܟ݂ ܡܰܠܦܳܢܳܐ", translit: "Shlomo `alakh malpono", phonetic: "Shlōmō `alokh malpōnō", indonesian: "Salam sejahtera atasmu, Guru", english: "Peace be upon you, Teacher" },
      { syriac: "ܬܰܘܕ݁ܺܝ ܪܰܒ݁ܬ݂ܳܐ", translit: "Tawdi rabtha", phonetic: "Tawdī rabtō", indonesian: "Terima kasih banyak", english: "Thank you very much" }
    ],
    quizzes: [
      {
        id: 3201,
        question: "Apakah arti dari ucapan salam universal 'ܫܠܳܡܳܐ' (Shlomo)?",
        questionEn: "What does the universal greeting 'ܫܠܳܡܳܐ' (Shlomo) mean?",
        options: ["Selamat pagi", "Sampai jumpa", "Salam / Damai / Halo", "Terima kasih"],
        optionsEn: ["Good morning", "Goodbye", "Peace / Hello", "Thank you"],
        correctAnswer: "Salam / Damai / Halo",
        correctAnswerEn: "Peace / Hello",
        explanation: "Shlomo / Shlama melambangkan ucapan damai atau salam penjelas kekerabatan.",
        explanationEn: "Shlomo / Shlama expresses a greeting of peace or kinship."
      },
      {
        id: 3202,
        question: "Ungkapan apresiatif 'Tawdi' (ܬܰܘܕ݁ܺܝ) menterjemahkan...",
        questionEn: "The appreciative expression 'Tawdi' (ܬܰܘܕ݁ܺܝ) translates as...",
        options: ["Sama-sama", "Terima kasih", "Tolong", "Maaf"],
        optionsEn: ["You're welcome", "Thank you", "Please", "Sorry"],
        correctAnswer: "Terima kasih",
        correctAnswerEn: "Thank you",
        explanation: "Tawdi / Tawdi rabto melambangkan ungkapan rasa syukur atau terima kasih.",
        explanationEn: "Tawdi / Tawdi rabto expresses gratitude or thanks."
      },
      {
        id: 3203,
        question: "Bagaimanakah menanyakan nama seseorang pria 'Siapa namamu?'",
        questionEn: "How do you ask a man 'What is your name?'",
        options: ["Man at", "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)", "Ayka at", "Push bashlomo"],
        optionsEn: ["Man at", "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)", "Ayka at", "Push bashlomo"],
        correctAnswer: "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)",
        correctAnswerEn: "Mano shmakh (ܡܰܢܽܘ ܫܡܳܟ݂)",
        explanation: "Mano shmakh diterjemahkan harafiah 'apa namamu (m)'.",
        explanationEn: "Mano shmakh literally translates as 'what is your name (m)'."
      },
      {
        id: 3204,
        question: "Ucapan pelepas perpisahan 'sampai jumpa / tinggallah dalam damai' adalah...",
        questionEn: "The farewell 'goodbye / remain in peace' is...",
        options: ["Shlomo `alakh", "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)", "Tawdi", "B-b'u"],
        optionsEn: ["Shlomo `alakh", "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)", "Tawdi", "B-b'u"],
        correctAnswer: "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)",
        correctAnswerEn: "Push bashlomo (ܦܽܘܫ ܒ݁ܰܫܠܳܡܳܐ)",
        explanation: "Push bashlomo berarti ditinggalkan dalam damai (sampai jumpa).",
        explanationEn: "Push bashlomo means to be left in peace (goodbye)."
      },
      {
        id: 3205,
        question: "Apakah arti dari frasa 'Tawdi rabtha'?",
        questionEn: "What does the phrase 'Tawdi rabtha' mean?",
        options: ["Tolong bantu saya", "Terima kasih banyak", "Siapa kamu", "Halo semuanya"],
        optionsEn: ["Please help me", "Thank you very much", "Who are you", "Hello everyone"],
        correctAnswer: "Terima kasih banyak",
        correctAnswerEn: "Thank you very much",
        explanation: "Tawdi = terima kasih, rabtha = besar (f). Berarti 'Terima kasih banyak'.",
        explanationEn: "Tawdi = thank you, rabtha = great (f). It means 'Thank you very much'."
      }
    ]
  },
  {
    id: 33,
    title: "Anggota Keluarga & Hubungan Sosial",
    titleEn: "Family Members & Social Relationships",
    titleSyriac: "ܗܕ̈ܡܐ ܕܝܩܪܬܐ",
    category: "Level A2",
    summary: "Kosakata seputar keluarga inti dan hubungan sosial terdekat.",
    summaryEn: "Vocabulary about the immediate family and closest social relationships.",
    introduction: "Menguasai panggilan akrab keluarga di dalam tatanan silsilah rumah tangga.",
    introductionEn: "Master the familiar terms of address for family members within the household.",
    content: "Kosakata Anggota Keluarga:\n- Ayah: ܐܰܒܳܐ (Aba)\n- Ibu: ܐܶܡܳܐ (Ema)\n- Anak laki-laki: ܒ݁ܪܳܐ (Bra / Bera)\n- Anak perempuan: ܒ݁ܰܪܬܳܐ (Bartha)\n- Saudara laki-laki: ܐܰܚܳܐ (Aha)\n- Saudara perempuan: ܚܳܬ݂ܳܐ (Hatha).",
    contentEn: "Family Member Vocabulary:\n- Father: ܐܰܒܳܐ (Aba)\n- Mother: ܐܶܡܳܐ (Ema)\n- Son: ܒ݁ܪܳܐ (Bra / Bera)\n- Daughter: ܒ݁ܰܪܬܳܐ (Bartha)\n- Brother: ܐܰܚܳܐ (Aha)\n- Sister: ܚܳܬ݂ܳܐ (Hatha).",
    keyRules: [
      "Bentuk jamak dari 'Aha' (saudara laki-laki) memiliki pola tidak beraturan 'Ahe' (ܐܚ̈ܐ).",
      "Keluarga disebut 'Yqarto' (ܝܰܩܰܪܬܳܐ)."
    ],
    keyRulesEn: [
      "The plural of 'Aha' (brother) has the irregular pattern 'Ahe' (ܐܚ̈ܐ).",
      "The family is called 'Yqarto' (ܝܰܩܰܪܬܳܐ)."
    ],
    vocabulary: [
      { syriac: "ܐܒܐ", translit: "Aba", meaning: "Ayah / Bapa", meaningEn: "Father", category: "Keluarga" },
      { syriac: "ܐܡܐ", translit: "Ema", meaning: "Ibu", meaningEn: "Mother", category: "Keluarga" },
      { syriac: "ܒܪܐ", translit: "Bera", meaning: "Anak Laki-laki", meaningEn: "Son", category: "Keluarga" }
    ],
    examples: [
      { syriac: "ܐܰܒ݁ܳܐ ܘܐܶܡܳܐ ܘܒ݂ܪܳܐ", translit: "Aba w-Ema w-Bra", phonetic: "Abō w-Emō w-Brō", indonesian: "Ayah, Ibu, dan Anak laki-laki", english: "Father, Mother, and Son" },
      { syriac: "ܗܳܕܶܐ ܚܳܬ݂ܝ", translit: "Hade hathy", phonetic: "Hodē ḥōty", indonesian: "Ini adalah saudara perempuanku", english: "This is my sister" }
    ],
    quizzes: [
      {
        id: 3301,
        question: "Apakah padanan kata bahasa Aram untuk 'Anak laki-laki'?",
        questionEn: "What is the Aramaic equivalent of 'Son'?",
        options: ["Aba", "Ema", "Bra / Bera (ܒ݁ܪܳܐ)", "Bartha"],
        optionsEn: ["Aba", "Ema", "Bra / Bera (ܒ݁ܪܳܐ)", "Bartha"],
        correctAnswer: "Bra / Bera (ܒ݁ܪܳܐ)",
        correctAnswerEn: "Bra / Bera (ܒ݁ܪܳܐ)",
        explanation: "Bera / Bra melambangkan anak laki-laki.",
        explanationEn: "Bera / Bra means a son."
      },
      {
        id: 3302,
        question: "Kata 'ܚܳܬ݂ܳܐ' (Hatha) bertumpu pada anggota keluarga...",
        questionEn: "The word 'ܚܳܬ݂ܳܐ' (Hatha) refers to which family member?",
        options: ["Saudara Laki-laki", "Saudara Perempuan", "Paman", "Kakek"],
        optionsEn: ["Brother", "Sister", "Uncle", "Grandfather"],
        correctAnswer: "Saudara Perempuan",
        correctAnswerEn: "Sister",
        explanation: "Hatha / Ḥōthō melambangkan saudara perempuan.",
        explanationEn: "Hatha / Ḥōthō means a sister."
      },
      {
        id: 3303,
        question: "Bagaimanakah memanggil 'Ibuku' dengan akhiran sufiks yang tepat?",
        questionEn: "How do you say 'My mother' with the correct suffix ending?",
        options: ["Emy (ܐܶܡܝ)", "Emakh", "Emtheh", "Eme"],
        optionsEn: ["Emy (ܐܶܡܝ)", "Emakh", "Emtheh", "Eme"],
        correctAnswer: "Emy (ܐܶܡܝ)",
        correctAnswerEn: "Emy (ܐܶܡܝ)",
        explanation: "Ema + y = Emy (Ibuku).",
        explanationEn: "Ema + y = Emy (My mother)."
      },
      {
        id: 3304,
        question: "Apakah arti dari kata 'Bartha' (ܒ݁ܰܪܬܳܐ)?",
        questionEn: "What does the word 'Bartha' (ܒ݁ܰܪܬܳܐ) mean?",
        options: ["Ibu", "Ratu", "Anak perempuan", "Nenek"],
        optionsEn: ["Mother", "Queen", "Daughter", "Grandmother"],
        correctAnswer: "Anak perempuan",
        correctAnswerEn: "Daughter",
        explanation: "Bartha / Bartō melambangkan anak perempuan, bentuk feminin dari Bera.",
        explanationEn: "Bartha / Bartō means a daughter, the feminine form of Bera."
      },
      {
        id: 3305,
        question: "Keluarga secara kolektif diistilahkan sebagai...",
        questionEn: "The family as a whole is called...",
        options: ["Mdintha", "Yqarta (ܝܰܩܰܪܬܳܐ)", "Malpetha", "Edta"],
        optionsEn: ["Mdintha", "Yqarta (ܝܰܩܰܪܬܳܐ)", "Malpetha", "Edta"],
        correctAnswer: "Yqarta (ܝܰܩܰܪܬܳܐ)",
        correctAnswerEn: "Yqarta (ܝܰܩܰܪܬܳܐ)",
        explanation: "Yqarta / Yqartō memiliki makna harfiah 'yang berharga', digunakan untuk mendeskripsikan rukun keluarga.",
        explanationEn: "Yqarta / Yqartō literally means 'the precious one', used to describe the family bond."
      }
    ]
  },
  {
    id: 34,
    title: "Nama Hewan Klasik",
    titleEn: "Classical Animal Names",
    titleSyriac: "ܫܡܳܗ̈ܐ ܕܚܝܘܬ̈ܐ",
    category: "Level A2",
    summary: "Kosakata seputar binatang dalam pustaka herba dan sastra klasik.",
    summaryEn: "Vocabulary about animals in herbal literature and classical writings.",
    introduction: "Hewan memiliki peran sosiologis kuat dalam pepatah dan kiasan teks Timur Tengah kuno.",
    introductionEn: "Animals play a strong sociological role in the proverbs and metaphors of ancient Middle Eastern texts.",
    content: "Kosakata Binatang Dasar:\n- Singa: ܐܰܪܝܳܐ (Aryo)\n- Domba: ܥܶܪܒܳܐ ('Erbo)\n- Merpati: ܝܰܘܢܳܐ (Yawno)\n- Keledai: ܚܡܳܪܳܐ (Hmoro)\n- Serigala: ܕܺܐܒܳܐ (Dibo).",
    contentEn: "Basic Animal Vocabulary:\n- Lion: ܐܰܪܝܳܐ (Aryo)\n- Sheep: ܥܶܪܒܳܐ ('Erbo)\n- Dove: ܝܰܘܢܳܐ (Yawno)\n- Donkey: ܚܡܳܪܳܐ (Hmoro)\n- Wolf: ܕܺܐܒܳܐ (Dibo).",
    keyRules: [
      "Secara teologis domba (Erbo) melambangkan jemaat, sementara singa (Aryo) keperkasaan."
    ],
    keyRulesEn: [
      "Theologically, the sheep (Erbo) symbolizes the congregation, while the lion (Aryo) symbolizes strength."
    ],
    vocabulary: [
      { syriac: "ܐܪܝܐ", translit: "Aryo", meaning: "Singa", meaningEn: "Lion", category: "Hewan" },
      { syriac: "ܥܪܒܐ", translit: "Erbo", meaning: "Domba", meaningEn: "Sheep", category: "Hewan" },
      { syriac: "ܝܘܢܐ", translit: "Yawno", meaning: "Merpati", meaningEn: "Dove", category: "Hewan" }
    ],
    examples: [
      { syriac: "ܐܰܪܝܳܐ ܪܰܒܳܐ", translit: "Aryo rabo", phonetic: "Aryō Rabō", indonesian: "Singa yang besar", english: "A big lion" },
      { syriac: "ܥܶܪܒܳܐ ܫܡܳܥ ܩܳܠܳܐ", translit: "Erbo shmá qolo", phonetic: "`Erbō shma` qōlō", indonesian: "Domba itu mendengar suara itu", english: "The sheep heard that voice" }
    ],
    quizzes: [
      {
        id: 3401,
        question: "Binatang manakah yang dilambangkan oleh kata 'ܐܰܪܝܳܐ' (Aryo)?",
        questionEn: "Which animal is represented by the word 'ܐܰܪܝܳܐ' (Aryo)?",
        options: ["Domba", "Singa", "Burung", "Serigala"],
        optionsEn: ["Sheep", "Lion", "Bird", "Wolf"],
        correctAnswer: "Singa",
        correctAnswerEn: "Lion",
        explanation: "Aryo / Aryā berarti singa (lambang kekuasaan/kekuatan).",
        explanationEn: "Aryo / Aryā means lion (a symbol of power/strength)."
      },
      {
        id: 3402,
        question: "Kata 'ܝܰܘܢܳܐ' (Yawno) menceritakan unggas...",
        questionEn: "The word 'ܝܰܘܢܳܐ' (Yawno) describes the bird...",
        options: ["Rajawali", "Merpati", "Ayam", "Gagak"],
        optionsEn: ["Eagle", "Dove", "Chicken", "Crow"],
        correctAnswer: "Merpati",
        correctAnswerEn: "Dove",
        explanation: "Yawno / Yawnā melambangkan burung merpati.",
        explanationEn: "Yawno / Yawnā means a dove."
      },
      {
        id: 3403,
        question: "Apakah makna dari kata 'ܥܶܪܒܳܐ' (Erbo)?",
        questionEn: "What does the word 'ܥܶܪܒܳܐ' (Erbo) mean?",
        options: ["Domba", "Keledai", "Ular", "Kuda"],
        optionsEn: ["Sheep", "Donkey", "Snake", "Horse"],
        correctAnswer: "Domba",
        correctAnswerEn: "Sheep",
        explanation: "`Erbo / `Erbā adalah domba.",
        explanationEn: "`Erbo / `Erbā is a sheep."
      },
      {
        id: 3404,
        question: "Siapakah musuh domba di hutan yang diistilahkan 'Dibo' (ܕܺܐܒܳܐ)?",
        questionEn: "Who is the enemy of the sheep in the forest, called 'Dibo' (ܕܺܐܒܳܐ)?",
        options: ["Merpati", "Ular", "Serigala", "Singa"],
        optionsEn: ["Dove", "Snake", "Wolf", "Lion"],
        correctAnswer: "Serigala",
        correctAnswerEn: "Wolf",
        explanation: "Dibo secara harafiah berarti serigala.",
        explanationEn: "Dibo literally means wolf."
      },
      {
        id: 3405,
        question: "Hewan beban 'Hmoro' (ܚܡܳܪܳܐ) merepresentasikan...",
        questionEn: "The beast of burden 'Hmoro' (ܚܡܳܪܳܐ) represents...",
        options: ["Kuda", "Keledai", "Sapi", "Unta"],
        optionsEn: ["Horse", "Donkey", "Cow", "Camel"],
        correctAnswer: "Keledai",
        correctAnswerEn: "Donkey",
        explanation: "Hmoro / Ḥmōrō bernilai arti keledai.",
        explanationEn: "Hmoro / Ḥmōrō means donkey."
      }
    ]
  },
  {
    id: 35,
    title: "Geografi, Cuaca & Alam Raya",
    titleEn: "Geography, Weather & Nature",
    titleSyriac: "ܟܝܢܐ ܘܐܝܪܐ",
    category: "Level A2",
    summary: "Mengulas unsur bumi, gejala cuaca, dan alam semesta.",
    summaryEn: "A look at the elements of the earth, weather phenomena, and the universe.",
    introduction: "Mempelajari nama obyek alam raya mengukuhkan literatur pembacaan teks natural.",
    introductionEn: "Learning the names of the objects of the natural world strengthens your reading of nature texts.",
    content: "Kosakata Alam:\n- Langit/Surga: ܫܡܰܝܳܐ (Shmayya)\n- Bumi/Tanah: ܐܰܪܥܳܐ (Ar'a)\n- Air: ܡܰܝܳܐ (Mayya)\n- Api: ܢܽܘܪܳܐ (Nura)\n- Angin/Roh: ܪܽܘܚܳܐ (Ruha).",
    contentEn: "Nature Vocabulary:\n- Heaven/Sky: ܫܡܰܝܳܐ (Shmayya)\n- Earth/Land: ܐܰܪܥܳܐ (Ar'a)\n- Water: ܡܰܝܳܐ (Mayya)\n- Fire: ܢܽܘܪܳܐ (Nura)\n- Wind/Spirit: ܪܽܘܚܳܐ (Ruha).",
    keyRules: [
      "Bumi (Ar'a) dan Roh/Angin (Ruha) secara gramatikal dinilai bergender Feminin."
    ],
    keyRulesEn: [
      "The earth (Ar'a) and the wind/spirit (Ruha) are grammatically feminine."
    ],
    vocabulary: [
      { syriac: "ܐܪܥܐ", translit: "Ar'a", meaning: "Bumi / Tanah", meaningEn: "Earth / Land", category: "Geografi" },
      { syriac: "ܡܝܐ", translit: "Mayya", meaning: "Air", meaningEn: "Water", category: "Geografi" },
      { syriac: "ܪܘܚܐ", translit: "Ruha", meaning: "Angin / Roh / Nafas", meaningEn: "Wind / Spirit / Breath", category: "Geografi" }
    ],
    examples: [
      { syriac: "ܫܡܰܝܳܐ ܘܐܰܪܥܳܐ", translit: "Shmayya w-Ar'a", phonetic: "Shmayō w-Ar`ō", indonesian: "Langit dan Bumi", english: "Heaven and Earth" },
      { syriac: "ܡܰܝܳܐ ܚܰܝ̈ܶܐ", translit: "Mayya hayye", phonetic: "Mayyō ḥayyē", indonesian: "Air kehidupan", english: "Living water" }
    ],
    quizzes: [
      {
        id: 3501,
        question: "Manakah di antara kata berikut yang berarti 'Bumi atau Tanah'?",
        questionEn: "Which of these words means 'Earth or Land'?",
        options: ["Shmayya", "Ar'a (ܐܰܪܥܳܐ)", "Mayya", "Nura"],
        optionsEn: ["Shmayya", "Ar'a (ܐܰܪܥܳܐ)", "Mayya", "Nura"],
        correctAnswer: "Ar'a (ܐܰܪܥܳܐ)",
        correctAnswerEn: "Ar'a (ܐܰܪܥܳܐ)",
        explanation: "Ar'a / Ar`ō melambangkan bumi, tanah, atau negeri.",
        explanationEn: "Ar'a / Ar`ō means earth, land, or country."
      },
      {
        id: 3502,
        question: "Kata cair 'ܡܰܝܳܐ' (Mayya) diterjemahkan sebagai...",
        questionEn: "The liquid word 'ܡܰܝܳܐ' (Mayya) is translated as...",
        options: ["Batu", "Air", "Api", "Angin"],
        optionsEn: ["Stone", "Water", "Fire", "Wind"],
        correctAnswer: "Air",
        correctAnswerEn: "Water",
        explanation: "Mayya adalah air (jamak bawaan intrinsik).",
        explanationEn: "Mayya is water (intrinsically plural)."
      },
      {
        id: 3503,
        question: "Apakah makna ganda dari partikel teologis 'ܪܽܘܚܳܐ' (Ruha)?",
        questionEn: "What is the double meaning of the theological particle 'ܪܽܘܚܳܐ' (Ruha)?",
        options: ["Tanah & Pasir", "Api & Cahaya", "Angin / Roh / Nafas kehidupan", "Langit & Awan"],
        optionsEn: ["Land & Sand", "Fire & Light", "Wind / Spirit / Breath of life", "Sky & Clouds"],
        correctAnswer: "Angin / Roh / Nafas kehidupan",
        correctAnswerEn: "Wind / Spirit / Breath of life",
        explanation: "Ruha / Ruḥō melambangkan angin fisik, hembusan nafas, maupun jati diri Roh.",
        explanationEn: "Ruha / Ruḥō means physical wind, the breath of life, and the identity of the Spirit."
      },
      {
        id: 3504,
        question: "Elemen membakar 'Nura' (ܢܽܘܪܳܐ) berarti...",
        questionEn: "The burning element 'Nura' (ܢܽܘܪܳܐ) means...",
        options: ["Darat", "Air", "Api", "Asap"],
        optionsEn: ["Land", "Water", "Fire", "Smoke"],
        correctAnswer: "Api",
        correctAnswerEn: "Fire",
        explanation: "Nura berarti api atau kobaran pembakaran.",
        explanationEn: "Nura means fire or a burning flame."
      },
      {
        id: 3505,
        question: "Apakah arti dari frasa 'Mayya hayye'?",
        questionEn: "What does the phrase 'Mayya hayye' mean?",
        options: ["Udar segar", "Tanah subur", "Air kehidupan", "Api besar"],
        optionsEn: ["Fresh air", "Fertile land", "Living water", "Great fire"],
        correctAnswer: "Air kehidupan",
        correctAnswerEn: "Living water",
        explanation: "Mayye = air, hayye = hidup/kehidupan. Berarti 'Air kehidupan'.",
        explanationEn: "Mayye = water, hayye = life/living. It means 'Living water'."
      }
    ]
  },
  {
    id: 36,
    title: "Kosakata Makanan & Minuman",
    titleEn: "Food & Drink Vocabulary",
    titleSyriac: "ܫܡܳܗ̈ܐ ܕܡܶܐܟܘܠܬ݂ܳܐ",
    category: "Level A2",
    summary: "Kumpulan nama kuliner khas Timur Tengah kuno, sayur, roti, anggur.",
    summaryEn: "A collection of names of ancient Middle Eastern cuisine, vegetables, bread, and wine.",
    introduction: "Dapur kuliner klasik memperkaya pengetahuan idiomatis kehidupan purba.",
    introductionEn: "Classical cuisine enriches your knowledge of the idioms of ancient life.",
    content: "Kosakata Konsumsi:\n- Roti: ܠܰܚܡܳܐ (Lakhma)\n- Anggur: ܚܰܡܪܳܐ (Hamra)\n- Garam: ܡܶܠܚܳܐ (Melha)\n- Madu: ܕܶܒ݂ܫܳܐ (Debsho)\n- Minyak: ܡܶܫܚܳܐ (Mesha).",
    contentEn: "Consumption Vocabulary:\n- Bread: ܠܰܚܡܳܐ (Lakhma)\n- Wine: ܚܰܡܪܳܐ (Hamra)\n- Salt: ܡܶܠܚܳܐ (Melha)\n- Honey: ܕܶܒ݂ܫܳܐ (Debsho)\n- Oil: ܡܶܫܚܳܐ (Mesha).",
    keyRules: [
      "Minyak urapan jasmani suci disebut 'Meshha' (Minyak), asal nama Mesias/Mshiha (yang diurapi)."
    ],
    keyRulesEn: [
      "The sacred anointing oil is called 'Meshha' (Oil), the origin of the name Messiah/Mshiha (the Anointed One)."
    ],
    vocabulary: [
      { syriac: "ܠܚܡܐ", translit: "Lakhma", meaning: "Roti / Makanan utama", meaningEn: "Bread / Staple food", category: "Konsumsi" },
      { syriac: "ܚܡܪܐ", translit: "Hamra", meaning: "Anggur (Wine)", meaningEn: "Wine", category: "Konsumsi" },
      { syriac: "ܡܠܚܐ", translit: "Melha", meaning: "Garam", meaningEn: "Salt", category: "Konsumsi" }
    ],
    examples: [
      { syriac: "ܠܰܚܡܳܐ ܕ݁ܩܽܘܪܒܳܢܳܐ", translit: "Lakhma d-qurbana", phonetic: "Laḥmō d-qurbonō", indonesian: "Roti persembahan", english: "Bread of offering" },
      { syriac: "ܚܰܡܪܳܐ ܚܰܕ݂ܬܳܐ", translit: "Hamra hdatha", phonetic: "Ḥamrō ḥdatō", indonesian: "Anggur baru", english: "New wine" }
    ],
    quizzes: [
      {
        id: 3601,
        question: "Makanan pokok universal 'Roti' diistilahkan sebagai...",
        questionEn: "The universal staple food 'Bread' is called...",
        options: ["Hamra", "Lakhma (ܠܰܚܡܳܐ)", "Melha", "Debsho"],
        optionsEn: ["Hamra", "Lakhma (ܠܰܚܡܳܐ)", "Melha", "Debsho"],
        correctAnswer: "Lakhma (ܠܰܚܡܳܐ)",
        correctAnswerEn: "Lakhma (ܠܰܚܡܳܐ)",
        explanation: "Lakhma melambangkan roti atau makanan primer penopang hidup.",
        explanationEn: "Lakhma means bread, the primary food that sustains life."
      },
      {
        id: 3602,
        question: "Keperluan perjamuan 'Anggur suci' diwakili oleh kata...",
        questionEn: "The sacred feast drink 'Wine' is represented by the word...",
        options: ["Lakhma", "Hamra (ܚܰܡܪܳܐ)", "Mesha", "Debsho"],
        optionsEn: ["Lakhma", "Hamra (ܚܰܡܪܳܐ)", "Mesha", "Debsho"],
        correctAnswer: "Hamra (ܚܰܡܪܳܐ)",
        correctAnswerEn: "Hamra (ܚܰܡܪܳܐ)",
        explanation: "Hamra / Ḥamrō melambangkan sari buah anggur.",
        explanationEn: "Hamra / Ḥamrō means grape juice/wine."
      },
      {
        id: 3603,
        question: "Bumbu penyedap pengawet 'Melha' (ܡܶܠܚܳܐ) berarti...",
        questionEn: "The flavouring preservative 'Melha' (ܡܶܠܚܳܐ) means...",
        options: ["Ragi", "Garam", "Madu", "Cuka"],
        optionsEn: ["Yeast", "Salt", "Honey", "Vinegar"],
        correctAnswer: "Garam",
        correctAnswerEn: "Salt",
        explanation: "Melha mengacu kepada komoditas garam pelestari rasa.",
        explanationEn: "Melha refers to salt, which preserves flavour."
      },
      {
        id: 3604,
        question: "Cairan manis 'Debsho' (ܕܶܒ݂ܫܳܐ) merepresentasikan...",
        questionEn: "The sweet liquid 'Debsho' (ܕܶܒ݂ܫܳܐ) represents...",
        options: ["Susu", "Madu", "Mecen", "Sari buah"],
        optionsEn: ["Milk", "Honey", "Mecen", "Fruit juice"],
        correctAnswer: "Madu",
        correctAnswerEn: "Honey",
        explanation: "Debsho / Debshā adalah madu hutan alami.",
        explanationEn: "Debsho / Debshā is natural wild honey."
      },
      {
        id: 3605,
        question: "Minyak secara umum diistilahkan 'Mesha' (ܡܶܫܚܳܐ), yang menjadi akar kata...",
        questionEn: "Oil in general is called 'Mesha' (ܡܶܫܚܳܐ), which is the root of the word...",
        options: ["Malka (Raja)", "Mshiha (Mesias / Yang diurapi)", "Shlomo (Damai)", "Alaha"],
        optionsEn: ["Malka (King)", "Mshiha (Messiah / The Anointed One)", "Shlomo (Peace)", "Alaha"],
        correctAnswer: "Mshiha (Mesias / Yang diurapi)",
        correctAnswerEn: "Mshiha (Messiah / The Anointed One)",
        explanation: "Mesha (minyak urapan) melandasi sebutan Mshiha (Mesias) atau 'Yang mendapat sapuan minyak suci'.",
        explanationEn: "Mesha (anointing oil) is the basis of the name Mshiha (Messiah), 'The One anointed with sacred oil'."
      }
    ]
  },
  {
    id: 37,
    title: "Konjungsi Kompleks & Anak Kalimat",
    titleEn: "Complex Conjunctions & Subordinate Clauses",
    titleSyriac: "ܩܫܪ̈ܐ ܕܣܝܳܩܐ",
    category: "Level A2",
    summary: "Mengaplikasikan kata hubung bersyarat dan temporal: Kad (ketika), En (jika), d-layt (supaya tidak).",
    summaryEn: "Apply conditional and temporal conjunctions: Kad (when), En (if), d-layt (so that not).",
    introduction: "Anak kalimat (dependent clause) membutuhkan penunjuk sebab-akibat yang mendalam.",
    introductionEn: "A subordinate clause (dependent clause) needs markers of cause and effect that go deeper.",
    content: "Daftar Konjungsi Bersyarat:\n- Kad (ܟܰܕ݂) : Ketika, tatkala, saat sedang.\n- En (ܐܶܢ) : Jika.\n- Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ) : Agar tidak / Supaya jangan.\n- 'Ad (ܥܰܕ݂) : Hingga, sampai, selama.",
    contentEn: "List of Conditional Conjunctions:\n- Kad (ܟܰܕ݂): When, while, as.\n- En (ܐܶܢ): If.\n- Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ): So that not / Lest.\n- 'Ad (ܥܰܕ݂): Until, as long as, while.",
    keyRules: [
      "Penerapan partikel ini membentuk lompatan logika waktu di dalam susunan klausa teks narasi sejarah."
    ],
    keyRulesEn: [
      "Using these particles creates leaps of time logic within the clause structure of historical narrative texts."
    ],
    vocabulary: [
      { syriac: "ܟܕ", translit: "Kad", meaning: "Ketika / Saat sedang", meaningEn: "When / While", category: "Konjungsi" },
      { syriac: "ܥܕ", translit: "Ad", meaning: "Hingga / Selama", meaningEn: "Until / As long as", category: "Konjungsi" },
      { syriac: "ܐܢ ܠܐ", translit: "En la", meaning: "Jika tidak (Unless)", meaningEn: "If not (Unless)", category: "Konjungsi" }
    ],
    examples: [
      { syriac: "ܟܰܕ݂ ܐܳܬ݂ܶܐ ܗܽܘ", translit: "Kad athe hu", phonetic: "Kad otē hū", indonesian: "Ketika dia sedang datang", english: "When he is coming" },
      { syriac: "ܥܰܕ݂ ܐܺܝܬ݂ ܠܟ݂ܽܘܢ ܢܽܘܗܪܳܐ", translit: "Ad ith lakhon nuhra", phonetic: "`Ad īt l-khūn nūhrō", indonesian: "Selama kalian memiliki terang", english: "While you have the light" }
    ],
    quizzes: [
      {
        id: 3701,
        question: "Kata hubung temporal 'ܟܰܕ݂' (Kad) mengekspresikan arti...",
        questionEn: "The temporal conjunction 'ܟܰܕ݂' (Kad) expresses the meaning...",
        options: ["Sebab", "Jika", "Ketika / Saat sedang", "Setelah selesai"],
        optionsEn: ["Because", "If", "When / While", "After it finished"],
        correctAnswer: "Ketika / Saat sedang",
        correctAnswerEn: "When / While",
        explanation: "Kad memancarkan relasi waktu berbenturan simultan ('tatkala/ketika sedang').",
        explanationEn: "Kad expresses a simultaneous time relationship ('when/while')."
      },
      {
        id: 3702,
        question: "Frasa 'ܥܰܕ݂ ܐܺܝܬ݂ ܠܟ݂ܽܘܢ ܢܽܘܗܪܳܐ' berarti...",
        questionEn: "The phrase 'ܥܰܕ݂ ܐܺܝܬ݂ ܠܟ݂ܽܘܢ ܢܽܘܗܪܳܐ' means...",
        options: ["Sampai kalian melihat gelap", "Selama kalian memiliki terang", "Terang telah pergi darimu", "Kami tidak ada cahaya"],
        optionsEn: ["Until you see darkness", "While you have the light", "The light has gone from you", "We have no light"],
        correctAnswer: "Selama kalian memiliki terang",
        correctAnswerEn: "While you have the light",
        explanation: "Ad = selama, Ith = ada, l-khon = bagi kalian, nuhra = terang. 'Selama terang ada padamu'.",
        explanationEn: "Ad = while, Ith = there is, l-khon = for you, nuhra = light. 'While you have the light'."
      },
      {
        id: 3703,
        question: "Mengekspresikan pencegahan 'Supaya jangan / Agar tidak' digunakan...",
        questionEn: "To express prevention, 'So that not / Lest', use...",
        options: ["Metul-man", "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)", "Hono", "Ela"],
        optionsEn: ["Metul-man", "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)", "Hono", "Ela"],
        correctAnswer: "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)",
        correctAnswerEn: "Metul d-la (ܡܶܛܽܠ ܕ݁ܠܳܐ)",
        explanation: "Metul d-la bermakna 'demi/karena yang jangan' atau 'supaya tidak'.",
        explanationEn: "Metul d-la means 'so that it should not' or 'lest'."
      },
      {
        id: 3704,
        question: "Kata hubung 'En la' berarti...",
        questionEn: "The conjunction 'En la' means...",
        options: ["Bila ada", "Jika tidak", "Karena itu", "Meskipun"],
        optionsEn: ["If there is", "If not", "Therefore", "Although"],
        correctAnswer: "Jika tidak",
        correctAnswerEn: "If not",
        explanation: "En = jika, la = tidak. Gabungan kondisional negatif.",
        explanationEn: "En = if, la = not. A negative conditional combination."
      },
      {
        id: 3705,
        question: "Konjungsi temporal '`Ad' mengekspresikan...",
        questionEn: "The temporal conjunction '`Ad' expresses...",
        options: ["Kemarin", "Hingga / Selama / Sampai", "Setelah", "Mungkin"],
        optionsEn: ["Yesterday", "Until / As long as / While", "After", "Maybe"],
        correctAnswer: "Hingga / Selama / Sampai",
        correctAnswerEn: "Until / As long as / While",
        explanation: "`Ad menandai batas rentang waktu atau kontinuitas.",
        explanationEn: "`Ad marks the limit of a time span or continuity."
      }
    ]
  },
  {
    id: 38,
    title: "Kata Keterangan Waktu & Tempat",
    titleEn: "Adverbs of Time & Place",
    titleSyriac: "ܗܘܡܪ̈ܝ ܕܬܚܘܝܬܐ",
    category: "Level A2",
    summary: "Kosakata adverbia esensial: tman (di sana), rka (di sini), tmol (kemarin), yawmono (hari ini).",
    summaryEn: "Essential adverb vocabulary: tman (there), rka (here), tmol (yesterday), yawmono (today).",
    introduction: "Kata keterangan (adverb) menentukan koordinat ruang dan waktu jalannya aksi.",
    introductionEn: "Adverbs determine the coordinates of space and time in which an action takes place.",
    content: "Adverbia Ruang (Spesifik):\n- Di sini: ܗܳܪܟܳܐ (Harka)\n- Di sana: ܬܰܡܳܢ (Tman)\n\nAdverbia Waktu:\n- Hari ini: ܝܰܘܡܳܢܳܐ (Yawmono)\n- Kemarin: ܐܶܬ݂ܡܳܠܝ (Ethmoly)\n- Besok: ܡܚܳܪ (Mhar)\n- Sekarang: ܗܳܫܳܐ (Hasha).",
    contentEn: "Adverbs of Place:\n- Here: ܗܳܪܟܳܐ (Harka)\n- There: ܬܰܡܳܢ (Tman)\n\nAdverbs of Time:\n- Today: ܝܰܘܡܳܢܳܐ (Yawmono)\n- Yesterday: ܐܶܬ݂ܡܳܠܝ (Ethmoly)\n- Tomorrow: ܡܚܳܪ (Mhar)\n- Now: ܗܳܫܳܐ (Hasha).",
    keyRules: [
      "Banyak adverbia waktu dibentuk dengan menggabungkan kata benda dasar penunjuk temporal."
    ],
    keyRulesEn: [
      "Many time adverbs are formed by combining a basic noun that points to time."
    ],
    vocabulary: [
      { syriac: "ܗܪܟܐ", translit: "Harka", meaning: "Di sini", meaningEn: "Here", category: "Adverbia" },
      { syriac: "ܬܡܢ", translit: "Tman", meaning: "Di sana", meaningEn: "There", category: "Adverbia" },
      { syriac: "ܗܫܐ", translit: "Hasha", meaning: "Sekarang", meaningEn: "Now", category: "Adverbia" }
    ],
    examples: [
      { syriac: "ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ", translit: "Hu ithawhy harka", phonetic: "Hū īthawhy harkō", indonesian: "Dia ada di sini", english: "He is here" },
      { syriac: "ܬܡܰܢ ܐܰܙܠܽܘܢ", translit: "Tman azlun", phonetic: "Tman azlūn", indonesian: "Ke sana mereka telah pergi", english: "There they have gone" }
    ],
    quizzes: [
      {
        id: 3801,
        question: "Manakah penunjuk keterangan ruang yang berarti 'Di sini'?",
        questionEn: "Which spatial adverb means 'Here'?",
        options: ["Tman", "Harka (ܗܳܪܟܳܐ)", "Hasha", "Mhar"],
        optionsEn: ["Tman", "Harka (ܗܳܪܟܳܐ)", "Hasha", "Mhar"],
        correctAnswer: "Harka (ܗܳܪܟܳܐ)",
        correctAnswerEn: "Harka (ܗܳܪܟܳܐ)",
        explanation: "Harka melambangkan letak posisi kedekatan ('di sini').",
        explanationEn: "Harka marks a nearby position ('here')."
      },
      {
        id: 3802,
        question: "Kata penunjuk waktu 'ܗܳܫܳܐ' (Hasha) memiliki makna...",
        questionEn: "The time word 'ܗܳܫܳܐ' (Hasha) means...",
        options: ["Hari ini", "Kemarin", "Sekarang / Saat ini", "Besok"],
        optionsEn: ["Today", "Yesterday", "Now / At this moment", "Tomorrow"],
        correctAnswer: "Sekarang / Saat ini",
        correctAnswerEn: "Now / At this moment",
        explanation: "Hasha / Hōshō melambangkan waktu sekarang atau saat ini seketika.",
        explanationEn: "Hasha / Hōshō means the present time, right now."
      },
      {
        id: 3803,
        question: "Penunjuk tempat jauh 'ܬܰܡܳܢ' (Tman) berarti...",
        questionEn: "The distant place marker 'ܬܰܡܳܢ' (Tman) means...",
        options: ["Di sana", "Ke atas", "Di sini", "Di dalam"],
        optionsEn: ["There", "Upwards", "Here", "Inside"],
        correctAnswer: "Di sana",
        correctAnswerEn: "There",
        explanation: "Tman melambangkan letak koordinat jauh ('di sana').",
        explanationEn: "Tman marks a faraway location ('there')."
      },
      {
        id: 3804,
        question: "Bagaimanakah menterjemahkan 'Dia (pria) ada di sini' ?",
        questionEn: "How do you translate 'He is here'?",
        options: ["Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)", "Hu ithawhy tman", "Layt harka", "Eno harka"],
        optionsEn: ["Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)", "Hu ithawhy tman", "Layt harka", "Eno harka"],
        correctAnswer: "Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)",
        correctAnswerEn: "Hu ithawhy harka (ܗܽܘ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܳܪܟܳܐ)",
        explanation: "Hu = dia, ithawhy = penegas keadaan ada (verb 'to be' enklitik), harka = di sini.",
        explanationEn: "Hu = he, ithawhy = the enclitic 'to be' affirming existence, harka = here."
      },
      {
        id: 3805,
        question: "Apakah arti dari kata 'Mhar' (ܡܚܳܪ)?",
        questionEn: "What does the word 'Mhar' (ܡܚܳܪ) mean?",
        options: ["Kemarin", "Hari ini", "Besok", "Tahun lalu"],
        optionsEn: ["Yesterday", "Today", "Tomorrow", "Last year"],
        correctAnswer: "Besok",
        correctAnswerEn: "Tomorrow",
        explanation: "Mhar / Mḥor melambangkan hari esok/besok.",
        explanationEn: "Mhar / Mḥor means tomorrow."
      }
    ]
  },
  {
    id: 39,
    title: "Pola Kata Kerja Aphel (Kausatif Aktif)",
    titleEn: "The Aphel Verb Pattern (Active Causative)",
    titleSyriac: "ܡܠܬܐ ܕܐܦܥܠ",
    category: "Level A2",
    summary: "Memahami struktur pembentukan kata kerja kausatif aktif Aphel.",
    summaryEn: "Understand the structure of the active causative Aphel verb.",
    introduction: "Pola Aphel digunakan untuk mengekspresikan instruktif-kausatif berupa 'menyuruh melakukan' atau 'membuat menjadi'.",
    introductionEn: "The Aphel pattern expresses an instructive-causative meaning: 'to make (someone) do' or 'to make (something) become'.",
    content: "Ciri khas pembentukan Aphel adalah penambahan prefiks 'A-' (Alap dengan harakat) di depan akar kata perfect.\nContoh perbandingan:\n- Nehad (Peal): Terang / Bersinar.\n- Anhar (Aphel): Menerangi / Membuat menjadi terang.\n- Kthab (Menulis) -> Akhtheb (Mendikte/Menyuruh menulis).",
    contentEn: "The hallmark of Aphel formation is the addition of the prefix 'A-' (Alap with a vowel) in front of the perfect root.\nA comparison:\n- Nehad (Peal): Light / To shine.\n- Anhar (Aphel): To enlighten / To make bright.\n- Kthab (To write) -> Akhtheb (To dictate / To make (someone) write).",
    keyRules: [
      "Huruf prefiks Alap (ܐ) adalah penanda mutlak klasifikasi orisinil verba Aphel."
    ],
    keyRulesEn: [
      "The prefix letter Alap (ܐ) is the absolute marker of the original Aphel verb classification."
    ],
    vocabulary: [
      { syriac: "ܐܢܗܪ", translit: "Anhar", meaning: "Telah menerangi (dari nehad)", meaningEn: "Has enlightened (from nehad)", category: "Kata Kerja Aphel" },
      { syriac: "ܐܩܝܡ", translit: "Aqim", meaning: "Telah membangkitkan (dari qam - berdiri)", meaningEn: "Has raised up (from qam - to stand)", category: "Kata Kerja Aphel" },
      { syriac: "ܐܚܬܒ", translit: "Akhtheb", meaning: "Telah mendikte (menyuruh menulis)", meaningEn: "Has dictated (made someone write)", category: "Kata Kerja Aphel" }
    ],
    examples: [
      { syriac: "ܐܰܢܗܰܪ ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ", translit: "Anhar Alaha nuhra", phonetic: "Anhar Alaho nūhrō", indonesian: "Allah telah menerangkan cahaya itu", english: "God has enlightened that light" },
      { syriac: "ܐܰܩܺܝܡ ܡܰܠܟܳܐ ܬܰܠܡܺܝܕܳܐ", translit: "Aqim malka talmida", phonetic: "Aqīm malkō talmīdō", indonesian: "Raja telah membangunkan siswa itu", english: "The king has woken up that student" }
    ],
    quizzes: [
      {
        id: 3901,
        question: "Apakah makna gramatikal utama dari penambahan kelompok kata kerja 'Aphel'?",
        questionEn: "What is the main grammatical meaning of adding the 'Aphel' verb group?",
        options: ["Menandakan arti pasif murni", "Menandakan Kausatif / Membuat subjek melakukan sesuatu", "Kondisi ragu-ragu", "Perintah langsung tanpa subjek"],
        optionsEn: ["It marks a purely passive meaning", "It marks a Causative / Making the subject do something", "A state of doubt", "A direct command without a subject"],
        correctAnswer: "Menandakan Kausatif / Membuat subjek melakukan sesuatu",
        correctAnswerEn: "It marks a Causative / Making the subject do something",
        explanation: "Aphel melambangkan aspek kausatif (membuat perbuatan terjadi).",
        explanationEn: "Aphel marks the causative aspect (making an action happen)."
      },
      {
        id: 3902,
        question: "Prefiks huruf apakah yang wajib diletakkan di depan akar kata bentuk Perfect Aphel?",
        questionEn: "Which prefix letter must be placed in front of the root of the Aphel Perfect form?",
        options: ["Taw", "Nun", "Alap (ܐ)", "Mim"],
        optionsEn: ["Taw", "Nun", "Alap (ܐ)", "Mim"],
        correctAnswer: "Alap (ܐ)",
        correctAnswerEn: "Alap (ܐ)",
        explanation: "Penambahan huruf Alap (ܐ-) di awal mencirikan pola utama Aphel 3ms.",
        explanationEn: "Adding the letter Alap (ܐ-) at the beginning marks the main Aphel 3ms pattern."
      },
      {
        id: 3903,
        question: "Apakah arti dari kata kerja 'ܐܰܩܺܝܡ' (Aqim) diturunkan dari akar berdiri 'Qam'?",
        questionEn: "What does the verb 'ܐܰܩܺܝܡ' (Aqim), derived from the root to stand 'Qam', mean?",
        options: ["Membunuh", "Mendirikan / Membangkitkan", "Pergi keluar", "Kembali pulang"],
        optionsEn: ["To kill", "To raise up / To awaken", "To go out", "To return home"],
        correctAnswer: "Mendirikan / Membangkitkan",
        correctAnswerEn: "To raise up / To awaken",
        explanation: "Aqim berarti mendirikan, membangunkan, atau membangkitkan (kausatif dari berdiri).",
        explanationEn: "Aqim means to raise up, to wake, or to awaken (causative of to stand)."
      },
      {
        id: 3904,
        question: "Kata kerja Aphel 'Anhar' berarti...",
        questionEn: "The Aphel verb 'Anhar' means...",
        options: ["Menerangi / Membuat bercahaya", "Mendengar", "Menulis cepat", "Menolak"],
        optionsEn: ["To enlighten / To make bright", "To hear", "To write fast", "To refuse"],
        correctAnswer: "Menerangi / Membuat bercahaya",
        correctAnswerEn: "To enlighten / To make bright",
        explanation: "Anhar melambangkan arti kausatif menyinari/menerangi.",
        explanationEn: "Anhar carries the causative meaning of shining light / enlightening."
      },
      {
        id: 3905,
        question: "Kata 'Akhtheb' (ܐܚܬܒ) menterjemahkan perbuatan...",
        questionEn: "The word 'Akhtheb' (ܐܚܬܒ) translates the action...",
        options: ["Mencatat harian", "Mendikte / Menyuruh menulis", "Membaca nyaring", "Menghapus tulisan"],
        optionsEn: ["Keeping a daily journal", "To dictate / To make someone write", "To read aloud", "To erase writing"],
        correctAnswer: "Mendikte / Menyuruh menulis",
        correctAnswerEn: "To dictate / To make someone write",
        explanation: "Kausatif dari menulis (Kthab) melahirkan arti menyuruh menulis atau mendikte.",
        explanationEn: "The causative of to write (Kthab) gives the meaning of making someone write, or dictating."
      }
    ]
  },
  {
    id: 40,
    title: "Sintaksis & Analisis Sastra Klasik Sederhana",
    titleEn: "Syntax & Simple Classical Literature Analysis",
    titleSyriac: "ܒܘܚܪܢܐ ܕܣܦܪܘܬܐ ܦܫܝܛܬܐ",
    category: "Level A2",
    summary: "Analisis sintaksis utuh naskah pendek untuk mempersiapkan transisi ke Level B1.",
    summaryEn: "A full syntactic analysis of a short text, preparing for the transition to Level B1.",
    introduction: "Modul penutup Level A2 ini menguji kapabilitas baca Anda dengan mengintegrasikan sintaksis, sufiks, dan verba kausatif.",
    introductionEn: "This closing module of Level A2 tests your reading ability by integrating syntax, suffixes, and causative verbs.",
    content: "Kita meneliti klausa pendek dari Kitab Kebijaksanaan:\n'Aba rahem l-breh, w-maqim leh b-nuhra raba' (Bapa mengasihi anaknya, dan membangkitkannya di dalam terang yang besar):\n- rahem: Mengasihi (Peal active participle).\n- l-breh: l- (kepada) + bera (anak) + -eh (sufiks -nya).\n- w-maqim: w- (dan) + maqim (Participle Aphel dari Aqim).\n- leh: l- (untuk) + -eh (dia).",
    contentEn: "We examine a short clause from the Book of Wisdom:\n'Aba rahem l-breh, w-maqim leh b-nuhra raba' (The Father loves his son, and raises him up in the great light):\n- rahem: To love (Peal active participle).\n- l-breh: l- (to) + bera (son) + -eh (suffix -his).\n- w-maqim: w- (and) + maqim (Aphel participle of Aqim).\n- leh: l- (for) + -eh (him).",
    keyRules: [
      "Keberhasilan menganalisis struktur kalimat membuktikan siswa telah menguasai kompetensi dasar intermedier Level A2."
    ],
    keyRulesEn: [
      "Success in analysing sentence structure proves that the student has mastered the basic intermediate competencies of Level A2."
    ],
    vocabulary: [
      { syriac: "ܪܚܡ", translit: "Rahem", meaning: "Mengasihi / Mencintai", meaningEn: "To love", category: "Analisis" },
      { syriac: "ܡܩܝܡ", translit: "Maqim", meaning: "Yang membangkitkan (Participle Aphel)", meaningEn: "The one who raises up (Aphel participle)", category: "Analisis" },
      { syriac: "ܠܒܪܗ", translit: "l-breh", meaning: "kepada anaknya (m)", meaningEn: "to his son (m)", category: "Analisis" }
    ],
    examples: [
      { syriac: "ܐܰܒܳܐ ܪܳܚܶܡ ܠܰܒ݂ܪܶܗ", translit: "Aba rahem l-breh", phonetic: "Abō rāḥem l-brēh", indonesian: "Bapa mengasihi anaknya", english: "The Father loves his son" },
      { syriac: "ܡܰܩܺܝܡ ܠܶܗ ܒ݁ܢܽܘܗܪܳܐ", translit: "Maqim leh b-nuhra", phonetic: "Māqīm lēh b-nūhrō", indonesian: "Membangunkan dia di dalam terang", english: "Raising him up in the light" }
    ],
    quizzes: [
      {
        id: 4001,
        question: "Apakah arti dari kata kerja active participle 'ܪܳܚܶܡ' (Rahem)?",
        questionEn: "What does the active participle verb 'ܪܳܚܶܡ' (Rahem) mean?",
        options: ["Menulis", "Mengasihi / Mencintai", "Membenci", "Mengajar"],
        optionsEn: ["To write", "To love", "To hate", "To teach"],
        correctAnswer: "Mengasihi / Mencintai",
        correctAnswerEn: "To love",
        explanation: "Rahem / Rohem berasal dari r-h-m (kasih/sayang).",
        explanationEn: "Rahem / Rohem comes from r-h-m (love/affection)."
      },
      {
        id: 4002,
        question: "Penggalan kata 'l-breh' (ܠܰܒ݂ܪܶܗ) diurai secara tepat menjadi...",
        questionEn: "The word fragment 'l-breh' (ܠܰܒ݂ܪܶܗ) is correctly broken down as...",
        options: ["Dan anak kami", "Kepada anaknya (m)", "Dari gurunya", "Tanpa anak perempuannya"],
        optionsEn: ["And our son", "To his son (m)", "From his teacher", "Without his daughter"],
        correctAnswer: "Kepada anaknya (m)",
        correctAnswerEn: "To his son (m)",
        explanation: "Terdiri dari L- (kepada) + Bera (anak laki-laki) + -eh (sufiks -nya m tunggal).",
        explanationEn: "It consists of L- (to) + Bera (son) + -eh (the suffix -his, masculine singular)."
      },
      {
        id: 4003,
        question: "Bentuk participle kausatif 'Maqim' (ܡܩܝܡ) mengekspresikan peran...",
        questionEn: "The causative participle 'Maqim' (ܡܩܝܡ) expresses the role...",
        options: ["Orang yang mengaji", "Orang yang mendirikan / membangkitkan", "Pencuri malam", "Raja yang tunduk"],
        optionsEn: ["The one who recites", "The one who raises up / awakens", "A night thief", "A submissive king"],
        correctAnswer: "Orang yang mendirikan / membangkitkan",
        correctAnswerEn: "The one who raises up / awakens",
        explanation: "Maqim adalah active participle bentukan binner Aphel.",
        explanationEn: "Maqim is the active participle of the Aphel form."
      },
      {
        id: 4004,
        question: "Bentuk feminin dari 'Aba rahem' (Bapa mengasihi) adalah 'Ema rahmo' yang berarti...",
        questionEn: "The feminine form of 'Aba rahem' (The Father loves) is 'Ema rahmo', which means...",
        options: ["Kakak menolong", "Ibu mengasihi", "Ayah datang", "Anak pergi"],
        optionsEn: ["The older sibling helps", "The Mother loves", "The Father comes", "The child goes"],
        correctAnswer: "Ibu mengasihi",
        correctAnswerEn: "The Mother loves",
        explanation: "Ema = ibu, rahmo = mengasihi (f participle).",
        explanationEn: "Ema = mother, rahmo = loves (feminine participle)."
      },
      {
        id: 4005,
        question: "Uji pencapaian: Manakah di antara tingkat CEFR berikut yang merepresentasikan kompetensi modul 21-40 ini?",
        questionEn: "Achievement check: Which of these CEFR levels represents the competency of modules 21–40?",
        options: ["Level A1", "Level A2", "Level B1", "Level C2"],
        optionsEn: ["Level A1", "Level A2", "Level B1", "Level C2"],
        correctAnswer: "Level A2",
        correctAnswerEn: "Level A2",
        explanation: "Modul 21-40 didesain khusus melayani penguasaan kompetensi tingkat CEFR Level A2.",
        explanationEn: "Modules 21–40 are designed specifically to serve mastery of CEFR Level A2 competency."
      }
    ]
  }
];
