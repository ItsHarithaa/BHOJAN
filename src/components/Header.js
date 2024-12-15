import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo"> </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="icons">
        <Link to="/home">
          <i className="fas fa-home"></i>
        </Link>
        <Link to="/profile">
          <i className="fas fa-user"></i>
        </Link>
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i>
        </Link>
      </div>
    </header>
  );
}

export default Header;
