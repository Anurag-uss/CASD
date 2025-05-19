import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="logo-icon">G</span>
        <h1>Guiddii</h1>
      </div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#careers">Career Paths</a>
        <a href="#about">About</a>
        <button className="primary-btn">Try Pro Version</button>
      </div>
    </nav>
  );
};

export default Navbar;
