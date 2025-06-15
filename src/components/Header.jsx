import { useState } from "react";
import { Link, useLocation } from "react-router"

import gsap from "gsap"
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showMenu, setShowMenu] = useState(false); // Nuevo estado
  const location = useLocation()

  // Cierra el menú al navegar
  const handleNav = () => setIsOpen(false)

  useEffect(() => {
    if (isOpen) {
      setShowMenu(true); // Mostrar el menú antes de animar apertura
      gsap.fromTo(
        "#navBurger",
        { y: -30, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.5, ease: "power1.inOut" }
      );
    } else if (showMenu) {
      // Animar cierre y ocultar después
      gsap.to("#navBurger", {
        y: -30,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power1.inOut",
        onComplete: () => setShowMenu(false), // Ocultar después de animar
      });
    }
  }, [isOpen, showMenu])

  return (
    <nav id="nav" className="bg-white fixed top-0 left-0 right-0 z-10 ">
      <div className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <div className="text-3xl font-bold font-serif">
          <Link to="/" onClick={handleNav}>MA</Link>
        </div>
        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          {isOpen ? "✕" : "☰"}
        </button>
        {/* Menú horizontal (desktop) */}
        <ul className="hidden md:flex gap-12 items-center">
          <li>
            <Link
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/' ? 'font-bold text-black' : ''}`}
              to="/"
              onClick={handleNav}
            >
              INICIO
            </Link>
          </li>
          <li>
            {location.pathname === '/' ? (
              <a
                className={`text-gray-700 text-xs tracking-widest ${location.hash === '#projects' ? 'font-bold text-black' : ''}`}
                href="#projects"
                onClick={handleNav}
              >
                PROYECTOS
              </a>
            ) : (
              <Link
                className="text-gray-700 text-xs tracking-widest"
                to="/"
                onClick={handleNav}
              >
                PROYECTOS
              </Link>
            )}
          </li>
          <li>
            <Link
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/services' ? 'font-bold text-black' : ''}`}
              to="/services"
              onClick={handleNav}
            >
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/about' ? 'font-bold text-black' : ''}`}
              to="/about"
              onClick={handleNav}
            >
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 text-xs tracking-widest ${location.pathname === '/contact' ? 'font-bold text-black' : ''}`}
              to="/contact"
              onClick={handleNav}
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      </div>
      {/* Menú hamburguesa (mobile) */}
      {showMenu && (
        <ul id='navBurger' className="flex flex-col items-end pr-10 gap-3 bg-white py-8 md:hidden">          
          <li>
            <Link
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/' ? 'font-bold text-black' : ''}`}
              to="/"
              onClick={handleNav}
            >
              INICIO
            </Link>
          </li>
          <li>
            {location.pathname === '/' ? (
              <a
                className={`text-gray-700 text-base tracking-widest ${location.hash === '#projects' ? 'font-bold text-black' : ''}`}
                href="#projects"
                onClick={handleNav}
              >
                PROYECTOS
              </a>
            ) : (
              <Link
                className="text-gray-700 text-base tracking-widest"
                to="/"
                onClick={handleNav}
              >
                PROYECTOS
              </Link>
            )}
          </li>
          <li>
            <Link
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/services' ? 'font-bold text-black' : ''}`}
              to="/services"
              onClick={handleNav}
            >
              SERVICIOS
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/about' ? 'font-bold text-black' : ''}`}
              to="/about"
              onClick={handleNav}
            >
              NOSOTROS
            </Link>
          </li>
          <li>
            <Link
              className={`text-gray-700 text-base tracking-widest ${location.pathname === '/contact' ? 'font-bold text-black' : ''}`}
              to="/contact"
              onClick={handleNav}
            >
              CONTACTO
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Header;