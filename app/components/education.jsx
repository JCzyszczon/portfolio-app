import React from "react";
import SkillsContainer from "./skillsContainer";
import { motion } from "framer-motion";
import { FaSchool } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";

function Education() {
  const education = [
    {
      icon: <FaSchool className='text-2xl' />,
      school: "LO im. Hugona Kołłątaja, Jordanów",
      heading: "Math Profile",
      years: "Sep 2017 - May 2020",
    },
    {
      icon: <IoSchool className='text-2xl' />,
      school: "AGH, Kraków",
      heading: "Computer Science in Engineering",
      years: "Oct 2020 - current",
    },
  ];

  return (
    <SkillsContainer>
      <span className='w-full flex justify-center items-center'>
        <h3 className='sm:text-base text-[15px] text-center text-nowrap bg-textColor rounded-md text-backgroundColor px-6 py-1'>
          Education
        </h3>
      </span>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className='sm:mt-10 mt-8 w-full flex flex-col justify-start items-start sm:gap-8 gap-4'
      >
        {education.map((item, index) => (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.35 + index * 0.1 }}
            key={index}
            className='w-full flex gap-2 justify-start items-center'
          >
            {item.icon}
            <div className='w-full flex flex-col sm:gap-2 gap-1 justify-center items-start'>
              <p className='sm:text-sm text-xs text-lessImportantTextColor'>
                {item.school}
              </p>
              <h4 className='font-medium text-base'>{item.heading}</h4>
              <p className='text-xs text-lessImportantTextColor'>
                {item.years}
              </p>
            </div>
          </motion.section>
        ))}
      </motion.section>
    </SkillsContainer>
  );
}

export default Education;
