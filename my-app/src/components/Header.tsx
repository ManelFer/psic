import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#9476C4]">
            Dra. Laura Ferreira
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300"
            >
              Contato
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('contato')}
            className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] text-[#9476C4] px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            <Phone size={18} />
            <span>Contato</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[#9476C4]"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300 text-left"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300 text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300 text-left"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-700 hover:text-[#9476C4] transition-colors duration-300 text-left"
              >
                Contato
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] text-[#9476C4] px-6 py-2 rounded-full font-semibold w-fit"
              >
                <Phone size={18} />
                <span>Contato</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;