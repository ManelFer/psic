import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F3FB] text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Coluna 1 - Logo e descrição */}
          <div>
            <h3 className="text-2xl font-bold font-serif mb-4">Dra. Laura Ferreira</h3>
            <p className="text-gray-500 mb-4">
              Criando um espaço seguro para crianças e adolescentes crescerem, curarem e prosperarem.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-700 transition-transform transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-transform transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Links rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links rápidos</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#home" className="hover:text-black">Inicio</a></li>
              <li><a href="#about" className="hover:text-black">Quem sou eu</a></li>
              <li><a href="#services" className="hover:text-black">Serviços</a></li>
              <li><a href="#contact" className="hover:text-black">Contato</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Terapia individual</li>
              <li>Terapia familiar</li>
              <li>Aconselhamento adolescente</li>
            </ul>
          </div>

          {/* Coluna 4 - Horário */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horário de expediente</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Segunda - sexta-feira: 9h às 19h</li>
              <li>Sábado: 10h - 16h</li>
              <li className="text-red-500"><strong>Domingo: fechado</strong></li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="mt-10 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()}  <a href="https://www.linkedin.com/in/manoel-mato/">DEV Manoel. Todos os direitos reservados.</a> </p>

        </div>
      </div>
    </footer>
  );
}
