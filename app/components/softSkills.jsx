import React from "react";
import SkillsContainer from "./skillsContainer";
import { FaPeopleGroup, FaBusinessTime, FaStopwatch } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { IoChatboxEllipses, IoColorWand } from "react-icons/io5";
import { motion } from "framer-motion";

function SoftSkills() {
  const skills = [
    {
      icon: <IoChatboxEllipses className='text-2xl' />,
      label: "Communication",
    },
    {
      icon: <GiBrain className='text-2xl' />,
      label: "Problem-solving",
    },
    {
      icon: <FaBusinessTime className='text-2xl' />,
      label: "Time management",
    },
    {
      icon: <FaPeopleGroup className='text-2xl' />,
      label: "Teamwork",
    },
    {
      icon: <IoColorWand className='text-2xl' />,
      label: "Creativity",
    },
    {
      icon: <FaStopwatch className='text-2xl' />,
      label: "Quick learner",
    },
  ];

  return (
    <SkillsContainer>
      <span className='w-full flex justify-center items-center'>
        <h3 className='sm:text-base text-[15px] text-center text-nowrap bg-textColor rounded-md text-backgroundColor px-6 py-1'>
          Soft skills
        </h3>
      </span>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className='sm:mt-10 mt-8 flex flex-col justify-start items-start sm:gap-6 gap-4'
      >
        {skills.map((skill, index) => (
          <motion.li
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.25 + index * 0.1 }}
            className='flex justify-start items-center sm:gap-6 gap-4 sm:text-base text-[15px]'
          >
            {skill.icon} {skill.label}
          </motion.li>
        ))}
      </motion.ul>
    </SkillsContainer>
  );
}

export default SoftSkills;
