
import React from 'react';
import { Target, Users, Award, Zap, TrendingUp, Shield, Clock, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Mission-Driven Approach",
      description: "Focused on delivering innovative solutions that solve real-world problems and drive business growth"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with extensive experience in cutting-edge technology and modern design practices"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure excellence in every project we deliver"
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Constantly pushing boundaries with the latest technology trends and development methodologies"
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed", icon: TrendingUp },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "99%", label: "Success Rate", icon: Star }
  ];

  const achievements = [
    "Top-rated development studio on GitHub",
    "Successfully delivered 100+ projects",
    "Expert in 15+ programming languages",
    "Industry recognition for innovation",
    "24/7 technical support coverage",
    "ISO certified development processes"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-600 rounded-full px-4 py-2 mb-4">
            <Shield size={16} className="mr-2" />
            <span className="text-sm font-semibold">ABOUT US</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Leading Technology
            <span className="block text-blue-600">Solutions Provider</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JBLinx Studio is a forward-thinking technology company specializing in creating 
            innovative digital solutions that transform businesses and exceed expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Building the Future of Technology
            </h3>
            
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to bridge the gap between innovative technology and practical business solutions, 
              JBLinx Studio has grown to become a trusted partner for companies looking to leverage cutting-edge 
              technology for competitive advantage.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our passion for technology drives us to constantly explore new possibilities, ensuring that every 
              project we deliver not only meets current requirements but is also future-ready and scalable.
            </p>

            {/* Achievements List */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-colors font-semibold shadow-lg">
              Learn More About Us
            </button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/50 to-purple-200/50 rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-blue-200/50 rounded-full transform -translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10 space-y-6">
                {/* Company Info Card */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-gray-900">JBLinx Studio</h4>
                    <div className="text-sm text-gray-500">Est. 2019</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Technology Innovation</span>
                      <div className="w-16 h-2 bg-blue-200 rounded-full">
                        <div className="w-full h-full bg-blue-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Client Satisfaction</span>
                      <div className="w-16 h-2 bg-green-200 rounded-full">
                        <div className="w-full h-full bg-green-600 rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Project Delivery</span>
                      <div className="w-16 h-2 bg-purple-200 rounded-full">
                        <div className="w-full h-full bg-purple-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 shadow-lg text-center">
                      <stat.icon className="text-blue-600 mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="text-blue-600" size={32} />
              </div>
              <h4 className="font-bold text-gray-900 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <stat.icon className="text-blue-200 mx-auto mb-4 group-hover:scale-110 transition-transform" size={32} />
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
