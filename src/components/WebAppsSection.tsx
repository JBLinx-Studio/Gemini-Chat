
import React, { useState } from 'react';
import { ArrowRight, Monitor, Settings, Terminal, Globe, Database, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import WebAppCard from './webapps/WebAppCard';
import WebAppDetails from './webapps/WebAppDetails';

const WebAppsSection = () => {
  const [selectedApp, setSelectedApp] = useState(0);

  const webApps = [
    {
      title: "TaskFlow Enterprise Suite",
      category: "SaaS Platform",
      downloads: "25.2k",
      rating: "4.9",
      tier: "ENTERPRISE",
      description: "Complete project management platform with advanced team collaboration, resource planning, and comprehensive analytics for enterprise teams.",
      tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Docker"],
      features: [
        "Advanced Project Analytics", 
        "Resource Management", 
        "Team Collaboration Hub", 
        "API Integration Suite",
        "Custom Workflow Builder",
        "Real-time Notifications",
        "Advanced Reporting",
        "Multi-tenant Architecture"
      ],
      pricing: "$199",
      users: "1,500+ companies",
      uptime: "99.97%",
      version: "v4.2.1",
      lastUpdate: "2024-01-15"
    },
    {
      title: "CommerceHub Pro Platform",
      category: "E-commerce Solution", 
      downloads: "18.8k",
      rating: "4.8",
      tier: "PROFESSIONAL",
      description: "Full-featured e-commerce platform with multi-vendor support, advanced inventory management, and integrated payment processing.",
      tech: ["Next.js", "Stripe", "MongoDB", "Redis", "Vercel", "Cloudinary"],
      features: [
        "Multi-vendor Marketplace", 
        "Advanced Inventory Sync", 
        "Payment Gateway Integration", 
        "SEO Optimization Suite",
        "Mobile-responsive Design",
        "Analytics Dashboard",
        "Order Management",
        "Customer Support Tools"
      ],
      pricing: "$149",
      users: "800+ stores",
      uptime: "99.94%",
      version: "v3.1.8",
      lastUpdate: "2024-01-12"
    },
    {
      title: "DataViz Analytics Pro",
      category: "Business Intelligence",
      downloads: "12.5k",
      rating: "4.9",
      tier: "PREMIUM",
      description: "Advanced data visualization platform with AI-powered insights, custom dashboard creation, and enterprise-grade analytics capabilities.",
      tech: ["Vue.js", "Python", "D3.js", "TensorFlow", "ClickHouse", "Apache Kafka"],
      features: [
        "AI-powered Insights", 
        "Custom Dashboard Builder", 
        "Real-time Data Processing", 
        "Advanced Visualizations",
        "Team Collaboration",
        "Data Export Suite",
        "Predictive Analytics",
        "Integration APIs"
      ],
      pricing: "$299",
      users: "500+ analysts",
      uptime: "99.99%",
      version: "v2.5.3",
      lastUpdate: "2024-01-14"
    },
    {
      title: "CloudOps Management Hub",
      category: "DevOps Platform",
      downloads: "15.1k",
      rating: "4.7",
      tier: "ENTERPRISE",
      description: "Comprehensive DevOps platform for infrastructure management, deployment automation, and monitoring across multi-cloud environments.",
      tech: ["React", "Python", "Kubernetes", "Terraform", "Prometheus", "Grafana"],
      features: [
        "Multi-cloud Management", 
        "CI/CD Pipeline Automation", 
        "Infrastructure as Code", 
        "Real-time Monitoring",
        "Security Compliance",
        "Cost Optimization",
        "Disaster Recovery",
        "Performance Analytics"
      ],
      pricing: "$399",
      users: "300+ DevOps teams",
      uptime: "99.95%",
      version: "v1.9.2",
      lastUpdate: "2024-01-13"
    }
  ];

  const systemStatus = [
    { label: "API GATEWAY", status: "OPERATIONAL", color: "text-green-400" },
    { label: "DATABASES", status: "OPTIMIZED", color: "text-cyan-400" },
    { label: "LOAD BALANCERS", status: "STABLE", color: "text-green-400" },
    { label: "SECURITY", status: "SECURED", color: "text-green-400" },
    { label: "MONITORING", status: "ACTIVE", color: "text-blue-400" },
    { label: "BACKUPS", status: "CURRENT", color: "text-purple-400" }
  ];

  return (
    <section className="py-16 bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-zinc-800/95 border border-blue-500/50 px-4 py-2 mb-4 backdrop-blur-sm">
            <Monitor className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-blue-400 font-black text-sm font-mono tracking-widest">PRIORITY #3: ENTERPRISE USERS</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight font-mono mb-3">
            PREMIUM <span className="text-blue-400">SAAS PLATFORMS</span> + <span className="text-cyan-400">WEB SOLUTIONS</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 mx-auto mb-4"></div>
          
          <p className="text-base text-zinc-400 max-w-2xl mx-auto">
            Enterprise-grade SaaS platforms, e-commerce solutions, analytics tools, and business applications built for scale and performance
          </p>
        </div>

        {/* Dashboard-Style Layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Left Sidebar: App Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {/* Control Panel Header */}
            <div className="bg-zinc-800/95 border border-zinc-700 p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Settings className="w-5 h-5 text-blue-400" />
                <h3 className="text-blue-400 font-black text-lg font-mono">APPLICATION DASHBOARD</h3>
              </div>
              
              {/* App Selection */}
              <div className="space-y-2">
                {webApps.map((app, index) => (
                  <WebAppCard
                    key={app.title}
                    app={app}
                    isSelected={selectedApp === index}
                    onSelect={() => setSelectedApp(index)}
                  />
                ))}
              </div>
            </div>

            {/* System Status Panel */}
            <div className="bg-zinc-800/95 border border-zinc-700 p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Terminal className="w-5 h-5 text-green-400" />
                <h3 className="text-green-400 font-black text-base font-mono">SYSTEM STATUS</h3>
              </div>
              
              <div className="space-y-2">
                {systemStatus.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-zinc-700 last:border-b-0">
                    <span className="text-zinc-400 text-sm font-bold">{item.label}</span>
                    <span className={`${item.color} text-sm font-black flex items-center space-x-1`}>
                      <div className={`w-2 h-2 rounded-full ${item.color.replace('text-', 'bg-')}`}></div>
                      <span>{item.status}</span>
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Global Stats */}
              <div className="mt-4 pt-4 border-t border-zinc-700">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-green-400 font-black text-lg">99.96%</div>
                    <div className="text-zinc-400 text-xs">Global Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-black text-lg">&lt; 150ms</div>
                    <div className="text-zinc-400 text-xs">Avg Response</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content: Selected App Details */}
          <div className="lg:col-span-8">
            <WebAppDetails app={webApps[selectedApp]} />
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="bg-gradient-to-r from-zinc-800 to-zinc-700 border border-zinc-600 p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-3 font-mono">
            <span className="text-blue-400">ENTERPRISE-READY</span> SOLUTIONS
          </h3>
          <p className="text-base text-zinc-400 mb-6 max-w-2xl mx-auto">
            Production-tested SaaS platforms and web applications built for enterprise scale. Comprehensive documentation, 24/7 support, and guaranteed uptime.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/web-applications" 
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
  );
};

export default WebAppsSection;
