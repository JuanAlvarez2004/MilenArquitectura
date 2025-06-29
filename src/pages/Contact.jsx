import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import instagramIcon from '../assets/icons/instagram.webp'

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY


function Contact() {
  const [user, setUser] = useState({
    name: '',
    message: '',
    email: ''
  })
  
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const form = useRef()

  useEffect(() => {
    gsap.fromTo('#contact-title', { y: 15, autoAlpha: 0, filter: 'blur(10px)' }, {
      duration: .5,
      y: 0,
      autoAlpha: 1,
      filter: '',
    })
  }, [])

  const validateEmail = (email) => {
    // Simple regex for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleChange = ({ target }) => {
    setUser(prev => ({
      ...prev,
      [target.name]: target.value
    }))
    setError('')
    setSuccess('')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.message) {
      setError('Por favor completa todos los campos.');
      return;
    }
    if (!validateEmail(user.email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }
    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result)
        setSuccess('¡Mensaje enviado correctamente!')
        setUser({ name: '', message: '', email: '' })
      }, (error) => {
        console.log(error)
        setError('Hubo un error al enviar el mensaje. Intenta de nuevo.')
      })
  }

  return (
    <div className="min-h-screen pt-24 p-14 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 id="contact-title" className="font-serif text-4xl md:text-5xl text-black font-bold py-3 mb-8">
          CONTACTO
        </h1>
        {error && <div className="mb-4 text-red-600">{error}</div>}
        {success && <div className="mb-4 text-green-600">{success}</div>}
        
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

              <div className='h-7 w-7'>
                <a href="https://www.instagram.com/milen.arquitectura/" target='_blank'>
                  <img className='w-full object-cover hover:scale-110 transition-transform duration-75' src={instagramIcon} />
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-black mb-2">Nombre</label>
                <input 
                  name='name'
                  onChange={handleChange}
                  value={user.name}
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">Email</label>
                <input 
                  name='email'
                  onChange={handleChange}
                  value={user.email}
                  type="email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-black mb-2">Mensaje</label>
                <textarea 
                  name='message'
                  onChange={handleChange}
                  value={user.message}
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