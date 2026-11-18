import { Module } from "../types";

export const modulesB1: Module[] = [
  {
    id: 41,
    title: "Kata Kerja Lemah & Konsonan Tenggorokan",
    titleEn: "Weak Verbs & Guttural Consonants",
    titleSyriac: "ܡܰܠܝ̈ܳܬ݂ܳܐ ܟ݁ܪ̈ܺܝܗܳܬ݂ܳܐ",
    category: "Level B1",
    summary: "Aturan konjugasi kata kerja yang mengandung huruf lemah (Yodh, Alap, Waw) atau konsonan tenggorokan.",
    summaryEn: "The conjugation rules for verbs containing weak letters (Yodh, Alap, Waw) or guttural consonants.",
    introduction: "Kata kerja lemah (weak verbs) mengalami penyusutan vokal atau penghilangan konsonan di dalam konjugasi tertentu.",
    introductionEn: "Weak verbs undergo vowel loss or consonant dropping in certain conjugations.",
    content: "Konsonan lemah seperti Alap (ܐ), Waw (ܘ), atau Yodh (ܝ), serta huruf tenggorokan (Ayn ܥ, Heth ܚ) seringkali memicu modifikasi vokal demi kelapangan artikulasi bunyi Semitik.\nContoh: Qam (ܩܳܡ - berdiri) yang aslinya memiliki huruf tengah Waw (q-w-m). Saat perfect 3ms, huruf Waw-nya terserap menjadi vokal panjang.",
    contentEn: "Weak consonants such as Alap (ܐ), Waw (ܘ), or Yodh (ܝ), and guttural letters (Ayn ܥ, Heth ܚ) often trigger vowel changes to make Semitic sounds easier to pronounce.\nExample: Qam (ܩܳܡ — to stand), which originally has a middle Waw (q-w-m). In the perfect 3rd person masculine singular, its Waw is absorbed into a long vowel.",
    keyRules: [
      "Kandungan huruf lemah merubah pola reguler sufiks verba.",
      "Konsonan guttural (tenggorokan) menolak geminasi (pengetatan ganda) di pola Pael."
    ],
    keyRulesEn: [
      "The presence of a weak letter changes the regular pattern of verb suffixes.",
      "Guttural consonants (throat letters) reject gemination (doubling) in the Pael pattern."
    ],
    vocabulary: [
      { syriac: "ܩܡ", translit: "Qam", meaning: "Dia telah berdiri (lemah tengah Waw)", meaningEn: "He has stood (weak middle Waw)", category: "Verba Lemah" },
      { syriac: "ܚܙܐ", translit: "Hzo", meaning: "Dia telah melihat (lemah akhir Alap/Yodh)", meaningEn: "He has seen (weak final Alap/Yodh)", category: "Verba Lemah" },
      { syriac: "ܡܝܬ", translit: "Mith", meaning: "Dia telah mati", meaningEn: "He has died", category: "Verba Lemah" }
    ],
    examples: [
      { syriac: "ܩܳܡ ܡܰܠܟܳܐ", translit: "Qam malka", phonetic: "Qom malko", indonesian: "Sang raja telah berdiri", english: "The king has stood" },
      { syriac: "ܚܙܳܐ ܐܰܠܳܗܳܐ ܢܽܘܗܪܳܐ", translit: "Hzo Alaha nuhra", phonetic: "Ḥzō Alaho nūhrō", indonesian: "Allah telah melihat terang itu", english: "God has seen the light" }
    ],
    quizzes: [
      {
        id: 4101,
        question: "Apakah yang dimaksud dengan 'Kata Kerja Lemah' (Weak Verbs) dalam bahasa Aram?",
        questionEn: "What is meant by a 'Weak Verb' in Aramaic?",
        options: ["Kata kerja yang jarang dipakai", "Kata kerja yang mengandung huruf Alap, Waw, atau Yodh", "Kata kerja yang tidak memiliki subjek", "Kata kerja benda"],
        optionsEn: ["A verb that is rarely used", "A verb containing the letters Alap, Waw, or Yodh", "A verb with no subject", "A noun"],
        correctAnswer: "Kata kerja yang mengandung huruf Alap, Waw, atau Yodh",
        correctAnswerEn: "A verb containing the letters Alap, Waw, or Yodh",
        explanation: "Huruf Alap, Waw, dan Yodh adalah konsonan lemah (quiescent) yang dapat luluh atau berasimilasi.",
        explanationEn: "Alap, Waw, and Yodh are weak (quiescent) consonants that can dissolve or assimilate."
      },
      {
        id: 4102,
        question: "Kata kerja 'ܩܳܡ' (Qam) sebenarnya diturunkan dari akar kata triliteral asli...",
        questionEn: "The verb 'ܩܳܡ' (Qam) is actually derived from the original triliteral root...",
        options: ["q-w-m (ܩ-ܘ-ܡ)", "q-m-m", "q-y-m", "m-l-k"],
        optionsEn: ["q-w-m (ܩ-ܘ-ܡ)", "q-m-m", "q-y-m", "m-l-k"],
        correctAnswer: "q-w-m (ܩ-ܘ-ܡ)",
        correctAnswerEn: "q-w-m (ܩ-ܘ-ܡ)",
        explanation: "Qam adalah kata kerja berongga (hollow) dengan vokal tengah Waw yang luluh.",
        explanationEn: "Qam is a hollow verb with a middle Waw that dissolves."
      },
      {
        id: 4103,
        question: "Akibat dari keberadaan huruf guttural (tenggorokan, seperti ܥ atau ܚ) pada kata kerja adalah...",
        questionEn: "The effect of a guttural (throat) letter, such as ܥ or ܚ, in a verb is...",
        options: ["Mengubah total arti kata", "Menolak geminasi/penekanan ganda pada kategori Pael", "Membuat kata tidak bisa dijamakkan", "Menjadi kata sifat"],
        optionsEn: ["It completely changes the meaning of the word", "It rejects gemination/doubling in the Pael pattern", "It makes the word impossible to pluralize", "It turns it into an adjective"],
        correctAnswer: "Menolak geminasi/penekanan ganda pada kategori Pael",
        correctAnswerEn: "It rejects gemination/doubling in the Pael pattern",
        explanation: "Guttural memiliki artikulasi unik yang resisten terhadap penekanan ganda (geminasi).",
        explanationEn: "Gutturals have a unique articulation that resists doubling (gemination)."
      },
      {
        id: 4104,
        question: "Apakah arti dari kata kerja lemah 'Hzo' (ܚܙܐ)?",
        questionEn: "What does the weak verb 'Hzo' (ܚܙܐ) mean?",
        options: ["Mendengar", "Melihat", "Berdiri", "Mati"],
        optionsEn: ["To hear", "To see", "To stand", "To die"],
        correctAnswer: "Melihat",
        correctAnswerEn: "To see",
        explanation: "Hzo / Ḥzō berarti melihat, menengok, atau memandang.",
        explanationEn: "Hzo / Ḥzō means to see, to look at, or to behold."
      },
      {
        id: 4105,
        question: "Bentuk lampau 'Mith' (ܡܝܬ) berarti...",
        questionEn: "The past form 'Mith' (ܡܝܬ) means...",
        options: ["Dia telah bangkit", "Dia telah mati", "Dia telah lari", "Dia telah lahir"],
        optionsEn: ["He has risen", "He has died", "He has run", "He has been born"],
        correctAnswer: "Dia telah mati",
        correctAnswerEn: "He has died",
        explanation: "Mith berasal dari akar m-w-t, mengekspresikan perihal kematian.",
        explanationEn: "Mith comes from the root m-w-t, expressing death."
      }
    ]
  },
  {
    id: 42,
    title: "Sintaksis Majemuk & Hubungan Subordinatif",
    titleEn: "Complex Syntax & Subordinate Relations",
    titleSyriac: "ܣܺܝܳܩܳܐ ܡܰܓ݁ܕ݁ܠܳܐ",
    category: "Level B1",
    summary: "Membuat konstruksi kompleks menggunakan anak kalimat bertingkat.",
    summaryEn: "Building complex constructions using nested subordinate clauses.",
    introduction: "Level B1 menuntut kemampuan merangkai argumen kompleks dengan anak kalimat.",
    introductionEn: "Level B1 demands the ability to string together complex arguments with subordinate clauses.",
    content: "Pola subordinatif dibentuk dengan menyematkan partikel relatif 'd-' (ܕ) di belakang konjugasi keterangan.\nContoh: Metul d- (karena yang / sebab), Men d- (semenjak yang), Ad d- (hingga saat yang). Ini mempermudah penyusunan klausa akibat-sebab yang kohesif dalam diskusi analitis.",
    contentEn: "Subordinate patterns are formed by attaching the relative particle 'd-' (ܕ) after a verb of description.\nExamples: Metul d- (because / since), Men d- (since / from the time that), Ad d- (until the time that). This makes it easier to build cohesive cause-and-effect clauses in analytical discussion.",
    keyRules: [
      "Perpaduan konjungsi d- merekatkan klausa utama dengan klausa pelengkap.",
      "Sering memicu perubahan susunan kata kerja ke awal anak kalimat."
    ],
    keyRulesEn: [
      "Combining the conjunction d- binds the main clause to its complement clause.",
      "It often triggers a change in word order, moving the verb to the start of the subordinate clause."
    ],
    vocabulary: [
      { syriac: "ܡܛܠ ܕ", translit: "Metul d-", meaning: "Sebab / Karena yang", meaningEn: "Because / Since", category: "Sintaksis" },
      { syriac: "ܐܝܟܢܐ ܕ", translit: "Aykan d-", meaning: "Sehingga / Agar yang", meaningEn: "So that / In order that", category: "Sintaksis" },
      { syriac: "ܡܢ ܕ", translit: "Men d-", meaning: "Semenjak yang", meaningEn: "Since / From the time that", category: "Sintaksis" }
    ],
    examples: [
      { syriac: "ܐܳܡܪܶܬ݂ ܠܟ݂ܽܘܢ ܡܶܛܽܠ ܕ݁ܰܚܙܰܝܬܽܘܢ", translit: "Amreth lakhon metul d-hazayton", phonetic: "Amret l-khūn metul d-ḥazayton", indonesian: "Aku berkata kepadamu karena kalian telah melihat", english: "I said to you because you have seen" },
      { syriac: "ܐܰܝܟ݁ܰܢ ܕ݁ܢܶܫܡܥܽܘܢ ܩܳܠܳܐ", translit: "Aykan d-neshme'un qolo", phonetic: "Aykan d-neshme`ūn qōlō", indonesian: "Sehingga mereka akan mendengar suara itu", english: "So that they will hear that voice" }
    ],
    quizzes: [
      {
        id: 4201,
        question: "Partikel satu huruf apakah yang mutlak mengunci sifat subordinatif anak kalimat?",
        questionEn: "Which single-letter particle is essential for marking a subordinate clause?",
        options: ["B-", "W-", "D- (ܕ)", "L-"],
        optionsEn: ["B-", "W-", "D- (ܕ)", "L-"],
        correctAnswer: "D- (ܕ)",
        correctAnswerEn: "D- (ܕ)",
        explanation: "Partikel relatif D- (ܕ) disematkan untuk menyambung anak kalimat bertingkat.",
        explanationEn: "The relative particle D- (ܕ) is attached to join a nested subordinate clause."
      },
      {
        id: 4202,
        question: "Apakah arti dari frasa penggabung 'Aykan d-'?",
        questionEn: "What does the connecting phrase 'Aykan d-' mean?",
        options: ["Semenjak dahulu", "Agar supaya / Sehingga", "Karena siapa", "Di bawah kolong"],
        optionsEn: ["Since long ago", "So that / In order that", "Because of whom", "Under the bed"],
        correctAnswer: "Agar supaya / Sehingga",
        correctAnswerEn: "So that / In order that",
        explanation: "Aykan d- berarti 'dengan cara yang' atau 'supaya/sehingga'.",
        explanationEn: "Aykan d- means 'in such a way that' or 'so that'."
      },
      {
        id: 4203,
        question: "Terjemahan dari 'Amreth lakhon metul d-hazayton' adalah...",
        questionEn: "The translation of 'Amreth lakhon metul d-hazayton' is...",
        options: ["Aku berkata kepadamu karena kalian telah melihat", "Kamu mendengar karena kami pergi", "Dia telah menulis apa yang didengarnya", "Mereka bangkit setelah mati"],
        optionsEn: ["I said to you because you have seen", "You heard because we left", "He wrote down what he heard", "They rose after dying"],
        correctAnswer: "Aku berkata kepadamu karena kalian telah melihat",
        correctAnswerEn: "I said to you because you have seen",
        explanation: "Amreth (saya berkata) + lakhon (kepada kalian) + metul d- (karena) + hazayton (kalian melihat).",
        explanationEn: "Amreth (I said) + lakhon (to you) + metul d- (because) + hazayton (you have seen)."
      },
      {
        id: 4204,
        question: "Konjungsi 'Men d-' mengekspresikan relasi...",
        questionEn: "The conjunction 'Men d-' expresses a relation of...",
        options: ["Asal-usul temporal (sejak / semenjak)", "Pertentangan ekstrem", "Pertanyaan lokasi", "Alasan tujuan"],
        optionsEn: ["Temporal origin (since / from the time that)", "Extreme contrast", "A question of location", "A reason of purpose"],
        correctAnswer: "Asal-usul temporal (sejak / semenjak)",
        correctAnswerEn: "Temporal origin (since / from the time that)",
        explanation: "Men d- berarti 'sejak yang' atau 'semenjak'.",
        explanationEn: "Men d- means 'since' or 'from the time that'."
      },
      {
        id: 4205,
        question: "Sintaksis majemuk Syriac umumnya memposisikan kata kerja anak kalimat di...",
        questionEn: "In Syriac complex syntax, the verb of a subordinate clause is generally placed at...",
        options: ["Ujung paragraf", "Samping kata benda subjek langsung", "Awal anak kalimat", "Dalam kurung"],
        optionsEn: ["The end of the paragraph", "Beside the subject noun directly", "The start of the subordinate clause", "Inside brackets"],
        correctAnswer: "Awal anak kalimat",
        correctAnswerEn: "The start of the subordinate clause",
        explanation: "Secara sintaksis klasik, verba sering melompat mendahului subjek di awal klausul subordinat.",
        explanationEn: "In classical syntax, the verb often jumps ahead of the subject at the start of a subordinate clause."
      }
    ]
  },
  {
    id: 43,
    title: "Puitika & Metrum Sastra Syriac Klasik",
    titleEn: "Poetics & Metre in Classical Syriac Literature",
    titleSyriac: "ܡܶܫܚܳܬ݂ܳܐ ܕ݁ܣܶܦ݂ܪܽܘܬ݂ܳܐ Sota",
    category: "Level B1",
    summary: "Memahami gaya puitis, rima, dan metrum (Madrashe u-Memre) dari Ephrem Pemusik.",
    summaryEn: "Understanding the poetic style, rhyme, and metre (Madrashe and Memre) of Ephrem the Harp.",
    introduction: "Sastra Syriac kuno sangat termasyhur lewat puitika teologis (hymns) bermetrum seni tinggi.",
    introductionEn: "Ancient Syriac literature is famed for its theological poetry (hymns) in highly artistic metre.",
    content: "Pustaka puitis terbagi menjadi:\n1. Memre (ܡܺܐܡܪ̈ܶܐ) : Homili puitis berbentuk narasi meter teratur (misalnya 7-7 suku kata milik St. Ephrem).\n2. Madrashe (ܡܰܕ݂ܪ̈ܳܫܶܐ) : Nyanyian paduan suara teologis dengan bait bertingkat dan refrein indah.",
    contentEn: "The poetic corpus is divided into:\n1. Memre (ܡܺܐܡܪ̈ܶܐ): Poetic homilies in narrative form with regular metre (for example, the 7-7 syllable metre of St. Ephrem).\n2. Madrashe (ܡܰܕ݂ܪ̈ܳܫܶܐ): Theological choral songs with layered stanzas and a beautiful refrain.",
    keyRules: [
      "Metrum Syriac dihitung murni berdasarkan jumlah suku kata (syllabic meter), bukan suku kata panjang-pendek (kuantitatif Yunani)."
    ],
    keyRulesEn: [
      "Syriac metre is counted purely by the number of syllables (syllabic metre), not by long and short syllables (Greek quantitative metre)."
    ],
    vocabulary: [
      { syriac: "ܡܐܡܪܐ", translit: "Memra", meaning: "Wacana puitis / Homili", meaningEn: "Poetic discourse / Homily", category: "Sastra" },
      { syriac: "ܡܕܪܫܐ", translit: "Madrasha", meaning: "Hymne pengajaran", meaningEn: "Teaching hymn", category: "Sastra" },
      { syriac: "ܡܪܢܝܬܐ", translit: "Mranita", meaning: "Pujian rohani", meaningEn: "Spiritual praise", category: "Sastra" }
    ],
    examples: [
      { syriac: "ܡܺܐܡܪܳܐ ܕ݁ܡܳܪܝ ܐܶܦ݂ܪܶܝܡ", translit: "Memra d-Mar Ephrem", phonetic: "Memrō d-Mor Ephrem", indonesian: "Puisi/Homili dari Santo Ephrem", english: "Poem/Homily of Saint Ephrem" },
      { syriac: "ܩܳܠܳܐ ܕ݁ܡܰܕ݂ܪܳܫܳܐ", translit: "Qolo d-madrasha", phonetic: "Qōlō d-madrashō", indonesian: "Melodi/Suara nyanyian teologis", english: "Melody/Voice of a theological song" }
    ],
    quizzes: [
      {
        id: 4301,
        question: "Apakah perbedaan mendasar sistem bait/metrum (meter) puitis Syriac dibanding Yunani kuno?",
        questionEn: "What is the fundamental difference between the Syriac poetic stanza/metre system and that of ancient Greek?",
        options: ["Mengikuti panjang pendek suara", "Menggunakan jumlah suku kata konstan (Syllabic Meter)", "Hanya ditulis lisan tanpa rima", "Ditulis dari kiri ke kanan"],
        optionsEn: ["It follows long and short sounds", "It uses a constant number of syllables (Syllabic Metre)", "It is only spoken aloud, without rhyme", "It is written from left to right"],
        correctAnswer: "Menggunakan jumlah suku kata konstan (Syllabic Meter)",
        correctAnswerEn: "It uses a constant number of syllables (Syllabic Metre)",
        explanation: "Metrum Syriac berakar pada struktur silabis tegap (misal metrum 7 suku kata per baris).",
        explanationEn: "Syriac metre is rooted in a firm syllabic structure (for example, a metre of 7 syllables per line)."
      },
      {
        id: 4302,
        question: "Istilah teologis untuk homili berparagraf puitis penceritaan adalah...",
        questionEn: "The theological term for a homily in poetic narrative paragraphs is...",
        options: ["Malktha", "Memre (ܡܺܐܡܪ̈ܶܐ)", "Meyya", "Mayya"],
        optionsEn: ["Malktha", "Memre (ܡܺܐܡܪ̈ܶܐ)", "Meyya", "Mayya"],
        correctAnswer: "Memre (ܡܺܐܡܪ̈ܶܐ)",
        correctAnswerEn: "Memre (ܡܺܐܡܪ̈ܶܐ)",
        explanation: "Memre melambangkan diskursus puitik penceritaan teologi.",
        explanationEn: "Memre refers to poetic narrative discourse on theology."
      },
      {
        id: 4303,
        question: "Nyanyian teologis paduan suara bersahut-sahutan dengan refrain disebut...",
        questionEn: "A theological choral song sung antiphonally with a refrain is called...",
        options: ["Madrasha (ܡܕܪܫܐ)", "Memra", "Aryo", "Mdintha"],
        optionsEn: ["Madrasha (ܡܕܪܫܐ)", "Memra", "Aryo", "Mdintha"],
        correctAnswer: "Madrasha (ܡܕܪܫܐ)",
        correctAnswerEn: "Madrasha (ܡܕܪܫܐ)",
        explanation: "Madrasha adalah kidung bernilai edukatif rohani (hymns of instruction).",
        explanationEn: "A Madrasha is a song of spiritual instruction (a hymn of instruction)."
      },
      {
        id: 4304,
        question: "Siapakah pujangga/teolog Syriac abad ke-4 paling tenar yang metrumnya dipakai sebagai standar emas?",
        questionEn: "Who is the most famous 4th-century Syriac poet/theologian whose metre is used as the gold standard?",
        options: ["Rudolf Luhukay", "St. Ephrem dari Nisibis / Mar Ephrem", "Bar Hebraeus", "Yuhanon d-Dara"],
        optionsEn: ["Rudolf Luhukay", "St. Ephrem of Nisibis / Mar Ephrem", "Bar Hebraeus", "Yuhanon d-Dara"],
        correctAnswer: "St. Ephrem dari Nisibis / Mar Ephrem",
        correctAnswerEn: "St. Ephrem of Nisibis / Mar Ephrem",
        explanation: "Mar Ephrem Syrus adalah bapa puitika Syriac termasyhur pelopor ribuan homili puitik.",
        explanationEn: "Mar Ephrem the Syrian is the most famous father of Syriac poetry, pioneer of thousands of poetic homilies."
      },
      {
        id: 4305,
        question: "Apakah arti literal dari kata 'Madrasha'?",
        questionEn: "What is the literal meaning of the word 'Madrasha'?",
        options: ["Sekolah", "Pengajaran / Pencarian makna mendalam", "Lautan lepas", "Reruntuhan"],
        optionsEn: ["School", "Teaching / Deep search for meaning", "Open sea", "Ruins"],
        correctAnswer: "Pengajaran / Pencarian makna mendalam",
        correctAnswerEn: "Teaching / Deep search for meaning",
        explanation: "Madrasha berkerabat dengan radas (mengkaji/belajar), melambangkan lagu edukatif penuh pengajaran.",
        explanationEn: "Madrasha is related to the root r-d-sh (to study/learn), denoting an educational song full of teaching."
      }
    ]
  },
  {
    id: 44,
    title: "Varian Dialek Serto, Estrangela & Madnhaya",
    titleEn: "Dialect Variants: Serto, Estrangela & Madnhaya",
    titleSyriac: "ܐܣܛܪܢܓܠܐ ܘܣܪܛܐ ܘܡܕܢܝܚܐ",
    category: "Level B1",
    summary: "Memahami perbedaan ortografi, aksara, dan fonologi tiga dialek besar Syriac.",
    summaryEn: "Understanding the differences in spelling, script, and phonology among the three great Syriac dialects.",
    introduction: "Bahasa Syriac mengkristal dalam tiga aksara besar seiring sejarah perkembangan teologinya.",
    introductionEn: "The Syriac language crystallized into three great scripts as its theology developed through history.",
    content: "Tiga Font/Gaya Penulisan:\n1. Estrangela (ܐܣܛܪܢܓܠܐ) : Gaya klasik tertua, formal, tebal, monumental.\n2. Serto (ܣܶܪܛܳܐ) : Gaya Barat (Antiokhia), kursif tipis, vokal Yunani kecil.\n3. Madnhaya (ܡܰܕ݂ܢܚܳܝܳܐ) : Gaya Timur (Persia/Assyria), tegap, vokal sistem titik ganda.",
    contentEn: "Three Writing Styles:\n1. Estrangela (ܐܣܛܪܢܓܠܐ): The oldest classical style — formal, thick, monumental.\n2. Serto (ܣܶܪܛܳܐ): The Western style (Antioch) — thin cursive, with small Greek vowels.\n3. Madnhaya (ܡܰܕ݂ܢܚܳܝܳܐ): The Eastern style (Persia/Assyria) — upright, with a double-dot vowel system.",
    keyRules: [
      "Pelafalan vokal Zqapha di Barat berbunyi 'o', sedangkan di Timur berbunyi 'a' panjang."
    ],
    keyRulesEn: [
      "The vowel Zqapha is pronounced 'o' in the West, while in the East it is pronounced as a long 'a'."
    ],
    vocabulary: [
      { syriac: "ܐܣܛܪܢܓܠܐ", translit: "Estrangela", meaning: "Gaya tulisan bulat klasik", meaningEn: "Classical round writing style", category: "Ortografi" },
      { syriac: "ܣܪܛܐ", translit: "Serto", meaning: "Gaya tulisan barat (linier/tipis)", meaningEn: "Western writing style (linear/thin)", category: "Ortografi" },
      { syriac: "ܡܕܢܚܝܐ", translit: "Madnhaya", meaning: "Gaya tulisan timur (terang/fajar)", meaningEn: "Eastern writing style (bright/dawn)", category: "Ortografi" }
    ],
    examples: [
      { syriac: "ܒܰܝܬܳܐ", translit: "Bayto", phonetic: "Baytō (Barat)", indonesian: "Rumah (Aksen Barat)", english: "House (Western accent)" },
      { syriac: "ܒܰܝܬ݁ܳܐ", translit: "Bayta", phonetic: "Baytā (Timur)", indonesian: "Rumah (Aksen Timur)", english: "House (Eastern accent)" }
    ],
    quizzes: [
      {
        id: 4401,
        question: "Gaya penulisan monumental tertua yang dipakai menyalin naskah Injil kuno adalah...",
        questionEn: "Which monumental writing style, the oldest, was used to copy ancient Gospel manuscripts?",
        options: ["Serto", "Estrangela (ܐܣܛܪܢܓܠܐ)", "Madnhaya", "Kufik"],
        optionsEn: ["Serto", "Estrangela (ܐܣܛܪܢܓܠܐ)", "Madnhaya", "Kufic"],
        correctAnswer: "Estrangela (ܐܣܛܪܢܓܠܐ)",
        correctAnswerEn: "Estrangela (ܐܣܛܪܢܓܠܐ)",
        explanation: "Estrangela melambangkan bentuk orisinil huruf cetak monumental bulat.",
        explanationEn: "Estrangela represents the original form of monumental round printed letters."
      },
      {
        id: 4402,
        question: "Dialek Barat (Serto) melafalkan tanda vokal Zqapha sebagai...",
        questionEn: "The Western dialect (Serto) pronounces the vowel sign Zqapha as...",
        options: ["Vokal 'a' pendek", "Vokal 'o' bulat", "Vokal 'i' renggang", "Vokal 'u' berat"],
        optionsEn: ["A short 'a' vowel", "A round 'o' vowel", "A lax 'i' vowel", "A heavy 'u' vowel"],
        correctAnswer: "Vokal 'o' bulat",
        correctAnswerEn: "A round 'o' vowel",
        explanation: "Di dialek Barat, Zqapha dibunyikan sebagai 'o' (misal: Shlomo).",
        explanationEn: "In the West, Zqapha is pronounced as 'o' (for example: Shlomo)."
      },
      {
        id: 4403,
        question: "Aksara 'Madnhaya' secara etimologis berati...",
        questionEn: "Etymologically, the script 'Madnhaya' means...",
        options: ["Bulat orisinil", "Garis lurus", "Timur / Terbitnya fajar", "Rahasia"],
        optionsEn: ["Original roundness", "Straight line", "East / The rising of dawn", "Secret"],
        correctAnswer: "Timur / Terbitnya fajar",
        correctAnswerEn: "East / The rising of dawn",
        explanation: "Madnhaya berasal dari akar d-n-h (terbit/fajar), mencirikan aliran Timur (Persia).",
        explanationEn: "Madnhaya comes from the root d-n-h (to rise/dawn), characterizing the Eastern (Persian) tradition."
      },
      {
        id: 4404,
        question: "Bagaimanakah bunyi kata 'Damai' (ܫܠܡܐ) dalam aksen Timur (Madnhaya)?",
        questionEn: "How does the word for 'Peace' (ܫܠܡܐ) sound in the Eastern (Madnhaya) accent?",
        options: ["Shlomo", "Shlama", "Shlomet", "Shlimu"],
        optionsEn: ["Shlomo", "Shlama", "Shlomet", "Shlimu"],
        correctAnswer: "Shlama",
        correctAnswerEn: "Shlama",
        explanation: "Timur mempertahankan bunyi vokal aseli Semitik A-panjang 'Shlama'.",
        explanationEn: "The East preserves the original Semitic long 'a' vowel sound, 'Shlama'."
      },
      {
        id: 4405,
        question: "Sistem penanda vokal Serto Barat diletakkan menggunakan simbol huruf...",
        questionEn: "The Western Serto vowel-marking system is placed using symbols based on the letters of...",
        options: ["Koptik kuno", "Yunani berukuran mini", "Ibrani kuno", "Fenisia"],
        optionsEn: ["Ancient Coptic", "Miniature Greek", "Ancient Hebrew", "Phoenician"],
        correctAnswer: "Yunani berukuran mini",
        correctAnswerEn: "Miniature Greek",
        explanation: "Serto menggunakan modifikasi huruf vokal Yunani mini sebagai indikator suara.",
        explanationEn: "Serto uses modified miniature Greek vowel letters as sound indicators."
      }
    ]
  },
  {
    id: 45,
    title: "Pola Pasif Intensif Ethpaal (Eth-pa-al)",
    titleEn: "The Intensive Passive Pattern Ethpaal (Eth-pa-al)",
    titleSyriac: "ܡܠܬܐ ܕܐܬ݁ܦ݁ܰܥܰܠ",
    category: "Level B1",
    summary: "Memahami struktur pembentukan konjugasi pasif intensif Ethpaal.",
    summaryEn: "Understanding the structure of the intensive passive Ethpaal conjugation.",
    introduction: "Keluarga verba kategorial Ethpaal melambangkan bentuk pasif reflektif dari pola aktif Pael (intensif).",
    introductionEn: "The Ethpaal verb family represents the passive-reflexive form of the active Pael (intensive) pattern.",
    content: "Dibentuk dengan menyematkan prefiks 'Eth-' (ܐܬ) dipadu dengan vokal ganda 'a' tebal di tengah verba.\nContoh perbandingan:\n- Shabbah (Pael): Memuji.\n- Ethshabbah (Ethpaal): Telah mulia / Dipuji berat.\n- Qaddesh (Pael): Menyucikan.\n- Ethqaddash (Ethpaal): Telah disucikan sepenuhnya.",
    contentEn: "It is formed by attaching the prefix 'Eth-' (ܐܬ) together with a thick double 'a' vowel in the middle of the verb.\nComparison examples:\n- Shabbah (Pael): To praise.\n- Ethshabbah (Ethpaal): Has been glorified / Has been greatly praised.\n- Qaddesh (Pael): To sanctify.\n- Ethqaddash (Ethpaal): Has been sanctified intensely.",
    keyRules: [
      "Ethpaal mempertahankan geminasi huruf kedua layaknya Pael aktif.",
      "Vokal tengah berubah menjadi Pthaha (a) tebal menggantikan Rbasa (e) milik Pael."
    ],
    keyRulesEn: [
      "Ethpaal keeps the doubling (gemination) of the second letter, just like the active Pael.",
      "The middle vowel changes to a thick Pthaha (a), replacing the Rbasa (e) of Pael."
    ],
    vocabulary: [
      { syriac: "ܐܬܫܒܚ", translit: "Ethshabbah", meaning: "Telah dimuliakan", meaningEn: "Has been glorified", category: "Verba Ethpaal" },
      { syriac: "ܐܬܩܕܫ", translit: "Ethqaddash", meaning: "Telah disucikan", meaningEn: "Has been sanctified", category: "Verba Ethpaal" },
      { syriac: "ܐܬܡܠܠ", translit: "Ethmallah", meaning: "Telah dibicarakan", meaningEn: "Has been spoken (about)", category: "Verba Ethpaal" }
    ],
    examples: [
      { syriac: "ܐܶܬ݂ܫܰܒ݁ܰܚ ܫܡܳܟ݂", translit: "Ethshabbah shmakh", phonetic: "Ethshabbaḥ shmokh", indonesian: "Telah dimuliakanlah nama-Mu", english: "Your name has been glorified" },
      { syriac: "ܐܶܬ݂ܩܰܕ݁ܰܫ ܗܰܝܟܠܳܐ", translit: "Ethqaddash haykla", phonetic: "Ethqaddash hayklō", indonesian: "Bait suci itu telah dikuduskan dengan agung", english: "The temple has been greatly sanctified" }
    ],
    quizzes: [
      {
        id: 4501,
        question: "Ethpaal adalah modifikasi pasif-reflektif khusus dari stem...",
        questionEn: "Ethpaal is the passive-reflexive modification of the stem...",
        options: ["Peal", "Pael (Intensif)", "Aphel", "Shaphel"],
        optionsEn: ["Peal", "Pael (Intensive)", "Aphel", "Shaphel"],
        correctAnswer: "Pael (Intensif)",
        correctAnswerEn: "Pael (Intensive)",
        explanation: "Ethpaal bersesuaian pasif langsung dengan perbuatan intensif Pael.",
        explanationEn: "Ethpaal is the direct passive counterpart of the intensive Pael action."
      },
      {
        id: 4502,
        question: "Perubahan vokal apakah yang dominan di akhir verba Ethpaal dibanding Pael?",
        questionEn: "Which vowel change dominates the end of an Ethpaal verb compared with Pael?",
        options: ["Vokal Hbasa (i)", "Vokal Pthaha (a) menggantikan Rbasa (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)", "Vokal Esasa (u)", "Vokal Zqapha"],
        optionsEn: ["The Hbasa vowel (i)", "The Pthaha vowel (a) replacing the Rbasa vowel (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)", "The Esasa vowel (u)", "The Zqapha vowel"],
        correctAnswer: "Vokal Pthaha (a) menggantikan Rbasa (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)",
        correctAnswerEn: "The Pthaha vowel (a) replacing the Rbasa vowel (e) (ܐܶܬ݂ܫܰܒ݁ܰܚ)",
        explanation: "Vokal tengah bergeser ke 'a' tebal (Pthaha) mencirikan struktur pasif intensif.",
        explanationEn: "The middle vowel shifts to a thick 'a' (Pthaha), characterizing the intensive passive structure."
      },
      {
        id: 4503,
        question: "Apakah makna dari kata 'ܐܶܬ݂ܫܰܒ݁ܰܚ' (Ethshabbah)?",
        questionEn: "What is the meaning of the word 'ܐܶܬ݂ܫܰܒ݁ܰܚ' (Ethshabbah)?",
        options: ["Telah memuji", "Telah dimuliakan / dipuji mulia", "Telah menulis", "Telah mendikte"],
        optionsEn: ["Has praised", "Has been glorified / greatly praised", "Has written", "Has dictated"],
        correctAnswer: "Telah dimuliakan / dipuji mulia",
        correctAnswerEn: "Has been glorified / greatly praised",
        explanation: "Berasal dari kata dasar Shabbah (memuji) pasif intensif.",
        explanationEn: "Derived from the root Shabbah (to praise), in the intensive passive."
      },
      {
        id: 4504,
        question: "Pola Ethpaal orisinil 3ms ditandai awalan huruf...",
        questionEn: "The original Ethpaal 3ms pattern is marked by the prefix...",
        options: ["ܐܬ- (Eth-)", "ܢ- (N-)", "ܡ- (M-)", "ܠ- (L-)"],
        optionsEn: ["ܐܬ- (Eth-)", "ܢ- (N-)", "ܡ- (M-)", "ܠ- (L-)"],
        correctAnswer: "ܐܬ- (Eth-)",
        correctAnswerEn: "ܐܬ- (Eth-)",
        explanation: "Sistem pasif melingkar konsisten diawali ligan Eth-. ",
        explanationEn: "The passive system is consistently introduced by the Eth- prefix."
      },
      {
        id: 4505,
        question: "Terjemahan 'Ethqaddash haykla' adalah...",
        questionEn: "The translation of 'Ethqaddash haykla' is...",
        options: ["Bait suci itu menguduskan", "Bait suci itu telah dikuduskan", "Rumah bapa besar", "Saya telah disucikan"],
        optionsEn: ["The temple sanctifies", "The temple has been sanctified", "A large father's house", "I have been sanctified"],
        correctAnswer: "Bait suci itu telah dikuduskan",
        correctAnswerEn: "The temple has been sanctified",
        explanation: "Ethqaddash = telah dikuduskan (pasif intensif), haykla = bait suci/kuil.",
        explanationEn: "Ethqaddash = has been sanctified (intensive passive), haykla = temple/sanctuary."
      }
    ]
  },
  {
    id: 46,
    title: "Idiom Teologis & Diplomasi Lanjut",
    titleEn: "Theological Idioms & Advanced Diplomacy",
    titleSyriac: "ܡܰܫܠܡܳܢܽܘܬ݂ܳܐ ܕ݁ܡܶܠܶܐ",
    category: "Level B1",
    summary: "Telaah ungkapan teologis luhur, diplomasi kuno, dan bahasa sastra tinggi.",
    summaryEn: "A study of lofty theological expressions, ancient diplomacy, and high literary language.",
    introduction: "Bahasa Syriac klasik sarat kiasan konseptual bercitarasa filsafat tinggi Semitik.",
    introductionEn: "Classical Syriac is rich in conceptual metaphors with the flavour of high Semitic philosophy.",
    content: "Ungkapan khas Semiotik Klasik:\n- Bar Nasha (Anak Manusia / Spesies Manusia).\n- Naphsha (Jiwa / Diri Sendiri).\n- Mshiha Alaha (Kristus Allah).\n- Razin / Roze (Misteri mendalam/Sakramen).",
    contentEn: "Typical expressions of classical Semitic thought:\n- Bar Nasha (Son of Man / The Human Species).\n- Naphsha (Soul / The Self).\n- Mshiha Alaha (Christ God).\n- Razin / Roze (Deep Mystery / Sacrament).",
    keyRules: [
      "Pemahaman idiomatis mencegah salah terjemahan harfiah dalam menterjemahkan sastra kuno."
    ],
    keyRulesEn: [
      "Understanding idioms prevents literal mistranslation when translating ancient literature."
    ],
    vocabulary: [
      { syriac: "ܪܐܙܐ", translit: "Raza / Rozo", meaning: "Misteri / Sakramen", meaningEn: "Mystery / Sacrament", category: "Idiom" },
      { syriac: "ܒܪܢܫܐ", translit: "Bar Nasha", meaning: "Anak Manusia / Manusia", meaningEn: "Son of Man / Human", category: "Idiom" },
      { syriac: "ܢܦܫܐ", translit: "Naphsho", meaning: "Jiwa / Diri sendiri", meaningEn: "Soul / The self", category: "Idiom" }
    ],
    examples: [
      { syriac: "ܪܳܐܙܳܐ ܪܰܒܳܐ ܗܽܘ", translit: "Raza rabo hu", phonetic: "Rozō Rabō hū", indonesian: "Ini adalah misteri/sakramen yang agung", english: "This is a great mystery/sacrament" },
      { syriac: "ܢܰܦ݂ܫܳܐ ܫܰܦ݁ܺܝܪܬ݁ܳܐ", translit: "Naphsha shapirtha", phonetic: "Naphshō shapīrtō", indonesian: "Jiwa yang indah", english: "A beautiful soul" }
    ],
    quizzes: [
      {
        id: 4601,
        question: "Kombinasi kata bermakna harfiah 'Anak Manusia' yang mewakili genus umat manusia adalah...",
        questionEn: "Which word combination literally means 'Son of Man' and represents the human race?",
        options: ["Bar Malka", "Bar Nasha (ܒܪܢܫܐ)", "Bar Alaha", "Bar Bayto"],
        optionsEn: ["Bar Malka", "Bar Nasha (ܒܪܢܫܐ)", "Bar Alaha", "Bar Bayto"],
        correctAnswer: "Bar Nasha (ܒܪܢܫܐ)",
        correctAnswerEn: "Bar Nasha (ܒܪܢܫܐ)",
        explanation: "Bar Nasha adalah idiom terkenal Semitik menyatakan 'Anak Adam/Manusia'.",
        explanationEn: "Bar Nasha is a famous Semitic idiom meaning 'Son of Adam/Man'."
      },
      {
        id: 4602,
        question: "Istilah 'Rozo' or 'Raza' (ܪܐܙܐ) dalam literatur tradisi keagamaan Syriac mengacu kepada...",
        questionEn: "In Syriac religious literature, the term 'Rozo' or 'Raza' (ܪܐܙܐ) refers to...",
        options: ["Hukum negara", "Misteri suci / Sakramen", "Makanan penutup", "Peta dunia"],
        optionsEn: ["State law", "Holy mystery / Sacrament", "Dessert", "World map"],
        correctAnswer: "Misteri suci / Sakramen",
        correctAnswerEn: "Holy mystery / Sacrament",
        explanation: "Raza / Rozo berarti rahasia, misteri kosmis, atau sakramen ritual suci.",
        explanationEn: "Raza / Rozo means a secret, a cosmic mystery, or a sacred ritual sacrament."
      },
      {
        id: 4603,
        question: "Kata 'Jiwa' atau 'Diri Sendiri' diekspresikan dengan kata...",
        questionEn: "The word for 'Soul' or 'The Self' is expressed by the word...",
        options: ["Malktha", "Naphsha (ܢܦܫܐ)", "Nura", "Mayya"],
        optionsEn: ["Malktha", "Naphsha (ܢܦܫܐ)", "Nura", "Mayya"],
        correctAnswer: "Naphsha (ܢܦܫܐ)",
        correctAnswerEn: "Naphsha (ܢܦܫܐ)",
        explanation: "Naphsha melambangkan nafas hidup, jiwa, atau esensi ego diri.",
        explanationEn: "Naphsha denotes the breath of life, the soul, or the essence of the self."
      },
      {
        id: 4604,
        question: "Apakah arti dari 'Raza rabo hu'?",
        questionEn: "What does 'Raza rabo hu' mean?",
        options: ["Raja telah pergi", "Ini adalah misteri/rahasia yang agung", "Airnya sangat jernih", "Rumah yang besar"],
        optionsEn: ["The king has gone", "This is a great mystery", "The water is very clear", "A large house"],
        correctAnswer: "Ini adalah misteri/rahasia yang agung",
        correctAnswerEn: "This is a great mystery",
        explanation: "Raza = misteri, rabo = agung/besar, hu = dia (is). Berarti 'Misteri agung hal ini'.",
        explanationEn: "Raza = mystery, rabo = great/large, hu = he (is). It means 'This is a great mystery'."
      },
      {
        id: 4605,
        question: "Bagaimanakah menyebut 'Anak Allah'?",
        questionEn: "How do you say 'Son of God'?",
        options: ["Bar Nasha", "Bar Alaha (ܒܪ ܐܠܗܐ)", "Aba Alaha", "Malka Alaha"],
        optionsEn: ["Bar Nasha", "Bar Alaha (ܒܪ ܐܠܗܐ)", "Aba Alaha", "Malka Alaha"],
        correctAnswer: "Bar Alaha (ܒܪ ܐܠܗܐ)",
        correctAnswerEn: "Bar Alaha (ܒܪ ܐܠܗܐ)",
        explanation: "Bar = anak l, Alaha = Allah. Berarti Anak Allah.",
        explanationEn: "Bar = son, Alaha = God. It means Son of God."
      }
    ]
  },
  {
    id: 47,
    title: "Bedah Terjemahan Naskah Peshitta Kuno",
    titleEn: "Analysing Translations of the Ancient Peshitta Text",
    titleSyriac: "ܟܬܳܒܳܐ ܩܰܕ݁ܺܝܫܳܐ ܕ݁ܫܰܠܚܶܐ",
    category: "Level B1",
    summary: "Mencerna secara komprehensif susunan kalimat dan kosa kata dari Alkitab Peshitta Aramaik.",
    summaryEn: "A comprehensive study of the sentence structure and vocabulary of the Aramaic Peshitta Bible.",
    introduction: "Peshitta (ܦܫܝܛܬܐ) artinya versi lugas/sederhana, menyajikan naskah sakral tertua bercitayasa tinggi.",
    introductionEn: "Peshitta (ܦܫܝܛܬܐ) means the plain/simple version, presenting the oldest sacred text in a highly refined style.",
    content: "Analisa Injil Yohanes 1:1:\n'B-reshith ithawhy wa meltha...' (Pada mulanya adalah Firman...):\n- b-Reshith: b- (Preposisi pada) + reshith (permulaan/kepala).\n- ithawhy wa: Penegasan eksistensi kala lampau (Adalah Dia).\n- meltha: Sang Firman / Sabda.",
    contentEn: "Analysis of John 1:1:\n'B-reshith ithawhy wa meltha...' (In the beginning was the Word...):\n- b-Reshith: b- (preposition 'in') + reshith (beginning/head).\n- ithawhy wa: An affirmation of existence in the past tense (He was).\n- meltha: The Word / The Saying.",
    keyRules: [
      "Membongkar teks Peshitta melatih kepekaan tata bahasa terhadap sastra abad ke-1 hingga ke-5 Masehi."
    ],
    keyRulesEn: [
      "Taking apart a Peshitta text trains grammatical sensitivity to the literature of the 1st to 5th centuries AD."
    ],
    vocabulary: [
      { syriac: "ܦܫܝܛܬܐ", translit: "Peshitta", meaning: "Sederhana / Versi Standar Peshitta", meaningEn: "Simple / The Standard Peshitta Version", category: "Sastra" },
      { syriac: "ܒܪܫܝܬ", translit: "b-Reshith", meaning: "Pada mulanya", meaningEn: "In the beginning", category: "Sastra" },
      { syriac: "ܡܠܬܐ", translit: "Meltha", meaning: "Firman / Sabda / Kata (Emphatic)", meaningEn: "Word / Saying / The Word (emphatic)", category: "Sastra" }
    ],
    examples: [
      { syriac: "ܒ݁ܪܺܫܺܝܬ݂ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ ܡܶܠܬ݂ܳܐ", translit: "B-reshith ithawhy wa meltha", phonetic: "B-rēshīt īthawhy wō melthō", indonesian: "Pada mulanya adalah Firman", english: "In the beginning was the Word" },
      { syriac: "ܡܶܠܬ݂ܳܐ ܓ݁ܶܝܪ ܐܰܠܳܗܳܐ ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ", translit: "Meltha ger Alaha ithawhy wa", phonetic: "Melthō gēr Alahō īthawhy wō", indonesian: "Firman itu adalah Allah", english: "The Word was God" }
    ],
    quizzes: [
      {
        id: 4701,
        question: "Apakah nama terjemahan standar Alkitab bahasa Syriac yang legendaris?",
        questionEn: "What is the name of the legendary standard Syriac Bible translation?",
        options: ["Septuaginta", "Vulgata", "Peshitta (ܦܫܝܛܬܐ)", "Targum"],
        optionsEn: ["Septuagint", "Vulgate", "Peshitta (ܦܫܝܛܬܐ)", "Targum"],
        correctAnswer: "Peshitta (ܦܫܝܛܬܐ)",
        correctAnswerEn: "Peshitta (ܦܫܝܛܬܐ)",
        explanation: "Peshitta (makna harafiah: jujur/bebas/lugas) adalah Alkitab otoritas tradisi Syriac.",
        explanationEn: "Peshitta (literally: honest/free/plain) is the authoritative Bible of the Syriac tradition."
      },
      {
        id: 4702,
        question: "Penggapuran kata 'ܒ݁ܪܺܫܺܝܬ݂' (B-reshith) memiliki padanan bahasa Indonesia...",
        questionEn: "The word 'ܒ݁ܪܺܫܺܝܬ݂' (B-reshith) means...",
        options: ["Milik kami", "Pada mulanya", "Di akhir hayat", "Hari esok"],
        optionsEn: ["Ours", "In the beginning", "At the end of life", "Tomorrow"],
        correctAnswer: "Pada mulanya",
        correctAnswerEn: "In the beginning",
        explanation: "B- (pada) + resh (kepala/awal) + ith (akhiran nominatif) = pada mulanya.",
        explanationEn: "B- (in) + resh (head/beginning) + ith (nominative ending) = in the beginning."
      },
      {
        id: 4703,
        question: "Makna kata penunjuk 'Meltha' (ܡܶܠܬ݂ܳα) dalam Yohanes 1:1 merepresentasikan...",
        questionEn: "What does the word 'Meltha' (ܡܶܠܬ݂ܳα) mean in John 1:1?",
        options: ["Sang Firman / Sang Sabda", "Anak Daud", "Air bah", "Kota suci"],
        optionsEn: ["The Word / The Saying", "Son of David", "The flood", "The holy city"],
        correctAnswer: "Sang Firman / Sang Sabda",
        correctAnswerEn: "The Word / The Saying",
        explanation: "Meltha (feminin dari maltha) melambangkan 'kata' atau 'Firman' (ekivalen Logos).",
        explanationEn: "Meltha (the feminine of maltha) denotes 'word' or 'the Word' (the equivalent of Logos)."
      },
      {
        id: 4704,
        question: "Apakah arti kata 'Ger' (ܓ݁ܶܝܪ) yang sering ditemui di sela-sela kalimat Peshitta?",
        questionEn: "What does the word 'Ger' (ܓ݁ܶܝܪ), often found in the middle of Peshitta sentences, mean?",
        options: [" Tidak ada", "Sesungguhnya / Sebab / Karena", "Pergi", "Besok"],
        optionsEn: ["None", "Truly / Because / For", "Go", "Tomorrow"],
        correctAnswer: "Sesungguhnya / Sebab / Karena",
        correctAnswerEn: "Truly / Because / For",
        explanation: "Ger adalah partikel post-positif mengindikasikan kelanjutan sebab ('sebab/sesungguhnya').",
        explanationEn: "Ger is a post-positive particle indicating a causal continuation ('because/truly')."
      },
      {
        id: 4705,
        question: "Ungkapan harafiah 'ithawhy wa' (ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ) setara dengan kopula Inggris...",
        questionEn: "The literal expression 'ithawhy wa' (ܐܺܝܬ݂ܰܘܗ݂ܝ ܗܘܳܐ) is equivalent to the English copula...",
        options: ["Is", "Was (Kala Lampau)", "Will be", "Are"],
        optionsEn: ["Is", "Was (Past Tense)", "Will be", "Are"],
        correctAnswer: "Was (Kala Lampau)",
        correctAnswerEn: "Was (Past Tense)",
        explanation: "Ithawhy + wa melambangkan kopula keadaan masa lampau ('was/telah adalah').",
        explanationEn: "Ithawhy + wa represents the past-tense copula of state ('was')."
      }
    ]
  },
  {
    id: 48,
    title: "Pembentukan Kausatif Pasif Ettaphal",
    titleEn: "The Passive Causative Formation Ettaphal",
    titleSyriac: "ܡܠܬܐ ܕܐܬ݁ܬ݁ܰܦ݂ܥܰܠ",
    category: "Level B1",
    summary: "Memahami struktur terdalam verba kausatif pasif Ettaphal.",
    summaryEn: "Understanding the deepest structure of the passive causative Ettaphal verb.",
    introduction: "System verba terakhir yang dikaji di B1 adalah Ettaphal, bentuk pasif reflektif dari stem kausatif Aphel.",
    introductionEn: "The last verb system studied in B1 is Ettaphal, the passive-reflexive form of the causative Aphel stem.",
    content: "Dibentuk dengan melampirkan prefiks 'Ett-' (ܐܬܬ - dua huruf Taw dengan daddan geminasi tebal).\nContoh perbandingan:\n- Anhar (Aphel): Telah menerangi.\n- Ettanhar (Ettaphal): Telah diterangi / Telah dibuat bersinar terang-benderang.",
    contentEn: "It is formed by attaching the prefix 'Ett-' (ܐܬܬ — two Taw letters with thick gemination).\nComparison example:\n- Anhar (Aphel): Has enlightened.\n- Ettanhar (Ettaphal): Has been enlightened / Has been made to shine brightly.",
    keyRules: [
      "Dua huruf Taw berjejer 'ܐܬܬ' mengidentifikasi status mutlak keluarga verba pasif tingkat kausatif tertinggi."
    ],
    keyRulesEn: [
      "Two Taw letters side by side, 'ܐܬܬ', identify the absolute status of the passive verb family at the highest causative level."
    ],
    vocabulary: [
      { syriac: "ܐܬܬܢܗܪ", translit: "Ettanhar", meaning: "Telah diterangi (Kausatif Pasif)", meaningEn: "Has been enlightened (Passive Causative)", category: "Ettaphal" },
      { syriac: "ܐܬܬܩܝܡ", translit: "Ettaqam", meaning: "Telah didirikan / Dibangkitkan pasif", meaningEn: "Has been raised up / Established (passive)", category: "Ettaphal" },
      { syriac: "ܐܬܬܣܝܡ", translit: "Ettasam", meaning: "Telah diletakkan / Ditetapkan", meaningEn: "Has been placed / Appointed", category: "Ettaphal" }
    ],
    examples: [
      { syriac: "ܐܶܬ݁ܬ݁ܰܢܗܰܪܘ ܒ݁ܢܽܘܗܪܳܐ", translit: "Ettanharu b-nuhra", phonetic: "Ettanharū b-nūhrō", indonesian: "Mereka telah dibuat diterangi oleh cahaya itu", english: "They have been made enlightened by that light" },
      { syriac: "ܐܶܬ݁ܬ݁ܰܩܺܝܡ ܟܽܘܪܣܝܳܐ", translit: "Ettaqim kursya", phonetic: "Ettaqīm kursyō", indonesian: "Takhta itu telah didirikan", english: "The throne has been established" }
    ],
    quizzes: [
      {
        id: 4801,
        question: "Ettaphal adalah sistem pasif refleksif langsung dari kata kerja tingkat...",
        questionEn: "Ettaphal is the direct passive-reflexive system of the ... level verb",
        options: ["Peal", "Pael", "Aphel (Kausatif Aktif)", "Shaphel"],
        optionsEn: ["Peal", "Pael", "Aphel (Active Causative)", "Shaphel"],
        correctAnswer: "Aphel (Kausatif Aktif)",
        correctAnswerEn: "Aphel (Active Causative)",
        explanation: "Ettaphal menyajikan asimtot pasif dari perbuatan kausatif Aphel.",
        explanationEn: "Ettaphal presents the passive counterpart of the causative Aphel action."
      },
      {
        id: 4802,
        question: "Apakah tanda ortografis visual mutlak permulaan kata kerja Ettaphal?",
        questionEn: "What is the absolute visual spelling mark at the start of an Ettaphal verb?",
        options: ["Double Taw 'ܐܬܬ' (Ett-)", "Nun", "Mim tunggal", "Waw"],
        optionsEn: ["Double Taw 'ܐܬܬ' (Ett-)", "Nun", "A single Mim", "Waw"],
        correctAnswer: "Double Taw 'ܐܬܬ' (Ett-)",
        correctAnswerEn: "Double Taw 'ܐܬܬ' (Ett-)",
        explanation: "Dua huruf Taw berdampingan melambangkan ciri khas asimilasi ganda Ettaphal.",
        explanationEn: "Two Taw letters side by side mark the distinctive double assimilation of Ettaphal."
      },
      {
        id: 4803,
        question: "Makna kata 'ܐܶܬ݁ܬ݁ܰܢܗܰܪ' (Ettanhar) adalah...",
        questionEn: "What is the meaning of the word 'ܐܶܬ݁ܬ݁ܰܢܗܰܪ' (Ettanhar)?",
        options: ["Menulis kembali", "Telah dibuat diterangi / bersinar", "Tolak", "Mengasihi diri"],
        optionsEn: ["To write again", "Has been made enlightened / to shine", "To refuse", "To love oneself"],
        correctAnswer: "Telah dibuat diterangi / bersinar",
        correctAnswerEn: "Has been made enlightened / to shine",
        explanation: "Pasif kausatif dari menerangi (anhar) yaitu dijadikan diterangi.",
        explanationEn: "The passive causative of 'to enlighten' (anhar) — to be made enlightened."
      },
      {
        id: 4804,
        question: "Bentuk plural 3mp 'Ettanharu' ditandai penambahan huruf belakang...",
        questionEn: "The plural 3mp form 'Ettanharu' is marked by adding a letter at the end...",
        options: ["Yodh", "Waw (ܘ)", "Nun", "Alap"],
        optionsEn: ["Yodh", "Waw (ܘ)", "Nun", "Alap"],
        correctAnswer: "Waw (ܘ)",
        correctAnswerEn: "Waw (ܘ)",
        explanation: "Huruf Waw (u) di akhir kata kerja mengekspresikan pelaku jamak maskulin lampau pasif.",
        explanationEn: "The letter Waw (u) at the end of the verb expresses a masculine plural past passive subject."
      },
      {
        id: 4805,
        question: "Apakah arti dari kata 'Kursya' (ܟܽܘܪܣܝܳܐ)?",
        questionEn: "What does the word 'Kursya' (ܟܽܘܪܣܝܳܐ) mean?",
        options: ["Peta", "Takhta / Kursi kekuasaan", "Meja makan", "Bara api"],
        optionsEn: ["Map", "Throne / Seat of power", "Dining table", "Burning ember"],
        correctAnswer: "Takhta / Kursi kekuasaan",
        correctAnswerEn: "Throne / Seat of power",
        explanation: "Kursya berarti kursi kehormatan kemegahan raja (takhta), sepadan bahasa Arab 'Kursi'.",
        explanationEn: "Kursya means the honoured seat of a king's majesty (throne), a word shared with Arabic for a seat of honour."
      }
    ]
  },
  {
    id: 49,
    title: "Struktur Kalimat Kondisional Kompleks Bertingkat",
    titleEn: "Complex Multi-Level Conditional Sentence Structure",
    titleSyriac: "ܐܣܳܪ̈ܶܐ ܕܰܬ݂ܢܳܝܳܐ ܩܫܝܳܐ",
    category: "Level B1",
    summary: "Memasangkan anak kalimat pengandaian kontrafaktual (andai saja seandainya).",
    summaryEn: "Pairing counterfactual conditional clauses (if only / had it been so).",
    introduction: "Mempelajari pengandaian yang tak terwujud (kontrafaktual) menggunakan partikel 'Hwa' dan 'En-la'.",
    introductionEn: "Learning unreal (counterfactual) conditionals using the particles 'Hwa' and 'En-la'.",
    content: "Di dalam bahasa Aram, pengandaian fakta bertingkat dibentuk dari susunan 'Illu... wa hwa...' (Andai saja... maka pastilah telah...).\nContoh: Illu hwayton harka, la mit hwa ahy (Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati).\nIllu (ܐܠܘ) melambangkan andai seandainya kontrafaktual.",
    contentEn: "In Aramaic, layered counterfactual conditionals are formed with the construction 'Illu... wa hwa...' (If only... then surely it would have...).\nExample: Illu hwayton harka, la mit hwa ahy (If only you had been here, my brother would not have died).\nIllu (ܐܠܘ) denotes a counterfactual 'if only'.",
    keyRules: [
      "Partikel penegas 'Hwa' (ܗܘܐ) wajib mengiringi klausa akibat untuk menciptakan mood pengandaian masa lalu lampau."
    ],
    keyRulesEn: [
      "The reinforcing particle 'Hwa' (ܗܘܐ) must accompany the result clause to create the past counterfactual mood."
    ],
    vocabulary: [
      { syriac: "ܐܠܘ", translit: "Illu", meaning: "Andai saja seandainya (kontrafaktual)", meaningEn: "If only (counterfactual)", category: "Kondisional" },
      { syriac: "ܗܘܐ", translit: "Hwa", meaning: "Telah / Berada (Partikel penegas modalitas)", meaningEn: "Has been / Was (modal reinforcing particle)", category: "Kondisional" },
      { syriac: "ܐܠܘܠܐ", translit: "Illula", meaning: "Andai saja jika tidak", meaningEn: "If only if not", category: "Kondisional" }
    ],
    examples: [
      { syriac: "ܐܶܠܽܘ ܗܘܰܝܬܽܘܢ ܗܳܪܟܳܐ", translit: "Illu hwayton harka", phonetic: "Illū hwayton harkō", indonesian: "Seandainya saja kalian ada di sini", english: "If only you had been here" },
      { syriac: "ܠܳܐ ܡܺܝܬ݂ ܗܘܳܐ ܐܰܚܝ", translit: "la mit hwa ahy", phonetic: "lō mīt wō aḥy", indonesian: "niscaya saudaraku tidak akan mati", english: "my brother would surely not have died" }
    ],
    quizzes: [
      {
        id: 4901,
        question: "Partikel kondisional kontrafaktual 'Seandainya saja (faktanya tidak terjadi)' diwakili oleh...",
        questionEn: "Which particle represents the counterfactual conditional 'If only (though in fact it did not happen)'?",
        options: ["En", "Illu (ܐܠܘ)", "Ela", "Kad"],
        optionsEn: ["En", "Illu (ܐܠܘ)", "Ela", "Kad"],
        correctAnswer: "Illu (ܐܠܘ)",
        correctAnswerEn: "Illu (ܐܠܘ)",
        explanation: "Illu melambangkan pengandaian imajiner di masa lalu.",
        explanationEn: "Illu denotes an imagined conditional in the past."
      },
      {
        id: 4902,
        question: "Partikel pelengkap apakah yang wajib mengiringi verba klausa akibat pada kalimat kondisional kontrafaktual?",
        questionEn: "Which accompanying particle must follow the verb of the result clause in a counterfactual conditional sentence?",
        options: ["Hwa (ܗܘܐ)", "Mayya", "Malka", "Ger"],
        optionsEn: ["Hwa (ܗܘܐ)", "Mayya", "Malka", "Ger"],
        correctAnswer: "Hwa (ܗܘܐ)",
        correctAnswerEn: "Hwa (ܗܘܐ)",
        explanation: "Hwa bertindak sebagai auxiliary penjelas status imajiner/past modal.",
        explanationEn: "Hwa acts as an auxiliary clarifying the imagined/past modal status."
      },
      {
        id: 4903,
        question: "Terjemahan dari 'Illu hwayton harka, la mit hwa ahy' menceritakan...",
        questionEn: "The translation of 'Illu hwayton harka, la mit hwa ahy' tells us...",
        options: ["Saudaraku pergi menemui kalian kemarin", "Mengapa kalian membiarkan saudaraku mati", "Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati", "Kami di sini bersama saudaramu yang sakit"],
        optionsEn: ["My brother went to meet you yesterday", "Why did you let my brother die", "If only you had been here, my brother would not have died", "We are here with your sick brother"],
        correctAnswer: "Seandainya saja kalian ada di sini, niscaya saudaraku tidak akan mati",
        correctAnswerEn: "If only you had been here, my brother would not have died",
        explanation: "Struktur kontrafaktual meletakkan Illu (seandainya) + hwayton harka (kalian di sini) + la mit hwa ahy (saudaraku tidak mati).",
        explanationEn: "The counterfactual structure places Illu (if only) + hwayton harka (you were here) + la mit hwa ahy (my brother did not die)."
      },
      {
        id: 4904,
        question: "Apakah lawan kata dari 'Ahy' (Saudaraku laki-laki)?",
        questionEn: "What is the opposite of 'Ahy' (my brother)?",
        options: ["Hathy (ܚܳܬ݂ܝ - Saudara perempuanku)", "Aba", "Ema", "Maltha"],
        optionsEn: ["Hathy (ܚܳܬ݂ܝ - My sister)", "Aba", "Ema", "Maltha"],
        correctAnswer: "Hathy (ܚܳܬ݂ܝ - Saudara perempuanku)",
        correctAnswerEn: "Hathy (ܚܳܬ݂ܝ - My sister)",
        explanation: "Hathy (saudaraku perempuan) adalah keselarasan gender dari Aha/Ahy.",
        explanationEn: "Hathy (my sister) is the feminine counterpart of Aha/Ahy."
      },
      {
        id: 4905,
        question: "Apakah arti dari 'Illula'?",
        questionEn: "What does 'Illula' mean?",
        options: ["Bila saja", "Hanya jika", "Seandainya saja jika tidak", "Bagaimana bisa"],
        optionsEn: ["If only", "Only if", "If only if not", "How could it be"],
        correctAnswer: "Seandainya saja jika tidak",
        correctAnswerEn: "If only if not",
        explanation: "Illu (seandainya) + la (tidak) = andai saja jika tidak.",
        explanationEn: "Illu (if only) + la (not) = if only it were not so."
      }
    ]
  },
  {
    id: 50,
    title: "Puncak Kompetensi Sastra & Tradisi Akademis Aram",
    titleEn: "The Peak of Aramaic Literary & Academic Tradition",
    titleSyriac: "ܫܽܘܠܳܡܳܐ ܘܣܳܗܕܽܘܬ݂ܳܐ ܕ݁ܩܶܢܝܳܢܳܐ",
    category: "Level B1",
    summary: "Refleksi komprehensif seluruh materi kursus dan ujian akhir akreditasi luhur.",
    summaryEn: "A comprehensive reflection on the entire course and the final examination for the highest accreditation.",
    introduction: "Modul ke-50 ini merangkum perjalan akademis murni dari gerbang aksara dasar A1 hingga sintaksis sastra bertingkat B1.",
    introductionEn: "This 50th module summarizes the pure academic journey from the gateway of the basic A1 alphabet to the layered literary syntax of B1.",
    content: "Selamat! Anda telah purna membaca, mengurai, menyusun, dan menjawab tantangan teologi, budaya, bilangan, serta konjugasi 6 silsilah verba utama: Peal, Ethpeel, Pael, Ethpaal, Aphel, dan Ettaphal. Pelestarian sastra peninggalan luhur ini kini bersemayam di dalam pemahaman batin akademis Anda. Anda berhak memegang sertifikasi kelulusan agung Arami Academy.",
    contentEn: "Congratulations! You have finished reading, analysing, composing, and answering challenges in theology, culture, numbers, and the conjugation of the 6 main verb families: Peal, Ethpeel, Pael, Ethpaal, Aphel, and Ettaphal. The preservation of this noble literary heritage now lives in your inner academic understanding. You are entitled to hold the great graduation certification of the Arami Academy.",
    keyRules: [
      "Kelulusan nilai di atas minimal passing score 70% diujikan mutlak demi merawat tradisi ilmiah yang kredibel."
    ],
    keyRulesEn: [
      "A passing score above the minimum of 70% is strictly required to uphold a credible scholarly tradition."
    ],
    vocabulary: [
      { syriac: "ܫܘܠܡܐ", translit: "Shulama", meaning: "Puncak / Penyelesaian / Kesempurnaan", meaningEn: "Peak / Completion / Perfection", category: "Wisuda" },
      { syriac: "ܣܗܕܘܬܐ", translit: "Sahdutha", meaning: "Kesaksian / Sertifikasi / Pengakuan", meaningEn: "Testimony / Certification / Recognition", category: "Wisuda" },
      { syriac: "ܩܢܝܢܐ", translit: "Qnyana", meaning: "Kepemilikan ilmu / Pencapaian", meaningEn: "Possession of knowledge / Achievement", category: "Wisuda" }
    ],
    examples: [
      { syriac: "ܫܽܘܠܳܡܳܐ ܫܰܦ݁ܺܝܪܳܐ ܕ݁ܩܶܢܝܳܢܳܐ", translit: "Shulama shapira d-qnyana", phonetic: "Shulomō shapīrō d-qnyonō", indonesian: "Pencapaian akhir studi yang indah", english: "A beautiful final achievement of study" },
      { syriac: "ܣܳܗܕܽܘܬ݂ܳܐ ܕ݁ܫܽܘܠܳܡܳܐ", translit: "Sahdutha d-shulama", phonetic: "Sahdūthō d-shūlomō", indonesian: "Sertifikasi kelulusan penyelesaian kuliah", english: "Graduation certification of completion" }
    ],
    quizzes: [
      {
        id: 5001,
        question: "Apakah makna dari kata wisuda kelulusan 'ܫܽܘܠܳܡܳܐ' (Shulama)?",
        questionEn: "What does the graduation word 'ܫܽܘܠܳܡܳܐ' (Shulama) mean?",
        options: ["Permulaan", "Puncak / Penyelesaian / Kesempurnaan", "Musibah", "Kemunduran"],
        optionsEn: ["Beginning", "Peak / Completion / Perfection", "Disaster", "Decline"],
        correctAnswer: "Puncak / Penyelesaian / Kesempurnaan",
        correctAnswerEn: "Peak / Completion / Perfection",
        explanation: "Shulama / Shulomo berarti penyelesaian akhir atau pelunasan puncak kesuksesan studi.",
        explanationEn: "Shulama / Shulomo means the final completion or the crowning fulfilment of successful study."
      },
      {
        id: 5002,
        question: "Kata 'ܣܳܗܕܽܘܬ݂ܳܐ' (Sahdutha) mengekspresikan arti...",
        questionEn: "The word 'ܣܳܗܕܽܘܬ݂ܳܐ' (Sahdutha) expresses the meaning...",
        options: ["Harta karun", "Kesaksian / Bukti otentik / Sertifikasi", "Kesedihan", "Penjara"],
        optionsEn: ["Treasure", "Testimony / Authentic evidence / Certification", "Sadness", "Prison"],
        correctAnswer: "Kesaksian / Bukti otentik / Sertifikasi",
        correctAnswerEn: "Testimony / Authentic evidence / Certification",
        explanation: "Sahdutha melambangkan sertifikat, pembuktian tuntas, atau piagam kesaksian lulus ujian.",
        explanationEn: "Sahdutha denotes a certificate, complete proof, or a graduation testimonial."
      },
      {
        id: 5003,
        question: "Kemampuan menguraikan kalimat naskah Peshitta orisinil mengimplikasikan penguasaan...",
        questionEn: "The ability to analyse an original Peshitta sentence implies mastery of...",
        options: ["Hanya kosakata", "Pemahaman gramatikal, sintaksis berlapis, dan kosa kata terpadu", "Kecepatan berlari", "Metode menulis angka belasan saja"],
        optionsEn: ["Vocabulary only", "Integrated grammatical understanding, layered syntax, and vocabulary", "Running speed", "Only the method of writing teen numbers"],
        correctAnswer: "Pemahaman gramatikal, sintaksis berlapis, dan kosa kata terpadu",
        correctAnswerEn: "Integrated grammatical understanding, layered syntax, and vocabulary",
        explanation: "Membaca teks orisinil Peshitta membutuhkan keterkaitan seluruh materi A1 hingga B1.",
        explanationEn: "Reading an original Peshitta text requires connecting everything from A1 to B1."
      },
      {
        id: 4804,
        question: "Berapakah jumlah total modul wajib yang berhasil Anda tuntaskan dari awal dalam kursus ini?",
        questionEn: "How many required modules have you completed from the start of this course?",
        options: ["10 modul", "20 modul", "30 modul", "50 modul"],
        optionsEn: ["10 modules", "20 modules", "30 modules", "50 modules"],
        correctAnswer: "50 modul",
        correctAnswerEn: "50 modules",
        explanation: "Anda telah meniti dari Modul 1 hingga mencapai garis finish di Modul 50 secara legasi.",
        explanationEn: "You have walked from Module 1 to the finish line at Module 50."
      },
      {
        id: 4805,
        question: "Berapakah nilai presentase minimal kelulusan (passing score) ujian kelayakan sertifikat kelulusan di Arami Academy?",
        questionEn: "What is the minimum passing score (percentage) for the graduation certificate examination at the Arami Academy?",
        options: ["50%", "60%", "70%", "90%"],
        optionsEn: ["50%", "60%", "70%", "90%"],
        correctAnswer: "70%",
        correctAnswerEn: "70%",
        explanation: "Sesuai regulasi ketat dewan pengajar, hak cetak sertifikat diperoleh bila skor evaluasi Anda minimal mencapai 70%.",
        explanationEn: "According to the strict regulations of the teaching council, the right to print a certificate is earned when your evaluation score reaches at least 70%."
      }
    ]
  }
];
