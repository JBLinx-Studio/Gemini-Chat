
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Check, X, Star, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "STARTER",
      icon: Zap,
      price: "$2,999",
      period: "/project",
      description: "Perfect for small projects and startups",
      features: [
        "Custom Web Application",
        "Responsive Design",
        "Basic SEO Optimization",
        "3 Months Support",
        "Source Code Included",
        "Mobile Optimization"
      ],
      notIncluded: [
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations"
      ],
      popular: false,
      color: "from-slate-600 to-slate-700"
    },
    {
      name: "PROFESSIONAL",
      icon: Star,
      price: "$7,999",
      period: "/project", 
      description: "Advanced solutions for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced Custom Features",
        "Database Integration",
        "API Development",
        "6 Months Support",
        "Performance Optimization",
        "Security Hardening",
        "Analytics Dashboard"
      ],
      notIncluded: [
        "24/7 Priority Support",
        "Dedicated Account Manager"
      ],
      popular: true,
      color: "from-emerald-500 to-cyan-500"
    },
    {
      name: "ENTERPRISE",
      icon: Crown,
      price: "$15,999",
      period: "/project",
      description: "Complete solutions for large organizations", 
      features: [
        "Everything in Professional",
        "Custom Architecture Design",
        "Advanced Integrations",
        "Scalability Planning",
        "12 Months Support",
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "Training & Documentation",
        "Performance Monitoring",
        "Security Audits"
      ],
      notIncluded: [],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const addOns = [
    { name: "Additional Revisions", price: "$500", description: "Beyond included revisions" },
    { name: "Rush Delivery", price: "$2,000", description: "50% faster delivery time" },
    { name: "Extended Support", price: "$300/mo", description: "Ongoing maintenance & updates" },
    { name: "Training Sessions", price: "$150/hr", description: "Team training & onboarding" }
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
                PRICING
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6"></div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-mono tracking-tight">
                SIMPLE <span className="text-emerald-400">PRICING</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed font-mono max-w-2xl mx-auto">
                Transparent pricing for world-class development services. No hidden fees.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Plans - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {plans.map((plan, index) => {
                  const IconComponent = plan.icon;
                  return (
                    <div
                      key={index}
                      className={`relative bg-slate-800 border ${
                        plan.popular ? 'border-emerald-400 scale-105' : 'border-slate-700'
                      } p-6 hover:border-emerald-400/50 transition-all group`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <span className="bg-emerald-400 text-black px-3 py-1 text-xs font-black font-mono">
                            MOST POPULAR
                          </span>
                        </div>
                      )}
                      
                      <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} flex items-center justify-center mb-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-black text-white mb-2 font-mono">
                        {plan.name}
                      </h3>
                      
                      <div className="mb-4">
                        <span className="text-3xl font-black text-white font-mono">{plan.price}</span>
                        <span className="text-slate-400 font-mono text-sm">{plan.period}</span>
                      </div>
                      
                      <p className="text-slate-300 text-sm mb-6 font-mono">
                        {plan.description}
                      </p>
                      
                      <div className="space-y-2 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <Check className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                            <span className="text-slate-300 font-mono">{feature}</span>
                          </div>
                        ))}
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <X className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                            <span className="text-slate-500 font-mono">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 font-black text-sm font-mono tracking-wider hover:scale-105 transition-transform`}>
                        GET STARTED
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Add-ons - Compact */}
        <section className="py-12 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  ADD_ONS
                </span>
                <h2 className="text-2xl font-black text-white font-mono">
                  ENHANCE YOUR <span className="text-cyan-400">PROJECT</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {addOns.map((addon, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-700 p-4 hover:border-emerald-400/50 transition-all group">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-black text-white font-mono">
                        {addon.name}
                      </h3>
                      <span className="text-emerald-400 font-black font-mono text-lg">
                        {addon.price}
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm font-mono">
                      {addon.description}
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

export default Pricing;
