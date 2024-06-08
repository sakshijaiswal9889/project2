// src/components/BottomNavbar.jsx
import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const BottomNavbar = () => {
  return (
    <Box bg="gray.200" px={4} py={2} position="fixed" bottom={0} width="100%">
      <Flex justifyContent="center">
        <Text mx={4}><EmailIcon /> contact@bewakoof.com</Text>
        <Text mx={4}><PhoneIcon /> +1234567890</Text>
      </Flex>
    </Box>
  );
};

export default BottomNavbar;
