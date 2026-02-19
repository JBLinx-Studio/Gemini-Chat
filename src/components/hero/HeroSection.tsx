import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Hexagon, Rocket, Users, Star, Award, Trophy, ExternalLink, Zap, Code, Heart, Building2, Gamepad2, Activity, Shield, Database, Globe, Cpu, Smartphone, Monitor, Cloud, Brain, Settings, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfessionalTerminal from '../terminal/ProfessionalTerminal';
const HeroSection = () => {
  const [liveStats, setLiveStats] = useState({
    activeUsers: 2847,
    githubStars: 1623,
    totalProjects: 47,
    satisfaction: 98.7
  });

  // Live stats animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveStats(prev => ({
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 3),
        githubStars: prev.githubStars + (Math.random() > 0.7 ? 1 : 0),
        totalProjects: prev.totalProjects,
        satisfaction: Math.min(99.9, prev.satisfaction + (Math.random() - 0.5) * 0.03)
      }));
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  const products = [{
    name: 'CodeFusion',
    icon: Code,
    color: 'text-emerald-400',
    category: 'DEV TOOLS'
  }, {
    name: 'VitalitySync',
    icon: Heart,
    color: 'text-red-400',
    category: 'HEALTH TECH'
  }, {
    name: 'MindMate',
    icon: Brain,
    color: 'text-purple-400',
    category: 'AI ASSISTANT'
  }, {
    name: 'NestCore',
    icon: Building2,
    color: 'text-orange-400',
    category: 'ENTERPRISE'
  }, {
    name: 'CloudSync',
    icon: Cloud,
    color: 'text-blue-400',
    category: 'CLOUD SERVICES'
  }];
  const companyValues = [{
    icon: Rocket,
    label: "Innovation First",
    desc: "Cutting-edge solutions"
  }, {
    icon: Shield,
    label: "Enterprise Grade",
    desc: "Professional quality"
  }, {
    icon: Globe,
    label: "Global Impact",
    desc: "Worldwide reach"
  }, {
    icon: Zap,
    label: "Performance",
    desc: "Lightning fast delivery"
  }];
  return <section className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl py-16 overflow-hidden">
      {/* Enhanced paradoxical background effects - matching Services */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Primary ambient lighting with paradoxical movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/12 to-amber-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-400/8 to-orange-400/6 blur-3xl rounded-full animate-pulse" style={{
        animationDelay: '4s'
      }}></div>
        
        {/* Paradoxical secondary layers */}
        <div className="absolute top-1/6 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-orange-300/10 to-emerald-300/6 blur-2xl rounded-full animate-pulse transform rotate-12" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-teal-400/8 to-amber-400/6 blur-2xl rounded-full animate-pulse transform -rotate-12" style={{
        animationDelay: '3s'
      }}></div>
        
        {/* Enhanced paradoxical grid overlay */}
        <div className="absolute inset-0 opacity-[0.12]">
          <div className="w-full h-full" style={{
          backgroundImage: `
              linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(245, 158, 11, 0.2) 1px, transparent 1px)
            `,
          backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
        }}></div>
        </div>

        {/* Floating geometric paradoxical shapes */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-orange-400/40 transform rotate-45 animate-pulse border border-orange-400/30 shadow-lg shadow-orange-400/20"></div>
        <div className="absolute top-1/5 right-1/4 w-6 h-6 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30 shadow-lg shadow-emerald-400/20" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-amber-400/35 animate-pulse border border-amber-400/25 shadow-lg shadow-amber-400/20 transform rotate-12" style={{
        animationDelay: '4s'
      }}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-12 bg-teal-400/30 transform rotate-30 animate-pulse border border-teal-400/20 shadow-lg shadow-teal-400/20" style={{
        animationDelay: '6s'
      }}></div>

        {/* Enhanced paradoxical accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transform rotate-1"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transform -rotate-1"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/40 to-transparent transform rotate-2"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform -rotate-2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Studio Header - matching Services style */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-emerald-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Hexagon className="w-3 h-3 mr-1 text-emerald-400" />
            <span className="text-emerald-400 font-black text-xs font-mono tracking-widest">STUDIO 
HUB</span>
          </div>
          
          <h1 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PROFESSIONAL <span className="text-emerald-400">TECHNOLOGY</span> SOLUTIONS
          </h1>
          
          <div className="w-16 h-0.5 bg-emerald-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Products across web, mobile, gaming, and enterprise solutions
          </p>

          {/* Compact Company Values Strip */}
          <div className="flex flex-wrap justify-center gap-1 mb-3">
            {companyValues.map((value, index) => {
            const IconComponent = value.icon;
            return <div key={index} className="bg-zinc-800/80 border border-zinc-700 px-2 py-1 hover:bg-zinc-700/80 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center space-x-1">
                    <IconComponent className="w-3 h-3 text-emerald-400" />
                    <div>
                      <div className="text-white text-xs font-bold">{value.label}</div>
                      <div className="text-zinc-500 text-xs">{value.desc}</div>
                    </div>
                  </div>
                </div>;
          })}
          </div>

          {/* Compact Product Ecosystem */}
          <div className="mb-4">
            <div className="text-zinc-500 text-xs font-mono font-bold tracking-widest mb-2">FLAGSHIP ECOSYSTEM</div>
            <div className="flex flex-wrap justify-center gap-1">
              {products.map((product, index) => {
              const IconComponent = product.icon;
              return <div key={index} className="bg-zinc-800/80 border border-zinc-700 px-2 py-1 hover:bg-zinc-700/80 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex items-center space-x-1">
                      <IconComponent className={`w-3 h-3 ${product.color}`} />
                      <div className="text-left">
                        <div className={`${product.color} text-xs font-bold`}>{product.name}</div>
                        <div className="text-zinc-500 text-xs font-mono">{product.category}</div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>

          {/* Compact Live Performance Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-4">
            {[{
            icon: Trophy,
            value: "10",
            label: "PRODUCTS",
            color: "emerald",
            desc: "Active"
          }, {
            icon: Users,
            value: liveStats.activeUsers.toLocaleString(),
            label: "USERS",
            color: "cyan",
            live: true,
            desc: "Global"
          }, {
            icon: Star,
            value: liveStats.githubStars.toLocaleString(),
            label: "STARS",
            color: "yellow",
            live: true,
            desc: "GitHub"
          }, {
            icon: Award,
            value: `${liveStats.satisfaction.toFixed(1)}%`,
            label: "SATISFACTION",
            color: "purple",
            desc: "Rating"
          }].map((stat, index) => {
            const IconComponent = stat.icon;
            const colorClasses = {
              emerald: "border-emerald-500/60 bg-zinc-800/95 text-emerald-400",
              cyan: "border-cyan-500/60 bg-zinc-800/95 text-cyan-400",
              yellow: "border-yellow-500/60 bg-zinc-800/95 text-yellow-400",
              purple: "border-purple-500/60 bg-zinc-800/95 text-purple-400"
            };
            return <div key={index} className={`${colorClasses[stat.color]} border backdrop-blur-sm p-2 text-center transition-all duration-300`}>
                  <IconComponent className="w-3 h-3 mx-auto mb-1" />
                  <div className="text-xs font-black flex items-center justify-center space-x-1 font-mono">
                    <span>{stat.value}</span>
                    {stat.live && <div className="w-1 h-1 bg-current rounded-full animate-pulse"></div>}
                  </div>
                  <div className="text-xs font-bold opacity-90">{stat.label}</div>
                  <div className="text-xs opacity-70">{stat.desc}</div>
                </div>;
          })}
          </div>
        </div>

        {/* Compact Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-3 mb-4">
          {/* Left Panel - Development Console */}
          <div className="bg-zinc-800/95 border border-zinc-700/70 backdrop-blur-sm p-3 hover:bg-zinc-800/100 hover:border-zinc-600/70 transition-all duration-300 px-[11px] py-[11px] my-0 mx-0">
            <div className="flex items-center space-x-2 mb-3">
              <Monitor className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black text-sm font-mono tracking-wide">DEVELOPMENT CONSOLE</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>
            <ProfessionalTerminal />
            <div className="mt-2 text-xs text-zinc-500 font-mono">
              Real-time development environment
            </div>
          </div>

          {/* Right Panel - Compact Mission Control */}
          <div className="bg-zinc-800/95 border border-zinc-700/70 backdrop-blur-sm p-3 hover:bg-zinc-800/100 hover:border-zinc-600/70 transition-all duration-300">
            <div className="flex items-center space-x-2 mb-3">
              <Activity className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-black text-sm font-mono tracking-wide">MISSION CONTROL</span>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-400/50 to-transparent"></div>
            </div>

            <div className="space-y-2">
              <div className="bg-zinc-700/70 border border-emerald-400/40 p-2 hover:bg-zinc-700/90 hover:border-emerald-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-1">
                    <Globe className="w-3 h-3 text-emerald-400" />
                    <span className="text-white font-bold text-xs font-mono">GLOBAL OPS</span>
                  </div>
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-emerald-400 text-xs">All systems operational • 99.9% uptime</div>
              </div>

              <div className="bg-zinc-700/70 border border-cyan-400/40 p-2 hover:bg-zinc-700/90 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-1">
                    <Layers className="w-3 h-3 text-cyan-400" />
                    <span className="text-white font-bold text-xs font-mono">PORTFOLIO</span>
                  </div>
                  <div className="text-cyan-400 text-xs font-bold">47 PRODUCTS</div>
                </div>
                <div className="text-cyan-400 text-xs">Multi-platform • 150k+ users • Enterprise grade</div>
              </div>

              <div className="bg-zinc-700/70 border border-purple-400/40 p-2 hover:bg-zinc-700/90 hover:border-purple-400/60 transition-all duration-300">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-1">
                    <Rocket className="w-3 h-3 text-purple-400" />
                    <span className="text-white font-bold text-xs font-mono">INNOVATION</span>
                  </div>
                  <div className="text-purple-400 text-xs font-bold">CONTINUOUS</div>
                </div>
                <div className="text-purple-400 text-xs">Agile development • Weekly releases</div>
              </div>
            </div>

            {/* Compact Action Buttons */}
            <div className="flex flex-col gap-2 pt-3 border-t border-zinc-600/50 mt-3">
              <Link to="/blog" className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-4 py-2 font-black transition-all duration-300 flex items-center justify-center space-x-1 shadow-lg text-xs">
                <Rocket className="w-3 h-3" />
                <span>EXPLORE ECOSYSTEM</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              
              <a href="https://github.com/orgs/JBLinx-Studio/repositories" target="_blank" rel="noopener noreferrer" className="bg-zinc-700/80 border border-emerald-400/70 text-emerald-400 hover:bg-zinc-600/80 hover:border-emerald-300 px-4 py-2 font-black transition-all duration-300 flex items-center justify-center space-x-1 text-xs">
                <Github className="w-3 h-3" />
                <span>VIEW SOURCE</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Compact Bottom CTA */}
        <div className="text-center">
          <div className="mb-3">
            <div className="text-zinc-500 text-xs font-mono font-bold tracking-widest mb-1">READY FOR EXCELLENCE?</div>
            <p className="text-zinc-400 text-xs max-w-2xl mx-auto">
              Join thousands who trust JBLinx Studio for critical technology needs. 
              <span className="text-emerald-400 font-bold"> Professional-grade solutions</span> that drive results.
            </p>
          </div>
          
          <Link to="/blog" className="inline-flex items-center bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm">
            <Zap className="w-3 h-3" />
            <span>DISCOVER PORTFOLIO</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          
          <div className="mt-2 text-xs text-zinc-600 font-mono">
            Professional • Reliable • Innovative • Results-Driven
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;