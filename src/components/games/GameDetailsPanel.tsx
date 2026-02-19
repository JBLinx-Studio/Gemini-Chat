
import React, { useState } from 'react';
import { Play, ShoppingCart, Heart, Share2, Star, Users, Download, Calendar, Monitor, Smartphone, Globe, Trophy, Zap, GamepadIcon, Shield, Clock, Target } from 'lucide-react';

interface GameDetailsPanelProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    description: string;
    images: {
      hero: string;
      gallery: string[];
    };
    trailer: string;
    rating: number;
    playerCount: string;
    reviewCount: number;
    price: {
      base: number;
      sale: number | null;
      currency: string;
    };
    platforms: string[];
    genres: string[];
    features: string[];
    status: string;
    releaseDate: string;
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
      esportsReady: boolean;
    };
    systemReqs: {
      min: string;
      recommended: string;
    };
    storeLinks: Record<string, string>;
  };
}

const GameDetailsPanel: React.FC<GameDetailsPanelProps> = ({ game }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc':
        return <Monitor className="w-4 h-4" />;
      case 'mobile':
      case 'ios':
      case 'android':
        return <Smartphone className="w-4 h-4" />;
      case 'web browser':
        return <Globe className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE':
        return 'bg-green-500/20 border border-green-500/30 text-green-400 shadow-green-500/20';
      case 'BETA':
        return 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 shadow-yellow-500/20';
      case 'EARLY_ACCESS':
        return 'bg-orange-500/20 border border-orange-500/30 text-orange-400 shadow-orange-500/20';
      default:
        return 'bg-blue-500/20 border border-blue-500/30 text-blue-400 shadow-blue-500/20';
    }
  };

  return (
    <div className="h-full bg-zinc-900/50 backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="p-6 border-b border-zinc-700/50 bg-zinc-900/80">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h2 className="text-2xl lg:text-3xl font-black text-white font-mono">{game.title}</h2>
              <span className={`px-3 py-1 text-xs font-black font-mono ${getStatusColor(game.status)}`}>
                {game.status.replace('_', ' ')}
              </span>
            </div>
            <p className="text-purple-400 font-bold text-lg mb-3 font-mono">{game.tagline}</p>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {game.platforms.slice(0, 4).map((platform, index) => (
                  <div key={index} className="p-2 bg-zinc-800 border border-zinc-600 text-zinc-400 hover:text-white hover:border-purple-400/50 transition-all duration-300" title={platform}>
                    {getPlatformIcon(platform)}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                {game.genres.slice(0, 3).map((genre, index) => (
                  <span key={index} className="bg-zinc-800 border border-zinc-600 text-zinc-300 px-2 py-1 text-xs font-bold font-mono">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl lg:text-3xl font-black text-green-400 mb-2 font-mono">
              {game.price.base === 0 ? 'FREE' : game.price.sale ? (
                <div className="flex items-center space-x-3">
                  <span className="text-zinc-400 line-through text-xl">${game.price.base}</span>
                  <span>${game.price.sale}</span>
                </div>
              ) : `$${game.price.base}`}
            </div>
            
            <div className="flex items-center justify-end space-x-2 mb-3">
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`group p-3 transition-all duration-300 border ${
                  isWishlisted 
                    ? 'bg-red-500/20 border-red-500/30 text-red-400' 
                    : 'bg-zinc-800 border-zinc-600 text-zinc-400 hover:bg-red-500/20 hover:border-red-500/30 hover:text-red-400'
                }`}
              >
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-3 bg-zinc-800 border border-zinc-600 text-zinc-400 hover:bg-zinc-700 hover:border-zinc-500 hover:text-white transition-all duration-300">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="group bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-6 py-3 font-black transition-all duration-300 flex items-center space-x-2 font-mono">
                {game.price.base === 0 ? <Play className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { icon: Star, label: 'Rating', value: `${game.rating}★`, color: 'text-yellow-400' },
            { icon: Users, label: 'Players', value: game.playerCount, color: 'text-cyan-400' },
            { icon: Download, label: 'Reviews', value: `${(game.reviewCount / 1000).toFixed(1)}K`, color: 'text-blue-400' },
            { icon: Trophy, label: 'Peak', value: `${(game.stats.peakPlayers / 1000).toFixed(0)}K`, color: 'text-purple-400' }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 p-3 text-center hover:border-zinc-500 transition-colors">
                <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                <div className="text-sm lg:text-lg font-black text-white font-mono">{stat.value}</div>
                <div className="text-xs text-zinc-400 font-bold font-mono">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enhanced Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enhanced Media Gallery */}
          <div className="space-y-4">
            <div className="relative h-64 lg:h-80 border border-zinc-600/50 overflow-hidden group bg-zinc-900">
              <img 
                src={game.images.gallery[activeImage] || game.images.hero} 
                alt={game.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <button className="absolute top-4 right-4 bg-zinc-800/90 hover:bg-zinc-700/90 border border-zinc-600 hover:border-purple-400/50 text-white p-3 transition-all duration-300">
                <Play className="w-4 h-4" />
              </button>
              <div className="absolute bottom-4 left-4 bg-zinc-900/80 border border-zinc-600 text-white px-3 py-1 text-sm font-mono">
                {activeImage + 1} / {Math.max(1, game.images.gallery.length)}
              </div>
            </div>
            
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {[game.images.hero, ...game.images.gallery].slice(0, 6).map((image, index) => (
                <button 
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`flex-shrink-0 w-16 h-16 border-2 transition-all duration-300 ${
                    index === activeImage 
                      ? 'border-purple-400' 
                      : 'border-zinc-600 hover:border-zinc-500'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Game Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white font-black mb-3 flex items-center font-mono">
                <GamepadIcon className="w-4 h-4 mr-2 text-purple-400" />
                DESCRIPTION
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm">{game.description}</p>
            </div>

            <div>
              <h3 className="text-white font-black mb-3 flex items-center font-mono">
                <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                KEY FEATURES
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {game.features.slice(0, 6).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-2 bg-zinc-800/50 border border-zinc-700/50 hover:border-cyan-400/30 transition-colors">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-zinc-300 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-black mb-3 flex items-center font-mono">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                SYSTEM REQUIREMENTS
              </h3>
              <div className="bg-zinc-800/50 border border-zinc-600/50 p-4 space-y-3">
                <div>
                  <div className="text-xs text-green-400 font-black mb-1 font-mono">MINIMUM SPECS</div>
                  <div className="text-zinc-300 text-sm">{game.systemReqs.min}</div>
                </div>
                <div className="border-t border-zinc-700/50 pt-3">
                  <div className="text-xs text-cyan-400 font-black mb-1 font-mono">RECOMMENDED SPECS</div>
                  <div className="text-zinc-300 text-sm">{game.systemReqs.recommended}</div>
                </div>
              </div>
            </div>

            {/* Game Stats */}
            <div>
              <h3 className="text-white font-black mb-3 flex items-center font-mono">
                <Target className="w-4 h-4 mr-2 text-orange-400" />
                PERFORMANCE METRICS
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-zinc-800/50 border border-zinc-600/50 p-3 text-center">
                  <Clock className="w-4 h-4 mx-auto mb-1 text-blue-400" />
                  <div className="text-sm font-black text-white font-mono">{game.stats.averageSession}</div>
                  <div className="text-xs text-zinc-400 font-mono">AVG SESSION</div>
                </div>
                <div className="bg-zinc-800/50 border border-zinc-600/50 p-3 text-center">
                  <Users className="w-4 h-4 mx-auto mb-1 text-green-400" />
                  <div className="text-sm font-black text-white font-mono">{game.stats.retention}</div>
                  <div className="text-xs text-zinc-400 font-mono">RETENTION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPanel;
