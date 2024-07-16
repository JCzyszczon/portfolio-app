"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id='projects'
      className='lg:w-full h-full w-[96%] max-w-5xl flex flex-col sm:gap-12 gap-8 sm:py-32 py-20 px-2 relative border-b-2 border-borderColor justify-center items-center'
    >
      <span className='absolute w-[200px] aspect-square z-[-1] rounded-full -translate-x-1/2 left-1/2 top-1/2 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <section
        ref={ref}
        className='sm:w-[80%] w-full flex flex-col justify-start items-start sm:gap-6 gap-3'
      >
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.25, ease: "easeInOut" }}
          className='heroSectionTitle font-bold leading-[1.3] projects w-full sm:text-start text-center'
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeInOut" }}
          className='heroSectionParagraph sm:text-start text-center'
        >
          From building scalable web applications to crafting intuitive user
          interfaces, each project reflects my commitment to excellence and
          continuous improvement.
          <span className='sm:inline hidden'>
            Throughout my career, I&apos;ve engaged in diverse projects that
            showcase my passion for innovation and problem-solving.
          </span>
        </motion.p>
      </section>
    </section>
  );
}

export default Projects;
