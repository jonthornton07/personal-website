import React from "react";
import { Segment, Header } from "semantic-ui-react";

const aboutText =
  "Hey there! I am currently a Technical Lead at NCR. Currently, I am working on a React-Native project that utilizes native libraries. The team I work on is fairly large spread across multiple countries and timezones. I help mentor junior developers, set coding standards, enhance processes, set timeline expectations, review code, and engage in system-wide technical discussions. I even work with other technical leads and architects to help define and design the system that my current project is part of.";

const aboutTextSecondary =
  "I enjoy doing mobile and front end work, but at the same time, I dabble in learning about backend technologies. This website is significantly over-engineered so that I can play around with different backend technologies and DevOps things. I enjoy learning different languages, different stacks, and different ways of doing the same thing. It's fun just to explore what is out there.";

const About = () => {
  return (
    <Segment basic style={{ margin: ".5em" }}>
      <Header size="medium">About</Header>
      <p>{aboutText}</p>
      <p>{aboutTextSecondary}</p>
    </Segment>
  );
};

export default About;
