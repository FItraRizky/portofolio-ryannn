import type { Project, Skill, Experience, Education, Testimonial, Service, BlogPost, SocialLink } from '../types/data';

// Projects Data
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur lengkap untuk toko online',
    longDescription: 'Platform e-commerce yang dibangun dengan teknologi modern, menyediakan fitur lengkap seperti manajemen produk, sistem pembayaran, tracking order, dan dashboard admin yang komprehensif.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'],
    liveUrl: 'https://ecommerce-demo.com',
    githubUrl: 'https://github.com/fitrarizky/ecommerce-platform',
    category: 'fullstack',
    featured: true,
    challenges: ['Mengintegrasikan sistem pembayaran yang aman dan mengelola state management yang kompleks'],
    learnings: 'Mempelajari arsitektur microservices dan implementasi security best practices',
    role: 'Fullstack Developer'
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan fitur kolaborasi tim',
    longDescription: 'Aplikasi manajemen tugas yang memungkinkan tim untuk berkolaborasi secara real-time, dengan fitur drag-and-drop, notifikasi, dan analytics.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop'],
    liveUrl: 'https://taskapp-demo.com',
    githubUrl: 'https://github.com/fitrarizky/task-management',
    category: 'fullstack',
    featured: true,
    challenges: ['Implementasi real-time collaboration dan optimasi performa database'],
    learnings: 'Menguasai WebSocket dan database optimization techniques',
    role: 'Lead Developer'
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'Dashboard cuaca interaktif dengan visualisasi data',
    longDescription: 'Dashboard cuaca yang menampilkan data cuaca real-time dengan visualisasi yang menarik menggunakan charts dan maps.',
    technologies: ['React', 'D3.js', 'OpenWeather API', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop'],
    liveUrl: 'https://weather-dashboard-demo.com',
    githubUrl: 'https://github.com/fitrarizky/weather-dashboard',
    category: 'frontend',
    featured: false,
    challenges: ['Visualisasi data yang kompleks dan responsive design'],
    learnings: 'Menguasai data visualization dengan D3.js',
    role: 'Frontend Developer'
  }
];

// Skills Data
export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 'expert', category: 'frontend', icon: '⚛️', description: 'Library JavaScript untuk membangun UI' },
  { name: 'TypeScript', level: 'advanced', category: 'frontend', icon: '🔷', description: 'JavaScript dengan type safety' },
  { name: 'Next.js', level: 'advanced', category: 'frontend', icon: '▲', description: 'React framework untuk production' },
  { name: 'Vue.js', level: 'intermediate', category: 'frontend', icon: '💚', description: 'Progressive JavaScript framework' },
  { name: 'HTML/CSS', level: 'expert', category: 'frontend', icon: '🎨', description: 'Markup dan styling fundamental' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'frontend', icon: '🎨', description: 'Utility-first CSS framework' },
  
  // Backend
  { name: 'Node.js', level: 'advanced', category: 'backend', icon: '🟢', description: 'JavaScript runtime untuk server' },
  { name: 'Express.js', level: 'advanced', category: 'backend', icon: '🚀', description: 'Web framework untuk Node.js' },
  { name: 'Python', level: 'intermediate', category: 'backend', icon: '🐍', description: 'Bahasa pemrograman serbaguna' },
  { name: 'Django', level: 'intermediate', category: 'backend', icon: '🎸', description: 'Python web framework' },
  { name: 'PHP', level: 'intermediate', category: 'backend', icon: '🐘', description: 'Server-side scripting language' },
  
  // Database
  { name: 'MongoDB', level: 'advanced', category: 'database', icon: '🍃', description: 'NoSQL database' },
  { name: 'PostgreSQL', level: 'advanced', category: 'database', icon: '🐘', description: 'Relational database' },
  { name: 'MySQL', level: 'intermediate', category: 'database', icon: '🐬', description: 'Popular relational database' },
  { name: 'Redis', level: 'intermediate', category: 'database', icon: '🔴', description: 'In-memory data store' },
  
  // DevOps
  { name: 'Docker', level: 'intermediate', category: 'devops', icon: '🐳', description: 'Containerization platform' },
  { name: 'AWS', level: 'intermediate', category: 'devops', icon: '☁️', description: 'Cloud computing services' },
  { name: 'Git', level: 'advanced', category: 'tools', icon: '📝', description: 'Version control system' },
  { name: 'Linux', level: 'intermediate', category: 'devops', icon: '🐧', description: 'Operating system' }
];

// Experience Data
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovate Solutions',
    position: 'Senior Fullstack Developer',
    startDate: '2022-01',
    description: [
      'Memimpin pengembangan aplikasi web skala enterprise dengan React dan Node.js',
      'Mengoptimalkan performa aplikasi hingga 40% lebih cepat',
      'Mentoring junior developers dan code review',
      'Implementasi CI/CD pipeline dan best practices'
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS'],
    current: true
  },
  {
    id: '2',
    company: 'Digital Creative Agency',
    position: 'Fullstack Developer',
    startDate: '2020-06',
    endDate: '2021-12',
    description: [
      'Mengembangkan website dan aplikasi web untuk berbagai klien',
      'Kolaborasi dengan tim design untuk implementasi UI/UX',
      'Maintenance dan update aplikasi existing',
      'Integrasi dengan berbagai third-party APIs'
    ],
    technologies: ['Vue.js', 'PHP', 'MySQL', 'Laravel', 'jQuery']
  },
  {
    id: '3',
    company: 'Startup Teknologi',
    position: 'Frontend Developer',
    startDate: '2019-03',
    endDate: '2020-05',
    description: [
      'Membangun interface pengguna yang responsif dan interaktif',
      'Implementasi design system dan component library',
      'Optimasi SEO dan performa website',
      'Testing dan debugging aplikasi frontend'
    ],
    technologies: ['React', 'JavaScript', 'CSS3', 'Webpack', 'Jest']
  }
];

// Education Data
export const education: Education[] = [
  {
    id: '1',
    institution: 'Universitas Teknologi Indonesia',
    degree: 'Sarjana',
    field: 'Teknik Informatika',
    startDate: '2015-08',
    endDate: '2019-07',
    description: 'Fokus pada pengembangan software dan algoritma'
  }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmad Wijaya',
    position: 'CTO',
    company: 'Tech Innovate Solutions',
    content: 'Fitra adalah developer yang sangat kompeten dan dapat diandalkan. Kemampuan problem-solving nya luar biasa dan selalu memberikan solusi yang efisien.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Putri',
    position: 'Product Manager',
    company: 'Digital Creative Agency',
    content: 'Bekerja dengan Fitra sangat menyenangkan. Dia selalu memahami requirement dengan baik dan menghasilkan kode yang clean dan maintainable.',
    rating: 5
  },
  {
    id: '3',
    name: 'Budi Santoso',
    position: 'Lead Designer',
    company: 'Creative Studio',
    content: 'Fitra memiliki kemampuan yang excellent dalam mengimplementasikan design ke dalam kode. Hasil akhirnya selalu sesuai dengan ekspektasi.',
    rating: 5
  }
];

// Services Data
export const services: Service[] = [
  {
    id: '1',
    title: 'Pengembangan Web Kustom',
    description: 'Membangun website dan aplikasi web sesuai kebutuhan bisnis Anda',
    features: [
      'Responsive design untuk semua device',
      'SEO optimized',
      'Performa tinggi dan loading cepat',
      'Keamanan terjamin',
      'Maintenance dan support'
    ],
    icon: '💻',
    price: 'Mulai dari 5 juta'
  },
  {
    id: '2',
    title: 'Integrasi API',
    description: 'Mengintegrasikan sistem Anda dengan layanan third-party',
    features: [
      'Payment gateway integration',
      'Social media APIs',
      'Cloud services integration',
      'Real-time data synchronization',
      'Documentation lengkap'
    ],
    icon: '🔗',
    price: 'Mulai dari 2 juta'
  },
  {
    id: '3',
    title: 'Optimasi Performa',
    description: 'Meningkatkan kecepatan dan performa aplikasi web Anda',
    features: [
      'Code optimization',
      'Database tuning',
      'Caching implementation',
      'CDN setup',
      'Performance monitoring'
    ],
    icon: '⚡',
    price: 'Mulai dari 3 juta'
  },
  {
    id: '4',
    title: 'Konsultasi Teknis',
    description: 'Konsultasi untuk arsitektur dan teknologi yang tepat',
    features: [
      'Technology stack recommendation',
      'Architecture design',
      'Code review',
      'Best practices guidance',
      'Team training'
    ],
    icon: '🎯',
    price: 'Mulai dari 1 juta'
  }
];

// Blog Posts Data
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Memahami React Hooks: useState dan useEffect',
    excerpt: 'Panduan lengkap untuk memahami dan menggunakan React Hooks dalam pengembangan aplikasi modern.',
    content: 'Content lengkap artikel...',
    publishDate: '2024-01-15',
    tags: ['React', 'JavaScript', 'Frontend'],
    readTime: 8,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Best Practices untuk API Design',
    excerpt: 'Tips dan trik untuk mendesain API yang scalable dan maintainable.',
    content: 'Content lengkap artikel...',
    publishDate: '2024-01-10',
    tags: ['API', 'Backend', 'Best Practices'],
    readTime: 12,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Optimasi Performa Website dengan Lazy Loading',
    excerpt: 'Cara mengimplementasikan lazy loading untuk meningkatkan performa website.',
    content: 'Content lengkap artikel...',
    publishDate: '2024-01-05',
    tags: ['Performance', 'Optimization', 'Frontend'],
    readTime: 6,
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
  }
];

// Social Links Data
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/fitrarizky',
    icon: '🐙'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/fitrarizky',
    icon: '💼'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/fitrarizky',
    icon: '🐦'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/fitrarizky',
    icon: '📸'
  }
];

// Personal Info
export const personalInfo = {
  name: 'Fitra Rizky Oktarian',
  title: 'Fullstack Developer',
  email: 'fitra.rizky@email.com',
  phone: '+62 812-3456-7890',
  location: 'Jakarta, Indonesia',
  website: 'https://fitrarizky.dev',
  bio: 'Passionate fullstack developer dengan 5+ tahun pengalaman dalam membangun solusi web inovatif. Saya percaya bahwa teknologi harus memberikan dampak positif dan memecahkan masalah nyata. Selalu eager untuk belajar teknologi baru dan berbagi pengetahuan dengan komunitas.',
  avatar: '/profile.jpg',
  handle: 'fitrarizky',
  resume: '/resume-fitra-rizky.pdf'
};