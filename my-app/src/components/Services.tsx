
import { User, Users, Heart, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Terapia Individual",
      description: "Sessões voltadas para lidar com questões emocionais, comportamentais e de desenvolvimento, sempre em um ambiente seguro e acolhedor.",
      gradient: "from-[#9476C4] to-[#B899E0]"
    },
    {
      icon: Users,
      title: "Terapia Familiar",
      description: "Apoio à dinâmica familiar, comunicação e vínculo entre pais e filhos. Ideal para momentos de crise, transição ou desafios recorrentes.",
      gradient: "from-[#D4AF37] to-[#F4E17B]"
    },
    {
      icon: Heart,
      title: "Aconselhamento para Adolescentes",
      description: "Espaço de escuta e acolhimento para jovens que buscam entender suas emoções, fortalecer a autoestima e lidar com os desafios da adolescência.",
      gradient: "from-[#9476C4] to-[#DCD4F0]"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-[#F4F3FB] to-[#DCD4F0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9476C4] mb-6">
            Um pouco sobre os meus atendimentos
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Ofereço atendimentos psicológicos personalizados voltados ao público infantojuvenil, focados nas necessidades emocionais, comportamentais e familiares que surgem em diferentes fases do desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.gradient} mb-6`}>
                  <Icon className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#9476C4] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button
                  onClick={() => scrollToSection('contato')}
                  className="group flex items-center space-x-2 text-[#9476C4] font-semibold hover:text-[#D4AF37] transition-colors duration-300"
                >
                  <span>Estou interessado(a)</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;