import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import "./Carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);
  const [showArrows, setShowArrows] = useState(true);

  const nextSlide = () => {
    setSlide((slide + 1) % data.length);
  };

  const prevSlide = () => {
    setSlide((slide - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [slide]);

  useEffect(() => {
    const handleResize = () => {
      setShowArrows(window.innerWidth >= 750);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="carousel">
      {showArrows && (
        <>
          <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
          <BsArrowRightCircleFill onClick={nextSlide} className="arrow arrow-right" />
        </>
      )}

      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}

      <div className="indicators">
        {data.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`indicator ${slide === idx ? "active rotate" : "inactive"}`}
              onClick={() => setSlide(idx)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};