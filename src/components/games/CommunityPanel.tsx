
import React from 'react';
import { MessageSquare, Users, ThumbsUp, Star, Clock, Trophy, TrendingUp, Award, Flame, Shield } from 'lucide-react';

interface CommunityPanelProps {
  game: {
    id: number;
    title: string;
    rating: number;
    reviewCount: number;
    playerCount: string;
  };
}

const CommunityPanel: React.FC<CommunityPanelProps> = ({ game }) => {
  const recentActivity = [
    {
      id: 1,
      type: 'review',
      user: 'TacticalPro99',
      game: game,
      rating: 5,
      comment: 'The new weapon balance changes are perfect! Combat feels much more strategic now.',
      time: '2 hours ago',
      helpful: 24,
      verified: true,
      badge: 'elite'
    },
    {
      id: 2,
      type: 'achievement',
      user: 'RTSMaster',
      game: game,
      achievement: 'Empire Builder',
      description: 'Built 100 cities across different campaigns',
      time: '4 hours ago',
      rarity: 'Legendary',
      badge: 'pro'
    },
    {
      id: 3,
      type: 'review',
      user: 'SurvivalGamer',
      game: game,
      rating: 4,
      comment: 'Early access is promising! The atmosphere is incredible and co-op works great.',
      time: '6 hours ago',
      helpful: 18,
      verified: true,
      badge: 'veteran'
    },
    {
      id: 4,
      type: 'tournament',
      event: 'Weekly Championship',
      game: game,
      participants: 2847,
      prize: '$5,000',
      time: 'Starting in 2 days',
      featured: true
    }
  ];

  const topPlayers = [
    { name: 'EliteSoldier', game: game, rank: '#1', score: '2,847 MMR', streak: '12 wins', badge: 'champion', level: 99 },
    { name: 'CommanderX', game: game, rank: '#2', score: '98% WR', streak: '25 wins', badge: 'master', level: 87 },
    { name: 'Survivor', game: game, rank: '#3', score: '247 days', streak: '15 days', badge: 'legend', level: 76 }
  ];

  const communityStats = [
    { label: 'TOTAL PLAYERS', value: '127K+', icon: Users, color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { label: 'REVIEWS TODAY', value: '342', icon: MessageSquare, color: 'text-green-400', bg: 'bg-green-500/20' },
    { label: 'TOURNAMENTS', value: '15', icon: Trophy, color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
  ];

  const getBadgeIcon = (badge: string) => {
    switch (badge) {
      case 'champion': return <Trophy className="w-3 h-3 text-yellow-400" />;
      case 'master': return <Award className="w-3 h-3 text-purple-400" />;
      case 'legend': return <Shield className="w-3 h-3 text-red-400" />;
      case 'elite': return <Star className="w-3 h-3 text-blue-400" />;
      case 'pro': return <Flame className="w-3 h-3 text-orange-400" />;
      case 'veteran': return <Shield className="w-3 h-3 text-green-400" />;
      default: return <Users className="w-3 h-3 text-slate-400" />;
    }
  };

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'champion': return 'bg-yellow-500/20 border-yellow-400/30 text-yellow-400';
      case 'master': return 'bg-purple-500/20 border-purple-400/30 text-purple-400';
      case 'legend': return 'bg-red-500/20 border-red-400/30 text-red-400';
      case 'elite': return 'bg-blue-500/20 border-blue-400/30 text-blue-400';
      case 'pro': return 'bg-orange-500/20 border-orange-400/30 text-orange-400';
      case 'veteran': return 'bg-green-500/20 border-green-400/30 text-green-400';
      default: return 'bg-slate-500/20 border-slate-400/30 text-slate-400';
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 border border-slate-700/50 backdrop-blur-sm h-full flex flex-col">
      {/* Enhanced Header */}
      <div className="p-4 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
            <Users className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <span className="text-blue-400 font-black text-sm font-mono tracking-widest block">COMMUNITY HUB</span>
            <div className="text-slate-400 text-xs mt-1">Live Activity & Leaderboards</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto game-scroll">
        {/* Enhanced Community Stats */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="grid grid-cols-3 gap-2">
            {communityStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className={`${stat.bg} border border-slate-600/30 p-3 text-center transition-all duration-300 hover:scale-105 backdrop-blur-sm`}>
                  <IconComponent className={`w-4 h-4 mx-auto mb-1 ${stat.color}`} />
                  <div className="text-sm font-black text-white">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-bold">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Recent Activity Feed */}
        <div className="p-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-black text-sm">LIVE ACTIVITY</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <div className="space-y-3 max-h-80 overflow-y-auto game-scroll">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="group relative bg-slate-800/30 border border-slate-600/50 p-3 hover:border-blue-400/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10">
                  {activity.type === 'review' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <MessageSquare className="w-3 h-3 text-blue-400" />
                          <span className="text-white font-black text-sm">{activity.user}</span>
                          {activity.verified && (
                            <span className="bg-green-500 text-white px-1 py-0.5 text-xs font-bold rounded">✓</span>
                          )}
                          {activity.badge && (
                            <span className={`px-2 py-0.5 text-xs font-bold border ${getBadgeColor(activity.badge)} rounded flex items-center space-x-1`}>
                              {getBadgeIcon(activity.badge)}
                              <span>{activity.badge.toUpperCase()}</span>
                            </span>
                          )}
                          <div className="flex items-center">
                            {Array.from({ length: activity.rating }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="text-slate-400 text-xs flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {activity.time}
                        </div>
                      </div>
                      <div className="text-slate-400 text-xs mb-1">{activity.game.title}</div>
                      <p className="text-slate-300 text-xs mb-2 line-clamp-2">{activity.comment}</p>
                      <div className="flex items-center">
                        <ThumbsUp className="w-3 h-3 text-green-400 mr-1" />
                        <span className="text-green-400 text-xs font-bold">{activity.helpful} helpful</span>
                      </div>
                    </div>
                  )}

                  {activity.type === 'achievement' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 text-yellow-400" />
                          <span className="text-white font-black text-sm">{activity.user}</span>
                          {activity.badge && (
                            <span className={`px-2 py-0.5 text-xs font-bold border ${getBadgeColor(activity.badge)} rounded flex items-center space-x-1`}>
                              {getBadgeIcon(activity.badge)}
                              <span>{activity.badge.toUpperCase()}</span>
                            </span>
                          )}
                          <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold rounded shadow-lg">{activity.rarity}</span>
                        </div>
                        <div className="text-slate-400 text-xs">{activity.time}</div>
                      </div>
                      <div className="text-slate-400 text-xs mb-1">{activity.game.title}</div>
                      <div className="text-yellow-400 font-black text-sm mb-1">{activity.achievement}</div>
                      <p className="text-slate-300 text-xs">{activity.description}</p>
                    </div>
                  )}

                  {activity.type === 'tournament' && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Trophy className="w-3 h-3 text-purple-400" />
                          <span className="text-white font-black text-sm">{activity.event}</span>
                          {activity.featured && (
                            <span className="bg-purple-500 text-white px-2 py-1 text-xs font-bold rounded">FEATURED</span>
                          )}
                        </div>
                        <div className="text-slate-400 text-xs">{activity.time}</div>
                      </div>
                      <div className="text-slate-400 text-xs mb-2">{activity.game.title}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-purple-400 text-xs font-bold">{activity.participants} participants</span>
                        <span className="text-green-400 font-black text-xs">{activity.prize} prize</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Top Players */}
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-4">
            <Trophy className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 font-black text-sm">TOP PLAYERS</span>
          </div>

          <div className="space-y-3 mb-4">
            {topPlayers.map((player, index) => (
              <div key={index} className="group relative flex items-center justify-between bg-slate-800/30 border border-slate-600/50 p-3 hover:border-yellow-400/50 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 flex items-center space-x-3 flex-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400 font-black text-sm min-w-[2rem]">{player.rank}</span>
                    <div className={`px-2 py-1 text-xs font-bold border ${getBadgeColor(player.badge)} rounded flex items-center space-x-1`}>
                      {getBadgeIcon(player.badge)}
                      <span>LV{player.level}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-black text-sm">{player.name}</div>
                    <div className="text-slate-400 text-xs">{player.game.title}</div>
                  </div>
                </div>
                <div className="relative z-10 text-right">
                  <div className="text-white font-black text-sm">{player.score}</div>
                  <div className="text-green-400 text-xs font-bold">{player.streak}</div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-4 py-3 font-black transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25">
            JOIN COMMUNITY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPanel;
