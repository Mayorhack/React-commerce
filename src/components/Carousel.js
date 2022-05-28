import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [curslide, setCurSlide] = useState(0);
  const slides = document.querySelectorAll(".carousel-image");

  const slideChanger = function (current) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - current)}%)`;
    });
  };
  let maxSlide = slides.length;
  if (maxSlide === 0) {
    maxSlide = 2;
  } else {
    maxSlide = slides.length;
  }
  useEffect(function () {
    const slides = document.querySelectorAll(".carousel-image");

    const slideChanger = function (current) {
      slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - current)}%)`;
      });
    };
    slideChanger(0);
  }, []);

  const nextSlide = function () {
    curslide === maxSlide - 1
      ? setCurSlide(0)
      : setCurSlide((prev) => prev + 1);
    slideChanger(curslide);
  };
  const prevSlide = function () {
    if (curslide === 0) setCurSlide(maxSlide - 1);
    else {
      setCurSlide((prev) => prev - 1);
      console.log(curslide);
    }
    slideChanger(curslide);
  };

  return (
    <div className="carousel">
      <div className="container">
        <h1>Featured Collections</h1>
        <div className="carousel-container">
          <div className="carousel-image">
            <img src="../img/28530-3-nike-shoes-transparent.png" alt="" />
          </div>
          <div className="carousel-image">
            <img
              src="../img/27428-5-nike-shoes-transparent-background.png"
              alt=""
            />
          </div>
          <div className="carousel-image">
            <img src="../img/27695-7-sneaker-transparent.png" alt="" />
          </div>
          <div className="carousel-image">
            <img src="../img/28530-3-nike-shoes-transparent.png" alt="" />
          </div>
          <div className="carousel-image">
            <img
              src="../img/27428-5-nike-shoes-transparent-background.png"
              alt=""
            />
          </div>
          <div className="carousel-image">
            <img src="../img/27695-7-sneaker-transparent.png" alt="" />
          </div>
          <button className="slider__btn slider__btn--left" onClick={prevSlide}>
            &larr;
          </button>
          <button
            className="slider__btn slider__btn--right"
            onClick={nextSlide}
          >
            &rarr;
          </button>
          <div className="dots"></div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
