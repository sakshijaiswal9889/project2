// src/components/MiscellaneousImages.jsx
import React from 'react';
import { Box, Image, Heading, Flex } from '@chakra-ui/react';

const MiscellaneousImages = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" my={4} textAlign="center">Bewakoof Originals</Heading>
      <Flex justifyContent="space-between" mb={4}>
        <Image src="/images/misc1.jpg" alt="Misc 1" flex="1" mx={2} />
        <Image src="/images/misc1.jpg" alt="Misc 2" flex="1" mx={2} />
        <Image src="/images/misc1.jpg" alt="Misc 3" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 4" flex="1" mx={2} />
      </Flex>
      <Heading as="h2" size="xl" my={4} textAlign="center">Too Hot to be Missed</Heading>
      <Flex justifyContent="space-between" mb={4}>
        <Image src="/images/misc2.jpg" alt="Misc 5" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 6" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 7" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 8" flex="1" mx={2} />
      </Flex>
      <Heading as="h2" size="xl" my={4} textAlign="center">Categories to Bag</Heading>
      <Flex justifyContent="space-between" mb={4}>
        <Image src="/images/misc3.jpg" alt="Misc 9" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 10" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 11" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 12" flex="1" mx={2} />
      </Flex>
      <Heading as="h2" size="xl" my={4} textAlign="center">Accessories</Heading>
      <Flex justifyContent="space-between" mb={4}>
        <Image src="/images/misc4.jpg" alt="Misc 13" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 14" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 15" flex="1" mx={2} />
        <Image src="/images/misc2.jpg" alt="Misc 16" flex="1" mx={2} />
      </Flex>
      <Heading as="h2" size="xl" my={4} textAlign="center">Our Best Picks</Heading>
      <Flex justifyContent="space-between" mb={4}>
        <Image src="/images/misc5.jpg" alt="Misc 17" flex="1" mx={2} />
        <Image src="/images/misc6.jpg" alt="Misc 18" flex="1" mx={2} />
        <Image src="/images/misc7.jpg" alt="Misc 19" flex="1" mx={2} />
      </Flex>
    </Box>
  );
};

export default MiscellaneousImages;
