
import React from 'react';
import { ArrowRight, Users, Star, Download, Shield, Cpu, Database, Globe, Zap, Settings, BarChart3 } from 'lucide-react';

interface WebApp {
  title: string;
  category: string;
  downloads: string;
  rating: string;
  tier: string;
  description: string;
  tech: string[];
  features: string[];
  pricing: string;
  users: string;
  uptime: string;
  screenshots?: string[];
  lastUpdate?: string;
  version?: string;
}

interface WebAppCardProps {
  app: WebApp;
  isSelected: boolean;
  onSelect: () => void;
}

const WebAppCard: React.FC<WebAppCardProps> = ({ app, isSelected, onSelect }) => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'PREMIUM': return 'from-purple-500 to-pink-500';
      case 'ENTERPRISE': return 'from-orange-500 to-red-500';
      case 'PROFESSIONAL': return 'from-green-500 to-emerald-500';
      default: return 'from-blue-500 to-cyan-500';
    }
  };

  const getTierIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'saas platform': return Settings;
      case 'e-commerce solution': return Globe;
      case 'business intelligence': return BarChart3;
      default: return Cpu;
    }
  };

  const IconComponent = getTierIcon(app.category);

  return (
    <div 
      className={`cursor-pointer transition-all duration-300 border-2 ${
        isSelected 
          ? 'border-cyan-400 bg-zinc-800/95' 
          : 'border-zinc-700 bg-zinc-800/80 hover:border-zinc-600 hover:bg-zinc-800/90'
      }`}
      onClick={onSelect}
    >
      {/* App Header */}
      <div className="p-4 border-b border-zinc-700">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 bg-gradient-to-br ${getTierColor(app.tier)} flex items-center justify-center shadow-lg`}>
              <IconComponent className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`font-black text-base font-mono transition-colors ${
                isSelected ? 'text-cyan-300' : 'text-white'
              }`}>
                {app.title}
              </h3>
              <div className="text-cyan-400 text-sm font-bold">{app.category}</div>
            </div>
          </div>
          
          <div className="text-right">
            <div className={`px-3 py-1 text-xs font-black mb-1 bg-gradient-to-r ${getTierColor(app.tier)} text-white`}>
              {app.tier}
            </div>
            <div className="text-green-400 font-black text-lg">{app.pricing}</div>
          </div>
        </div>
        
        <p className="text-zinc-300 text-sm mb-3">{app.description}</p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { icon: Users, value: app.users.split(' ')[0], label: 'Users', color: 'text-blue-400' },
            { icon: Star, value: app.rating, label: 'Rating', color: 'text-yellow-400' },
            { icon: Download, value: app.downloads, label: 'Downloads', color: 'text-green-400' },
            { icon: Shield, value: app.uptime, label: 'Uptime', color: 'text-purple-400' }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div key={index} className="bg-zinc-900/60 border border-zinc-600 p-2 text-center">
                <StatIcon className={`w-3 h-3 mx-auto mb-1 ${stat.color}`} />
                <div className="text-white font-black text-xs">{stat.value}</div>
                <div className="text-zinc-400 text-xs">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Tech Stack Preview */}
      <div className="p-3 bg-zinc-900/50">
        <div className="flex items-center space-x-2 mb-2">
          <Cpu className="w-3 h-3 text-cyan-400" />
          <span className="text-cyan-400 font-bold text-xs font-mono">TECH STACK</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {app.tech.slice(0, 3).map((tech, index) => (
            <span key={index} className="bg-zinc-700 text-cyan-300 px-2 py-1 text-xs font-bold border border-cyan-400/30">
              {tech}
            </span>
          ))}
          {app.tech.length > 3 && (
            <span className="text-zinc-400 text-xs">+{app.tech.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default WebAppCard;
