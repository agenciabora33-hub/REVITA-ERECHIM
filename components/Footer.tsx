import React from 'react';

interface FooterProps {
    onOpenPrivacy: () => void;
    onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-4 flex flex-col items-center text-center">
                <div className="text-white font-serif text-2xl font-bold mb-4 tracking-wide opacity-80">
                    REVITTA
                </div>
                
                <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed">
                    Especialistas em soluções para coberturas residenciais e comerciais. 
                    Segurança e qualidade acima de tudo.
                </p>

                <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-medium">
                    <button onClick={onOpenPrivacy} className="hover:text-white transition duration-200 border-b border-transparent hover:border-white pb-1">
                        Política de Privacidade
                    </button>
                    <button onClick={onOpenTerms} className="hover:text-white transition duration-200 border-b border-transparent hover:border-white pb-1">
                        Termos de Uso
                    </button>
                </div>

                <div className="text-xs text-gray-600 pt-8 border-t border-gray-800 w-full max-w-2xl">
                    <p className="mb-2">CNPJ: 45.192.837/0001-20</p>
                    <p>Endereço: Av. Pedro Pinto de Souza, 671, Centro - Erechim/RS</p>
                    <p className="mt-4">© {new Date().getFullYear()} Revitta. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};