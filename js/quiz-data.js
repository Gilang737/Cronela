const quizData = {
    //matematika
    "Eksponen": [
        { question: "Nilai dari log₁₀(1000) adalah...", options: ["3", "4", "1", "2"], correct: "3" },
        { question: "Jika log₁₀(x) = 2, maka x = ?", options: ["10", "20", "50", "100"], correct: "100" },
        { question: "log₂(8) = ?", options: ["1", "2", "3", "4"], correct: "3"},
        { question: "log₅(25) = ?", options: ["1", "2", "3", "4"], correct: "2" },
        { question: "Jika log₃(81) = x, maka x = ?", options: ["2", "3", "4", "5"], correct: "4" }
    ],
    "Logaritma": [
        { question: "Apa yang dimaksud dengan logaritma?", options: ["Operasi invers dari perpangkatan.", "Proses penjumlahan bilangan.", "Pengukuran sudut dalam derajat.", "Operasi pengurangan bilangan."], correct: "Operasi invers dari perpangkatan." },
        { question: "Berapa nilai dari log10(100)?", options: ["1", "2", "10", "100"], correct: "2" },
        { question: "Jika loga(b) = c, maka bentuk eksponensialnya adalah?", options: ["a^c = b", "b^c = a", "c^a = b", "a^b = c"], correct: "a^c = b" },
        { question: "Apa sifat dari logaritma yang menyatakan loga(mn)?", options: ["log a m + log a n", "log a m - log a n", "log a m / log a n", "log a m^n"], correct: "log a m + log a n" },
        { question: "Berapa nilai dari log2(8)?", options: ["1", "2", "3", "4"], correct: "3" }
    ],

    // b indonesia
    "teks anekdot": [
        { question: "Apa tujuan utama dari teks anekdot?", options: ["Menghibur pembaca", "Menyampaikan informasi ilmiah", "Menceritakan sejarah", "Menggambarkan suasana"], correct: "Menghibur pembaca" },
        { question: "Ciri khas dari teks anekdot adalah?", options: ["Mengandung unsur fiksi yang kompleks", "Memiliki alur yang panjang dan rumit", "Mengandung humor dan kejadian lucu", "Menyajikan fakta-fakta ilmiah"], correct: "Mengandung humor dan kejadian lucu" },
        { question: "Dalam teks anekdot, biasanya terdapat?", options: ["Tokoh yang tidak jelas", "Konflik yang serius", "Situasi yang menggelikan", "Penjelasan yang mendetail"], correct: "Situasi yang menggelikan" },
        { question: "Teks anekdot sering kali diakhiri dengan?", options: ["Kesimpulan yang panjang", "Pesan moral yang serius", "Poin-poin penting", "Kalimat yang lucu atau mengejutkan"], correct: "Kalimat yang lucu atau mengejutkan" },
        { question: "Contoh tema yang sering diangkat dalam teks anekdot adalah?", options: ["Peristiwa sejarah", "Pengalaman sehari-hari yang konyol", "Penjelasan ilmiah tentang alam", "Biografi tokoh terkenal"], correct: "Pengalaman sehari-hari yang konyol" }
    ],
    "hikayat" :[
        { question: "Apa yang dimaksud dengan teks hikayat?", options: ["Cerita yang berisi pengalaman sehari-hari", "Cerita yang mengandung unsur fiksi dan fantasi", "Cerita yang menggambarkan sejarah suatu bangsa", "Cerita yang berisi ajaran moral dan nilai-nilai kehidupan"], correct: "Cerita yang mengandung unsur fiksi dan fantasi" },
        { question: "Ciri khas dari teks hikayat adalah?", options: ["Mengandung dialog yang panjang", "Menggunakan bahasa yang sederhana", "Mengandung unsur magis atau supernatural", "Menceritakan peristiwa nyata"], correct: "Mengandung unsur magis atau supernatural" },
        { question: "Dalam teks hikayat, biasanya terdapat?", options: ["Tokoh yang realistis", "Latar yang tidak jelas", "Konflik yang sederhana", "Alur yang kompleks"], correct: "Alur yang kompleks" },
        { question: "Teks hikayat sering kali mengandung?", options: ["Pesan moral yang jelas", "Fakta sejarah yang akurat", "Dialog yang mendetail", "Deskripsi ilmiah"], correct: "Pesan moral yang jelas" },
        { question: "Contoh tema yang sering diangkat dalam teks hikayat adalah?", options: ["Perjuangan cinta", "Kehidupan sehari-hari", "Peristiwa sejarah", "Petualangan dan keajaiban"], correct: "Petualangan dan keajaiban" }
    ],
    "teks laporan hasil observasi" :[
        { question: "Apa yang dimaksud dengan teks laporan hasil observasi?", options: ["Teks yang menceritakan pengalaman pribadi", "Teks yang menyajikan informasi berdasarkan pengamatan", "Teks yang berisi cerita fiksi", "Teks yang menjelaskan cara melakukan sesuatu"], correct: "Teks yang menyajikan informasi berdasarkan pengamatan" },
        { question: "Salah satu ciri khas dari teks laporan hasil observasi adalah:", options: ["Mengandung unsur dialog", "Menggunakan bahasa yang bersifat subjektif", "Menyajikan fakta dan data yang objektif", "Mengandung unsur imajinasi"], correct: "Menyajikan fakta dan data yang objektif" },
        { question: "Bagian mana yang biasanya tidak terdapat dalam teks laporan hasil observasi?", options: ["Judul", "Pendahuluan", "Daftar isi", "Kesimpulan"], correct: "Daftar isi" },
        { question: "Dalam teks laporan hasil observasi, informasi yang disajikan biasanya bersifat:", options: ["Pribadi dan emosional", "Umum dan faktual", "Spekulatif dan tidak pasti", "Cerita dan naratif"], correct: "Umum dan faktual" },
        { question: "Apa tujuan utama dari penulisan teks laporan hasil observasi?", options: ["Untuk menghibur pembaca", "Untuk memberikan informasi yang akurat tentang suatu objek atau fenomena", "Untuk menceritakan pengalaman pribadi", "Untuk mengajak pembaca berdebat"], correct: "Untuk memberikan informasi yang akurat tentang suatu objek atau fenomena" }
    ],
    "teks eksposisi" :[
        { question: "Apa yang dimaksud dengan teks eksposisi?", options: ["Teks yang menceritakan cerita fiksi", "Teks yang menjelaskan suatu topik dengan tujuan memberikan informasi", "Teks yang berisi puisi", "Teks yang menggambarkan pengalaman pribadi"], correct: "Teks yang menjelaskan suatu topik dengan tujuan memberikan informasi" },
        { question: "Salah satu ciri khas dari teks eksposisi adalah:", options: ["Mengandung unsur dialog", "Menggunakan bahasa yang bersifat subjektif", "Menyajikan argumen dan fakta", "Mengandung unsur imajinasi"], correct: "Menyajikan argumen dan fakta" },
        { question: "Bagian mana yang biasanya terdapat dalam teks eksposisi?", options: ["Pendahuluan", "Cerita", "Dialog", "Kesimpulan"], correct: "Pendahuluan" },
        { question: "Dalam teks eksposisi, tujuan penulis biasanya adalah:", options: ["Untuk menghibur pembaca", "Untuk membujuk pembaca", "Untuk memberikan informasi dan penjelasan", "Untuk menceritakan pengalaman pribadi"], correct: "Untuk memberikan informasi dan penjelasan" },
        { question: "Apa yang biasanya tidak terdapat dalam teks eksposisi?", options: ["Fakta dan data", "Argumen", "Cerita fiksi", "Penjelasan"], correct: "Cerita fiksi" }
    ],
    "teks negosiasi" :[
        { question: "Apa yang dimaksud dengan teks negosiasi?", options: ["Teks yang menceritakan pengalaman pribadi", "Teks yang berisi tawar-menawar antara dua pihak", "Teks yang menjelaskan suatu topik", "Teks yang berisi cerita fiksi"], correct: "Teks yang berisi tawar-menawar antara dua pihak" },
        { question: "Salah satu ciri khas dari teks negosiasi adalah:", options: ["Mengandung unsur dialog", "Menggunakan bahasa yang bersifat subjektif", "Menyajikan fakta dan data", "Mengandung unsur imajinasi"], correct: "Mengandung unsur dialog" },
        { question: "Apa tujuan utama dari teks negosiasi?", options: ["Untuk menghibur pembaca", "Untuk mencapai kesepakatan antara dua pihak", "Untuk memberikan informasi", "Untuk menceritakan pengalaman pribadi"], correct: "Untuk mencapai kesepakatan antara dua pihak" },
        { question: "Dalam teks negosiasi, pihak-pihak yang terlibat biasanya:", options: ["Hanya satu pihak", "Dua pihak atau lebih yang memiliki kepentingan berbeda", "Hanya penjual", "Hanya pembeli"], correct: "Dua pihak atau lebih yang memiliki kepentingan berbeda" },
        { question: "Apa yang biasanya tidak terdapat dalam teks negosiasi?", options: ["Tawaran", "Argumen", "Kesepakatan", "Cerita fiksi"], correct: "Cerita fiksi" }
    ],
    "puisi" :[
        { question: "Apa yang dimaksud dengan teks puisi?", options: ["Teks yang menceritakan cerita fiksi", "Teks yang menggunakan bahasa kiasan dan ritme untuk mengekspresikan perasaan", "Teks yang berisi laporan fakta", "Teks yang menjelaskan suatu topik secara ilmiah"], correct: "Teks yang menggunakan bahasa kiasan dan ritme untuk mengekspresikan perasaan" },
        { question: "Salah satu ciri khas dari puisi adalah:", options: ["Menggunakan bahasa yang baku dan formal", "Memiliki rima dan irama", "Selalu berisi dialog", "Menyajikan fakta dan data"], correct: "Memiliki rima dan irama" },
        { question: "Apa tujuan utama dari penulisan puisi?", options: ["Untuk memberikan informasi", "Untuk menghibur dan mengekspresikan perasaan", "Untuk menceritakan pengalaman pribadi", "Untuk menjelaskan suatu konsep"], correct: "Untuk menghibur dan mengekspresikan perasaan" },
        { question: "Dalam puisi, penggunaan majas bertujuan untuk:", options: ["Membuat teks lebih panjang", "Memberikan makna yang lebih dalam dan menarik", "Mengurangi keindahan bahasa", "Menyajikan fakta secara langsung"], correct: "Memberikan makna yang lebih dalam dan menarik" },
        { question: "Apa yang biasanya tidak terdapat dalam teks puisi?", options: ["Rima", "Irama", "Fakta dan data", "Majas"], correct: "Fakta dan data" }
    ],

    //IPA
    "Besaran dan Satuan" :[
        { question: "Apa itu besaran dan bedakan skalar serta vektor?", options: ["Besaran adalah sesuatu yang dapat diukur.", "Besaran skalar hanya memiliki nilai (contoh: massa).", "Besaran vektor memiliki nilai dan arah (contoh: kecepatan).", "Contoh lain dari skalar adalah suhu, sedangkan contoh lain dari vektor adalah gaya."], correct: "Besaran adalah sesuatu yang dapat diukur." },
        { question: "Sebutkan tiga contoh besaran dasar dalam SI!", options: ["Panjang: meter (m).", "Massa: kilogram (kg).", "Waktu: detik (s).", "Contoh lain: Arus listrik: ampere (A)."], correct: "Panjang: meter (m)." },
        { question: "Cara konversi km/jam ke m/detik? Contoh?", options: ["1 km/jam = 1/3.6 m/s.", "Contoh: 90 km/jam = 25 m/detik.", "Rumus: (km/jam) × (1000 m / 1 km) × (1 jam / 3600 s).", "Jadi, 90 km/jam setara 25 m/detik."], correct: "1 km/jam = 1/3.6 m/s." },
        { question: "Mengapa satuan penting dalam pengukuran?", options: ["Memberi makna pada angka.", "Konsistensi diperlukan untuk perbandingan.", "Tanpa konsistensi, data bisa salah.", "Satuan juga membantu dalam komunikasi ilmiah."], correct: "Memberi makna pada angka." },
        { question: "Apa itu besaran turunan? Contoh?", options: ["Besaran turunan adalah kombinasi besaran dasar.", "Contoh: Kecepatan (m/s).", "Gaya: Newton (N).", "Energi: Joule (J)."], correct: "Besaran turunan adalah kombinasi besaran dasar." }
    ],
    "Pengukuran" :[
        { question: "Apa yang dimaksud dengan pengukuran dalam ilmu pengetahuan?", options: ["Proses menentukan nilai suatu besaran.", "Proses membuat hipotesis.", "Proses mengamati fenomena tanpa angka.", "Proses mencatat data tanpa analisis."], correct: "Proses menentukan nilai suatu besaran." },
        { question: "Apa alat yang umum digunakan untuk mengukur panjang?", options: ["Termometer.", "Mikrometer.", "Stopwatch.", "Neraca."], correct: "Mikrometer." },
        { question: "Mengapa penting untuk menggunakan satuan yang konsisten dalam pengukuran?", options: ["Agar hasil pengukuran lebih menarik.", "Untuk memudahkan perbandingan dan komunikasi.", "Agar pengukuran lebih cepat.", "Untuk mengurangi biaya pengukuran."], correct: "Untuk memudahkan perbandingan dan komunikasi." },
        { question: "Apa yang dimaksud dengan ketelitian dalam pengukuran?", options: ["Kemampuan alat ukur untuk memberikan hasil yang sama berulang kali.", "Kemampuan alat ukur untuk mendeteksi perubahan kecil.", "Kemampuan alat ukur untuk mengukur berbagai jenis besaran.", "Kemampuan alat ukur untuk mengukur waktu."], correct: "Kemampuan alat ukur untuk mendeteksi perubahan kecil." },
        { question: "Apa yang dimaksud dengan kesalahan sistematik dalam pengukuran?", options: ["Kesalahan yang terjadi secara acak dan tidak terduga.", "Kesalahan yang disebabkan oleh alat ukur yang tidak tepat.", "Kesalahan yang dapat dihindari dengan kalibrasi alat.", "Kesalahan yang tidak mempengaruhi hasil pengukuran."], correct: "Kesalahan yang disebabkan oleh alat ukur yang tidak tepat." }
    ],
};
