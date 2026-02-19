
import React from 'react';
import { ArrowRight, Code2, Gamepad2, Cloud, BookOpen, Users, Zap, Building, Trophy, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
}

interface DropdownCategory {
  title: string;
  items: DropdownItem[];
}

interface MegaDropdownProps {
  categories: DropdownCategory[];
  isOpen: boolean;
  onClose: () => void;
}

const MegaDropdown: React.FC<MegaDropdownProps> = ({ categories, isOpen, onClose }) => {
  if (!isOpen) return null;

  const getCategoryIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'game development': return Gamepad2;
      case 'web development': return Code2;
      case 'enterprise solutions': return Building;
      case 'learn & grow': return BookOpen;
      case 'showcase': return Trophy;
      case 'innovation lab': return Lightbulb;
      default: return Zap;
    }
  };

  return (
    <div className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-300">
      <div className="container mx-auto p-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const IconComponent = getCategoryIcon(category.title);
            return (
              <div key={categoryIndex} className="space-y-3">
                <div className="flex items-center space-x-3 pb-3 border-b border-zinc-700/50">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
                    <IconComponent className="w-4 h-4 text-zinc-900" />
                  </div>
                  <h3 className="font-bold text-base text-orange-400 font-mono tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      onClick={onClose}
                      className="block p-3 bg-zinc-800/80 hover:bg-zinc-700/90 border border-zinc-700/50 hover:border-orange-400/50 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-sm text-zinc-100 group-hover:text-orange-400 transition-colors font-mono mb-1">
                            {item.name}
                          </div>
                          <div className="text-xs text-zinc-300 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                        <ArrowRight className="w-3 h-3 text-zinc-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all mt-0.5 flex-shrink-0 ml-2" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-6 pt-4 border-t border-zinc-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="space-y-1">
              <p className="text-sm text-zinc-200 font-semibold font-mono">
                Ready to Build Something Amazing?
              </p>
              <p className="text-xs text-zinc-400 font-mono">
                Free consultation • Custom solutions • Expert guidance
              </p>
            </div>
            <Link
              to="/about"
              onClick={onClose}
              className="inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-zinc-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 space-x-2 hover:scale-105 shadow-lg font-mono"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaDropdown;
