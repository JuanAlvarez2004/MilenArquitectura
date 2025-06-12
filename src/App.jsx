import { useEffect, useState, useLayoutEffect, useRef } from "react"
import gsap from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { SplitText } from "gsap/SplitText"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Draggable } from "gsap/Draggable"

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Starting from './components/Starting.jsx'


gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText, ScrollToPlugin, Draggable)

const projectsObjs = [
  {
    id: 1,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 2,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 3,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 4,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 5,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 6,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
  {
    id: 7,
    title: "Wave House",
    description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
    image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
    location: "Malibu, California",
    year: "2023",
    icon: 'https://svgsilh.com/svg_v2/304326.svg'
  },
]


function App() {
  const [startingComplete, setStartingComplete] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [isOpen, setIsOpen] = useState(Array(projectsObjs.length).fill(false))
  const projectRefs = useRef([])
  
  useLayoutEffect(() => {
    // Configuración inmediata
    window.history.scrollRestoration = 'manual'
    
    // Detectar si hay scroll actual
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    const hasScroll = currentScroll > 0
    
    if (hasScroll) {
      // Si hay scroll, hacer transición suave
      gsap.set('body', { opacity: 0 })
      
      gsap.to(window, {
        scrollTo: { y: 0 },
        duration: 0.2,
        onComplete: () => {
          gsap.to('body', { 
            opacity: 1, 
            duration: 0.2,
            onComplete: () => setIsReady(true)
          })
        }
      })
    } else {
      // Si no hay scroll, mostrar inmediatamente
      gsap.set('body', { opacity: 1 })
      setIsReady(true)
    }
    
  }, [])

  useEffect(() => {
    if (!isReady) return
    
    // Bloquear scroll
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden'
    document.body.style.paddingRight = `${scrollbarWidth}px`
    document.body.style.backgroundColor = 'black'
    
    // Timeline maestro 
    const masterTL = gsap.timeline()
    
    const animateStarting = () => {
      const splitTitle = new SplitText('#starting-title', { type: 'chars' })
      const splitSections = new SplitText('#starting-sections', { type: 'chars' })

      const startingTL = gsap.timeline({
        onComplete: () => {
          setStartingComplete(true)
          document.body.style.overflow = ''
          document.body.style.paddingRight = ''
          document.body.style.backgroundColor = ''
        }
      })

      startingTL.from(splitTitle.chars, {
        duration: .5,
        opacity: 0,
        stagger: { each: 0.2 },
      }).from(splitSections.chars, {
        duration: .5,
        opacity: 0,
        stagger: { each: 0.2 },
      }, 0)
      .to('#starting-title', {
          duration: .5,
          x: (-window.innerWidth / 2) + 148,
          y: (-window.innerHeight / 2) + 40,
          stagger: 0.05,
          ease: 'power1.in'
      })
      .to('#starting-sections', {
          duration: .5,
          x: (window.innerWidth / 2) - 148,
          y: (-window.innerHeight / 2) + 40,
          stagger: 0.05,
          ease: 'power1.in'
      }, '<')
      .to(splitTitle.chars, {
        duration: .2,
        x: -20,
        opacity: 0,
        stagger: { each: 0.08, from: 'end' }
      })
      .to(splitSections.chars, {
        duration: .2,
        x: 20,
        opacity: 0,
        stagger: { each: 0.08 }
      }, '<')
      .to('#starting-bg', {
        y: -window.innerHeight,
        duration: 1 
      }, '-=0.8')
      
      return startingTL
    }
    
    const animateHeader = () => {
      gsap.set('#nav', {
        y: -100,
        autoAlpha: 0
      })

      return gsap.to('#nav', {
        duration: 1,
        y: 0,
        autoAlpha: 1
      })
    }

    const animateHero = () => {
      const splitTitle = new SplitText('#title', {
        type: 'lines'
      })

      const splitDescription = new SplitText('#description', {
        type: 'lines'
      })

      const tl = gsap.timeline()

      tl.from(splitTitle.lines, {
          duration: 1,
          y: 15,
          stagger: .1,
          autoAlpha: 0,
          filter: 'blur(10px)',
          ease: 'power1.in'
      })
      .from(splitDescription.lines, {
          duration: 1,
          y: 15,
          stagger: .1,
          autoAlpha: 0,
          filter: 'blur(10px)',
          ease: 'power1.in'
      }, '<')
      .from('#image-arqs', {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: 'power1.in'
      }, '<')
      .from('#projects', {
        autoAlpha: 0,
        y: 40,
        duration: 1,
        ease: 'power1.in'
      }, '<')

      return tl
    }

    const animateProjects = () => {
      const projects = gsap.utils.toArray('.project')

      // Anima la escala en función del scroll
      projects.forEach((proj) => {
        gsap.from(proj, {
          scale: 0.8,
          scrollTrigger: {
            trigger: proj,
            start: 'top 90%',
            end: 'bottom 10%',
            scrub: 0.5,
          },
        })
      })
    }
    
    masterTL
      .add(animateStarting())
      .add(animateHeader(), '-=0.7')
      .add(animateHero(), '<')
      .add(animateProjects())
    
  }, [isReady])

  const handleOpen = (idx) => {
    setIsOpen(prev => prev.map((open, i) => i === idx ? !open : open))
    
    const el = projectRefs.current[idx]

    if (el) {
      gsap.from(el, {
        duration: 1,
        autoAlpha: 0
      })
      Draggable.create(el, {
        type: 'x',
      })
    }
  }


  
  return (
    <>
      <Starting isComplete={startingComplete}/>
      <Header />
      <Hero />
      <div id="projects" className="flex flex-col gap-4">
        {
          projectsObjs.length > 0 && 
            projectsObjs.map((p, idx) => (
              <div 
                ref={(el) => (projectRefs.current[idx] = el)} 
                key={idx} 
                onClick={() => handleOpen(idx)} 
                className="project cursor-crosshair"
              >
                <ProjectGrid isOpen={isOpen[idx]} project={p} />
              </div> 
            ))
        }
      </div>
    </>
  )
}

export default App