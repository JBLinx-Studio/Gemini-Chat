
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  Users, 
  TrendingUp,
  Filter,
  Clock
} from 'lucide-react';

interface UserFeedbackProps {
  reviews: Array<{
    id: number;
    username: string;
    rating: number;
    date: string;
    comment: string;
    helpful: number;
    platform: string;
    verified: boolean;
  }>;
  stats: {
    totalReviews: number;
    averageRating: number;
    ratingBreakdown: { [key: number]: number };
  };
}

const UserFeedback: React.FC<UserFeedbackProps> = ({ reviews, stats }) => {
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  return (
    <div className="bg-slate-800/95 border border-slate-700 p-4">
      <div className="flex items-center space-x-2 mb-4">
        <MessageSquare className="w-4 h-4 text-blue-400" />
        <span className="text-blue-400 font-black text-sm font-mono">COMMUNITY FEEDBACK</span>
      </div>

      {/* Rating Overview */}
      <div className="bg-slate-900/50 border border-blue-400/30 p-4 mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-black text-white">{stats.averageRating}</div>
            <div className="flex justify-center mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < Math.floor(stats.averageRating) ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                />
              ))}
            </div>
            <div className="text-slate-400 text-xs">{stats.totalReviews} reviews</div>
          </div>
          
          <div className="space-y-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <span className="text-xs text-slate-400 w-4">{rating}</span>
                <div className="flex-1 bg-slate-700 h-2">
                  <div 
                    className="bg-yellow-400 h-2" 
                    style={{ width: `${((stats.ratingBreakdown[rating] || 0) / stats.totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs text-slate-400 w-8">{stats.ratingBreakdown[rating] || 0}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-3 h-3 text-slate-400" />
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white text-xs px-2 py-1"
        >
          <option value="all">All Reviews</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="verified">Verified Only</option>
        </select>
        
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-slate-700 border border-slate-600 text-white text-xs px-2 py-1"
        >
          <option value="recent">Most Recent</option>
          <option value="helpful">Most Helpful</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>

      {/* Reviews */}
      <div className="space-y-3 max-h-60 overflow-y-auto">
        {reviews.slice(0, 4).map((review) => (
          <div key={review.id} className="bg-slate-900/50 border border-slate-600 p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="text-white font-bold text-sm">{review.username}</div>
                {review.verified && (
                  <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold">✓</span>
                )}
                <span className="bg-slate-700 text-slate-300 px-2 py-0.5 text-xs">{review.platform}</span>
              </div>
              <div className="text-slate-400 text-xs flex items-center space-x-1">
                <Clock className="w-3 h-3" />
                <span>{review.date}</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-1 mb-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
                />
              ))}
            </div>
            
            <p className="text-slate-300 text-xs mb-2 line-clamp-2">{review.comment}</p>
            
            <div className="flex items-center space-x-3 text-xs">
              <button className="text-slate-400 hover:text-green-400 flex items-center space-x-1">
                <ThumbsUp className="w-3 h-3" />
                <span>{review.helpful}</span>
              </button>
              <button className="text-slate-400 hover:text-red-400">
                <ThumbsDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-black transition-colors mt-4">
        VIEW ALL REVIEWS
      </button>
    </div>
  );
};

export default UserFeedback;
