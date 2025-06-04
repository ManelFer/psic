'use client';

import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className='fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          <div className='flex items-center'>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
            <Link href="/" className='text-2xl font-bold text-gray-700 ml-2'>
              Dra Laura Ferreira
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex space-x-8'>
            <a href="#home" onClick={(e) => handleScroll(e, 'home')} className='text-gray-600 hover:text-black hover:scale-110 duration-300 cursor-pointer'>
              Inicio
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className='text-gray-600 hover:text-black hover:scale-110 duration-300 cursor-pointer'>
              Quem sou eu
            </a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className='text-gray-600 hover:text-black hover:scale-110 duration-300 cursor-pointer'>
              Serviços
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="text-white bg-black px-4 py-2 rounded-lg hover:text-white hover:scale-110  transition-all duration-300 cursor-pointer inline-block"
            >
              Contato
            </a>

          </nav>

          {/* Mobile menu button */}
          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className='h-6 w-6 text-gray-600' />
          </button>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className='md:hidden py-4'>
              <div className='flex flex-col space-y-4'>
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className='text-gray-600 hover:text-primary cursor-pointer'>
                  Inicio
                </a>
                <a href="#about" onClick={(e) => handleScroll(e, 'about')} className='text-gray-600 hover:text-primary cursor-pointer'>
                  Quem sou eu
                </a>
                <a href="#services" onClick={(e) => handleScroll(e, 'services')} className='text-gray-600 hover:text-primary cursor-pointer'>
                  Serviços
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, 'contact')}
                  className="text-white bg-black px-4 py-2 rounded-lg hover:text-white hover:scale-110  transition-all duration-300 cursor-pointer inline-block"
                >
                  Contato
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}