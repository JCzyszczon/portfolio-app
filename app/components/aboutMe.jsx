"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import BannerPhoto from "../img/about-image.webp";
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
        <AnimatePresence>
          {activeSection === "Soft Skills" && <SoftSkills key='soft-skills' />}
          {activeSection === "Education" && <Education key='education' />}
          {activeSection === "Interests" && <Interests key='interests' />}
        </AnimatePresence>
        <Image
          src={BannerPhoto}
          alt='Banner Photo'
          quality={100}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
          className='h-full sm:w-auto w-full rounded-xl object-cover sm:max-h-full max-h-[400px]'
        />
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
          className='heroSectionParagraph text-justify'
        >
          I am a third-year student of Computer Science in Engineering at the
          AGH University of Science and Technology in Kraków. I am looking for
          my first professional experience in the IT industry. I would like to
          evolve as a Frontend developer, however I am also interested in server
          communication and databases.
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
