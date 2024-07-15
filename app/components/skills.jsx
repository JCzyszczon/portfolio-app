"use client";
import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import CardsContainer from "./cardsContainer";

function Skills() {
  return (
    <section
      id='skills'
      className='lg:w-full h-full w-[96%] max-w-5xl flex flex-col gap-12 sm:py-32 py-20 px-2 relative border-b-2 border-borderColor justify-center items-center'
    >
      <span className='absolute w-[200px] aspect-square z-[-1] rounded-full -translate-x-1/2 left-1/2 top-1/2 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <div className='sm:w-[80%] w-full flex flex-col justify-start items-start gap-6'>
        <h2 className='heroSectionTitle font-bold leading-[1.3] skills w-full sm:text-start text-center'>
          Skills
        </h2>
        <p className='heroSectionParagraph sm:text-start text-justify'>
          During my journey, I&apos;ve immersed myself in learning and mastering
          new technologies, both academically and independently. This has
          enabled me to develop high-quality applications with rich
          functionality and elegant design. Every project is an opportunity for
          me to learn and discover new things.
        </p>
      </div>
      <CardsContainer />
    </section>
  );
}

export default Skills;
