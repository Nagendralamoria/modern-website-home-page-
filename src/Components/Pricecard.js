import React from "react";
import "./Pricecard.css";
import { MdOutlineFlight } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
function Pricecard() {
  return (
    <div className="booking_card">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/AirAsia_New_Logo.svg/2048px-AirAsia_New_Logo.svg.png"
        alt="airline logo"
      />
      <div className="flight_timings">
        <div className="flight_dep">
          <p>22:15</p>
          <p>BLR</p>
        </div>
        <div className="flight_totaltime">
          <p>2h 30</p>
          <div className="border_flight">
            <div className="border"></div>
            <MdOutlineFlight className="flight_icon" />
          </div>
          <p>Direct</p>
        </div>
        <div className="flight_reachtime">
          <p>00:15</p>
          <p>JAI</p>
        </div>
      </div>
      <div className="flight_price">
        <p>11,500</p>
        <button>
          Select <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Pricecard;
