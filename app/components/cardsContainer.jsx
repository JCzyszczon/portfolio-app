"use client";
import React, { useEffect, useRef } from "react";
import skillsData from "../data/skillsData";
import { motion, useInView } from "framer-motion";

const CardsContainer = () => {
  const cardsRef = useRef(null);
  const isInView = useInView(cardsRef, { once: true });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardsRef.current) {
        const cards = cardsRef.current.getElementsByClassName("card");
        for (const card of cards) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty("--mouse-x", `${x}px`);
          card.style.setProperty("--mouse-y", `${y}px`);
        }
      }
    };

    const cardsElement = cardsRef.current;
    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsElement) {
        cardsElement.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ staggerChildren: 0.1 }}
      id='cards'
      ref={cardsRef}
    >
      {skillsData.map((item, index) => (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.25 + index * 0.1 }}
          className='card drop-shadow-md'
          key={index}
        >
          <div className='card-content'>
            <span className='absolute left-1/2 z-[8] sm:top-1/3 top-[25%] -translate-x-1/2 flex gap-4'>
              {item.mainIcon.map((icon, iconIndex) => (
                <React.Fragment key={iconIndex}>{icon}</React.Fragment>
              ))}
            </span>
            <section className='w-full flex sm:flex-row flex-col z-[8] justify-between items-center sm:gap-4 gap-3'>
              {item.sideIcon}
              <div className='w-full flex flex-col justify-center items-start gap-[2px]'>
                <h3 className='sm:text-lg text-base font-semibold'>
                  {item.title}
                </h3>
                <p className='sm:text-sm text-xs text-cardsText'>
                  {item.description}
                </p>
              </div>
            </section>
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
};

export default CardsContainer;
