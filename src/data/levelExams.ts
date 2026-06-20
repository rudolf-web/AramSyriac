export interface LevelExamQuestion {
  question: string;
  options: string[];
  correctAnswer: number; // index of option
  explanation: string;
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
      explanation: "Shlama atau Shlomo adalah kata benda Semitik yang bermakna 'damai sejahtera'. Ini digunakan sebagai salam pembuka utama dalam rumpun bahasa Arami."
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
      explanation: "Abjad Arami diawali dengan huruf Alap (ܐ) yang melambangkan urutan ke-1 serta memiliki nilai gematria murni 1."
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
      explanation: "Dalam dialek Barat (Serto), pronomina orang pertama tunggal 'saya' ditulis ܐܶܢܳܐ dan dibaca 'Eno' (versi Timur: 'Ana')."
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
      explanation: "Keadaan emfatis (Emphatic State) yang bersifat definit dibentuk dengan menambahkan huruf Alap dengan vokal panjang di akhir kata benda maskulin tunggal."
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
      explanation: "Alaha berarti Tuhan atau Allah dalam bahasa Arami Klasik, berkerabat dengan El (Ibrani) atau Ilah (Arab)."
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
      explanation: "Inseperable preposition 'b-' (ܒ݁) berarti 'di dalam' (in), 'dengan' (with), atau 'pada' (at)."
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
      explanation: "Tlatha (ܬܠܳܬ݂ܳܐ) adalah kata bilangan maskulin Semitik murni untuk angka 3."
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
      explanation: "Shmayya (atau Shmoyo) adalah nomina jamak bermakna 'langit' atau 'surga' tempat kediaman Bapa Surgawi."
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
      explanation: "Akhiran '-ton' (ـܬ݁ܽܘܢ) pada verba perfect adalah akhiran khas untuk orang kedua jamak maskulin (kalian m)."
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
      explanation: "Layt (ܠܰܝܬ݁) merupakan kontraksi gabungan dari 'la' (tidak/bukan) + 'ith' (ada) yang menghasilkan arti 'tidak ada'."
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
      explanation: "Dalam keadaan mutlak tunggal (Absolute State), akhiran vokal emfatis meluruh sehingga menyisakan kata konsonantal dasar 'Bayt'."
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
      explanation: "Partikel 'd-' (ܕ݁) berfungsi sebagai penanda genitif ('of') yang menerangkan kepunyaan atau bertindak sebagai kata ganti penghubung ('who', 'which', 'that')."
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
      explanation: "Nominal Sentence berpusat pada subjek dan predikat pelengkap (nomina/adjektiva) tanpa memerlukan predikat verba tindakan fisik dinamis."
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
      explanation: "Hana (ܗܳܢܳܐ) adalah penunjuk dekati maskulin tunggal ('ini'), sedangkan Hade (ܗܳܕ݂ܶܐ) adalah untuk feminin tunggal ('ini')."
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
      explanation: "Jamak dari Malka dalam keadaan emfatis berakhiran vocal '-e' yaitu Malke (ܡܰܠܟ݁ܶܐ), sedangkan Malkin adalah status mutlak jamak."
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
      explanation: "Pola dasar orang ketiga tunggal feminin verba perfect berakhiran akhiran '-ath' (ܫܶܡܥܰܬ݂)."
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
      explanation: "Bagi nomina jamak maskulin, sufiks kepemilikan orang kedua tunggal maskulin dilafalkan '-ayk' ditulis dengan pronomina terikat Yud-Kaph."
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
      explanation: "Mano (siapa dia) adalah perpaduan asimilasi fonetis dari pronomina tanya Man (siapa) disatukan dengan kata ganti orang ketiga tunggal Hu (dia)."
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
      explanation: "Hda adalah sebutan format feminin murni Arami dari kata 'Had' yang berarti angka 1."
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
      explanation: "Bra artinya Anak laki-laki, d- merupakan partikel kepunyaan, Alaha adalah Tuhan/Allah. Berarti Anak Allah."
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
      explanation: "Sistem verba Pael adalah pola intensif yang ditandai dengan perubahan pola vokal internal radikal kedua."
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
      explanation: "Prefix 'Eth-' (ܐܶܬ݂ـ) merupakan penanda utama pembentuk kata kerja pasif seperti Ethpeel, Ethpaal, atau Ethtaphal."
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
      explanation: "Negasi kalimat nominal waktu kini (present tense) umumnya diutarakan dengan penyandingan partikel 'la hwa'."
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
      explanation: "Akhiran '-utha' (ـܽܘܬ݂ܳܐ) adalah akhiran sangat produktif pembentuk kata abstrak (contoh: Malkutha = Kerajaan, dari Malka = Raja)."
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
      explanation: "Pola Aphel melambangkan aspek kausatif aktif (buat menyebabkan sesuatu bertindak), misal: 'ia membuat mengerti'."
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
      explanation: "Sintaksis majemuk terikat dikoordinasikan secara saksama menggunakan konjungsi teratur."
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
      explanation: "'Men qdam' merupakan gabungan 'men' (dari) + 'qdam' (hadapan), bermakna 'sebelum' (secara urutan waktu/posisi)."
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
      explanation: "Kata kerja perintah jamak maskulin murni diakhiri dengan huruf Wau berbunyi '-u'."
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
      explanation: "Kombinasi Partisipel + hwa merepresentasikan tindakan yang sedang berlangsung terus-menerus di waktu lampau."
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
      explanation: "Teshbukhta bermakna 'Kemuliaan/Pujian', l- artinya 'bagi/kepada', Alaha artinya 'Tuhan/Allah'. Sehingga berarti Kemuliaan bagi Allah."
    }
  ]
};
