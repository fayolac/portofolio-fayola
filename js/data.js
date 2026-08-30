const heroText = {
  id: "Fresh graduate D3 Teknologi Informasi Universitas Brawijaya (Cumlaude, GPA 3.90) dengan pengalaman merancang dan membangun sistem secara end-to-end — mulai dari analisis kebutuhan, perancangan (ERD, use case diagram, wireframe), hingga implementasi antarmuka web. Terbiasa bekerja lintas peran antara System Analyst dan Frontend Developer, sehingga memahami proses sistem sekaligus mampu mewujudkannya jadi produk nyata.",
  en: "Fresh graduate in Information Technology from Universitas Brawijaya (Cumlaude, GPA 3.90) with experience designing and building systems end-to-end — from requirement analysis and design (ERD, use case diagrams, wireframes) to web interface implementation. Experienced working across System Analyst and Frontend Developer roles, combining an understanding of system processes with the ability to bring them to life as real products."
};

const analystSkills = [
  { id: "Use Case Diagram", en: "Use Case Diagram" },
  { id: "ERD", en: "ERD" },
  { id: "Activity Diagram", en: "Activity Diagram" },
  { id: "Flowchart", en: "Flowchart" },
  { id: "SiteMap", en: "SiteMap" },
  { id: "Requirement Gathering", en: "Requirement Gathering" },
  { id: "Wireframing", en: "Wireframing" },
  { id: "Database Design (MySQL)", en: "Database Design (MySQL)" }
];

const frontendSkills = [
  { id: "Responsive Design", en: "Responsive Design" },
  { id: "UI Design (Figma)", en: "UI Design (Figma)" }
];

const experiences = [
  {
    role: { id: "System Analyst Intern", en: "System Analyst Intern" },
    company: "CMLABS",
    period: { id: "Agustus 2025 - February 2026", en: "August 2025 - February 2026" },
    points: [
      { id: "Menyusun dokumentasi analisis sistem berupa Use Case Diagram, Flowchart, ERD, dan Sitemap.", en: "Created system analysis documentation including Use Case Diagrams, Flowcharts, ERD, and Sitemaps." },
      { id: "Melakukan pengujian sistem CRM untuk memastikan fungsi berjalan sesuai kebutuhan.", en: "Tested a CRM system to ensure functions worked as required." }
    ],
    detail: {
      description: { id: "ISI: cerita lebih detail apa yang kamu kerjakan sehari-hari di CMLABS...", en: "FILL: more detailed story of what you worked on daily at CMLABS..." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "Web Developer & UI/UX Designer Intern", en: "Web Developer & UI/UX Designer Intern" },
    company: "PT Vinix7 Aurum",
    period: { id: "Agustus - Desember 2025", en: "August - December 2025" },
    points: [
      { id: "Merancang dan membangun UMKM Portal secara end-to-end, mulai dari wireframe, desain di Figma, hingga deployment.", en: "Designed and built UMKM Portal end-to-end, from wireframing and Figma design through deployment." },
      { id: "Menyusun user flow dan design system untuk menjaga konsistensi antarmuka.", en: "Developed the user flow and design system to maintain interface consistency." }
    ],
    detail: {
      description: { id: "ISI: cerita lebih detail pengalaman magang di Vinix7 Aurum...", en: "FILL: more detailed internship story at Vinix7 Aurum..." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "IT Staff", en: "IT Staff" },
    company: "PT Halo Edukasi Indonesia (HelloCation Korea)",
    period: { id: "ISI: Januari — Juni 2026", en: "FILL: January - June 2026" },
    points: [
      { id: "Merevamp tampilan dan konten website perusahaan berbasis WordPress.", en: "Revamped the company's WordPress website design and content." },
      { id: "Mendukung tim IT dalam operasional teknis, termasuk penanganan teknis pada acara langsung (live event).", en: "Supported the IT team's technical operations, including live event technical support." }
    ],
    detail: {
      description: { id: "ISI: cerita lebih detail pengalaman sebagai IT Staff di HelloCation Korea...", en: "FILL: more detailed story as IT Staff at HelloCation Korea..." },
      photos: [],
      link: ""
    }
  }
];

const projects = [
  {
    id: "rumah-kos-faira",
    title: "Rumah Kos Faira",
    shortDesc: { id: "Sistem manajemen kos digital", en: "Digital boarding house management system" },
    stack: ["Laravel", "MySQL", "Bootstrap"],
    accent: "hybrid",
    status: "completed",
    problem: { id: "Rumah kos Faira sering mengalami kesalahan tulis rekap keuangan, promosi masih kurang efektif karena hanya mengandalkan spanduk, belum ada rekap penghuni, dan pengaduan masih melalui chat pribadi sehingga sering tertimbun dan tidak ditanggapi.", en: "Rumah Kos Faira frequently had errors in manual financial records, relied only on banners for promotion, had no resident recap, and complaints were handled through personal chat, often getting buried and unanswered." },
    analysis: { id: "ERD, Activity Diagram, Wireframe, dan Requirement Gathering ke pemilik kos untuk memetakan kebutuhan sistem.", en: "ERD, Activity Diagram, Wireframe, and Requirement Gathering with the property owner to map system needs." },
    solution: { id: "Membangun website untuk promosi, reservasi kamar jarak jauh, rekapitulasi pemasukan-pengeluaran, dan rekap penghuni per kamar. Hasilnya, promosi tersebar hingga luar Kota Malang, rekap keuangan jadi lebih akurat, dan riwayat pengaduan tidak lagi hilang.", en: "Built a website for promotion, remote room reservation, income-expense recap, and per-room resident recap. As a result, promotion reached beyond Malang City, financial records became more accurate, and complaint history was no longer lost." },
    photos: [],
    link: "https://rumahkosfaira.freepage.cc/"
  },
  {
    id: "sporton",
    title: "SportOn",
    shortDesc: { id: "E-commerce toko olahraga", en: "Sports store e-commerce platform" },
    stack: ["ReactJS", "Vercel"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Toko olahraga SportOn masih sepi pengunjung, sulit menjangkau pembeli dari jarak jauh, perhitungan stok tidak sinkron, dan sulit tracking pemasukan.", en: "SportOn sports store had few visitors, struggled to reach remote buyers, stock calculations were unsynced, and income tracking was difficult." },
    analysis: { id: "ERD, merumuskan spesifikasi fitur, dan requirement gathering ke pemilik toko.", en: "ERD, defining feature specifications, and requirement gathering with the store owner." },
    solution: { id: "Membangun website e-commerce dengan pengecekan keuangan melalui website dan integrasi database dengan kondisi stok barang sebenarnya. Hasilnya, toko bisa menerima pesanan 24/7, perhitungan stok otomatis, dan pemasukan terdokumentasi rapi.", en: "Built an e-commerce website with income tracking on the site and database integration with real-time stock. As a result, the store can accept orders 24/7, stock calculation is automatic, and income is documented accurately." },
    photos: [],
    link: "https://sporton-fe-vercel-deploy-fawn.vercel.app/"
  },
  {
    id: "umkm-portal",
    title: "UMKM Portal",
    shortDesc: { id: "Portal katalog UMKM Malang", en: "Malang SME catalog portal" },
    stack: ["Figma", "Web Development, "],
    accent: "hybrid",
    status: "ongoing",
    problem: { id: "UMKM di Kota Malang masih tergolong sepi kecuali beberapa yang terkenal, pendatang kesulitan mencari produk sesuai budget, dan proses pre-order makanan masih manual via chat.", en: "Most SMEs in Malang were overlooked except a few well-known ones, newcomers struggled to find products within budget, and food pre-orders were handled manually via chat." },
    analysis: { id: "Wireframe, User Flow, ERD, Design System, hingga High-fidelity design di Figma.", en: "Wireframe, User Flow, ERD, Design System, through High-fidelity design in Figma." },
    solution: { id: "Dashboard katalog singkat toko UMKM, kategori UMKM, dan hero section sudah dibangun dan live. Backend serta alur pembelian penuh masih dalam pengembangan lanjutan.", en: "A short SME catalog dashboard, SME categories, and hero section are built and live. Backend and full purchase flow are still under further development." },
    photos: [],
    link: ""
  },
  {
    id: "e-score",
    title: "E-Score",
    shortDesc: { id: "Aplikasi rapor online untuk guru", en: "Online report card app for teachers" },
    stack: ["UCD", "Web Development"],
    accent: "hybrid",
    status: "ongoing",
    problem: { id: "Guru masih mencatat nilai secara manual, proses hitung rata-rata rawan human error, dan data absensi yang berpengaruh ke penilaian masih terpisah dari proses ini.", en: "Teachers still recorded grades manually, average calculations were prone to human error, and attendance data affecting grades was disconnected from the process." },
    analysis: { id: "Observasi kebiasaan guru menulis nilai manual, dipetakan menjadi kebutuhan input nilai digital, kalkulasi otomatis, rekap absensi terintegrasi, dan output rapor otomatis (metodologi UCD).", en: "Observation of teachers' manual grading habits, mapped into needs for digital input, automatic calculation, integrated attendance recap, and automatic report output (UCD methodology)." },
    solution: { id: "Dirancang sebagai aplikasi rapor online dengan input nilai digital, kalkulasi rata-rata otomatis, rekap absensi, dan output langsung berbentuk rapor. Saat ini dashboard perkenalan sudah dibangun, fitur inti masih dalam pengembangan.", en: "Designed as an online report card app with digital grade input, automatic average calculation, attendance recap, and direct report output. Currently, an introductory dashboard is built; core features are still under development." },
    photos: [],
    link: ""
  },
  {
    id: "gapura-ub",
    title: "Gapura UB Redesign",
    shortDesc: { id: "Redesain UI/UX aplikasi kampus", en: "Campus app UI/UX redesign" },
    stack: ["Figma", "UI/UX"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Aplikasi Gapura UB kurang optimal — belum ada fitur tugas/grup/materi kelas sehingga mahasiswa perlu aplikasi ketiga, auto-logout tiap membuka app, dan berita harus dibaca di luar aplikasi.", en: "The Gapura UB app was suboptimal — lacking class assignments, groups, and materials, requiring a third-party app; it auto-logged out on every open; news had to be read outside the app." },
    analysis: { id: "Wawancara mahasiswa dan dosen soal plus-minus penggunaan Gapura UB, wireframe, high-fidelity, prototype, dan riset aplikasi pembanding.", en: "Interviews with students and lecturers on the app's pros and cons, wireframing, high-fidelity design, prototyping, and competitor research." },
    solution: { id: "Desain baru dengan fitur materi/grup/tugas kelas, menghilangkan auto-logout, dan halaman baca berita langsung di dalam aplikasi. Hasilnya, desain berhasil menjawab seluruh masalah yang ditemukan dalam riset.", en: "New design adding class materials/groups/assignments, removing auto-logout, and an in-app news reading page. As a result, the design successfully addressed all issues found during research." },
    photos: [],
    link: ""
  },
  {
    id: "web-perpustakaan",
    title: "Web Perpustakaan",
    shortDesc: { id: "Sistem peminjaman buku digital", en: "Digital book borrowing system" },
    stack: ["Laravel", "HTML", "CSS"],
    accent: "frontend",
    status: "ongoing",
    problem: { id: "Tugas kampus untuk membangun sistem peminjaman dan pengembalian buku secara digital, menggantikan pencatatan manual.", en: "A university assignment to build a digital book borrowing and return system, replacing manual recording." },
    analysis: { id: "Perancangan dashboard, kategori buku, dan halaman detail buku.", en: "Designing the dashboard, book categories, and book detail pages." },
    solution: { id: "Dashboard, kategori, dan detail buku sudah dibangun. Fitur peminjaman dan pengembalian masih dalam tahap pengembangan lanjutan.", en: "Dashboard, category, and detail pages are built. Borrow and return features are still under further development." },
    photos: [],
    link: ""
  },
  {
    id: "iot-web",
    title: "IoT + Web Lampu Jalan Otomatis",
    shortDesc: { id: "Sistem lampu jalan otomatis berbasis sensor", en: "Sensor-based automatic street light system" },
    stack: ["IoT", "Web Development"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Kawasan rumah sering lupa menyalakan lampu jalan sehingga gelap dan rawan kecelakaan/kejahatan, atau lupa mematikannya sehingga boros listrik.", en: "Residential areas often forgot to turn on street lights, causing accident/crime risk, or forgot to turn them off, wasting electricity." },
    analysis: { id: "Berperan sebagai analyst sekaligus membantu development IoT dalam tim; sistem dirancang agar lampu otomatis menyala saat ada kendaraan lewat, hujan, atau kondisi gelap, dengan monitoring via grafik di website.", en: "Role as analyst while also assisting IoT development within the team; system designed so lights auto-activate when a vehicle passes, it rains, or it's dark, with monitoring via a web graph." },
    solution: { id: "Lampu jalan otomatis berbasis sensor, terhubung ke website untuk monitoring grafik. Prototipe berhasil diuji sebagai tim; saat ini hardware mengalami kerusakan sehingga grafik tidak berjalan, namun website dan dokumentasi tetap dapat diakses.", en: "Sensor-based automatic street lights, connected to a website for graph monitoring. The prototype was successfully tested as a team; the hardware is currently non-functional so the graph doesn't update, but the website and documentation remain accessible." },
    photos: [],
    link: ""
  }
];

const certifications = [
  {
    title: { id: "BNSP Junior Web Developer", en: "BNSP Junior Web Developer" },
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    year: "2026",
    description: { id: "Sertifikasi kompetensi nasional yang menguji kemampuan dasar pengembangan web, mencakup HTML, CSS, dan JavaScript sesuai standar kerja industri.", en: "National competency certification testing fundamental web development skills, covering HTML, CSS, and JavaScript according to industry work standards." },
    photos: [],
    link: "assets/BNSP - Fayola Carani M .pdf"
  },
  {
    title: { id: "BEPT (Brawijaya English Proficiency Test)", en: "BEPT (Brawijaya English Proficiency Test)" },
    issuer: "Universitas Brawijaya",
    year: "2026",
    score: "463",
    description: { id: "Tes kemampuan Bahasa Inggris resmi Universitas Brawijaya, mengukur kemampuan membaca, mendengar, dan struktur bahasa.", en: "Universitas Brawijaya's official English proficiency test, measuring reading, listening, and structure skills." },
    photos: [],
    link: ""
  }
];

const education = [
  {
    level: { id: "D3 — Teknologi Informasi", en: "Associate Degree — Information Technology" },
    institution: "Universitas Brawijaya",
    period: { id:"Agustus 2023 — Juli 2026", en: "August 2023 — July 2026" },
    extra: { id: "IPK 3.90 — Cumlaude", en: "GPA 3.90 — Cumlaude" },
    detail: {
      description: { id: "ISI: cerita singkat pengalaman kuliah, fokus pembelajaran, atau pencapaian selama D3 TI...", en: "FILL: brief story of your college experience, learning focus, or achievements during your D3..." },
      photos: [],
      link: ""
    }
  },
  {
    level: { id: "SMA — Matematika & Ilmu Pengetahuan Alam", en: "High School — Math & Science" },
    institution: "SMAN 4 Kota Blitar",
    period: { id: "2020 - 2023", en: "2020 - 2023" },
    extra: { id: "86", en: "86"},
    detail: {
      description: { id: "ISI: cerita singkat masa SMA, kegiatan ekstrakurikuler, atau prestasi (opsional)...", en: "FILL: brief high school story, extracurriculars, or achievements (optional)..." },
      photos: [],
      link: ""
    }
  }
];

const organizations = [
  {
    role: { id: "Staf Finance & Fundraising", en: "Finance & Fundraising Staff" },
    org: "UABT UB",
    period: { id: "ISI: Bulan Tahun — Bulan Tahun", en: "FILL: Month Year — Month Year" },
    detail: {
      description: { id: "ISI: cerita kontribusi kamu di UABT UB, tugas sehari-hari, pencapaian...", en: "FILL: your contribution story at UABT UB, daily tasks, achievements..." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "Staf Ekonomi Kreatif", en: "Creative Economy Staff" },
    org: "Senyum Anak Nusantara Chapter Malang",
    period: { id: "ISI: Bulan Tahun — Bulan Tahun", en: "FILL: Month Year — Month Year" },
    detail: {
      description: { id: "ISI: cerita kontribusi kamu sebagai Staf Ekonomi Kreatif...", en: "FILL: your contribution story as Creative Economy Staff..." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "Staf Media & Komunikasi", en: "Media & Communication Staff" },
    org: "Senyum Anak Nusantara Chapter Malang",
    period: { id: "ISI: Bulan Tahun — Bulan Tahun", en: "FILL: Month Year — Month Year" },
    detail: {
      description: { id: "ISI: cerita kontribusi kamu sebagai Staf Media & Komunikasi...", en: "FILL: your contribution story as Media & Communication Staff..." },
      photos: [],
      link: ""
    }
  }
];