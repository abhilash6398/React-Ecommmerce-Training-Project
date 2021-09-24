import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './Navbar.css';

function navbar() {

  return (

    <div className="Nav__head">
      <div className="Nav__logo">
        {/* <img className="nav__logo" src="" alt="GeekHub Logo" /> */}
      </div>
      <div className="Nav__links">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
      </div>
      <div className="Nav__icons">
        <ul>
          <li><img alt="Account" src="https://img.icons8.com/material-sharp/24/000000/guest-male.png"/></li>
          <li><img alt="Wishlist" src="https://img.icons8.com/ios-glyphs/24/000000/like--v1.png"/></li>
          <li><img alt="Cart" src="https://img.icons8.com/material-rounded/24/000000/shopping-cart.png"/></li>
          <li><img alt="Search" src="https://img.icons8.com/ios-filled/24/000000/search--v1.png"/></li>
        </ul>
      </div>

    </div>
  )
}

export default navbar
