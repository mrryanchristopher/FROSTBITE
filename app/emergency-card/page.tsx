'use client';

import EmergencyCard from '@/components/EmergencyCard';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function EmergencyCardPage() {
  return (
    <div className="h-screen bg-slate-900 flex flex-col p-4">
      <div className="flex items-center mb-4">
        <Link href="/" className="text-white/70 hover:text-white p-2">
          <ArrowLeft size={24} />
        </Link>
        <h1 className="text-white font-bold ml-2">Emergency Mode</h1>
      </div>
      <div className="flex-1 pb-8">
        <EmergencyCard />
      </div>
    </div>
  );
}
