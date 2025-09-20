import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const WHATSAPP_NUMBER = '5581995116801';

const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export function Contact() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    servico: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { nome, email, telefone } = formData;
    if (!nome.trim() || !email.trim() || !telefone.trim()) {
      alert('Por favor, preencha pelo menos Nome, Email e Telefone.');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um email válido.');
      return false;
    }

    return true;
  };

  const sendEmail = async () => {
    const templateParams = {
      to_email: 'biofixengenhariahospitalar@gmail.com',
      from_name: formData.nome,
      from_email: formData.email,
      phone: formData.telefone,
      service: formData.servico || 'Não especificado',
      message: formData.mensagem || 'Nenhuma mensagem adicional.',
      reply_to: formData.email
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      return true;
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      return false;
    }
  };

  const generateWhatsAppMessage = () => {
    const { nome, email, telefone, servico, mensagem } = formData;
    let message = `Olá! Sou *${nome}*\n\n`;
    message += `Email: ${email}\n`;
    message += `Telefone: ${telefone}\n`;

    if (servico) {
      message += `Serviço: ${servico}\n`;
    }

    if (mensagem) {
      message += `\nMensagem:\n${mensagem}\n`;
    }

    message += `\n*Gostaria de solicitar um orçamento da BIOFIX!*`;
    return message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Enviar email (opcional - pode falhar sem afetar o WhatsApp)
    try {
      await sendEmail();
      setSubmitStatus('success');
    } catch (error) {
      console.log('Email não enviado, mas continuando com WhatsApp...');
    }

    // Abrir WhatsApp com mensagem personalizada
    const whatsappMessage = generateWhatsAppMessage();
    openWhatsApp(whatsappMessage);

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      servico: '',
      mensagem: ''
    });

    setIsSubmitting(false);

    // Mostrar feedback
    setTimeout(() => {
      setSubmitStatus('idle');
    }, 3000);
  };

  return (
    <section id="contato" className="py-12 lg:py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <motion.div
          className="text-center mb-8 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
            <span className="block sm:inline">Entre em </span>
            <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-2">
            Pronto para otimizar a gestão dos seus equipamentos médicos? Fale conosco!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8">Informações da Empresa</h3>

            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <motion.div
                className="flex items-start space-x-1.5 sm:space-x-3 lg:space-x-4 p-1.5 sm:p-3 lg:p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h4 className="font-semibold text-sm sm:text-base lg:text-lg break-words">BIOFIX Engenharia Hospitalar LTDA</h4>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base break-words">CNPJ: 60.953.884/0001-20</p>
                  <p className="text-blue-200 text-xs lg:text-sm mt-1 break-words">Sociedade Empresária Limitada - Porte ME</p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-1.5 sm:space-x-3 lg:space-x-4 p-1.5 sm:p-3 lg:p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Endereço</h4>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base break-words">Rua Projetada 03, S/N</p>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base break-words">Santo Antônio, Carpina - PE</p>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base break-words">CEP: 55.816-675</p>
                </div>
              </motion.div>

              <motion.div
                className="contact-card flex items-start space-x-2 sm:space-x-3 lg:space-x-4 p-2 sm:p-3 lg:p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 overflow-hidden">
                  <h4 className="font-semibold text-sm sm:text-base lg:text-lg">Contato</h4>
                  <p className="text-blue-200 text-xs sm:text-sm lg:text-base break-words">Telefone: (81) 99511-6801</p>
                  <div className="text-blue-200 text-xs lg:text-sm">
                    <div className="block">Email:</div>
                    <div className="break-all overflow-wrap-anywhere word-break-all hyphens-auto">biofixengenhariahospitalar@gmail.com</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-2 sm:p-4 lg:p-8 border border-white/20">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4 lg:mb-6">Solicite um Orçamento</h3>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 lg:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu Nome"
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-teal-400 transition-colors text-sm lg:text-base"
                      required
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Seu Email"
                      className="w-full px-2 py-1.5 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-teal-400 transition-colors text-sm lg:text-base"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="Telefone"
                    className="w-full px-2.5 py-2 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-teal-400 transition-colors text-sm lg:text-base"
                    required
                  />
                </motion.div>

                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <select
                    name="servico"
                    value={formData.servico}
                    onChange={handleInputChange}
                    className="w-full px-2 py-1.5 pr-6 sm:px-3 sm:py-2.5 sm:pr-10 lg:px-4 lg:py-3 lg:pr-12 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal-400 transition-colors appearance-none cursor-pointer backdrop-blur-sm text-sm lg:text-base"
                  >
                    <option value="" className="bg-slate-800 text-white">Serviço de Interesse</option>
                    <option value="manutencao" className="bg-slate-800 text-white">Manutenção de Equipamentos</option>
                    <option value="calibracao" className="bg-slate-800 text-white">Calibração Técnica</option>
                    <option value="gestao" className="bg-slate-800 text-white">Gestão de Equipamentos</option>
                    <option value="treinamento" className="bg-slate-800 text-white">Treinamento</option>
                    <option value="consultoria" className="bg-slate-800 text-white">Consultoria</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-1.5 sm:right-2.5 lg:right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea
                    rows={3}
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva suas necessidades..."
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2.5 lg:px-4 lg:py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-teal-400 transition-colors resize-none text-sm lg:text-base"
                  ></textarea>
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-teal-600 hover:bg-teal-700'
                  } text-white px-3 py-2 sm:px-6 sm:py-3 lg:px-8 lg:py-4 rounded-xl font-semibold text-sm sm:text-base lg:text-lg transition-colors shadow-lg`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting
                    ? 'Enviando...'
                    : submitStatus === 'success'
                      ? '✓ Enviado!'
                      : 'Enviar Orçamento'
                  }
                </motion.button>

                {/* Feedback adicional */}
                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center mt-2"
                  >
                    Formulário enviado! Você será redirecionado para o WhatsApp.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}