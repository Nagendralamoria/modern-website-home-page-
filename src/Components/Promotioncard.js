import React from "react";
import "./Promotioncard.css";
function Promotioncard() {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://printcalgary.com/wp-content/uploads/elementor/thumbs/Picture-87215-pgc2u74b6wy3prn7i4fo1b1gjs3bw1ene9b8hrsg2s.jpg" />
      </div>
      <div className="card-content">
        <h1>$179 only sandwich board</h1>
        <p className="pink">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse,
          praesentium.
        </p>
        <p className="pink">-------------------</p>
        <h2> Promo code - PC105</h2>

        <button>Request A Quote</button>
      </div>
    </div>
  );
}

export default Promotioncard;
