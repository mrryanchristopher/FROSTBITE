'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Globe, ChevronDown } from 'lucide-react';

type Language = 'en' | 'es' | 'zh' | 'tl' | 'vi' | 'fr';

export default function EmergencyCard({ initialLanguage = 'en' }: { initialLanguage?: Language }) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'zh', name: '中文 (Chinese)' },
    { code: 'tl', name: 'Tagalog' },
    { code: 'vi', name: 'Tiếng Việt' },
    { code: 'fr', name: 'Français' },
  ];

  const content = {
    en: {
      title: 'I AM EXERCISING MY RIGHTS',
      body: [
        'I do not wish to speak with you, answer your questions, or sign or hand you any documents based on my 5th Amendment rights under the United States Constitution.',
        'I do not give you permission to enter my home based on my 4th Amendment rights under the United States Constitution unless you have a warrant to enter, signed by a judge or magistrate with my name on it that you slide under the door.',
        'I do not give you permission to search any of my belongings based on my 4th Amendment rights.',
        'I choose to exercise my constitutional rights.',
      ],
    },
    es: {
      title: 'ESTOY EJERCIENDO MIS DERECHOS',
      body: [
        'No deseo hablar con usted, responder sus preguntas, ni firmar o entregarle ningún documento basado en mis derechos de la 5ta Enmienda bajo la Constitución de los Estados Unidos.',
        'No le doy permiso para entrar a mi hogar basado en mis derechos de la 4ta Enmienda bajo la Constitución de los Estados Unidos a menos que tenga una orden para entrar, firmada por un juez o magistrado con mi nombre en ella que usted deslice por debajo de la puerta.',
        'No le doy permiso para registrar ninguna de mis pertenencias basado en mis derechos de la 4ta Enmienda.',
        'Elijo ejercer mis derechos constitucionales.',
      ],
    },
    zh: {
      title: '我正在行使我的权利',
      body: [
        '根据美国宪法第五修正案赋予我的权利，我不希望与您交谈、回答您的问题，或签署/递交任何文件。',
        '根据美国宪法第四修正案赋予我的权利，我不允许您进入我的家，除非您有法官或治安法官签署的、写有我名字的搜查令，并将其从门缝滑入。',
        '根据第四修正案赋予我的权利，我不允许您搜查我的任何财物。',
        '我选择行使我的宪法权利。',
      ],
    },
    tl: {
      title: 'GINAGAMIT KO ANG AKING MGA KARAPATAN',
      body: [
        'Hindi ko nais na makipag-usap sa inyo, sumagot sa inyong mga tanong, o pumirma o magbigay ng anumang dokumento batay sa aking mga karapatan sa ilalim ng 5th Amendment ng Konstitusyon ng Estados Unidos.',
        'Hindi ko kayo pinahihintulutan na pumasok sa aking tahanan batay sa aking mga karapatan sa ilalim ng 4th Amendment ng Konstitusyon ng Estados Unidos maliban kung mayroon kayong warrant upang pumasok, na nilagdaan ng isang hukom o mahistrado na may pangalan ko rito na idadaan ninyo sa ilalim ng pinto.',
        'Hindi ko kayo pinahihintulutan na halughugin ang alinman sa aking mga gamit batay sa aking mga karapatan sa ilalim ng 4th Amendment.',
        'Pinipili kong gamitin ang aking mga karapatang konstitusyonal.',
      ],
    },
    vi: {
      title: 'TÔI ĐANG THỰC HIỆN QUYỀN CỦA MÌNH',
      body: [
        'Tôi không muốn nói chuyện với quý vị, trả lời các câu hỏi của quý vị, hoặc ký hay đưa cho quý vị bất kỳ tài liệu nào dựa trên quyền Tu chính án thứ 5 của tôi theo Hiến pháp Hoa Kỳ.',
        'Tôi không cho phép quý vị vào nhà tôi dựa trên quyền Tu chính án thứ 4 của tôi theo Hiến pháp Hoa Kỳ trừ khi quý vị có lệnh khám xét để vào, được ký bởi thẩm phán hoặc quan tòa có tên tôi trên đó mà quý vị trượt qua khe cửa.',
        'Tôi không cho phép quý vị khám xét bất kỳ đồ đạc nào của tôi dựa trên quyền Tu chính án thứ 4 của tôi.',
        'Tôi chọn thực hiện các quyền hiến pháp của mình.',
      ],
    },
    fr: {
      title: 'J\'EXERCE MES DROITS',
      body: [
        'Je ne souhaite pas vous parler, répondre à vos questions, ni signer ou vous remettre de documents, en vertu de mes droits du 5ème amendement de la Constitution des États-Unis.',
        'Je ne vous donne pas la permission d\'entrer chez moi, en vertu de mes droits du 4ème amendement de la Constitution des États-Unis, à moins que vous n\'ayez un mandat d\'entrée signé par un juge ou un magistrat avec mon nom dessus, que vous glisserez sous la porte.',
        'Je ne vous donne pas la permission de fouiller mes affaires, en vertu de mes droits du 4ème amendement.',
        'Je choisis d\'exercer mes droits constitutionnels.',
      ],
    },
  };

  return (
    <div className="flex flex-col h-full bg-red-600 text-white p-6 rounded-3xl shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-20">
        <AlertTriangle size={120} />
      </div>
      
      <div className="flex justify-between items-center mb-6 z-20 relative">
        <h1 className="text-2xl font-black tracking-tighter uppercase border-b-4 border-white pb-2">
          {language === 'en' ? 'Emergency Card' : 'Tarjeta de Emergencia'}
        </h1>
        
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors flex items-center gap-2 px-4 font-bold text-sm"
          >
            <Globe size={18} />
            <span className="uppercase">{language}</span>
            <ChevronDown size={14} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden text-slate-900 z-30">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 text-sm font-bold hover:bg-slate-100 transition-colors ${
                    language === lang.code ? 'bg-blue-50 text-blue-600' : ''
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
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
    </div>
  );
}
