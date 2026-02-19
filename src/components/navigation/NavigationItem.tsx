import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
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

interface NavigationItemProps {
  name: string;
  href: string;
  type: 'link' | 'dropdown';
  categories?: DropdownCategory[];
}

const NavigationItem: React.FC<NavigationItemProps> = ({ name, href, type, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  useEffect(() => {
    return () => clearTimeout(timeoutRef.current);
  }, []);

  if (type === 'link') {
    return (
      <Link to={href} className="relative group py-2">
        <span className="text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider transition-colors duration-200">
          {name}
        </span>
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
      </Link>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button className="flex items-center gap-1 py-2 group">
        <span className="text-zinc-300 group-hover:text-orange-400 font-bold text-xs font-mono tracking-wider transition-colors duration-200">
          {name}
        </span>
        <ChevronDown
          size={12}
          className={`text-zinc-500 group-hover:text-orange-400 transition-all duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && categories && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50" style={{ minWidth: '580px' }}>
          <div className="bg-zinc-900 border border-zinc-700/80 shadow-2xl shadow-black/50 rounded-sm overflow-hidden">
            <div className="grid grid-cols-3 divide-x divide-zinc-800">
              {categories.map((category, i) => (
                <div key={i} className="p-3">
                  <div className="text-orange-400 font-bold text-[10px] font-mono tracking-widest mb-2 pb-1.5 border-b border-zinc-800">
                    {category.title.toUpperCase()}
                  </div>
                  <div className="space-y-0.5">
                    {category.items.map((item, j) => (
                      <Link
                        key={j}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-2 py-1.5 rounded-sm hover:bg-zinc-800 transition-colors duration-150 group/item"
                      >
                        <div className="text-zinc-200 text-xs font-semibold font-mono group-hover/item:text-orange-400 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-zinc-500 text-[10px] leading-tight">
                          {item.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Bottom CTA bar */}
            <div className="bg-zinc-800/80 border-t border-zinc-700/50 px-4 py-2.5 flex items-center justify-between">
              <span className="text-zinc-400 text-[10px] font-mono">
                Free consultation • Expert guidance
              </span>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="bg-orange-500 hover:bg-orange-600 text-zinc-950 px-3 py-1 text-[10px] font-bold font-mono tracking-wider transition-colors duration-200"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationItem;
