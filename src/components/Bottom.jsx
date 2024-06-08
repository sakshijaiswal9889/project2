
import React from 'react';
import { Box, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2} position="fixed" bottom={0} width="100%" zIndex={10}>
      <Flex alignItems="center" justifyContent="center">
        <Link as={RouterLink} to="/accessories" px={2}>ACCESSORIES</Link>
        <Link as={RouterLink} to="/sneakers" px={2}>SNEAKERS</Link>
        <Link as={RouterLink} to="/bwkf-google" px={2}>BWKF X GOOGLE</Link>
        <Link as={RouterLink} to="/bewakoof-air" px={2}>BEWAKOOF AIR</Link>
        <Link as={RouterLink} to="/heavy-duty" px={2}>HEAVY DUTY</Link>
        <Link as={RouterLink} to="/customization" px={2}>CUSTOMIZATION</Link>
        <Link as={RouterLink} to="/official-merch" px={2}>OFFICIAL MERCH</Link>
        <Link as={RouterLink} to="/plus-size" px={2}>PLUS SIZE</Link>
      </Flex>
    </Box>
  );
};

export default BottomNavbar;
