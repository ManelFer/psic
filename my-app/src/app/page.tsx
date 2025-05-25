import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-[#F8F5FF]">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">Dra. Laura Ferreira</h1>
          <p className="text-lg mb-6">Consultas psicológicas especializadas para crianças e adolescentes em um ambiente caloroso e acolhedor</p>
          <div className="flex gap-4">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full">Agende sua consulta</button>
            <button className="border border-purple-700 text-purple-700 px-6 py-2 rounded-full">Mais informações</button>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <div className="relative w-72 h-96 rounded-3xl overflow-hidden">
            <Image
              src="/profile-image.jpg"
              alt="Dra. Laura Ferreira"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="p-8 md:p-16 flex flex-col md:flex-row items-center gap-8 bg-white">
        <div className="relative w-72 h-96 rounded-3xl overflow-hidden">
          <Image
            src="/profile-image-2.jpg"
            alt="Dra. Laura Ferreira"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-3xl"
          />
        </div>
        <div className="max-w-xl">
          <h2 className="text-3xl font-serif mb-4">Dra. Laura Ferreira</h2>
          <p className="mb-4">Quem sou eu?</p>
          <p className="text-gray-700 mb-6">
            Com mais de 15 anos de experiência em psicologia infantil e adolescente,
            dedico o meu dia para entender melhor cada criança e jovem que atendo,
            sempre buscando as melhores práticas clínicas e mantendo uma abordagem
            clínica estruturada por critérios e instrumentos na melhor condução de cada
            caso.
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full">Agende sua consulta</button>
            <button className="text-purple-700 underline">Mais sobre mim</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="p-8 md:p-16 bg-[#F8F5FF]">
        <h2 className="text-center text-2xl mb-8">Um pouco sobre meus atendimentos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl">
            <Image src="/file.svg" alt="Atendimento Individual" width={48} height={48} />
            <h3 className="text-xl font-medium mt-4 mb-2">Atendimento Individual</h3>
            <p className="text-gray-600">Ofereço atendimento personalizado para cada paciente, focando em suas necessidades específicas.</p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <Image src="/window.svg" alt="Online e Presencial" width={48} height={48} />
            <h3 className="text-xl font-medium mt-4 mb-2">Online e Presencial</h3>
            <p className="text-gray-600">Flexibilidade no formato das consultas para melhor atender às suas necessidades.</p>
          </div>
          <div className="bg-white p-6 rounded-xl">
            <Image src="/globe.svg" alt="Suporte Contínuo" width={48} height={48} />
            <h3 className="text-xl font-medium mt-4 mb-2">Suporte Contínuo</h3>
            <p className="text-gray-600">Acompanhamento constante para garantir o progresso e bem-estar dos pacientes.</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="p-8 md:p-16">
        <div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl text-center mb-8">Contact</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-2 border rounded-lg"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full p-2 border rounded-lg"
              />
            </div>
            <div>
              <textarea
                placeholder="Your question or message"
                rows={4}
                className="w-full p-2 border rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
