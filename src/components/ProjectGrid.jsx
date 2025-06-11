export default function ProjectGrid() {
//     const projects = [
//     {
//       id: 1,
//       title: "Wave House",
//       description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
//       image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
//       location: "Malibu, California",
//       year: "2023"
//     },
//     {
//       id: 2,
//       title: "Urban Loft",
//       description: "Transformación de un espacio industrial en un loft contemporáneo que conserva elementos originales mientras incorpora acabados modernos y sostenibles.",
//       image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80",
//       location: "Brooklyn, New York",
//       year: "2023"
//     },
//     {
//       id: 3,
//       title: "Glass Pavilion",
//       description: "Un pabellón de vidrio minimalista que se integra perfectamente con el jardín circundante, creando una experiencia inmersiva entre interior y naturaleza.",
//       image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80",
//       location: "Tokio, Japón",
//       year: "2022"
//     },
//     {
//       id: 4,
//       title: "Mountain Retreat",
//       description: "Refugio de montaña que utiliza materiales locales y técnicas de construcción sostenible para crear un espacio que respeta el entorno natural.",
//       image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//       location: "Aspen, Colorado",
//       year: "2022"
//     }
//   ]

    const obj = {
      id: 1,
      title: "Wave House",
      description: "Una casa moderna que fluye con el paisaje natural, incorporando curvas suaves que imitan las ondas del océano. El diseño integra espacios interiores y exteriores de manera fluida.",
      image: "https://arquine.com/wp-content/uploads/2014/03/Untitled-2.jpg",
      location: "Malibu, California",
      year: "2023",
      icon: 'https://svgsilh.com/svg_v2/304326.svg'
    }

    return (
        <div className="mt-11 grid grid-flow-col grid-cols-[200px] justify-center overflow-x-hidden gap-5 auto-cols-[600px]">
            <div className="justify-items-end-safe">
                <div className="h-10 w-10 overflow-hidden border rounded-xs p-1">
                    <img className="object-contain w-full h-full" src={obj.icon} alt="Icon" />
                </div>
                <ul className="list-none text-end">
                    <li className="text-black text-lg font-medium">{obj.title}</li>
                    <li className="text-gray-700">{obj.location}</li>
                    <li className="text-gray-700">{obj.year}</li>
                </ul>
            </div>
            <div>
                <img className="object-cover w-full h-full" src={obj.image} alt="" />
            </div>
            <div className="hidden">
                <span>
                    {obj.description}
                </span>
            </div>
            <div className="hidden">
                <img className="object-cover w-full h-full" src={obj.image} alt="" />
            </div>
        </div>
    )
}