import { createFileRoute } from '@tanstack/react-router'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export const Route = createFileRoute('/')({
  component: App,
  head: () => ({
    meta: [
      {
        name: "description",
        content: "BIOFIX Engenharia Hospitalar - Soluções completas em engenharia clínica para hospitais e clínicas em Pernambuco"
      },
      {
        name: "keywords", 
        content: "engenharia hospitalar, engenharia clínica, manutenção equipamentos médicos, calibração, Pernambuco"
      }
    ],
    title: "BIOFIX - Engenharia Hospitalar | Soluções em Engenharia Clínica"
  })
})

function App() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}