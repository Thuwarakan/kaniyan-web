
import React from 'react';
import '../styles/HotelHeader.css';

const HotelHeader = ({ hotel }) => {
    return (
        <div className="hotel-header-section">
            <div className="header-top">
                <div className="header-info">
                    <div className="header-title-row">
                        <h2 className="header-name">{hotel.name}</h2>
                        <div className="header-stars">{'★'.repeat(hotel.stars)}</div>
                    </div>
                    <p className="header-address">📍 {hotel.location}</p>
                </div>
                <div className="header-actions">
                    <button className="reserve-btn">Reserve or Book Now</button>
                </div>
            </div>

            <div className="hotel-gallery">
                <div className="gallery-main">
                    <img src={hotel.image} alt="Main View" />
                </div>
                <div className="gallery-grid">
                    {/* Mock additional images by reusing the main one for now or using placeholders */}
                    <img src="https://images.unsplash.com/photo-1590490360182-f33d5e6a385c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Room View" />
                    <img src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pool View" />
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Lobby View" />
                    <div className="gallery-more">
                        <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dining" />
                        <div className="more-overlay">+8 photos</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelHeader;
