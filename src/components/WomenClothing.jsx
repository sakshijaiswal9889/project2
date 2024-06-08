// src/components/WomenClothing.jsx
import React from 'react';
import { Box, Image, Text ,Flex} from '@chakra-ui/react';

const WomenClothing = () => {
  const clothes = [
    { src: '/images/women1.jpg', title: 'Women Item 1', price: '$25' },
    { src: '/images/women2.jpg', title: 'Women Item 2', price: '$35' },
    // add more items as needed
  ];

  return (
    <Box>
       <Text fontSize="2xl" mb={4}>Women's Clothing</Text>
      <Flex>
     
      {clothes.map((item, index) => (
        <Box key={index} mb={4}>
          <Image src={item.src} alt={item.title} />
          <Text>{item.title}</Text>
          <Text>{item.price}</Text>
        </Box>
      ))}
      </Flex>
    </Box>
  );
};

export default WomenClothing;
