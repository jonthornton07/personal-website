import React from "react";
import {Header, Segment} from "semantic-ui-react";

const aboutText =
    "Hey there! I am currently a Software Engineer at LifeBell AI. " +
    "Currently, I am working on a variety of things from Mobile to .NET backend applications. " +
    "LifeBell is a startup focusing on trying to save lives by rapidly detecting and forecasting critical patient conditions. "

const aboutTextSecondary =
    "I enjoy doing mobile and front end work, but at the same time, I dabble in learning about backend technologies. " +
    "This website is significantly over-engineered so that I can play around with different backend technologies and DevOps things. " +
    "I enjoy learning different languages, different stacks, and different ways of doing the same thing. " +
    "It's fun just to explore what is out there.";

const About = () => {
    return (
        <Segment basic style={{margin: ".5em"}}>
            <Header size="medium">About</Header>
            <p>{aboutText} {aboutTextSecondary}</p>
        </Segment>
    );
};

export default About;
