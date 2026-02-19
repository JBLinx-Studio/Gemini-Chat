import React from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationItems } from '../data/navigationData';
import NavigationItem from './navigation/NavigationItem';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [openMobileSection, setOpenMobileSection] = React.useState<string | null>(null);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-zinc-950 text-zinc-400 py-1.5 px-4 hidden lg:block border-b border-zinc-800/80">
        <div className="container mx-auto text-[10px] font-mono flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <Phone className="w-2.5 h-2.5 text-orange-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-2.5 h-2.5 text-emerald-400" />
              <span>Contact@JBLinxStudio.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-2.5 h-2.5 text-amber-400" />
              <span>Mon-Thurs: 11:00-17:00</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-2.5 h-2.5 text-amber-400" />
            <span>South Africa, EC</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-zinc-900/98 backdrop-blur-xl border-b border-zinc-800">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                  <span className="text-zinc-950 font-black text-sm font-mono">JB</span>
                </div>
              </div>
              <div className="leading-none">
                <div className="text-base font-black text-zinc-100 font-mono">Linx</div>
                <div className="text-[9px] text-orange-400 font-bold font-mono tracking-[0.2em]">STUDIO</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              <Link to="/" className="relative group py-2">
                <span className="text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider transition-colors duration-200">
                  HOME
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
              {navigationItems.map((item, index) => (
                <NavigationItem
                  key={index}
                  name={item.name.toUpperCase()}
                  href={item.href}
                  type={item.type}
                  categories={item.categories}
                />
              ))}
              <Link to="/blog" className="relative group py-2">
                <span className="text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider transition-colors duration-200">
                  BLOG
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
              </Link>
            </nav>

            {/* CTA */}
            <div className="hidden lg:block">
              <a
                href="#contact"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-zinc-950 px-4 py-2 text-xs font-black font-mono tracking-wider transition-all duration-200"
              >
                DIVE IN
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden p-2 text-orange-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-zinc-900 border-t border-zinc-800 shadow-2xl z-50 max-h-[80vh] overflow-y-auto">
              <div className="px-4 py-3 space-y-1">
                <Link
                  to="/"
                  className="block py-2.5 text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider border-b border-zinc-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>

                {navigationItems.map((item, index) => (
                  <div key={index} className="border-b border-zinc-800/50">
                    {item.type === 'link' ? (
                      <Link
                        to={item.href}
                        className="block py-2.5 text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name.toUpperCase()}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-2.5 text-zinc-300 font-bold text-xs font-mono tracking-wider"
                          onClick={() =>
                            setOpenMobileSection(
                              openMobileSection === item.name ? null : item.name
                            )
                          }
                        >
                          <span className={openMobileSection === item.name ? 'text-orange-400' : ''}>
                            {item.name.toUpperCase()}
                          </span>
                          <ChevronDown
                            size={14}
                            className={`text-zinc-500 transition-transform duration-200 ${
                              openMobileSection === item.name ? 'rotate-180 text-orange-400' : ''
                            }`}
                          />
                        </button>
                        {openMobileSection === item.name && item.categories && (
                          <div className="pb-3 space-y-3">
                            {item.categories.map((cat, ci) => (
                              <div key={ci} className="pl-3">
                                <div className="text-orange-400/70 text-[10px] font-bold font-mono tracking-widest mb-1">
                                  {cat.title.toUpperCase()}
                                </div>
                                {cat.items.map((sub, si) => (
                                  <Link
                                    key={si}
                                    to={sub.href}
                                    className="block py-1.5 pl-2 text-zinc-400 hover:text-orange-400 text-xs font-mono transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                <Link
                  to="/blog"
                  className="block py-2.5 text-zinc-300 hover:text-orange-400 font-bold text-xs font-mono tracking-wider border-b border-zinc-800/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BLOG
                </Link>

                <div className="pt-3">
                  <a
                    href="#contact"
                    className="block text-center bg-gradient-to-r from-orange-500 to-amber-500 text-zinc-950 py-2.5 text-xs font-black font-mono tracking-wider"
                  >
                    GET STARTED
                  </a>
                </div>

                <div className="pt-3 pb-1 space-y-1.5 text-[10px] text-zinc-500 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-2.5 h-2.5 text-orange-400" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-2.5 h-2.5 text-emerald-400" />
                    <span>Contact@JBLinxStudio.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
