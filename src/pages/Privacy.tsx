
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Eye, Lock, Users, Database, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const Privacy = () => {
  const sections = [
    {
      icon: Database,
      title: "DATA_COLLECTION",
      content: "We collect only necessary information: contact details, project requirements, and usage analytics to improve our services. No personal data is sold or shared with third parties."
    },
    {
      icon: Shield,
      title: "DATA_PROTECTION", 
      content: "Industry-standard encryption protects your data in transit and at rest. Regular security audits ensure your information remains safe and secure."
    },
    {
      icon: Lock,
      title: "DATA_USAGE",
      content: "Your information is used exclusively to deliver services, communicate about projects, and enhance our offerings. We never use data for unauthorized purposes."
    },
    {
      icon: Users,
      title: "YOUR_RIGHTS",
      content: "You have full rights to access, update, or delete your personal information. Contact us anytime to exercise these rights or ask questions about our practices."
    },
    {
      icon: Eye,
      title: "TRANSPARENCY",
      content: "We maintain complete transparency about data handling. Regular updates to this policy ensure you're always informed about how we protect your privacy."
    },
    {
      icon: FileText,
      title: "COMPLIANCE",
      content: "We comply with GDPR, CCPA, and other privacy regulations. Our practices meet or exceed industry standards for data protection and privacy."
    }
  ];

  const quickFacts = [
    { icon: CheckCircle, text: "No data sold to third parties" },
    { icon: CheckCircle, text: "End-to-end encryption" },
    { icon: CheckCircle, text: "GDPR & CCPA compliant" },
    { icon: CheckCircle, text: "Regular security audits" },
    { icon: CheckCircle, text: "Full data transparency" },
    { icon: CheckCircle, text: "Your data, your control" }
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
                PRIVACY_POLICY
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6"></div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-mono tracking-tight">
                YOUR PRIVACY <span className="text-emerald-400">MATTERS</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed font-mono max-w-2xl mx-auto">
                We are committed to protecting your privacy with complete transparency and industry-leading security.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Facts - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  QUICK_FACTS
                </span>
                <h2 className="text-2xl font-black text-white font-mono">
                  PRIVACY AT A <span className="text-cyan-400">GLANCE</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-slate-800 border border-slate-700 p-3 hover:border-emerald-400/50 transition-all">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 font-mono text-sm">{fact.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Content - Compact */}
        <section className="py-12 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {sections.map((section, index) => {
                  const IconComponent = section.icon;
                  return (
                    <div key={index} className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                      <div className="flex items-center mb-4">
                        <IconComponent className="w-6 h-6 text-emerald-400 mr-3" />
                        <h3 className="text-lg font-black text-white font-mono">{section.title}</h3>
                      </div>
                      <p className="text-slate-300 font-mono text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-slate-800 border border-slate-700 p-8 hover:border-emerald-400/50 transition-all">
                <AlertTriangle className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                <h3 className="text-xl font-black text-white mb-4 font-mono">
                  QUESTIONS ABOUT <span className="text-emerald-400">PRIVACY?</span>
                </h3>
                <p className="text-slate-300 font-mono text-sm mb-6">
                  We're here to help clarify any questions about our privacy practices or your data rights.
                </p>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-emerald-400">privacy@jblinxstudio.com</div>
                  <div className="text-slate-400">Response within 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
