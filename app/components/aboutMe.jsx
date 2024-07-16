"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import LogoGradient from "../img/logo-gradient.png";
import StandardButton from "./standardButton";
import SoftSkills from "./softSkills";
import Education from "./education";
import Interests from "./interests";
import { AnimatePresence, motion, useInView } from "framer-motion";

function AboutMe() {
  const [activeSection, setActiveSection] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      <span className='absolute w-[200px] aspect-square z-[-1] rounded-full -left-12 top-1/3 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <section
        ref={ref}
        className='w-full flex justify-center items-center relative overflow-hidden rounded-xl'
      >
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6, ease: "easeInOut" }}
          className='w-full sm:aspect-[95/100] aspect-[10/5] sm:min-h-[420px] min-h-[370px] rounded-2xl itemStyles flex flex-col justify-end items-center overflow-hidden relative'
        >
          <AnimatePresence>
            {activeSection === "Soft Skills" && (
              <SoftSkills key='soft-skills' />
            )}
            {activeSection === "Education" && <Education key='education' />}
            {activeSection === "Interests" && <Interests key='interests' />}
          </AnimatePresence>
          <Image
            src={LogoGradient}
            alt='Logo Gradient'
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square w-[80%] max-w-[250px]'
          />
          <span className='absolute w-[140px] aspect-square z-[12] rounded-full bottom-0 right-0 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
        </motion.section>
      </section>
      <section
        ref={ref}
        className='w-full flex flex-col gap-6 justify-start items-start'
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25, ease: "easeInOut" }}
          className='heroSectionTitle font-bold leading-[1.3] aboutMe w-full sm:text-start text-center'
        >
          About me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
          className='heroSectionParagraph sm:text-start text-center'
        >
          <span className='sm:inline hidden'>
            I am a student of Computer Science in Engineering at the AGH in
            Kraków.
          </span>{" "}
          I am passionate about Frontend technologies and enjoy creating
          intuitive and beautiful user experiences.{" "}
          <span className='sm:inline hidden'>
            I am always eager to learn and collaborate on innovative projects
            that make a positive impact.
          </span>
        </motion.p>
        <motion.section
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.55, ease: "easeInOut" }}
          className='w-full flex justify-evenly items-center flex-wrap text-sm gap-2 mt-4'
        >
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
        </motion.section>
      </section>
    </section>
  );
}

export default AboutMe;
