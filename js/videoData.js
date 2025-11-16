const videoList = [
    // Bahasa Indonesia 
    { id: "KOtM0X8oNqI", title: "Teks Anekdot", subject: "B-Indonesia"},
    { id: "i4ozP9VCC8s", title: "Hikayat", subject: "B-Indonesia"},
    { id: "EG6MH6czEKw", title: "Teks Laporan Hasil Observasi", subject: "B-Indonesia"},
    { id: "pVis-QzP1g0", title: "Teks Eksposisi", subject: "B-Indonesia"},
    { id: "XTDVDwmwpKs", title: "Teks Negosiasi", subject: "B-Indonesia"},
    { id: "51AWWs6UahM", title: "Puisi", subject: "B-Indonesia"},

    //Biologi
    { id: "Mc8oBoCLajA", title: "Mengenal Biologi", subject: "Biologi"},
    { id: "NfmnNwWDPhM", title: "Keanekaragaman Hayati", subject: "Biologi"},
    { id: "VFVruEK2HpM", title: "Monera", subject: "Biologi"},
    { id: "mAWswwyqcKs", title: "Protista", subject: "Biologi"},
    { id: "waRKYO0cXjA", title: "Plantae", subject: "Biologi"},
    { id: "mYm792sShA0", title: "Animalia", subject: "Biologi"},
    { id: "IVm9sgRVp-0", title: "Ekosistem", subject: "Biologi"},
    { id: "abfIbM4hWIk", title: "Keseimbangan lingkungan dan perubahannya", subject: "Biologi"},
    { id: "qdttvTLh2nQ", title: "Energi Terbarukan", subject: "Biologi"},

    //English
    { id: "Fdl8WLeTy3o", title: "Descriptive Text", subject: "English"},
    { id: "zGRZlDudZtI", title: "Recount Text", subject: "English"},
    { id: "IgclUWT5qs4", title: "Expressing Intention", subject: "English"},
    { id: "4KsZglGqdCw", title: "Congratulating Others", subject: "English"},
    { id: "dmuvfIL6AnE", title: "16 Tenses  ", subject: "English"},

    //Ekonomi
    { id: "hHeUmlm-TeZ7LUc_", title: "Konsep Ilmu Ekonomi", subject: "Ekonomi"},
    { id: "iG5Nr-2B7t0", title: "Masalah Ekonomi dalam Sistem Ekonomi", subject: "Ekonomi"},
    { id: "bqmxf6GXDzA", title: "Peran Pelaku Ekonomi dalam Kegiatan Ekonomi", subject: "Ekonomi"},
    { id: "qhy6_jTGoHU", title: "Terbentuknya Harga Pasar", subject: "Ekonomi"},
    { id: "dIt17gWeCmU", title: "Lembaga Jasa Keuangan di Indonesia", subject: "Ekonomi"},
    { id: "6OBPF2VebaQ", title: "Bank Sentral - Sistem Pembayaran", subject: "Ekonomi"},
    { id: "3ZphSM35Ixo", title: "BADAN USAHA DALAM PEREKONOMIAN INDONESIA", subject: "Ekonomi"},
    { id: "iiwZOpztJY4", title: "Koperasi", subject: "Ekonomi"},
    { id: "eMPNHJDAm2w", title: "Manajemen", subject: "Ekonomi"},

    //Fisika
    { id: "gR-RXfx_fAkLaKeJ", title: "Besaran dan Satuan", subject: "Fisika"},
    { id: "EGx37DE1GCE", title: "Pengukuran dalam kegiatan kerja ilmiah", subject: "Fisika"},

    //Geografi
    { id: "87ENtpAplIMRLi5K", title: "Apa itu Geografi", subject: "Geografi"},
    { id: "djvCDpyUCys", title: "Pengetahuan dasar pemetaan", subject: "Geografi"},
    { id: "kYgtvQhzuSg", title: "Langkah langkah penelitian geogarfi", subject: "Geografi"},
    { id: "AhMi85oCxrg", title: "Bumi sebagai ruang kehidupan", subject: "Geografi"},
    { id: "6Sju3Ek_0OY", title: "Fenomena Geosfer: Litosfer", subject: "Geografi"},
    { id: "7zr-ItQa850", title: "Lapisan Atmosfer Bumi", subject: "Geografi"},
    { id: "BizBSp7jqh0", title: "DINAMIKA HIDROSFER: AIR TANAH", subject: "Geografi"},

    //Kimia
    { id: "URqlmZKo8tIulqep", title: "Perkembangan Teori Atom", subject: "Kimia"},
    { id: "KwbWZSm3uzs", title: "Kimia Hijau", subject: "Kimia"},
    { id: "8X2ohD8LvuM", title: "Struktur Atom", subject: "Kimia"},
    { id: "OCAKsOyK-1A", title: "Hukum Dasar Kimia", subject: "Kimia"},

    //Matematika
    { id: "FqYIq9kdshM", title: "Logaritma", subject: "Matematika" },
    { id: "AlrOq3W7IZ4", title: "Eksponen", subject: "Matematika" },
    { id: "ohzZ43OXzQc", title: "Bentuk Akar", subject: "Matematika" },
    { id: "vKtQB8YX7VU", title: "Barisan dan Deret Aritmatika", subject: "Matematika" },

    //PKN
    { id: "OJi2Pq024UA", title: "Pokok-Pokok Pikiran Dalam BPUPKI", subject: "PKN"},
    { id: "PdXVKSOePnI", title: "Panitia Sembilan dan Mukadimah Dasar Negara", subject: "PKN"},
    { id: "clYhGgQyOp4", title: "Pancasila", subject: "PKN"},
    { id: "XTeymtlik2c", title: "Bhinneka Tunggal Ika", subject: "PKN"},
    { id: "Vc3VQXytock", title: "Negara Kesatuan Republik Indonesia", subject: "PKN"},

    //Sejarah
    { id: "nNKF0tJIQ3o", title: "Cara berpikir Diakronik dan Sinkronik", subject: "Sejarah" },
    { id: "30K6sfM6vus", title: "Asal Usul Sejarah", subject: "Sejarah" },
    { id: "hiExHaPrmHQ", title: "Islamisasi dan Silang Budaya di Indonesia", subject: "Sejarah" },
    { id: "tHH4fcxJnZo", title: "Menelusuri Peradaban Awal di Kepulauan Indonesia", subject: "Sejarah" },

    //Seni Budaya
    { id: "w-0mS8ghE2U", title: "Seni Rupa 2 Dimensi", subject: "Seni-Budaya"},

    //Sosiologi
    { id: "cybvERyvP6k6xNSv", title: "Apa itu Sosiologi", subject: "Sosiologi"},
    { id: "8wsz0gIKZU8", title: "Nilai dan Norma Sosial", subject: "Sosiologi"},
    { id: "_NdpV4XZIl4", title: "Dinamika Kehidupan Sosial", subject: "Sosiologi"},
    { id: "MVB5Qt_DX3Q", title: "Sosialisasi dan pembentukan kepribadian", subject: "Sosiologi"},
    { id: "2a48in-ZY3Y", title: "Perilaku menyimpang sikap antisosial", subject: "Sosiologi"},
    { id: "4AqTK_v5-Mw", title: "Pengendalian kehidupan masyarakat", subject: "Sosiologi"},

    //Informatika
    { id: "KSwlcE7adx4", title: "Informatika dan Keterampilan Generik", subject: "Informatika"},
    { id: "jCb9fpPrxLc", title: "Berpikir komputasiona", subject: "Informatika"},
    { id: "7iQP6uEc7Ko", title: "Teknologi informasi dan komunikasi", subject: "Informatika"},
    { id: "M_qL2Rfd_yw", title: "Sistem komputer", subject: "Informatika"},
    { id: "GHPMTljp3ZY", title: "Jaringan komputer dan internet", subject: "Informatika"},
    { id: "6N5IQAVndFo", title: "Algoritma dan pemrograman", subject: "Informatika"},
    { id: "wawDQTJCsBg", title: "Dampak sosial informatika", subject: "Informatika"},
    { id: "bXyRcqHnZeA", title: "Praktika lintas bidang informatika", subject: "Informatika"},

    //PJOK
    { id: "lPqPfLz3ppY", title: "Aktivitas pembelajaran permainan bola besa", subject: "PJOK"},
    { id: "5pYKT7DQ1b8", title: "Aktivitas permainan bola kecil", subject: "PJOK"},
    { id: "ZXIKvdrEq84", title: "Aktivitas atletik", subject: "PJOK"},
    { id: "41usHL9H3s0", title: "Aktivitas bela diri", subject: "PJOK"},
    { id: "64VcB8X0JNo", title: "Aktivitas pembelajaran kebugaran jasmani", subject: "PJOK"},
    { id: "goKPtPJS7Uc", title: "Aktivitas senam", subject: "PJOK"},
    { id: "BMaQjR-gHl0", title: "Aktivitas gerak berirama", subject: "PJOK"},
    { id: "cqOmcFq0O0E", title: "Aktivitas air", subject: "PJOK"},
    { id: "mR1tqsPd3fc", title: "Perkembangan tumbuh remaja", subject: "PJOK"},
    { id: "LFQTGr1S-sY", title: "Pola makan sehat, bergizi, dan seimbang", subject: "PJOK"},
];
