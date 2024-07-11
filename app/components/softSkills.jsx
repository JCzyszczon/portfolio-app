import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function SoftSkills() {
  return (
    <motion.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100%", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='absolute left-0 bottom-0 w-full h-full navbar rounded-xl p-10'
    >
      <h3 className='text-xl text-center font-semibold bg-textColor text-backgroundColor w-fit rounded-full px-6 py-1'>
        Soft skills
      </h3>
      <ul className='mt-10 flex flex-col justify-start items-start gap-4'>
        <li>Communication</li>
        <li>Problem-solving</li>
        <li>Time management</li>
        <li>Teamwork</li>
        <li>Creativity</li>
        <li>Quick learner</li>
      </ul>
    </motion.article>
  );
}

export default SoftSkills;
