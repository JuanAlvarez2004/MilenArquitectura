import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"


gsap.registerPlugin(Draggable)

const Project = () => {
  const carouselRef = useRef(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Datos de ejemplo de proyectos
  const projects = [
    {
      id: 1,
      title: "Wave House",
      description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
      image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
      location: "Malibu, California",
      year: "2023"
    },
    {
      id: 2,
      title: "Urban Loft",
      description: "Transformación de un espacio industrial en un loft contemporáneo que conserva elementos originales mientras incorpora acabados modernos y sostenibles.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
      location: "Brooklyn, New York",
      year: "2023"
    },
    {
      id: 3,
      title: "Glass Pavilion",
      description: "Un pabellón de vidrio minimalista que se integra perfectamente con el jardín circundante, creando una experiencia inmersiva entre interior y naturaleza.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
      location: "Tokio, Japón",
      year: "2022"
    },
    {
      id: 4,
      title: "Mountain Retreat",
      description: "Refugio de montaña que utiliza materiales locales y técnicas de construcción sostenible para crear un espacio que respeta el entorno natural.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      location: "Aspen, Colorado",
      year: "2022"
    }
  ]

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    // Configurar Draggable
    const draggable = Draggable.create(carousel, {
      type: "x",
      bounds: {
        minX: -(projects.length - 1) * (carousel.offsetWidth),
        maxX: 0
      },
      inertia: true,
      onDrag: function() {
        // Calcular slide actual basado en posición
        const newSlide = Math.round(Math.abs(this.x) / (carousel.offsetWidth / projects.length))
        if (newSlide !== currentSlide && !isAnimating) {
          setCurrentSlide(newSlide)
        }
      },
      onThrowComplete: function() {
        snapToSlide()
      }
    })

    const snapToSlide = () => {
      const targetX = -currentSlide * (carousel.offsetWidth / projects.length)
      gsap.to(carousel, {
        x: targetX,
        duration: 0.5,
        ease: "power2.out"
      })
    }

    return () => {
      draggable[0]?.kill()
    }
  }, [currentSlide, projects.length, isAnimating])

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return
    
    setIsAnimating(true)
    setCurrentSlide(index)
    
    const carousel = carouselRef.current
    const targetX = -index * (carousel.offsetWidth / projects.length)
    
    gsap.to(carousel, {
      x: targetX,
      duration: 0.6,
      ease: "power2.out",
      onComplete: () => setIsAnimating(false)
    })
  }

  const nextSlide = () => {
    const next = currentSlide === projects.length - 1 ? 0 : currentSlide + 1
    goToSlide(next)
  }

  const prevSlide = () => {
    const prev = currentSlide === 0 ? projects.length - 1 : currentSlide - 1
    goToSlide(prev)
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="flex h-full w-full"
        style={{ width: `${projects.length * 100}%` }}
      >
        {projects.map((project, index) => (
          <div 
            key={index}
            className="flex-shrink-0 w-full h-full flex items-center justify-center"
            style={{ width: `${100 / projects.length}%` }}
          >
            <div className="flex items-center justify-center w-full h-full max-w-7xl mx-auto px-8">
              {/* Contenido del proyecto */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                
                {/* Información del proyecto */}
                <div className="space-y-6 order-2 lg:order-1">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500 tracking-wider uppercase">
                      {project.location} • {project.year}
                    </p>
                    <h2 className="text-4xl lg:text-5xl font-bold font-serif text-black">
                      {project.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
                    {project.description}
                  </p>
                  
                  <button className="group flex items-center gap-2 text-black hover:text-gray-600 transition-colors">
                    <span className="font-medium tracking-wide">VER PROYECTO</span>
                    <svg 
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Imagen del proyecto */}
                <div className="order-1 lg:order-2">
                  <div className="relative overflow-hidden rounded-lg shadow-2xl">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-96 lg:h-[500px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
        
        {/* Botón anterior */}
        <button 
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all group"
          disabled={isAnimating}
        >
          <svg className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Indicadores de slide */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-black scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <button 
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-all group"
          disabled={isAnimating}
        >
          <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Contador de slides */}
      <div className="absolute top-8 right-8 text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
        {currentSlide + 1} / {projects.length}
      </div>
    </section>
  )
}

export default Project