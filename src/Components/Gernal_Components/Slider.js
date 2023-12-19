import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderCom = ({ slides, content }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <img src={slide} className="relative z-10" />
            <div className=" slider-content absolute bottom-0 left-0 right-0  z-20">{content}</div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default SliderCom;
