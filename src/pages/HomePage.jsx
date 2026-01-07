
import React from 'react';
import Navbar from '../components/Navbar';
import SearchHero from '../components/SearchHero';
import FeaturedHotels from '../components/FeaturedHotels';
import Promotions from '../components/Promotions';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <SearchHero />
            <Promotions />
            <FeaturedHotels />
        </div>
    );
};

export default HomePage;
