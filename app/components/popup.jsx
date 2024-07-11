"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Popup() {
  const [closePopup, setClosePopup] = useState(false);
  const [bounce, setBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBounce(true);
      setTimeout(() => setBounce(false), 500);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!closePopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.25, delay: 4 },
          }}
          exit={{ opacity: 0, y: 20, transition: { duration: 0.25, delay: 0 } }}
          className={`fixed right-7 bottom-[76px] min-w-[180px] rounded-md duration-200 z-30 sm:flex hidden justify-center text-sm items-center py-3 px-6 bg-borderColor box-border ${
            bounce ? "bounce" : ""
          }`}
        >
          Looking for more?
          <IoCloseOutline
            className='absolute right-1 top-1 text-base cursor-pointer'
            onClick={() => setClosePopup(true)}
          />
          <span className='absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-[51%] border-b-[15px] border-b-borderColor border-solid border-r-[15px] border-r-transparent -rotate-45'></span>
          <span className='absolute left-0 top-0 text-base cursor-pointer rounded-l-md h-full w-[6px] popupGradient'></span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Popup;
