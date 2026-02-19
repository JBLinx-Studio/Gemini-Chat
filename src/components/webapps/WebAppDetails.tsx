
import React from 'react';
import { ArrowRight, Users, Star, Download, Shield, Cpu, Database, Globe, Zap, Settings, BarChart3, Clock, Calendar, Activity, TrendingUp } from 'lucide-react';

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

interface WebAppDetailsProps {
  app: WebApp;
}

const WebAppDetails: React.FC<WebAppDetailsProps> = ({ app }) => {
  const performanceMetrics = [
    { label: 'Response Time', value: '< 200ms', icon: Clock, color: 'text-green-400' },
    { label: 'Load Time', value: '< 1.5s', icon: Activity, color: 'text-blue-400' },
    { label: 'API Calls/min', value: '10k+', icon: Database, color: 'text-purple-400' },
    { label: 'Growth Rate', value: '+25%', icon: TrendingUp, color: 'text-orange-400' }
  ];

  const securityFeatures = [
    'SSL/TLS Encryption',
    'OAuth 2.0 Integration',
    'Data Backup & Recovery',
    'GDPR Compliant',
    'SOC 2 Certified',
    '2FA Authentication'
  ];

  return (
    <div className="bg-zinc-800/95 border border-zinc-700 p-6 h-full overflow-y-auto">
      {/* App Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-white font-black text-2xl font-mono mb-1">{app.title}</h2>
            <div className="text-cyan-400 font-bold text-lg">{app.category}</div>
          </div>
          <div className="text-right">
            <div className="text-green-400 font-black text-3xl mb-1">{app.pricing}</div>
            <div className="text-zinc-400 text-sm">per month</div>
          </div>
        </div>
        
        <p className="text-zinc-300 text-base leading-relaxed mb-4">{app.description}</p>
        
        {/* Key Metrics */}
        <div className="grid grid-cols-4 gap-3 mb-6">
          {[
            { icon: Users, value: app.users, label: 'ACTIVE USERS', color: 'text-blue-400' },
            { icon: Star, value: app.rating, label: 'RATING', color: 'text-yellow-400' },
            { icon: Download, value: app.downloads, label: 'DOWNLOADS', color: 'text-green-400' },
            { icon: Shield, value: app.uptime, label: 'UPTIME', color: 'text-purple-400' }
          ].map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-zinc-900/80 border border-zinc-600 p-4 text-center">
                <IconComponent className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                <div className="text-white font-black text-lg">{metric.value}</div>
                <div className="text-zinc-400 text-xs font-bold">{metric.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <h3 className="text-cyan-400 font-black text-lg font-mono">TECHNOLOGY STACK</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {app.tech.map((tech, index) => (
            <div key={index} className="bg-zinc-700/50 border border-cyan-400/30 p-3 text-center">
              <div className="text-cyan-400 font-bold text-sm">{tech}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Zap className="w-5 h-5 text-purple-400" />
          <h3 className="text-purple-400 font-black text-lg font-mono">KEY FEATURES</h3>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {app.features.map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-600 p-3 flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
              <div className="text-white font-medium">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Activity className="w-5 h-5 text-orange-400" />
          <h3 className="text-orange-400 font-black text-lg font-mono">PERFORMANCE</h3>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {performanceMetrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <div key={index} className="bg-zinc-900/50 border border-zinc-600 p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <IconComponent className={`w-4 h-4 ${metric.color}`} />
                  <span className="text-zinc-300 text-sm font-medium">{metric.label}</span>
                </div>
                <div className={`${metric.color} font-black text-lg`}>{metric.value}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Security Features */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Shield className="w-5 h-5 text-green-400" />
          <h3 className="text-green-400 font-black text-lg font-mono">SECURITY & COMPLIANCE</h3>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 border border-green-400/30 p-2 text-center">
              <div className="text-green-300 text-sm font-medium">{feature}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 font-black text-lg transition-all duration-300 flex items-center justify-center space-x-2">
          <Globe className="w-5 h-5" />
          <span>LAUNCH LIVE DEMO</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        
        <div className="grid grid-cols-2 gap-3">
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 font-bold transition-all duration-300 border border-zinc-600 hover:border-cyan-400/50">
            VIEW PRICING
          </button>
          <button className="bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-3 font-bold transition-all duration-300 border border-zinc-600 hover:border-purple-400/50">
            DOCUMENTATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebAppDetails;
