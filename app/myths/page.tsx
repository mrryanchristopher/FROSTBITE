'use client';

import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

const myths = [
  {
    myth: "I have to open the door for ICE if they knock.",
    fact: "False. You do not have to open the door unless they have a judicial warrant signed by a judge. Ask them to slide it under the door."
  },
  {
    myth: "I have to answer their questions.",
    fact: "False. You have the right to remain silent. You do not have to answer questions about where you were born or your immigration status."
  },
  {
    myth: "If I am undocumented, I have no rights.",
    fact: "False. Everyone in the U.S., regardless of immigration status, has certain rights under the Constitution."
  },
  {
    myth: "I should run if I see ICE.",
    fact: "False. Running can be used as a reason to arrest you. Stay calm and do not run."
  },
  {
    myth: "I have to sign whatever they give me.",
    fact: "False. Do not sign anything without speaking to a lawyer first. You could be signing your own deportation order."
  }
];

export default function MythsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 z-0" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-3xl font-black tracking-tighter">MYTHS VS FACTS</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Common Misconceptions</p>
        </div>
      </header>

      <div className="px-6 -mt-8 relative z-20 space-y-6">
        {myths.map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
            <div className="flex items-start gap-3 mb-4">
              <XCircle className="text-red-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-red-900 uppercase text-sm tracking-wide mb-1">Myth</h3>
                <p className="text-lg font-medium text-slate-800 leading-tight">{item.myth}</p>
              </div>
            </div>
            
            <div className="border-t border-slate-100 my-4"></div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-green-500 shrink-0 mt-1" size={24} />
              <div>
                <h3 className="font-bold text-green-900 uppercase text-sm tracking-wide mb-1">Fact</h3>
                <p className="text-slate-600 leading-relaxed">{item.fact}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
