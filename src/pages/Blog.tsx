
import React, { useState, useMemo } from 'react';
import { Search, Clock, Download, User, ArrowRight, Filter, Grid, List, Star, TrendingUp, Calendar, Eye, Heart, Share2, Bookmark, ChevronDown, Settings, Sparkles, Gamepad2, Code, BookOpen, Database, Wrench, FileText, Play, Users, Trophy, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeSection, setActiveSection] = useState('all');

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = blogPosts.filter(post => {
      const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'downloads':
          return (b.downloads || 0) - (a.downloads || 0);
        case 'readTime':
          return parseInt(a.readTime) - parseInt(b.readTime);
        case 'title':
          return a.title.localeCompare(b.title);
        default:
          return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
    });

    return filtered;
  }, [activeCategory, searchTerm, sortBy]);

  const featuredPosts = filteredAndSortedPosts.filter(post => post.featured);
  const regularPosts = filteredAndSortedPosts.filter(post => !post.featured);

  // Section-based content organization
  const sectionContent = {
    games: {
      title: 'Game Development Hub',
      description: 'Development logs, technical deep-dives, and behind-the-scenes content from our game projects',
      icon: Gamepad2,
      color: 'emerald',
      posts: blogPosts.filter(post => post.gameRelated || post.category === 'devlogs'),
      stats: { posts: 12, downloads: 2340, discussions: 156 }
    },
    webapps: {
      title: 'Web Development Center',
      description: 'Technical guides, architecture patterns, and development best practices',
      icon: Code,
      color: 'blue',
      posts: blogPosts.filter(post => post.category === 'technical' || post.tags.includes('Backend')),
      stats: { posts: 8, downloads: 1890, discussions: 89 }
    },
    tutorials: {
      title: 'Learning Resources',
      description: 'Step-by-step tutorials, guides, and educational content for developers',
      icon: BookOpen,
      color: 'orange',
      posts: blogPosts.filter(post => post.category === 'tutorials'),
      stats: { posts: 15, downloads: 3450, discussions: 234 }
    },
    ebooks: {
      title: 'Digital Library',
      description: 'Comprehensive eBooks, documentation, and downloadable resources',
      icon: Download,
      color: 'purple',
      posts: blogPosts.filter(post => post.category === 'ebooks'),
      stats: { posts: 6, downloads: 890, discussions: 45 }
    }
  };

  const quickStats = [
    { label: 'Total Articles', value: blogPosts.length, icon: FileText, color: 'text-emerald-400' },
    { label: 'Downloads', value: blogPosts.reduce((sum, post) => sum + (post.downloads || 0), 0), icon: Download, color: 'text-blue-400' },
    { label: 'Categories', value: categories.length - 1, icon: Grid, color: 'text-orange-400' },
    { label: 'Active Projects', value: '12', icon: Trophy, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      <main className="pt-20">
        {/* Enhanced Lighter Background */}
        <div className="absolute inset-0 pointer-events-none opacity-60">
          {/* Lighter ambient lighting */}
          <div className="absolute top-1/6 left-1/6 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/12 to-amber-400/10 blur-3xl rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/6 right-1/6 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/12 to-teal-400/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400/8 to-purple-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
          
          {/* Enhanced grid overlay */}
          <div className="absolute inset-0 opacity-[0.12]">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}></div>
          </div>

          {/* Premium accent elements */}
          <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-orange-400/50 animate-pulse border border-orange-400/40"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse border border-emerald-400/40" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-400/40 animate-pulse border border-blue-400/30" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-zinc-800/60 border border-zinc-700/40 px-6 py-3 mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-3 text-orange-400" />
                <span className="text-sm font-bold text-orange-400 font-mono tracking-wider">KNOWLEDGE CENTER</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-4 font-mono tracking-tight">
                DEV<span className="text-orange-400">HUB</span>
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-4"></div>
              <p className="text-lg text-zinc-300 leading-relaxed font-mono max-w-2xl mx-auto">
                Comprehensive learning resources, development insights, and technical documentation 
                from all our projects and expertise areas
              </p>
            </div>

            {/* Quick Stats Dashboard */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm p-4 text-center hover:border-zinc-600/50 transition-all">
                    <IconComponent className={`w-5 h-5 mx-auto mb-2 ${stat.color}`} />
                    <div className="text-xl font-black text-white font-mono">{stat.value}</div>
                    <div className="text-zinc-400 text-xs font-mono">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section-Based Navigation */}
        <section className="py-8 border-b border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-zinc-800/60 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
                <Database className="w-4 h-4 mr-2 text-blue-400" />
                <span className="text-xs font-bold text-blue-400 font-mono">CONTENT SECTIONS</span>
              </div>
              <div className="h-px bg-gradient-to-r from-blue-400/50 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {Object.entries(sectionContent).map(([key, section]) => {
                const IconComponent = section.icon;
                const isActive = activeSection === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveSection(isActive ? 'all' : key)}
                    className={`bg-zinc-800/40 border backdrop-blur-sm p-5 text-left hover:border-zinc-600/50 transition-all ${
                      isActive ? 'border-orange-400/60 bg-orange-400/5' : 'border-zinc-700/40'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <IconComponent className={`w-5 h-5 text-${section.color}-400`} />
                      <span className={`text-xs font-bold font-mono text-${section.color}-400`}>
                        {section.posts.length} ITEMS
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-sm mb-2 font-mono">{section.title}</h3>
                    <p className="text-zinc-400 text-xs mb-3 leading-relaxed">{section.description}</p>
                    
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className={`text-${section.color}-400 font-bold font-mono`}>{section.stats.posts}</div>
                        <div className="text-zinc-500 font-mono">Posts</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-${section.color}-400 font-bold font-mono`}>{section.stats.downloads}</div>
                        <div className="text-zinc-500 font-mono">Downloads</div>
                      </div>
                      <div className="text-center">
                        <div className={`text-${section.color}-400 font-bold font-mono`}>{section.stats.discussions}</div>
                        <div className="text-zinc-500 font-mono">Discussions</div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Advanced Search & Filter Panel */}
        <section className="py-6 border-b border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm p-6">
              <div className="grid lg:grid-cols-12 gap-4 items-center mb-4">
                {/* Advanced Search */}
                <div className="lg:col-span-5 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="Search articles, tutorials, dev logs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zinc-900/60 border border-zinc-700/40 text-white placeholder-zinc-400 focus:border-orange-400/60 focus:outline-none text-sm font-mono"
                  />
                </div>

                {/* Category Filter */}
                <div className="lg:col-span-4 flex flex-wrap gap-1">
                  {categories.slice(0, 4).map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-3 py-2 text-xs font-bold font-mono transition-all ${
                        activeCategory === category.id
                          ? 'bg-orange-500/20 border border-orange-400/60 text-orange-300'
                          : 'bg-zinc-700/40 border border-zinc-600/40 text-zinc-300 hover:bg-zinc-600/40'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Sort & View Controls */}
                <div className="lg:col-span-3 flex items-center justify-end space-x-2">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-zinc-900/60 border border-zinc-700/40 px-3 py-2 text-white text-xs font-mono focus:border-orange-400/60 focus:outline-none"
                  >
                    <option value="date">Latest First</option>
                    <option value="downloads">Most Popular</option>
                    <option value="readTime">Quick Reads</option>
                    <option value="title">Alphabetical</option>
                  </select>
                  
                  <div className="flex bg-zinc-900/60 border border-zinc-700/40">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-orange-500/20 text-orange-300' : 'text-zinc-400'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Search Results Summary */}
              <div className="flex items-center justify-between text-xs">
                <div className="text-zinc-400 font-mono">
                  <span className="text-orange-400 font-bold">{filteredAndSortedPosts.length}</span> articles found
                  {searchTerm && <span> for "{searchTerm}"</span>}
                  {activeSection !== 'all' && <span> in {sectionContent[activeSection as keyof typeof sectionContent]?.title}</span>}
                </div>
                
                <div className="flex items-center space-x-4 text-zinc-500 font-mono">
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>12.4K views today</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>892 active readers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Content Section */}
        {featuredPosts.length > 0 && (
          <section className="py-8 border-b border-zinc-800/50 relative z-10">
            <div className="container mx-auto px-6">
              <div className="flex items-center mb-6">
                <div className="flex items-center bg-zinc-800/60 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
                  <Star className="w-4 h-4 mr-2 text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 font-mono">FEATURED CONTENT</span>
                </div>
                <div className="h-px bg-gradient-to-r from-amber-400/50 to-transparent flex-1 ml-4"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {featuredPosts.slice(0, 2).map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="group bg-zinc-800/40 border border-zinc-700/40 hover:border-amber-400/60 transition-all duration-300 overflow-hidden backdrop-blur-sm"
                  >
                    <div className="flex h-32">
                      <div className="w-32 relative overflow-hidden">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 left-2">
                          <span className="bg-amber-500/90 text-zinc-950 px-2 py-1 text-xs font-bold font-mono">
                            FEATURED
                          </span>
                        </div>
                        {post.difficulty && (
                          <div className="absolute bottom-2 left-2">
                            <span className="bg-zinc-900/90 text-zinc-300 px-2 py-1 text-xs font-mono backdrop-blur-sm">
                              {post.difficulty}
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex-1 p-4 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="bg-zinc-700/60 border border-zinc-600/40 text-amber-400 px-2 py-1 text-xs font-bold font-mono">
                              {post.type}
                            </span>
                            <span className="text-zinc-500 text-xs font-mono">•</span>
                            <span className="text-zinc-400 text-xs font-mono">{post.category.toUpperCase()}</span>
                          </div>
                          
                          <h3 className="font-bold text-white mb-2 group-hover:text-amber-300 transition-colors line-clamp-2 font-mono text-sm leading-tight">
                            {post.title}
                          </h3>
                          
                          <p className="text-zinc-400 text-xs mb-2 line-clamp-2 leading-relaxed">
                            {post.excerpt}
                          </p>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                            <User className="w-3 h-3" />
                            <span>{post.author}</span>
                            <span>•</span>
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          {post.downloads && (
                            <div className="flex items-center space-x-1 text-amber-400">
                              <Download className="w-3 h-3" />
                              <span className="font-bold font-mono">{post.downloads}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Main Content Grid */}
        <section className="py-8 relative z-10">
          <div className="container mx-auto px-6">
            {filteredAndSortedPosts.length === 0 ? (
              <div className="text-center py-16 bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-xl font-bold text-white mb-3 font-mono">No content found</h3>
                <p className="text-zinc-400 mb-6 text-sm max-w-md mx-auto">
                  Try adjusting your search terms or filters to find the content you're looking for.
                </p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('all');
                    setActiveSection('all');
                  }}
                  className="bg-orange-500/20 border border-orange-400/60 text-orange-300 px-6 py-3 text-sm font-bold font-mono hover:bg-orange-500/30 transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4' : 'space-y-3'}>
                {regularPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className={`group bg-zinc-800/40 border border-zinc-700/40 hover:border-orange-400/60 transition-all duration-300 overflow-hidden backdrop-blur-sm ${
                      viewMode === 'list' ? 'flex h-24' : 'h-64'
                    }`}
                  >
                    <div className={`relative ${viewMode === 'list' ? 'w-24 h-24' : 'h-32'}`}>
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-zinc-900/90 text-zinc-300 px-2 py-1 text-xs font-bold font-mono backdrop-blur-sm">
                          {post.type}
                        </span>
                      </div>
                      
                      {viewMode === 'grid' && post.difficulty && (
                        <div className="absolute top-2 right-2">
                          <span className="bg-orange-500/90 text-white px-2 py-1 text-xs font-mono">
                            {post.difficulty}
                          </span>
                        </div>
                      )}
                      
                      {viewMode === 'grid' && (
                        <div className="absolute bottom-2 right-2 flex gap-1">
                          <button className="p-1 bg-zinc-900/90 text-white hover:bg-zinc-800 transition-colors backdrop-blur-sm">
                            <Heart className="w-3 h-3" />
                          </button>
                          <button className="p-1 bg-zinc-900/90 text-white hover:bg-zinc-800 transition-colors backdrop-blur-sm">
                            <Bookmark className="w-3 h-3" />
                          </button>
                          <button className="p-1 bg-zinc-900/90 text-white hover:bg-zinc-800 transition-colors backdrop-blur-sm">
                            <Share2 className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1 p-4 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-orange-400 text-xs font-bold font-mono">{post.category.toUpperCase()}</span>
                          {post.gameRelated && (
                            <>
                              <span className="text-zinc-500 text-xs">•</span>
                              <Gamepad2 className="w-3 h-3 text-emerald-400" />
                            </>
                          )}
                        </div>
                        
                        <h3 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors line-clamp-2 font-mono text-sm leading-tight">
                          {post.title}
                        </h3>
                        
                        {viewMode === 'grid' && (
                          <>
                            <p className="text-zinc-400 text-xs mb-3 line-clamp-2 leading-relaxed">
                              {post.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {post.tags.slice(0, 2).map((tag, index) => (
                                <span key={index} className="bg-zinc-700/60 border border-zinc-600/40 text-orange-400 px-2 py-1 text-xs font-mono">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-2 text-zinc-500 font-mono">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        {post.downloads && (
                          <div className="flex items-center space-x-1 text-orange-400">
                            <Download className="w-3 h-3" />
                            <span className="font-bold font-mono">{post.downloads}</span>
                          </div>
                        )}
                      </div>
                      
                      {viewMode === 'grid' && (
                        <button className="w-full bg-orange-500/20 border border-orange-400/60 text-orange-300 px-3 py-2 hover:bg-orange-500/30 transition-all duration-300 text-xs font-bold font-mono flex items-center justify-center space-x-2 mt-3">
                          <span>READ ARTICLE</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Quick Links to Home Sections */}
        <section className="py-8 border-t border-zinc-800/50 relative z-10">
          <div className="container mx-auto px-6">
            <div className="flex items-center mb-6">
              <div className="flex items-center bg-zinc-800/60 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2 text-purple-400" />
                <span className="text-xs font-bold text-purple-400 font-mono">EXPLORE MORE</span>
              </div>
              <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-1 ml-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link 
                to="/#games"
                className="bg-zinc-800/40 border border-zinc-700/40 hover:border-emerald-400/60 p-4 transition-all backdrop-blur-sm group"
              >
                <Gamepad2 className="w-6 h-6 text-emerald-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-emerald-300">Game Projects</h3>
                <p className="text-zinc-400 text-xs mb-3">Explore our game development projects and playable demos</p>
                <div className="flex items-center text-emerald-400 text-xs font-mono">
                  <span>View Games</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>

              <Link 
                to="/#services"
                className="bg-zinc-800/40 border border-zinc-700/40 hover:border-blue-400/60 p-4 transition-all backdrop-blur-sm group"
              >
                <Code className="w-6 h-6 text-blue-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-blue-300">Web Applications</h3>
                <p className="text-zinc-400 text-xs mb-3">Discover our web development services and solutions</p>
                <div className="flex items-center text-blue-400 text-xs font-mono">
                  <span>View Services</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>

              <Link 
                to="/#about"
                className="bg-zinc-800/40 border border-zinc-700/40 hover:border-orange-400/60 p-4 transition-all backdrop-blur-sm group"
              >
                <Users className="w-6 h-6 text-orange-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-orange-300">About Team</h3>
                <p className="text-zinc-400 text-xs mb-3">Meet our development team and learn about our expertise</p>
                <div className="flex items-center text-orange-400 text-xs font-mono">
                  <span>Learn More</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>

              <Link 
                to="/#contact"
                className="bg-zinc-800/40 border border-zinc-700/40 hover:border-purple-400/60 p-4 transition-all backdrop-blur-sm group"
              >
                <Wrench className="w-6 h-6 text-purple-400 mb-3" />
                <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-purple-300">Get Started</h3>
                <p className="text-zinc-400 text-xs mb-3">Start your project with us or get technical support</p>
                <div className="flex items-center text-purple-400 text-xs font-mono">
                  <span>Contact Us</span>
                  <ArrowRight className="w-3 h-3 ml-1" />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
