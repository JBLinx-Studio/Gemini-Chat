
import React, { useEffect, useState } from 'react';
import { Users, Code, Coffee, Award, Star, Download, BookOpen, Gamepad2 } from 'lucide-react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    downloads: 0,
    reviews: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targetCounts = {
        clients: 250,
        projects: 500,
        downloads: 25000,
        reviews: 1200
      };

      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          clients: Math.floor(targetCounts.clients * progress),
          projects: Math.floor(targetCounts.projects * progress),
          downloads: Math.floor(targetCounts.downloads * progress),
          reviews: Math.floor(targetCounts.reviews * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targetCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      icon: Users,
      value: counts.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Worldwide customers',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      value: counts.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Successful deliveries',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Download,
      value: counts.downloads,
      suffix: '+',
      label: 'Downloads',
      description: 'Digital products sold',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      value: counts.reviews,
      suffix: '+',
      label: '5-Star Reviews',
      description: 'Customer satisfaction',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Winner of Best Tech Innovation 2024'
    },
    {
      icon: BookOpen,
      title: 'Published Author',
      description: '5+ technical books and guides published'
    },
    {
      icon: Gamepad2,
      title: 'Game Development',
      description: 'Featured in top indie game showcases'
    },
    {
      icon: Coffee,
      title: 'Community Leader',
      description: 'Active contributor to open source projects'
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 mb-8 border border-white/20">
            <Award className="w-5 h-5 text-yellow-400 mr-3" />
            <span className="text-white font-semibold">Our Achievements</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            Numbers That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"> Speak Volumes</span>
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Our track record of success and the trust our clients place in us speaks for itself. These numbers represent real impact and lasting partnerships.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-xl font-semibold text-blue-400 mb-2">
                  {stat.label}
                </div>
                
                {/* Description */}
                <div className="text-gray-400 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 p-8 lg:p-12">
          <h3 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
            Recognition & Milestones
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-white mb-2">
                  {achievement.title}
                </h4>
                
                <p className="text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 lg:p-12 shadow-2xl">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together and add your project to our growing list of achievements.
            </p>
            <button className="bg-white text-blue-600 px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              Start Your Project Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
