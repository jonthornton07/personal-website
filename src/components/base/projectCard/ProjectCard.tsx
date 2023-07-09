export interface ProjectViewModel {
    header: string
    meta: string
    description: string
    logo: string
    logoAlt: string
}

const ProjectCard: React.FC<ProjectViewModel> = ({
    header,
    meta,
    description,
    logo,
    logoAlt
}) => {
    return (
        <div className="border rounded border-gray-200 p-1 relative">
            <img className="w-10 h-10 absolute top-2 right-2 rounded" src={`/images/${logo}`} alt={logoAlt}></img>
            <div className="text-lg leading-7 text-gray-900 font-sans antialiased font-semibold">{header}</div>
            <div className="text-sm leading-7 text-gray-900 font-sans font-thin antialiased -mt-1">{meta}</div>
            <div className="text-base leading-7 text-gray-700 font-sans">{description}</div>
        </div>
    )
}

export default ProjectCard