import type { WorkModel } from "./WorkModel";

const coxMediaGroup: WorkModel = {
    timeframe: "August 2015 – May 2017",
    companyName: "Cox Media Group",
    location: "Atlanta, GA",
    title: "Senior Mobile Application Developer",
    logo: "cmg.png",
    logoAlt: "Image showing the Cox Media Group Logo",
    highlights: [
        "Converted a hybrid mobile application into 2 native applications.",
        "Worked directly with Product Owners to create solutions.",
        "Setup and maintained a continuous integration environment.",
        "Released applications to the App Store and the Play Store.",
        "Created solutions across multiple disciplines.",
        "Participated in agile ceremonies.",
    ],
}

const coke: WorkModel = {
    timeframe: "February 2019 - May 2019",
    companyName: "Coca-Cola",
    location: "Atlanta, GA",
    title: "Solutions Architect III",
    logo: "coke.png",
    logoAlt: "Image showing the Coca Cola Logo",
    highlights: [
        "Coordinating multiple vendors to deliver a product.",
        "Leading an initiative to improve processes and standards.",
        "Mentoring lead developers to help empower their teams.",
        "Updating coding standards.",
        "Identifying multiple improvements for multiple internal SDKs.",
    ],
}

const ncrPartOne: WorkModel = {
    timeframe: "May 2017 – February 2019",
    companyName: "NCR",
    location: "Atlanta, GA",
    title: "Software Engineer III",
    logo: "ncr.png",
    logoAlt: "Image showing the NCR Logo",
    highlights: [
        "Lead a team of 9 mobile developers.",
        "Lead agile ceremonies.",
        "Released applications to the App Store and the Play Store.",
        "Managed development lifecycle and processes.",
        "Architected a white-label product used by over 30 restaurants.",
    ],
};

const ncrSoftwareEngineer = {
    timeframe: "May 2019 - December 2020",
    companyName: "NCR",
    location: "Atlanta, GA",
    title: "Software Engineer III",
    logo: "ncr.png",
    logoAlt: "Image showing the NCR Logo",
    highlights: [
        "Led developer of 30+ developers.",
        "Provide high level estimates for new features.",
        "Worked on creating timelines for releases.",
        "Worked on POCs for various components",
        "Conducted code reviews and new developer onboarding.",
        "Participated in live troubleshooting at support at product launch."
    ],
}

const ncrManager: WorkModel = {
    timeframe: "December 2020 - January 2021",
    companyName: "NCR",
    location: "Atlanta, GA",
    title: "Software Engineering Manager",
    logo: "ncr.png",
    logoAlt: "Image showing the NCR Logo",
    highlights: [
        "Conducted yearly reviews for 15+ developers.",
        "conducted one on ones with developers to keep a constant feedback cycle.",
        "Managed multiple developers across multiple teams.",
        "Participated in constant improvement around the SDLC process.",
        "Worked with team members to constantly make their jobs more efficient.",
        "Participated in managing release scheduled for a project."
    ],
}

const lifebellAi: WorkModel = {
    timeframe: "February 2021 - Current",
    companyName: "LifeBell AI",
    location: "Atlanta, GA (Remote)",
    title: "Software Engineer",
    logo: "lifebell.jpg",
    logoAlt: "Image showing the LifeBell AI Logo",
    highlights: [
        "Creating Android POCS for mobile and hardware integration.",
        "Developed C# APIs for understanding the health of multiple application."
    ],
}

export const data = [lifebellAi, ncrManager, ncrSoftwareEngineer, coke, ncrPartOne, coxMediaGroup]
