"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const CardsContainer = ({ data }) => {
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
      {data.map((item, index) => (
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.25 + index * 0.1 }}
          className='card drop-shadow-md'
          key={index}
        >
          <section className='card-content'>
            {item.mainIcon ? (
              <span className='absolute left-1/2 z-[8] top-1/3 -translate-x-1/2 sm:-translate-y-1/3 -translate-y-1/2 flex gap-4'>
                {item.mainIcon}
              </span>
            ) : (
              <section className='w-full h-full relative flex justify-center items-center'>
                <div className='projectsFade'></div>
                <Image
                  src={item.mainImage}
                  alt={item.mainImage}
                  title={item.mainImage}
                  quality={100}
                  className={`${
                    index === 1
                      ? "object-contain w-[50%] min-w-[100px] h-auto"
                      : "object-fill w-full h-full"
                  } block`}
                />
              </section>
            )}
            <section className='w-full flex sm:flex-row flex-col z-[8] justify-between items-center sm:gap-4 gap-3 sm:px-5 px-3 sm:pb-5 pb-3 sm:pt-4 pt-3'>
              {item.sideIcon}
              <div className='w-full flex flex-col justify-center items-start gap-[2px]'>
                <h3 className='sm:text-lg text-base font-semibold'>
                  {item.title}
                </h3>
                <p className='sm:text-sm text-xs text-cardsText whitespace-nowrap inline-block w-[calc(96%)] text-ellipsis overflow-hidden'>
                  {item.subtitle ? item.subtitle : item.description}
                </p>
              </div>
            </section>
          </section>
        </motion.article>
      ))}
    </motion.section>
  );
};

export default CardsContainer;
