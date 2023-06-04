import React, { useState } from "react";
import "./Buycard2.css";
import { AiFillStar } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
function Buycard2() {
  const [count, setCount] = useState(1);
  return (
    <div className="Product_buy">
      <img
        src="https://printcalgary.com/wp-content/uploads/2021/10/Picture-073-scaled.jpg"
        alt="product"
      />
      <div className="Product_buttons2">
        <p>Add to Basket</p>
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

export default Buycard2;
