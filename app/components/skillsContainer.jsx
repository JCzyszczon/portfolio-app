import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SkillsContainer({ children }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <motion.article
      initial={{ height: "10%", opacity: 0 }}
      animate={{ height: "100%", opacity: 1 }}
      exit={
        isMobile
          ? { height: "100%", opacity: 0 }
          : { height: "10%", opacity: 0 }
      }
      transition={{ duration: 0.3 }}
      className='w-full min-h-max z-[10] navbar rounded-xl p-10 overflow-y-auto lg:no-scrollbar relative'
    >
      {children}
    </motion.article>
  );
}

export default SkillsContainer;
