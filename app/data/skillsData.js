import {
  FaReact,
  FaLaptop,
  FaLayerGroup,
  FaDocker,
  FaJenkins,
  FaGit,
  FaCode,
} from "react-icons/fa6";
import { FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";
import {
  SiFramer,
  SiMysql,
  SiNextdotjs,
  SiSupabase,
  SiTailwindcss,
} from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { IoPlay } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const skillsData = [
  {
    title: "Frontend skills",
    description: "HTML, CSS, JavaScript",
    mainIcon: [
      <FaHtml5
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='1'
      />,
      <FaCss3Alt
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='2'
      />,
      <FaJsSquare
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='3'
      />,
    ],
    sideIcon: <FaCode className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Frameworks",
    description: "Next, React, Tailwind",
    mainIcon: [
      <FaReact
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='4'
      />,
      <SiNextdotjs
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='5'
      />,
      <SiTailwindcss
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='6'
      />,
    ],
    sideIcon: <FaLaptop className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Animations",
    description: "Framer Motion",
    mainIcon: [
      <SiFramer
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='7'
      />,
    ],
    sideIcon: <FaLayerGroup className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Database",
    description: "MySQL, Supabase",
    mainIcon: [
      <SiMysql
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='8'
      />,
      <SiSupabase
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='9'
      />,
    ],
    sideIcon: <HiDatabase className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Automation tools",
    description: "Docker, Jenkins, Git",
    mainIcon: [
      <FaDocker
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='10'
      />,
      <FaJenkins
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='11'
      />,
      <FaGit
        className='sm:text-4xl text-6xl sm:flex hidden sm:opacity-75 opacity-10'
        key='12'
      />,
    ],
    sideIcon: <IoPlay className='text-2xl sm:flex hidden' />,
  },
  {
    title: "And many more..",
    description: "Java, C++, etc..",
    mainIcon: [
      <CiCircleMore
        className='sm:text-4xl text-6xl sm:opacity-75 opacity-10'
        key='13'
      />,
    ],
    sideIcon: <IoMdMore className='text-2xl sm:flex hidden' />,
  },
];

export default skillsData;
