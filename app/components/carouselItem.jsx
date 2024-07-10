"use client";
import React from "react";
import { motion } from "framer-motion";

function CarouselItem({ children, itemDelay, itemGradient }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: itemDelay ? itemDelay : 1 }}
      className='aspect-square sm:rounded-2xl rounded-xl itemStyles sm:w-[74px] w-[48px] sm:mx-4 mx-3 relative flex justify-center items-center overflow-hidden'
    >
      <span
        className={`absolute w-[50%] aspect-square left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 itemSettings ${itemGradient}`}
      ></span>
      {children}
    </motion.div>
  );
}

export default CarouselItem;
