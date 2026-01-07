
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-logo">Kanniyan</div>
        <div className="navbar-links">
          <button className="nav-btn">Register</button>
          <button className="nav-btn">Sign in</button>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="container">
          <ul className="nav-categories">
            <li className="active"><i className="icon-bed"></i> Stays</li>
            <li><i className="icon-plane"></i> Flights</li>
            <li><i className="icon-car"></i> Car rentals</li>
            <li><i className="icon-attraction"></i> Attractions</li>
            <li><i className="icon-taxi"></i> Airport taxis</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
