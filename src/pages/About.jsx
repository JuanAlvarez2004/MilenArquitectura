import { useEffect } from 'react'
import gsap from 'gsap'

import arqs from '../assets/images/arqs_3.webp'

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
    <div className="min-h-screen w-full pt-24 p-6 text-gray-700">
      <div className="max-w-4xl mx-auto">
        <h1 id="about-title" className="font-serif text-4xl md:text-5xl text-black font-bold py-3 mb-8">
          NOSOTROS
        </h1>
        
        <section id='about-container' className="w-full m-auto">
          <div className='h-96 overflow-hidden mask-b-from-40%'>
            <img src={arqs} className='w-full object-cover' alt="Arquitectos" title='Valentina y Yamil' />
          </div>

          <div className='-mt-20 sm:-mt-9 flex flex-col gap-2 text-gray-700 text-pretty'>
            <div>
              <span className='font-bold text-black'>Milén Arquitectura</span> nace del encuentro entre dos profesionales apasionados por el diseño. Luego de coincidir trabajando en una misma empresa, descubrimos que compartíamos una visión similar sobre la arquitectura y los espacios: 
              <span className='text-black font-medium'> crear lugares pensados desde las personas, con identidad, funcionalidad y detalle.</span> Fue así como, motivados por la vocación y el deseo de emprender un camino propio, decidimos unir nuestras habilidades y dar vida a este proyecto.
            </div>
            <p>
              Diseñamos con propósito. No creemos en soluciones genéricas: <span className='text-black font-medium'> cada diseño debe hablar de ti, de tu estilo de vida, tus necesidades y tus sueños</span>. Por eso, nos enfocamos en crear espacios con identidad, porque sabemos que los mismos materiales no funcionan igual para todos, y que la verdadera belleza está en el detalle que conecta con lo personal. Somos un equipo apasionado, comprometido y altamente dedicado.
            </p>
            <ul className='pl-6 my-2 border-l-4'>
              <li className='list-none p-0 m-0'>
                <span className='font-bold text-black'>Yamil</span>, egresado de la Universidad de Ibagué, es detallista con la visualización arquitectónica, amante de los renders y el diseño conceptual.
              </li>
              <li className='list-none p-0 m-0'><span className='font-bold text-black'>Valentina</span>, egresada de la Universidad del Tolima, vive el interiorismo con una pasión perfeccionista que se refleja en cada decisión técnica y estética.</li>
            </ul>
            <p>
              Ofrecemos servicios de diseño arquitectónico, interiorismo, remodelación, ejecución o dirección de obra, asesorías y consultorías. Aunque estamos ubicados en Ibagué, trabajamos a nivel nacional e internacional gracias a nuestro enfoque digital, cercano y flexible. 
            </p>
            <span>
              En Milén no solo diseñamos: <span className='text-black font-medium'>interpretamos tu historia y la transformamos en espacios que se sienten muy tuyos</span>.
              <p className='pt-4 italic text-sm text-center'>'Porque cada lugar merece tener alma. Y cada cliente, un diseño que lo represente.'</p>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About