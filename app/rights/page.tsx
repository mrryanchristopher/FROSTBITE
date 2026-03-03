'use client';

import { ArrowLeft, Home, User, Lock } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scenarios = [
  {
    id: 'home',
    title: 'At Your Door',
    icon: <Home size={24} />,
    color: 'bg-blue-500',
    content: [
      {
        title: 'Do Not Open the Door',
        text: 'You are not required to open the door unless they have a judicial warrant signed by a judge.'
      },
      {
        title: 'Ask for a Warrant',
        text: 'Ask them to slide the warrant under the door or hold it up to a window. Look for a signature by a judge (judge or magistrate) and your correct name and address.'
      },
      {
        title: 'Remain Silent',
        text: 'State clearly: "I do not consent to a search. I am exercising my right to remain silent."'
      },
      {
        title: 'Do Not Sign Anything',
        text: 'Do not sign any documents without speaking to a lawyer first.'
      }
    ]
  },
  {
    id: 'public',
    title: 'In Public',
    icon: <User size={24} />,
    color: 'bg-green-500',
    content: [
      {
        title: 'Stay Calm',
        text: 'Do not run. Running can be used as a reason to arrest you.'
      },
      {
        title: 'Ask: "Am I Free to Go?"',
        text: 'If they say yes, walk away calmly. If they say no, ask why.'
      },
      {
        title: 'Right to Remain Silent',
        text: 'You have the right to remain silent. You do not have to answer questions about where you were born or your immigration status.'
      },
      {
        title: 'Do Not Consent to Search',
        text: 'State clearly: "I do not consent to a search of my belongings."'
      }
    ]
  },
  {
    id: 'custody',
    title: 'In Custody',
    icon: <Lock size={24} />,
    color: 'bg-purple-500',
    content: [
      {
        title: 'Ask for a Lawyer',
        text: 'You have the right to speak to a lawyer. Ask for one immediately.'
      },
      {
        title: 'Do Not Sign Anything',
        text: 'Do not sign any deportation papers or "voluntary departure" forms without a lawyer.'
      },
      {
        title: 'Contact Your Consulate',
        text: 'You have the right to contact your consulate if you are a foreign national.'
      },
      {
        title: 'Memorize a Number',
        text: 'Keep a phone number of a trusted person or lawyer memorized in case your phone is taken.'
      }
    ]
  }
];

export default function RightsPage() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-slate-900 text-white p-6 pb-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-3xl font-black tracking-tighter">YOUR RIGHTS</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Know Your Protections</p>
        </div>
        
        {/* Tabs */}
        <div className="flex mt-8 space-x-2 overflow-x-auto pb-2 no-scrollbar">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setActiveTab(scenario.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl transition-all whitespace-nowrap font-bold ${
                activeTab === scenario.id 
                  ? `${scenario.color} text-white shadow-lg scale-105` 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {scenario.icon}
              {scenario.title}
            </button>
          ))}
        </div>
      </header>

      <div className="p-6 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            {scenarios.find(s => s.id === activeTab)?.content.map((item, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
