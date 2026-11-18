export interface LevelExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of option
  explanation: string;
  // Optional English versions (bilingual support; same field names as QuizQuestion)
  questionEn?: string;
  optionsEn?: string[];
  correctAnswerEn?: string;
  explanationEn?: string;
}

export const LEVEL_EXAMS: Record<"A1" | "A2" | "B1", LevelExamQuestion[]> = {
  A1: [
    {
      question: "Apa arti dari sapaan damai murni 'ܫܠܳܡܳܐ' (Shlama / Shlomo) dalam bahasa Arami Barat?",
      options: [
        "Damai Sejahtera / Halo",
        "Sampai jumpa lagi",
        "Terima kasih banyak",
        "Selamat pagi dan sore"
      ],
      correctAnswer: 0,
      explanation: "Shlama atau Shlomo adalah kata benda Semitik yang bermakna 'damai sejahtera'. Ini digunakan sebagai salam pembuka utama dalam rumpun bahasa Arami.",
      questionEn: "What does the pure greeting of peace 'ܫܠܳܡܳܐ' (Shlama / Shlomo) mean in Western Aramaic?",
      optionsEn: [
        "Peace / Hello",
        "See you again",
        "Thank you very much",
        "Good morning and afternoon",
      ],
      correctAnswerEn: "Peace / Hello",
      explanationEn: "Shlama or Shlomo is a Semitic noun meaning 'peace'. It is used as the main opening greeting in the Aramaic language family."
    },
    {
      question: "Huruf pertama abjad Syriac 'ܐ' (Alap) menempati posisi urutan ke-berapa dan melambangkan gematria bernilai berapa?",
      options: [
        "Pertama, bernilai 1",
        "Kedua, bernilai 2",
        "Tengah, bernilai 10",
        "Terakhir, bernilai 22"
      ],
      correctAnswer: 0,
      explanation: "Abjad Arami diawali dengan huruf Alap (ܐ) yang melambangkan urutan ke-1 serta memiliki nilai gematria murni 1.",
      questionEn: "What position does the first letter of the Syriac alphabet, 'ܐ' (Alap), occupy, and what gematria value does it represent?",
      optionsEn: [
        "First, worth 1",
        "Second, worth 2",
        "Middle, worth 10",
        "Last, worth 22",
      ],
      correctAnswerEn: "First, worth 1",
      explanationEn: "The Aramaic alphabet begins with the letter Alap (ܐ), which stands in position 1 and has a pure gematria value of 1."
    },
    {
      question: "Pronomina terpisah (Independent Pronoun) untuk orang pertama tunggal 'saya' dalam varian Serto Barat dilafalkan...",
      options: [
        "ܐܶܢܳܐ (Eno)",
        "ܐܰܢ݁ܬ݁ (At)",
        "ܗܽܘ (Hu)",
        "ܗܺܝ (Hi)"
      ],
      correctAnswer: 0,
      explanation: "Dalam dialek Barat (Serto), pronomina orang pertama tunggal 'saya' ditulis ܐܶܢܳܐ dan dibaca 'Eno' (versi Timur: 'Ana').",
      questionEn: "How is the independent (separate) pronoun for the first person singular, 'I', pronounced in the Western Serto variant?",
      optionsEn: [
        "ܐܶܢܳܐ (Eno)",
        "ܐܰܢ݁ܬ݁ (At)",
        "ܗܽܘ (Hu)",
        "ܗܺܝ (Hi)",
      ],
      correctAnswerEn: "ܐܶܢܳܐ (Eno)",
      explanationEn: "In the Western (Serto) dialect, the first person singular pronoun 'I' is written ܐܶܢܳܐ and read 'Eno' (in the Eastern version: 'Ana')."
    },
    {
      question: "Dalam tata bahasa Arami Syriac, penanda keadaan definit/emfatis untuk nomina tunggal umumnya ditandai dengan sufiks...",
      options: [
        "Akhiran Huruf Alap panjang (ـܳܐ / -o / -a)",
        "Akhiran Huruf Nun (ـܢ / -n)",
        "Awalan Huruf Kaph (ܟـ / k-)",
        "Sifir Kosong tanpa vokal"
      ],
      correctAnswer: 0,
      explanation: "Keadaan emfatis (Emphatic State) yang bersifat definit dibentuk dengan menambahkan huruf Alap dengan vokal panjang di akhir kata benda maskulin tunggal.",
      questionEn: "In Syriac Aramaic grammar, the marker of the definite/emphatic state for a singular noun is generally indicated by the suffix...",
      optionsEn: [
        "A long Alap ending (ـܳܐ / -o / -a)",
        "A Nun ending (ـܢ / -n)",
        "A Kaph prefix (ܟـ / k-)",
        "A zero without a vowel",
      ],
      correctAnswerEn: "A long Alap ending (ـܳܐ / -o / -a)",
      explanationEn: "The emphatic state, which is definite in nature, is formed by adding the letter Alap with a long vowel at the end of a singular masculine noun."
    },
    {
      question: "Manakah makna teologis murni yang diwakili oleh nomina 'ܐܰܠܳܗܳܐ' (Alaha)?",
      options: [
        "Tuhan / Allah",
        "Seorang Utusan",
        "Malaikat Surgawi",
        "Penciptaan Alam"
      ],
      correctAnswer: 0,
      explanation: "Alaha berarti Tuhan atau Allah dalam bahasa Arami Klasik, berkerabat dengan El (Ibrani) atau Ilah (Arab).",
      questionEn: "Which pure theological meaning is represented by the noun 'ܐܰܠܳܗܳܐ' (Alaha)?",
      optionsEn: [
        "God / Allah",
        "A Messenger",
        "A Heavenly Angel",
        "The Creation of Nature",
      ],
      correctAnswerEn: "God / Allah",
      explanationEn: "Alaha means God or Allah in Classical Aramaic, related to El (Hebrew) or Ilah (Arabic)."
    },
    {
      question: "Partikel preposisi 'ܒ݁' (b-) yang dirangkaikan langsung di depan kata benda memiliki arti dasar...",
      options: [
        "Di dalam / Dengan / Pada",
        "Dari arah / Sejak",
        "Bagaikan / Seperti",
        "Hanya bagi / Kepada"
      ],
      correctAnswer: 0,
      explanation: "Inseperable preposition 'b-' (ܒ݁) berarti 'di dalam' (in), 'dengan' (with), atau 'pada' (at).",
      questionEn: "The prepositional particle 'ܒ݁' (b-) attached directly before a noun has the basic meaning...",
      optionsEn: [
        "In / With / At",
        "From / Since",
        "Like / As",
        "Only for / To",
      ],
      correctAnswerEn: "In / With / At",
      explanationEn: "The inseparable preposition 'b-' (ܒ݁) means 'in', 'with', or 'at'."
    },
    {
      question: "Gematria angka atau bilangan utama Arami murni 'ܬܠܳܬ݂ܳܐ' (Tlatha) mewakili jumlah...",
      options: [
        "Tiga",
        "Satu",
        "Dua",
        "Empat"
      ],
      correctAnswer: 0,
      explanation: "Tlatha (ܬܠܳܬ݂ܳܐ) adalah kata bilangan maskulin Semitik murni untuk angka 3.",
      questionEn: "What number does the pure main Aramaic numeral 'ܬܠܳܬ݂ܳܐ' (Tlatha) represent?",
      optionsEn: [
        "Three",
        "One",
        "Two",
        "Four",
      ],
      correctAnswerEn: "Three",
      explanationEn: "Tlatha (ܬܠܳܬ݂ܳܐ) is the pure Semitic masculine number word for 3."
    },
    {
      question: "Dalam Doa Bapa Kami 'ܐܰܒ݂ܽܘܢ ܕ݁ܒ݂ܰܫܡܰܝܳܐ' (Abun d-bashmayya), kata benda 'ܫܡܰܝܳܐ' (shmayya / shmoyo) memiliki arti...",
      options: [
        "Surga / Langit",
        "Nama Kudus",
        "Kerajaan Damai",
        "Kehendak Mulia"
      ],
      correctAnswer: 0,
      explanation: "Shmayya (atau Shmoyo) adalah nomina jamak bermakna 'langit' atau 'surga' tempat kediaman Bapa Surgawi.",
      questionEn: "In the Lord's Prayer 'ܐܰܒ݂ܽܘܢ ܕ݁ܒ݂ܰܫܡܰܝܳܐ' (Abun d-bashmayya), what does the noun 'ܫܡܰܝܳܐ' (shmayya / shmoyo) mean?",
      optionsEn: [
        "Heaven / Sky",
        "The Holy Name",
        "The Kingdom of Peace",
        "The Noble Will",
      ],
      correctAnswerEn: "Heaven / Sky",
      explanationEn: "Shmayya (or Shmoyo) is a plural noun meaning 'sky' or 'heaven', the dwelling place of the Heavenly Father."
    },
    {
      question: "Sufiks verba lampau (Perfect Aspect) 'ܟ݁ܬ݂ܰܒ݂ܬ݁ܽܘܢ' (Kthabton) menandakan pelaku tindakan berupa...",
      options: [
        "Kalian laki-laki telah menulis",
        "Kami telah menulis",
        "Mereka telah menulis",
        "Saya telah menulis"
      ],
      correctAnswer: 0,
      explanation: "Akhiran '-ton' (ـܬ݁ܽܘܢ) pada verba perfect adalah akhiran khas untuk orang kedua jamak maskulin (kalian m).",
      questionEn: "The past-tense (perfect aspect) verb suffix 'ܟ݁ܬ݂ܰܒ݂ܬ݁ܽܘܢ' (Kthabton) indicates the doer of the action is...",
      optionsEn: [
        "You (masculine plural) have written",
        "We have written",
        "They have written",
        "I have written",
      ],
      correctAnswerEn: "You (masculine plural) have written",
      explanationEn: "The ending '-ton' (ـܬ݁ܽܘܢ) on a perfect verb is the characteristic ending for the second person masculine plural (you, m.)."
    },
    {
      question: "Apakah antonim atau lawan kata langsung dari partikel eksistensi 'ܐܝܬ݂' (Ith - Ada)?",
      options: [
        "ܠܰܝܬ݁ (Layt - Tidak ada)",
        "ܗܘܳܐ (Hwa)",
        "ܡܶܢ (Men)",
        "ܠܳܐ (La)"
      ],
      correctAnswer: 0,
      explanation: "Layt (ܠܰܝܬ݁) merupakan kontraksi gabungan dari 'la' (tidak/bukan) + 'ith' (ada) yang menghasilkan arti 'tidak ada'.",
      questionEn: "What is the direct opposite (antonym) of the existential particle 'ܐܝܬ݂' (Ith - There is)?",
      optionsEn: [
        "ܠܰܝܬ݁ (Layt - There is not)",
        "ܗܘܳܐ (Hwa)",
        "ܡܶܢ (Men)",
        "ܠܳܐ (La)",
      ],
      correctAnswerEn: "ܠܰܝܬ݁ (Layt - There is not)",
      explanationEn: "Layt (ܠܰܝܬ݁) is a contraction combining 'la' (not) + 'ith' (there is), producing the meaning 'there is not'."
    }
  ],
  A2: [
    {
      question: "Sebutan kata benda murni 'ܒ݁ܰܝܬ݁ܳܐ' (Bayta / Bayto - Rumah) apabila diturunkan ke status mutlak (Absolute State) tunggal menjadi...",
      options: [
        "ܒ݁ܰܝܬ݁ (Bayt)",
        "ܒ݁ܰܝ (Bay)",
        "ܒ݁ܰܝܬ݁ܺܝܢ (Baytin)",
        "ܒ݁ܰܝܬ݁ܽܘܢ (Baytun)"
      ],
      correctAnswer: 0,
      explanation: "Dalam keadaan mutlak tunggal (Absolute State), akhiran vokal emfatis meluruh sehingga menyisakan kata konsonantal dasar 'Bayt'.",
      questionEn: "What does the pure noun 'ܒ݁ܰܝܬ݁ܳܐ' (Bayta / Bayto - House) become when it is put into the singular absolute state?",
      optionsEn: [
        "ܒ݁ܰܝܬ݁ (Bayt)",
        "ܒ݁ܰܝ (Bay)",
        "ܒ݁ܰܝܬ݁ܺܝܢ (Baytin)",
        "ܒ݁ܰܝܬ݁ܽܘܢ (Baytun)",
      ],
      correctAnswerEn: "ܒ݁ܰܝܬ݁ (Bayt)",
      explanationEn: "In the singular absolute state, the emphatic vowel ending drops away, leaving only the basic consonantal word 'Bayt'."
    },
    {
      question: "Partikel preposisi tak terpisahkan 'ܕ݁' (d-) memiliki fungsi sintaksis dominan untuk...",
      options: [
        "Menandakan relasi kepemilikan (genetif) atau kata hubung 'yang'",
        "Menandakan penolakan kalimat negatif",
        "Menandakan kata tanya pelaku utama",
        "Menandakan konjugasi pasif pasif"
      ],
      correctAnswer: 0,
      explanation: "Partikel 'd-' (ܕ݁) berfungsi sebagai penanda genitif ('of') yang menerangkan kepunyaan atau bertindak sebagai kata ganti penghubung ('who', 'which', 'that').",
      questionEn: "What is the dominant syntactic function of the inseparable prepositional particle 'ܕ݁' (d-)?",
      optionsEn: [
        "It marks a possessive (genitive) relation or the conjunction 'who/which/that'",
        "It marks the negation of a sentence",
        "It marks the main question word for the doer",
        "It marks passive conjugation",
      ],
      correctAnswerEn: "It marks a possessive (genitive) relation or the conjunction 'who/which/that'",
      explanationEn: "The particle 'd-' (ܕ݁) functions as a genitive marker ('of') indicating possession, or as a relative pronoun ('who', 'which', 'that')."
    },
    {
      question: "Kalimat nominal dalam bahasa Arami (Simentha d-La Melltha) didefinisikan sebagai...",
      options: [
        "Kalimat tanpa verba utama aktif, di mana predikat berupa kata benda/sifat",
        "Kalimat yang wajib berawalan kata tanya",
        "Kalimat dengan imbuhan aktif verba transitif",
        "Kalimat perintah berakhiran huruf Nun"
      ],
      correctAnswer: 0,
      explanation: "Nominal Sentence berpusat pada subjek dan predikat pelengkap (nomina/adjektiva) tanpa memerlukan predikat verba tindakan fisik dinamis.",
      questionEn: "A nominal sentence in Aramaic (Simentha d-La Melltha) is defined as...",
      optionsEn: [
        "A sentence without a main active verb, where the predicate is a noun or adjective",
        "A sentence that must begin with a question word",
        "A sentence with an active transitive verb affix",
        "An imperative sentence ending in the letter Nun",
      ],
      correctAnswerEn: "A sentence without a main active verb, where the predicate is a noun or adjective",
      explanationEn: "A nominal sentence centres on a subject and a complement predicate (noun/adjective) without needing a predicate of dynamic physical action."
    },
    {
      question: "Kata ganti penunjuk (Demonstrative Pronoun) feminin tunggal untuk menunjuk hal dekat ('ini') adalah...",
      options: [
        "ܗܳܕ݂ܶܐ (Hade)",
        "ܗܳܢܳܐ (Hana)",
        "ܗܳܢܽܘܢ (Hanun)",
        "ܗܳܢܶܝܢ (Hanen)"
      ],
      correctAnswer: 0,
      explanation: "Hana (ܗܳܢܳܐ) adalah penunjuk dekati maskulin tunggal ('ini'), sedangkan Hade (ܗܳܕ݂ܶܐ) adalah untuk feminin tunggal ('ini').",
      questionEn: "Which feminine singular demonstrative pronoun points to something near ('this')?",
      optionsEn: [
        "ܗܳܕ݂ܶܐ (Hade)",
        "ܗܳܢܳܐ (Hana)",
        "ܗܳܢܽܘܢ (Hanun)",
        "ܗܳܢܶܝܢ (Hanen)",
      ],
      correctAnswerEn: "ܗܳܕ݂ܶܐ (Hade)",
      explanationEn: "Hana (ܗܳܢܳܐ) is the near demonstrative for masculine singular ('this'), while Hade (ܗܳܕ݂ܶܐ) is for feminine singular ('this')."
    },
    {
      question: "Kata benda jamak maskulin definit/emfatis dari 'ܡܰܠܟ݁ܳܐ' (Malka / Malko - Raja) ditulis secara benar...",
      options: [
        "ܡܰܠܟ݁ܶܐ (Malke)",
        "ܡܰܠܟ݁ܺܝܢ (Malkin)",
        "ܡܰܠܟ݁ܳܬ݂ܳܐ (Malkatha)",
        "ܡܰܠܟ݁ܽܢ (Malkun)"
      ],
      correctAnswer: 0,
      explanation: "Jamak dari Malka dalam keadaan emfatis berakhiran vocal '-e' yaitu Malke (ܡܰܠܟ݁ܶܐ), sedangkan Malkin adalah status mutlak jamak.",
      questionEn: "How is the definite/emphatic masculine plural of 'ܡܰܠܟ݁ܳܐ' (Malka / Malko - King) written correctly?",
      optionsEn: [
        "ܡܰܠܟ݁ܶܐ (Malke)",
        "ܡܰܠܟ݁ܺܝܢ (Malkin)",
        "ܡܰܠܟ݁ܳܬ݂ܳܐ (Malkatha)",
        "ܡܰܠܟ݁ܽܢ (Malkun)",
      ],
      correctAnswerEn: "ܡܰܠܟ݁ܶܐ (Malke)",
      explanationEn: "The plural of Malka in the emphatic state ends with the vowel '-e', that is Malke (ܡܰܠܟ݁ܶܐ), while Malkin is the plural absolute state."
    },
    {
      question: "Bentuk konjugasi kata kerja perfect (lampau) orang ketiga tunggal feminin dari verba 'ܫܡܰܥ' (Shma' - Mendengar) adalah...",
      options: [
        "ܫܶܡܥܰܬ݂ (Shem`ath)",
        "ܫܶܡܥܶܬ݂ (Shem`eth)",
        "ܫܡܰܥܬ݁ܽܘܢ (Shma`ton)",
        "ܢܶܫܡܥܽܘܢ (Neshme`un)"
      ],
      correctAnswer: 0,
      explanation: "Pola dasar orang ketiga tunggal feminin verba perfect berakhiran akhiran '-ath' (ܫܶܡܥܰܬ݂).",
      questionEn: "What is the third person singular feminine perfect (past tense) conjugation of the verb 'ܫܡܰܥ' (Shma' - To hear)?",
      optionsEn: [
        "ܫܶܡܥܰܬ݂ (Shem`ath)",
        "ܫܶܡܥܶܬ݂ (Shem`eth)",
        "ܫܡܰܥܬ݁ܽܘܢ (Shma`ton)",
        "ܢܶܫܡܥܽܘܢ (Neshme`un)",
      ],
      correctAnswerEn: "ܫܶܡܥܰܬ݂ (Shem`ath)",
      explanationEn: "The basic pattern for the third person singular feminine perfect verb ends with the suffix '-ath' (ܫܶܡܥܰܬ݂)."
    },
    {
      question: "Akhiran kepemilikan pronominal '-mu' (untuk laki-laki tunggal) yang dilekatkan pada kata benda maskulin jamak akan berbunyi...",
      options: [
        "ـܰܝܟ݁ (-ayk)",
        "ـܳܟ݂ (-akh)",
        "ـܶܟ݂ (-ek)",
        "ـܟ݁ܽܘܢ (-kun)"
      ],
      correctAnswer: 0,
      explanation: "Bagi nomina jamak maskulin, sufiks kepemilikan orang kedua tunggal maskulin dilafalkan '-ayk' ditulis dengan pronomina terikat Yud-Kaph.",
      questionEn: "How does the possessive pronominal suffix '-mu' (for a single male) sound when attached to a masculine plural noun?",
      optionsEn: [
        "ـܰܝܟ݁ (-ayk)",
        "ـܳܟ݂ (-akh)",
        "ـܶܟ݂ (-ek)",
        "ـܟ݁ܽܘܢ (-kun)",
      ],
      correctAnswerEn: "ـܰܝܟ݁ (-ayk)",
      explanationEn: "For masculine plural nouns, the second person singular masculine possessive suffix is pronounced '-ayk', written with the bound pronoun Yodh-Kaph."
    },
    {
      question: "Partikel tanya murni 'ܡܰܢܽܘ' (Mano - Siapakah dia?) diperoleh dari kombinasi kontraksi kata...",
      options: [
        "ܡܰܢ (Man - Siapa) + ܗܽܘ (Hu - Dia)",
        "ܡܳܢ (Man) + ܗܽܘ (Hu)",
        "ܡܳܐ (Ma) + ܗܽܘ (Hu)",
        "ܡܶܢ (Men) + ܗܽܘ (Hu)"
      ],
      correctAnswer: 0,
      explanation: "Mano (siapa dia) adalah perpaduan asimilasi fonetis dari pronomina tanya Man (siapa) disatukan dengan kata ganti orang ketiga tunggal Hu (dia).",
      questionEn: "The pure question particle 'ܡܰܢܽܘ' (Mano - Who is he?) is formed from the contraction of which words?",
      optionsEn: [
        "ܡܰܢ (Man - Who) + ܗܽܘ (Hu - He)",
        "ܡܳܢ (Man) + ܗܽܘ (Hu)",
        "ܡܳܐ (Ma) + ܗܽܘ (Hu)",
        "ܡܶܢ (Men) + ܗܽܘ (Hu)",
      ],
      correctAnswerEn: "ܡܰܢ (Man - Who) + ܗܽܘ (Hu - He)",
      explanationEn: "Mano (who is he) is the phonetic assimilation of the question pronoun Man (who) joined with the third person singular pronoun Hu (he)."
    },
    {
      question: "Angka dasar murni feminin 'ܚܕ݂ܳܐ' (Hda) melambangkan bilangan...",
      options: [
        "Satu",
        "Dua",
        "Sepuluh",
        "Seratus"
      ],
      correctAnswer: 0,
      explanation: "Hda adalah sebutan format feminin murni Arami dari kata 'Had' yang berarti angka 1.",
      questionEn: "What number does the pure feminine base number 'ܚܕ݂ܳܐ' (Hda) represent?",
      optionsEn: [
        "One",
        "Two",
        "Ten",
        "One hundred",
      ],
      correctAnswerEn: "One",
      explanationEn: "Hda is the pure feminine Aramaic form of the word 'Had', meaning the number 1."
    },
    {
      question: "Apakah arti liturgis historis dari ungkapan sastrawi 'ܒ݁ܪܰܐ ܕ݁ܐܰܠܳܗܳܐ' (Bra d-Alaha)?",
      options: [
        "Anak Allah",
        "Hamba Allah",
        "Utusan Allah",
        "Pujian Allah"
      ],
      correctAnswer: 0,
      explanation: "Bra artinya Anak laki-laki, d- merupakan partikel kepunyaan, Alaha adalah Tuhan/Allah. Berarti Anak Allah.",
      questionEn: "What is the historical liturgical meaning of the literary expression 'ܒ݁ܪܰܐ ܕ݁ܐܰܠܳܗܳܐ' (Bra d-Alaha)?",
      optionsEn: [
        "Son of God",
        "Servant of God",
        "Messenger of God",
        "Praise of God",
      ],
      correctAnswerEn: "Son of God",
      explanationEn: "Bra means Son, d- is the possessive particle, Alaha is God/Allah. So it means Son of God."
    }
  ],
  B1: [
    {
      question: "Pola konjugasi verba intensif-aktif (Pael, Serumpun Piel Ibrani) secara struktur dikenali lewat...",
      options: [
        "Penebalan/gandaan harakat vokal radikal tengah secara infleksi penuh",
        "Menambahkan kata bantu di awal kalimat",
        "Meleburkan huruf radikal penutup",
        "Menggubah seluruh abjad menjadi huruf Yunani"
      ],
      correctAnswer: 0,
      explanation: "Sistem verba Pael adalah pola intensif yang ditandai dengan perubahan pola vokal internal radikal kedua.",
      questionEn: "How is the intensive-active verb conjugation pattern (Pael, related to the Hebrew Piel) recognised structurally?",
      optionsEn: [
        "By the doubling/thickening of the middle radical's vowel pattern through full inflection",
        "By adding an auxiliary word at the start of the sentence",
        "By merging the closing radical letter",
        "By changing the whole alphabet into Greek letters",
      ],
      correctAnswerEn: "By the doubling/thickening of the middle radical's vowel pattern through full inflection",
      explanationEn: "The Pael verb system is an intensive pattern marked by a change in the internal vowel pattern of the second radical."
    },
    {
      question: "Awalan (prefix) pembentuk rumpun verba pasif murni-refleksif dalam tata bahasa Arami adalah...",
      options: [
        "ܐܶܬ݂ـ (Eth-)",
        "ܐܰـ (A-)",
        "ܡܰـ (Ma-)",
        "ܬ݁ܶـ (Te-)"
      ],
      correctAnswer: 0,
      explanation: "Prefix 'Eth-' (ܐܶܬ݂ـ) merupakan penanda utama pembentuk kata kerja pasif seperti Ethpeel, Ethpaal, atau Ethtaphal.",
      questionEn: "What prefix forms the pure passive-reflexive verb stem in Aramaic grammar?",
      optionsEn: [
        "ܐܶܬ݂ـ (Eth-)",
        "ܐܰـ (A-)",
        "ܡܰـ (Ma-)",
        "ܬ݁ܶـ (Te-)",
      ],
      correctAnswerEn: "ܐܶܬ݂ـ (Eth-)",
      explanationEn: "The prefix 'Eth-' (ܐܶܬ݂ـ) is the main marker forming passive verbs such as Ethpeel, Ethpaal, or Ethtaphal."
    },
    {
      question: "Manakah konstruksi partikel majemuk yang digunakan untuk meniadakan kalimat nominal waktu kini?",
      options: [
        "ܠܳܐ ܗܘܳܐ (La hwa)",
        "ܠܰܝܬ݁ (Layt)",
        "ܠܳܐ (La)",
        "ܐܶܠܳܐ (Ela)"
      ],
      correctAnswer: 0,
      explanation: "Negasi kalimat nominal waktu kini (present tense) umumnya diutarakan dengan penyandingan partikel 'la hwa'.",
      questionEn: "Which compound particle construction is used to negate a present-tense nominal sentence?",
      optionsEn: [
        "ܠܳܐ ܗܘܳܐ (La hwa)",
        "ܠܰܝܬ݁ (Layt)",
        "ܠܳܐ (La)",
        "ܐܶܠܳܐ (Ela)",
      ],
      correctAnswerEn: "ܠܳܐ ܗܘܳܐ (La hwa)",
      explanationEn: "Negation of a present-tense nominal sentence is generally expressed by placing the particle 'la hwa' together."
    },
    {
      question: "Sufiks produktif penanda bentukan kata benda abstrak (Abstract Nominals) dalam bahasa Arami Klasik adalah...",
      options: [
        "ـܽܘܬ݂ܳܐ (-utha / -utho)",
        "ـܳܢܳܐ (-ana)",
        "ـܳܝܳܐ (-aya)",
        "ـܺܝܢ (-in)"
      ],
      correctAnswer: 0,
      explanation: "Akhiran '-utha' (ـܽܘܬ݂ܳܐ) adalah akhiran sangat produktif pembentuk kata abstrak (contoh: Malkutha = Kerajaan, dari Malka = Raja).",
      questionEn: "What is the productive suffix marking the formation of abstract nouns in Classical Aramaic?",
      optionsEn: [
        "ـܽܘܬ݂ܳܐ (-utha / -utho)",
        "ـܳܢܳܐ (-ana)",
        "ـܳܝܳܐ (-aya)",
        "ـܺܝܢ (-in)",
      ],
      correctAnswerEn: "ـܽܘܬ݂ܳܐ (-utha / -utho)",
      explanationEn: "The ending '-utha' (ـܽܘܬ݂ܳܐ) is a very productive ending forming abstract words (for example: Malkutha = Kingdom, from Malka = King)."
    },
    {
      question: "Pola verba kausatif aktif 'Aphel' (Serumpun Hiphil Ibrani) mengekspresikan semantik...",
      options: [
        "Tindakan yang membuat atau menyebabkan orang lain bertindak",
        "Keadaan pasif tanpa penderita",
        "Tindakan timbal balik",
        "Tindakan masa depan yang pasti gagal"
      ],
      correctAnswer: 0,
      explanation: "Pola Aphel melambangkan aspek kausatif aktif (buat menyebabkan sesuatu bertindak), misal: 'ia membuat mengerti'.",
      questionEn: "What meaning does the active causative verb pattern 'Aphel' (related to the Hebrew Hiphil) express?",
      optionsEn: [
        "An action that makes or causes someone else to act",
        "A passive state without a patient",
        "A reciprocal action",
        "A future action certain to fail",
      ],
      correctAnswerEn: "An action that makes or causes someone else to act",
      explanationEn: "The Aphel pattern expresses the active causative aspect (making something act), for example: 'he made (someone) understand'."
    },
    {
      question: "Sintaksis kalimat majemuk kompleks 'Simentha mraqubta' dicirikan oleh adanya hubung...",
      options: [
        "Konjungsi koordinatif atau subordinatif seperti 'w-' atau 'ela'",
        "Hanya berupa asindeton tanpa batas",
        "Pronominal penunjuk masa lalu saja",
        "Perubahan paksa verba modal"
      ],
      correctAnswer: 0,
      explanation: "Sintaksis majemuk terikat dikoordinasikan secara saksama menggunakan konjungsi teratur.",
      questionEn: "How is the syntax of the complex compound sentence 'Simentha mraqubta' characterised?",
      optionsEn: [
        "By a coordinating or subordinating conjunction such as 'w-' or 'ela'",
        "Only by asyndeton without boundaries",
        "Only by a past-tense demonstrative pronoun",
        "By a forced change of the modal verb",
      ],
      correctAnswerEn: "By a coordinating or subordinating conjunction such as 'w-' or 'ela'",
      explanationEn: "Compound syntax is carefully coordinated using regular conjunctions."
    },
    {
      question: "Partikel preposisi temporal ganda 'ܡܶܢ ܩܕ݂ܳܡ' (Men qdam) diterjemahkan secara langsung menjadi...",
      options: [
        "Sebelum (Before)",
        "Sesudah (After)",
        "Di atas (Above)",
        "Bersamaan (With)"
      ],
      correctAnswer: 0,
      explanation: "'Men qdam' merupakan gabungan 'men' (dari) + 'qdam' (hadapan), bermakna 'sebelum' (secara urutan waktu/posisi).",
      questionEn: "How is the double temporal prepositional particle 'ܡܶܢ ܩܕ݂ܳܡ' (Men qdam) translated directly?",
      optionsEn: [
        "Before",
        "After",
        "Above",
        "Together (With)",
      ],
      correctAnswerEn: "Before",
      explanationEn: "'Men qdam' combines 'men' (from) + 'qdam' (in front of), meaning 'before' (in order of time or position)."
    },
    {
      question: "Pembentukan imperatif (perintah) maskulin jamak pada pola Pael diakhiri dengan akhiran vokal...",
      options: [
        "ـܘ (-u / -o)",
        "ـܝ (-i)",
        "ـܳܐ (-a)",
        "ـܰܬ݂ (-ath)"
      ],
      correctAnswer: 0,
      explanation: "Kata kerja perintah jamak maskulin murni diakhiri dengan huruf Wau berbunyi '-u'.",
      questionEn: "What vowel ending closes the formation of a masculine plural imperative (command) in the Pael pattern?",
      optionsEn: [
        "ـܘ (-u / -o)",
        "ـܝ (-i)",
        "ـܳܐ (-a)",
        "ـܰܬ݂ (-ath)",
      ],
      correctAnswerEn: "ـܘ (-u / -o)",
      explanationEn: "A pure masculine plural imperative verb ends with the letter Waw sounding '-u'."
    },
    {
      question: "Penyandingan verba bantu historis 'ܗܘܳܐ' (hwa) setelah bentuk partisipel kata kerja aktif bertujuan membentuk aspek...",
      options: [
        "Waktu lampau kontinu / kebiasaan lampau (Past Continuous/Imperfective)",
        "Waktu masa depan mutlak",
        "Perintah pasif tingkat tinggi",
        "Subjungtif pengandaian"
      ],
      correctAnswer: 0,
      explanation: "Kombinasi Partisipel + hwa merepresentasikan tindakan yang sedang berlangsung terus-menerus di waktu lampau.",
      questionEn: "What aspect is formed by placing the historical auxiliary verb 'ܗܘܳܐ' (hwa) after the active participle form of a verb?",
      optionsEn: [
        "Past continuous / past habitual (Past Continuous / Imperfective)",
        "Absolute future tense",
        "High-level passive command",
        "Conditional subjunctive",
      ],
      correctAnswerEn: "Past continuous / past habitual (Past Continuous / Imperfective)",
      explanationEn: "The combination of participle + hwa represents an action that was continuously ongoing in the past."
    },
    {
      question: "Apakah arti dari kalimat pujian rohani murni 'ܬܶܫܒ݁ܽܘܚܬ݁ܳܐ ܠܰܐܠܳܗܳܐ' (Teshbukhta l-Alaha)?",
      options: [
        "Kemuliaan/Pujian bagi Allah",
        "Tuhan adalah pelindungku",
        "Kuduskan nama-Mu di surga",
        "Datanglah Kerajaan-Mu segera"
      ],
      correctAnswer: 0,
      explanation: "Teshbukhta bermakna 'Kemuliaan/Pujian', l- artinya 'bagi/kepada', Alaha artinya 'Tuhan/Allah'. Sehingga berarti Kemuliaan bagi Allah.",
      questionEn: "What does the pure spiritual praise sentence 'ܬܶܫܒ݁ܽܘܚܬ݁ܳܐ ܠܰܐܠܳܗܳܐ' (Teshbukhta l-Alaha) mean?",
      optionsEn: [
        "Glory / Praise to God",
        "God is my protector",
        "Hallowed be Your name in heaven",
        "May Your Kingdom come soon",
      ],
      correctAnswerEn: "Glory / Praise to God",
      explanationEn: "Teshbukhta means 'Glory/Praise', l- means 'to/for', Alaha means 'God/Allah'. So it means Glory to God."
    }
  ]
};
