
import React from 'react';
import { Service, Testimonial } from './types';

export const BUSINESS_INFO = {
  name: "California Dental",
  doctor: "Dr. Arman Petrosyan",
  address: "1009 Glenoaks Blvd, San Fernando, CA 91340",
  phone: "(818) 365-1500",
  email: "info@californiadentalsf.com",
  hours: [
    { day: "Monday", time: "9:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 6:00 PM" },
    { day: "Thursday", time: "9:00 AM – 7:00 PM" },
    { day: "Friday", time: "Closed" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" }
  ]
};

export const SERVICES: Service[] = [
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Restore your smile with long-lasting, natural-looking tooth replacements.",
    longDescription: "Dental implants are the most durable and natural-looking solution for missing teeth. At California Dental, we use advanced implant techniques to restore your smile and confidence.",
    benefits: [
      "Permanent tooth replacement",
      "Natural look and feel",
      "Improved chewing and speech",
      "Prevents bone loss"
    ],
    process: [
      "Consultation & imaging",
      "Implant placement",
      "Healing & integration",
      "Crown attachment"
    ],
    pricing: "Costs vary based on individual needs. Financing options available.",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "crowns-bridges",
    title: "Crowns & Bridges",
    description: "Strength and beauty restored to your damaged or missing teeth.",
    longDescription: "Our custom-fitted crowns and bridges provide a seamless blend with your natural teeth, restoring function and aesthetics.",
    benefits: ["Restores damaged teeth", "Fills gaps", "Prevents shifting", "Durable materials"],
    process: ["Tooth preparation", "Impressions", "Temporary placement", "Final fitting"],
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "dentures",
    title: "Dentures",
    description: "Comfortable and secure full or partial dentures for a full smile.",
    longDescription: "We provide modern dentures that look natural and fit comfortably, allowing you to eat and speak with confidence.",
    benefits: ["Full smile restoration", "Improved facial support", "Cost-effective", "Removable options"],
    process: ["Measurement", "Trial fitting", "Adjustments", "Final delivery"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Professional whitening for a brighter, more confident smile.",
    longDescription: "Brighten your teeth by several shades in just one visit or with our professional take-home kits.",
    benefits: ["Instant results", "Safe for enamel", "Boosts confidence", "Removes deep stains"],
    process: ["Consultation", "Preparation", "Application", "Post-care"],
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1200"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, name: "Jessica M.", service: "Teeth Whitening", quote: "My smile is brighter than ever. Highly professional staff.", rating: 5 },
  { id: 2, name: "Daniel R.", service: "Dental Implants", quote: "Life-changing results. I can eat comfortably again.", rating: 5 },
  { id: 3, name: "Priya K.", service: "Root Canal", quote: "Completely painless and smooth experience.", rating: 5 },
  { id: 4, name: "Michael S.", service: "Braces", quote: "Clear explanation and excellent orthodontic care.", rating: 5 },
  { id: 5, name: "Linda T.", service: "Dentures", quote: "They helped me smile again with confidence.", rating: 5 },
  { id: 6, name: "Carlos V.", service: "Gum Treatment", quote: "My gum health improved significantly.", rating: 5 },
  { id: 7, name: "Sarah N.", service: "Cosmetic Fillings", quote: "Natural look and quick treatment.", rating: 5 },
  { id: 8, name: "Ahmed H.", service: "Crowns", quote: "Strong, comfortable, and perfectly fitted.", rating: 5 }
];

export const FAQS = [
  { question: "How often should I visit the dentist?", answer: "We generally recommend a check-up and cleaning every six months to maintain optimal oral health." },
  { question: "Do you accept insurance?", answer: "Yes, we accept most major PPO dental insurance plans. Contact our office to verify your specific coverage." },
  { question: "Are dental implants painful?", answer: "Most patients report minimal discomfort during the procedure. We use local anesthesia and offer sedation options for your comfort." },
  { question: "Do you treat children?", answer: "Absolutely! Dr. Petrosyan is great with kids and we strive to make dental visits fun and stress-free for the whole family." }
];
