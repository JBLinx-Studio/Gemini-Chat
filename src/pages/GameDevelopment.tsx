
import React from 'react';
import { ArrowRight, Download, Star, Gamepad2, Code, Users, Trophy, Zap, Play, Github, Clock, Calendar, Activity, TrendingUp, Eye, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GameDevelopment = () => {
  const games = [
    {
      title: "Survival Horror Chronicles",
      description: "Immersive psychological horror experience with advanced AI and atmospheric storytelling that pushes the boundaries of interactive entertainment.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "5.2k",
      rating: "4.8",
      status: "Live",
      tech: ["Unity", "C#", "AI"],
      features: ["Advanced AI", "VR Ready", "Multiplayer"],
      github: "https://github.com/JBLinx-Studio/survival-horror",
      price: "FREE",
      genre: "Horror",
      platforms: ["PC", "Console", "VR"],
      lastUpdate: "2024-01-10"
    },
    {
      title: "Strategic Conquest RTS",
      description: "Real-time strategy game with complex AI opponents and massive multiplayer battles featuring epic campaigns and mod support.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop",
      downloads: "3.1k",
      rating: "4.9",
      status: "Live", 
      tech: ["Unity", "Networking", "AI"],
      features: ["32 Player Battles", "Campaign Mode", "Mod Support"],
      github: "https://github.com/JBLinx-Studio/conquest-rts",
      price: "$19.99",
      genre: "Strategy",
      platforms: ["PC", "Mobile"],
      lastUpdate: "2024-01-08"
    },
    {
      title: "Adventure Quest RPG",
      description: "Open-world RPG with branching storylines and complex character progression in a beautifully crafted fantasy universe.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop",
      downloads: "2.8k",
      rating: "4.7",
      status: "Beta",
      tech: ["Unity", "RPG Systems", "Procedural"],
      features: ["Open World", "Character Customization", "Crafting"],
      github: "https://github.com/JBLinx-Studio/adventure-rpg",
      price: "Coming Soon",
      genre: "RPG",
      platforms: ["PC", "Console"],
      lastUpdate: "2024-01-12"
    },
    {
      title: "Cyber Racing Fusion",
      description: "High-speed cyberpunk racing with customizable vehicles and neon-soaked tracks through futuristic cityscapes.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      downloads: "4.5k",
      rating: "4.6",
      status: "Live",
      tech: ["Unity", "Physics", "Multiplayer"],
      features: ["Vehicle Customization", "Online Races", "Track Editor"],
      github: "https://github.com/JBLinx-Studio/cyber-racing",
      price: "$14.99",
      genre: "Racing",
      platforms: ["PC", "Mobile", "Console"],
      lastUpdate: "2024-01-06"
    },
    {
      title: "Puzzle Mind Bender",
      description: "Mind-bending puzzle game with innovative mechanics and stunning visual effects that challenge logical thinking.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop",
      downloads: "6.7k",
      rating: "4.9",
      status: "Live",
      tech: ["Unity", "Shaders", "Audio"],
      features: ["100+ Levels", "Accessibility Options", "Creative Mode"],
      github: "https://github.com/JBLinx-Studio/puzzle-bender",
      price: "$9.99",
      genre: "Puzzle",
      platforms: ["PC", "Mobile", "Web"],
      lastUpdate: "2024-01-14"
    },
    {
      title: "Space Colony Builder",
      description: "Build and manage thriving space colonies across multiple planets with resource management and exploration elements.",
      image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=600&h=400&fit=crop",
      downloads: "1.9k",
      rating: "4.8",
      status: "Early Access",
      tech: ["Unity", "Simulation", "Networking"],
      features: ["Colony Management", "Multi-planet", "Research Trees"],
      github: "https://github.com/JBLinx-Studio/space-colony",
      price: "$24.99",
      genre: "Simulation",
      platforms: ["PC"],
      lastUpdate: "2024-01-11"
    }
  ];

  const gameStats = [
    { label: "Games Published", value: "15+", icon: Gamepad2, color: "text-purple-400" },
    { label: "Total Downloads", value: "50k+", icon: Download, color: "text-green-400" },
    { label: "Average Rating", value: "4.8★", icon: Star, color: "text-yellow-400" },
    { label: "Active Players", value: "12k+", icon: Users, color: "text-cyan-400" }
  ];

  const developmentStats = [
    { label: "Development Time", value: "2-8 months", icon: Clock },
    { label: "Team Size", value: "3-6 developers", icon: Users },
    { label: "Release Frequency", value: "Every 3 months", icon: Calendar },
    { label: "Success Rate", value: "94% positive", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Enhanced Hero Section - Matching Homepage Style */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-6 py-3 mb-6 backdrop-blur-sm">
              <Gamepad2 className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-purple-400 font-black text-sm font-mono tracking-widest">PRIORITY #1: PREMIUM GAMING EXPERIENCES</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-6">
              GAME DEVELOPMENT <span className="text-purple-400">STUDIO</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto mb-6"></div>
            
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
              We develop and publish premium games across multiple genres. From horror experiences to strategic battles, 
              each game is crafted with attention to detail and innovative gameplay mechanics.
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {gameStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-zinc-800/95 border border-zinc-700 p-6 text-center hover:border-purple-400/50 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-black text-white font-mono mb-1">{stat.value}</div>
                    <div className="text-zinc-400 text-sm font-bold">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Games Portfolio */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
              <Trophy className="w-4 h-4 mr-2 text-purple-400" />
              <span className="text-purple-400 font-black text-sm font-mono tracking-widest">OUR GAME PORTFOLIO</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
              PREMIUM <span className="text-purple-400">GAMING EXPERIENCES</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-cyan-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {games.map((game, index) => (
              <div key={index} className="bg-zinc-800/95 border border-zinc-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group">
                {/* Game Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-black backdrop-blur-sm ${
                      game.status === 'Live' ? 'bg-green-500/90 text-white' : 
                      game.status === 'Beta' ? 'bg-yellow-500/90 text-black' : 
                      'bg-blue-500/90 text-white'
                    }`}>
                      {game.status}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="bg-zinc-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{game.downloads}</span>
                      </div>
                      <div className="bg-zinc-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{game.rating}</span>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-sm bg-zinc-900/80 px-2 py-1 backdrop-blur-sm">
                      {game.price}
                    </div>
                  </div>
                </div>
                
                {/* Game Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1 group-hover:text-purple-300 transition-colors font-mono">
                        {game.title}
                      </h3>
                      <div className="text-purple-400 text-sm font-bold">{game.genre}</div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {game.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">TECH STACK</div>
                    <div className="flex flex-wrap gap-1">
                      {game.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-zinc-700 text-cyan-400 px-2 py-1 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Platforms */}
                  <div className="mb-4">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">PLATFORMS</div>
                    <div className="flex flex-wrap gap-1">
                      {game.platforms.map((platform, platformIndex) => (
                        <span key={platformIndex} className="bg-zinc-700 text-purple-400 px-2 py-1 text-xs font-medium">
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">KEY FEATURES</div>
                    <div className="space-y-1">
                      {game.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-zinc-400">
                          <Zap className="w-3 h-3 text-purple-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2 mb-3">
                    <button className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-4 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2">
                      <Play className="w-4 h-4" />
                      <span>PLAY NOW</span>
                    </button>
                    <button className="bg-zinc-700 text-white px-4 py-3 hover:bg-zinc-600 transition-all duration-300 flex items-center justify-center">
                      <Heart className="w-4 h-4" />
                    </button>
                    <a 
                      href={game.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-700 text-white px-4 py-3 hover:bg-zinc-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="text-xs text-zinc-500 flex items-center space-x-1">
                    <Activity className="w-3 h-3" />
                    <span>Updated {game.lastUpdate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Development Process Section */}
          <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-3 font-mono">
                OUR <span className="text-purple-400">DEVELOPMENT PROCESS</span>
              </h3>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                From concept to release, we follow a proven development pipeline that ensures quality and innovation in every game we create.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {developmentStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <div className="text-lg font-black text-white mb-1">{stat.value}</div>
                    <div className="text-zinc-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 font-black transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl"
              >
                <Users className="w-5 h-5" />
                <span>JOIN OUR COMMUNITY</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-4 font-black transition-all duration-300 text-base">
                REQUEST CUSTOM GAME
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GameDevelopment;
