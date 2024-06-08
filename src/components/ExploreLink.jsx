// src/components/ExploreLink.jsx
import React from 'react';
import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ExploreLink = () => (
  <Box textAlign="center" mt={4}>
    <Link as={RouterLink} to="/products" fontSize="xl" color="teal.500">Explore All Clothes</Link>
  </Box>
);

export default ExploreLink;
