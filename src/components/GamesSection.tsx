
import React, { useState } from 'react';
import { 
  Gamepad2, 
  Play, 
  Download, 
  Star, 
  Users, 
  Trophy,
  TrendingUp,
  Zap,
  ArrowRight,
  Eye,
  Clock,
  Target,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GameCard from './games/GameCard';
import FeaturedGameHero from './games/FeaturedGameHero';
import GameDetailsPanel from './games/GameDetailsPanel';
import DLCUpdatesPanel from './games/DLCUpdatesPanel';
import DeveloperInsights from './games/DeveloperInsights';
import AdditionalGamesContent from './games/AdditionalGamesContent';

const GamesSection = () => {
  const [activeGame, setActiveGame] = useState(0);
  const [selectedPanel, setSelectedPanel] = useState('details');

  const games = [
    {
      id: 1,
      title: "Tactical Strike: Cyber Assault",
      tagline: "Dominate the digital battlefield",
      category: "Action/Strategy",
      genres: ["Cyberpunk", "Tactical", "Sci-Fi"],
      platforms: ["PC", "Mobile", "Web Browser"],
      status: "LIVE",
      releaseDate: "2024-08-15",
      price: { base: 49.99, sale: null, currency: "USD" },
      rating: 4.7,
      playerCount: "10k+",
      reviewCount: 2450,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?cyberpunk",
        gallery: [
          "https://source.unsplash.com/random/400x300/?cyberpunk,city",
          "https://source.unsplash.com/random/400x300/?cyberpunk,soldier",
          "https://source.unsplash.com/random/400x300/?cyberpunk,tech"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Engage in intense tactical battles in a neon-lit cyberpunk world. Command elite squads, strategize, and conquer the digital frontier.",
      features: ["Real-time strategy", "Cybernetic enhancements", "Multiplayer battles"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 970",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2060"
      },
      dlc: [
        { name: "Elite Soldier Pack", price: "19.99", releaseDate: "2024-09-01", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?cyberpunk,soldier", description: "Advanced soldier equipment and exclusive cybernetic upgrades for tactical superiority." },
        { name: "Cyberpunk Arsenal", price: "29.99", releaseDate: "2024-10-15", status: "PRE-ORDER", image: "https://source.unsplash.com/random/200x150/?cyberpunk,weapons", description: "Futuristic weapons pack with plasma rifles, neural disruptors, and quantum explosives." }
      ],
      stats: {
        peakPlayers: 15000,
        averageSession: "2 hours",
        retention: "65%",
        esportsReady: true
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        gog: "https://www.gog.com/game/your_game_id",
        direct: "https://yourgame.com/buy"
      }
    },
    {
      id: 2,
      title: "Empire Conquest: Age of Kings",
      tagline: "Forge your empire, command your legions",
      category: "Strategy/RPG",
      genres: ["Medieval", "Strategy", "RPG"],
      platforms: ["PC", "Web Browser"],
      status: "BETA",
      releaseDate: "2024-11-01",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 4.5,
      playerCount: "20k+",
      reviewCount: 1800,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?medieval",
        gallery: [
          "https://source.unsplash.com/random/400x300/?medieval,castle",
          "https://source.unsplash.com/random/400x300/?medieval,knight",
          "https://source.unsplash.com/random/400x300/?medieval,battle"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Build your kingdom, train your armies, and conquer rival empires in this epic medieval strategy game.",
      features: ["Real-time battles", "Hero customization", "Alliance system"],
      systemReqs: {
        min: "Intel Core i3, 4GB RAM, Integrated Graphics",
        recommended: "Intel Core i5, 8GB RAM, NVIDIA GTX 750"
      },
      dlc: [
        { name: "Royal Edition", price: "24.99", releaseDate: "2024-09-15", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?medieval,crown", description: "Royal court expansion with noble bloodlines and exclusive castle designs." },
        { name: "Kingdoms Expansion", price: "34.99", releaseDate: "2024-12-01", status: "PRE-ORDER", image: "https://source.unsplash.com/random/200x150/?medieval,kingdom", description: "Massive world expansion adding 5 new kingdoms and diplomatic systems." }
      ],
      stats: {
        peakPlayers: 25000,
        averageSession: "3 hours",
        retention: "70%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        direct: "https://yourgame.com/buy"
      }
    },
    {
      id: 3,
      title: "Last Haven: Zombie Outbreak",
      tagline: "Survive the apocalypse, rebuild humanity",
      category: "Survival/Horror",
      genres: ["Zombie", "Survival", "Horror"],
      platforms: ["PC", "PlayStation", "Xbox"],
      status: "EARLY_ACCESS",
      releaseDate: "2025-03-10",
      price: { base: 29.99, sale: 24.99, currency: "USD" },
      rating: 4.2,
      playerCount: "5k+",
      reviewCount: 950,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?zombie",
        gallery: [
          "https://source.unsplash.com/random/400x300/?zombie,city",
          "https://source.unsplash.com/random/400x300/?zombie,survivor",
          "https://source.unsplash.com/random/400x300/?zombie,apocalypse"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Scavenge for resources, fortify your base, and fight off hordes of zombies in this post-apocalyptic survival horror game.",
      features: ["Base building", "Zombie hordes", "Co-op multiplayer"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, NVIDIA GTX 960",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA RTX 2070"
      },
      dlc: [
        { name: "Survivor Pack", price: "14.99", releaseDate: "2024-08-20", status: "AVAILABLE", image: "https://source.unsplash.com/random/200x150/?zombie,survivor", description: "Essential survival gear and advanced crafting recipes for the apocalypse." },
        { name: "Undead Expansion", price: "19.99", releaseDate: "2025-01-10", status: "COMING_SOON", image: "https://source.unsplash.com/random/200x150/?zombie,horde", description: "New zombie types, underground bunkers, and co-op campaign missions." }
      ],
      stats: {
        peakPlayers: 8000,
        averageSession: "2.5 hours",
        retention: "60%",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        playstation: "https://store.playstation.com/your_game_id",
        xbox: "https://www.xbox.com/your_game_id"
      }
    },
    {
      id: 4,
      title: "Stellar Frontier: Space Odyssey",
      tagline: "Explore the cosmos, build your empire",
      category: "Sci-Fi/Strategy",
      genres: ["Space", "Strategy", "Sci-Fi"],
      platforms: ["PC", "Mobile"],
      status: "COMING_SOON",
      releaseDate: "2025-06-20",
      price: { base: 0, sale: null, currency: "USD" },
      rating: 0,
      playerCount: "0",
      reviewCount: 0,
      images: {
        hero: "https://source.unsplash.com/random/800x600/?space",
        gallery: [
          "https://source.unsplash.com/random/400x300/?space,planet",
          "https://source.unsplash.com/random/400x300/?space,ship",
          "https://source.unsplash.com/random/400x300/?space,colony"
        ]
      },
      trailer: "https://www.youtube.com/watch?v=your_trailer_id",
      description: "Embark on an epic journey through the stars. Colonize planets, research technologies, and command fleets in this expansive space strategy game.",
      features: ["4X gameplay", "Space battles", "Tech research"],
      systemReqs: {
        min: "Intel Core i5, 8GB RAM, Integrated Graphics",
        recommended: "Intel Core i7, 16GB RAM, NVIDIA GTX 1060"
      },
      dlc: [],
      stats: {
        peakPlayers: 0,
        averageSession: "0",
        retention: "0",
        esportsReady: false
      },
      storeLinks: {
        steam: "https://store.steampowered.com/app/your_app_id",
        mobile: "https://play.google.com/store/apps/details?id=your.app.id"
      }
    }
  ];

  const gameStats = [
    {
      icon: Gamepad2,
      value: "15+",
      label: "Games",
      color: "text-purple-400"
    },
    {
      icon: Users,
      value: "150k+",
      label: "Players",
      color: "text-blue-400"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating",
      color: "text-yellow-400"
    },
    {
      icon: Trophy,
      value: "50+",
      label: "Awards",
      color: "text-green-400"
    }
  ];

  const currentGame = games[activeGame];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-24 overflow-hidden">
      {/* Gaming-themed unique background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {/* Primary gaming ambient lighting with circuit-like patterns */}
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] bg-gradient-conic from-purple-500/10 via-cyan-500/8 to-pink-500/6 blur-3xl rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-conic from-blue-500/12 via-violet-500/8 to-purple-500/6 blur-3xl rounded-full animate-spin" style={{animationDelay: '10s', animationDuration: '25s', animationDirection: 'reverse'}}></div>
        
        {/* Gaming matrix-style grid overlay */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="w-full h-full" style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(236, 72, 153, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 60px 60px, 40px 40px, 40px 40px'
          }}></div>
        </div>

        {/* Floating gaming elements - pixelated and gaming-themed */}
        <div className="absolute top-1/3 left-1/6 w-6 h-6 bg-purple-400/60 animate-bounce border-2 border-purple-400/80 shadow-lg shadow-purple-400/40" style={{clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)', animationDelay: '0s'}}></div>
        <div className="absolute top-1/5 right-1/4 w-8 h-8 bg-cyan-400/50 animate-bounce border border-cyan-400/70 shadow-lg shadow-cyan-400/30" style={{clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)', animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-pink-400/40 animate-bounce border border-pink-400/60 shadow-lg shadow-pink-400/20" style={{clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-4 bg-violet-400/50 animate-bounce border border-violet-400/70 shadow-lg shadow-violet-400/30" style={{animationDelay: '6s'}}></div>

        {/* Gaming accent lines - more dynamic */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/60 to-transparent animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-violet-400/60 to-transparent animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Games Header - styled like Services */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-purple-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Gamepad2 className="w-3 h-3 mr-1 text-purple-400" />
            <span className="text-purple-400 font-black text-xs font-mono tracking-widest">GAME UNIVERSE</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            WHAT WE <span className="text-purple-400">PLAY</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-purple-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Immersive gaming experiences across multiple platforms and genres
          </p>

          {/* Game Stats */}
          <div className="grid grid-cols-4 gap-1 max-w-xl mx-auto mb-4">
            {gameStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-1.5 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-0.5`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Game Selection Grid */}
        <div className="grid lg:grid-cols-4 gap-3 mb-5">
          {games.map((game, index) => {
            const isActive = activeGame === index;
            return (
              <div 
                key={index} 
                className={`bg-zinc-800/95 border transition-all duration-300 cursor-pointer p-3 backdrop-blur-sm ${
                  isActive ? 'border-purple-500/50 shadow-lg' : 'border-zinc-700 hover:border-zinc-600'
                }`}
                onMouseEnter={() => setActiveGame(index)}
              >
                {/* Game Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center`}>
                      <Gamepad2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-sm font-black font-mono ${isActive ? 'text-purple-400' : 'text-white'}`}>
                        {game.title}
                      </h3>
                      <p className="text-xs text-slate-400">{game.category}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-white font-bold text-xs">{game.rating}</span>
                    </div>
                    <div className={`text-xs font-bold ${isActive ? 'text-purple-400' : 'text-slate-400'}`}>
                      {game.playerCount}
                    </div>
                  </div>
                </div>

                {/* Game Content */}
                <div className="space-y-2">
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">{game.description}</p>
                  
                  {/* Genres */}
                  <div className="flex flex-wrap gap-1">
                    {game.genres.slice(0, 3).map((genre, genreIndex) => (
                      <span 
                        key={genreIndex} 
                        className={`px-2 py-0.5 text-xs font-bold border transition-all duration-300 ${
                          isActive 
                            ? 'border-purple-500/40 bg-purple-500/10 text-purple-400' 
                            : 'border-zinc-600 bg-zinc-700/50 text-slate-300'
                        }`}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  {/* Stats & CTA */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center space-x-2 text-xs">
                      <Users className="w-3 h-3 text-slate-400" />
                      <span className="text-slate-300 font-medium">{game.stats.peakPlayers}k</span>
                    </div>
                    
                    <Link 
                      to={`/game/${game.id}`} 
                      className={`flex items-center space-x-1 text-xs font-bold transition-all duration-300 hover:scale-105 ${
                        isActive ? 'text-purple-400' : 'text-slate-400 hover:text-purple-400'
                      }`}
                    >
                      <span>PLAY</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Panel Navigation */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 p-3 mb-4 backdrop-blur-sm">
          <div className="flex justify-center space-x-2">
            {[
              { id: 'details', label: 'GAME DETAILS', icon: Target },
              { id: 'dlc', label: 'DLC & UPDATES', icon: Download },
              { id: 'insights', label: 'DEV INSIGHTS', icon: Eye },
              { id: 'community', label: 'COMMUNITY', icon: Users }
            ].map((panel) => {
              const IconComponent = panel.icon;
              return (
                <button
                  key={panel.id}
                  onClick={() => setSelectedPanel(panel.id)}
                  className={`flex items-center space-x-1 px-3 py-2 text-xs font-bold transition-all duration-300 ${
                    selectedPanel === panel.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-zinc-700/50 text-slate-400 hover:bg-zinc-600/50 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-3 h-3" />
                  <span>{panel.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Panel Content */}
        <div className="bg-zinc-800/80 border border-zinc-600/50 backdrop-blur-sm mb-4">
          {selectedPanel === 'details' && <GameDetailsPanel game={currentGame} />}
          {selectedPanel === 'dlc' && <DLCUpdatesPanel dlcs={currentGame.dlc} updates={[]} />}
          {selectedPanel === 'insights' && <DeveloperInsights games={games} />}
          {selectedPanel === 'community' && (
            <div className="p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-white font-black text-xl mb-2">JOIN THE COMMUNITY</h3>
              <p className="text-slate-400 mb-4">Connect with players, share strategies, and get the latest updates</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-zinc-900/50 border border-purple-400/30 p-4 text-center">
                  <div className="text-purple-400 font-black text-xl">150k+</div>
                  <div className="text-slate-400 text-sm">Active Players</div>
                </div>
                <div className="bg-zinc-900/50 border border-blue-400/30 p-4 text-center">
                  <div className="text-blue-400 font-black text-xl">50+</div>
                  <div className="text-slate-400 text-sm">Tournaments</div>
                </div>
                <div className="bg-zinc-900/50 border border-cyan-400/30 p-4 text-center">
                  <div className="text-cyan-400 font-black text-xl">24/7</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/game-development" 
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Zap className="w-3 h-3" />
            <span>EXPLORE ALL GAMES</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GamesSection;
