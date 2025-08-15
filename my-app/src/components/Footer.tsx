
import { Clock, Linkedin, Instagram, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#9476C4] to-[#6B5B95] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1 - Sobre */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Dra. Laura Ferreira</h3>
            <p className="text-gray-200 leading-relaxed">
              Criando um espaço seguro para crianças e adolescentes crescerem, se curarem e prosperarem.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/laura-ferreira-271763253"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/psilauraferreira/"
                className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links úteis */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Links úteis</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('inicio')}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-left"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="text-gray-200 hover:text-white transition-colors duration-300 text-left"
              >
                Contato
              </button>
            </nav>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4">Serviços</h4>
            <div className="flex flex-col space-y-2">
              <span className="text-gray-200">Terapia Individual</span>
              <span className="text-gray-200">Terapia Familiar</span>
              <span className="text-gray-200">Aconselhamento para Adolescentes</span>
            </div>
          </div>

          {/* Coluna 4 - Horários */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-4 flex items-center space-x-2">
              <Clock size={20} />
              <span>Horários de Atendimento</span>
            </h4>
            <div className="space-y-2 text-gray-200">
              <div className="flex justify-between">
                <span>Segunda à Quarta:</span>
                <span>10h às 17h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-200 flex items-center justify-center space-x-2">
            <span>© 2024 Dra. Laura Ferreira. Feito com</span>
            <Heart size={16} className="text-[#D4AF37]" />
            <span>para cuidar de quem mais importa.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;