
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HotelCard.css';

const HotelCard = ({ hotel }) => {
    const navigate = useNavigate();

    const handleViewDeal = () => {
        navigate(`/hotels/${hotel.id}`);
    };

    return (
        <div className="hotel-card">
            <div className="hotel-image-container">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <div className="hotel-rating">
                    <span className="score">{hotel.rating}</span>
                </div>
            </div>
            <div className="hotel-content">
                <div className="hotel-header">
                    <h3 className="hotel-name">{hotel.name}</h3>
                    <div className="hotel-stars">
                        {'★'.repeat(hotel.stars)}
                    </div>
                </div>

                <p className="hotel-location">📍 {hotel.location}</p>

                <div className="hotel-tags">
                    {hotel.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>

                <div className="hotel-footer">
                    <div className="price-info">
                        <span className="price-label">Starting from</span>
                        <span className="price">₹{hotel.price.toLocaleString()}</span>
                    </div>
                    <button className="view-deal-btn" onClick={handleViewDeal}>View Deal</button>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;
