
import React from 'react';
import { 
  Gamepad2, 
  Trophy, 
  Zap, 
  Target, 
  Shield, 
  Sword, 
  Skull, 
  Crown,
  Download,
  Star,
  Users,
  Clock,
  Play
} from 'lucide-react';

const AdditionalGamesContent = () => {
  const additionalGames = [
    {
      title: "Cyber Warfare Tactics",
      category: "Tactical/Strategy", 
      downloads: "7.8k",
      rating: "4.9",
      status: "RELEASED",
      description: "Advanced tactical combat in cyberpunk environments with neural interfaces",
      tech: ["Unity", "NVIDIA RTX", "Neural AI", "Blockchain"],
      price: "$34.99",
      players: "1-16",
      difficulty: "EXPERT",
      playtime: "150+ hrs"
    },
    {
      title: "Mystic Realms Online",
      category: "MMORPG/Fantasy",
      downloads: "12.3k", 
      rating: "4.8",
      status: "BETA",
      description: "Massive fantasy world with dynamic weather and AI-driven storylines",
      tech: ["Unreal 5", "AWS", "Machine Learning", "Photogrammetry"],
      price: "FREE BETA",
      players: "1-200",
      difficulty: "MEDIUM",
      playtime: "500+ hrs"
    },
    {
      title: "Racing Legends Pro",
      category: "Racing/Simulation",
      downloads: "9.1k",
      rating: "4.7", 
      status: "RELEASED",
      description: "Hyper-realistic racing with advanced physics and car customization",
      tech: ["Unity HDRP", "Physics Pro", "VR Ready", "4K HDR"],
      price: "$29.99",
      players: "1-24",
      difficulty: "HARD",
      playtime: "75+ hrs"
    }
  ];

  const exclusiveContent = [
    { title: "VIP Beta Access Pass", type: "EXCLUSIVE", downloads: "2.1k", price: "$99" },
    { title: "Developer Commentary Track", type: "PREMIUM", downloads: "5.4k", price: "$19" },
    { title: "Behind the Scenes Documentary", type: "SPECIAL", downloads: "8.7k", price: "$29" },
    { title: "Concept Art Collection", type: "DIGITAL", downloads: "6.2k", price: "$15" }
  ];

  const achievements = [
    { name: "Master Strategist", icon: Crown, rarity: "LEGENDARY", progress: "12/15" },
    { name: "Combat Veteran", icon: Sword, rarity: "EPIC", progress: "8/10" },
    { name: "Speed Demon", icon: Zap, rarity: "RARE", progress: "25/30" },
    { name: "Perfectionist", icon: Target, rarity: "MYTHIC", progress: "3/5" }
  ];

  return (
    <div className="flex space-x-6 min-w-max">
      {/* Additional Games Panel */}
      <div className="bg-slate-800/95 border border-slate-700 p-6 min-w-[400px]">
        <div className="flex items-center space-x-2 mb-6">
          <Gamepad2 className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-black text-lg font-mono">EXTENDED LIBRARY</span>
        </div>
        
        <div className="space-y-4">
          {additionalGames.map((game, index) => (
            <div key={index} className="bg-slate-900/80 border border-purple-400/30 p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-white font-black text-lg font-mono">{game.title}</h3>
                  <div className="text-cyan-400 font-bold text-sm">{game.category}</div>
                </div>
                <div className="text-green-400 font-black text-lg">{game.price}</div>
              </div>
              
              <p className="text-slate-300 text-sm mb-4">{game.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {game.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="grid grid-cols-4 gap-2 mb-4">
                {[
                  { icon: Users, value: game.players, label: "PLAYERS" },
                  { icon: Clock, value: game.playtime, label: "TIME" },
                  { icon: Shield, value: game.difficulty, label: "LEVEL" },
                  { icon: Star, value: game.rating, label: "RATING" }
                ].map((stat, statIndex) => {
                  const IconComponent = stat.icon;
                  return (
                    <div key={statIndex} className="bg-slate-800 border border-slate-600 p-2 text-center">
                      <IconComponent className="w-3 h-3 mx-auto mb-1 text-purple-400" />
                      <div className="text-xs font-black text-white">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
              
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-black px-4 py-2 font-black transition-colors">
                ACCESS NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Exclusive Content Panel */}
      <div className="bg-slate-800/95 border border-slate-700 p-6 min-w-[350px]">
        <div className="flex items-center space-x-2 mb-6">
          <Crown className="w-5 h-5 text-yellow-400" />
          <span className="text-yellow-400 font-black text-lg font-mono">EXCLUSIVE CONTENT</span>
        </div>
        
        <div className="space-y-4">
          {exclusiveContent.map((content, index) => (
            <div key={index} className="bg-slate-900/50 border border-yellow-400/30 p-4">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-white font-bold text-sm">{content.title}</div>
                  <span className="bg-yellow-500 text-black px-2 py-1 text-xs font-bold mt-1 inline-block">
                    {content.type}
                  </span>
                </div>
                <div className="text-yellow-400 font-black text-sm">{content.price}</div>
              </div>
              <div className="text-slate-400 text-xs flex items-center space-x-1">
                <Download className="w-3 h-3" />
                <span>{content.downloads}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 font-black transition-colors mt-6">
          UNLOCK ALL EXCLUSIVE
        </button>
      </div>

      {/* Achievements Panel */}
      <div className="bg-slate-800/95 border border-slate-700 p-6 min-w-[300px]">
        <div className="flex items-center space-x-2 mb-6">
          <Trophy className="w-5 h-5 text-orange-400" />
          <span className="text-orange-400 font-black text-lg font-mono">ACHIEVEMENTS</span>
        </div>
        
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="bg-slate-900/50 border border-orange-400/30 p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <IconComponent className="w-5 h-5 text-orange-400" />
                  <div>
                    <div className="text-white font-bold text-sm">{achievement.name}</div>
                    <span className={`px-2 py-1 text-xs font-bold ${
                      achievement.rarity === 'LEGENDARY' ? 'bg-yellow-500 text-black' :
                      achievement.rarity === 'EPIC' ? 'bg-purple-500 text-white' :
                      achievement.rarity === 'MYTHIC' ? 'bg-red-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {achievement.rarity}
                    </span>
                  </div>
                </div>
                <div className="text-slate-400 text-xs">
                  Progress: {achievement.progress}
                </div>
                <div className="w-full bg-slate-700 h-2 mt-2">
                  <div className="bg-orange-400 h-2" style={{
                    width: `${(parseInt(achievement.progress.split('/')[0]) / parseInt(achievement.progress.split('/')[1])) * 100}%`
                  }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdditionalGamesContent;
