import { delay } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDocker,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiSupabase,
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";

const icons = [
  { icon: FaCss3Alt, color: "#4b87f3", gradient: "css-gradient", delay: 0.95 },
  { icon: FaHtml5, color: "#f06529", gradient: "html-gradient", delay: 1.15 },
  { icon: FaReact, color: "#61DBFB", gradient: "react-gradient", delay: 1 },
  { icon: FaJsSquare, color: "#d0b92d", gradient: "js-gradient", delay: 1.4 },
  {
    icon: SiSupabase,
    color: "#3bd191",
    gradient: "supabase-gradient",
    delay: 1.55,
  },
  {
    icon: SiNextdotjs,
    color: "var(--text-color)",
    gradient: "nextjs-gradient",
    delay: 1.2,
  },
  {
    icon: SiFramer,
    color: "#bb4b96",
    gradient: "framer-motion-gradient",
    delay: 1.1,
  },
  { icon: FaDocker, color: "#0db7ed", gradient: "docker-gradient", delay: 1.6 },
  {
    icon: SiTailwindcss,
    color: "#38bdf8",
    gradient: "docker-gradient",
    delay: 1.5,
  },
  { icon: FaGitAlt, color: "#f34f29", gradient: "git-gradient", delay: 1.65 },
  {
    icon: FaGithub,
    color: "var(--text-color)",
    gradient: "github-gradient",
    delay: 1.1,
  },
  {
    icon: SiMongodb,
    color: "#4DB33D",
    gradient: "mongodb-gradient",
    delay: 0.95,
  },
];

export default icons;
