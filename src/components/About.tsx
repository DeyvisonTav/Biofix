import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Sobre a <span className="text-teal-600">BIOFIX</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A <strong>BIOFIX Engenharia Hospitalar LTDA</strong> é uma empresa especializada em 
              engenharia clínica, oferecendo soluções técnicas certificadas para hospitais, 
              clínicas e estabelecimentos de saúde em Pernambuco.
            </p>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Nossa equipe de engenheiros clínicos certificados atua com foco na segurança, 
              confiabilidade e conformidade regulatória, garantindo aderência às normas 
              ANVISA e padrões internacionais de qualidade.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <motion.div 
                className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">2025</div>
                <div className="text-slate-700 font-semibold">Fundada em Carpina-PE</div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-700 font-semibold">Conformidade ANVISA</div>
              </motion.div>
            </div>
            
            <motion.button
              onClick={() => window.open('https://www.instagram.com/biofixengenhariahospitalar/', '_blank')}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Nossa Equipe Técnica
            </motion.button>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Professional Team Image Placeholder */}
              <motion.div 
                className="bg-gradient-to-br from-slate-100 to-white rounded-3xl p-8 shadow-lg border border-slate-200"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Team photo placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-50 to-teal-50 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  {/* Imagem da equipe como fundo */}
                  <img
                    src="/images/equipe.png"
                    alt="Equipe Técnica Especializada da Biofix"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay escuro para melhor legibilidade do texto */}
                  <div className="absolute inset-0 bg-black/40"></div>

                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-white font-semibold text-shadow-sm">Equipe Técnica Especializada</p>
                    <p className="text-white/90 text-sm">Engenheiros Clínicos Certificados</p>
                  </div>
                  
                  {/* Professional badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                    Certificado CREA-PE
                  </div>
                </div>
                
                {/* Certifications and Compliance */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-800 text-center mb-4">Certificações & Conformidades</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-sm font-semibold text-slate-700">ANVISA</div>
                      <div className="text-xs text-slate-500">RDC 16/2013</div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="text-sm font-semibold text-slate-700">ISO</div>
                      <div className="text-xs text-slate-500">9001:2015</div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <div className="text-sm font-semibold text-slate-700">CREA-PE</div>
                      <div className="text-xs text-slate-500">Registro Ativo</div>
                    </div>
                    
                    <div className="bg-slate-50 p-4 rounded-xl text-center">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
                      </div>
                      <div className="text-sm font-semibold text-slate-700">INMETRO</div>
                      <div className="text-xs text-slate-500">Credenciado</div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Company info badge */}
              <motion.div 
                className="absolute -top-4 -left-4 bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg"
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-xs text-slate-300">CNPJ</div>
                <div>60.953.884/0001-20</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Mission and Values Section */}
        <motion.div 
          className="mt-20 bg-slate-50 rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">Nossa Missão</h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Garantir excelência operacional em engenharia clínica, promovendo segurança 
              e qualidade no atendimento à saúde através de soluções técnicas certificadas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Excelência Técnica</h4>
              <p className="text-slate-600 text-sm">Padrões internacionais de qualidade e conformidade regulatória</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Segurança Total</h4>
              <p className="text-slate-600 text-sm">Garantia de funcionamento seguro e confiável dos equipamentos</p>
            </div>
            
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Eficiência Operacional</h4>
              <p className="text-slate-600 text-sm">Otimização de processos e maximização da disponibilidade</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}