import React, { useState, useEffect } from 'react';
import { WHATSAPP_LINK } from '../constants.tsx';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-revittaBlue/95 backdrop-blur-sm shadow-md py-3' : 'bg-revittaBlue py-5'}`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-white font-serif text-2xl md:text-3xl tracking-wide font-bold flex items-center gap-2">
                   <span className="text-yellow-400">✦</span> REVITTA
                </div>
                
                {/* Desktop CTA */}
                <a href={WHATSAPP_LINK} 
                   target="_blank"
                   rel="noopener noreferrer"
                   className="hidden md:flex items-center gap-2 bg-whatsapp hover:bg-whatsappHover text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md transform hover:scale-105">
                    <span>(54) 99917-5763</span>
                </a>
            </div>
        </header>
    );
};