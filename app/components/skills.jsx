"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CardsContainer from "./cardsContainer";
import skillsData from "../data/skillsData";

function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id='skills'
      className='lg:w-full h-full w-[96%] max-w-5xl flex flex-col sm:gap-12 gap-10 sm:py-32 py-20 px-2 relative border-b-2 border-borderColor justify-center items-center'
    >
      <span className='absolute w-[200px] aspect-square z-[100] pointer-events-none rounded-full -translate-x-1/2 left-1/2 top-1/2 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <section
        ref={ref}
        className='sm:w-[80%] w-full flex flex-col justify-start items-start sm:gap-6 gap-3'
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25, ease: "easeInOut" }}
          className='heroSectionTitle font-bold leading-[1.3] skills w-full sm:text-start text-center'
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
          className='heroSectionParagraph sm:text-start text-center '
        >
          During my journey, I&apos;ve immersed myself in learning and mastering
          new technologies, both academically and independently.
          <span className='sm:inline hidden'>
            This has enabled me to develop high-quality applications with rich
            functionality and elegant design. Every project is an opportunity
            for me to learn and discover new things.
          </span>
        </motion.p>
      </section>
      <CardsContainer data={skillsData} />
    </section>
  );
}

export default Skills;
