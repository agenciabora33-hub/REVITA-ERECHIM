import React from 'react';
import { Icons, WHATSAPP_LINK } from '../constants.tsx';

const BenefitItem: React.FC<{ title: string; description: string; Icon: React.FC }> = ({ title, description, Icon }) => (
    <li className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="mr-5 mt-1 shrink-0 p-2 bg-green-50 rounded-lg">
            <Icon />
        </div>
        <div>
            <h4 className="font-bold text-lg text-gray-900 mb-1">{title}</h4>
            <p className="text-gray-600 text-sm md:text-base">{description}</p>
        </div>
    </li>
);

export const Benefits: React.FC = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="container mx-auto max-w-5xl">
                <div className="text-center mb-12">
                     <h2 className="text-3xl md:text-4xl font-serif font-bold text-revittaBlue mb-4">
                        Por que escolher a Revitta?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Entendemos que um telhado danificado é uma emergência familiar. Nosso processo é desenhado para resolver seu problema com rapidez e segurança.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <ul className="space-y-6">
                        <BenefitItem 
                            Icon={Icons.Bolt}
                            title="Atendimento e Início Imediato"
                            description="Nossa prioridade é a urgência. Equipes prontas para avaliar e iniciar o reparo o mais rápido possível no local."
                        />
                         <BenefitItem 
                            Icon={Icons.Shield}
                            title="Auxílio com Seguro"
                            description="Fornecemos laudos técnicos detalhados e notas fiscais para agilizar o reembolso do seu seguro residencial."
                        />
                         <BenefitItem 
                            Icon={Icons.HardHat}
                            title="Mão de Obra Especializada"
                            description="Profissionais experientes em altura e diversos tipos de telhas, garantindo segurança total na execução."
                        />
                         <BenefitItem 
                            Icon={Icons.Calendar}
                            title="90 Dias de Garantia"
                            description="Oferecemos garantia legal de 3 meses no serviço de reparo realizado, assegurando sua tranquilidade."
                        />
                    </ul>

                    {/* CTA Box in Benefits */}
                    <div className="bg-revittaBlue rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-whatsapp opacity-10 rounded-full blur-3xl"></div>
                        
                        <h3 className="text-2xl font-serif font-bold mb-4 relative z-10">Precisa de um orçamento sem compromisso?</h3>
                        <p className="mb-8 text-indigo-100 relative z-10">Envie uma foto do seu telhado ou descreva o problema pelo WhatsApp.</p>
                        
                        <a href={WHATSAPP_LINK} 
                           target="_blank"
                           rel="noopener noreferrer"
                           className="inline-block w-full bg-whatsapp hover:bg-whatsappHover text-white font-bold py-4 px-8 rounded-lg transition duration-300 shadow-lg relative z-10">
                            Falar com Especialista Agora
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};