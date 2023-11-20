import React from 'react';
//import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ siteName }) => (
  <header className="header">
    <div className="header-top">
      <div className="logo">{siteName}</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products" />
        <button type="submit">Search</button>
      </div>
      <div className="user-actions">
        <button type="button">Login</button>
        <button type="button">Register</button>
      </div>
    </div>
    <nav className="navigation">
      <ul>
        <li><a href="#women">Women's Fashion</a></li>
        <li><a href="#men">Men's Fashion</a></li>
        <li><a href="#kids">Kids' Fashion</a></li>
        <li><a href="#accessories">Accessories</a></li>
      </ul>
    </nav>
  </header>
);

/*Header.propTypes = {
  siteName: PropTypes.string.isRequired,
};*/

export default Header;