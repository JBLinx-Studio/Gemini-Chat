
import React from 'react';
import { Calendar, Download, Zap, Package, TrendingUp, Star, MessageSquare, Code, Bug, Sparkles } from 'lucide-react';

interface GameUpdatesPanelProps {
  game: {
    id: number;
    title: string;
    dlc: Array<{ name: string; price: number; status: string }>;
    updates?: Array<{
      version: string;
      date: string;
      notes: string;
      downloads: string;
      rating: string;
    }>;
    devLogs?: Array<{
      id: number;
      title: string;
      date: string;
      excerpt: string;
      category: string;
    }>;
  };
}

const GameUpdatesPanel: React.FC<GameUpdatesPanelProps> = ({ game }) => {
  const gameUpdates = game.updates || [
    {
      version: '3.2.1',
      date: '2 days ago',
      notes: `Latest improvements for ${game.title} including performance optimizations and gameplay balance.`,
      downloads: '15.2K',
      rating: '4.9'
    },
    {
      version: '3.1.8',
      date: '1 week ago', 
      notes: 'Critical bug fixes and quality of life improvements based on community feedback.',
      downloads: '12.8K',
      rating: '4.8'
    }
  ];

  const devBlogs = game.devLogs || [
    {
      id: 1,
      title: `Behind the Scenes: ${game.title} Development`,
      date: '3 days ago',
      excerpt: 'Deep dive into our development process and upcoming features.',
      category: 'Development'
    },
    {
      id: 2,
      title: 'Community Feedback Integration',
      date: '1 week ago', 
      excerpt: 'How we\'re incorporating player suggestions into the next update.',
      category: 'Community'
    }
  ];

  const getUpdateTypeIcon = (version: string) => {
    if (version.includes('.')) {
      const parts = version.split('.');
      const patch = parseInt(parts[parts.length - 1]);
      if (patch === 0) return <Sparkles className="w-3 h-3" />;
      if (patch < 5) return <Bug className="w-3 h-3" />;
      return <Zap className="w-3 h-3" />;
    }
    return <Code className="w-3 h-3" />;
  };

  const getUpdateTypeColor = (version: string) => {
    if (version.includes('.')) {
      const parts = version.split('.');
      const patch = parseInt(parts[parts.length - 1]);
      if (patch === 0) return 'text-purple-400 border-purple-400/30 bg-purple-500/10';
      if (patch < 5) return 'text-orange-400 border-orange-400/30 bg-orange-500/10';
      return 'text-green-400 border-green-400/30 bg-green-500/10';
    }
    return 'text-blue-400 border-blue-400/30 bg-blue-500/10';
  };

  return (
    <div className="h-full bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 flex flex-col backdrop-blur-sm">
      {/* Compact Header */}
      <div className="p-3 border-b border-slate-700/50 bg-slate-900/90 backdrop-blur-sm">
        <div className="flex items-center space-x-2 mb-2">
          <div className="p-1 bg-green-500/20 border border-green-400/30">
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <span className="text-green-400 font-black text-xs font-mono tracking-widest block">UPDATES & DEV LOGS</span>
            <div className="text-slate-400 text-xs">{game.title}</div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Recent Updates */}
        <div className="p-3 border-b border-slate-700/50">
          <div className="flex items-center space-x-1 mb-3">
            <Download className="w-3 h-3 text-green-400" />
            <span className="text-white font-black text-xs">RECENT UPDATES</span>
          </div>
          <div className="space-y-2">
            {gameUpdates.slice(0, 3).map((update, index) => (
              <div key={index} className={`group relative p-3 border cursor-pointer transition-all duration-300 overflow-hidden ${getUpdateTypeColor(update.version)} hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center space-x-1">
                      {getUpdateTypeIcon(update.version)}
                      <span className="text-white font-black text-xs">v{update.version}</span>
                    </div>
                    <div className="text-green-400 text-xs font-bold">{update.date}</div>
                  </div>
                  
                  <p className="text-slate-300 text-xs mb-2 line-clamp-2">{update.notes}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Download className="w-2 h-2" />
                      <span>{update.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <Star className="w-2 h-2 text-yellow-400" />
                      <span>{update.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DLC Content */}
        <div className="p-3 border-b border-slate-700/50">
          <div className="flex items-center space-x-1 mb-3">
            <Package className="w-3 h-3 text-yellow-400" />
            <span className="text-white font-black text-xs">DLC & EXPANSIONS</span>
          </div>
          <div className="space-y-2">
            {game.dlc.slice(0, 2).map((dlc, index) => (
              <div key={index} className="group relative p-3 bg-slate-800/30 border border-yellow-400/30 hover:border-yellow-400 transition-all duration-300 overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-white font-black text-xs">{dlc.name}</div>
                    <div className="text-yellow-400 font-black text-xs">${dlc.price}</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 text-xs font-black ${
                      dlc.status === 'available' ? 'bg-green-500 text-white' :
                      dlc.status === 'preorder' ? 'bg-blue-500 text-white' :
                      'bg-yellow-500 text-black'
                    }`}>
                      {dlc.status.toUpperCase()}
                    </span>
                    {dlc.status === 'available' && (
                      <button className="text-yellow-400 text-xs hover:text-yellow-300 transition-colors">
                        VIEW →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dev Blogs */}
        <div className="p-3">
          <div className="flex items-center space-x-1 mb-3">
            <MessageSquare className="w-3 h-3 text-blue-400" />
            <span className="text-white font-black text-xs">DEVELOPER BLOGS</span>
          </div>
          <div className="space-y-2">
            {devBlogs.slice(0, 2).map((blog) => (
              <div key={blog.id} className="group relative p-3 bg-slate-800/30 border border-blue-400/30 hover:border-blue-400 transition-all duration-300 cursor-pointer overflow-hidden hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="bg-blue-500/20 border border-blue-400/30 text-blue-400 px-1 py-0.5 text-xs font-bold">
                      {blog.category}
                    </span>
                    <div className="text-slate-400 text-xs">{blog.date}</div>
                  </div>
                  <div className="text-white font-black text-xs mb-1 line-clamp-1">{blog.title}</div>
                  <p className="text-slate-300 text-xs line-clamp-2">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-3 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/30 hover:border-blue-400 text-blue-400 hover:text-blue-300 px-3 py-2 text-xs font-black transition-all duration-300 hover:scale-105">
            VIEW ALL UPDATES
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameUpdatesPanel;
