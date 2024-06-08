// src/pages/Products.jsx
import React, { useEffect, useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <Box p={4}>
      <Heading>Products</Heading>
      {products.map(product => (
        <Box key={product.id} border="1px" borderRadius="md" p={4} mb={4}>
          <Heading size="md">{product.title}</Heading>
          <Text>{product.description}</Text>
          <Text fontWeight="bold">${product.price}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default Products;
