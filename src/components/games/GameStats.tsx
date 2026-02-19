
import React from 'react';
import { Users, Download, Star, TrendingUp, Trophy, Gamepad2 } from 'lucide-react';

interface GameStatsProps {
  games: Array<{
    playerCount: string;
    rating: number;
    reviewCount: number;
    stats: {
      peakPlayers: number;
      retention: string;
    };
  }>;
}

const GameStats: React.FC<GameStatsProps> = ({ games }) => {
  const totalPlayers = games.reduce((sum, game) => {
    return sum + parseInt(game.playerCount.replace('K', '000').replace('.', ''));
  }, 0);

  const averageRating = games.reduce((sum, game) => sum + game.rating, 0) / games.length;
  const totalReviews = games.reduce((sum, game) => sum + game.reviewCount, 0);
  const peakPlayers = Math.max(...games.map(g => g.stats.peakPlayers));

  const stats = [
    {
      icon: Users,
      label: 'ACTIVE PLAYERS',
      value: `${Math.round(totalPlayers / 1000)}K+`,
      change: '+23%',
      color: 'text-green-400'
    },
    {
      icon: Star,
      label: 'AVERAGE RATING',
      value: `${averageRating.toFixed(1)}★`,
      change: '+0.2',
      color: 'text-yellow-400'
    },
    {
      icon: Download,
      label: 'TOTAL REVIEWS',
      value: `${Math.round(totalReviews / 1000)}K+`,
      change: '+15%',
      color: 'text-blue-400'
    },
    {
      icon: Trophy,
      label: 'PEAK CONCURRENT',
      value: `${Math.round(peakPlayers / 1000)}K`,
      change: '+8%',
      color: 'text-purple-400'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div key={index} className="bg-slate-800/95 border border-slate-700 p-4 text-center hover:border-purple-400/50 transition-colors">
            <IconComponent className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
            <div className="text-xl font-black text-white font-mono mb-1">{stat.value}</div>
            <div className="text-slate-400 text-sm mb-1">{stat.label}</div>
            <div className="text-green-400 text-xs font-bold">{stat.change}</div>
          </div>
        );
      })}
    </div>
  );
};

export default GameStats;
