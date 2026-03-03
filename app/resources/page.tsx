'use client';

import { ArrowLeft, Phone, Globe, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    name: "ACLU (American Civil Liberties Union)",
    description: "Defends and preserves the individual rights and liberties guaranteed to every person in this country.",
    link: "https://www.aclu.org",
    phone: "1-212-549-2500"
  },
  {
    name: "National Immigration Law Center",
    description: "Dedicated to defending and advancing the rights of immigrants with low income.",
    link: "https://www.nilc.org",
    phone: "1-213-639-3900"
  },
  {
    name: "United We Dream",
    description: "The largest immigrant youth-led community in the country.",
    link: "https://unitedwedream.org",
    phone: "1-844-363-1423"
  },
  {
    name: "Immigrant Defense Project",
    description: "Works to secure fairness and justice for immigrants in the United States.",
    link: "https://www.immigrantdefenseproject.org",
    phone: "1-212-725-6422"
  }
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 z-0" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-3xl font-black tracking-tighter">RESOURCES</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Help & Support</p>
        </div>
      </header>

      <div className="px-6 -mt-8 relative z-20 space-y-6">
        
        <div className="bg-blue-600 text-white p-6 rounded-3xl shadow-xl flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Need Legal Help?</h2>
            <p className="text-blue-100 text-sm mt-1">Find a lawyer near you.</p>
          </div>
          <a 
            href="https://www.immigrationlawhelp.org" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-4 py-2 rounded-full font-bold text-sm hover:bg-blue-50 transition-colors"
          >
            Search
          </a>
        </div>

        {resources.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">{item.description}</p>
            
            <div className="flex gap-3">
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-colors"
              >
                <Globe size={16} /> Website
              </a>
              {item.phone && (
                <a 
                  href={`tel:${item.phone}`} 
                  className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2 px-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold transition-colors"
                >
                  <Phone size={16} /> Call
                </a>
              )}
            </div>
          </div>
        ))}
        
        <div className="text-center text-slate-400 text-xs mt-8">
          <p>Disclaimer: This app provides general information and is not legal advice. Consult with a qualified attorney for legal advice.</p>
        </div>

      </div>
    </div>
  );
}
