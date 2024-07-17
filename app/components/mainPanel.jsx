import React from "react";
import Carousel from "./carousel";
import HeroSection from "./heroSection";

function MainPanel() {
  return (
    <section className='lg:w-full h-full w-[96%] max-w-5xl flex flex-col justify-center items-center border-b-2 border-borderColor relative'>
      <span className='absolute w-[200px] aspect-square z-[100] rounded-full right-0 top-1/3 -translate-y-1/3 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <span className='absolute w-[200px] aspect-square z-[100] rounded-full left-0 bottom-1/3 blobGradient sm:flex hidden sm:blur-[160px] blur-0'></span>
      <Carousel numberOfMarquees={4} />
      <section className='w-full flex justify-center items-start pt-10 sm:pb-40 pb-32'>
        <HeroSection />
      </section>
    </section>
  );
}

export default MainPanel;
