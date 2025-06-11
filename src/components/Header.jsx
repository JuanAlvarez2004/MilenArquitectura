const Header = () => {
  return (
    <nav id="nav" className="flex justify-center p-5 items-center gap-16 bg-white fixed top-0 left-0 right-0 z-10">
      <div className="text-3xl font-bold font-serif">
        <a href="#">MA</a>
      </div>
      <ul className="flex gap-24 w-full p-2 justify-end-safe">
        <li className="hover:scale-110 transition"><a className="text-gray-700 text-xs tracking-widest" href="#">INICIO</a></li>
        <li className="hover:scale-110 transition"><a className="text-gray-700 text-xs tracking-widest" href="#">PROYECTOS</a></li>
        <li className="hover:scale-110 transition"><a className="text-gray-700 text-xs tracking-widest" href="#">SERVICIOS</a></li>
        <li className="hover:scale-110 transition"><a className="text-gray-700 text-xs tracking-widest" href="#">NOSOTROS</a></li>
        <li className="hover:scale-110 transition"><a className="text-gray-700 text-xs tracking-widest" href="#">CONTACTO</a></li>
      </ul>
    </nav>  
  )
} 
export default Header