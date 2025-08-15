import { Calendar, Heart } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="inicio"
      className="pt-20 pb-16 bg-gradient-to-br from-[#F4F3FB] via-white to-[#DCD4F0] min-h-screen flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#9476C4] mb-6 leading-tight">
                Dra. Laura Ferreira
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                Cuidados psicológicos especializados para adolescentes e adultos
                em um ambiente acolhedor, empático e solidário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] text-[#9476C4] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar size={24} />
                <span>Agende sua consulta</span>
              </button>

              <button
                onClick={() => scrollToSection('servicos')}
                className="flex items-center justify-center space-x-3 border-2 border-[#9476C4] text-[#9476C4] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#9476C4] hover:text-white transition-all duration-300"
              >
                <Heart size={24} />
                <span>Meus atendimentos</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] bg-gradient-to-br from-[#DCD4F0] to-[#9476C4] rounded-3xl shadow-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="w-full max-h-[800px] bg-gradient-to-br from-[#F4F3FB] to-[#DCD4F0] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
                <img
                  src="/home1.JPG"
                  alt="imagem de Dra Laura"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4AF37] rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#9476C4] rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
