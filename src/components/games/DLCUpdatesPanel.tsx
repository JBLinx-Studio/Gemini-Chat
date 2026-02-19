
import React from 'react';
import { 
  Package, 
  Download, 
  Clock, 
  Star, 
  Calendar,
  Zap,
  Gift,
  TrendingUp
} from 'lucide-react';

interface DLCUpdatesPanelProps {
  dlcs: Array<{
    name: string;
    price: string;
    releaseDate: string;
    status: string;
    image: string;
    description: string;
  }>;
  updates: Array<{
    version: string;
    date: string;
    notes: string;
    downloads: string;
    rating: string;
  }>;
}

const DLCUpdatesPanel: React.FC<DLCUpdatesPanelProps> = ({ dlcs, updates }) => {
  // Mock updates data if empty
  const mockUpdates = updates.length === 0 ? [
    {
      version: "2.1.4",
      date: "2024-01-10",
      notes: "Performance optimizations, bug fixes, and new weapon balancing updates",
      downloads: "15.2k",
      rating: "4.8"
    },
    {
      version: "2.1.3", 
      date: "2024-01-05",
      notes: "Critical security patch and improved anti-cheat system integration",
      downloads: "18.7k",
      rating: "4.9"
    },
    {
      version: "2.1.2",
      date: "2023-12-28", 
      notes: "Holiday event content, seasonal cosmetics, and matchmaking improvements",
      downloads: "22.1k",
      rating: "4.7"
    }
  ] : updates;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* DLC Section */}
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Package className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 font-black text-sm font-mono tracking-wider">DOWNLOADABLE CONTENT</span>
          </div>
          
          <div className="space-y-3">
            {dlcs.map((dlc, index) => (
              <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 p-3 hover:border-purple-400/30 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="text-white font-bold text-sm mb-1">{dlc.name}</div>
                    <div className="text-zinc-400 text-xs leading-relaxed">{dlc.description}</div>
                  </div>
                  <div className="text-purple-400 font-black text-sm ml-3">${dlc.price}</div>
                </div>
                
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 text-xs font-bold ${
                      dlc.status === 'AVAILABLE' ? 'bg-green-500/20 border border-green-500/30 text-green-400' :
                      dlc.status === 'PRE-ORDER' ? 'bg-blue-500/20 border border-blue-500/30 text-blue-400' :
                      'bg-yellow-500/20 border border-yellow-500/30 text-yellow-400'
                    }`}>
                      {dlc.status}
                    </span>
                    <div className="text-zinc-400 text-xs flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{dlc.releaseDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-purple-400/50 text-white px-4 py-2 font-black transition-all duration-300 mt-4">
            <div className="flex items-center justify-center space-x-2">
              <Gift className="w-4 h-4" />
              <span className="font-mono text-sm">VIEW ALL DLC</span>
            </div>
          </button>
        </div>

        {/* Updates Section */}
        <div className="bg-zinc-900/50 border border-zinc-700/50 p-4 backdrop-blur-sm">
          <div className="flex items-center space-x-2 mb-4">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 font-black text-sm font-mono tracking-wider">LATEST UPDATES</span>
          </div>
          
          <div className="space-y-3">
            {mockUpdates.map((update, index) => (
              <div key={index} className="bg-zinc-800/80 border border-zinc-600/50 p-3 hover:border-cyan-400/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-white font-bold text-sm">Version {update.version}</div>
                  <div className="text-cyan-400 text-xs font-mono">{update.date}</div>
                </div>
                
                <p className="text-zinc-400 text-xs mb-3 leading-relaxed">{update.notes}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-zinc-400 text-xs flex items-center space-x-1">
                      <Download className="w-3 h-3" />
                      <span>{update.downloads}</span>
                    </div>
                    <div className="text-zinc-400 text-xs flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span>{update.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 hover:border-cyan-400/50 text-white px-4 py-2 font-black transition-all duration-300 mt-4">
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4" />
              <span className="font-mono text-sm">UPDATE HISTORY</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DLCUpdatesPanel;
