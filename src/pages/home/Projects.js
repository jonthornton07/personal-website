import React from "react";
import { CardGroup } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const Projects = ({ mobile = false }) => {
  return (
    <CardGroup centered itemsPerRow={2} style={{ margin: ".5em" }}>
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
  );
};

export default Projects;
