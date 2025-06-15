import { useEffect } from 'react'
import gsap from 'gsap'

function Services() {
  useEffect(() => {
    gsap.fromTo('#services-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  return (
    <div className="min-h-screen pt-24 p-2 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <div id="services-title" className='py-3 mb-8'>
          <h1 className="font-serif text-4xl md:text-5xl text-black font-bold">
            SERVICIOS
          </h1>
          <span className='text-gray-700'>Enfoque residencial y comercial</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Diseño Arquitectónico</h3>
            <p className='text-gray-700'>Creamos espacios únicos que reflejan la personalidad y necesidades de nuestros clientes.</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Consultoría</h3>
            <p className='text-gray-700'>Asesoramiento especializado en todas las etapas de tu proyecto arquitectónico.</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Diseño de Interiores</h3>
            <p className='text-gray-700'>Transformamos espacios interiores con soluciones funcionales y estéticamente atractivas.</p>
          </div>
          
          <div className="p-6 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold text-black mb-4">Gestión de Proyecto</h3>
            <p className='text-gray-700'>Coordinamos y supervisamos cada etapa de construcción para garantizar resultados excepcionales.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services