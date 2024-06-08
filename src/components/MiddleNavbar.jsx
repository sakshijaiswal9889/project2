// src/components/MiddleNavbar.jsx
import React from 'react';
import {
  Box, Flex, Link, Spacer, Input, InputGroup, InputRightElement, IconButton, Menu, MenuButton, MenuList, MenuItem, MenuGroup, Button
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SearchIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';

const MiddleNavbar = () => {
  return (
    <Box bg="white" px={4} py={2} boxShadow="sm" position="fixed" top={8} width="100%" zIndex={1}>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" fontSize="2xl" fontWeight="bold">Bewakoof</Link>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Men
          </MenuButton>
          <MenuList>
            <MenuGroup title="Topwear">
              <MenuItem>T-Shirts</MenuItem>
              <MenuItem>Shirts</MenuItem>
              <MenuItem>Hoodies</MenuItem>
            </MenuGroup>
            <MenuGroup title="Bottomwear">
              <MenuItem>Jeans</MenuItem>
              <MenuItem>Shorts</MenuItem>
              <MenuItem>Joggers</MenuItem>
            </MenuGroup>
            <MenuGroup title="Winterwear">
              <MenuItem>Jackets</MenuItem>
              <MenuItem>Sweaters</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Women
          </MenuButton>
          <MenuList>
            <MenuGroup title="Topwear">
              <MenuItem>Tops</MenuItem>
              <MenuItem>Blouses</MenuItem>
              <MenuItem>Sweaters</MenuItem>
            </MenuGroup>
            <MenuGroup title="Bottomwear">
              <MenuItem>Skirts</MenuItem>
              <MenuItem>Leggings</MenuItem>
              <MenuItem>Shorts</MenuItem>
            </MenuGroup>
            <MenuGroup title="Winterwear">
              <MenuItem>Jackets</MenuItem>
              <MenuItem>Sweaters</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
        <Spacer />
        <InputGroup maxW="400px">
          <Input placeholder="Search" />
          <InputRightElement>
            <IconButton aria-label="Search" icon={<SearchIcon />} />
          </InputRightElement>
        </InputGroup>
        <Spacer />
        <IconButton aria-label="Favorites" icon={<AiOutlineHeart />} />
        <IconButton aria-label="Cart" icon={<AiOutlineShoppingCart />} />
      </Flex>
    </Box>
  );
};

export default MiddleNavbar;
