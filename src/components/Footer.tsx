
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Phone, MapPin, Code, Zap, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const services = [
    { name: "Game Development", href: "/game-development" },
    { name: "Web Applications", href: "/web-applications" },
    { name: "Mobile Development", href: "/support" },
    { name: "Backend Systems", href: "/support" },
    { name: "Cloud Services", href: "/support" },
    { name: "Cybersecurity", href: "/support" },
    { name: "Digital Publishing", href: "/blog" },
    { name: "Content Creation", href: "/blog" }
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/#contact" },
    { name: "Careers", href: "/support" },
    { name: "Support", href: "/support" },
    { name: "Privacy", href: "/privacy" }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Satisfaction", color: "text-yellow-400" },
    { icon: Code, value: "100+", label: "Projects", color: "text-blue-400" },
    { icon: Heart, value: "150+", label: "Clients", color: "text-purple-400" },
    { icon: Zap, value: "99.9%", label: "Uptime", color: "text-green-400" }
  ];

  const CodeHoverLink = ({ href, children, external = false }: { href: string; children: string; external?: boolean }) => {
    const linkContent = (
      <span className="code-hover">
        <span className="normal-text">{children}</span>
        <span className="hover-text">&gt;_ {children}</span>
      </span>
    );

    if (external) {
      return (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-xs hover:translate-x-1 inline-block transition-transform"
        >
          {linkContent}
        </a>
      );
    }

    return (
      <Link 
        to={href}
        className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-xs hover:translate-x-1 inline-block transition-transform"
      >
        {linkContent}
      </Link>
    );
  };

  return (
    <footer className="bg-black text-white border-t border-slate-800">
      {/* Main Footer - Compact */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div>
            <Link to="/" className="text-2xl font-black mb-4 font-mono tracking-wider hover:scale-105 transition-transform duration-300 cursor-pointer block">
              <span className="text-emerald-400">JBLINX</span>
              <span className="text-white">STUDIO</span>
            </Link>
            
            <div className="w-12 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4"></div>
            
            <p className="text-slate-300 mb-4 leading-relaxed font-mono text-sm">
              Leading technology solutions provider specializing in innovative digital experiences.
            </p>
            
            {/* Contact Info - Compact */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-slate-300 font-mono text-sm hover:text-emerald-400 transition-colors group">
                <Phone size={14} className="mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="link-hover">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300 font-mono text-sm hover:text-emerald-400 transition-colors group">
                <Mail size={14} className="mr-2 text-emerald-400 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@jblinxstudio.com" className="link-hover">
                  hello@jblinxstudio.com
                </a>
              </div>
            </div>

            {/* Social Links - Compact */}
            <div className="flex space-x-2">
              <a href="https://github.com/JBLinx-Studio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Github size={16} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="https://linkedin.com/company/jblinx-studio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Linkedin size={16} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="https://twitter.com/jblinxstudio" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Twitter size={16} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
              <a href="mailto:hello@jblinxstudio.com" className="w-8 h-8 bg-slate-900/60 border border-slate-700/50 flex items-center justify-center hover:border-emerald-400 hover:bg-slate-800/80 transition-all group hover:scale-110">
                <Mail size={16} className="group-hover:scale-110 transition-transform text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center">
              <Code className="mr-2 text-emerald-400" size={16} />
              OUR_SERVICES
            </h4>
            <ul className="space-y-1">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-xs hover:translate-x-1 inline-block transition-transform link-hover"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center">
              <Zap className="mr-2 text-emerald-400" size={16} />
              QUICK_LINKS
            </h4>
            <ul className="space-y-1">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition-colors font-mono text-xs hover:translate-x-1 inline-block transition-transform link-hover"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Achievements - Compact */}
          <div>
            <h4 className="text-sm font-black mb-3 text-white font-mono tracking-[0.1em] flex items-center">
              <Trophy className="mr-2 text-emerald-400" size={16} />
              ACHIEVEMENTS
            </h4>
            
            <div className="grid grid-cols-2 gap-2 mb-4">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-8 h-8 bg-slate-700 border border-slate-500/50 flex items-center justify-center mx-auto mb-1 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all duration-300">
                      <IconComponent className={`w-3 h-3 ${achievement.color} group-hover:text-emerald-400 transition-colors duration-300`} />
                    </div>
                    
                    <div className="text-xs font-black text-white mb-0.5 group-hover:text-emerald-300 transition-colors duration-300 font-mono">
                      {achievement.value}
                    </div>
                    
                    <div className="text-slate-400 font-medium text-xs">
                      {achievement.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Newsletter - Compact */}
            <div>
              <p className="text-slate-300 mb-2 font-mono text-xs">
                Stay updated with our latest projects
              </p>
              <div className="flex border border-slate-600/50 hover:border-emerald-400/50 transition-colors">
                <input 
                  type="email" 
                  placeholder="Enter email"
                  className="flex-1 px-2 py-1 bg-slate-900/60 focus:outline-none focus:ring-1 focus:ring-emerald-500/20 text-white font-mono text-xs placeholder:text-slate-500"
                />
                <button className="bg-emerald-600 hover:bg-emerald-700 px-2 py-1 transition-all duration-300 group hover:scale-105">
                  <Mail size={12} className="text-black group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Compact */}
      <div className="border-t border-slate-800/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-xs mb-2 md:mb-0 font-mono">
              © 2024 JBLinx Studio. All rights reserved.
            </div>
            <div className="flex items-center text-slate-400 text-xs font-mono">
              Made with <Heart className="mx-2 text-emerald-400 animate-pulse" size={12} /> by JBLinx Studio
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
