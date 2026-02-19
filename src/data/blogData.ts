export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: 'devlogs' | 'games' | 'tutorials' | 'ebooks' | 'technical' | 'articles';
  type: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  downloads?: number;
  tags: string[];
  difficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  downloadUrl?: string;
  gameRelated?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Survival Horror Chronicles: Development Deep Dive",
    excerpt: "Behind the scenes look at creating our flagship horror game with advanced AI and atmospheric design techniques.",
    category: 'devlogs',
    type: 'Dev Log',
    author: 'JBLinx Game Team',
    date: '2024-01-15',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    featured: true,
    downloads: 456,
    tags: ['Horror', 'AI', 'Game Development', 'Unity'],
    difficulty: 'Advanced',
    gameRelated: true
  },
  {
    id: 2,
    title: "Strategic Conquest RTS: Multiplayer Architecture",
    excerpt: "How we built scalable 32-player real-time battles with custom networking solutions and lag compensation.",
    category: 'devlogs',
    type: 'Dev Log',
    author: 'Network Team',
    date: '2024-01-12',
    readTime: '18 min',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=400&fit=crop',
    featured: true,
    downloads: 234,
    tags: ['RTS', 'Networking', 'Multiplayer', 'Architecture'],
    difficulty: 'Advanced',
    gameRelated: true
  },
  {
    id: 3,
    title: "Horror Game Psychology: Creating Fear",
    excerpt: "Understanding psychological triggers and implementing effective scare mechanics in horror game design.",
    category: 'tutorials',
    type: 'Tutorial',
    author: 'Game Designer',
    date: '2024-01-10',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
    featured: false,
    downloads: 334,
    tags: ['Psychology', 'Horror', 'Game Design', 'UX'],
    difficulty: 'Intermediate',
    gameRelated: true
  },
  {
    id: 4,
    title: "FastAPI Backend Architecture eBook",
    excerpt: "Comprehensive 150-page guide to building scalable backend systems with FastAPI, MySQL, and modern deployment strategies.",
    category: 'ebooks',
    type: 'eBook',
    author: 'Backend Team',
    date: '2024-01-08',
    readTime: '45 min',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop',
    featured: true,
    downloads: 189,
    tags: ['FastAPI', 'Python', 'Backend', 'Architecture'],
    difficulty: 'Advanced',
    downloadUrl: '#'
  },
  {
    id: 5,
    title: "Adventure Quest RPG: Character Progression System",
    excerpt: "Deep dive into our complex skill trees, equipment systems, and character customization mechanics.",
    category: 'devlogs',
    type: 'Dev Log',
    author: 'RPG Team',
    date: '2024-01-05',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=400&fit=crop',
    featured: false,
    downloads: 198,
    tags: ['RPG', 'Character Systems', 'Game Design', 'Progression'],
    difficulty: 'Intermediate',
    gameRelated: true
  },
  {
    id: 6,
    title: "RTS AI Development: Smart Opponents",
    excerpt: "Creating challenging AI opponents that adapt to player strategies using machine learning techniques.",
    category: 'technical',
    type: 'Technical Guide',
    author: 'AI Team',
    date: '2024-01-03',
    readTime: '20 min',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    featured: false,
    downloads: 143,
    tags: ['AI', 'Machine Learning', 'RTS', 'Game AI'],
    difficulty: 'Advanced',
    gameRelated: true
  },
  {
    id: 7,
    title: "Mobile Game Performance Optimization",
    excerpt: "Essential techniques for optimizing mobile games: rendering, memory management, and battery efficiency.",
    category: 'tutorials',
    type: 'Tutorial',
    author: 'Mobile Team',
    date: '2024-01-01',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=800&h=400&fit=crop',
    featured: false,
    downloads: 267,
    tags: ['Mobile', 'Optimization', 'Performance', 'Unity'],
    difficulty: 'Intermediate',
    gameRelated: true
  },
  {
    id: 8,
    title: "Horror Game Atmosphere: Lighting & Audio",
    excerpt: "Master class on creating atmospheric horror through advanced lighting techniques and spatial audio design.",
    category: 'tutorials',
    type: 'Tutorial',
    author: 'Audio/Visual Team',
    date: '2023-12-28',
    readTime: '22 min',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
    featured: false,
    downloads: 189,
    tags: ['Horror', 'Lighting', 'Audio', 'Atmosphere'],
    difficulty: 'Advanced',
    gameRelated: true
  },
  {
    id: 9,
    title: "Adventure Quest Beta: Player Feedback Analysis",
    excerpt: "How we analyze and implement player feedback from our beta testing phases to improve gameplay.",
    category: 'articles',
    type: 'Article',
    author: 'QA Team',
    date: '2023-12-25',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=400&fit=crop',
    featured: false,
    downloads: 156,
    tags: ['Beta Testing', 'Player Feedback', 'QA', 'Game Development'],
    difficulty: 'Beginner',
    gameRelated: true
  },
  {
    id: 10,
    title: "Indie Game Marketing: From Zero to Launch",
    excerpt: "Complete marketing strategy for indie games including social media, influencer outreach, and community building.",
    category: 'articles',
    type: 'Article',
    author: 'Marketing Team',
    date: '2023-12-20',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop',
    featured: false,
    downloads: 203,
    tags: ['Marketing', 'Indie Games', 'Social Media', 'Launch Strategy'],
    difficulty: 'Beginner',
    gameRelated: true
  }
];

export const categories = [
  { id: 'all', name: 'All Content', icon: 'FileText', count: blogPosts.length, color: 'text-blue-400' },
  { id: 'devlogs', name: 'Dev Logs', icon: 'Code', count: blogPosts.filter(p => p.category === 'devlogs').length, color: 'text-green-400' },
  { id: 'games', name: 'Game Projects', icon: 'Gamepad2', count: blogPosts.filter(p => p.category === 'games').length, color: 'text-purple-400' },
  { id: 'tutorials', name: 'Tutorials', icon: 'BookOpen', count: blogPosts.filter(p => p.category === 'tutorials').length, color: 'text-orange-400' },
  { id: 'ebooks', name: 'eBooks', icon: 'Download', count: blogPosts.filter(p => p.category === 'ebooks').length, color: 'text-cyan-400' },
  { id: 'technical', name: 'Technical', icon: 'Database', count: blogPosts.filter(p => p.category === 'technical').length, color: 'text-red-400' },
  { id: 'articles', name: 'Articles', icon: 'Sparkles', count: blogPosts.filter(p => p.category === 'articles').length, color: 'text-yellow-400' }
];
