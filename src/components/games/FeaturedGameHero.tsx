
import React, { useState } from 'react';
import { 
  Play, 
  Download, 
  Star, 
  Users, 
  Calendar, 
  ShoppingCart,
  ExternalLink,
  Trophy,
  Gamepad2,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeaturedGameHeroProps {
  game: {
    id: number;
    title: string;
    tagline: string;
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
    stats: {
      peakPlayers: number;
      averageSession: string;
      retention: string;
      esportsReady: boolean;
    };
    storeLinks: Record<string, string>;
  };
}

const FeaturedGameHero: React.FC<FeaturedGameHeroProps> = ({ game }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);

  const formatPrice = () => {
    if (game.price.base === 0) return 'FREE TO PLAY';
    if (game.price.sale) {
      return (
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 line-through">${game.price.base}</span>
          <span className="text-green-400 text-2xl font-black">${game.price.sale}</span>
        </div>
      );
    }
    return `$${game.price.base}`;
  };

  return (
    <div className="bg-slate-800/95 border border-slate-700 overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-0">
        {/* Media Section */}
        <div className="relative">
          <div className="aspect-video bg-slate-900 relative overflow-hidden">
            {showTrailer ? (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-20 h-20 text-purple-400 mx-auto mb-4" />
                  <div className="text-white text-xl font-bold mb-2">Official Trailer</div>
                  <div className="text-slate-400 mb-4">{game.trailer}</div>
                  <button 
                    onClick={() => setShowTrailer(false)}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 font-bold"
                  >
                    Close Trailer
                  </button>
                </div>
              </div>
            ) : (
              <>
                <img 
                  src={game.images.hero} 
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <button 
                  onClick={() => setShowTrailer(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/40 transition-colors group"
                >
                  <div className="bg-purple-500/90 hover:bg-purple-600/90 p-4 rounded-full group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </button>
              </>
            )}
          </div>

          {/* Screenshots Gallery */}
          <div className="flex gap-2 p-4 bg-slate-900">
            {game.images.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveScreenshot(index)}
                className={`flex-1 aspect-video rounded overflow-hidden border-2 transition-colors ${
                  activeScreenshot === index ? 'border-purple-400' : 'border-slate-600 hover:border-slate-500'
                }`}
              >
                <img src={image} alt={`Screenshot ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-green-500 text-white px-3 py-1 text-sm font-bold">
                  {game.status.replace('_', ' ')}
                </span>
                <div className="flex items-center space-x-1">
                  {game.stats.esportsReady && (
                    <Trophy className="w-4 h-4 text-yellow-400" />
                  )}
                  <TrendingUp className="w-4 h-4 text-green-400" />
                </div>
              </div>
              
              <h1 className="text-4xl font-black text-white font-mono mb-2">
                {game.title}
              </h1>
              <div className="text-purple-400 text-xl font-bold mb-4">{game.tagline}</div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {game.genres.map((genre, index) => (
                  <span key={index} className="bg-slate-700 text-cyan-400 px-3 py-1 text-sm font-bold">
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {game.description}
            </p>

            {/* Key Features */}
            <div className="mb-6">
              <h3 className="text-white font-bold text-lg mb-3">Key Features</h3>
              <div className="grid grid-cols-2 gap-2">
                {game.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-slate-900/50 border border-slate-600 p-4 text-center">
                <Star className="w-6 h-6 mx-auto mb-2 text-yellow-400" />
                <div className="text-xl font-black text-white">{game.rating}</div>
                <div className="text-slate-400 text-sm">{game.reviewCount} Reviews</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-600 p-4 text-center">
                <Users className="w-6 h-6 mx-auto mb-2 text-green-400" />
                <div className="text-xl font-black text-white">{game.playerCount}</div>
                <div className="text-slate-400 text-sm">Active Players</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-600 p-4 text-center">
                <Gamepad2 className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                <div className="text-xl font-black text-white">{game.stats.averageSession}</div>
                <div className="text-slate-400 text-sm">Avg Session</div>
              </div>
            </div>
          </div>

          {/* Purchase Section */}
          <div className="border-t border-slate-700 pt-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-2xl font-black text-white mb-1">
                  {formatPrice()}
                </div>
                <div className="text-slate-400 text-sm flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Released {new Date(game.releaseDate).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                {game.platforms.map((platform, index) => (
                  <span key={index} className="bg-slate-700 text-white px-2 py-1 text-xs">
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <Link
                to={game.storeLinks.direct || '#'}
                className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 font-black transition-colors flex items-center justify-center space-x-2"
              >
                {game.price.base === 0 ? <Play className="w-5 h-5" /> : <ShoppingCart className="w-5 h-5" />}
                <span>{game.price.base === 0 ? 'PLAY NOW' : 'BUY NOW'}</span>
              </Link>
              <Link
                to={`/game/${game.id}`}
                className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 font-black transition-colors flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>VIEW DETAILS</span>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {Object.entries(game.storeLinks).map(([store, link], index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-900/50 hover:bg-slate-600 text-slate-300 hover:text-white px-3 py-2 text-xs text-center font-bold transition-colors"
                >
                  {store.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGameHero;
