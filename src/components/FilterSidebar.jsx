
import React from 'react';
import '../styles/FilterSidebar.css';

const FilterSidebar = () => {
    return (
        <div className="filter-sidebar">
            <div className="filter-group">
                <h3>Filter by:</h3>
                <div className="filter-section">
                    <h4>Your budget (per night)</h4>
                    <label className="checkbox-label">
                        <input type="checkbox" /> ₹ 0 – ₹ 5,000
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> ₹ 5,000 – ₹ 10,000
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> ₹ 10,000 – ₹ 15,000
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> ₹ 15,000 +
                    </label>
                </div>

                <div className="filter-section">
                    <h4>Star Rating</h4>
                    <label className="checkbox-label">
                        <input type="checkbox" /> 5 stars
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> 4 stars
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> 3 stars
                    </label>
                </div>

                <div className="filter-section">
                    <h4>Review Score</h4>
                    <label className="checkbox-label">
                        <input type="checkbox" /> Superb: 9+
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> Very good: 8+
                    </label>
                    <label className="checkbox-label">
                        <input type="checkbox" /> Good: 7+
                    </label>
                </div>
            </div>
        </div>
    );
};

export default FilterSidebar;
