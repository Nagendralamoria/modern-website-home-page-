import React from "react";
import "./Navbar.css";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
function Navbar() {
  return (
    <div className="Navbar">
      <img
        src="https://printcalgary.com/wp-content/uploads/2021/11/logo.png"
        alt="logo"
      />
      <button>Request A Quote</button>
      <ul className="Nav-tabs">
        <li>Products</li>
        <li>Promotions</li>
        <li>Design Gallery</li>
        <li>Send Your Files</li>
        <li>Company</li>
      </ul>
      <div className="icons">
        <AiOutlineHeart />
        <AiOutlineShoppingCart />
      </div>
    </div>
  );
}

export default Navbar;
