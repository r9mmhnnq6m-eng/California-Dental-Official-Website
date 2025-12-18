
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-serif mb-6">Comprehensive Dental Services</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We provide complete dental solutions under one roof—helping you smile confidently, eat comfortably, and live healthier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {SERVICES.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 relative overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="md:w-3/5 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-teal-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed mb-8">{service.description}</p>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  Explore Details
                  <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
