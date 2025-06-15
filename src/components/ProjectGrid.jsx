export default function ProjectGrid({ isOpen, project }) {
    return (
        <div id="project" className="grid grid-flow-col grid-cols-[75px] md:grid-cols-[150px] justify-center gap-5 auto-cols-[250px] md:auto-cols-[600px]">
            <div className="justify-items-end-safe">
                <div className="h-10 w-10 overflow-hidden border rounded-xs p-1">
                    <img className="object-contain w-full h-full" src={project.icon} alt="Icon" />
                </div>
                <ul className="list-none text-end">
                    <li className="text-black md:text-lg font-medium">{project.title}</li>
                    <li className="text-gray-700">{project.location}</li>
                    <li className="text-gray-700 text-sm">{project.year}</li>
                </ul>
            </div>
            <div className="w-full">
                <img className="object-cover w-full h-full" src={project.image} alt="" />
            </div>
            <div className={!isOpen ? `hidden` : ''}>
                <span>
                    {project.description}
                </span>
            </div>
            <div className={!isOpen ? `hidden` : ''}>
                <img className="object-cover w-full h-full" src={project.image} alt="" />
            </div>
        </div>
    )
}