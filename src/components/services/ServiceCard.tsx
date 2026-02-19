
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: any;
  index: number;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index, isHovered, onHover }) => {
  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => onHover(service.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Background Image with enhanced overlay */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={service.bgImage} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}></div>
        
        {/* Enhanced overlay content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/10">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
            
            {/* Enhanced stats badge */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span className="text-white font-semibold text-sm">{service.stats.rating}</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-200 transition-colors">
              {service.title}
            </h3>
            <div className="flex justify-between items-center text-white/80 text-sm">
              <div className="flex space-x-4">
                <span>{service.stats.projects} Projects</span>
                <span>{service.stats.clients} Clients</span>
              </div>
              <div className="text-right">
                <div className="text-yellow-200 font-semibold">{service.price}</div>
                <div className="text-white/60 text-xs">{service.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced content section */}
      <div className="p-6">
        <p className="text-gray-600 mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Subcategories */}
        {service.subcategories && (
          <div className="mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Specializations:</h4>
            <div className="grid grid-cols-2 gap-2">
              {service.subcategories.slice(0, 4).map((sub: any, subIndex: number) => (
                <div key={subIndex} className="text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
                  {sub.name}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {service.features.map((feature: string, featureIndex: number) => (
            <div key={featureIndex} className="flex items-center text-sm text-gray-500 bg-gray-50 rounded-lg px-3 py-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 flex-shrink-0"></div>
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <Link 
          to={service.link}
          className="inline-flex items-center justify-between w-full bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 rounded-2xl p-4 group/cta transition-all duration-300 border border-gray-200 hover:border-blue-200 hover:shadow-lg"
        >
          <span className="font-semibold text-gray-700 group-hover/cta:text-blue-600 transition-colors">
            Explore {service.title}
          </span>
          <ArrowRight className="w-5 h-5 text-gray-400 group-hover/cta:text-blue-600 group-hover/cta:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
