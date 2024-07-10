"use client";
import React, { useState, useEffect } from "react";
import ThemeSwitch from "./themeSwitch";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Logo from "./logo";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [navState, setNavState] = useState(false);

  useEffect(() => {
    if (navState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [navState]);

  return (
    <header className='lg:w-full w-[96%] max-w-5xl fixed left-1/2 -translate-x-1/2 sm:top-4 top-2 rounded-2xl duration-200 z-50 flex flex-col justify-start items-center sm:py-2 py-3 sm:px-3 px-10 navbar border border-borderColor'>
      <section className='w-full flex justify-between items-center'>
        <Link
          href={"/"}
          title='Go to homepage'
          className='flex gap-2 justify-between items-center'
        >
          <Logo />
          <p className='text-[13px] font-medium'>JCzyszczon</p>
        </Link>
        <nav className='sm:flex hidden'>
          <ul className='flex justify-between items-center gap-8 text-sm text-linkColor hover:[&>li]:text-textColor [&>li]:duration-200 [&>li]:cursor-pointer font-semibold'>
            <li>
              <ScrollLink
                to='aboutMe'
                smooth={true}
                duration={300}
                title='Go to About section'
              >
                About
              </ScrollLink>
            </li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <section className='flex justify-between items-center gap-7'>
          <ThemeSwitch />
          <button
            onClick={() => setNavState(!navState)}
            className='sm:hidden flex h-full py-3'
          >
            <span className='flex flex-col gap-[6px] justify-between items-center'>
              <div
                className={`w-[16px] h-[1px] bg-textColor duration-200 ${
                  navState
                    ? "rotate-45 translate-y-[3.5px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
              <div
                className={`w-[16px] h-[1px] bg-textColor duration-200 ${
                  navState
                    ? "-rotate-45 -translate-y-[3.5px]"
                    : "rotate-0 translate-y-0"
                }`}
              ></div>
            </span>
          </button>
        </section>
      </section>
      <AnimatePresence>
        {navState && (
          <motion.section
            initial={{ height: 0 }}
            animate={{ height: "80vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className='w-full sm:hidden flex flex-col justify-between items-center gap-10 overflow-auto'
          >
            <nav>
              <ul className='flex flex-col justify-between items-center pt-20 gap-8 text-xl [&>li]:cursor-pointer'>
                <li>
                  <ScrollLink
                    to='aboutMe'
                    smooth={true}
                    duration={300}
                    onClick={() => setNavState(false)}
                    title='Go to About section'
                  >
                    About
                  </ScrollLink>
                </li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </nav>
            <span className='pb-10 w-full flex gap-8 justify-center text-2xl items-center'>
              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
              <FaInstagram />
            </span>
          </motion.section>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
