// src/components/PosterImages.jsx
import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';

const PosterImages = () => {
  const posters = ['/images/poster1.jpg', '/images/poster2.jpg', '/images/poster3.jpg'];

  return (
    <Box>
      <Flex justifyContent="space-between">
        {posters.map((src, index) => (
          <Image key={index} src={src} width="100%" height="50px" mb={4} flex="1" />
        ))}
      </Flex>
    </Box>
  );
};

export default PosterImages;
