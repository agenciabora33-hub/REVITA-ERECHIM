import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Footer } from './components/Footer';
import { Modal } from './components/Modal';
import { WHATSAPP_LINK, Icons } from './constants.tsx';

const App: React.FC = () => {
    const [isPrivacyOpen, setPrivacyOpen] = useState(false);
    const [isTermsOpen, setTermsOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gray-50 selection:bg-revittaBlue selection:text-white">
            <Header />
            
            <main className="flex-grow">
                <Hero />
                <Services />
                <Benefits />
            </main>

            <Footer 
                onOpenPrivacy={() => setPrivacyOpen(true)}
                onOpenTerms={() => setTermsOpen(true)}
            />

            {/* Sticky Mobile/Desktop WhatsApp Button */}
            <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 bg-whatsapp hover:bg-whatsappHover text-white p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 flex items-center justify-center group"
                aria-label="Fale conosco no WhatsApp"
            >
                <Icons.WhatsApp />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-bold text-sm">
                    Orçamento Rápido
                </span>
            </a>

            {/* Modals */}
            <Modal 
                isOpen={isPrivacyOpen} 
                onClose={() => setPrivacyOpen(false)} 
                title="Política de Privacidade"
            >
                <p className="mb-4">
                    A Revitta respeita a sua privacidade e está comprometida em proteger os dados pessoais que você compartilha conosco. Esta política descreve como coletamos e usamos suas informações.
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">1. Coleta de Dados</h3>
                <p className="mb-4">
                    Coletamos apenas as informações estritamente necessárias para o contato comercial, especificamente seu número de telefone/WhatsApp ao clicar em nossos botões de contato. Não armazenamos cookies de rastreamento invasivos.
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">2. Uso das Informações</h3>
                <p className="mb-4">
                    Seus dados são utilizados exclusivamente para:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Fornecer o orçamento solicitado de serviços de telhado.</li>
                        <li>Agendar visitas técnicas.</li>
                        <li>Enviar notas fiscais ou laudos solicitados.</li>
                    </ul>
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">3. Compartilhamento</h3>
                <p>
                    Não vendemos, alugamos ou compartilhamos seus dados com terceiros para fins de marketing. Seus dados podem ser compartilhados apenas com órgãos fiscais conforme exigido por lei para emissão de notas.
                </p>
            </Modal>

            <Modal 
                isOpen={isTermsOpen} 
                onClose={() => setTermsOpen(false)} 
                title="Termos de Uso"
            >
                <p className="mb-4">
                    Bem-vindo ao site da Revitta. Ao utilizar nossos canais de contato, você concorda com os termos abaixo.
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">1. Serviços</h3>
                <p className="mb-4">
                    A Revitta presta serviços de manutenção, instalação e reforma de telhados na região de Erechim/RS. Os orçamentos fornecidos via WhatsApp são estimativas iniciais e podem requerer visita técnica para confirmação do valor final.
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">2. Garantia</h3>
                <p className="mb-4">
                    A garantia de 90 dias (três meses) aplica-se exclusivamente à mão de obra dos serviços de reparo executados e pagos, conforme Código de Defesa do Consumidor. A garantia não cobre danos decorrentes de novos eventos climáticos extremos (vendavais, ciclones) que excedam a capacidade técnica da estrutura original.
                </p>
                <h3 className="font-bold text-revittaBlue mt-4 mb-2">3. Responsabilidade</h3>
                <p>
                    A Revitta se compromete a utilizar materiais de qualidade e mão de obra qualificada. Não nos responsabilizamos por defeitos pré-existentes na estrutura do imóvel que não façam parte do escopo contratado.
                </p>
            </Modal>
        </div>
    );
};

export default App;