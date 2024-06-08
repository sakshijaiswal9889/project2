
// src/pages/Home.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import ImageSlider from '../components/ImageSlider';
import PosterImages from '../components/PosterImages';
import MenClothing from '../components/MenClothing';
import WomenClothing from '../components/WomenClothing';
import DiscountedClothing from '../components/DiscountedClothing';
import ExploreLink from '../components/ExploreLink';
import MiscellaneousImages from '../components/MiscellaneousImages';

const Home = () => (
  <Box p={4}>
    <ImageSlider />
    <PosterImages />
    <MenClothing />
    <WomenClothing />
    <DiscountedClothing />
    <ExploreLink />
    <MiscellaneousImages />
  </Box>
);

export default Home;
