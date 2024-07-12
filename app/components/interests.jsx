import React from "react";
import SkillsContainer from "./skillsContainer";
import { motion } from "framer-motion";
import { FaBook, FaBasketball, FaMicrophone, FaLaptop } from "react-icons/fa6";
import { RiMovie2Fill } from "react-icons/ri";

function Interests() {
  const skills = [
    {
      icon: <FaLaptop className='text-2xl' />,
      label: "Modern UI design",
    },
    { icon: <FaMicrophone className='text-2xl' />, label: "Politics" },
    { icon: <FaBasketball className='text-2xl' />, label: "Basketball" },
    { icon: <FaBook className='text-2xl' />, label: "Fantasy books" },
    { icon: <RiMovie2Fill className='text-2xl' />, label: "Cinema" },
  ];

  return (
    <SkillsContainer>
      <span className='w-full flex justify-center items-center'>
        <h3 className='text-base text-center text-nowrap bg-textColor rounded-md text-backgroundColor px-6 py-1'>
          Interests
        </h3>
      </span>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
        className='mt-10 flex flex-col justify-start items-start gap-6 listSkills'
      >
        {skills.map((skill, index) => (
          <motion.li
            key={skill.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.25 + index * 0.1 }}
            className='flex gap-2'
          >
            {skill.icon} {skill.label}
          </motion.li>
        ))}
      </motion.ul>
    </SkillsContainer>
  );
}

export default Interests;
