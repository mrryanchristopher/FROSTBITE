'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Globe } from 'lucide-react';

export default function EmergencyCard() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const content = {
    en: {
      title: 'I AM EXERCISING MY RIGHTS',
      body: [
        'I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.',
        'I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.',
        'I do not give you permission to search any of my belongings based on my 4th Amendment rights.',
        'I choose to exercise my constitutional rights.',
      ],
      footer: 'Please give this card back to me.',
    },
    es: {
      title: 'ESTOY EJERCIENDO MIS DERECHOS',
      body: [
        'No deseo hablar con usted, responder sus preguntas, ni firmar o entregarle ningún documento basado en mis derechos de la 5ta Enmienda bajo la Constitución de los Estados Unidos.',
        'No le doy permiso para entrar a mi hogar basado en mis derechos de la 4ta Enmienda bajo la Constitución de los Estados Unidos a menos que tenga una orden para entrar, firmada por un juez o magistrado con mi nombre en ella que usted deslice por debajo de la puerta.',
        'No le doy permiso para registrar ninguna de mis pertenencias basado en mis derechos de la 4ta Enmienda.',
        'Elijo ejercer mis derechos constitucionales.',
      ],
      footer: 'Por favor devuélvame esta tarjeta.',
    },
  };

  return (
    <div className="flex flex-col h-full bg-red-600 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <AlertTriangle size={120} />
      </div>
      
      <div className="flex justify-between items-center mb-6 z-10">
        <h1 className="text-2xl font-black tracking-tighter uppercase border-b-4 border-white pb-2">
          {language === 'en' ? 'Emergency Card' : 'Tarjeta de Emergencia'}
        </h1>
        <button
          onClick={() => setLanguage(l => (l === 'en' ? 'es' : 'en'))}
          className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors flex items-center gap-2 px-4 font-bold text-sm"
        >
          <Globe size={18} />
          {language === 'en' ? 'ES' : 'EN'}
        </button>
      </div>

      <motion.div
        key={language}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1 flex flex-col justify-center z-10 space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-black leading-tight text-center bg-white text-red-600 p-4 rounded-xl shadow-lg">
          {content[language].title}
        </h2>
        
        <div className="space-y-4 text-lg md:text-xl font-medium leading-relaxed">
          {content[language].body.map((paragraph, idx) => (
            <p key={idx} className="bg-black/10 p-3 rounded-lg border-l-4 border-white/50">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>

      <div className="mt-8 text-center text-sm font-bold opacity-80 uppercase tracking-widest">
        {content[language].footer}
      </div>
    </div>
  );
}
