import React, { useState } from "react";
import "./Buycard.css";
import { AiFillStar } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
function Buycard() {
  const [count, setCount] = useState(1);
  return (
    <div className="Product_buy">
      <img
        src="https://printcalgary.com/wp-content/uploads/2021/10/Picture-073-scaled.jpg"
        alt="product"
      />

      <div className="products_buy_buttons">
        <div className="Product_buttons">
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            -
          </button>
          {count}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
        <MdAddShoppingCart className="cart_button" />
      </div>
      <div className="poducts_name">
        <p>Tickets</p>
        <div>
          <AiFillStar className="star_icons" />
          <AiFillStar className="star_icons" />
          <AiFillStar className="star_icons" />
          <AiFillStar className="star_icons" />
          <AiFillStar className="star_icons" />
        </div>
      </div>
      <p className="pink">$28.00</p>
    </div>
  );
}

export default Buycard;
