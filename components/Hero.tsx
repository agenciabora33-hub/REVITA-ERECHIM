import React from 'react';
import { WHATSAPP_LINK, Icons } from '../constants.tsx';

export const Hero: React.FC = () => {
    return (
        <section className="relative bg-revittaBlue text-white pt-32 pb-20 md:pt-40 md:pb-32 px-4 text-center overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-revittaBlue to-revittaBlue"></div>

            <div className="relative max-w-4xl mx-auto z-10 flex flex-col items-center">
                
                {/* Urgency Badge */}
                <div className="inline-flex items-center gap-2 bg-red-600 text-white font-bold py-2 px-4 md:py-3 md:px-6 mb-8 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.7)] animate-pulse-fast text-sm md:text-xl lg:text-2xl uppercase tracking-wider">
                   <span>🚨</span> 
                   <span>Atendimento Imediato em Erechim!</span>
                </div>

                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
                    Telhado Danificado Pelo Granizo?
                    <br className="hidden md:block" />
                    <span className="text-yellow-400 block mt-2">Nós Resolvemos Agora.</span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    Não espere a próxima chuva. Somos especialistas em reparos emergenciais, reformas e instalação de telhados pós-desastre.
                </p>
                
                {/* Main CTA */}
                <div className="flex flex-col items-center w-full">
                    <a href={WHATSAPP_LINK} 
                       target="_blank"
                       rel="noopener noreferrer"
                       className="group bg-whatsapp hover:bg-whatsappHover text-white text-lg md:text-xl font-bold py-4 px-8 md:px-12 rounded-lg shadow-xl transform hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3 w-full md:w-auto">
                       <div className="p-1 bg-white/20 rounded-full">
                            <Icons.WhatsApp />
                       </div>
                       <span>SOLICITAR ORÇAMENTO URGENTE</span>
                    </a>
                </div>
            </div>
        </section>
    );
};