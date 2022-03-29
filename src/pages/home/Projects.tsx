import React from "react";
// import {CardGroup, Segment} from "semantic-ui-react";
import { useIsMobileDevice } from "../../layouts/LayoutUtils";
import ProjectCard from "./ProjectCard";
import {projectData} from "./ProjectData";

const Projects = () => {
    return (
        <></>
        // <Segment>
        //     <CardGroup centered itemsPerRow={useIsMobileDevice() ? 1 : 2} style={{margin: ".5em"}}>
        //         {projectData.map((card, index) => {
        //             return (
        //                 <ProjectCard
        //                     key={index}
        //                     header={card.header}
        //                     meta={card.meta}
        //                     description={card.description}
        //                     logo={card.logo}
        //                 />
        //             );
        //         })}
        //     </CardGroup>
        // </Segment>
    );
};

export default Projects;
