
import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  Download, 
  Star, 
  Users, 
  MessageSquare, 
  ExternalLink,
  Clock,
  Gamepad2,
  Zap,
  Trophy,
  Eye,
  Heart,
  Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameShowcaseProps {
  game: {
    id: number;
    title: string;
    category: string;
    platform: string;
    status: string;
    releaseDate: string;
    description: string;
    trailer: string;
    images: string[];
    rating: string;
    downloads: string;
    reviews: number;
    price: string;
    features: string[];
    dlcs: Array<{
      name: string;
      price: string;
      releaseDate: string;
      status: string;
    }>;
    updates: Array<{
      version: string;
      date: string;
      notes: string;
    }>;
    blogPosts: number[];
  };
}

const GameShowcase: React.FC<GameShowcaseProps> = ({ game }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [showTrailer, setShowTrailer] = useState(false);

  return (
    <div className="bg-slate-900/95 border border-slate-700 overflow-hidden group hover:border-purple-400/50 transition-all duration-300">
      {/* Main Media Section */}
      <div className="relative h-64 bg-slate-800">
        {showTrailer ? (
          <div className="absolute inset-0 bg-black flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-bold">Trailer Playing</div>
              <div className="text-slate-400 text-sm">{game.trailer}</div>
              <button 
                onClick={() => setShowTrailer(false)}
                className="mt-2 text-purple-400 text-sm hover:text-purple-300"
              >
                Close Trailer
              </button>
            </div>
          </div>
        ) : (
          <>
            <img 
              src={game.images[activeImage]} 
              alt={game.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          </>
        )}
        
        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span className={`px-3 py-1 text-xs font-bold backdrop-blur-sm ${
            game.status === 'RELEASED' ? 'bg-green-500/90 text-white' :
            game.status === 'BETA' ? 'bg-yellow-500/90 text-black' :
            game.status === 'COMING SOON' ? 'bg-blue-500/90 text-white' :
            'bg-red-500/90 text-white'
          }`}>
            {game.status}
          </span>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-3 right-3">
          <span className="bg-slate-800/90 text-purple-400 px-2 py-1 text-xs font-bold backdrop-blur-sm">
            {game.platform}
          </span>
        </div>

        {/* Play Trailer Button */}
        <button 
          onClick={() => setShowTrailer(true)}
          className="absolute bottom-3 right-3 bg-purple-500/90 hover:bg-purple-600/90 text-white p-2 backdrop-blur-sm transition-colors"
        >
          <Play className="w-4 h-4" />
        </button>

        {/* Image Navigation */}
        <div className="absolute bottom-3 left-3 flex space-x-1">
          {game.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeImage ? 'bg-purple-400' : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-white font-black text-lg font-mono leading-tight">{game.title}</h3>
            <div className="text-purple-400 font-bold text-sm">{game.category}</div>
            <div className="text-slate-400 text-xs flex items-center space-x-1 mt-1">
              <Calendar className="w-3 h-3" />
              <span>{game.releaseDate}</span>
            </div>
          </div>
          <div className="text-green-400 font-black text-lg">{game.price}</div>
        </div>

        <p className="text-slate-300 text-sm mb-4 line-clamp-2">{game.description}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            { icon: Download, value: game.downloads, label: "DOWNLOADS" },
            { icon: Star, value: game.rating, label: "RATING" },
            { icon: MessageSquare, value: game.reviews.toString(), label: "REVIEWS" },
            { icon: Users, value: "12k", label: "PLAYERS" }
          ].map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-slate-800 border border-slate-600 p-2 text-center">
                <IconComponent className="w-3 h-3 mx-auto mb-1 text-purple-400" />
                <div className="text-xs font-bold text-white truncate">{stat.value}</div>
                <div className="text-xs text-slate-400 truncate">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Features */}
        <div className="mb-4">
          <div className="text-slate-300 text-xs font-bold mb-2">KEY FEATURES</div>
          <div className="flex flex-wrap gap-1">
            {game.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-3 py-2 font-bold transition-colors flex items-center justify-center space-x-1">
            <Play className="w-3 h-3" />
            <span>PLAY NOW</span>
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>

        {/* Related Blog Posts */}
        {game.blogPosts.length > 0 && (
          <div className="border-t border-slate-700 pt-3">
            <div className="flex items-center justify-between mb-2">
              <div className="text-slate-300 text-xs font-bold">RELATED CONTENT</div>
              <Link to="/blog" className="text-purple-400 text-xs hover:text-purple-300">
                View All
              </Link>
            </div>
            <div className="flex space-x-1">
              {game.blogPosts.slice(0, 2).map((postId, index) => (
                <Link
                  key={index}
                  to={`/blog/${postId}`}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 p-2 text-xs text-slate-300 hover:text-white transition-colors"
                >
                  Dev Blog #{postId}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameShowcase;
