'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full bg-black py-4 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-12 px-4">
        {/* Logos a la izquierda */}
        <div className="flex items-center space-x-6">
          {/* Logo 100 BARES */}
          <div className="flex items-center gap-2 mt-4">
            <Image 
              src="/images/100bares.png" 
              alt="100 Bares" 
              width={88} 
              height={28} 
              className="mb-1 w-[70px] md:w-[88px]" 
            />
            <Image 
              src="/images/politeama.png" 
              alt="Politeama" 
              width={24} 
              height={28} 
              className="mb-2 w-[20px] md:w-[24px]" 
            />
          </div>          
        </div>

        {/* Botón menú hamburguesa */}
        <button 
          className="md:hidden text-white p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <div className="w-6 h-5 relative">
            <span 
              className={`
                absolute top-0 left-0 w-full h-0.5 bg-white 
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'rotate-45 translate-y-2' : 'rotate-0 translate-y-0'}
              `}
            />
            <span 
              className={`
                absolute top-1/2 left-0 w-full h-0.5 bg-white 
                transform -translate-y-1/2 transition-all duration-300 ease-in-out
                ${isMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'}
              `}
            />
            <span 
              className={`
                absolute bottom-0 left-0 w-full h-0.5 bg-white 
                transform transition-all duration-300 ease-in-out
                ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 translate-y-0'}
              `}
            />
          </div>
        </button>

        {/* Overlay para el menú móvil */}
        <div 
          className={`
            fixed inset-0 bg-black bg-opacity-50 
            transition-opacity duration-300 ease-in-out
            md:hidden
            ${isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'}
          `}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menú de navegación */}
        <nav className={`
          fixed md:relative
          top-0 md:top-auto
          right-0 md:right-auto
          h-screen md:h-auto
          w-full md:w-auto
          bg-black md:bg-transparent
          pt-20 px-8 md:pt-0 md:px-0
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          md:flex md:items-center md:space-x-8
          flex flex-col md:flex-row
          space-y-6 md:space-y-0
          z-40
          shadow-lg md:shadow-none
        `}>
          <Link 
            href="#" 
            className="menu-link text-white hover:text-gray-300 text-xl md:text-base font-medium border-b border-gray-800 md:border-none pb-4 md:pb-0 w-full md:w-auto text-center md:text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre 100 Bares
          </Link>
          <Link 
            href="#" 
            className="menu-link text-white hover:text-gray-300 text-xl md:text-base font-medium border-b border-gray-800 md:border-none pb-4 md:pb-0 w-full md:w-auto text-center md:text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            Programa
          </Link>
          <Link 
            href="#" 
            className="menu-link text-white hover:text-gray-300 text-xl md:text-base font-medium border-b border-gray-800 md:border-none pb-4 md:pb-0 w-full md:w-auto text-center md:text-left"
            onClick={() => setIsMenuOpen(false)}
          >
            Membresías
          </Link>
        </nav>
      </div>
    </header>
  );
} 