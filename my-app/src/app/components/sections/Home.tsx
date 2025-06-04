import Image from "next/image";

export default function Home() {
  const home = [
    {
      title: 'Dra. Laura Ferreira',
      description:
        'Cuidados psicológicos especializados para crianças e adolescentes em um ambiente caloroso e solidário.',
    },
  ];

  return (
    <section id="home" className="py-20 bg-[#F4F3FB]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto à esquerda */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {home[0].title}
          </h1>
          <p className="text-lg text-gray-600 mb-6">{home[0].description}</p>
          <a href="#contact" className="bg-[#512397] text-white py-4 px-2 rounded-md mr-6 "> Agende sua consulta </a>
          <a href="#services" className="bg-[#DDDDDD] text-[#512397]  py-4 px-2 rounded-md"> Meus atendimentos </a>
        </div>


        <div className="flex justify-center md:justify-end">
          <Image
            src="/laura1.png"
            alt="Psicóloga atendendo criança"
            width={300}
            height={300}
            className="rounded-xl  object-cover"
          />
        </div>
      </div>
    </section>
  );
}
