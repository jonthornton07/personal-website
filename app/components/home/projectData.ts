import type { ProjectViewModel } from "../base/projectCard/ProjectCard"

const alohaUI: ProjectViewModel = {
    header: "Point of Sale",
    meta: "Architect: React Native",
    description:
        "Mobile application designed to work as an in store point of sale.",
    logo: "ncr.png",
    logoAlt: "NCR logo"
};

const engageMobile: ProjectViewModel = {
    header: "Mobile Ordering Mobile App",
    meta: "Lead Developer: Native Android & iOS",
    description: "White-label (30+) online ordering application.",
    logo: "ncr.png",
    logoAlt: "NCR logo"
};

const newspapers: ProjectViewModel = {
    header: "Newspaper Mobile App",
    meta: "Developer: Native Android & iOS",
    description: "White-label mobile application to deliver news articles",
    logo: "cmg.png",
    logoAlt: "Cox Media Group logo"
};

const financial: ProjectViewModel = {
    header: "Financial Institution",
    meta: "Lead Developer: Native Android & iOS",
    description: "Mobile banking application for a fortune 500 company.",
    logo: "solstice.svg",
    logoAlt: "Solstice Kin + Karta Logo"
}

export const projectData = [alohaUI, engageMobile, newspapers, financial];
