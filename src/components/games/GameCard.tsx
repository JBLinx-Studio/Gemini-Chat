
import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Star, 
  ShoppingCart, 
  ExternalLink,
  Calendar,
  Users,
  Gamepad2,
  Heart,
  Share2,
  Eye,
  DollarSign,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  game: {
    id: number;
    title: string;
    tagline: string;
    category: string;
    genres: string[];
    platforms: string[];
    status: string;
    releaseDate: string;
    price: { base: number; sale: number | null; currency: string };
    rating: number;
    playerCount: string;
    reviewCount: number;
    images: { hero: string; gallery: string[] };
    trailer: string;
    description: string;
    features: string[];
    systemReqs: { min: string; recommended: string };
    dlc: Array<{ name: string; price: number; status: string }>;
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
      esportsReady: boolean;
    };
    storeLinks: Record<string, string>;
  };
}

const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showTrailer, setShowTrailer] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'LIVE': return 'bg-green-500 text-white';
      case 'BETA': return 'bg-yellow-500 text-black';
      case 'EARLY_ACCESS': return 'bg-orange-500 text-white';
      default: return 'bg-blue-500 text-white';
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case 'pc': return '🖥️';
      case 'mobile': case 'ios': case 'android': return '📱';
      case 'web browser': return '🌐';
      case 'playstation': return '🎮';
      case 'xbox': return '🎮';
      default: return '💻';
    }
  };

  const formatPrice = (price: typeof game.price) => {
    if (price.base === 0) return 'FREE';
    if (price.sale) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through text-sm">${price.base}</span>
          <span className="text-green-400 font-bold">${price.sale}</span>
        </div>
      );
    }
    return `$${price.base}`;
  };

  return (
    <div className="bg-slate-800/95 border border-slate-700 hover:border-purple-400/50 transition-all duration-300 overflow-hidden group">
      {/* Hero Image */}
      <div className="relative h-48 overflow-hidden">
        {showTrailer ? (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-bold">Trailer Playing</div>
              <button 
                onClick={() => setShowTrailer(false)}
                className="mt-2 text-purple-400 text-sm hover:text-purple-300"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <img 
            src={game.images.hero} 
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Status & Platform Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className={`px-2 py-1 text-xs font-bold ${getStatusColor(game.status)}`}>
            {game.status.replace('_', ' ')}
          </span>
        </div>

        <div className="absolute top-3 right-3 flex gap-1">
          {game.platforms.slice(0, 3).map((platform, index) => (
            <span key={index} className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm">
              {getPlatformIcon(platform)}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button 
            onClick={() => setShowTrailer(true)}
            className="bg-purple-500/90 hover:bg-purple-600/90 text-white p-2 backdrop-blur-sm transition-colors"
          >
            <Play className="w-4 h-4" />
          </button>
          <button 
            onClick={() => setIsWishlisted(!isWishlisted)}
            className={`p-2 backdrop-blur-sm transition-colors ${
              isWishlisted ? 'bg-red-500/90 text-white' : 'bg-slate-800/90 text-white hover:bg-red-500/90'
            }`}
          >
            <Heart className="w-4 h-4" />
          </button>
        </div>

        {/* Rating & Player Count */}
        <div className="absolute bottom-3 left-3 flex gap-2">
          <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400" />
            <span>{game.rating}</span>
          </div>
          <div className="bg-slate-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
            <Users className="w-3 h-3 text-green-400" />
            <span>{game.playerCount}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title & Tagline */}
        <div className="mb-3">
          <h3 className="text-white font-black text-lg font-mono leading-tight mb-1">
            {game.title}
          </h3>
          <div className="text-purple-400 font-bold text-sm">{game.tagline}</div>
          <div className="flex flex-wrap gap-1 mt-2">
            {game.genres.map((genre, index) => (
              <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                {genre}
              </span>
            ))}
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{game.description}</p>

        {/* Key Features */}
        <div className="mb-4">
          <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
          <div className="flex flex-wrap gap-1">
            {game.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-slate-900/50 text-slate-300 px-2 py-1 text-xs border border-slate-600">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="bg-slate-900/50 border border-slate-600 p-2 text-center">
            <TrendingUp className="w-3 h-3 mx-auto mb-1 text-purple-400" />
            <div className="text-xs font-bold text-white">{game.stats.retention}</div>
            <div className="text-xs text-slate-400">RETENTION</div>
          </div>
          <div className="bg-slate-900/50 border border-slate-600 p-2 text-center">
            <Eye className="w-3 h-3 mx-auto mb-1 text-green-400" />
            <div className="text-xs font-bold text-white">{game.stats.averageSession}</div>
            <div className="text-xs text-slate-400">AVG SESSION</div>
          </div>
        </div>

        {/* Price & Purchase */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-400" />
            <div className="text-white font-bold">
              {formatPrice(game.price)}
            </div>
          </div>
          <div className="text-slate-400 text-xs">
            <Calendar className="w-3 h-3 inline mr-1" />
            {new Date(game.releaseDate).toLocaleDateString()}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <Link
            to={game.storeLinks.direct || '#'}
            className="bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-bold transition-colors flex items-center justify-center space-x-1"
          >
            {game.price.base === 0 ? <Play className="w-3 h-3" /> : <ShoppingCart className="w-3 h-3" />}
            <span className="text-xs">{game.price.base === 0 ? 'PLAY' : 'BUY'}</span>
          </Link>
          <Link
            to={`/game/${game.id}`}
            className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 font-bold transition-colors flex items-center justify-center space-x-1"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="text-xs">DETAILS</span>
          </Link>
        </div>

        {/* Store Links */}
        <div className="flex gap-1 pt-2 border-t border-slate-700">
          {Object.entries(game.storeLinks).map(([store, link], index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-900/50 hover:bg-slate-600 text-slate-300 hover:text-white px-2 py-1 text-xs text-center transition-colors"
            >
              {store.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
