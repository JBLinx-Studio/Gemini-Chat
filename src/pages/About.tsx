
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Code, Users, Trophy, Zap, ArrowRight, Target, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Alex Chen",
      role: "LEAD_DEVELOPER",
      expertise: "Full-Stack Development",
      experience: "8+ years",
      skills: ["React", "Node.js", "Python", "AWS"]
    },
    {
      name: "Sarah Kim", 
      role: "GAME_DESIGNER",
      expertise: "Unity & Unreal Engine",
      experience: "6+ years",
      skills: ["Unity", "C#", "3D Modeling", "VR/AR"]
    },
    {
      name: "Marcus Johnson",
      role: "UI/UX_DESIGNER", 
      expertise: "Modern Web Design",
      experience: "5+ years",
      skills: ["Figma", "Adobe XD", "CSS", "Animation"]
    }
  ];

  const achievements = [
    { icon: Trophy, value: "98.7%", label: "Client Satisfaction", color: "text-yellow-400" },
    { icon: Code, value: "150+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: Users, value: "200+", label: "Happy Clients", color: "text-purple-400" },
    { icon: Zap, value: "99.9%", label: "System Uptime", color: "text-green-400" }
  ];

  const values = [
    {
      icon: Target,
      title: "PRECISION",
      description: "Every line of code serves a purpose. We deliver pixel-perfect solutions."
    },
    {
      icon: Lightbulb,
      title: "INNOVATION", 
      description: "Pushing boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: Rocket,
      title: "PERFORMANCE",
      description: "Lightning-fast, scalable applications that exceed expectations."
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
                ABOUT_US
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto mb-6"></div>
              
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 font-mono tracking-tight">
                WHO WE <span className="text-emerald-400">ARE</span>
              </h1>
              
              <p className="text-lg text-slate-300 mb-8 leading-relaxed font-mono max-w-2xl mx-auto">
                Elite developers, designers, and innovators crafting the future of digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Values - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-slate-800 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                      <IconComponent className="w-8 h-8 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-black text-white mb-2 font-mono">
                        {value.title}
                      </h3>
                      <p className="text-slate-300 text-sm font-mono leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team - Compact */}
        <section className="py-12 bg-black border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-emerald-400 font-black text-sm font-mono tracking-[0.2em] block mb-2">
                  OUR_TEAM
                </span>
                <h2 className="text-3xl font-black text-white font-mono">
                  MEET THE <span className="text-cyan-400">EXPERTS</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {team.map((member, index) => (
                  <div key={index} className="bg-slate-900 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all group">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 mb-4 flex items-center justify-center">
                      <span className="text-black font-black text-sm font-mono">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-white mb-1 font-mono">
                      {member.name}
                    </h3>
                    <p className="text-emerald-400 font-bold text-xs mb-2 font-mono">
                      {member.role}
                    </p>
                    <p className="text-slate-300 text-xs mb-3 font-mono">
                      {member.expertise} • {member.experience}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="bg-slate-700 text-cyan-400 px-2 py-0.5 text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Compact */}
        <section className="py-12 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center group">
                      <div className="w-16 h-16 bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:border-emerald-400/50 transition-all">
                        <IconComponent className={`w-6 h-6 ${achievement.color} group-hover:text-emerald-400 transition-colors`} />
                      </div>
                      <div className="text-2xl font-black text-white mb-1 font-mono">
                        {achievement.value}
                      </div>
                      <div className="text-sm text-slate-400 font-mono">
                        {achievement.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
