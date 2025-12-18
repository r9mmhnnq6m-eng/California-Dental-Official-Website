
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern dental office" 
            className="w-full h-full object-cover scale-105 opacity-30 lg:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-slate-900 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-full mb-10 shadow-2xl shadow-slate-900/20">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
              San Fernando's choice for dental care
            </div>
            
            <h1 className="text-7xl md:text-9xl font-serif text-slate-900 mb-10 leading-[0.85] tracking-tighter">
              A Truly <br />
              <span className="text-accent-bg">Gentle</span> <br />
              Experience.
            </h1>
            
            <p className="text-2xl md:text-3xl text-slate-600 mb-14 leading-tight max-w-2xl font-medium tracking-tight">
              We provide complete dental solutions under one roof helping you <span className="text-slate-900 font-bold">smile confidently</span> and live healthier.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <Link 
                to="/contact" 
                className="px-12 py-6 bg-slate-900 text-white rounded-3xl font-black text-xl hover:bg-teal-600 hover:translate-y-[-6px] transition-all text-center shadow-2xl shadow-slate-200"
              >
                Book Your Visit
              </Link>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="px-12 py-6 bg-white border-2 border-slate-100 text-slate-900 rounded-3xl font-black text-xl hover:bg-slate-50 transition-all text-center flex items-center justify-center gap-4"
              >
                <svg className="w-6 h-6 text-teal-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.567 4.567l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                Call Now
              </a>
            </div>
            
            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i*12}`} alt="User" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-black text-slate-900 leading-none">5,000+ Happy Patients</p>
                <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">San Fernando Valley</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-serif text-slate-900 mb-8 leading-none">
              Services <br className="md:hidden" /> <span className="text-accent-bg">Tailored</span> to You.
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              From preventative care to full smile reconstructions, Dr. Petrosyan and his team use the latest technology to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {SERVICES.map((s, i) => (
              <Link 
                key={s.id} 
                to={`/services/${s.id}`} 
                className={`group bg-white rounded-[3.5rem] shadow-sm hover:shadow-2xl hover:translate-y-[-12px] transition-all duration-700 border border-slate-100 flex flex-col min-h-[500px] overflow-hidden ${i % 2 !== 0 ? 'lg:translate-y-16' : ''}`}
              >
                <div className="h-48 overflow-hidden relative">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-all duration-700"></div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-3xl font-serif font-black mb-4 leading-tight group-hover:text-teal-600 transition-colors">{s.title}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium line-clamp-3 mb-6">{s.description}</p>
                  <div className="mt-auto pt-6 flex items-center gap-4 text-slate-900 font-black text-sm uppercase tracking-widest border-t border-slate-50">
                    View Service
                    <div className="w-8 h-[2px] bg-slate-100 group-hover:w-16 group-hover:bg-teal-500 transition-all duration-700"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden flex flex-col lg:flex-row shadow-3xl">
            <div className="lg:w-1/2 p-16 md:p-24 flex flex-col justify-center text-white">
              <span className="text-teal-400 font-black uppercase tracking-[0.4em] text-xs mb-10">High Honors Graduate</span>
              <h2 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-12">
                Expertise <br /> You Can <br /> <span className="text-teal-500 italic">Trust.</span>
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-16 font-medium max-w-lg">
                Dr. Petrosyan graduated in the top 10% of his class at USC and has dedicated over 20 years to mastering cosmetic and restorative dentistry.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-6 text-white font-black text-xl group w-fit"
              >
                The Full Story
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center group-hover:translate-x-6 transition-all duration-700 group-hover:bg-teal-500">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7"/></svg>
                </div>
              </Link>
            </div>
            <div className="lg:w-1/2 relative min-h-[600px]">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=1200" 
                alt="Dr. Petrosyan Professional Portrait" 
                className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900/40 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-serif text-slate-900 mb-12 leading-none tracking-tighter">
              Ready to <br /> <span className="text-accent-bg">Experience</span> <br /> the Difference?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact" className="px-14 py-7 bg-slate-900 text-white rounded-[2rem] font-black text-2xl hover:bg-teal-600 transition-all shadow-2xl shadow-slate-200 w-full sm:w-auto">
                Schedule Now
              </Link>
              <Link to="/ai-lab" className="px-14 py-7 bg-white border-2 border-slate-200 text-slate-900 rounded-[2rem] font-black text-2xl hover:border-teal-500 transition-all w-full sm:w-auto">
                Explore AI Lab
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
