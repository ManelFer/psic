import { Award, Calendar } from 'lucide-react';

const About = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-full max-h-[800px] bg-gradient-to-br from-[#F4F3FB] to-[#DCD4F0] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center">
              <img
                src="/perfil2.jpg" 
                alt="imagem de Dra Laura"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Stats card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-2xl">
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-[#9476C4] to-[#DCD4F0] p-3 rounded-full">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#9476C4]">6+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#9476C4] mb-6">
                Quem sou eu?
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Com mais de 6 anos de experiência em psicologia infantil e jovens adolescentes, dedico minha carreira a criar um espaço seguro e nutritivo onde as mentes jovens possam se desenvolver e florescer.
                </p>
                <p>
                  Ao longo da minha trajetória, tenho me dedicado a compreender os desafios únicos enfrentados por crianças e adolescentes no mundo contemporâneo.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] text-[#9476C4] px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Calendar size={20} />
                <span>Agende sua consulta</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
