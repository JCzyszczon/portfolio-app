import { IoBuild } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";

import CpmLanding from "../img/cpm-calculator/dark-mode-desktop.png";
import MauveLanding from "../img/mauve-beauty/mauve_logo_transparent.png";
import WeatherLanding from "../img/weather-app/landing-page-desktop.png";

const projectsData = [
  {
    title: "CPM Calculator",
    description:
      "The Critical Path Method Calculator is a web application designed to identify the critical path in project management. Users provide event information and durations, based on which the application generates a diagram and schedule. This tool helps project managers to optimize timelines, ensuring efficient and timely project completion.",
    subtitle:
      "Web application designed to calculate critical path in project management.",
    mainImage: CpmLanding,
  },
  {
    title: "Mauve Beauty",
    description:
      "Mauve Beauty is a web application showcasing a company's offerings in the beauty industry. All data, files, and images are stored on the Supabase platform. Administrators can log into a dedicated panel from a subpage, allowing them to freely edit, delete, or add new content.",
    subtitle:
      "Fullstack application showcasing a company's offers in the beauty industry.",
    mainImage: MauveLanding,
  },
  {
    title: "Weather App",
    subtitle: "Web appliaction that uses OpenWeatherMap API.",
    mainImage: WeatherLanding,
  },
  {
    title: "In progress",
    description: "Future project",
    mainIcon: <IoBuild className='text-6xl sm:opacity-25 opacity-10' />,
  },
  {
    title: "In progress",
    description: "Future project",
    mainIcon: <IoBuild className='text-6xl sm:opacity-25 opacity-10' />,
  },
  {
    title: "More projects",
    description: "Click here to see all",
    mainIcon: (
      <CiCircleMore className='text-6xl opacity-1 p-1 rounded-full popupGradient box-content opacity-90' />
    ),
  },
];

export default projectsData;
