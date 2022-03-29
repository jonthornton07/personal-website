import React from "react";
// import {Card, Image} from "semantic-ui-react";
import ProjectModel from "./ProjectModel";

const ProjectCard: React.FC<ProjectModel> = ({header, meta, description, logo = "ncr.png"}) => {
    const logoImage = require("../../assets/" + logo);
    return (
        <></>
        // <Card>
        //     <Card.Content>
        //         <Image floated="right" size="mini" src={logoImage}/>
        //         <Card.Header>{header}</Card.Header>
        //         <Card.Meta>{meta}</Card.Meta>
        //         <Card.Description>{description}</Card.Description>
        //     </Card.Content>
        // </Card>
    );
};

export default ProjectCard;
