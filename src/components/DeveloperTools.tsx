
import React, { useState } from 'react';
import { ArrowRight, Download, Star, Code, Terminal, Github, Database, Zap, Settings, Monitor, Activity, Cpu, Globe, Package } from 'lucide-react';

const DeveloperTools = () => {
  const [activeTab, setActiveTab] = useState('tools');

  const tools = [
    {
      title: "FastAPI MySQL Kit",
      category: "Backend Framework",
      downloads: "12.0k",
      rating: "5.0",
      description: "Production-ready FastAPI with MySQL, JWT auth, Docker deployment",
      repo: "fastapi-mysql-template",
      highlights: ["JWT Auth", "ORM Integration", "Docker Ready", "API Docs"],
      tech: "Python",
      status: "STABLE"
    },
    {
      title: "React Component Library",
      category: "Frontend Components",
      downloads: "9.3k",
      rating: "4.8",
      description: "Reusable TypeScript components with Storybook documentation",
      repo: "react-ui-components",
      highlights: ["TypeScript", "Storybook", "Unit Tests", "Tree Shakable"],
      tech: "React",
      status: "ACTIVE"
    },
    {
      title: "Database Migration CLI",
      category: "DevOps Utilities",
      downloads: "5.1k",
      rating: "4.9",
      description: "Multi-database migration tool with rollback safety mechanisms",
      repo: "db-migration-cli",
      highlights: ["Multi-DB Support", "Version Control", "Safe Rollback", "CLI Interface"],
      tech: "Node.js",
      status: "MAINTAINED"
    }
  ];

  const guides = [
    { title: "Unity Game Development Bible", downloads: "7.8k", type: "E-BOOK", price: "$29", category: "Game Dev" },
    { title: "Modern Web Development Course", downloads: "11.2k", type: "COURSE", price: "$49", category: "Web Dev" },
    { title: "API Design Patterns Guide", downloads: "8.9k", type: "GUIDE", price: "$19", category: "Backend" },
    { title: "Database Optimization Mastery", downloads: "6.4k", type: "TUTORIAL", price: "$24", category: "Database" }
  ];

  const systemMetrics = [
    { label: "BUILD STATUS", value: "PASSING", color: "text-green-400", icon: Settings },
    { label: "TEST COVERAGE", value: "98.5%", color: "text-green-400", icon: Monitor },
    { label: "CODE QUALITY", value: "A+", color: "text-cyan-400", icon: Code },
    { label: "SECURITY SCAN", value: "CLEAN", color: "text-green-400", icon: Database }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-black border-t border-slate-800">
      <div className="container mx-auto px-4">
        {/* Header - Matching Hero Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-slate-800/95 border border-green-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-green-400" />
            <span className="text-green-400 font-black text-xs font-mono tracking-widest">PRIORITY #4: DEVELOPERS</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            PREMIUM <span className="text-green-400">DEV TOOLS</span> + <span className="text-cyan-400">LEARNING CONTENT</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-green-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Open-source tools, templates, and educational content for developers
          </p>
        </div>

        {/* Unique Layout: Terminal-Style Interface with Tabs */}
        <div className="bg-slate-800/95 border border-slate-700 mb-8">
          {/* Terminal Header */}
          <div className="flex items-center justify-between bg-slate-900/80 border-b border-slate-700 px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-green-400 font-black text-sm font-mono">JBLINX-STUDIO/DEV-RESOURCES</span>
            </div>
            
            {/* Tab Navigation */}
            <div className="flex space-x-1">
              {[
                { id: 'tools', label: 'TOOLS', icon: Code },
                { id: 'guides', label: 'GUIDES', icon: Package },
                { id: 'metrics', label: 'METRICS', icon: Activity }
              ].map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3 py-1 text-xs font-bold transition-all duration-300 flex items-center space-x-1 ${
                      activeTab === tab.id
                        ? 'bg-green-500 text-black'
                        : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                    }`}
                  >
                    <IconComponent className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6">
            {/* Tools Tab */}
            {activeTab === 'tools' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-green-400 font-black text-sm font-mono">$</span>
                  <span className="text-white font-mono text-sm">ls -la /development-tools</span>
                </div>
                
                <div className="grid gap-3">
                  {tools.map((tool, index) => (
                    <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-green-400/50 transition-all duration-300 p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-white font-black text-sm font-mono">{tool.title}</h4>
                            <span className={`px-2 py-1 text-xs font-bold ${
                              tool.status === 'STABLE' ? 'bg-green-500 text-black' :
                              tool.status === 'ACTIVE' ? 'bg-blue-500 text-black' : 'bg-purple-500 text-black'
                            }`}>
                              {tool.status}
                            </span>
                            <span className="bg-slate-700 text-cyan-400 px-2 py-1 text-xs font-bold">
                              {tool.tech}
                            </span>
                          </div>
                          <div className="text-green-400 font-bold text-xs mb-2">{tool.category}</div>
                          <p className="text-slate-300 text-sm mb-3">{tool.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.highlights.map((highlight, hIndex) => (
                          <span key={hIndex} className="bg-slate-700 text-green-400 px-2 py-1 text-xs font-bold border border-green-400/30">
                            {highlight}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs text-slate-400">
                          <div className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span className="font-bold">{tool.downloads}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="font-bold">{tool.rating}</span>
                          </div>
                        </div>
                        
                        <a 
                          href={`https://github.com/JBLinx-Studio/${tool.repo}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 text-xs font-black transition-colors flex items-center space-x-2"
                        >
                          <Github className="w-3 h-3" />
                          <span>CLONE</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guides Tab */}
            {activeTab === 'guides' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-green-400 font-black text-sm font-mono">$</span>
                  <span className="text-white font-mono text-sm">cat /learning-resources/index.md</span>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-3">
                  {guides.map((guide, index) => (
                    <div key={index} className="bg-slate-900/80 border border-slate-600 hover:border-blue-400/50 transition-all duration-300 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <h4 className="text-white font-black text-sm font-mono mb-1">{guide.title}</h4>
                          <div className="flex items-center space-x-2 text-xs">
                            <span className={`px-2 py-1 font-bold ${
                              guide.type === 'E-BOOK' ? 'bg-purple-500 text-black' :
                              guide.type === 'COURSE' ? 'bg-blue-500 text-black' :
                              guide.type === 'GUIDE' ? 'bg-orange-500 text-black' : 'bg-green-500 text-black'
                            }`}>
                              {guide.type}
                            </span>
                            <span className="bg-slate-700 text-cyan-400 px-2 py-1 font-bold">
                              {guide.category}
                            </span>
                          </div>
                        </div>
                        <div className="text-green-400 font-black text-lg">{guide.price}</div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1 text-xs text-slate-400">
                          <Download className="w-3 h-3" />
                          <span className="font-bold">{guide.downloads}</span>
                        </div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-black px-3 py-2 text-xs font-black transition-colors">
                          ACCESS
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Tab */}
            {activeTab === 'metrics' && (
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-green-400 font-black text-sm font-mono">$</span>
                  <span className="text-white font-mono text-sm">systemctl status jblinx-development</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {systemMetrics.map((metric, index) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={index} className="bg-slate-900/80 border border-slate-600 p-4 text-center">
                        <IconComponent className={`w-6 h-6 mx-auto mb-2 ${metric.color}`} />
                        <div className={`${metric.color} font-black text-lg font-mono`}>{metric.value}</div>
                        <div className="text-slate-400 text-xs font-bold mt-1">{metric.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Live Updates */}
                <div className="bg-slate-900/80 border border-slate-600 p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <Activity className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 font-black text-sm font-mono">LIVE ACTIVITY</span>
                  </div>
                  <div className="space-y-2 font-mono text-xs">
                    <div className="text-green-400">[SUCCESS] Repository sync completed</div>
                    <div className="text-blue-400">[INFO] New contributor joined: @dev_user_2847</div>
                    <div className="text-yellow-400">[WARN] High memory usage detected</div>
                    <div className="text-green-400">[SUCCESS] Security scan passed</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="https://github.com/orgs/JBLinx-Studio/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-green-500 to-cyan-500 text-black px-5 py-2 font-black transition-all duration-300 space-x-1 shadow-lg text-sm"
          >
            <Github className="w-3 h-3" />
            <span>ACCESS ALL REPOSITORIES</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default DeveloperTools;
