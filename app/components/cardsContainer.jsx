"use client";
import React, { useEffect, useRef } from "react";
import icons from "../data/icons";
import { FaPeopleGroup, FaBusinessTime, FaStopwatch } from "react-icons/fa6";

const CardsContainer = () => {
  const cardsRef = useRef(null);

  const data = [
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
    {
      title: "Apartments",
      description: "Places to be apart. Wait, what?",
      mainIcon: <FaPeopleGroup className='text-2xl' />,
      sideIcon: <FaPeopleGroup className='text-xl' />,
    },
  ];

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
    <section id='cards' ref={cardsRef}>
      {data.map((item, index) => (
        <article className='card' key={index}>
          <div className='card-content'>
            {item.mainIcon}
            <section className='w-full flex justify-between items-center'>
              {item.sideIcon}
              <div className='w-full flex justify-center items-start'>
                {item.title}
                {item.description}
              </div>
            </section>
          </div>
        </article>
      ))}
    </section>
  );
};

export default CardsContainer;

/*
const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cardRefs.current.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };

    const cardsContainer = cardsContainerRef.current;
    cardsContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardsContainerRef} className={styles.cardsContainer} id='cards'>
      {[...Array(5)].map((_, index) => (
        <Card key={index} ref={(el) => (cardRefs.current[index] = el)}>
          Card {index + 1}
        </Card>
      ))}
    </div>
  );
  */
