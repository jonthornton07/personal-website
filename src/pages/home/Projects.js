import React, {useState} from "react";
import {CardGroup, Responsive} from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import {projectData} from "./ProjectData";

const Projects = () => {
    const [numberOfRows, setNumberOfRows] = useState(2);

    const handleOnUpdate = (data) => {
        setNumberOfRows(data.width < Responsive.onlyMobile.maxWidth ? 1 : 2);
    };

    return (
        <Responsive fireOnMount onUpdate={(_, data) => handleOnUpdate(data)}>
            <CardGroup centered itemsPerRow={numberOfRows} style={{margin: ".5em"}}>
                {projectData.map((card, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            header={card.header}
                            meta={card.meta}
                            description={card.description}
                            logo={card.logo}
                        />
                    );
                })}
            </CardGroup>
        </Responsive>
    );
};

export default Projects;
