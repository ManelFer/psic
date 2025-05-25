export default function Footer() {
  return (
    <footer className="bg-[#F8F5FF] p-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-4">Dra. Laura Ferreira</h3>
          <p className="text-sm text-gray-600">Cuidando do seu bem-estar psicológico com profissionalismo e dedicação.</p>
        </div>
        <div>
          <h4 className="font-medium mb-4">Links rápidos</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-700">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Services</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Serviços</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Psicologia Infantil</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Psicologia do Adolescente</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-700">Consultas Online</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-4">Horário de atendimento</h4>
          <p className="text-sm text-gray-600 mb-2">Seg - Sex: 8h - 18h</p>
          <p className="text-sm text-gray-600">Sábado: 9h - 14h</p>
          <p className="text-sm text-gray-600">Domingo: Fechado</p>
        </div>
      </div>
    </footer>
  )
}