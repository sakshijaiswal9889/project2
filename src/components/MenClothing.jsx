// src/components/MenClothing.jsx
import React from 'react';
import Slider from 'react-slick';
import { Box, Image, Text } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const MenClothing = () => {
  const clothes = [
    { src: '/images/men1.jpg', title: 'Men Item 1', price: '$20' },
    { src: '/images/men2.jpg', title: 'Men Item 2', price: '$30' },
    { src: '/images/men1.jpg', title: 'Men Item 3', price: '$20' },
    { src: '/images/men2.jpg', title: 'Men Item 4', price: '$30' },

    // add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Men's Clothing</Text>
      <Slider {...settings}>
        {clothes.map((item, index) => (
          <Box key={index} mb={4}>
            <Image src={item.src} alt={item.title} />
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default MenClothing;
