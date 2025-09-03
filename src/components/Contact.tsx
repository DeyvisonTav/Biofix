import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Pronto para otimizar a gestão dos seus equipamentos médicos? Fale conosco!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Informações da Empresa</h3>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">BIOFIX Engenharia Hospitalar LTDA</h4>
                  <p className="text-blue-200">CNPJ: 60.953.884/0001-20</p>
                  <p className="text-blue-200 text-sm mt-1">Sociedade Empresária Limitada - Porte ME</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Endereço</h4>
                  <p className="text-blue-200">Rua Projetada 03, S/N</p>
                  <p className="text-blue-200">Santo Antônio, Carpina - PE</p>
                  <p className="text-blue-200">CEP: 55.816-675</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Contato</h4>
                  <p className="text-blue-200">Telefone: (81) 3656-1030</p>
                  <p className="text-blue-200">Email: atendimento@inoveecontabilidade.com</p>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input 
                      type="text" 
                      placeholder="Seu Nome"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <input 
                      type="email" 
                      placeholder="Seu Email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
                    />
                  </motion.div>
                </div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <input 
                    type="tel" 
                    placeholder="Telefone"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                </motion.div>
                
                <motion.div className="relative" whileFocus={{ scale: 1.02 }}>
                  <select className="w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-teal-400 transition-colors appearance-none cursor-pointer backdrop-blur-sm">
                    <option value="" className="bg-slate-800 text-white">Serviço de Interesse</option>
                    <option value="manutencao" className="bg-slate-800 text-white">Manutenção de Equipamentos</option>
                    <option value="calibracao" className="bg-slate-800 text-white">Calibração Técnica</option>
                    <option value="gestao" className="bg-slate-800 text-white">Gestão de Equipamentos</option>
                    <option value="treinamento" className="bg-slate-800 text-white">Treinamento</option>
                    <option value="consultoria" className="bg-slate-800 text-white">Consultoria</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
                
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <textarea 
                    rows={4}
                    placeholder="Descreva suas necessidades..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                  ></textarea>
                </motion.div>
                
                <motion.button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Enviar Mensagem
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}