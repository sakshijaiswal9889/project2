// src/components/TopNavbar.jsx
import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const TopNavbar = () => {
  return (
    <Box bg="gray.100" px={4} py={2}>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/offers" px={2}>Offer</Link>
        <Link as={RouterLink} to="/fanbook" px={2}>Fanbook</Link>
        <Link as={RouterLink} to="/downloadapp" px={2}>Download App</Link>
        <Link as={RouterLink} to="/tribalmembership" px={2}>Tribal Membership</Link>
        <Spacer />
        <Link as={RouterLink} to="/contact" px={2}>Contact</Link>
        <Link as={RouterLink} to="/trackorder" px={2}>Track Order</Link>
      </Flex>
    </Box>
  );
};

export default TopNavbar;
