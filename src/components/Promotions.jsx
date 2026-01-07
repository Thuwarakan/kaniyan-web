
import React from 'react';
import { promotions } from '../data/mockData';
import '../styles/Promotions.css';

const Promotions = () => {
    return (
        <section className="promotions-section">
            <div className="container">
                <h2 className="section-title">Offers</h2>
                <p className="section-subtitle">Promotions, deals, and special offers for you</p>

                <div className="promotions-grid">
                    {promotions.map(promo => (
                        <div key={promo.id} className="promo-card">
                            <div className="promo-content">
                                <h3 className="promo-title">{promo.title}</h3>
                                <p className="promo-desc">{promo.description}</p>
                                <button className="promo-btn">{promo.buttonText}</button>
                            </div>
                            <div className="promo-image-wrapper">
                                <img src={promo.image} alt={promo.title} className="promo-image" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Promotions;
