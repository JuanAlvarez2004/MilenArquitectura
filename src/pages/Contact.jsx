import { useEffect } from 'react'
import gsap from 'gsap'

function Contact() {
  useEffect(() => {
    gsap.fromTo('#contact-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  return (
    <div className="min-h-screen pt-24 p-20 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 id="contact-title" className="font-serif text-5xl text-black font-bold py-3 mb-8">
          CONTACTO
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div>
            <h2 className="text-2xl font-bold text-black mb-6">Conversemos sobre tu proyecto</h2>
            <p className="mb-8">
              Estamos aquí para hacer realidad tus ideas. Cuéntanos sobre tu proyecto 
              y descubramos juntos las posibilidades.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-bold text-black">Email</h3>
                <p>info@milenarquitectura.com</p>
              </div>
              
              <div>
                <h3 className="font-bold text-black">Teléfono</h3>
                <p>+57 300 123 4567</p>
              </div>
              
              <div>
                <h3 className="font-bold text-black">Dirección</h3>
                <p>Ibagué, Tolima<br />Colombia</p>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">Mensaje</label>
                <textarea 
                  rows="5" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact