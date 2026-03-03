'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface MenuItemProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color?: string;
}

export default function MenuItem({ title, description, href, icon, color = 'bg-slate-800' }: MenuItemProps) {
  return (
    <Link href={href} className="block w-full">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${color} text-white p-5 rounded-2xl shadow-lg flex items-center justify-between group relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-4 -translate-y-4">
          {/* Background icon decoration */}
          <div className="scale-150">{icon}</div>
        </div>

        <div className="flex items-center gap-4 z-10">
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight">{title}</h3>
            <p className="text-white/70 text-sm mt-1 font-medium">{description}</p>
          </div>
        </div>
        
        <div className="bg-white/10 p-2 rounded-full z-10 group-hover:bg-white/20 transition-colors">
          <ChevronRight size={20} />
        </div>
      </motion.div>
    </Link>
  );
}
