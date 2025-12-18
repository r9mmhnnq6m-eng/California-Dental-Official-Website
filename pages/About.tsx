
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="sticky top-32">
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200" 
                 alt="Professional Dental Clinic" 
                 className="w-full aspect-[4/5] object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
               <div className="absolute bottom-10 left-10 text-white">
                 <h2 className="text-3xl font-serif">Dr. Arman Petrosyan</h2>
                 <p className="text-slate-300">DDS, University of Southern California</p>
               </div>
             </div>
          </div>

          <div className="space-y-12">
            <div>
              <h1 className="text-5xl font-serif mb-8 text-slate-900 leading-tight">Expert Care with a Family Touch</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Dr. Petrosyan has over 20 years of experience and is committed to providing the absolute best in quality, thorough, and gentle dental care for every patient. He treats his patients like family and is also great with kids.
              </p>
              <div className="space-y-6 text-slate-500 leading-relaxed">
                <p>
                  Dr. Petrosyan is meticulous in providing the absolute best results in all of his cosmetic procedures. He finished his Bachelors of Science degree with high honors at the prestigious University of Southern California (USC). Then he was accepted to one of the most top-rated dental schools in the country at the University of Southern California. Here, he earned his Doctor of Dental Surgery degree, graduating at the top 10% of his class.
                </p>
                <p>
                  During his school years, he took great satisfaction in being part of mission trips traveling abroad to provide volunteer dental care for orphans in underprivileged areas in regions of Mexico, Belize, and Armenia. 
                </p>
              </div>
            </div>

            <div className="p-10 bg-slate-50 rounded-[2rem] border border-slate-100">
              <h3 className="text-2xl font-bold mb-8">Professional Memberships</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "American Dental Association (ADA)",
                  "California Dental Association (CDA)",
                  "San Fernando Valley Dental Society (SFVDS)",
                  "Nobel Biocare Implant Institute Alumni"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-3xl font-serif">Personal Life</h3>
              <p className="text-slate-600 leading-relaxed">
                Dr. P. (as he’s known to his patients) has become fluent in speaking the Spanish language. The large Spanish speaking community of Los Angeles loves communicating with him in Spanish. He is also fluent in his native language, Armenian.
              </p>
              <p className="text-slate-600 leading-relaxed">
                In his spare time, he enjoys spending quality time and traveling with his wife and two children. He is blessed to be surrounded by a great group of family and friends. He is also a big foodie and enjoys tasting cuisine from different cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
