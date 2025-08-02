import React, { useState } from 'react';
import { Send, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Mensagem enviada com sucesso! Retornarei em breve.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Olá, Dra. Laura! Gostaria de agendar uma consulta.');
    window.open(`https://wa.me/557991953752?text=${message}`, '_blank');
  };

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#9476C4] mb-6">
            Fale comigo
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Estou aqui para ajudar. Entre em contato e vamos conversar sobre como posso apoiar você e sua família.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#9476C4] mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#9476C4] to-[#DCD4F0] p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">(79) 9 9195-3752</p>
                    <p className="text-gray-600">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] p-3 rounded-full">
                    <Mail className="text-[#9476C4]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">psilauraferreira@gmail.com</p>
                    <p className="text-gray-600">Respondo em até 24h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-[#9476C4] to-[#DCD4F0] p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Aracaju - SE</p>
                    <p className="text-gray-600">Atendimentos online</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle size={24} />
              <span>Agende sua consulta pelo WhatsApp</span>
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#F4F3FB] to-[#DCD4F0] p-8 rounded-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9476C4] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9476C4] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9476C4] focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-[#D4AF37] to-[#F4E17B] text-[#9476C4] px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Send size={20} />
                <span>Enviar mensagem</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;