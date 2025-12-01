import React from 'react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-revittaBlue text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group">
        <div className="text-4xl mb-6 bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:bg-revittaBlue group-hover:text-white transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-4 font-serif text-gray-900">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
);

export const Services: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <span className="text-revittaBlue font-bold tracking-widest uppercase text-sm mb-2 block">O que fazemos</span>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-revittaBlue">Nossas Soluções para Telhados</h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="Instalação Completa" 
                        description="Execução técnica de telhados cerâmicos, metálicos (aluzinco) e fibrocimento para novas construções com estrutura reforçada."
                        icon="🏗️"
                    />
                    <ServiceCard 
                        title="Reparo Emergencial" 
                        description="Atendimento prioritário para danos causados por granizo e temporais. Estancamos vazamentos e substituímos telhas quebradas."
                        icon="🚨"
                    />
                    <ServiceCard 
                        title="Reformas & Estrutura" 
                        description="Revitalização total do telhado, alinhamento de estrutura, troca de ripas e caibros, e melhorias no isolamento térmico."
                        icon="🛠️"
                    />
                </div>
            </div>
        </section>
    );
};