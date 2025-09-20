import { motion } from 'framer-motion';

const WHATSAPP_NUMBER = '5581995116801';

const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center min-h-[70vh] sm:min-h-[80vh]">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-sm sm:text-lg md:text-xl font-semibold mb-3 sm:mb-4 text-blue-300 tracking-wide uppercase">
                Engenharia Clínica Especializada
              </h2>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                <span className="text-white">
                  BIOFIX
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-300 font-medium">
                  Engenharia Hospitalar
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
                Soluções técnicas especializadas para hospitais e estabelecimentos de saúde.
                Gestão completa de equipamentos médicos com conformidade regulatória e excelência operacional.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-8 mb-6 sm:mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full"></div>
                  <span className="text-slate-300 text-xs sm:text-sm">Certificado ANVISA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                  <span className="text-slate-300 text-xs sm:text-sm">ISO 9001</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.button
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-colors shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Nossos Serviços
              </motion.button>

              <motion.button
                onClick={() => openWhatsApp('Olá! Gostaria de solicitar um orçamento para locação e manutenção de equipamentos médicos e climatização.')}
                className="border-2 border-slate-300 text-slate-300 px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-slate-300 hover:text-slate-800 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Orçamento
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Medical Equipment Image */}
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-slate-100 to-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Medical equipment image */}
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-white rounded-xl mb-6 flex items-center justify-center relative overflow-hidden border border-slate-200 shadow-inner">
                  <img
                    src="/images/logo.png"
                    alt="BIOFIX - Engenharia Hospitalar"
                    className="w-full h-full object-contain p-6"
                  />

                  {/* Subtle overlay for better visual integration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/30 to-transparent rounded-xl"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-700 font-medium">Equipamentos Ativos</span>
                    </div>
                    <span className="text-slate-800 font-bold">98.5%</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-700 font-medium">Tempo Resposta</span>
                    </div>
                    <span className="text-slate-800 font-bold">&lt; 2h</span>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      </div>
                      <span className="text-slate-700 font-medium">Certificações</span>
                    </div>
                    <span className="text-slate-800 font-bold">ISO</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-teal-600 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="hidden sm:inline">CNPJ: </span>60.953.884/0001-20
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}