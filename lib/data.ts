import React from "react";
import { LuGraduationCap, LuBrainCircuit, LuEdit } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import zeldaImg from "@/public/zelda.png"
import kryptImg from "@/public/krypt.png"
import wordanalyticsImg from "@/public/wordanalytics.png";
import authenImg from "@/public/authenticator.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Intro to AI Teacher Assistant",
    location: "Columbus, OH",
    description:
      "Worked for a lecturer to return course work and also helped students understand course material in office hours.",
    icon: React.createElement(LuEdit),
    date: "Fall 2022",
  },
  {
    title: "Buckeye AutoDrive Team",
    location: "Columbus, OH",
    description:
      "Worked on a sub-team with 10 other students with the goal to develop and demonstrate a Standard Level 4 autonomous vehicle.",
    icon: React.createElement(LuBrainCircuit),
    date: "Fall 2022",
  },
  {
    title: "Graduated College",
    location: "Columbus, OH",
    description:
      "I have now graduated from The Ohio State Engineering and am looking for my first full time position.",
    icon: React.createElement(LuGraduationCap),
    date: "August 2023",
  },
] as const;

export const projectsData = [
  {
    title: "The Legend of Zelda Remake",
    description:
      "Worked with 5 other students to recreate a retro game with some additional features.",
    tags: ["C#", "Level Generation", "Loot Drops", "Weapon Swapping", "Additional Weapons"],
    imageUrl: zeldaImg,
  },
  {
    title: "Krypt",
    description:
      "Krypt is a Web 3.0 app that is connected to the blockchain, has Metamask pairing, and has interaction with smart contracts.",
    tags: ["React", "Blockchain", "Solidity", "Web 3.0", "Metamask"],
    imageUrl: kryptImg,
  },
  {
    title: "Authenticator",
    description:
      "A full-stack authentication app developed with the MERN Stack.",
    tags: ["React", "Node.js", "Express.js", "MongoDB"],
    imageUrl: authenImg,
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
  "Express.js",
  "MongoDB",
  "Python",
  "C#",
  "C",
  "C++",
  "Pytorch",
  "Sklearn",
  "Solidity",
  "Framer Motion",
  "Blockchain",
] as const;