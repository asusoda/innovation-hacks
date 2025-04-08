"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import items from "./schedule";
import Reveal from "./Reveal";
import "../../styles/timeline2.css";

export default function Timeline2() {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY + windowHeight / 2;

      const activeIndex = items.findIndex((item) => {
        const cardElement = document.getElementById(`card-${item.key}`);
        if (!cardElement) return false;

        const cardTop = cardElement.offsetTop;
        const cardBottom = cardTop + cardElement.offsetHeight;

        return scrollPosition >= cardTop && scrollPosition < cardBottom;
      });

      setActiveCardIndex(activeIndex === -1 ? 0 : activeIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-16 sm:mt-16 flex flex-col items-center">
      <h1 className="text-center text-white text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-bold mb-16">
        Schedule
      </h1>
      <div className="timeline w-full flex justify-center">
        <div className="outer max-w-4xl">
          {items.map((item, index) => (
            <TimelineCard
              key={item.key}
              item={item}
              index={index}
              active={index <= activeCardIndex}
              activeCard={index === activeCardIndex}
            />
          ))}
        </div>
      </div> 
    </div>
  );
}

const TimelineCard = ({ item, index, active, activeCard }: any) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50% 0px",
  });

  return (
    <div
      id={`card-${item.key}`}
      className={`box ${activeCard ? "active-card" : ""} ${
        active ? "active" : ""
      }`}
      ref={ref}
    >
      <Reveal even={item.key % 2 !== 0}>
        <div className="info">
          <h3 className="title">{item.title}</h3>
          <div className="data">
            <h3 className="text-xl font-semibold py-2">{item.cardTitle}</h3>
            <p className="text-gray-300">{item.cardDetailedText}</p>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
