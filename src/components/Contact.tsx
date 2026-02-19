
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Trophy, Users, Star, Activity, Code, Terminal, Zap } from 'lucide-react';

const Contact = () => {
  const contactMethods = [{
    icon: Mail,
    title: "EMAIL",
    contact: "hello@jblinxstudio.com",
    color: "text-emerald-400"
  }, {
    icon: Phone,
    title: "PHONE",
    contact: "+1 (555) 123-4567",
    color: "text-blue-400"
  }, {
    icon: MapPin,
    title: "LOCATION",
    contact: "123 Innovation Street, Tech City",
    color: "text-purple-400"
  }, {
    icon: MessageCircle,
    title: "CHAT",
    contact: "Live Support Available",
    color: "text-orange-400"
  }];

  const quickActions = [{
    icon: MessageCircle,
    label: "START CHAT",
    color: "from-emerald-500 to-cyan-500"
  }, {
    icon: Calendar,
    label: "BOOK MEETING",
    color: "from-blue-500 to-purple-500"
  }, {
    icon: Phone,
    label: "REQUEST CALL",
    color: "from-orange-500 to-red-500"
  }];

  return (
    <section id="contact" className="relative min-h-screen bg-gradient-to-br from-zinc-950/95 via-zinc-900/90 to-zinc-950/95 backdrop-blur-xl border-t border-zinc-800/50 py-16 overflow-hidden">
      {/* Enhanced paradoxical background effects */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* Primary ambient lighting with paradoxical movement */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/12 to-amber-500/8 blur-3xl rounded-full animate-pulse transform -rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/12 to-teal-500/8 blur-3xl rounded-full animate-pulse transform rotate-45" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-amber-400/8 to-orange-400/6 blur-3xl rounded-full animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Paradoxical secondary layers */}
        <div className="absolute top-1/6 right-1/3 w-[400px] h-[400px] bg-gradient-to-l from-orange-300/10 to-emerald-300/6 blur-2xl rounded-full animate-pulse transform rotate-12" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/6 left-1/3 w-[500px] h-[500px] bg-gradient-to-r from-teal-400/8 to-amber-400/6 blur-2xl rounded-full animate-pulse transform -rotate-12" style={{animationDelay: '3s'}}></div>
        
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
        <div className="absolute top-1/5 right-1/4 w-6 h-6 bg-emerald-400/40 rounded-full animate-pulse border border-emerald-400/30 shadow-lg shadow-emerald-400/20" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-amber-400/35 animate-pulse border border-amber-400/25 shadow-lg shadow-amber-400/20 transform rotate-12" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-1/5 right-1/6 w-12 h-12 bg-teal-400/30 transform rotate-30 animate-pulse border border-teal-400/20 shadow-lg shadow-teal-400/20" style={{animationDelay: '6s'}}></div>

        {/* Enhanced paradoxical accent lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/40 to-transparent transform rotate-1"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent transform -rotate-1"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-amber-400/40 to-transparent transform rotate-2"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-teal-400/40 to-transparent transform -rotate-2"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Compact Header - matching Services style */}
        <div className="text-center mb-5">
          <div className="inline-flex items-center bg-zinc-800/95 border border-orange-500/50 px-3 py-1 mb-2 backdrop-blur-sm">
            <Terminal className="w-3 h-3 mr-1 text-orange-400" />
            <span className="text-orange-400 font-black text-xs font-mono tracking-widest">CONTACT US</span>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight font-mono mb-1">
            LET'S BUILD <span className="text-orange-400">TOGETHER</span>
          </h2>
          
          <div className="w-16 h-0.5 bg-orange-400 mx-auto mb-2"></div>
          
          <p className="text-sm text-slate-400 max-w-xl mx-auto mb-3">
            Ready to transform your ideas into exceptional digital experiences? Connect with our expert team.
          </p>

          {/* Compact Contact Stats */}
          <div className="grid grid-cols-4 gap-2 max-w-xl mx-auto mb-4">
            {[{
              icon: Trophy,
              value: "98.7%",
              label: "Satisfaction",
              color: "text-yellow-400"
            }, {
              icon: Users,
              value: "150+",
              label: "Clients",
              color: "text-blue-400"
            }, {
              icon: Star,
              value: "4.9/5",
              label: "Rating",
              color: "text-purple-400"
            }, {
              icon: Activity,
              value: "24/7",
              label: "Support",
              color: "text-green-400"
            }].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-2 text-center backdrop-blur-sm">
                  <IconComponent className={`w-3 h-3 ${stat.color} mx-auto mb-1`} />
                  <div className={`text-xs font-black ${stat.color} font-mono`}>{stat.value}</div>
                  <div className="text-slate-500 text-xs font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Contact Methods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-zinc-800/80 border border-zinc-700 p-3 hover:border-orange-400/50 transition-all duration-300 backdrop-blur-sm">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-8 h-8 bg-zinc-700/50 border border-zinc-600/50 flex items-center justify-center">
                    <IconComponent className={`w-3 h-3 ${method.color}`} />
                  </div>
                  <div className="text-center">
                    <h3 className="font-black text-white text-xs font-mono tracking-wider mb-1">
                      {method.title}
                    </h3>
                    <p className={`text-xs font-bold ${method.color} font-mono break-all`}>
                      {method.contact}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-3">
          {/* Compact Contact Form */}
          <div className="bg-zinc-800/80 border border-zinc-600/50 p-4 backdrop-blur-sm">
            <div className="flex items-center mb-3">
              <Code className="mr-2 text-orange-400" size={16} />
              <h3 className="text-sm font-black text-white font-mono tracking-wider">SEND MESSAGE</h3>
            </div>
            
            <form className="space-y-3">
              <div className="grid sm:grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">NAME *</label>
                  <input 
                    type="text" 
                    className="w-full px-2 py-1 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-xs placeholder:text-zinc-500" 
                    placeholder="John Doe" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">EMAIL *</label>
                  <input 
                    type="email" 
                    className="w-full px-2 py-1 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-xs placeholder:text-zinc-500" 
                    placeholder="john@example.com" 
                    required 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">SERVICE</label>
                <select className="w-full px-2 py-1 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all font-mono text-xs">
                  <option>Game Development</option>
                  <option>Web Applications</option>
                  <option>Mobile Development</option>
                  <option>Backend Systems</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-orange-400 mb-1 font-mono tracking-wider">MESSAGE *</label>
                <textarea 
                  rows={3} 
                  className="w-full px-2 py-1 bg-zinc-900/60 border border-zinc-600/50 text-white focus:border-orange-400 focus:outline-none transition-all resize-none font-mono text-xs placeholder:text-zinc-500" 
                  placeholder="Tell us about your project..." 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-2 px-3 font-black transition-all duration-300 font-mono text-xs tracking-wider hover:from-orange-600 hover:to-amber-600 flex items-center justify-center shadow-lg"
              >
                SEND MESSAGE
                <Send className="ml-1" size={12} />
              </button>
            </form>
          </div>

          {/* Compact Quick Actions & Office Hours */}
          <div className="space-y-3">
            <div className="bg-zinc-800/80 border border-zinc-600/50 p-4 backdrop-blur-sm">
              <div className="flex items-center mb-3">
                <Zap className="mr-2 text-orange-400" size={16} />
                <h3 className="text-sm font-black text-white font-mono tracking-wider">QUICK ACTIONS</h3>
              </div>
              
              <div className="space-y-2">
                {quickActions.map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <button 
                      key={index} 
                      className={`w-full flex items-center justify-center bg-gradient-to-r ${action.color} text-zinc-950 py-2 px-3 transition-all duration-300 font-black font-mono text-xs tracking-wider shadow-lg`}
                    >
                      <IconComponent className="mr-1" size={12} />
                      {action.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compact Office Hours */}
            <div className="bg-zinc-800/80 border border-zinc-600/50 p-4 backdrop-blur-sm">
              <h4 className="font-black text-white mb-3 flex items-center font-mono tracking-wider text-sm">
                <Terminal className="mr-2 text-orange-400" size={14} />
                OFFICE HOURS
              </h4>
              <div className="space-y-1 font-mono text-xs">
                <div className="flex justify-between items-center py-1 border-b border-zinc-700/50">
                  <span className="text-slate-500">MON - FRI</span>
                  <span className="font-bold text-orange-400">8AM - 6PM</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-zinc-700/50">
                  <span className="text-slate-500">SATURDAY</span>
                  <span className="font-bold text-orange-400">9AM - 4PM</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <span className="text-slate-500">SUNDAY</span>
                  <span className="font-bold text-zinc-600">CLOSED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
