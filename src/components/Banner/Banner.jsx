import React, { useEffect, useState } from "react";
import "./Banner.css";

const slides = [
  { backgroundColor: "grey" },
  { backgroundColor: "teal" },
  { backgroundColor: "rgb(133, 199, 199)" },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    // Очистка интервала при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, [currentSlide]); 

  return (
    <div className="banner__wrapper">
      <div
        className="banner__img"
        style={{ backgroundColor: slides[currentSlide].backgroundColor }}
      >
        Slide {currentSlide + 1}
     
      </div>

      <div className="banner_btn">
        <button className="change__slide" onClick={prevSlide}>
          PREV
        </button>
        <button className="change__slide" onClick={nextSlide}>
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Banner;
