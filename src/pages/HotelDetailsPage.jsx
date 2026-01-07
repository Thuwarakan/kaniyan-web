
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HotelHeader from '../components/HotelHeader';
import HotelDescription from '../components/HotelDescription';
import RoomList from '../components/RoomList';
import { hotels } from '../data/mockData';
import '../styles/HotelDetailsPage.css';

const HotelDetailsPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);

    useEffect(() => {
        // Simulate fetch
        const foundHotel = hotels.find(h => h.id === parseInt(id));
        setHotel(foundHotel || hotels[0]); // Fallback to first if not found
    }, [id]);

    if (!hotel) return <div>Loading...</div>;

    return (
        <div>
            <Navbar />
            <div className="container hotel-details-container">
                <HotelHeader hotel={hotel} />
                <HotelDescription hotel={hotel} />
                <RoomList />
            </div>
        </div>
    );
};

export default HotelDetailsPage;
