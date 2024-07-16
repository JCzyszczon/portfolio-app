"use client";
import React, { useEffect, useRef } from "react";
import {
  FaPeopleGroup,
  FaReact,
  FaLaptop,
  FaLayerGroup,
  FaDocker,
  FaJenkins,
  FaGit,
  FaPlay,
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

const CardsContainer = () => {
  const cardsRef = useRef(null);

  // TODO: Przeniesc "data" do innego pliku, zeby nie zasmiecac komponentu, zmniejszyc rozmiar kart gdy jest < 640px

  const data = [
    {
      title: "Frontend skills",
      description: "HTML, CSS, JavaScript",
      mainIcon: [
        <FaHtml5 className='text-4xl opacity-75' key='1' />,
        <FaCss3Alt className='text-4xl opacity-75' key='2' />,
        <FaJsSquare className='text-4xl opacity-75' key='3' />,
      ],
      sideIcon: <FaCode className='text-2xl' />,
    },
    {
      title: "Frameworks",
      description: "Next, React, Tailwind",
      mainIcon: [
        <FaReact className='text-4xl opacity-75' key='4' />,
        <SiNextdotjs className='text-4xl opacity-75' key='5' />,
        <SiTailwindcss className='text-4xl opacity-75' key='6' />,
      ],
      sideIcon: <FaLaptop className='text-2xl' />,
    },
    {
      title: "Animations",
      description: "Framer Motion",
      mainIcon: [<SiFramer className='text-4xl opacity-75' key='7' />],
      sideIcon: <FaLayerGroup className='text-2xl' />,
    },
    {
      title: "Database",
      description: "MySQL, Supabase",
      mainIcon: [
        <SiMysql className='text-4xl opacity-75' key='8' />,
        <SiSupabase className='text-4xl opacity-75' key='9' />,
      ],
      sideIcon: <HiDatabase className='text-2xl' />,
    },
    {
      title: "Automation tools",
      description: "Docker, Jenkins, Git",
      mainIcon: [
        <FaDocker className='text-4xl opacity-75' key='10' />,
        <FaJenkins className='text-4xl opacity-75' key='11' />,
        <FaGit className='text-4xl opacity-75' key='12' />,
      ],
      sideIcon: <IoPlay className='text-2xl' />,
    },
    {
      title: "And many more..",
      description: "Java, C++, etc..",
      mainIcon: [<CiCircleMore className='text-4xl opacity-75' key='13' />],
      sideIcon: <IoMdMore className='text-2xl' />,
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardsRef.current) {
        const cards = cardsRef.current.getElementsByClassName("card");
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section id='cards' ref={cardsRef}>
      {data.map((item, index) => (
        <article className='card drop-shadow-md' key={index}>
          <div className='card-content'>
            <span className='absolute left-1/2 top-1/3 -translate-x-1/2 flex gap-4'>
              {item.mainIcon.map((icon, iconIndex) => (
                <React.Fragment key={iconIndex}>{icon}</React.Fragment>
              ))}
            </span>
            <section className='w-full flex justify-between items-center gap-4'>
              {item.sideIcon}
              <div className='w-full flex flex-col justify-center items-start gap-[2px]'>
                <h3 className='text-lg font-semibold'>{item.title}</h3>
                <p className='text-sm text-cardsText'>{item.description}</p>
              </div>
            </section>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardsContainer;
