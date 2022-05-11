import ProjectCard from "../../components/base/ProjectCard";
import {projectData} from "./ProjectData";

const Projects = () => {
    return (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mx-3">
            {projectData.map((data, index) => 
                <ProjectCard key={index} header={data.header} meta={data.meta} description={data.description} logo={data.logo} logoAlt={data.logoAlt} />
            )}
        </div>
    )
};

export default Projects;
