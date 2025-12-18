
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES } from '../constants';

interface HeaderProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
    { name: 'AI Lab', path: '/ai-lab' },
  ];

  return (
    <nav 
      className={`sticky top-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isOpen ? 'bg-slate-900 text-white shadow-2xl' : (scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4')
      }`}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group relative z-[60]">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-2xl transition-all duration-500 ${isOpen ? 'bg-white text-slate-900' : 'bg-teal-600 text-white shadow-lg shadow-teal-100'}`}>
              CD
            </div>
            <div className="transition-colors duration-500">
              <span className={`block text-xl font-black leading-none tracking-tighter ${isOpen ? 'text-white' : 'text-slate-900'}`}>California Dental</span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.25em] ${isOpen ? 'text-teal-400' : 'text-slate-400'}`}>Dr. Arman Petrosyan</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="dropdown h-full flex items-center">
                <Link
                  to={link.path}
                  className={`text-sm font-extrabold tracking-tight transition-all py-4 flex items-center gap-1.5 ${
                    isOpen ? 'text-slate-300 hover:text-white' : (location.pathname === link.path ? 'text-teal-600' : 'text-slate-700 hover:text-teal-600')
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  )}
                </Link>
                
                {link.hasDropdown && (
                  <div className="dropdown-menu pt-2">
                    <div className="bg-white border border-slate-100 shadow-2xl rounded-3xl p-5 min-w-[280px]">
                      <div className="grid gap-2">
                        {SERVICES.map(s => (
                          <Link 
                            key={s.id} 
                            to={`/services/${s.id}`}
                            className="flex items-center gap-3 p-3 text-sm font-bold text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-2xl transition-all group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-200 group-hover/item:bg-teal-500 transition-colors"></div>
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
              className={`px-7 py-3 rounded-2xl text-sm font-black transition-all transform active:scale-95 ${isOpen ? 'bg-white text-slate-900' : 'bg-slate-900 text-white hover:bg-teal-600 shadow-xl shadow-slate-200'}`}
            >
              {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Mobile Toggle - Opens on Hover */}
          <div 
            className="lg:hidden flex items-center h-16"
            onMouseEnter={() => setIsOpen(true)}
          >
            <button 
              className={`relative z-[60] w-12 h-12 flex items-center justify-center rounded-2xl transition-all ${isOpen ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`} 
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : 'w-4'}`}></span>
                <span className={`block h-0.5 bg-current transition-all ${isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-5'}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Expanded Menu - This pushes the content down because Header is 'sticky' */}
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-[120vh] opacity-100 py-12' : 'max-h-0 opacity-0 py-0'}`}
      >
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Main Links */}
          <div className="flex flex-col gap-4">
            <p className="text-teal-500 font-black text-xs uppercase tracking-widest mb-2">Navigation</p>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-3xl font-serif font-black text-white hover:text-teal-400 transition-all flex items-center justify-between group"
              >
                {link.name}
                <svg className="w-6 h-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            ))}
          </div>

          {/* Services Quick Grid */}
          <div className="hidden md:flex flex-col gap-4">
            <p className="text-teal-500 font-black text-xs uppercase tracking-widest mb-2">Our Services</p>
            <div className="grid grid-cols-1 gap-2">
              {SERVICES.map(s => (
                <Link key={s.id} to={`/services/${s.id}`} className="text-slate-400 font-bold hover:text-white transition-colors text-lg">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Details & Summary Hours */}
          <div className="flex flex-col gap-6">
            <p className="text-teal-500 font-black text-xs uppercase tracking-widest mb-2">Contact Us</p>
            <div className="space-y-1">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="text-3xl font-black text-white block hover:text-teal-400 transition-colors">{BUSINESS_INFO.phone}</a>
              <p className="text-slate-400 font-medium">{BUSINESS_INFO.email}</p>
            </div>
            <p className="text-slate-500 leading-relaxed text-sm">
              {BUSINESS_INFO.address}<br />
              San Fernando, CA 91340
            </p>
            <div className="pt-4 flex flex-col gap-2">
               <p className="text-teal-500 font-black text-[10px] uppercase tracking-widest mb-1">Quick Hours</p>
               {BUSINESS_INFO.hours.slice(0, 3).map((h, i) => (
                 <div key={i} className="text-xs font-bold text-slate-400">
                   {h.day}: <span className="text-white">{h.time}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
