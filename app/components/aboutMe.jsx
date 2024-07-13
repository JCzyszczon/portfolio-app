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

  const handleButtonClick = (section) => {
    setActiveSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  return (
    <section
      id='aboutMe'
      className='lg:w-full h-full w-[96%] max-w-5xl flex sm:flex-row flex-col-reverse gap-10 sm:py-32 py-20 px-2 relative border-b-2 border-borderColor'
    >
      <span className='absolute w-[200px] aspect-square z-[-1] rounded-full -left-12 top-1/3 blobGradient blur-[160px]'></span>
      <section className='w-full flex justify-center items-center relative overflow-hidden'>
        <AnimatePresence>
          {activeSection === "Soft Skills" && <SoftSkills key='soft-skills' />}
          {activeSection === "Education" && <Education key='education' />}
          {activeSection === "Interests" && <Interests key='interests' />}
        </AnimatePresence>
        <Image
          src={BannerPhoto}
          alt='Banner Photo'
          quality={100}
          className='h-full sm:w-auto w-full rounded-xl object-cover sm:max-h-full max-h-[400px]'
        />
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
        <section className='w-full flex justify-evenly items-center flex-wrap text-sm gap-2 mt-4'>
          <StandardButton
            title={
              activeSection == "Soft Skills" ? "Close Panel" : "Open Panel"
            }
            onClick={() => handleButtonClick("Soft Skills")}
            isActive={activeSection === "Soft Skills"}
          >
            Soft skills
          </StandardButton>
          <StandardButton
            title={activeSection == "Education" ? "Close Panel" : "Open Panel"}
            onClick={() => handleButtonClick("Education")}
            isActive={activeSection === "Education"}
          >
            Education
          </StandardButton>
          <StandardButton
            title={activeSection == "Interests" ? "Close Panel" : "Open Panel"}
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
