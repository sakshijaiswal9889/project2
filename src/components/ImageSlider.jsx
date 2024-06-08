// src/components/ImageSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const handleClick = (e) => {
    e.target.style.backgroundColor = 'white';
    setTimeout(() => {
      e.target.style.backgroundColor = 'transparent';
    }, 100);
  };

  return (
    <Box>
      <Slider {...settings}>
        <div onClick={handleClick}><img src="/images/slider1.jpg" alt="Slide 1" /></div>
        <div onClick={handleClick}><img src="/images/slider2.jpg" alt="Slide 2" /></div>
        <div onClick={handleClick}><img src="/images/slider3.jpg" alt="Slide 3" /></div>
      </Slider>
    </Box>
  );
};

export default ImageSlider;
