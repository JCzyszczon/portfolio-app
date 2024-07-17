import { FaLaptop, FaLayerGroup, FaDocker, FaCode } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { SiFramer, SiNextdotjs, SiSupabase } from "react-icons/si";
import { HiDatabase } from "react-icons/hi";
import { IoPlay } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import { IoMdMore } from "react-icons/io";

const skillsData = [
  {
    title: "Frontend skills",
    description: "HTML, CSS, JavaScript",
    mainIcon: <FaJsSquare className='text-6xl  sm:opacity-25 opacity-10' />,

    sideIcon: <FaCode className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Frameworks",
    description: "Next, React, Tailwind",
    mainIcon: <SiNextdotjs className='text-6xl  sm:opacity-25 opacity-10' />,

    sideIcon: <FaLaptop className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Animations",
    description: "Framer Motion",
    mainIcon: (
      <SiFramer className='sm:text-6xl text-6xl sm:opacity-25 opacity-10' />
    ),
    sideIcon: <FaLayerGroup className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Database",
    description: "MySQL, Supabase",
    mainIcon: <SiSupabase className='text-6xl sm:opacity-25 opacity-10' />,
    sideIcon: <HiDatabase className='text-2xl sm:flex hidden' />,
  },
  {
    title: "Automation tools",
    description: "Docker, Jenkins, Git",
    mainIcon: <FaDocker className='text-6xl sm:opacity-25 opacity-10' />,
    sideIcon: <IoPlay className='text-2xl sm:flex hidden' />,
  },
  {
    title: "And many more..",
    description: "Java, C++, etc..",
    mainIcon: <CiCircleMore className='text-6xl sm:opacity-25 opacity-10' />,
    sideIcon: <IoMdMore className='text-2xl sm:flex hidden' />,
  },
];

export default skillsData;
