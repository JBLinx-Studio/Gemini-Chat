
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Eye, BookOpen, Gamepad2, Code, Sparkles, Download, MessageSquare, TrendingUp, Star, Database, Grid, FileText, Users, Trophy } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts.find(post => post.featured) || blogPosts[0];
  const regularPosts = filteredPosts.filter(post => post.id !== featuredPost.id).slice(0, 6);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: any } = {
      FileText: BookOpen,
      Code: Code,
      Gamepad2: Gamepad2,
      BookOpen: BookOpen,
      Download: Download,
      Database: Code,
      Sparkles: Sparkles
    };
    return icons[iconName] || BookOpen;
  };

  const contentSections = [
    {
      title: 'Game Dev Logs',
      description: 'Behind-the-scenes development content',
      icon: Gamepad2,
      color: 'emerald',
      count: blogPosts.filter(post => post.gameRelated).length,
      link: '/blog?section=games'
    },
    {
      title: 'Technical Guides',
      description: 'Web development tutorials and guides',
      icon: Code,
      color: 'blue',
      count: blogPosts.filter(post => post.category === 'technical').length,
      link: '/blog?section=webapps'
    },
    {
      title: 'Learning Resources',
      description: 'Educational content and tutorials',
      icon: BookOpen,
      color: 'orange',
      count: blogPosts.filter(post => post.category === 'tutorials').length,
      link: '/blog?section=tutorials'
    },
    {
      title: 'Digital Library',
      description: 'eBooks and downloadable resources',
      icon: Download,
      color: 'purple',
      count: blogPosts.filter(post => post.category === 'ebooks').length,
      link: '/blog?section=ebooks'
    }
  ];

  const quickStats = [
    { label: 'Articles', value: blogPosts.length, icon: FileText },
    { label: 'Downloads', value: '7.2K', icon: Download },
    { label: 'Readers', value: '12.4K', icon: Users },
    { label: 'Projects', value: '24', icon: Trophy }
  ];

  return (
    <section id="blog" className="relative min-h-screen overflow-hidden bg-zinc-900/85 backdrop-blur-xl py-16">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-1/6 left-1/6 w-[600px] h-[600px] bg-gradient-to-r from-orange-400/12 to-amber-400/10 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/6 right-1/6 w-[500px] h-[500px] bg-gradient-to-r from-emerald-400/12 to-teal-400/10 blur-3xl rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-400/8 to-purple-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '6s'}}></div>
        
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="absolute top-1/5 left-1/5 w-4 h-4 bg-orange-400/50 animate-pulse border border-orange-400/40"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-emerald-400/50 rounded-full animate-pulse border border-emerald-400/40" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-blue-400/40 animate-pulse border border-blue-400/30" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center bg-zinc-800/60 border border-zinc-700/40 px-6 py-3 mb-4 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-3 text-orange-400" />
            <span className="text-sm font-bold text-orange-400 font-mono tracking-wider">KNOWLEDGE CENTER</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4 font-mono">
            Dev <span className="text-orange-400">Chronicles</span>
          </h2>
          
          <p className="text-zinc-300 leading-relaxed font-mono text-sm">
            Comprehensive learning resources, development insights, and technical documentation 
            from all our projects and expertise areas
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-2xl mx-auto">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm p-4 text-center hover:border-zinc-600/50 transition-colors">
                <IconComponent className="w-4 h-4 mx-auto mb-2 text-orange-400" />
                <div className="text-lg font-black text-white font-mono">{stat.value}</div>
                <div className="text-zinc-400 text-xs font-mono">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Content Sections */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="flex items-center bg-zinc-800/60 border border-zinc-700/40 px-4 py-2 backdrop-blur-sm">
              <Database className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-xs font-bold text-blue-400 font-mono">CONTENT SECTIONS</span>
            </div>
            <div className="h-px bg-gradient-to-r from-blue-400/50 to-transparent flex-1 ml-4"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {contentSections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={index}
                  to={section.link}
                  className="bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm p-4 hover:border-zinc-600/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <IconComponent className={`w-5 h-5 text-${section.color}-400`} />
                    <span className={`text-xs font-bold font-mono text-${section.color}-400`}>
                      {section.count}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2 font-mono group-hover:text-orange-300 transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed">
                    {section.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Featured Post - Enhanced */}
        <div className="bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm overflow-hidden mb-8 hover:border-orange-400/50 transition-all duration-300 group">
          <div className="grid lg:grid-cols-2">
            <div className="relative">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="w-full h-56 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-orange-500/90 backdrop-blur-sm text-white px-3 py-1 text-sm font-bold font-mono">
                  FEATURED
                </span>
              </div>
              {featuredPost.difficulty && (
                <div className="absolute top-4 right-4">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-3 py-1 text-sm font-mono border border-zinc-600/50">
                    {featuredPost.difficulty}
                  </span>
                </div>
              )}
              
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-600/50 text-zinc-300 px-2 py-1 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <span className="bg-zinc-700/60 border border-zinc-600/40 text-orange-400 px-3 py-1 text-sm font-bold font-mono">
                  {featuredPost.type}
                </span>
                <span className="text-zinc-500 text-sm font-mono">•</span>
                <span className="text-zinc-400 text-sm font-mono">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4 group-hover:text-orange-300 transition-colors font-mono leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-zinc-400 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-zinc-500 font-mono">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{featuredPost.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>{featuredPost.readTime}</span>
                </div>
                {featuredPost.downloads && (
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>{featuredPost.downloads}</span>
                  </div>
                )}
              </div>
              
              <Link 
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center space-x-3 bg-orange-500/20 hover:bg-orange-500/30 border border-orange-400/60 hover:border-orange-400/80 text-orange-300 px-6 py-3 font-bold font-mono transition-all duration-200"
              >
                <span>READ ARTICLE</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recent Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {regularPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="block bg-zinc-800/40 border border-zinc-700/40 backdrop-blur-sm overflow-hidden hover:border-orange-400/50 transition-all duration-300 group"
            >
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="bg-zinc-900/80 backdrop-blur-sm text-zinc-300 px-2 py-1 text-xs font-bold font-mono">
                    {post.type}
                  </span>
                </div>
                {post.difficulty && (
                  <div className="absolute top-2 right-2">
                    <span className="bg-orange-500/90 text-white px-2 py-1 text-xs font-mono">
                      {post.difficulty}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-orange-400 text-xs font-bold font-mono">{post.category.toUpperCase()}</span>
                  {post.gameRelated && (
                    <>
                      <span className="text-zinc-500 text-xs">•</span>
                      <Gamepad2 className="w-3 h-3 text-emerald-400" />
                    </>
                  )}
                </div>
                
                <h3 className="text-white font-bold mb-2 group-hover:text-orange-300 transition-colors font-mono text-sm line-clamp-2 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-zinc-400 text-xs mb-3 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 font-mono">
                  <span>{post.date}</span>
                  <div className="flex items-center space-x-2">
                    <span>{post.readTime}</span>
                    {post.downloads && (
                      <>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Download className="w-3 h-3" />
                          <span>{post.downloads}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="bg-zinc-700/60 border border-zinc-600/40 text-zinc-400 px-2 py-1 text-xs font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced Footer Links */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8">
            <Link
              to="/blog"
              className="bg-zinc-800/40 hover:bg-zinc-700/40 border border-zinc-700/40 hover:border-orange-400/60 text-zinc-300 hover:text-orange-300 px-6 py-4 font-bold transition-all duration-200 text-center font-mono text-sm"
            >
              <BookOpen className="w-5 h-5 mx-auto mb-2" />
              <span>BROWSE ALL CONTENT</span>
            </Link>
            <Link
              to="/blog?section=games"
              className="bg-zinc-800/40 hover:bg-zinc-700/40 border border-zinc-700/40 hover:border-emerald-400/60 text-zinc-300 hover:text-emerald-300 px-6 py-4 font-bold transition-all duration-200 text-center font-mono text-sm"
            >
              <Gamepad2 className="w-5 h-5 mx-auto mb-2" />
              <span>GAME DEV LOGS</span>
            </Link>
            <Link
              to="/blog?section=tutorials"
              className="bg-zinc-800/40 hover:bg-zinc-700/40 border border-zinc-700/40 hover:border-blue-400/60 text-zinc-300 hover:text-blue-300 px-6 py-4 font-bold transition-all duration-200 text-center font-mono text-sm"
            >
              <Code className="w-5 h-5 mx-auto mb-2" />
              <span>TECH TUTORIALS</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
