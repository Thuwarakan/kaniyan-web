
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HotelListItem.css';

const HotelListItem = ({ hotel }) => {
    const navigate = useNavigate();

    const handleAvailability = () => {
        navigate(`/hotels/${hotel.id}`);
    };

    return (
        <div className="hotel-list-item">
            <div className="item-image-wrapper">
                <img src={hotel.image} alt={hotel.name} className="item-image" />
                <button className="favorite-btn">❤</button>
            </div>

            <div className="item-content">
                <div className="item-header">
                    <h3 className="item-title" onClick={handleAvailability}>{hotel.name}</h3>
                    <div className="item-rating-stars">{'★'.repeat(hotel.stars)}</div>
                </div>

                <div className="item-location">
                    <a href="#">{hotel.location}</a>
                    <span className="distance"> • 2.5 km from center</span>
                </div>

                <div className="item-deal-tag">Limited-time Deal</div>

                <div className="item-details">
                    <div className="details-left">
                        <h4 className="room-type">Deluxe Double Room</h4>
                        <p className="bed-info">1 extra-large double bed</p>
                        <p className="cancellation">FREE cancellation • No prepayment needed</p>
                    </div>

                    <div className="details-right">
                        <div className="review-score">
                            <div className="score-text">
                                <span className="rating-word">Superb</span>
                                <span className="review-count">{hotel.reviews} reviews</span>
                            </div>
                            <div className="score-badge">{hotel.rating}</div>
                        </div>

                        <div className="price-block">
                            <span className="nights-text">1 night, 2 adults</span>
                            <span className="item-price">₹ {hotel.price.toLocaleString()}</span>
                            <span className="tax-text">+₹ {Math.round(hotel.price * 0.18)} taxes and charges</span>
                            <button className="check-availability-btn" onClick={handleAvailability}>See availability</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelListItem;
