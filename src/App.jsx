import { useEffect, useState, useLayoutEffect } from "react"
import gsap from "gsap"
    
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { SplitText } from "gsap/SplitText"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
// import Project from './components/Project.jsx'
import ProjectGrid from './components/ProjectGrid.jsx'
import Starting from './components/Starting.jsx'


gsap.registerPlugin(ScrollTrigger, TextPlugin, SplitText, ScrollToPlugin)

function App() {
  const [startingComplete, setStartingComplete] = useState(false)
  const [isReady, setIsReady] = useState(false)
  
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
    document.body.style.overflow = 'hidden'
    
    // Timeline maestro 
    const masterTL = gsap.timeline()
    
    const animateStarting = () => {
      const splitTitle = new SplitText('#starting-title', { type: 'chars' })
      const splitSections = new SplitText('#starting-sections', { type: 'chars' })

      const startingTL = gsap.timeline({
        onComplete: () => {
          setStartingComplete(true)
          document.body.style.overflow = ''
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
      })
      .from(splitDescription.lines, {
          duration: 1,
          y: 15,
          stagger: .1,
          autoAlpha: 0,
          filter: 'blur(10px)',
      }, '<')
      .from('#image-arqs', {
        autoAlpha: 0,
        y: 30,
        duration: 1
      }, '<')

      return tl
    }

    // const animateProjects = () => {
    //   const tl = gsap.timeline()
      
    //   // Animar entrada del título de proyectos
    //   tl.from('.project-title', {
    //     duration: 0.8,
    //     y: 30,
    //     autoAlpha: 0,
    //     ease: "power2.out"
    //   })
    //   // Animar entrada de controles
    //   .from('.project-controls', {
    //     duration: 0.6,
    //     y: 20,
    //     autoAlpha: 0,
    //     stagger: 0.1
    //   }, '-=0.4')
    //   // Animar entrada del primer slide
    //   .from('.project-slide-0', {
    //     duration: 1,
    //     x: 100,
    //     autoAlpha: 0,
    //     ease: "power2.out"
    //   }, '-=0.2')
      
    //   return tl
    // }
    
    masterTL
      .add(animateStarting())
      .add(animateHeader(), '-=0.7')
      .add(animateHero(), '<')
    
  }, [isReady])
  
  return (
    <>
      <Starting isComplete={startingComplete}/>
      <Header />
      <Hero />
      {/* <Project /> */}
      <ProjectGrid />
      <ProjectGrid />
      <ProjectGrid />
    </>
  )
}

export default App
