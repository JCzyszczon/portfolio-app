"use client";
import Image from "next/image";
import React, { useState } from "react";
import BannerPhoto from "../img/about-image.webp";
import StandardButton from "./standardButton";
import SoftSkills from "./softSkills";
import Education from "./education";
import Interests from "./interests";
import { AnimatePresence, motion } from "framer-motion";

function AboutMe() {
  const [activeSection, setActiveSection] = useState(null);
  const [previousSection, setPreviousSection] = useState(null);

  const handleButtonClick = (section) => {
    setPreviousSection(activeSection);
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case "Soft Skills":
        return <SoftSkills />;
      case "Education":
        return <Education />;
      case "Interests":
        return <Interests />;
      default:
        return <></>;
    }
  };

  return (
    <section
      id='aboutMe'
      className='lg:w-full h-full w-[96%] max-w-5xl flex sm:flex-row flex-col-reverse gap-10 py-24 px-2'
    >
      <section className='w-full flex justify-center items-center relative overflow-hidden'>
        <AnimatePresence>
          {activeSection === "Soft Skills" && <SoftSkills key='soft-skills' />}
          {activeSection === "Education" && <Education key='education' />}
          {activeSection === "Interests" && <Interests key='interests' />}
        </AnimatePresence>
        <Image src={BannerPhoto} className='h-full w-auto rounded-xl' />
      </section>
      <section className='w-full flex flex-col gap-6 justify-start items-start'>
        <h2 className='heroSectionTitle font-bold leading-[1.3] aboutMe w-full sm:text-start text-center'>
          About me
        </h2>
        <p className='heroSectionParagraph text-justify'>
          I am a third-year student of Computer Science in Engineering at the
          AGH University of Science and Technology in Kraków. I am looking for
          my first professional experience in the IT industry. I would like to
          evolve as a Frontend developer, however I am also interested in server
          communication and databases.
        </p>
        <section className='w-full flex justify-evenly items-center flex-wrap text-sm gap-2'>
          <StandardButton
            title='Soft Skills'
            onClick={() => handleButtonClick("Soft Skills")}
            isActive={activeSection === "Soft Skills"}
          >
            Soft skills
          </StandardButton>
          <StandardButton
            title='Education'
            onClick={() => handleButtonClick("Education")}
            isActive={activeSection === "Education"}
          >
            Education
          </StandardButton>
          <StandardButton
            title='Interests'
            onClick={() => handleButtonClick("Interests")}
            isActive={activeSection === "Interests"}
          >
            Interests
          </StandardButton>
        </section>
      </section>
    </section>
  );
}

export default AboutMe;
