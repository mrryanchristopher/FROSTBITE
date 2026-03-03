'use client';

import { ArrowLeft, Shield, Map, FileText, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function IceInfoPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <header className="bg-slate-900 text-white p-6 pb-12 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-800 to-slate-950 z-0" />
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white mb-4 transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back
          </Link>
          <h1 className="text-3xl font-black tracking-tighter">WHO IS ICE?</h1>
          <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Understanding the Agency</p>
        </div>
      </header>

      <div className="px-6 -mt-8 relative z-20 space-y-6">
        
        {/* Section 1: Who They Are */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-100 p-3 rounded-xl text-blue-600">
              <Shield size={24} />
            </div>
            <h2 className="text-xl font-bold">The Agency</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            ICE (Immigration and Customs Enforcement) is a federal law enforcement agency under the Department of Homeland Security. Their primary mission is to enforce federal laws governing border control, customs, trade, and immigration.
          </p>
          <div className="mt-4 bg-slate-50 p-4 rounded-xl border-l-4 border-blue-500">
            <h3 className="font-bold text-sm uppercase text-slate-500 mb-1">Key Divisions</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>ERO:</strong> Enforcement and Removal Operations (Deportation)</li>
              <li><strong>HSI:</strong> Homeland Security Investigations (Criminal/Trafficking)</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Jurisdiction */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
              <Map size={24} />
            </div>
            <h2 className="text-xl font-bold">Jurisdiction</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            ICE operates nationwide, but they have specific &quot;extended powers&quot; within 100 miles of any U.S. border (including coastal borders).
          </p>
          <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
            <h3 className="font-bold text-orange-800 mb-2">The 100-Mile Zone</h3>
            <p className="text-sm text-orange-700">
              In this zone, Border Patrol can stop vehicles to ask about citizenship without a warrant, but they still need &quot;reasonable suspicion&quot; to pull you over.
            </p>
          </div>
        </section>

        {/* Section 3: Enforcement Protocol */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-3 rounded-xl text-red-600">
              <FileText size={24} />
            </div>
            <h2 className="text-xl font-bold">Warrants & Protocol</h2>
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            ICE agents often use &quot;administrative warrants&quot; (Form I-200 or I-205). These are <strong>NOT</strong> signed by a judge.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border border-red-100">
              <AlertTriangle className="text-red-500 shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-red-900 text-sm">Administrative Warrant</h4>
                <p className="text-xs text-red-700 mt-1">Does NOT give them authority to enter your home without consent.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-100">
              <FileText className="text-green-500 shrink-0 mt-1" size={18} />
              <div>
                <h4 className="font-bold text-green-900 text-sm">Judicial Warrant</h4>
                <p className="text-xs text-green-700 mt-1">Signed by a judge. Gives them authority to enter. Always ask to see it through a window or slid under the door.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Tactics & Ruses */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-purple-100 p-3 rounded-xl text-purple-600">
              <AlertTriangle size={24} />
            </div>
            <h2 className="text-xl font-bold">Tactics & Ruses</h2>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              <strong>ICE agents are allowed to lie.</strong> They may use &quot;ruses&quot; to trick you into opening the door or revealing your location.
            </p>
            <ul className="list-disc list-inside space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <li><strong>The &quot;Police&quot; Trick:</strong> They may identify themselves simply as &quot;police&quot; or &quot;officers&quot; without specifying &quot;immigration.&quot;</li>
              <li><strong>The &quot;Probation&quot; Trick:</strong> They may claim they are looking for a suspect or doing a probation check.</li>
              <li><strong>The &quot;Car Accident&quot; Trick:</strong> They may claim a family member was in an accident to get you to come outside.</li>
            </ul>
            <p className="text-sm font-bold text-slate-800">
              Safety Rule: Never open the door unless you see a judicial warrant slid under it. Talk through the closed door.
            </p>
          </div>
        </section>

        {/* Section 5: Collateral Arrests */}
        <section className="bg-white p-6 rounded-3xl shadow-lg border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-slate-100 p-3 rounded-xl text-slate-600">
              <Shield size={24} />
            </div>
            <h2 className="text-xl font-bold">Collateral Arrests</h2>
          </div>
          <p className="text-slate-600 leading-relaxed">
            ICE may go to a location looking for one specific person, but they can question and arrest <strong>anyone else</strong> they encounter if they have &quot;probable cause&quot; to believe that person is undocumented.
          </p>
          <div className="mt-3 bg-red-50 p-3 rounded-lg border border-red-100 text-red-800 text-sm font-medium">
            This is why remaining silent and not carrying foreign documents (like a passport from another country) in public is critical.
          </div>
        </section>

      </div>
    </div>
  );
}
