const heroText = {
  id: "Fresh graduate D3 Teknologi Informasi Universitas Brawijaya (Cumlaude, GPA 3.90) dengan pengalaman merancang dan membangun sistem secara end-to-end — mulai dari analisis kebutuhan, perancangan (ERD, use case diagram, wireframe), hingga implementasi antarmuka web. Terbiasa bekerja lintas peran antara System Analyst dan Frontend Developer, sehingga memahami proses sistem sekaligus mampu mewujudkannya jadi produk nyata.",
  en: "Fresh graduate in Information Technology from Universitas Brawijaya (Cumlaude, GPA 3.90) with experience designing and building systems end-to-end — from requirement analysis and design (ERD, use case diagrams, wireframes) to web interface implementation. Experienced working across System Analyst and Frontend Developer roles, combining an understanding of system processes with the ability to bring them to life as real products."
};

const heroNameText = "Fayola Carani Malya";

const codeSnippetText = `const architect = {
  name: "Fayola Carani Malya",
  role: ["Frontend Dev", "System Analyst"],
  gpa: 3.90,
  status: "Open to work"
};`;

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
    period: { id: "Agustus 2025 — Februari 2026 (7 bulan)", en: "August 2025 — February 2026 (7 months)" },
    points: [
      { id: "Menghasilkan 4 dokumen analisis sistem — Use Case Diagram, Flowchart, ERD, dan Sitemap — sebagai fondasi struktural pengembangan platform CRM.", en: "Produced 4 system documentation artifacts — Use Case Diagram, Flowchart, ERD, and Sitemap — as the structural foundation for CRM platform development." },
      { id: "Melakukan pengujian fungsional menyeluruh di seluruh fitur sistem untuk memastikan kesesuaian dengan requirement sebelum implementasi.", en: "Conducted comprehensive functional testing across all system features to ensure alignment with documented requirements prior to implementation." }
    ],
    detail: {
      description: { id: "Sebagai System Analyst Intern di cmlabs, saya berfokus pada pengembangan website CRM, bertanggung jawab menyusun flowchart, user flow, dan activity diagram, sekaligus turut mendukung desain UI/UX, pengembangan front-end, pengujian, dan manajemen proyek dalam lingkungan kerja kolaboratif secara daring. Saya juga berkoordinasi dengan tim lintas fungsi untuk mendukung keberhasilan implementasi CRM, berkontribusi pada alur pengembangan yang lebih efisien.", en: "As a System Analyst Intern at cmlabs, I focused on developing a CRM website, responsible for creating flowcharts, user flows, and activity diagrams, while also supporting UI/UX design, front-end development, testing, and project management in a collaborative online environment. I also coordinated with cross-functional teams to support successful CRM implementation, contributing to a more streamlined development workflow." },
      photos: ["assets/Cmlabs.jpg", "assets/DB_CRM.png", "assets/NilaiCMLABS.png"],
      link: "https://www.figma.com/board/xWLvPu1mOBVnc83yiqn9N1/CRM-System-Analyst-Project?node-id=1-2744&t=ZmAcksQLK57ccxnr-1"
    }
  },
  {
    role: { id: "Web Developer & UI/UX Designer Intern", en: "Web Developer & UI/UX Designer Intern" },
    company: "PT Vinix7 Aurum",
    period: { id: "Agustus - Desember 2025 (5 Bulan)", en: "August - December 2025 (5 Months)" },
    points: [
      { id: "Merancang pengalaman UMKM Portal secara end-to-end menggunakan Figma — mencakup riset pengguna, wireframing, prototyping, dan usability testing; proyek berhasil di-deploy sebagai capstone magang.", en: "Designed an end-to-end UMKM Portal experience using Figma, covering user research, wireframing, prototyping, and usability testing; project successfully deployed online as the primary internship deliverable." },
      { id: "Membangun dan mempublikasikan fondasi front-end website menggunakan HTML, CSS, JavaScript, Bootstrap, dan GitHub Pages, menghasilkan antarmuka yang responsif dan aksesibel.", en: "Built and published the foundational front-end of the website using HTML, CSS, JavaScript, Bootstrap, and GitHub Pages, delivering a responsive and accessible interface." }
    ],
    detail: {
      description: { id: "Selama magang di Vinix7, saya mengerjakan pengembangan produk end-to-end untuk Portal UMKM Kota Malang — mulai dari riset pengguna, desain UI/UX di Figma, hingga implementasi front-end menggunakan HTML, CSS, JavaScript, dan Bootstrap. Proyek ini berhasil di-deploy secara online sebagai deliverable utama magang, dengan usability yang diuji dan disempurnakan lewat proses iteratif. Pengalaman ini memperkuat kemampuan saya membangun produk web yang berfokus pada pengguna dari konsep hingga deployment, dalam lingkungan kerja remote yang kolaboratif.", en: "During my internship at Vinix7, I worked on end-to-end product development for the Portal UMKM Kota Malang — from user research and UI/UX design in Figma to front-end implementation using HTML, CSS, JavaScript, and Bootstrap. The project was successfully deployed online as the primary internship deliverable, with usability tested and refined through an iterative process. This experience strengthened my ability to build user-focused web products from concept to deployment in a fully remote, collaborative environment." },
      photos: [],
      link: "https://fayolac.github.io/umkm-malang-company/"
    }
  },
  {
    role: { id: "IT Staff", en: "IT Staff" },
    company: "PT Halo Edukasi Indonesia (HelloCation Korea)",
    period: { id: "Januari 2026 — Juni 2026 (6 bulan) · Jarak jauh", en: "January 2026 — June 2026 (6 months) · Remote" },
    points: [
      { id: "Membangun dan mempublikasikan front-end website organisasi menggunakan WordPress, menjaga kehadiran online yang konsisten dan fungsional.", en: "Built and published the organization's website front-end using WordPress, ensuring a consistent and functional online presence." },
      { id: "Memelihara performa website dan memberikan dukungan teknis langsung untuk acara live, termasuk pengoperasian Zoom dan manajemen streaming OBS.", en: "Maintained website performance and provided hands-on technical support for live events, including Zoom operation and OBS streaming management." }
    ],
    detail: {
      description: { id: "Sebagai IT Staff di HelloCation Korea, saya membangun dan mempublikasikan website organisasi menggunakan WordPress, mencakup profil perusahaan, promosi acara, dan berita program edukasi internasional yang berfokus pada Korea Selatan. Saya juga memelihara performa website, memberikan dukungan teknis langsung untuk acara live (termasuk pengoperasian Zoom dan manajemen streaming OBS), serta turut berkontribusi dalam perencanaan dan eksekusi pembaruan UI website untuk meningkatkan pengalaman pengguna secara keseluruhan.", en: "As IT Staff at HelloCation Korea, I built and published the organization's website using WordPress, covering company profile, event promotion, and news on international education programs focused on South Korea. I also maintained website performance, provided hands-on technical support for live events (including Zoom operation and OBS streaming management), and contributed to the planning and execution of UI updates to improve the overall user experience." },
      photos: [],
      link: ""
    }
  }
];

const projects = [
  {
    id: "rumah-kos-faira",
    title: "Rumah Kos Faira",
    thumbnail: "",
    shortDesc: { id: "Sistem manajemen kos digital", en: "Digital boarding house management system" },
    stack: ["Laravel", "MySQL", "Bootstrap"],
    accent: "hybrid",
    status: "completed",
    problem: { id: "Rumah kos Faira sering mengalami kesalahan tulis rekap keuangan, promosi masih kurang efektif karena hanya mengandalkan spanduk, belum ada rekap penghuni, dan pengaduan masih melalui chat pribadi sehingga sering tertimbun dan tidak ditanggapi.", en: "Rumah Kos Faira frequently had errors in manual financial records, relied only on banners for promotion, had no resident recap, and complaints were handled through personal chat, often getting buried and unanswered." },
    analysis: { id: "ERD, Activity Diagram, Wireframe, dan Requirement Gathering ke pemilik kos untuk memetakan kebutuhan sistem.", en: "ERD, Activity Diagram, Wireframe, and Requirement Gathering with the property owner to map system needs." },
    solution: { id: "Merancang aplikasi web multi-role yang mendukung 3 tipe pengguna, didukung oleh diagram UML (use case, activity, ERD) sebagai fondasi struktural alur sistem dan desain database. Proyek ini mendapat evaluasi akademik yang sangat baik dari dosen pembimbing.", en: "Designed a multi-role web application supporting 3 user types, backed by UML diagrams (use case, activity, ERD) as the structural foundation for system flow and database design. The project received strong academic evaluation from the supervising lecturer." },    photos: [],
    links: [
      { label: { id: "Lihat Website", en: "View Website" }, url: "https://rumahkosfaira.freepage.cc/" },
      //{ label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "https://figma.com/link-kamu" }
    ]
  },
  {
    id: "sporton",
    title: "SportOn",
    thumbnail: "",
    shortDesc: { id: "E-commerce toko olahraga", en: "Sports store e-commerce platform" },
    stack: ["ReactJS", "Vercel"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Toko olahraga SportOn masih sepi pengunjung, sulit menjangkau pembeli dari jarak jauh, perhitungan stok tidak sinkron, dan sulit tracking pemasukan.", en: "SportOn sports store had few visitors, struggled to reach remote buyers, stock calculations were unsynced, and income tracking was difficult." },
    analysis: { id: "ERD, merumuskan spesifikasi fitur, dan requirement gathering ke pemilik toko.", en: "ERD, defining feature specifications, and requirement gathering with the store owner." },
    solution: { id: "Mengembangkan sistem manajemen produk untuk platform e-commerce alat olahraga menggunakan ReactJS, lengkap dengan logika filtering dan client-side state management untuk mendukung pengalaman browsing produk yang dinamis.", en: "Developed a product management system for a sports equipment e-commerce platform using ReactJS, implementing filtering logic and client-side state management to support a dynamic product browsing experience." },    photos: [],
    links: [
      { label: { id: "Lihat Website", en: "View Website" }, url: "https://sporton-fe-vercel-deploy-fawn.vercel.app/" },
    ]
  },
  {
    id: "umkm-portal",
    title: "UMKM Portal",
    thumbnail: "",
    shortDesc: { id: "Portal katalog UMKM Malang", en: "Malang SME catalog portal" },
    stack: ["Figma", "Web Development, "],
    accent: "hybrid",
    status: "ongoing",
    problem: { id: "UMKM di Kota Malang masih tergolong sepi kecuali beberapa yang terkenal, pendatang kesulitan mencari produk sesuai budget, dan proses pre-order makanan masih manual via chat.", en: "Most SMEs in Malang were overlooked except a few well-known ones, newcomers struggled to find products within budget, and food pre-orders were handled manually via chat." },
    analysis: { id: "Wireframe, User Flow, ERD, Design System, hingga High-fidelity design di Figma.", en: "Wireframe, User Flow, ERD, Design System, through High-fidelity design in Figma." },
    solution: { id: "Dashboard katalog singkat toko UMKM, kategori UMKM, dan hero section sudah dibangun dan live. Backend serta alur pembelian penuh masih dalam pengembangan lanjutan.", en: "A short SME catalog dashboard, SME categories, and hero section are built and live. Backend and full purchase flow are still under further development." },
    photos: [],
    links: [
      { label: { id: "Lihat Website", en: "View Website" }, url: "https://fayolac.github.io/umkm-malang-company/" },
      //{ label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "#soon" }
    ]
  },
  {
    id: "e-score",
    title: "E-Score",
    thumbnail: "",
    shortDesc: { id: "Aplikasi rapor online untuk guru", en: "Online report card app for teachers" },
    stack: ["UCD", "Web Development"],
    accent: "hybrid",
    status: "ongoing",
    problem: { id: "Guru masih mencatat nilai secara manual, proses hitung rata-rata rawan human error, dan data absensi yang berpengaruh ke penilaian masih terpisah dari proses ini.", en: "Teachers still recorded grades manually, average calculations were prone to human error, and attendance data affecting grades was disconnected from the process." },
    analysis: { id: "Observasi kebiasaan guru menulis nilai manual, dipetakan menjadi kebutuhan input nilai digital, kalkulasi otomatis, rekap absensi terintegrasi, dan output rapor otomatis (metodologi UCD).", en: "Observation of teachers' manual grading habits, mapped into needs for digital input, automatic calculation, integrated attendance recap, and automatic report output (UCD methodology)." },
    solution: { id: "Dirancang sebagai aplikasi rapor online dengan input nilai digital, kalkulasi rata-rata otomatis, rekap absensi, dan output langsung berbentuk rapor. Saat ini dashboard perkenalan sudah dibangun, fitur inti masih dalam pengembangan.", en: "Designed as an online report card app with digital grade input, automatic average calculation, attendance recap, and direct report output. Currently, an introductory dashboard is built; core features are still under development." },
    photos: [],
    links: [
          //{ label: { id: "Lihat Website", en: "View Website" }, url: "https://fayolac.github.io/umkm-malang-company/" },
          //{ label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "#soon" }
    ]  
    },
  {
    id: "gapura-ub",
    title: "Gapura UB Redesign",
    thumbnail: "",
    shortDesc: { id: "Redesain UI/UX aplikasi kampus", en: "Campus app UI/UX redesign" },
    stack: ["Figma", "UI/UX"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Aplikasi Gapura UB kurang optimal — belum ada fitur tugas/grup/materi kelas sehingga mahasiswa perlu aplikasi ketiga, auto-logout tiap membuka app, dan berita harus dibaca di luar aplikasi.", en: "The Gapura UB app was suboptimal — lacking class assignments, groups, and materials, requiring a third-party app; it auto-logged out on every open; news had to be read outside the app." },
    analysis: { id: "Wawancara mahasiswa dan dosen soal plus-minus penggunaan Gapura UB, wireframe, high-fidelity, prototype, dan riset aplikasi pembanding.", en: "Interviews with students and lecturers on the app's pros and cons, wireframing, high-fidelity design, prototyping, and competitor research." },
    solution: { id: "Melakukan analisis gap fitur dan desain pada aplikasi kampus yang sudah ada, lalu mengeksekusi perbaikan UI/UX untuk menjawab kekurangan yang ditemukan. Turut memimpin pembagian tugas tim dan manajemen linimasa proyek sepanjang proses redesign.", en: "Conducted feature and design gap analysis on the existing university application and executed UI/UX improvements to address identified shortcomings. Led team task distribution and project timeline management throughout the redesign process." },    photos: [],
    links: [
      { label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "https://www.figma.com/design/FLUnnCej7vWHJBRyQGAdGS/GAPURA-UB-REDESIGN?node-id=0-1&t=deDwrQOsASMpq9P5-1" }
    ]  
  },
  {
    id: "web-perpustakaan",
    title: "Web Perpustakaan",
    thumbnail: "",
    shortDesc: { id: "Sistem peminjaman buku digital", en: "Digital book borrowing system" },
    stack: ["Laravel", "HTML", "CSS"],
    accent: "frontend",
    status: "ongoing",
    problem: { id: "Tugas kampus untuk membangun sistem peminjaman dan pengembalian buku secara digital, menggantikan pencatatan manual.", en: "A university assignment to build a digital book borrowing and return system, replacing manual recording." },
    analysis: { id: "Perancangan dashboard, kategori buku, dan halaman detail buku.", en: "Designing the dashboard, book categories, and book detail pages." },
    solution: { id: "Dashboard, kategori, dan detail buku sudah dibangun. Fitur peminjaman dan pengembalian masih dalam tahap pengembangan lanjutan.", en: "Dashboard, category, and detail pages are built. Borrow and return features are still under further development." },
    photos: [],
    links: [
              //{ label: { id: "Lihat Website", en: "View Website" }, url: "https://fayolac.github.io/umkm-malang-company/" },
              //{ label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "#soon" }
    ]   
  },
  {
    id: "iot-web",
    title: "IoT + Web Lampu Jalan Otomatis",
    thumbnail: "",
    shortDesc: { id: "Sistem lampu jalan otomatis berbasis sensor", en: "Sensor-based automatic street light system" },
    stack: ["IoT", "Web Development"],
    accent: "frontend",
    status: "completed",
    problem: { id: "Kawasan rumah sering lupa menyalakan lampu jalan sehingga gelap dan rawan kecelakaan/kejahatan, atau lupa mematikannya sehingga boros listrik.", en: "Residential areas often forgot to turn on street lights, causing accident/crime risk, or forgot to turn them off, wasting electricity." },
    analysis: { id: "Berperan sebagai analyst sekaligus membantu development IoT dalam tim; sistem dirancang agar lampu otomatis menyala saat ada kendaraan lewat, hujan, atau kondisi gelap, dengan monitoring via grafik di website.", en: "Role as analyst while also assisting IoT development within the team; system designed so lights auto-activate when a vehicle passes, it rains, or it's dark, with monitoring via a web graph." },
    solution: { id: "Lampu jalan otomatis berbasis sensor, terhubung ke website untuk monitoring grafik. Prototipe berhasil diuji sebagai tim; saat ini hardware mengalami kerusakan sehingga grafik tidak berjalan, namun website dan dokumentasi tetap dapat diakses.", en: "Sensor-based automatic street lights, connected to a website for graph monitoring. The prototype was successfully tested as a team; the hardware is currently non-functional so the graph doesn't update, but the website and documentation remain accessible." },
    photos: [],
    links: [
              //{ label: { id: "Lihat Website", en: "View Website" }, url: "https://fayolac.github.io/umkm-malang-company/" },
              //{ label: { id: "Lihat Desain Figma", en: "View Figma Design" }, url: "#soon" }
    ]   
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
      description: { id: "Menempuh studi D3 Teknologi Informasi di Universitas Brawijaya dengan fokus pada pengembangan sistem end-to-end, mulai dari analisis kebutuhan hingga implementasi antarmuka web. Selama masa studi, saya aktif mengerjakan berbagai proyek praktik lintas mata kuliah — mulai dari perancangan sistem berbasis dokumentasi analisis (ERD, Use Case Diagram, flowchart) hingga pengembangan aplikasi web menggunakan Laravel dan JavaScript — yang membentuk fondasi kemampuan saya bekerja lintas peran antara System Analyst dan Frontend Developer. Lulus dengan predikat Cumlaude dan IPK 3.90 dari skala 4.00.", en: "Completed a D3 (Associate Degree) in Information Technology at Universitas Brawijaya, focusing on end-to-end system development from requirement analysis to web interface implementation. Throughout my studies, I actively worked on cross-course practical projects — from system design based on analysis documentation (ERD, Use Case Diagrams, flowcharts) to web application development using Laravel and JavaScript — which formed the foundation of my ability to work across System Analyst and Frontend Developer roles. Graduated with Cumlaude honors and a 3.90/4.00 GPA." },
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
      description: { id: "Menempuh pendidikan menengah atas dengan jurusan MIPA (Matematika dan Ilmu Pengetahuan Alam), yang membangun dasar berpikir logis, analitis, dan sistematis — pola pikir yang kemudian menjadi bekal saat melanjutkan studi di bidang Teknologi Informasi.", en: "Completed high school in the Science (MIPA) track, which built a foundation of logical, analytical, and systematic thinking — a mindset that later carried into my studies in Information Technology." },
      photos: [],
      link: ""
    }
  }
];

const organizations = [
  {
    role: { id: "Staf Dana Usaha", en: "Finance & Fundraising Staff" },
    org: "Unit Aktivitas Bulutangkis Universitas Brawijaya (UABT UB)",
    period: { id: "Januari 2024 — Januari 2025 (1 tahun 1 bulan) · Kota Malang", en: "January 2024 — January 2025 (1 year 1 month) · Malang City" },
    detail: {
      description: { id: "Sebagai Staf Fundraising, saya aktif berkontribusi dalam merencanakan dan menjalankan strategi peningkatan pendapatan organisasi, termasuk program penyewaan raket dan inisiatif bisnis lainnya. Saya berkolaborasi dalam tim, bernegosiasi dengan pihak eksternal, dan mengelola catatan keuangan dasar untuk mendukung keberlanjutan kegiatan klub.", en: "As a Fundraising Staff, I actively contributed to planning and executing strategies to increase the organization's income, including racket rental programs and other business initiatives. I collaborated within a team, negotiated with external parties, and managed basic financial records to support the sustainability of the club's activities." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "Staf Ekonomi Kreatif", en: "Creative Economy Staff" },
    org: "Senyum Anak Nusantara Chapter Malang",
    period: { id: "April 2024 — Februari 2025 (11 bulan) · Kota Malang", en: "April 2024 — February 2025 (11 months) · Malang City" },
    detail: {
      description: { id: "Sebagai Staf Ekonomi Kreatif di SAN Malang, saya mengelola akun Instagram @sanmalang.mart, membuat konten promosi, dan mengembangkan strategi kreatif untuk mendukung pendanaan komunitas. Saya turut berkontribusi pada program Dalbo Nusantara, yang pada 2 Juni 2024 mencatatkan rekor pendapatan harian tertinggi dalam empat tahun terakhir sebesar Rp1.2 juta.", en: "As a Creative Economy Staff at SAN Malang, I managed the Instagram account @sanmalang.mart, created promotional content, and developed creative strategies to support community funding. I contributed to the Dalbo Nusantara program, which on June 2, 2024, achieved a record daily revenue of IDR 1.2 million — the highest in four years." },
      photos: [],
      link: ""
    }
  },
  {
    role: { id: "Staf Media & Komunikasi", en: "Media & Communication Staff" },
    org: "Senyum Anak Nusantara Chapter Malang",
    period: { id: "April 2025 — Februari 2026 (11 bulan) · Kota Malang", en: "April 2025 — February 2026 (11 months) · Malang City" },
    detail: {
      description: { id: "Sebagai Staf Media dan Komunikasi di SAN Malang, saya bertanggung jawab mengelola akun media sosial organisasi, menyusun dan menjalankan rencana konten, serta memastikan publikasi kegiatan berjalan konsisten. Peran saya mencakup pembuatan copywriting untuk media sosial, mendesain konten visual, mendokumentasikan kegiatan, dan berperan sebagai admin untuk menjaga komunikasi dan engagement audiens tetap efektif di seluruh platform.", en: "As a Media and Communication Staff at SAN Malang, I was responsible for managing the organization's social media accounts, developing and executing content plans, and ensuring consistent publication of activities. My role included creating copywriting for social media posts, designing engaging visual content, documenting events, and serving as an administrator to maintain effective communication and audience engagement across platforms." },
      photos: [],
      link: ""
    }
  }
];