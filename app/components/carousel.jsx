import React from "react";
import CarouselItem from "./carouselItem";
import Marquee from "react-fast-marquee";
import icons from "../data/icons";

function getRandomItems(data, count) {
  let result = [];
  let itemsCopy = [...data];

  for (let i = 0; i < count; i++) {
    if (itemsCopy.length === 0) {
      itemsCopy = [...data];
    }
    const randomIndex = Math.floor(Math.random() * itemsCopy.length);
    result.push(itemsCopy[randomIndex]);
    itemsCopy.splice(randomIndex, 1);
  }

  return result;
}

function Carousel({ numberOfMarquees }) {
  const itemsPerMarquee = 9;
  const speeds = [40, 50, 30, 48];

  return (
    <section className='w-full sm:min-h-[392px] min-h-[270px] relative flex flex-col justify-start items-center sm:gap-8 gap-6'>
      <span className='absolute w-[100px] h-full -left-1 top-0 shadowMain z-[5]'></span>
      <span className='absolute w-[100px] h-full -right-1 top-0 shadowMain2 z-[5]'></span>
      <span className='absolute w-full h-[100px] left-0 bottom-0 shadowMain3 z-[5]'></span>
      {Array.from({ length: numberOfMarquees }).map((_, marqueeIndex) => (
        <Marquee key={marqueeIndex} autoFill speed={speeds[marqueeIndex]}>
          {getRandomItems(icons, itemsPerMarquee).map((item, itemIndex) => {
            const IconComponent = item.icon;
            return (
              <CarouselItem
                key={itemIndex}
                itemDelay={item.delay}
                itemGradient={item.gradient}
              >
                <IconComponent
                  size={64}
                  color={item.color}
                  className='z-[10] sm:w-[24px] w-[20px] aspect-square'
                />
              </CarouselItem>
            );
          })}
        </Marquee>
      ))}
    </section>
  );
}

export default Carousel;
