
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';

const ServiceDetail: React.FC = () => {
  const { id } = useParams();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-teal-600 font-bold mb-12 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
            Back to Services
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h1 className="text-5xl font-serif mb-6 leading-tight">{service.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                {service.longDescription}
              </p>
              
              <div className="space-y-4 mb-10">
                <h3 className="text-2xl font-bold">Key Benefits</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-teal-50 rounded-xl text-teal-800 font-semibold">
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>

              {service.pricing && (
                <div className="p-6 bg-slate-900 text-white rounded-2xl mb-10">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-teal-400 mb-2">Pricing & Financing</h4>
                  <p className="text-lg">{service.pricing}</p>
                </div>
              )}
            </div>

            <div className="relative">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full rounded-[3rem] shadow-2xl object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-teal-600/10 rounded-full -z-10"></div>
            </div>
          </div>

          <div className="bg-white rounded-[3rem] p-12 shadow-xl border border-slate-100">
            <h3 className="text-3xl font-serif mb-10 text-center">Our Process</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {service.process.map((step, i) => (
                <div key={i} className="text-center relative">
                  <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-6 border border-slate-100">
                    {i + 1}
                  </div>
                  <h4 className="font-bold text-lg mb-2">{step}</h4>
                  <p className="text-sm text-slate-500">Expert execution at every stage.</p>
                  {i < service.process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[70%] w-full h-[1px] bg-slate-100"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
