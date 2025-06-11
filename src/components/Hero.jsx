import arqsImg from '../assets/images/arqs.webp'

const Hero = () => {
  return (
    <header className="my-15 p-20 text-gray-700 text-balance flex items-center justify-center flex-wrap gap-4">
      <section className="w-2xl">
        <h1 id="title" className="font-serif text-5xl text-black font-bold py-3">MILÉN ARQUITECTURA</h1>
        <div id="description">
          Somos un equipo de arquitectos apasionados por el diseño y la creación de espacios con soluciones innovadoras con el objetivo de <span className="font-bold text-black">reflejar la esencia de nuestros clientes</span> y transformar espacios.
        </div>
      </section>
      <div id="image-arqs" className="h-96 overflow-hidden">
        <img className="w-full h-full object-cover" src={arqsImg} alt="Arquitectos" title="Valentina y Yamil" />
      </div>
    </header>
  )
}

export default Hero