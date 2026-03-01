export interface Article {
  slug: string;
  title: string;
  titleEn: string;
  description: string;
  category: string;
  categoryLabel: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
}

export const categories = [
  { id: 'diabetes', label: 'Diabetes', emoji: '🩺', color: 'bg-red-100 text-red-700' },
  { id: 'diet', label: 'Diet & Pemakanan', emoji: '🥗', color: 'bg-green-100 text-green-700' },
  { id: 'senaman', label: 'Senaman & Aktif', emoji: '🏃', color: 'bg-blue-100 text-blue-700' },
  { id: 'mental', label: 'Kesihatan Mental', emoji: '🧠', color: 'bg-purple-100 text-purple-700' },
  { id: 'jantung', label: 'Jantung & Darah', emoji: '❤️', color: 'bg-pink-100 text-pink-700' },
  { id: 'tidur', label: 'Tidur & Rehat', emoji: '😴', color: 'bg-indigo-100 text-indigo-700' },
  { id: 'suplemen', label: 'Suplemen & Vitamin', emoji: '💊', color: 'bg-yellow-100 text-yellow-700' },
  { id: 'vaksin', label: 'Vaksin & Imunisasi', emoji: '💉', color: 'bg-teal-100 text-teal-700' },
];

export const articles: Article[] = [
  {
    slug: 'diabetes-malaysia-panduan-lengkap',
    title: 'Diabetes di Malaysia: Panduan Lengkap untuk Pesakit & Keluarga',
    titleEn: 'Diabetes in Malaysia: Complete Guide for Patients & Families',
    description: 'Malaysia adalah antara negara dengan kadar diabetes tertinggi di Asia Tenggara. Ketahui punca, simptom, rawatan dan cara mencegah diabetes dengan berkesan.',
    category: 'diabetes',
    categoryLabel: 'Diabetes',
    readTime: '8 minit',
    date: '2024-11-15',
    image: '🩺',
    content: `
## Diabetes di Malaysia: Fakta Mengejutkan

Malaysia menghadapi krisis diabetes yang serius. Menurut **Kajian Kesihatan dan Morbiditi Kebangsaan (NHMS) 2023**, lebih **3.9 juta orang Malaysia** menghidap diabetes — kira-kira 18.6% penduduk dewasa berumur 18 tahun ke atas.

### Apakah Diabetes?

Diabetes mellitus adalah penyakit kronik di mana paras gula (glukosa) dalam darah terlalu tinggi. Ini berlaku apabila:
- **Pankreas tidak menghasilkan cukup insulin** (Diabetes Jenis 1)
- **Sel-sel badan tidak bertindak balas dengan betul kepada insulin** (Diabetes Jenis 2 — paling biasa)
- **Semasa kehamilan** (Diabetes Gestasi)

### Simptom Diabetes yang Perlu Anda Tahu

Banyak pesakit diabetes tidak sedar mereka menghidapnya. Simptom biasa termasuk:

- 🚿 **Kerap membuang air kecil** (lebih 5-6 kali sehari)
- 💧 **Sentiasa dahaga** walaupun baru minum
- 😴 **Keletihan yang tidak normal**
- 👁️ **Penglihatan kabur**
- 🦶 **Kebas atau kesemutan di kaki dan tangan**
- 🔪 **Luka lambat sembuh**
- ⚖️ **Penurunan berat badan tanpa sebab**

### Faktor Risiko Diabetes di Malaysia

Faktor-faktor yang meningkatkan risiko diabetes:

| Faktor | Penerangan |
|--------|------------|
| Berat badan berlebihan | BMI > 23 meningkatkan risiko |
| Tidak aktif fizikal | Duduk > 8 jam sehari |
| Sejarah keluarga | Gen menyumbang 40-70% risiko |
| Usia > 45 tahun | Risiko meningkat dengan usia |
| Tekanan darah tinggi | Hipertensi berkaitan diabetes |
| Kolesterol tinggi | Sindrom metabolik |

### Cara Mencegah Diabetes

**1. Kawalan Pemakanan**
- Kurangkan gula dan karbohidrat halus (nasi putih, roti putih)
- Makan banyak sayur-sayuran dan buah-buahan
- Pilih karbohidrat kompleks (nasi perang, oat)
- Kurangkan minuman manis — teh tarik, sirap, air bergas

**2. Senaman Teratur**
- Minimum 150 minit senaman sederhana seminggu
- Berjalan kaki 30 minit sehari sudah cukup
- Renang, berbasikal, atau aerobik

**3. Pemantauan Kesihatan**
- Buat ujian gula darah setiap tahun jika usia > 40 tahun
- Sasaran gula darah puasa: **< 5.6 mmol/L**

### Rawatan Diabetes

Jika sudah didiagnosis:
- **Ubat oral** — Metformin adalah pilihan pertama
- **Suntikan insulin** — Untuk kes teruk
- **Perubahan gaya hidup** — Penting walaupun dengan ubat

> ⚕️ **Penting:** Sila berjumpa doktor untuk diagnosis dan rawatan yang sesuai. Jangan ubat sendiri.

### Sumber Maklumat Lanjut
- Kementerian Kesihatan Malaysia (KKM): [moh.gov.my](https://moh.gov.my)
- Institut Kesihatan Umum (IKU): [iku.gov.my](https://iku.gov.my)
- Persatuan Diabetes Malaysia (PDM)
    `.trim(),
  },
  {
    slug: 'diet-sihat-panduan-pemakanan-malaysia',
    title: 'Panduan Diet Sihat untuk Rakyat Malaysia',
    titleEn: 'Healthy Diet Guide for Malaysians',
    description: 'Cara makan sihat yang sesuai dengan selera dan budaya Malaysia. Panduan praktis untuk pengambilan nasi, lauk-pauk, dan snack yang lebih berkhasiat.',
    category: 'diet',
    categoryLabel: 'Diet & Pemakanan',
    readTime: '7 minit',
    date: '2024-11-10',
    image: '🥗',
    content: `
## Makan Sihat Gaya Malaysia

Makan sihat tidak bermaksud tinggalkan nasi atau jangan makan lemak. Ia bermaksud **keseimbangan yang betul** antara semua kumpulan makanan.

### Panduan Pinggan Sihat Malaysia

Kementerian Kesihatan Malaysia mencadangkan formula **"Suku-Suku Separuh"**:

- 🌾 **Suku** — Karbohidrat (nasi, mi, roti)
- 🥩 **Suku** — Protein (daging, ikan, telur, kekacang)
- 🥬 **Separuh** — Sayur-sayuran dan buah-buahan

### 10 Tip Diet Sihat untuk Orang Malaysia

**1. Kurangkan Nasi Putih, Pilih Nasi Perang**
Nasi perang mengandungi serat lebih tinggi, kadar glycemic index (GI) lebih rendah. Cuba ganti separuh nasi putih dengan nasi perang.

**2. Hadkan Minuman Manis**
- Teh tarik satu gelas = 15-20 gram gula
- Milo 3-dalam-1 = 23 gram gula
- Sasaran: Kurang dari 25 gram gula sehari

**3. Makan Ikan Lebih Kerap**
Malaysia diberkati dengan ikan segar yang kaya omega-3:
- Ikan kembung, tenggiri, selar — baik untuk jantung
- Sasaran: 2-3 hidangan ikan seminggu

**4. Jangan Skip Sarapan**
Sarapan yang baik:
- Oatmeal dengan buah-buahan
- Roti gandum dengan telur rebus
- Nasi lemak dengan telur (kurangkan sambal)

**5. Pilih Kaedah Masakan yang Lebih Sihat**
| Kaedah | Kalori | Cadangan |
|--------|--------|----------|
| Goreng | Tinggi | Hadkan |
| Kukus | Rendah | ✅ Terbaik |
| Bakar | Sederhana | ✅ Baik |
| Rebus | Rendah | ✅ Baik |

**6. Minum Air Kosong Secukupnya**
- Sasaran: 8 gelas (2 liter) sehari
- Mulakan pagi dengan segelas air
- Bawa botol air ke mana-mana

**7. Makan Sayur Setiap Hidangan**
Sayur-sayuran tempatan yang berkhasiat:
- **Kangkung** — kaya zat besi
- **Bayam** — vitamin A dan C
- **Bendi** — bantu kawal gula darah
- **Kailan** — kalsium tinggi

**8. Kurangkan Garam**
- Orang Malaysia makan purata 9g garam sehari (2x cadangan WHO)
- Kurangkan penggunaan kicap, sos tiram, perasa
- Cuba herba dan rempah sebagai pengganti

**9. Rancang Makan Tengah Hari**
Bawa bekal dari rumah lebih sihat dan jimat:
- Nasi + lauk + sayur + buah
- Salad ayam/tuna
- Sandwich bijirin penuh

**10. Makan Perlahan-lahan**
Otak ambil masa 20 minit untuk detect kenyang. Kunyah perlahan, nikmati makanan.

### Kalori Harian yang Disyorkan

| Kumpulan | Keperluan Kalori |
|----------|-----------------|
| Lelaki dewasa (sedentari) | 2,000 kcal |
| Lelaki dewasa (aktif) | 2,500 kcal |
| Wanita dewasa (sedentari) | 1,800 kcal |
| Wanita dewasa (aktif) | 2,200 kcal |

> 💡 Gunakan **Kalkulator Kalori Harian** kami untuk pengiraan lebih tepat mengikut berat, tinggi dan tahap aktiviti anda.
    `.trim(),
  },
  {
    slug: 'senaman-terbaik-untuk-orang-malaysia',
    title: 'Senaman Terbaik untuk Orang Malaysia: Panduan Praktis',
    titleEn: 'Best Exercises for Malaysians: Practical Guide',
    description: 'Senaman tidak semestinya mahal atau rumit. Ketahui jenis senaman yang sesuai untuk iklim tropika Malaysia dan cara memulakan rutin senaman yang konsisten.',
    category: 'senaman',
    categoryLabel: 'Senaman & Aktif',
    readTime: '6 minit',
    date: '2024-11-05',
    image: '🏃',
    content: `
## Bergerak untuk Sihat: Panduan Senaman Malaysia

Malaysia mempunyai iklim panas lembap yang boleh menjadi cabaran untuk bersenam di luar. Namun, terdapat banyak pilihan senaman yang sesuai untuk semua peringkat umur.

### Kepentingan Bersenam

Kajian menunjukkan senaman teratur:
- ⬇️ Kurangkan risiko diabetes sebanyak 40%
- ❤️ Kurangkan risiko penyakit jantung
- 🧠 Tingkatkan kesihatan mental dan mood
- ⚖️ Bantu kawalan berat badan
- 💪 Perkukuh tulang dan otot

### Sasaran Senaman WHO (Disyorkan)

| Kumpulan Umur | Senaman Sederhana | Senaman Kuat |
|---------------|------------------|--------------|
| 18-64 tahun | 150-300 min/minggu | 75-150 min/minggu |
| 65+ tahun | 150-300 min/minggu | 75-150 min/minggu |
| Kanak-kanak 5-17 | 60 min/hari | - |

### Senaman Popular di Malaysia

**1. Jogging/Berjalan Kaki 🚶**
- Percuma, boleh buat di mana-mana
- Elakkan waktu tengah hari (11am-3pm)
- Cadangan: Awal pagi (6-8am) atau petang (5-7pm)
- Lokasi: Taman-taman awam, stadium, pantai

**2. Badminton 🏸**
- Sukan paling popular di Malaysia
- Burn: 400-600 kalori/jam
- Latihan jantung, refleks dan koordinasi
- Dewan badminton boleh sewa RM15-30/jam

**3. Berbasikal 🚲**
- Pilihan "low-impact" — sesuai semua umur
- Park Connector di bandar-bandar besar
- Burn: 300-500 kalori/jam

**4. Renang 🏊**
- Sesuai untuk isu sendi dan sakit belakang
- Lengkap latihan seluruh badan
- Kolam awam dari RM5-10/sesi

**5. Yoga & Pilates 🧘**
- Stres, fleksibiliti, kekuatan teras
- Studio atau video YouTube percuma
- Sesuai untuk sesiapa sahaja

**6. HIIT (High Intensity Interval Training) ⚡**
- Maksimum hasil dalam masa minimum
- 20-30 minit sudah cukup
- Boleh buat di rumah tanpa peralatan

### Program Permulaan untuk Pemula

**Minggu 1-2: Mulakan Perlahan**
- Isnin: Jalan kaki 20 minit
- Rabu: Jalan kaki 20 minit
- Jumaat: Jalan kaki 20 minit

**Minggu 3-4: Tingkatkan Intensiti**
- Isnin: Jog/jalan selang-seli 25 minit
- Rabu: Senaman ringan di rumah 20 minit
- Jumaat: Jog/jalan 25 minit
- Sabtu: Badminton atau aktiviti riadah

**Selepas 1 Bulan:**
Tambah intensiti dan masa secara beransur-ansur.

### Tip Keselamatan Bersenam di Malaysia

- ☀️ Elak bersenam dalam panas terik — risiko heat stroke
- 💧 Minum air sebelum, semasa dan selepas bersenam
- 👟 Pakai kasut sukan yang sesuai
- 🌡️ Henti jika pening, sesak nafas atau dada sakit
- 👨‍⚕️ Dapatkan kebenaran doktor jika ada masalah kesihatan
    `.trim(),
  },
  {
    slug: 'kesihatan-mental-malaysia',
    title: 'Kesihatan Mental di Malaysia: Buang Stigma, Dapatkan Bantuan',
    titleEn: 'Mental Health in Malaysia: Break the Stigma, Get Help',
    description: 'Kesihatan mental adalah sama pentingnya dengan kesihatan fizikal. Ketahui tentang tekanan, kemurungan dan cara mencari pertolongan di Malaysia.',
    category: 'mental',
    categoryLabel: 'Kesihatan Mental',
    readTime: '9 minit',
    date: '2024-10-28',
    image: '🧠',
    content: `
## Kesihatan Mental: Topik yang Perlu Kita Bincang

Malaysia menghadapi krisis kesihatan mental yang semakin serius. Menurut **NHMS 2023**:
- 1 dalam 5 orang Malaysia mengalami masalah kesihatan mental
- Kadar kemurungan: 12.8% (dewasa)
- Kadar keresahan: 10.7% (dewasa)
- Hanya ~10% yang mendapatkan rawatan profesional

### Jenis Masalah Kesihatan Mental Biasa

**1. Kemurungan (Depression)**
Bukan sekadar "sedih" — ini penyakit perubatan:
- Perasaan sedih, kosong atau putus asa berterusan
- Hilang minat dalam aktiviti yang disukai
- Perubahan selera makan dan tidur
- Sukar menumpukan perhatian
- Fikiran tentang kematian atau bunuh diri

**2. Keresahan (Anxiety)**
- Bimbang yang berlebihan dan sukar dikawal
- Degupan jantung kencang
- Sukar tidur
- Ketegangan otot
- Serangan panik

**3. Tekanan (Stress)**
Tekanan normal dalam kehidupan, tapi:
- Tekanan kronik boleh merosakkan kesihatan
- Tekanan kerja, kewangan, hubungan
- Burnout di tempat kerja semakin biasa

**4. PTSD (Post-Traumatic Stress Disorder)**
- Selepas mengalami peristiwa traumatik
- Mimpi ngeri, flashback
- Mengelak tempat/situasi tertentu

### Tanda-tanda Anda Perlu Bantuan

Dapatkan pertolongan jika:
- Gejala berterusan lebih 2 minggu
- Mengganggu kerja atau hubungan
- Menggunakan alkohol/dadah untuk cope
- Ada fikiran menyakiti diri sendiri

### Cara Jaga Kesihatan Mental Anda

**1. Hubungan Sosial**
- Jaga silaturrahim dengan keluarga dan rakan
- Bergabung dengan komuniti atau persatuan
- Luangkan masa berkualiti bersama orang tersayang

**2. Aktiviti Fizikal**
- Senaman lepaskan endorphin — "hormon bahagia"
- Walaupun 20 minit jalan kaki boleh ubah mood

**3. Tidur yang Cukup**
- 7-9 jam sehari untuk dewasa
- Tidur teratur membantu regulasi emosi

**4. Mindfulness & Meditasi**
- Teknik pernafasan: 4-7-8 (tarik 4 saat, tahan 7, hembus 8)
- Aplikasi: Headspace, Calm, Insight Timer

**5. Kurangkan Media Sosial**
- Perbandingan sosial memburukkan kemurungan
- Hadkan masa skrin sebelum tidur

**6. Cari Tujuan (Purpose)**
- Agama, komuniti, kerja bermakna
- Bantu orang lain — meningkatkan well-being

### Sumber Bantuan di Malaysia

| Perkhidmatan | Nombor | Waktu |
|-------------|--------|-------|
| **Befrienders KL** | 03-7627 2929 | 24 jam |
| **MIASA Helpline** | 1-800-82-0066 | 9am-5pm |
| **MENTARI KKM** | 1-800-888-728 | 24 jam |
| **Talian Kasih** | 15999 | 24 jam |

**Hospital Kerajaan dengan Unit Psikiatri:**
- Hospital Kuala Lumpur (HKL)
- Hospital Universiti Kebangsaan Malaysia (HUKM)
- Hospital Sultanah Bahiyah, Alor Setar
- Hospital Raja Permaisuri Bainun, Ipoh

> 🆘 **Jika anda atau seseorang dalam bahaya segera**, hubungi **999** atau pergi ke hospital terdekat.
    `.trim(),
  },
  {
    slug: 'tekanan-darah-tinggi-hipertensi',
    title: 'Tekanan Darah Tinggi (Hipertensi): Pembunuh Senyap Malaysia',
    titleEn: 'High Blood Pressure (Hypertension): Malaysia\'s Silent Killer',
    description: 'Hampir 1 daripada 3 orang dewasa Malaysia menghidap hipertensi. Ketahui cara mengesan, mencegah dan mengawal tekanan darah tinggi.',
    category: 'jantung',
    categoryLabel: 'Jantung & Darah',
    readTime: '7 minit',
    date: '2024-10-20',
    image: '❤️',
    content: `
## Tekanan Darah Tinggi: Ancaman Senyap

Hipertensi dikenali sebagai "pembunuh senyap" kerana **kebanyakan pesakit tidak merasai simptom** — sehingga berlaku komplikasi serius.

**Statistik Malaysia (NHMS 2023):**
- 30.5% dewasa menghidap hipertensi
- Hanya 40.5% daripada pesakit hipertensi sedar mereka menghidapnya
- Sebab utama strok dan penyakit jantung

### Apakah Tekanan Darah Normal?

| Kategori | Sistolik (mmHg) | Diastolik (mmHg) |
|---------|----------------|------------------|
| **Normal** | < 120 | < 80 |
| **Tinggi Normal** | 120-129 | < 80 |
| **Hipertensi Gred 1** | 130-139 | 80-89 |
| **Hipertensi Gred 2** | ≥ 140 | ≥ 90 |
| **Krisis Hipertensi** | > 180 | > 120 |

> 💡 Gunakan **Pemeriksa Kategori Tekanan Darah** kami di halaman Kalkulator!

### Simptom Hipertensi

Kebanyakan masa tiada simptom. Kadang-kadang:
- Sakit kepala (terutama bahagian belakang)
- Pening atau vertigo
- Penglihatan berpinar
- Sesak nafas
- Mimisan

**Simptom KECEMASAN — Pergi Hospital Segera:**
- Sakit kepala tiba-tiba yang teruk
- Penglihatan kabur mendadak
- Kelemahan separuh badan
- Sukar bercakap

### Faktor Risiko Hipertensi

**Faktor yang boleh dikawal:**
- Kelebihan berat badan/obesiti
- Pengambilan garam berlebihan
- Kurang bersenam
- Merokok
- Minum alkohol berlebihan
- Tekanan/stress kronik

**Faktor yang tidak boleh dikawal:**
- Umur (risiko meningkat lepas 45 tahun)
- Jantina (lelaki lebih tinggi risiko sebelum menopaus)
- Sejarah keluarga
- Bangsa (kadar lebih tinggi pada Melayu dan India)

### Cara Mengawal Tekanan Darah

**Perubahan Gaya Hidup (Boleh Turunkan 5-20 mmHg):**

1. **Kurangkan Garam (Sodium)**
   - Hadkan < 2,300 mg sodium sehari (1 sudu teh garam)
   - Elak makanan proses: mi segera, keropok, sardin tin
   - Baca label pemakanan

2. **Diet DASH (Dietary Approaches to Stop Hypertension)**
   - Banyak buah, sayur, bijirin penuh
   - Produk tenusu rendah lemak
   - Ikan, kacang, biji-bijian
   - Kurangkan daging merah dan gula

3. **Senaman Aerobik**
   - 30 minit sederhana, 5 hari seminggu
   - Turunkan sistolik 5-8 mmHg

4. **Berhenti Merokok**
   - Setiap rokok naikkan tekanan darah sementara
   - Merokok merosakkan saluran darah

5. **Kurangkan Tekanan**
   - Meditasi, yoga, pernafasan dalam
   - Tidur secukupnya (7-9 jam)

### Pemantauan di Rumah

Beli mesin tekanan darah (≈ RM80-200):
- Ukur pada masa sama setiap hari
- Duduk rehat 5 minit sebelum ukur
- Ukur 2-3 kali, ambil purata
- Rekod bacaan untuk tunjuk doktor

### Ubat Hipertensi

Jika perubahan gaya hidup tidak cukup:
- **ACE inhibitors** (Enalapril, Perindopril)
- **ARBs** (Losartan, Valsartan)
- **Calcium Channel Blockers** (Amlodipine)
- **Beta-blockers** (Atenolol, Bisoprolol)
- **Diuretics** (Hydrochlorothiazide)

> ⚕️ Doktor akan pilih ubat yang paling sesuai berdasarkan keadaan anda. **Jangan henti ubat tanpa nasihat doktor.**
    `.trim(),
  },
  {
    slug: 'kolesterol-tinggi-cara-kawal',
    title: 'Kolesterol Tinggi: Apa yang Perlu Anda Tahu',
    titleEn: 'High Cholesterol: What You Need to Know',
    description: 'Kolesterol tinggi adalah faktor risiko utama penyakit jantung. Pelajari perbezaan antara kolesterol baik dan jahat, dan cara mengawalnya.',
    category: 'jantung',
    categoryLabel: 'Jantung & Darah',
    readTime: '6 minit',
    date: '2024-10-15',
    image: '🫀',
    content: `
## Kolesterol: Kawan atau Musuh?

Ramai keliru tentang kolesterol. Hakikatnya, **kolesterol bukan semua buruk** — badan anda perlukan kolesterol untuk fungsi normal.

### Jenis Kolesterol

**LDL (Low-Density Lipoprotein) — "Kolesterol Jahat"**
- Membawa kolesterol dari hati ke seluruh badan
- Berlebihan boleh terkumpul dalam arteri (plak)
- Meningkatkan risiko serangan jantung dan strok
- Sasaran: **< 3.0 mmol/L** (umum), **< 1.8 mmol/L** (pesakit jantung)

**HDL (High-Density Lipoprotein) — "Kolesterol Baik"**
- Membawa kolesterol dari arteri kembali ke hati
- Melindungi jantung
- Lebih tinggi = lebih baik
- Sasaran: **> 1.0 mmol/L** (lelaki), **> 1.2 mmol/L** (wanita)

**Trigliserida**
- Jenis lemak dalam darah
- Tinggi apabila makan banyak gula, alkohol, karbohidrat halus
- Sasaran: **< 1.7 mmol/L**

**Total Kolesterol**
- Sasaran: **< 5.0 mmol/L**

### Sebab Kolesterol Tinggi

- ❌ Makan lemak tepu berlebihan (santan, daging berlemak, mentega)
- ❌ Lemak trans (makanan goreng, pastri komersial)
- 🧬 Genetik — hiperlipidemia keluarga
- 🪑 Kurang bersenam
- 🚬 Merokok (turunkan HDL)
- ⚖️ Obesiti
- 🩺 Keadaan perubatan (hipotiroidisme, diabetes)

### Makanan untuk Kawal Kolesterol

**Makanan yang Turunkan LDL:**
- 🌾 Oat dan bijirin penuh — beta-glucan
- 🫘 Kekacang — lentil, kacang hijau, kacang hitam
- 🥑 Avokado — lemak tidak tepu
- 🐟 Ikan berlemak — omega-3
- 🫒 Minyak zaitun — oleic acid
- 🥜 Kacang — walnut, almond
- 🍎 Buah-buahan serat tinggi — epal, pear, berri

**Makanan yang Naikkan LDL (Hadkan):**
- 🥩 Daging merah berlemak
- 🥛 Produk tenusu penuh lemak
- 🌴 Minyak kelapa sawit dan santan (guna secara sederhana)
- 🍩 Kek, biskut, pastri komersial
- 🍟 Makanan goreng

### Ujian Darah: Lipid Profile

Bila perlu buat:
- Usia ≥ 20 tahun: setiap 5 tahun
- Ada faktor risiko: setiap 1-2 tahun
- Sedang rawat: setiap 3-6 bulan

Ujian dilakukan selepas **puasa 9-12 jam**.

### Rawatan

**Perubahan gaya hidup dahulu (3-6 bulan):**
- Diet kurang lemak tepu
- Senaman aerobik
- Berhenti merokok
- Turunkan berat badan

**Ubat (jika perlu):**
- **Statin** — Simvastatin, Atorvastatin, Rosuvastatin
- **Fibrates** — Fenofibrate
- **Ezetimibe** — untuk kolesterol dari makanan

> ✅ Ujian lipid profil boleh dibuat di klinik kerajaan (percuma untuk pesakit tersarai) atau klinik swasta (RM30-80).
    `.trim(),
  },
  {
    slug: 'tidur-yang-cukup-kepentingan',
    title: 'Tidur yang Cukup: Mengapa Anda Perlu 7-9 Jam Setiap Malam',
    titleEn: 'Getting Enough Sleep: Why You Need 7-9 Hours Every Night',
    description: 'Kekurangan tidur bukan sahaja buat anda mengantuk — ia boleh menyebabkan diabetes, jantung, obesiti dan masalah kesihatan serius lain.',
    category: 'tidur',
    categoryLabel: 'Tidur & Rehat',
    readTime: '5 minit',
    date: '2024-10-08',
    image: '😴',
    content: `
## Tidur: Pelaburan Kesihatan Terbaik Anda

Malaysia adalah antara negara dengan rakyat yang paling kurang tidur di Asia. Kajian mendapati purata orang Malaysia tidur **6.5 jam** sehari — kurang dari saranan 7-9 jam.

### Apa yang Berlaku Semasa Tidur?

Tidur bukan sekadar rehat. Semasa tidur:
- 🧠 Otak memproses dan menyimpan memori
- 🔧 Badan membaiki tisu dan sel
- 💪 Hormon pertumbuhan dirembes
- 🛡️ Sistem imun diperkukuh
- ❤️ Tekanan darah turun dan jantung berehat

### Fasa Tidur

**NREM (Non-Rapid Eye Movement):**
- Fasa 1-3 semakin dalam
- Fasa 3 (deep sleep) — paling penting untuk pemulihan

**REM (Rapid Eye Movement):**
- Mimpi berlaku di sini
- Penting untuk emosi dan kreativiti
- Berlaku 90 minit selepas tidur

Setiap kitaran ≈ 90 minit. Perlu 4-6 kitaran semalam.

### Kesan Kurang Tidur

**Jangka Pendek (1-3 hari):**
- Sukar fokus dan membuat keputusan
- Mood buruk dan mudah marah
- Koordinasi lemah — risiko kemalangan
- Sistem imun lemah

**Jangka Panjang (kronik):**
- Obesiti (mengganggu hormon leptin dan ghrelin)
- Diabetes Jenis 2
- Penyakit kardiovaskular
- Kemurungan dan keresahan
- Ingatan lemah

### Keperluan Tidur Mengikut Umur

| Kumpulan Umur | Tidur Diperlukan |
|---------------|-----------------|
| Bayi (0-12 bulan) | 14-17 jam |
| Kanak-kanak (3-5 tahun) | 10-13 jam |
| Kanak-kanak (6-12 tahun) | 9-11 jam |
| Remaja (13-17 tahun) | 8-10 jam |
| Dewasa (18-64 tahun) | 7-9 jam |
| Warga emas (65+) | 7-8 jam |

### Tip Tidur yang Lebih Baik

**Sebelum Tidur:**
1. Tutup skrin telefon/TV 1 jam sebelum tidur
2. Bilik gelap dan sejuk (18-22°C sesuai)
3. Waktu tidur dan bangun yang konsisten
4. Elak kafein selepas jam 2pm
5. Mandi air suam 1-2 jam sebelum tidur

**Persekitaran Tidur:**
- Tilam dan bantal yang selesa
- Tutup bunyi bising (earplug atau white noise)
- Aroma lavender boleh bantu rileks

**Elak:**
- Minum banyak cecair sebelum tidur
- Senaman intensif selepas 8pm
- Makan berat dekat waktu tidur

### Insomnia: Bila Perlu Dapatkan Bantuan

Insomnia jika:
- Sukar tidur > 3 malam seminggu
- Berterusan > 3 bulan
- Mengganggu fungsi siang hari

Rawatan tanpa ubat: **CBT-I (Cognitive Behavioural Therapy for Insomnia)** — berkesan lebih baik dari ubat tidur jangka panjang.

> 😴 **Pro tip:** "Sleep debt" tidak boleh dibayar balik sepenuhnya. Tidur konsisten setiap malam lebih baik dari tidur lama hujung minggu.
    `.trim(),
  },
  {
    slug: 'kepentingan-air-kesihatan',
    title: 'Air dan Kesihatan: Berapa Banyak yang Anda Perlu Minum?',
    titleEn: 'Water and Health: How Much Do You Need to Drink?',
    description: 'Air adalah nutrien paling penting dalam badan. Ketahui berapa banyak air yang anda perlukan, tanda-tanda dehidrasi dan manfaat minum air yang mencukupi.',
    category: 'diet',
    categoryLabel: 'Diet & Pemakanan',
    readTime: '4 minit',
    date: '2024-09-30',
    image: '💧',
    content: `
## Air: Sumber Kehidupan yang Sering Diabaikan

Badan manusia terdiri daripada **60-70% air**. Setiap sel, tisu dan organ memerlukan air untuk berfungsi dengan baik.

### Fungsi Air dalam Badan

- 🌡️ **Regulasi suhu** — peluh menyejukkan badan
- 🚽 **Penyingkiran sisa** — melalui air kencing dan najis
- 🦴 **Pelincir sendi** — cecair sinovial
- 📦 **Pengangkutan nutrien** — dalam darah dan limfa
- 🧠 **Fungsi otak** — dehidrasi ringan pun jejas tumpuan
- 💊 **Penghadaman** — air liur dan cecair perut

### Berapa Banyak Air yang Anda Perlukan?

Jawapan berbeza mengikut faktor:

**Panduan Am:**
- Dewasa: **8 gelas (2 liter)** sehari
- Lelaki aktif: 3.7 liter (termasuk dari makanan)
- Wanita aktif: 2.7 liter

**Faktor yang Tingkatkan Keperluan:**
- Iklim panas dan lembap (Malaysia!)
- Bersenam atau kerja fizikal
- Demam, cirit-birit, muntah
- Hamil atau menyusu

### Tanda-tanda Dehidrasi

**Ringan-Sederhana:**
- 🟡 Air kencing berwarna kuning pekat
- 👄 Mulut kering
- 😵 Pening atau sakit kepala
- 😰 Penat tidak normal
- 🧠 Sukar fokus

**Teruk (Perlu Rawatan):**
- 😵‍💫 Keliru atau hilang akal
- 💓 Degupan jantung kencang
- Tiada air kencing > 8 jam
- Mata dan kulit cekung

### Periksa Warna Air Kencing Anda

| Warna | Bermaksud |
|-------|-----------|
| Jernih/Kuning pucat | Terhidrat dengan baik ✅ |
| Kuning cerah | Normal ✅ |
| Kuning pekat | Minum lebih air |
| Oren/Coklat | Dehidrasi — minum segera |
| Merah/Merah jambu | Darah — pergi doktor |

### Mitos tentang Minum Air

❌ **"Kopi dan teh dehidrasikan"** — Tidak tepat. Kafein ringan, tapi masih menyumbang cecair.

❌ **"Kena minum 8 gelas tepat"** — Bergantung pada badan, aktiviti dan cuaca.

❌ **"Air mineral lebih baik dari air paip"** — Air paip Malaysia selamat diminum (ikut standard WHO).

### Cara Minum Lebih Air

1. 🌅 Mulakan pagi dengan segelas air sebelum kopi
2. 🍶 Bawa botol air ke mana-mana
3. 📱 Set peringatan pada telefon
4. 🥤 Minum segelas air sebelum setiap hidangan
5. 🫖 Pilih air kosong berbanding minuman manis
6. 🥗 Makan buah-buahan dan sayuran berair (tembikai, timun, oren)

### Air kosong vs Minuman lain

| Minuman | Kalori | Gula | Terhidrat? |
|---------|--------|------|------------|
| Air kosong | 0 | 0 | ✅ Terbaik |
| Air kelapa | 45 | Semula jadi | ✅ Baik |
| Teh hijau | 0-2 | 0 | ✅ Baik |
| Jus buah | 100-150 | Tinggi | ⚠️ Sederhana |
| Teh tarik | 120-180 | Tinggi | ⚠️ Hadkan |
| Air bergas | 0 | 0 | ✅ Ok |

> 💧 **Tip:** Jika air kencing anda berwarna kuning pucat, anda sudah terhidrat dengan baik!
    `.trim(),
  },
  {
    slug: 'suplemen-vitamin-yang-perlu',
    title: 'Suplemen dan Vitamin: Yang Mana Anda Benar-benar Perlukan?',
    titleEn: 'Supplements and Vitamins: Which Ones Do You Really Need?',
    description: 'Industri suplemen bernilai berbillion ringgit. Ketahui suplemen mana yang ada bukti saintifik dan mana yang hanya buang wang.',
    category: 'suplemen',
    categoryLabel: 'Suplemen & Vitamin',
    readTime: '7 minit',
    date: '2024-09-20',
    image: '💊',
    content: `
## Suplemen: Fakta vs Hype

Orang Malaysia berbelanja berbillion ringgit untuk suplemen setiap tahun. Tapi adakah ia benar-benar perlu? Jawapannya: **bergantung**.

Prinsip asas: **Makanan sebenar lebih baik dari suplemen**. Tapi dalam kes tertentu, suplemen membantu.

### Suplemen dengan Bukti Kukuh

**1. Vitamin D**

Paradoks Malaysia: Walaupun cerah sepanjang tahun, banyak orang Malaysia kekurangan Vitamin D.

Mengapa:
- Waktu dalam bangunan berjam-jam (pejabat, mall)
- Pakaian menutup kulit (terutama wanita Muslim)
- Kulit gelap kurang efisien hasilkan Vitamin D dari sinar matahari

Simptom kekurangan: Tulang lemah, mudah sakit, penat, mood rendah.

Dos: **1,000-2,000 IU sehari** untuk dewasa. Ujian darah boleh confirm tahap anda.

**2. Omega-3 (Fish Oil)**

Manfaat terbukti untuk:
- Triglyceride tinggi
- Inflamasi
- Kesihatan otak
- Kemurungan ringan

Sumber semula jadi lebih baik: Ikan kembung, sardin, salmon, makarel.
Dos suplemen: **1,000-2,000 mg EPA+DHA sehari**.

**3. Vitamin B12**

Siapa perlukan:
- Vegetarian/vegan (B12 hanya dalam produk haiwan)
- Warga emas (penyerapan berkurangan dengan usia)
- Pengguna Metformin (ubat diabetes)

**4. Asid Folik (Folate)**

Wajib untuk:
- Wanita yang merancang hamil atau hamil
- **400-800 mcg sehari** 3 bulan sebelum dan semasa trimester pertama
- Mencegah kecacatan neural tube pada bayi

**5. Zat Besi (Iron)**

Siapa perlukan:
- Wanita haid yang berat
- Pesakit anemia
- Vegetarian
- Ibu hamil

Jangan ambil tanpa ujian darah — zat besi berlebihan merbahaya.

**6. Magnesium**

Ramai orang tidak cukup magnesium dari makanan.
Membantu untuk: Tidur, kekejangan otot, tekanan darah, stress.
Dos: **200-400 mg sebelum tidur**.

### Suplemen Popular tapi Bukti Lemah

| Suplemen | Status |
|----------|--------|
| Multi-vitamin umum | Tidak perlu jika diet seimbang |
| Collagen oral | Penyerapan meragukan |
| Biotin (rambut/kuku) | Hanya berkesan jika kekurangan |
| Vitamin C megadose | 500mg sudah cukup |
| "Detox" produk | Saintifik tidak terbukti |
| "Slimming" produk | Kebanyakan tidak berkesan atau berbahaya |

### Risiko Suplemen

Suplemen **bukan tanpa risiko**:
- Overdos vitamin larut lemak (A, D, E, K) — toksik
- Interaksi dengan ubat-ubatan
- Produk tidak berlesen boleh ada bahan berbahaya
- Boleh tertangguh rawatan yang sebenar

### Cara Membeli Suplemen yang Selamat

✅ **Cari sijil BPFK/MDA** — Badan Pengawalan Farmaseutikal Kebangsaan
✅ **Semak laman quest.pharmacy.gov.my** untuk produk berdaftar
✅ **Elak claims melampau** — "sembuh kanser", "turunkan 10kg seminggu"
✅ **Beli dari farmasi berlesen** — Guardian, Caring Pharmacy, Watson

> 💊 **Pesanan doktor:** Sebelum mulakan suplemen baru, terutama jika ada penyakit kronik atau ambil ubat, berbincanglah dengan doktor atau farmasis anda.
    `.trim(),
  },
  {
    slug: 'vaksin-penting-untuk-dewasa',
    title: 'Vaksin untuk Dewasa: Senarai Lengkap yang Anda Perlukan',
    titleEn: 'Vaccines for Adults: Complete List of What You Need',
    description: 'Vaksin bukan hanya untuk kanak-kanak. Ketahui senarai lengkap vaksin yang disyorkan untuk dewasa Malaysia, termasuk booster yang mungkin anda tertinggal.',
    category: 'vaksin',
    categoryLabel: 'Vaksin & Imunisasi',
    readTime: '6 minit',
    date: '2024-09-10',
    image: '💉',
    content: `
## Vaksin Dewasa: Perlindungan yang Sering Diabaikan

Ramai yang ingat vaksin hanya untuk kanak-kanak. Hakikatnya, **dewasa juga perlukan vaksin** — sama ada booster atau vaksin baru.

### Kenapa Dewasa Perlu Vaksin?

- Imuniti dari vaksin kanak-kanak boleh pudar
- Ada vaksin yang hanya disyorkan untuk dewasa
- Perlindungan orang sekeliling yang tidak boleh divaksin
- Perjalanan ke negara berisiko

### Vaksin Wajib & Disyorkan untuk Dewasa Malaysia

**1. Influenza (Selsema Musim) 🤧**
- Siapa: **Semua dewasa** — terutama warga emas, hamil, penyakit kronik
- Kekerapan: **Setiap tahun** (strain virus berubah)
- Di mana: Klinik swasta, farmasi
- Kos: RM45-80

**2. Covid-19 📋**
- Booster disyorkan terutama untuk warga emas dan imuno-kompromis
- Semak cadangan terkini KKM

**3. Hepatitis B 🔴**
- Siapa: Dewasa yang **tidak pernah divaksin**
- Jadual: 3 dos — bulan 0, 1, 6
- Penting untuk: Pekerja kesihatan, hubungan seksual berisiko tinggi
- Ujian darah boleh semak status imuniti anda

**4. HPV (Human Papillomavirus) 🩺**
- Program kerajaan: Perempuan darjah 1 & 2
- Swasta: Boleh ambil sehingga umur 45 tahun
- Mencegah kanser serviks (jenis 16, 18)
- Siri 2 dos

**5. Td/Tdap (Tetanus, Difteria, Pertussis) 💪**
- Booster Td: Setiap **10 tahun**
- Tdap: Satu dos untuk dewasa yang tidak pernah ambil Tdap
- Penting jika bakal menjadi ibu bapa baru — lindungi bayi

**6. MMR (Campak, Rubella, Beguk) 🧬**
- Semak rekod vaksin kanak-kanak
- Jika tidak divaksin atau tidak pasti: 1-2 dos
- Penting untuk wanita yang merancang hamil

**7. Varicella (Cacar Air) 🌟**
- Jika tidak pernah kena cacar air dan tidak divaksin
- 2 dos, selang 4-8 minggu

**8. Pneumococcal (Jangkitan Paru-paru) 🫁**
- Disyorkan untuk: Usia ≥ 65 tahun, perokok, penyakit kronik
- PCV13 + PPSV23

**9. Hepatitis A 🌏**
- Untuk: Pelancong ke negara berisiko, pekerja makanan
- 2 dos

**10. Meningococcal 🧠**
- Untuk: Jemaah haji & umrah — **wajib** sebelum ke Saudi Arabia
- Satu dos, sah 5 tahun

### Vaksin untuk Jemaah Haji/Umrah

Wajib sebelum keberangkatan:
- ✅ **Meningococcal ACWY** — Wajib (Kerajaan Saudi Arabia)
- ✅ **Influenza** — Amat disyorkan
- ✅ **Covid-19** — Semak keperluan terkini

### Di Mana Mendapatkan Vaksin Dewasa di Malaysia?

**Percuma (klinik kerajaan):**
- Influenza untuk warga emas 60+ dan mereka dengan penyakit kronik
- Vaksin dalam program imunisasi kebangsaan

**Berbayar (klinik swasta):**
- Hampir semua vaksin tersedia
- Kos bergantung pada jenis vaksin: RM45 - RM500+

**Pusat Vaksin Swasta:**
- Pantai Holdings, KPJ, Ramsay Sime Darby
- Klinik-klinik swasta panel

### Rekod Vaksin Anda

- Simpan buku rekod vaksin kanak-kanak
- Muat turun app **MySejahtera** — ada rekod vaksin Covid-19
- Tanya klinik kerajaan untuk semak rekod lama

> 💉 **Ingat:** Vaksin adalah antara intervensi kesihatan awam yang paling berkesan dalam sejarah. Satu dos boleh lindungi anda dan orang sekeliling anda.
    `.trim(),
  },
  {
    slug: 'bmi-berat-badan-sihat',
    title: 'BMI dan Berat Badan Sihat: Panduan untuk Rakyat Malaysia',
    titleEn: 'BMI and Healthy Weight: Guide for Malaysians',
    description: 'Malaysia menghadapi epidemi obesiti. Ketahui cara mengira BMI anda, apa yang ia bermaksud dan langkah-langkah praktikal untuk mencapai berat badan sihat.',
    category: 'diet',
    categoryLabel: 'Diet & Pemakanan',
    readTime: '5 minit',
    date: '2024-08-25',
    image: '⚖️',
    content: `
## Berat Badan Sihat: Bukan Sekadar Penampilan

Obesiti adalah masalah kesihatan awam yang serius di Malaysia. **50.1%** orang dewasa Malaysia kelebihan berat badan atau obes (NHMS 2023).

### Apakah BMI?

BMI (Body Mass Index / Indeks Jisim Badan) adalah cara mudah untuk menilai sama ada berat badan anda sesuai dengan tinggi badan anda.

**Formula:**

    BMI = Berat (kg) / (Tinggi dalam meter)²

**Contoh:** Berat 70kg, tinggi 1.65m

    BMI = 70 / (1.65)² = 70 / 2.7225 = 25.7

> 💡 Gunakan **Kalkulator BMI** kami untuk pengiraan automatik!

### Kategori BMI (Asian/Malaysia Standard)

| BMI | Kategori | Risiko Kesihatan |
|-----|----------|-----------------|
| < 18.5 | Berat kurang (Underweight) | Sederhana |
| 18.5 - 22.9 | Normal | Rendah |
| 23.0 - 27.4 | Berat lebih (Overweight) | Meningkat |
| 27.5 - 34.9 | Obes I | Tinggi |
| ≥ 35.0 | Obes II | Sangat Tinggi |

**Nota:** Orang Asia mempunyai risiko kesihatan lebih tinggi pada BMI yang sama berbanding orang Eropah. Itulah sebab nilai rujukan Asian lebih rendah.

### Had BMI

BMI mempunyai limitasi:
- Tidak bezakan lemak dari otot (ahli bina badan BMI "tinggi" tapi sihat)
- Tidak ambil kira taburan lemak di badan
- Tidak sesuai untuk kanak-kanak, warga emas, hamil

**Ukuran lain yang berguna:**
- **Lilitan pinggang** — ≤ 90cm (lelaki) dan ≤ 80cm (wanita) adalah sasaran
- **Nisbah pinggang-pinggul** — < 0.9 (lelaki), < 0.85 (wanita)

### Cara Mencapai Berat Badan Sihat

**Prinsip Asas: Defisit Kalori**
- Untuk turun berat: Makan kurang dari yang anda bakar
- 1 kg lemak ≈ 7,700 kalori
- Defisit 500 kalori/hari = turun ≈ 0.5kg/minggu

**Cara Sihat (Bukan Crash Diet):**

1. **Mulakan perlahan** — kurangkan 200-300 kalori dahulu
2. **Tambah protein** — rasa kenyang lebih lama, jimat otot
3. **Banyak sayur** — rendah kalori, tinggi serat dan nutrien
4. **Bersenam** — tambah bakar kalori, bina otot
5. **Tidur cukup** — kurang tidur = lebih lapar (ghrelin naik)
6. **Kurang tekanan** — cortisol tinggi = simpan lemak perut

### Elak Jebakan Diet Popular

❌ **Juice cleanse** — kehilangan otot, bukan lemak
❌ **Skip makan malam** — boleh makan berlebihan kemudian
❌ **Ubat kurus tanpa preskripsi** — bahaya dan tidak berkesan
❌ **Diet sangat rendah kalori** (<800 kcal)  — merbahaya

### Bila Perlu Dapatkan Bantuan Profesional

- BMI ≥ 30 — pertimbangkan program pengurusan berat badan di hospital
- Ada masalah kesihatan berkaitan obesiti
- Telah cuba bermacam cara tapi tidak berjaya
- Pertimbangkan pembedahan bariatrik jika BMI ≥ 37.5

> ✅ Penurunan berat badan 5-10% sahaja sudah memberikan manfaat kesihatan yang signifikan. Mulakan dengan matlamat kecil yang boleh dicapai!
    `.trim(),
  },
  {
    slug: 'kesihatan-wanita-malaysia',
    title: 'Panduan Kesihatan Wanita Malaysia: Saringan yang Perlu Dilakukan',
    titleEn: 'Malaysian Women\'s Health Guide: Essential Health Screenings',
    description: 'Panduan komprehensif kesihatan wanita Malaysia termasuk saringan kanser serviks, mammogram, kesihatan reproduktif dan menopaus.',
    category: 'diet',
    categoryLabel: 'Kesihatan Am',
    readTime: '8 minit',
    date: '2024-08-10',
    image: '🌸',
    content: `
## Kesihatan Wanita: Jaga Diri, Jaga Keluarga

Wanita Malaysia sering mengutamakan kesihatan keluarga sebelum diri sendiri. Tapi ingat: **anda perlu sihat dahulu untuk jaga orang lain**.

### Saringan Kesihatan Penting untuk Wanita

**1. Pap Smear (Saringan Kanser Serviks)**

Kanser serviks adalah kanser ke-3 paling biasa pada wanita Malaysia.

- **Siapa:** Wanita aktif seksual, bermula umur 25 tahun
- **Kekerapan:** Setiap 3 tahun jika normal
- **Di mana:** Klinik kesihatan kerajaan (PERCUMA), klinik swasta
- **Proses:** 5 minit, sedikit tidak selesa

Alternatif baru: **HPV DNA Test** — lebih tepat dari Pap Smear, disyorkan untuk wanita 30+ tahun.

**2. Mammogram (Saringan Kanser Payudara)**

Kanser payudara adalah kanser paling biasa pada wanita Malaysia.

- **Siapa:** Wanita 40-74 tahun
- **Kekerapan:** Setiap 2 tahun (tiada simptom), atau ikut nasihat doktor
- **Di mana:** Hospital kerajaan dan swasta
- **Pemeriksaan sendiri:** Lakukan setiap bulan, 7-10 hari selepas haid

**Tanda-tanda yang perlu diberi perhatian:**
- Benjolan atau penebalan di payudara atau ketiak
- Perubahan saiz atau bentuk
- Lekukan atau perubahan pada kulit
- Keluar cecair dari puting (bukan susu)

**3. Saringan Densiti Tulang (DEXA Scan)**

- **Siapa:** Wanita menopaus, warga emas, faktor risiko osteoporosis
- **Tujuan:** Mengesan osteoporosis awal sebelum patah tulang

**4. Saringan Kesihatan Am**

| Ujian | Kekerapan |
|-------|-----------|
| Tekanan darah | Setiap kunjungan doktor |
| Gula darah | Setiap 3 tahun (usia ≥ 30) |
| Kolesterol | Setiap 5 tahun (usia ≥ 20) |
| Ujian hemoglobin | Jika haid berat |

### Kesihatan Reproduktif

**Haid yang Normal:**
- Tempoh: 21-35 hari
- Lama: 2-7 hari
- Jumlah darah: 30-80 ml

**Perlu ke doktor jika:**
- Haid tidak teratur atau berhenti tiba-tiba
- Haid sangat berat (tukar pad > 6 kali sehari)
- Sakit haid yang teruk mengganggu aktiviti

**Sindrom Ovari Polisistik (PCOS):**
- 1 dalam 10 wanita Malaysia menghidap PCOS
- Simptom: Haid tidak teratur, jerawat, rambut berlebihan, susah hamil
- Boleh dirawat dengan perubahan gaya hidup dan ubat

### Menopaus: Fasa Kehidupan yang Normal

Menopaus biasanya berlaku pada umur **48-52 tahun** di Malaysia.

**Simptom perimenopaus:**
- Hot flushes (rasa panas tiba-tiba)
- Berpeluh malam
- Tidur terganggu
- Perubahan mood
- Vagina kering

**Pengurusan:**
- **HRT (Hormone Replacement Therapy)** — berkesan tapi perlu bincang risiko dengan doktor
- Fitoestrogen (soya, flaxseed) — bukti terhad
- Senaman teratur
- Kalsium dan Vitamin D untuk tulang

### Kehamilan Sihat

**Pratamat (Preconception care):**
- Mula ambil asid folik **3 bulan sebelum** merancang hamil
- Semak imuniti (rubella, hepatitis B, varicella)
- Kawalan diabetes dan tekanan darah
- Berhenti merokok dan alkohol

**Semasa Hamil:**
- Kunjungan antenatal mengikut jadual (sekurang-kurangnya 8 kali)
- Saringan bagi kecacatan kromosom (jika ≥ 35 tahun)
- Ujian gestational diabetes pada 24-28 minggu
- Pemantauan tekanan darah

> 🌸 **Ingat:** Menjaga kesihatan diri bukan mementingkan diri — ia adalah tanggungjawab kepada diri, keluarga dan masyarakat.
    `.trim(),
  },
  {
    slug: 'stress-tekanan-cara-urus',
    title: 'Cara Mengurus Tekanan (Stress) dengan Berkesan',
    titleEn: 'How to Manage Stress Effectively',
    description: 'Tekanan kerja, kewangan dan perhubungan adalah sebahagian kehidupan moden. Pelajari teknik-teknik berasas sains untuk mengurus stress.',
    category: 'mental',
    categoryLabel: 'Kesihatan Mental',
    readTime: '6 minit',
    date: '2024-07-28',
    image: '🧘',
    content: `
## Tekanan: Kawan atau Musuh?

Tekanan (stress) adalah tindak balas semula jadi badan terhadap cabaran. **Sedikit tekanan itu normal dan bahkan berguna** — ia buat anda fokus dan berprestasi.

Masalah timbul apabila tekanan menjadi **kronik** — berterusan tanpa rehat.

### Kesan Tekanan Kronik pada Badan

**Fizikal:**
- Sakit kepala dan migren
- Ketegangan otot (bahu, leher, rahang)
- Masalah penghadaman (IBS, ulser)
- Sistem imun lemah — kerap sakit
- Tekanan darah naik
- Masalah tidur

**Emosi & Minda:**
- Kemurungan dan keresahan
- Mudah marah dan tidak sabar
- Sukar fokus dan buat keputusan
- Perasaan overwhelmed
- Burnout

**Hormon Stress (Cortisol):**
Cortisol tinggi kronik boleh menyebabkan:
- Simpan lemak di perut
- Darah tinggi
- Imuniti lemah
- Masalah memori

### Punca Tekanan Biasa di Malaysia

| Punca | % Responden |
|-------|-------------|
| Tekanan kerja | 64% |
| Kewangan | 58% |
| Hubungan keluarga | 43% |
| Kesihatan | 38% |
| Berita & media sosial | 31% |

### Teknik Mengurus Tekanan yang Berkesan

**1. Pernafasan dalam (Proven Method)**

Teknik 4-7-8:
1. Tarik nafas perlahan melalui hidung: 4 saat
2. Tahan nafas: 7 saat
3. Hembus perlahan melalui mulut: 8 saat
4. Ulang 4-8 kali

Ini aktifkan **sistem saraf parasimpatik** — "rest and digest" — lawan respons stress.

**2. Meditasi Mindfulness**

- Fokus pada masa kini — bukan masa lepas atau akan datang
- Mulakan 5-10 minit sehari
- Apps: Headspace, Calm, Insight Timer
- Kajian menunjukkan mengurangkan anxiety sebanyak 30-40%

**3. Senaman Teratur**

- Lepaskan endorphin — penahan sakit semula jadi
- Turunkan cortisol
- Bantu tidur lebih lena
- 30 minit sehari mencukupi

**4. Tulis Jurnal**

- Tulis apa yang buat anda tertekan
- Tuliskan 3 perkara yang anda syukuri setiap hari (gratitude)
- "Brain dump" sebelum tidur — keluarkan semua dari kepala

**5. Urus Masa dengan Baik**

- **Teknik Pomodoro:** Kerja 25 minit, rehat 5 minit
- **Eisenhower Matrix:** Asingkan tugas ikut urgent + penting
- **No** — belajar tolak permintaan yang terlampau

**6. Hubungan Sosial**

- Cerita masalah kepada rakan atau keluarga yang dipercayai
- Support group atau komuniti
- Peluk — oksitosin turunkan cortisol

**7. Batasi Berita & Media Sosial**

- "Doomscrolling" memburukkan anxiety
- Hadkan scroll 30-60 minit sehari
- Elak media sosial 1 jam sebelum tidur

### Teknik Pantas untuk Momen Tertekan

**5-4-3-2-1 Grounding:**
- 5 benda yang anda **nampak**
- 4 benda yang anda **boleh sentuh**
- 3 benda yang anda **dengar**
- 2 benda yang anda **hidu**
- 1 benda yang anda **rasa**

Ini bawa anda kembali ke masa kini dan henti spiral keresahan.

### Bila Perlu Bantuan Profesional

Dapatkan bantuan jika tekanan:
- Berlangsung > 2 minggu
- Mengganggu kerja atau hubungan
- Disertai kemurungan atau keresahan teruk
- Menyebabkan penggunaan alkohol atau bahan terlarang

> 🧘 **Ingat:** Mengurus tekanan bukan tanda kelemahan — ia tanda kebijaksanaan. Anda tidak boleh tuang dari cawan yang kosong.
    `.trim(),
  },
];
