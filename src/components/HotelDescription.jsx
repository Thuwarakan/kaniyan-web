
import React from 'react';
import '../styles/HotelDescription.css';

const HotelDescription = ({ hotel }) => {
    return (
        <div className="description-section">
            <div className="desc-left">
                <p className="desc-text">
                    Stay in the heart of {hotel.location.split(',')[0]} – Excellent location.
                    <br /><br />
                    Experience world-class service at {hotel.name}. One of our top picks in {hotel.location.split(',')[0]}.
                    Located in a prime area, this property offers luxurious accomodations with modern amenities.
                    Guests can enjoy the on-site restaurant, fitness center, and pool.
                    <br /><br />
                    Couples particularly like the location — they rated it <strong>9.5</strong> for a two-person trip.
                </p>

                <div className="popular-facilities">
                    <h3>Most popular facilities</h3>
                    <div className="facilities-grid">
                        <span className="facility-item">🏊 Outdoor swimming pool</span>
                        <span className="facility-item">📶 Free WiFi</span>
                        <span className="facility-item">✈️ Airport shuttle</span>
                        <span className="facility-item">👨‍👩‍👧‍👦 Family rooms</span>
                        <span className="facility-item">🚭 Non-smoking rooms</span>
                        <span className="facility-item">🍽️ Restaurant</span>
                        <span className="facility-item">🅿️ Free parking</span>
                    </div>
                </div>
            </div>

            <div className="desc-right">
                <div className="rating-box">
                    <div className="rating-header">
                        <div>
                            <span className="rating-desc-strong">Superb</span>
                            <span className="rating-count">{hotel.reviews} reviews</span>
                        </div>
                        <div className="rating-badge-large">{hotel.rating}</div>
                    </div>
                </div>
                <div className="map-box">
                    <button className="show-map-btn">Show on map</button>
                </div>
            </div>
        </div>
    );
};

export default HotelDescription;
