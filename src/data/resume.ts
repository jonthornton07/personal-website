export interface PositionModel {
  title: string;
  timeframe: string;
}

export interface WorkModel {
  timeframe: string;
  companyName: string;
  location: string;
  titles: Array<PositionModel>;
  logo: string;
  logoAlt: string;
  highlights: string[];
}

const norc: WorkModel = {
  timeframe: "May 2011 - October 2012",
  companyName: "NORC",
  location: "Chicago, IL",
  titles: [
    {
      title: "Programmer 1",
      timeframe: "May 2011 - October 2012",
    },
  ],
  logo: "norc.jpg",
  logoAlt: "Image showing the NORC Logo",
  highlights: [
    "Led a small team of programmers.",
    "Worked with external departments to define and document business requirements.",
    "Designed and implemented components for a web based CMS.",
    "Designed and implemented major components for an Android CMS.",
    "Proposed a solution that automated a repetitive task that will greatly reduce costs.",
  ],
};

const solstice: WorkModel = {
  timeframe: "October 20121 - August 2015",
  companyName: "Solstice Kin + Carta",
  location: "Chicago, IL",
  titles: [
    {
      title: "Senior Technical Consultant",
      timeframe: "October 20121 - August 2015",
    },
  ],
  logo: "solstice.jpg",
  logoAlt: "Image showing the Cox Media Group Logo",
  highlights: [
    "Converted a hybrid mobile application into white labeled Android and iOS applications.",
    "Responsible for maintaining and implementing new features for both Android and iOS.",
    "Worked directly with Product Owners to create solutions for the business.",
    "Setup and maintained continuous integration for the applications.",
    "Prepared and uploaded App Store builds for both Android and iOS.",
    "Worked with Quality Assurance to improve processes to increase team efficiency.",
    "Participated and led agile ceremonies.",
  ],
};

const coxMediaGroup: WorkModel = {
  timeframe: "August 2015 – May 2017",
  companyName: "Cox Media Group",
  location: "Atlanta, GA",
  titles: [
    {
      title: "Senior Mobile Application Developer",
      timeframe: "August 2015 – May 2017",
    },
  ],
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
};

const coke: WorkModel = {
  timeframe: "February 2019 - May 2019",
  companyName: "Coca-Cola",
  location: "Atlanta, GA",
  titles: [
    {
      title: "Solutions Architect III",
      timeframe: "February 2019 - May 2019",
    },
  ],
  logo: "coke.png",
  logoAlt: "Image showing the Coca Cola Logo",
  highlights: [
    "Coordinating multiple vendors to deliver a product.",
    "Leading an initiative to improve processes and standards.",
    "Mentoring lead developers to help empower their teams.",
    "Updating coding standards.",
    "Identifying multiple improvements for multiple internal SDKs.",
  ],
};

const ncrPartOne: WorkModel = {
  timeframe: "May 2017 – February 2019",
  companyName: "NCR",
  location: "Atlanta, GA",
  titles: [
    {
      title: "Software Engineer III",
      timeframe: "May 2017 – February 2019",
    },
  ],
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
  titles: [
    {
      title: "Software Engineer III",
      timeframe: "May 2019 - December 2020",
    },
  ],
  logo: "ncr.png",
  logoAlt: "Image showing the NCR Logo",
  highlights: [
    "Led developer of 30+ developers.",
    "Provide high level estimates for new features.",
    "Worked on creating timelines for releases.",
    "Worked on POCs for various components",
    "Conducted code reviews and new developer onboarding.",
    "Participated in live troubleshooting at support at product launch.",
  ],
};

const ncrManager: WorkModel = {
  timeframe: "December 2020 - January 2021",
  companyName: "NCR",
  location: "Atlanta, GA",
  titles: [
    {
      title: "Software Engineering Manager",
      timeframe: "December 2020 - January 2021",
    },
  ],
  logo: "ncr.png",
  logoAlt: "Image showing the NCR Logo",
  highlights: [
    "Conducted yearly reviews for 15+ developers.",
    "conducted one on ones with developers to keep a constant feedback cycle.",
    "Managed multiple developers across multiple teams.",
    "Participated in constant improvement around the SDLC process.",
    "Worked with team members to constantly make their jobs more efficient.",
    "Participated in managing release scheduled for a project.",
  ],
};

const lifebellAi: WorkModel = {
  timeframe: "February 2021 - March 2022",
  companyName: "LifeBell AI",
  location: "Atlanta, GA (Remote)",
  titles: [
    {
      title: "Software Engineer",
      timeframe: "February 2021 - March 2022",
    },
  ],
  logo: "lifebell.jpg",
  logoAlt: "Image showing the LifeBell AI Logo",
  highlights: [
    "Created Android POC application integrating with multiple BLE sensors.",
    "Developed C# APIs for understanding the health of multiple application.",
    "Designed database schema sensor data on both Android and Cloud environments.",
    "Worked on a patient monitoring dashboard written in Angular.",
    "Migrated existing React application to Angular.",
    "Built an authorization and authentication server utilzing IdentityServer4 and C#.",
    "Built a health monitoring framework to be used with AWS ECS for autoscaling.",
  ],
};

const tovala: WorkModel = {
  timeframe: "April 2022 - Current",
  companyName: "Tovala",
  location: "Chicago, IL (Remote)",
  titles: [
    {
      title: "Director of Software Engineering",
      timeframe: "Jan 2023 - Present",
    },
    {
      title: "Software Engineering Manager",
      timeframe: "April 2022 - Jan 2023",
    },
  ],
  logo: "tovala.png",
  logoAlt: "Image showing Tovala logo",
  highlights: [
    "Managed an Android, iOS and web team that focused on subscriber facing features.",
    "Proposed and implemented Tovala Marketplace, a profitable startup inside of a startup.",
    "Collaborated with cross functional leaders to build cross functional processes.",
    "Lead and participate in technical discussions to drive consensus and direction.",
    "Managed strategy and expectations for the teams.",
    "Hired team members and managed job descriptions.",
  ],
};

export const resumeData = [
  tovala,
  lifebellAi,
  ncrManager,
  ncrSoftwareEngineer,
  coke,
  ncrPartOne,
  coxMediaGroup,
  solstice,
  norc,
];
