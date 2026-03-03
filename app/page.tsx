'use client';

import { motion } from 'framer-motion';
import { Shield, Info, AlertTriangle, Phone, FileText, Lock, Eye, Home as HomeIcon } from 'lucide-react';
import MenuItem from '@/components/MenuItem';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 z-0" />
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-black tracking-tighter">FROSTBITE</h1>
              <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Your Rights on ICE</p>
            </div>
            <div className="bg-blue-500/20 p-2 rounded-full border border-blue-500/30">
              <Shield className="text-blue-400" size={24} />
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-2xl p-5 shadow-lg border border-blue-400/30">
            <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Info size={18} /> Quick Tip
            </h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              You have the right to remain silent. If you are stopped by ICE, you do not have to answer questions about where you were born or how you entered the U.S.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-6 -mt-8 relative z-20 space-y-6">
        
        {/* Safety Warning */}
        <div className="bg-yellow-500 text-slate-900 p-4 rounded-2xl shadow-lg border-2 border-yellow-400 flex items-start gap-3">
          <AlertTriangle className="shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-black uppercase text-sm mb-1">Safety First</h3>
            <p className="text-sm font-medium leading-tight">
              Your safety is the priority. Do not physically resist, run, or lie. Use this app to assert your rights calmly.
            </p>
          </div>
        </div>

        {/* Language Selector */}
        <div className="bg-white p-4 rounded-3xl shadow-lg border border-slate-100">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3 text-center">Select Language</h3>
          <div className="grid grid-cols-3 gap-2">
            {[
              { code: 'en', label: 'English' },
              { code: 'es', label: 'Español' },
              { code: 'zh', label: '中文' },
              { code: 'tl', label: 'Tagalog' },
              { code: 'vi', label: 'Tiếng Việt' },
              { code: 'fr', label: 'Français' },
            ].map((lang) => (
              <Link 
                key={lang.code}
                href={`/emergency-card?lang=${lang.code}`}
                className="bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 text-slate-700 hover:text-blue-600 rounded-xl p-2 text-center text-sm font-bold transition-colors"
              >
                {lang.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Emergency Action */}
        <Link href="/emergency-card" className="block">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 text-white p-6 rounded-3xl shadow-xl flex items-center justify-between border-4 border-white/10"
          >
            <div>
              <h2 className="text-2xl font-black uppercase">Emergency Card</h2>
              <p className="text-red-100 font-medium mt-1">Show this during an encounter</p>
            </div>
            <div className="bg-white/20 p-4 rounded-full animate-pulse">
              <AlertTriangle size={32} />
            </div>
          </motion.div>
        </Link>

        <div className="pt-4 pb-2">
          <h3 className="text-slate-400 text-xs font-bold uppercase tracking-widest ml-2">Knowledge Base</h3>
        </div>

        <MenuItem 
          title="Who is ICE?" 
          description="Jurisdiction, roles, and protocols"
          href="/ice-info" 
          icon={<Shield size={24} />}
          color="bg-slate-800"
        />

        <MenuItem 
          title="Your Rights" 
          description="At home, in public, or in custody"
          href="/rights" 
          icon={<Lock size={24} />}
          color="bg-slate-700"
        />

        <MenuItem 
          title="Myths vs Facts" 
          description="Common misconceptions explained"
          href="/myths" 
          icon={<Eye size={24} />}
          color="bg-slate-600"
        />

        <MenuItem 
          title="Resources" 
          description="Legal aid, hotlines, and support"
          href="/resources" 
          icon={<Phone size={24} />}
          color="bg-slate-800"
        />

        <div className="text-center text-slate-400 text-xs mt-8 pb-8 space-y-4">
          <p>Disclaimer: This app provides general information and is not legal advice. Consult with a qualified attorney for legal advice.</p>
          
          <div className="pt-4 border-t border-slate-200/50">
            <p className="mb-2">
              Frostbite created and owned by{' '}
              <a 
                href="https://mediamultitool.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline font-bold"
              >
                Media Multi-Tool
              </a>
            </p>
            
            <a 
              href="https://buymeacoffee.com/mediamultitool" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFDD00] text-black px-4 py-2 rounded-full font-bold text-sm hover:bg-[#FFDD00]/90 transition-colors shadow-sm"
            >
              <span>☕</span> Buy Me A Coffee
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
