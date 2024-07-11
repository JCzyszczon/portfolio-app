"use client";
import React from "react";
import MagicText from "./magicText";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaExternalLinkAlt } from "react-icons/fa";

function HeroSection() {
  return (
    <section className='w-[80%] flex flex-col justify-center sm:items-start items-center gap-2'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.5, ease: "easeInOut" }}
        className='heroSectionText text-center'
      >
        Hi! My name is Jakub,
      </motion.h2>
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.65, ease: "easeInOut" }}
        className='heroSectionTitle font-bold leading-[1.3] text-center'
      >
        I&apos;m <MagicText>Frontend Developer</MagicText>.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.8, ease: "easeInOut" }}
        className='heroSectionParagraph sm:text-start text-center sm:mt-4 mt-3'
      >
        I thrive on turning ideas into functional and visually appealing
        websites.{" "}
        <span className='sm:inline hidden'>
          My approach combines creativity with technical expertise to deliver
          user-friendly solutions that exceed expectations.
        </span>
      </motion.p>
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.95, ease: "easeInOut" }}
        className='w-full flex justify-center items-center sm:mt-10 mt-6 gap-4 flex-wrap box-border'
      >
        <ScrollLink
          to='aboutMe'
          href='/'
          smooth={true}
          duration={300}
          className='bg-textColor hover:bg-hoverButtonColor text-center cursor-pointer duration-200 hover:-translate-y-[2px] border border-textColor hover:border-hoverButtonColor text-backgroundColor sm:text-base text-sm px-6 py-2 rounded-md flex-1 min-w-fit max-w-[210px] box-border'
          title='Go to About section'
        >
          Read More
        </ScrollLink>
        <a
          href='/Jakub-Czyszczoń-CV.pdf'
          download='Jakub-Czyszczoń-CV.pdf'
          className='border border-textColor hover:border-hoverButtonColor hover:-translate-y-[2px] duration-200 sm:text-base text-sm bg-transparent px-6 py-2 rounded-md flex justify-center items-center gap-2 flex-1 min-w-fit max-w-[210px] text-center box-border'
          title='Download CV'
        >
          <span>Resume</span>
          <FaExternalLinkAlt />
        </a>
      </motion.section>
    </section>
  );
}

export default HeroSection;
