// src/components/DiscountedClothing.jsx
import React from 'react';
import { Box, Image, Text,Flex } from '@chakra-ui/react';

const DiscountedClothing = () => {
  const discountedItems = [
    { src: '/images/discount1.jpg', title: 'Discount Item 1', price: '$15' },
    { src: '/images/discount2.jpg', title: 'Discount Item 2', price: '$20' },
    { src: '/images/discount2.jpg', title: 'Discount Item 2', price: '$20' },
    { src: '/images/discount2.jpg', title: 'Discount Item 2', price: '$20' },
    // add more items as needed
  ];

  return (
    <Box>
      <Text fontSize="2xl" mb={4}>Discounted Clothing</Text>
      <Flex>
      {discountedItems.map((item, index) => (
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

export default DiscountedClothing;
