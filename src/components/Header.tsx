import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '5581995116801';

const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('início');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { name: 'início', id: 'inicio' },
        { name: 'sobre', id: 'sobre' },
        { name: 'serviços', id: 'servicos' },
        { name: 'contato', id: 'contato' }
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];

        if (section.name === 'início') {
          if (scrollPosition < 300) {
            setActiveSection(section.name);
            return;
          }
        } else {
          const element = document.getElementById(section.id);
          if (element && scrollPosition >= element.offsetTop) {
            setActiveSection(section.name);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionName: string) => {
    if (sectionName === 'início') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionMap: Record<string, string> = {
        'sobre': 'sobre',
        'serviços': 'servicos',
        'contato': 'contato'
      };

      const elementId = sectionMap[sectionName];
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-teal-600 to-slate-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-800">BIOFIX</h1>
              <p className="text-xs text-slate-600">Engenharia Hospitalar</p>
            </div>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item, index) => {
              const sectionName = item.toLowerCase();
              const isActive = activeSection === sectionName;

              return (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(sectionName)}
                  className={`relative font-medium transition-colors ${isActive
                      ? 'text-teal-600'
                      : 'text-slate-700 hover:text-teal-600'
                    }`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={() => openWhatsApp('Olá! Gostaria de conhecer os serviços de locação e manutenção de equipamentos médicos e climatização.')}
              className="hidden sm:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>

            <button
              className="md:hidden text-slate-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMenuOpen ? 'max-h-64' : 'max-h-0'}`}
          initial={{ maxHeight: 0 }}
          animate={{ maxHeight: isMenuOpen ? 256 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="py-4 space-y-4">
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => {
              const sectionName = item.toLowerCase();
              const isActive = activeSection === sectionName;

              return (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(sectionName)}
                  className={`block w-full text-left font-medium py-2 px-2 rounded transition-colors ${isActive
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-slate-700 hover:text-teal-600 hover:bg-slate-50'
                    }`}
                  whileHover={{ x: 10 }}
                >
                  {item}
                </motion.button>
              );
            })}
            <motion.button
              onClick={() => openWhatsApp('Olá! Gostaria de conhecer os serviços de locação e manutenção de equipamentos médicos e climatização.')}
              className="w-full mt-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Fale Conosco
            </motion.button>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}