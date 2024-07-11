import React from "react";
import { motion } from "framer-motion";

function Interests() {
  return (
    <motion.article
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "100%", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='absolute left-0 bottom-0 w-[100%] h-[100%] navbar rounded-xl p-5'
    >
      <h3>Interests</h3>
    </motion.article>
  );
}

export default Interests;
