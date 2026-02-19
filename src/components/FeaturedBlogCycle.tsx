
import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Download, User, Play, Pause, ChevronLeft, ChevronRight, Calendar, BookOpen, Eye, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';

const FeaturedBlogCycle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredPosts = blogPosts.filter(post => post.featured);

  useEffect(() => {
    if (!isAutoPlaying || featuredPosts.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredPosts.length, isAutoPlaying]);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredPosts.length);
    setIsAutoPlaying(false);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
    setIsAutoPlaying(false);
  };

  const currentPost = featuredPosts[currentIndex];

  if (!currentPost) return null;

  return (
    <section className="py-16 bg-slate-950 relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        {/* Clean Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800 border border-slate-700 px-6 py-2 mb-6" style={{ borderRadius: '8px' }}>
            <BookOpen className="w-4 h-4 mr-2 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-300 tracking-wide font-mono">LATEST INSIGHTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight font-mono">
            DEV <span className="text-cyan-400">CHRONICLES</span>
          </h2>
          
          <div className="w-24 h-0.5 bg-cyan-400 mx-auto mt-4 mb-6"></div>
          
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            In-depth tutorials, development insights, and practical guides
          </p>
        </div>

        {/* Main Featured Card - Square Design */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-800 border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden" style={{ borderRadius: '12px' }}>
            <div className="grid lg:grid-cols-5">
              {/* Image Section - Square */}
              <div className="lg:col-span-2 relative h-80 lg:h-96 group">
                <img 
                  src={currentPost.image} 
                  alt={currentPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Square Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-yellow-400 text-black px-3 py-1 text-xs font-bold" style={{ borderRadius: '6px' }}>
                    ⭐ FEATURED
                  </span>
                  <span className="bg-slate-900/80 text-white px-3 py-1 text-xs font-medium backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                    {currentPost.type}
                  </span>
                </div>
                
                {currentPost.difficulty && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-500 text-white px-3 py-1 text-xs font-bold" style={{ borderRadius: '6px' }}>
                      {currentPost.difficulty}
                    </span>
                  </div>
                )}

                {/* Square Action Buttons */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <button className="p-2 bg-slate-900/80 text-white hover:bg-slate-800 transition-all backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                    <Heart className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-900/80 text-white hover:bg-slate-800 transition-all backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-900/80 text-white hover:bg-slate-800 transition-all backdrop-blur-sm" style={{ borderRadius: '6px' }}>
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Square Navigation */}
                {featuredPosts.length > 1 && (
                  <>
                    <button
                      onClick={prevPost}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 transition-all duration-200 backdrop-blur-sm"
                      style={{ borderRadius: '8px' }}
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextPost}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 transition-all duration-200 backdrop-blur-sm"
                      style={{ borderRadius: '8px' }}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {/* Content Section */}
              <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-black text-white hover:text-cyan-300 transition-colors leading-tight mb-4 font-mono">
                      {currentPost.title}
                    </h3>
                    
                    <div className="w-16 h-0.5 bg-cyan-400 mb-4"></div>
                    
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {currentPost.excerpt}
                    </p>
                  </div>
                  
                  {/* Square Tags */}
                  <div className="flex flex-wrap gap-2">
                    {currentPost.tags.slice(0, 4).map((tag, index) => (
                      <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-1 text-xs font-medium hover:bg-slate-600 transition-colors" style={{ borderRadius: '6px' }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Meta Info */}
                  <div className="grid grid-cols-2 gap-4 text-slate-400 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-slate-700" style={{ borderRadius: '6px' }}>
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{currentPost.author}</div>
                        <div className="text-xs">Author</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-slate-700" style={{ borderRadius: '6px' }}>
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{currentPost.readTime}</div>
                        <div className="text-xs">Read Time</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <div className="p-1.5 bg-slate-700" style={{ borderRadius: '6px' }}>
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-white font-medium">{currentPost.date}</div>
                        <div className="text-xs">Published</div>
                      </div>
                    </div>
                    
                    {currentPost.downloads && (
                      <div className="flex items-center space-x-2">
                        <div className="p-1.5 bg-cyan-500/20" style={{ borderRadius: '6px' }}>
                          <Download className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-cyan-400 font-medium">{currentPost.downloads}</div>
                          <div className="text-xs">Downloads</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-700">
                  <Link 
                    to="/blog" 
                    className="flex items-center space-x-2 bg-cyan-500 text-white px-6 py-3 hover:bg-cyan-600 transition-all duration-300 font-bold"
                    style={{ borderRadius: '8px' }}
                  >
                    <span>EXPLORE ALL</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  
                  <div className="flex items-center space-x-4">
                    {/* Autoplay control */}
                    {featuredPosts.length > 1 && (
                      <button
                        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                        className="p-2 border border-slate-600 hover:border-cyan-400 transition-colors bg-slate-800 hover:bg-slate-700"
                        style={{ borderRadius: '6px' }}
                        title={isAutoPlaying ? 'Pause autoplay' : 'Resume autoplay'}
                      >
                        {isAutoPlaying ? (
                          <Pause className="w-4 h-4 text-slate-400" />
                        ) : (
                          <Play className="w-4 h-4 text-slate-400" />
                        )}
                      </button>
                    )}
                    
                    {/* Square Dots indicator */}
                    <div className="flex space-x-2">
                      {featuredPosts.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentIndex(index);
                            setIsAutoPlaying(false);
                          }}
                          className={`h-2 transition-all duration-500 ${
                            index === currentIndex 
                              ? 'bg-cyan-400 w-8' 
                              : 'bg-slate-600 hover:bg-slate-500 w-2'
                          }`}
                          style={{ borderRadius: '2px' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links - Square Cards */}
        {featuredPosts.length > 1 && (
          <div className="mt-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredPosts.filter((_, index) => index !== currentIndex).slice(0, 3).map((post, index) => (
                <div 
                  key={post.id}
                  className="bg-slate-800 border border-slate-700 p-4 hover:bg-slate-700 transition-all duration-300 cursor-pointer group hover:border-cyan-400/50"
                  style={{ borderRadius: '8px' }}
                  onClick={() => setCurrentIndex(featuredPosts.findIndex(p => p.id === post.id))}
                >
                  <div className="flex items-center space-x-3">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-12 h-12 object-cover"
                      style={{ borderRadius: '6px' }}
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-bold text-sm line-clamp-2 group-hover:text-cyan-300 transition-colors mb-1 font-mono">
                        {post.title}
                      </h4>
                      <div className="flex items-center text-slate-400 text-xs space-x-2">
                        <span>{post.readTime}</span>
                        <span>•</span>
                        <span className="font-medium">{post.type}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedBlogCycle;
