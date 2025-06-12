import { useEffect } from 'react'
import gsap from 'gsap'

function About() {
  useEffect(() => {
    gsap.fromTo('#about-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  return (
    <div className="min-h-screen pt-24 p-20 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 id="about-title" className="font-serif text-5xl text-black font-bold py-3 mb-8">
          NOSOTROS
        </h1>
        
        <section id='about-container' className="prose prose-lg max-w-none">
          <p className="text-xl mb-6">
            Somos <span className="font-bold text-black">Milén Arquitectura</span>, un estudio 
            dedicado a crear espacios únicos que trascienden las expectativas convencionales.
          </p>
          
          <p className="mb-6">
            Nuestro enfoque se centra en la <span className="font-bold text-black">innovación</span> y 
            la <span className="font-bold text-black">sostenibilidad</span>, creando diseños que no solo 
            son estéticamente impactantes, sino también funcionales y respetuosos con el medio ambiente.
          </p>
          
          <p className="mb-6">
            Cada proyecto es una oportunidad para explorar nuevas formas de habitar el espacio, 
            integrando la arquitectura con el entorno natural y las necesidades específicas de nuestros clientes.
          </p>
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-black mb-4">Nuestra Filosofía</h2>
            <p>
              Creemos que la arquitectura debe ser una extensión natural de quien la habita. 
              Por eso, cada diseño nace de una profunda comprensión de las necesidades, 
              sueños y estilo de vida de nuestros clientes.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About