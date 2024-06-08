// src/components/Footer.jsx
import React from 'react';
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';


const Footer = () => {
  return (
    <Box bg="gray.200" px={4} py={8} position="fixed" bottom={0} width="100%">
      <Flex justifyContent="space-between" alignItems="flex-start">
        {/* Customer Service */}
        <Box>
          <Text fontWeight="bold" mb={2}>CUSTOMER SERVICE</Text>
          <Link href="#">Contact Us</Link>
          <Link href="#">Track Order</Link>
          <Link href="#">Return Order</Link>
          <Link href="#">Cancel Order</Link>
        </Box>
        {/* Company */}
        <Box>
          <Text fontWeight="bold" mb={2}>COMPANY</Text>
          <Link href="#">About Us</Link>
          <Link href="#">We're Hiring</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Blog</Link>
        </Box>
        {/* Connect with Us */}
        <Box>
          <Text fontWeight="bold" mb={2}>CONNECT WITH US</Text>
          <Text>4.7M People Like this</Text>
          <Text>1M Followers</Text>
        </Box>
        {/* Keep up to Date */}
        <Box>
          <Text fontWeight="bold" mb={2}>KEEP UP TO DATE</Text>
          <Text>Enter Email Id</Text>
        </Box>
        {/* Download the App */}
        <Box>
          <Text fontWeight="bold" mb={2}>DOWNLOAD THE APP</Text>
          <Link href="#">Android App</Link>
          <Link href="#">iOS App</Link>
        </Box>
        {/* Secure Payment */}
        <Box>
          <Text fontWeight="bold" mb={2}>100% SECURE PAYMENT</Text>
          <Text>Secure Payments</Text>
        </Box>
        {/* Men's Clothing */}
        <Box>
          <Text fontWeight="bold" mb={2}>MEN'S CLOTHING</Text>
          <Link href="#">Top Wear</Link>
          <Link href="#">Bottom Wear</Link>
          <Link href="#">Featured</Link>
        </Box>
        {/* Women's Clothing */}
        <Box>
          <Text fontWeight="bold" mb={2}>WOMEN'S CLOTHING</Text>
          <Link href="#">Women's Top Wear</Link>
          <Link href="#">Women's Bottom Wear</Link>
          <Link href="#">Featured</Link>
        </Box>
        {/* Bags */}
        <Box>
          <Text fontWeight="bold" mb={2}>BAGS</Text>
          <Link href="#">Laptop Bags</Link>
          <Link href="#">Small Backpacks</Link>
          <Link href="#">Featured</Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
