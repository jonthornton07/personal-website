import React from "react"
import ProjectModel from "../../pages/home/ProjectModel"

const ProjectCard: React.FC<ProjectModel> = ({
    header,
    meta,
    description,
    logo
}) => {
    return (
        <div className="border rounded border-gray-200 p-1 relative">
            <img className="w-7 h-7 absolute top-2 right-2 rounded" src={require(`../../assets/media/images/${logo}`)}></img>
            <div className="text-lg leading-7 text-gray-900 font-sans antialiased font-semibold">{header}</div>
            <div className="text-sm leading-7 text-gray-900 font-sans font-thin antialiased -mt-1">{meta}</div>
            <div className="text-base leading-7 text-gray-700 font-sans">{description}</div>
        </div>
    )
}

export default ProjectCard