import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import RecyleMeImg from "@/public/RecycleMeAndroid.png";
import WaypointImg from "@/public/WayPointIOS.png";

export const links = [
  {
    name: "About",
    hash: "#about",
  },
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
    ariaLabelTitle: "Software Development Engineering Intern at Lockheed Martin",
    tags: [
      "Angular",
      "Springboot",
      "Kubernetes",
      "Docker",
      "Helm",
      "CI/CD",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Waypoint",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: WaypointImg,
  },
  {
    title: "RecycleMe",
    description: "",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: RecyleMeImg,
  },
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
