const aboutText =
  "Hey there! I am currently a Software Engineering Manager at Tovala. " +
  "Currently, I am managing a team of mobile and web developers working on Tovala's subscriber facing and internal applications. " +
  "This ranges from working on ordering to cooking meals to internal tooling such as the ability for our chefs to create world class meals. ";
("Tovala is a startup focusing on simplifying meal time by making world class meals in 20 mins or less with little to no effort involved. ");

const aboutTextSecondary =
  "I enjoy doing mobile and front end work, but at the same time, I dabble in learning about backend technologies. " +
  "This website is significantly over-engineered so that I can play around with different backend technologies and DevOps things. " +
  "I enjoy learning different languages, different stacks, and different ways of doing the same thing. " +
  "It's fun just to explore what is out there.";

const About = () => {
  return (
    <div className="mx-7 mt-7">
      <p className="text-2xl leading-7 text-gray-900 font-sans antialiased font-medium">
        About
      </p>
      <br></br>
      <p className="text-base leading-7 text-gray-900 font-sans antialiased">
        {aboutText} {aboutTextSecondary}
      </p>
    </div>
  );
};

export default About;
