'use client';
import Image from "next/image";

export default function About() {
    const about = [
        {
            title: 'Dra. Laura Ferreira',
            description:
                'Com mais de 5 anos de experiência em psicologia infantil e adolescente, dedico-me a criar um ambiente nutritivo, onde as mentes jovens podem florescer. Aos 24 anos, dediquei minha carreira a entender os desafios únicos enfrentados por crianças e adolescentes no mundo complexo de hoje.',
        },
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Imagem à esquerda */}
                <div className="flex justify-center md:justify-start">
                    <Image
                        src="/laura2.png"
                        alt="Foto da Dra. Laura Ferreira"
                        width={320}
                        height={320}
                        className="rounded-2xl  object-cover"
                    />
                </div>

                {/* Texto à direita */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
                        {about[0].title}
                    </h1>
                    <p className="text-sm uppercase tracking-widest text-[#828282] mb-4">
                        Quem sou eu?
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                        {about[0].description}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#contact"
                            className="bg-[#512397] text-white py-3 px-6 rounded-md shadow hover:bg-[#3e1a74] transition duration-300"
                        >
                            Agende sua consulta
                        </a>
                        <a
                            href="#services"
                            className="bg-[#EEEEEE] text-[#512397] py-3 px-6 rounded-md shadow hover:bg-[#e0e0e0] transition duration-300"
                        >
                            Meu Currículo
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
