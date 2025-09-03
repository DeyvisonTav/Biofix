import { motion } from 'framer-motion';

const services = [
  {
    title: "Manutenção Preventiva e Corretiva",
    description: "Planos de manutenção preventiva, preditiva e corretiva conforme normas ANVISA. Garantimos funcionamento contínuo e segurança dos equipamentos médicos.",
    equipment: "Respiradores, Monitores, Bombas de Infusão",
    compliance: "RDC 16/2013",
    bgClass: "from-slate-100 to-blue-50",
    iconBg: "bg-blue-600"
  },
  {
    title: "Calibração e Verificação Técnica",
    description: "Calibração periódica certificada para garantir precisão e confiabilidade dos dispositivos médicos conforme normas técnicas internacionais.",
    equipment: "Instrumentos de Medição, Analisadores",
    compliance: "ISO 17025",
    bgClass: "from-slate-100 to-teal-50",
    iconBg: "bg-teal-600"
  },
  {
    title: "Gestão de Equipamentos Médicos",
    description: "Gerenciamento completo do inventário de equipamentos, controle de ciclo de vida, rastreabilidade e documentação técnica.",
    equipment: "Todo o Parque Tecnológico",
    compliance: "RDC 16/2013",
    bgClass: "from-slate-100 to-purple-50",
    iconBg: "bg-purple-600"
  },
  {
    title: "Treinamento e Capacitação",
    description: "Capacitação técnica de equipes de saúde e manutenção para operação segura e eficiente dos equipamentos médico-hospitalares.",
    equipment: "Equipes Multidisciplinares",
    compliance: "Educação Continuada",
    bgClass: "from-slate-100 to-orange-50",
    iconBg: "bg-orange-600"
  },
  {
    title: "Avaliação de Riscos e Auditoria",
    description: "Análise de riscos, avaliação de conformidade e auditoria técnica para garantir aderência às normas regulatórias.",
    equipment: "Sistemas Críticos",
    compliance: "ANVISA/INMETRO",
    bgClass: "from-slate-100 to-red-50",
    iconBg: "bg-red-600"
  },
  {
    title: "Consultoria e Assessoria Técnica",
    description: "Assessoria especializada em aquisição, qualificação, instalação e validação de equipamentos médico-hospitalares.",
    equipment: "Projetos Técnicos",
    compliance: "Boas Práticas",
    bgClass: "from-slate-100 to-green-50",
    iconBg: "bg-green-600"
  }
];

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Serviços <span className="text-teal-600">Especializados</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Soluções técnicas certificadas em engenharia clínica com conformidade regulatória ANVISA
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Service Image Placeholder */}
              <div className={`w-full h-40 bg-gradient-to-br ${service.bgClass} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                <div className={`w-16 h-16 ${service.iconBg} rounded-full flex items-center justify-center shadow-lg`}>
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                {/* Equipment badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-slate-600">
                  {service.equipment}
                </div>
                {/* Compliance badge */}
                <div className="absolute bottom-3 right-3 bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {service.compliance}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-4">{service.description}</p>
              
              <div className="flex items-center justify-between">
                <motion.button 
                  className="text-teal-600 font-semibold hover:text-teal-700 transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  Saiba mais →
                </motion.button>
                
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-slate-500">Certificado</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Statistics Section */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">98.5%</div>
              <div className="text-slate-600 font-medium">Disponibilidade</div>
              <div className="text-slate-500 text-sm">dos Equipamentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">&lt;2h</div>
              <div className="text-slate-600 font-medium">Tempo Resposta</div>
              <div className="text-slate-500 text-sm">Emergencial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Conformidade</div>
              <div className="text-slate-500 text-sm">Regulatória</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Suporte</div>
              <div className="text-slate-500 text-sm">Técnico</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button 
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Proposta Técnica
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}