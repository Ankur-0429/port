import RecyleMeImg from "@/public/RecycleMeAndroid.png";
import RemediaImg from "@/public/Remedia.png";
import SlugSwapImg from "@/public/SlugSwap.png";

export const links = [
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Development Capstone · Nutanix",
    link: "https://www.nutanix.com",
    description:
      "Engineered an advanced data visualization system for Nutanix, harnessing over two years of extensive test data. Organized thousands of JSON files into a PostgreSQL database, automated deployment using Docker, and created backup and restore processes. Designed a test sharing functionality, allowing users to easily disseminate test results through direct links.",
    date: "APR - JUN 2024",
    ariaLabelDate: "April to June 2024",
    ariaLabelTitle:
      "Software Development Capstone at Nutanix (opens in a new tab)",
    tags: ["React", "PostgreSQL", "Typescript", "Javascript", "HTML", "CSS"],
  },
  {
    title: "Research Assistant · University of California",
    link: "https://litinghu.github.io/",
    description:
      "Developed a web socket server using Spring Boot and Pub/Sub architecture, enabling users to join chat rooms, resulting in an average latency of 200ms. Implemented a logistic regression-based ranking algorithm to prioritize questions answered incorrectly by users. Maintained the codebase with Jest, React testing library, and test driven development (TDD).",
    date: "SEP - DEC 2023",
    ariaLabelDate: "September to December 2023",
    ariaLabelTitle:
      "Research Assistant at the University of California (opens in a new tab)",
    tags: [
      "React Native",
      "Firebase",
      "Springboot",
      "Javascript",
      "Typescript",
      "Microservice",
    ],
  },
  {
    title: "SWE Intern · Lockheed Martin",
    link: "https://litinghu.github.io/",
    description:
      "Collaborated with engineers and product managers during daily scrum meetings, story pointing, and code reviews. Conducted system testing using SonarQube to identify exposed API keys, poor coding practices, and security vulnerabilities. Implemented an automated email reporting system to alert the team of severe issues. Streamlined CI/CD pipeline to build, test, and deploy five repositories using Docker and Gitlab, reducing deployment time by 30%.",
    date: "JUN 2021 - DEC 2022",
    ariaLabelDate: "June 2021 to December 2022",
    ariaLabelTitle:
      "Software Development Engineering Intern at Lockheed Martin",
    tags: ["Angular", "Springboot", "Kubernetes", "Docker", "Helm", "CI/CD"],
  },
] as const;

export const projectsData = [
  {
    title: "RecycleMe",
    description:
      "Programmed a mobile application in Python and React Native that determines the recyclability of an item based on a picture taken by a client. Developed an image-based ML model that segments and categorizes items by image with a 63% accuracy using the TACO dataset. Created a CI/CD pipeline to automatically push new features to our backend system with Google cloud run.",
    link: "https://github.com/Solutions-Challenge/Green-day-frontend",
    ariaLabelTitle: "RecycleMe Project (opens in new tab)",
    tags: [
      "React Native",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Python",
      "Flask",
      "Firebase",
    ],
    imageUrl: RecyleMeImg,
  },
  {
    title: "ReMedia",
    description:
      "Designed a mobile application that informs clients on when to use a certain drug based on the image taken, winning second place out of 46 teams for health-based software. Created a web scraper in python to extract relevant data from over 6,000 drugs and provide a detailed description of the use case of the drug and its side effects. Implemented Google’s text detection API to extract the name of a drug from an image of a prescription bottle",
    link: "https://devpost.com/software/cruzhacks-2022-9suva2",
    ariaLabelTitle: "Remedia Project (opens in new tab)",
    tags: ["Typescript", "React Native", "Javascript", "Beautiful Soup"],
    imageUrl: RemediaImg,
  },
  {
    title: "SlugSwap",
    description:
      "Achieved first place out of 87 teams for UX/UI design, designing a React Native food-delivery app that allows college students to donate surplus food. Implemented static analysis with ESLint, state management with Jotai, authentication with Firebase, and consistent UI with Nativebase. Conducted user testing with four clients over two days, resulting in the identification of three usability issues each unit tested",
    link: "https://devpost.com/software/slug-swap-g1uz0s",
    ariaLabelTitle: "SlugSwap Project (opens in new tab)",
    tags: ["Typescript", "React Native", "Firebase"],
    imageUrl: SlugSwapImg
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
