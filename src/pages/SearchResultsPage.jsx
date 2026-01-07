
import React from 'react';
import Navbar from '../components/Navbar';
import FilterSidebar from '../components/FilterSidebar';
import HotelListItem from '../components/HotelListItem';
import { hotels } from '../data/mockData';
import '../styles/SearchResultsPage.css';

const SearchResultsPage = () => {
    return (
        <div>
            <Navbar />
            <div className="container search-results-container">
                <div className="sidebar-wrapper">
                    <div className="search-summary-box">
                        <h3>Search</h3>
                        <div className="search-input-group">
                            <label>Destination</label>
                            <input type="text" defaultValue="Mumbai" />
                        </div>
                        <div className="search-input-group">
                            <label>Check-in date</label>
                            <input type="text" defaultValue="Tue 17 Sept 2024" />
                        </div>
                        <div className="search-input-group">
                            <label>Check-out date</label>
                            <input type="text" defaultValue="Wed 18 Sept 2024" />
                        </div>
                        <button className="search-btn-small">Search</button>
                    </div>
                    <FilterSidebar />
                </div>

                <div className="results-wrapper">
                    <div className="results-header">
                        <h2>Mumbai: {hotels.length} properties found</h2>
                        <div className="sort-options">
                            <button className="sort-btn active">Top Picks</button>
                            <button className="sort-btn">Lowest Price First</button>
                            <button className="sort-btn">Review Score</button>
                        </div>
                    </div>

                    <div className="hotel-list">
                        {hotels.map(hotel => (
                            <HotelListItem key={hotel.id} hotel={hotel} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;
