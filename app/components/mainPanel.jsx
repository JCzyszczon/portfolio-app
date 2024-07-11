import React from "react";
import Carousel from "./carousel";
import HeroSection from "./heroSection";

function MainPanel() {
  return (
    <section className='lg:w-full min-h-[80svh] w-[96%] max-w-5xl flex flex-col justify-start items-center border-b-2 border-borderColor'>
      <Carousel numberOfMarquees={4} />
      <section className='w-full flex justify-center items-center py-16'>
        <HeroSection />
      </section>
    </section>
  );
}

export default MainPanel;
