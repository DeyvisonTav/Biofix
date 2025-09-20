import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-600 to-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm sm:text-lg">B</span>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">BIOFIX</h3>
                <p className="text-xs sm:text-sm text-gray-400">Engenharia Hospitalar</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Excelência em engenharia clínica para hospitais e clínicas,
              garantindo segurança e confiabilidade dos equipamentos médicos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Serviços</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Manutenção Preventiva',
                'Calibração de Equipamentos',
                'Gestão Técnica',
                'Treinamento',
                'Consultoria'
              ].map((service, index) => (
                <li key={service}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Empresa</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                'Sobre Nós',
                'Nossa Equipe',
                'Certificações',
                'Casos de Sucesso',
                'Política de Qualidade'
              ].map((item, index) => (
                <li key={item}>
                  <motion.a
                    href={item === 'Nossa Equipe' ? 'https://www.instagram.com/biofixengenhariahospitalar/' : '#'}
                    target={item === 'Nossa Equipe' ? '_blank' : undefined}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contato</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-gray-400 text-sm sm:text-base">(81) 99511-6801</span>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>
                <span className="text-gray-400 text-xs sm:text-sm break-all overflow-wrap-anywhere">biofixengenhariahospitalar@gmail.com</span>
              </div>

              <div className="flex items-start space-x-2 sm:space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-gray-400 text-xs sm:text-sm">
                  <p>Rua Projetada 03, S/N</p>
                  <p>Carpina - PE, 55.816-675</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm break-words">
              © 2025 BIOFIX Engenharia Hospitalar LTDA. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 text-xs sm:text-sm break-words">
              CNPJ: 60.953.884/0001-20
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}