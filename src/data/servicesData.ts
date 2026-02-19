
export const mainServices = [
  {
    id: 'game-development',
    title: 'Game Development',
    description: 'Immersive gaming experiences with cutting-edge Unity and Unreal Engine development',
    icon: 'Gamepad2',
    gradient: 'from-purple-600 via-purple-500 to-indigo-600',
    bgImage: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
    features: ['Unity & Unreal Engine', 'Cross-Platform Gaming', 'VR/AR Experiences', 'Multiplayer Integration'],
    stats: { projects: '6+', rating: '4.9', clients: '15+' },
    link: '/game-development',
    price: 'From $8,000',
    duration: '6-12 weeks',
    subcategories: [
      { name: 'Survival Games', description: 'Open-world survival experiences' },
      { name: 'Horror Games', description: 'Psychological horror & thriller games' },
      { name: 'RTS Games', description: 'Real-time strategy games' },
      { name: 'FPS Games', description: 'First-person shooter experiences' },
      { name: 'Top-down Games', description: 'Action RPG & arcade games' },
      { name: 'Space Games', description: 'Space exploration & simulation' }
    ]
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    description: 'Modern, scalable web applications with React, Next.js, and cutting-edge technologies',
    icon: 'Monitor',
    gradient: 'from-blue-600 via-blue-500 to-cyan-600',
    bgImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
    features: ['React & Next.js', 'Full-Stack Solutions', 'E-commerce Platforms', 'Progressive Web Apps'],
    stats: { projects: '40+', rating: '4.8', clients: '30+' },
    link: '/web-applications',
    price: 'From $5,000',
    duration: '4-8 weeks',
    subcategories: [
      { name: 'E-commerce Platforms', description: 'Complete online store solutions' },
      { name: 'SaaS Applications', description: 'Software as a Service platforms' },
      { name: 'Corporate Websites', description: 'Professional business websites' },
      { name: 'Portfolio Sites', description: 'Creative showcase websites' },
      { name: 'Web Templates', description: 'Reusable web application templates' }
    ]
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications for iOS and Android',
    icon: 'Smartphone',
    gradient: 'from-green-600 via-green-500 to-emerald-600',
    bgImage: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop',
    features: ['iOS & Android', 'Flutter & React Native', 'App Store Optimization', 'Performance Optimization'],
    stats: { projects: '20+', rating: '4.9', clients: '18+' },
    link: '/mobile-development',
    price: 'From $6,000',
    duration: '6-10 weeks',
    subcategories: [
      { name: 'Flutter Apps', description: 'Cross-platform Flutter applications' },
      { name: 'React Native', description: 'JavaScript-based mobile apps' },
      { name: 'Native iOS', description: 'Swift & SwiftUI applications' },
      { name: 'Native Android', description: 'Kotlin & Java applications' },
      { name: 'Mobile Templates', description: 'Ready-to-use mobile app templates' }
    ]
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    description: 'Robust APIs and backend systems with FastAPI, Node.js, and modern databases',
    icon: 'Database',
    gradient: 'from-orange-600 via-orange-500 to-red-600',
    bgImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
    features: ['FastAPI & Node.js', 'Database Design', 'API Development', 'Cloud Integration'],
    stats: { projects: '35+', rating: '4.7', clients: '25+' },
    link: '/backend-development',
    price: 'From $4,000',
    duration: '3-6 weeks',
    subcategories: [
      { name: 'FastAPI Systems', description: 'High-performance Python APIs' },
      { name: 'Database Solutions', description: 'MySQL, PostgreSQL & NoSQL' },
      { name: 'Authentication', description: 'Secure user management systems' },
      { name: 'Cloud APIs', description: 'Scalable cloud-based APIs' },
      { name: 'Backend Templates', description: 'Ready-to-use backend templates' }
    ]
  }
];

export const additionalServices = [
  {
    id: 'digital-publishing',
    title: 'Digital Publishing',
    icon: 'Book',
    description: 'Technical books, documentation, and digital content creation',
    subcategories: [
      { name: 'Technical Books', description: 'Programming & development guides' },
      { name: 'Game Dev Logs', description: 'Development progress documentation' },
      { name: 'API Documentation', description: 'Comprehensive API guides' },
      { name: 'Tutorial Series', description: 'Step-by-step learning content' }
    ]
  },
  {
    id: 'content-creation',
    title: 'Content Creation',
    icon: 'PenTool',
    description: 'Engaging blogs, articles, and technical content',
    subcategories: [
      { name: 'Technical Writing', description: 'Code documentation & guides' },
      { name: 'Blog Management', description: 'Regular content updates' },
      { name: 'Dev Logs', description: 'Development progress updates' },
      { name: 'SEO Content', description: 'Search-optimized articles' }
    ]
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services',
    icon: 'Cloud',
    description: 'Scalable cloud infrastructure and DevOps solutions',
    subcategories: [
      { name: 'AWS Solutions', description: 'Amazon Web Services deployment' },
      { name: 'Firebase Integration', description: 'Google Firebase services' },
      { name: 'DevOps Setup', description: 'CI/CD pipelines & automation' },
      { name: 'Cloud Migration', description: 'Move to cloud infrastructure' }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    icon: 'Shield',
    description: 'Security audits and protection for your applications',
    subcategories: [
      { name: 'Security Audits', description: 'Comprehensive vulnerability assessments' },
      { name: 'Code Review', description: 'Security-focused code analysis' },
      { name: 'Auth Systems', description: 'Secure authentication implementation' },
      { name: 'Security Training', description: 'Team security education' }
    ]
  }
];
