
import React, { useState } from 'react';
import { Github, ExternalLink, Gamepad2, Code, Database, Smartphone, Monitor, Star } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    // Games
    {
      id: 1,
      title: "Survival Game",
      category: "Games",
      description: "Open-world survival with crafting and multiplayer systems.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      tech: ["Unity", "C#", "Multiplayer"],
      github: "https://github.com/JBLinx-Studio",
      status: "In Development",
      icon: Gamepad2
    },
    {
      id: 2,
      title: "Horror Game",
      category: "Games", 
      description: "Psychological horror with advanced AI systems.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
      tech: ["Unity", "C#", "AI"],
      github: "https://github.com/JBLinx-Studio",
      status: "Beta",
      icon: Gamepad2
    },
    {
      id: 3,
      title: "RTS Game",
      category: "Games",
      description: "Real-time strategy with multiplayer networking.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop",
      tech: ["Unity", "Networking", "C#"],
      github: "https://github.com/JBLinx-Studio",
      status: "Alpha",
      icon: Gamepad2
    },
    // Templates & Apps
    {
      id: 4,
      title: "FastAPI MySQL Template",
      category: "Backend",
      description: "Production-ready API template with authentication.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["FastAPI", "MySQL", "Python"],
      github: "https://github.com/JBLinx-Studio/FastAPI-MySQL-Template",
      status: "Live",
      icon: Database
    },
    {
      id: 5,
      title: "Flutter Firebase Template",
      category: "Mobile",
      description: "Complete mobile template with Firebase integration.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      tech: ["Flutter", "Firebase", "Dart"],
      github: "https://github.com/JBLinx-Studio/Flutter-Firebase-Template",
      status: "Live",
      icon: Smartphone
    },
    {
      id: 6,
      title: "NextJS Ecommerce",
      category: "Web",
      description: "Full-featured e-commerce with payment integration.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["Next.js", "Stripe", "React"],
      github: "https://github.com/JBLinx-Studio/NextJS-Ecommerce",
      status: "Live",
      icon: Monitor
    }
  ];

  const filters = ['All', 'Games', 'Backend', 'Mobile', 'Web'];
  const filteredProjects = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'bg-green-500';
      case 'Beta': return 'bg-blue-500'; 
      case 'Alpha': return 'bg-yellow-500';
      case 'In Development': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-100 rounded-full px-6 py-3 mb-6 shadow-lg">
            <Star className="w-5 h-5 mr-2 text-purple-600 animate-pulse" />
            <span className="text-sm font-bold text-purple-700 tracking-wide">Our Digital Portfolio</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 italic font-light">
              Creations
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 leading-relaxed font-light">
            A showcase of games, templates, and applications born from passion and precision.
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div key={project.id} className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`${getStatusColor(project.status)} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a 
                      href={project.github}
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">{project.category}</span>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced GitHub CTA */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More on GitHub</h3>
            <p className="text-gray-300 mb-6 max-w-lg">
              Dive deeper into our open-source projects and contribute to our growing community.
            </p>
            <a 
              href="https://github.com/orgs/JBLinx-Studio/repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Github className="w-5 h-5 mr-3" />
              View All Repositories
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
