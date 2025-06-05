import { FaUserAlt, FaChalkboardTeacher } from 'react-icons/fa';

export default function Service() {
    const services = [
        {
            title: 'Terapia individual',
            description:
                'Sessões individuais adaptadas para lidar com preocupações emocionais, comportamentais ou de desenvolvimento específicas em um ambiente seguro e solidário.',
            icon: <FaUserAlt size={28} className="text-[#512397]" />,
        },
        {
            title: 'Palestras',
            description:
                'Palestras sobre temas relevantes para crianças e adolescentes, promovendo uma compreensão mais profunda e significativa sobre os assuntos tratados.',
            icon: <FaChalkboardTeacher size={28} className="text-[#512397]" />,
        },
    ];

    return (
        <section id="service" className="py-20 bg-[#F4F3FB]">
            <div className="max-w-3xl mx-auto text-center px-4 mb-16">
                <p className="text-sm uppercase tracking-widest text-[#828282] mb-2">Serviços</p>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
                    Um pouco sobre os meus atendimentos
                </h1>
                <p className="text-md text-gray-600 leading-relaxed">
                    Ofereço serviços psicológicos personalizados projetados para apoiar crianças e adolescentes
                    através de seus desafios únicos e estágios de desenvolvimento.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {services.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-[#EDE9F7] p-3 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed mb-6">{item.description}</p>
                        <a href="#" className="text-[#512397] hover:scale-110 duration-300 ">Estou interessado</a>
                    </div>
                ))}
            </div>
        </section>
    );
}
