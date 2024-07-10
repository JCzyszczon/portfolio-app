import React from "react";
import Carousel from "./carousel";
import HeroSection from "./heroSection";

function MainPanel() {
  return (
    <section className='lg:w-full h-full w-[96%] max-w-5xl flex flex-col justify-center items-center'>
      <Carousel numberOfMarquees={4} />
      <section className='w-full flex justify-center items-center py-16'>
        <HeroSection />
      </section>
    </section>
  );
}

export default MainPanel;
