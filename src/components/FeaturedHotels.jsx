
import React from 'react';
import HotelCard from './HotelCard';
import { hotels } from '../data/mockData';
import '../styles/FeaturedHotels.css';

const FeaturedHotels = () => {
    return (
        <section className="featured-section">
            <div className="container">
                <h2 className="section-title">Homes guests love</h2>
                <div className="hotels-grid">
                    {hotels.map(hotel => (
                        <HotelCard key={hotel.id} hotel={hotel} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedHotels;
