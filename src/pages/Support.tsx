
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { MessageCircle, Mail, Phone, Clock, ArrowRight, HelpCircle, Book, Users, Search } from 'lucide-react';

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "LIVE_CHAT",
      description: "Instant help from our support ninjas",
      availability: "Mon-Fri 9AM-6PM PST",
      action: "START_CHAT",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Mail,
      title: "EMAIL_SUPPORT", 
      description: "Detailed technical assistance via email",
      availability: "24-48 hours response",
      action: "SEND_EMAIL",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "PHONE_SUPPORT",
      description: "Direct phone support for urgent issues", 
      availability: "Mon-Fri 9AM-5PM PST",
      action: "CALL_NOW",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const resources = [
    {
      icon: Book,
      title: "DOCUMENTATION",
      description: "Comprehensive guides and API references",
      items: ["Setup Guides", "API Documentation", "Best Practices", "Troubleshooting"]
    },
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Frequently asked questions and solutions",
      items: ["Account Setup", "Billing Questions", "Technical Issues", "Feature Requests"]
    },
    {
      icon: Users,
      title: "COMMUNITY",
      description: "Connect with other developers and users", 
      items: ["Developer Forum", "Discord Server", "GitHub Discussions", "Stack Overflow"]
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple apps: 4-6 weeks, Complex systems: 12-16 weeks."
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer: "Yes, we offer maintenance packages starting at $300/month for updates, security, and support."
    },
    {
      question: "Can you work with our existing team?",
      answer: "Absolutely! We integrate seamlessly with your development team and processes."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "React, Node.js, Python, Unity, mobile development, and cloud infrastructure."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <main className="relative">
        {/* Compact Hero */}
        <section className="pt-20 pb-12 bg-gradient-to-br from-slate-900 via-slate-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                SUPPORT_CENTER
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6"></div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-mono tracking-tight">
                WE'RE HERE TO <span className="text-emerald-400">HELP</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed font-mono max-w-2xl mx-auto">
                Get expert support when you need it. Our team is ready to assist you.
              </p>

              {/* Quick Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:border-emerald-400 focus:outline-none font-mono"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Options - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  GET_HELP
                </span>
                <h2 className="text-2xl font-black text-white font-mono">
                  CHOOSE YOUR <span className="text-cyan-400">CHANNEL</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {supportOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${option.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-lg font-black text-white mb-3 font-mono">
                        {option.title}
                      </h3>
                      
                      <p className="text-slate-300 font-mono text-sm mb-3">
                        {option.description}
                      </p>
                      
                      <div className="flex items-center text-emerald-400 font-mono text-xs mb-4">
                        <Clock size={12} className="mr-2" />
                        {option.availability}
                      </div>
                      
                      <button className={`w-full bg-gradient-to-r ${option.color} text-white py-2 font-black text-sm font-mono tracking-wider hover:scale-105 transition-transform flex items-center justify-center space-x-2`}>
                        <span>{option.action}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Resources - Compact */}
        <section className="py-12 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  RESOURCES
                </span>
                <h2 className="text-2xl font-black text-white font-mono">
                  SELF-HELP <span className="text-cyan-400">RESOURCES</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <div key={index} className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                      <IconComponent className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                      
                      <h3 className="text-lg font-black text-white mb-2 font-mono">
                        {resource.title}
                      </h3>
                      
                      <p className="text-slate-300 font-mono text-sm mb-4">
                        {resource.description}
                      </p>
                      
                      <ul className="space-y-1">
                        {resource.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-slate-400 text-xs font-mono flex items-center">
                            <div className="w-1 h-1 bg-emerald-400 mr-2"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  FAQ
                </span>
                <h2 className="text-2xl font-black text-white font-mono">
                  COMMON <span className="text-cyan-400">QUESTIONS</span>
                </h2>
              </div>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-slate-800 border border-slate-700 p-4 hover:border-emerald-400/50 transition-all">
                    <h3 className="text-white font-black mb-2 font-mono text-sm">
                      {faq.question}
                    </h3>
                    <p className="text-slate-300 text-sm font-mono leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
