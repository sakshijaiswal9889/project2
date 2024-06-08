// src/App.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import TopNavbar from './components/TopNavbar';
import MiddleNavbar from './components/MiddleNavbar';
import BottomNavbar from './components/BottomNavbar';
import Bottom from './components/Bottom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  return (
    <Box>
      <TopNavbar />
      <MiddleNavbar />
      <Bottom/>
      <Box mt={32} mb={16}> {/* Add some margin to avoid overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <BottomNavbar />
    </Box>
  );
}

export default App;
