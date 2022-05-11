import BlogItem from "./BlogItem";

const personalWebsite: BlogItem = {
    title: "Personal Website",
    description:
        "How I build my personal website. Take a look at the cool things I am trying to do.",
    tags: ["React", "JS", "Semantic UI"],
};

const random: BlogItem = {
    title: "Random Technical Items",
    description:
        "Cool little reandom topics that I have decided would be fun to explore.",
    tags: [],
};

export const blogs = [personalWebsite, random];
