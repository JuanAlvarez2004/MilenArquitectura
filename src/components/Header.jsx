import { Link, useLocation } from 'react-router'

const Header = () => {
  const location = useLocation()

  return (
    <nav id="nav" className="flex justify-center p-5 items-center gap-16 bg-white fixed top-0 left-0 right-0 z-10">
      <div className="text-3xl font-bold font-serif">
        <Link to="/">MA</Link>
      </div>
      <ul className="flex gap-24 w-full p-2 justify-end-safe">
        <li className="hover:scale-110 transition">
          <Link 
            className={`text-gray-700 text-xs tracking-widest ${
              location.pathname === '/' ? 'font-bold text-black' : ''
            }`} 
            to="/"
          >
            INICIO
          </Link>
        </li>
        <li className="hover:scale-110 transition">
          {location.pathname === '/' ? (
            <a
              className={`text-gray-700 text-xs tracking-widest ${
                location.pathname === '/' && location.hash === '#projects' ? 'font-bold text-black' : ''
              }`}
              href="#projects"
            >
              PROYECTOS
            </a>
          ) : (
            <Link
              className="text-gray-700 text-xs tracking-widest"
              to="/"
            >
              PROYECTOS
            </Link>
          )}
        </li>
        <li className="hover:scale-110 transition">
          <Link 
            className={`text-gray-700 text-xs tracking-widest ${
              location.pathname === '/services' ? 'font-bold text-black' : ''
            }`} 
            to="/services"
          >
            SERVICIOS
          </Link>
        </li>
        <li className="hover:scale-110 transition">
          <Link 
            className={`text-gray-700 text-xs tracking-widest ${
              location.pathname === '/about' ? 'font-bold text-black' : ''
            }`} 
            to="/about"
          >
            NOSOTROS
          </Link>
        </li>
        <li className="hover:scale-110 transition">
          <Link 
            className={`text-gray-700 text-xs tracking-widest ${
              location.pathname === '/contact' ? 'font-bold text-black' : ''
            }`} 
            to="/contact"
          >
            CONTACTO
          </Link>
        </li>
      </ul>
    </nav>  
  )
} 
export default Header