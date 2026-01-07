
import React from 'react';
import { useNavigate } from 'react-router-dom';
import GlobeAnimation from './GlobeAnimation';
import '../styles/SearchHero.css';

const SearchHero = () => {
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate('/search');
    };

    return (
        <div className="hero-section">
            <GlobeAnimation />
            <div className="container hero-content">
                <h1 className="hero-title">Find your next stay</h1>
                <p className="hero-subtitle">Search deals on hotels, homes, and much more...</p>

                <div className="search-box">
                    <div className="search-item input-wrapper">
                        <span className="icon">🛏️</span>
                        <input type="text" placeholder="Where are you going?" />
                    </div>

                    <div className="search-item input-wrapper">
                        <span className="icon">📅</span>
                        <input type="text" placeholder="Check-in - Check-out" />
                    </div>

                    <div className="search-item input-wrapper">
                        <span className="icon">👤</span>
                        <input type="text" placeholder="2 adults · 0 children · 1 room" />
                    </div>

                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
            </div>
        </div>
    );
};

export default SearchHero;
