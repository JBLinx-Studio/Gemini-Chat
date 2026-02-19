
import React from 'react';
import { ArrowRight, Download, Star, Code, Monitor, Smartphone, Zap, Users, Github, ExternalLink, Globe, Database, Activity, TrendingUp, Clock, Shield, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const WebApplications = () => {
  const webApps = [
    {
      title: "TaskFlow Pro",
      description: "Advanced task management platform with team collaboration and real-time sync for enterprise productivity workflows.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      downloads: "8.5k",
      rating: "4.9",
      tier: "Enterprise",
      tech: ["React", "FastAPI", "PostgreSQL"],
      features: ["Real-time Collaboration", "Analytics Dashboard", "API Integration"],
      github: "https://github.com/JBLinx-Studio/taskflow-pro",
      demo: "https://taskflow.jblinxstudio.com",
      pricing: "$199/mo",
      category: "Productivity",
      users: "1.5k+ companies",
      uptime: "99.97%"
    },
    {
      title: "DataViz Analytics",
      description: "Business intelligence platform with custom charts and data pipeline management for advanced analytics and reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      downloads: "4.2k",
      rating: "4.8",
      tier: "Professional",
      tech: ["Vue.js", "Python", "MongoDB"],
      features: ["Custom Visualizations", "Data Pipelines", "Export Tools"],
      github: "https://github.com/JBLinx-Studio/dataviz-analytics",
      demo: "https://dataviz.jblinxstudio.com",
      pricing: "$149/mo",
      category: "Analytics",
      users: "800+ analysts",
      uptime: "99.94%"
    },
    {
      title: "ShopLink Commerce",
      description: "Complete e-commerce solution with modern checkout and inventory management for online retail businesses.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      downloads: "6.7k",
      rating: "4.9",
      tier: "Premium",
      tech: ["Next.js", "Node.js", "Stripe"],
      features: ["Payment Gateway", "Inventory Sync", "Mobile Optimized"],
      github: "https://github.com/JBLinx-Studio/shoplink-commerce",
      demo: "https://shoplink.jblinxstudio.com",
      pricing: "$99/mo",
      category: "E-commerce",
      users: "600+ stores",
      uptime: "99.96%"
    },
    {
      title: "CloudOps Dashboard",
      description: "Comprehensive DevOps platform for infrastructure management and deployment automation across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      downloads: "3.8k",
      rating: "4.7",
      tier: "Enterprise",
      tech: ["React", "Python", "Kubernetes"],
      features: ["Multi-cloud Support", "CI/CD Pipeline", "Monitoring"],
      github: "https://github.com/JBLinx-Studio/cloudops-dashboard",
      demo: "https://cloudops.jblinxstudio.com",
      pricing: "$299/mo",
      category: "DevOps",
      users: "300+ teams",
      uptime: "99.95%"
    },
    {
      title: "FinanceHub Pro",
      description: "Advanced financial management platform with automated reporting and compliance features for modern businesses.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      downloads: "5.1k",
      rating: "4.8",
      tier: "Premium",
      tech: ["Angular", "Spring Boot", "MySQL"],
      features: ["Automated Reports", "Compliance Tools", "Multi-currency"],
      github: "https://github.com/JBLinx-Studio/financehub-pro",
      demo: "https://financehub.jblinxstudio.com",
      pricing: "$179/mo",
      category: "Finance",
      users: "450+ companies",
      uptime: "99.98%"
    },
    {
      title: "TeamSync Workspace",
      description: "All-in-one collaboration platform with video conferencing, file sharing, and project management capabilities.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&h=400&fit=crop",
      downloads: "7.3k",
      rating: "4.9",
      tier: "Professional",
      tech: ["React", "WebRTC", "Node.js"],
      features: ["Video Conferencing", "File Sharing", "Project Boards"],
      github: "https://github.com/JBLinx-Studio/teamsync-workspace",
      demo: "https://teamsync.jblinxstudio.com",
      pricing: "$79/mo",
      category: "Collaboration",
      users: "2k+ teams",
      uptime: "99.93%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: ["Access to 3 web apps", "Basic support", "Regular updates", "Community access", "Up to 10 users"],
      popular: false,
      color: "border-zinc-600"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month", 
      description: "Best for growing businesses",
      features: ["Access to all web apps", "Priority support", "Advanced features", "API access", "Custom integrations", "Up to 100 users"],
      popular: true,
      color: "border-blue-400"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: ["Everything in Professional", "Dedicated support", "Custom development", "SLA guarantee", "White-label options", "Unlimited users"],
      popular: false,
      color: "border-zinc-600"
    }
  ];

  const appStats = [
    { label: "Web Apps", value: "12+", icon: Code, color: "text-blue-400" },
    { label: "Active Users", value: "25k+", icon: Users, color: "text-green-400" },
    { label: "Uptime", value: "99.9%", icon: Monitor, color: "text-purple-400" },
    { label: "API Calls/Day", value: "1M+", icon: Zap, color: "text-cyan-400" }
  ];

  const techStats = [
    { label: "Response Time", value: "< 200ms", icon: Clock },
    { label: "Global CDN", value: "15+ locations", icon: Globe },
    { label: "Security Score", value: "A+ Rating", icon: Shield },
    { label: "Performance", value: "99.9% SLA", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Enhanced Hero Section - Matching Homepage Style */}
      <section className="py-20 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-cyan-500/5 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/3 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-zinc-800/95 border border-blue-500/50 px-6 py-3 mb-6 backdrop-blur-sm">
              <Code className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-blue-400 font-black text-sm font-mono tracking-widest">PRIORITY #3: ENTERPRISE WEB SOLUTIONS</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight font-mono mb-6">
              PREMIUM <span className="text-blue-400">WEB APPLICATIONS</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-6"></div>
            
            <p className="text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Subscription-based access to our premium web applications built with modern technologies. 
              From productivity tools to business intelligence platforms, designed for enterprise scale.
            </p>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {appStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-zinc-800/95 border border-zinc-700 p-6 text-center hover:border-blue-400/50 transition-all duration-300">
                    <IconComponent className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                    <div className="text-2xl font-black text-white font-mono mb-1">{stat.value}</div>
                    <div className="text-zinc-400 text-sm font-bold">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Web Apps Portfolio */}
      <section className="py-16 bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-zinc-800/95 border border-blue-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
              <Monitor className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-blue-400 font-black text-sm font-mono tracking-widest">OUR WEB APPLICATIONS</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
              ENTERPRISE-GRADE <span className="text-blue-400">SaaS PLATFORMS</span>
            </h2>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {webApps.map((app, index) => (
              <div key={index} className="bg-zinc-800/95 border border-zinc-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden group">
                {/* App Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={app.image} 
                    alt={app.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-black backdrop-blur-sm ${
                      app.tier === 'Enterprise' ? 'bg-purple-500/90 text-white' : 
                      app.tier === 'Premium' ? 'bg-blue-500/90 text-white' : 
                      'bg-green-500/90 text-white'
                    }`}>
                      {app.tier}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <div className="flex gap-2">
                      <div className="bg-zinc-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
                        <Download className="w-3 h-3" />
                        <span>{app.downloads}</span>
                      </div>
                      <div className="bg-zinc-900/80 text-white px-2 py-1 text-xs backdrop-blur-sm flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400" />
                        <span>{app.rating}</span>
                      </div>
                    </div>
                    <div className="text-green-400 font-black text-sm bg-zinc-900/80 px-2 py-1 backdrop-blur-sm">
                      {app.pricing}
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-1">
                    <Monitor className="w-4 h-4 text-white/70" />
                    <Smartphone className="w-4 h-4 text-white/70" />
                  </div>
                </div>
                
                {/* App Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-black text-white mb-1 group-hover:text-blue-300 transition-colors font-mono">
                        {app.title}
                      </h3>
                      <div className="text-blue-400 text-sm font-bold">{app.category}</div>
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    {app.description}
                  </p>
                  
                  {/* Performance Metrics */}
                  <div className="mb-4">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">PERFORMANCE</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-zinc-700/50 p-2 text-center">
                        <div className="text-xs text-zinc-400">Users</div>
                        <div className="text-cyan-400 font-bold text-sm">{app.users}</div>
                      </div>
                      <div className="bg-zinc-700/50 p-2 text-center">
                        <div className="text-xs text-zinc-400">Uptime</div>
                        <div className="text-green-400 font-bold text-sm">{app.uptime}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">TECH STACK</div>
                    <div className="flex flex-wrap gap-1">
                      {app.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-zinc-700 text-cyan-400 px-2 py-1 text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div className="mb-6">
                    <div className="text-zinc-300 text-xs font-bold mb-2 tracking-wide">KEY FEATURES</div>
                    <div className="space-y-1">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-xs text-zinc-400">
                          <Zap className="w-3 h-3 text-blue-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2">
                    <a 
                      href={app.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-4 py-3 font-black transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>LIVE DEMO</span>
                    </a>
                    <a 
                      href={app.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-zinc-700 text-white px-4 py-3 hover:bg-zinc-600 transition-all duration-300 flex items-center justify-center"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Excellence Section */}
          <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 mb-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-white mb-3 font-mono">
                ENTERPRISE <span className="text-blue-400">TECHNOLOGY STACK</span>
              </h3>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Built with cutting-edge technologies and industry best practices for maximum performance, security, and scalability.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {techStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <IconComponent className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                    <div className="text-lg font-black text-white mb-1">{stat.value}</div>
                    <div className="text-zinc-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Pricing Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-zinc-800/95 border border-green-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
              <Database className="w-4 h-4 mr-2 text-green-400" />
              <span className="text-green-400 font-black text-sm font-mono tracking-widest">SUBSCRIPTION PLANS</span>
            </div>
            
            <h3 className="text-3xl font-black text-white mb-3 font-mono">
              FLEXIBLE <span className="text-blue-400">PRICING OPTIONS</span>
            </h3>
            
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-zinc-800/95 border-2 ${plan.color} hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-center py-2 text-sm font-black">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h4 className="text-2xl font-black text-white mb-2 font-mono">{plan.name}</h4>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-black text-blue-400">{plan.price}</span>
                    <span className="text-zinc-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-zinc-400 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Zap className="w-4 h-4 text-blue-400" />
                        <span className="text-zinc-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 font-black transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white' 
                      : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
                  }`}>
                    {plan.name === 'Enterprise' ? 'CONTACT SALES' : 'GET STARTED'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/about" 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 font-black transition-all duration-300 flex items-center justify-center space-x-2 text-base shadow-xl"
              >
                <Globe className="w-5 h-5" />
                <span>EXPLORE ALL PLATFORMS</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-4 font-black transition-all duration-300 text-base">
                REQUEST ENTERPRISE DEMO
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebApplications;
