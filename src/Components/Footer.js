import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { AiFillHeart, AiOutlineMail } from "react-icons/ai";
import { SlCallIn } from "react-icons/sl";
import { IoLocationOutline } from "react-icons/io5";
function Footer() {
  return (
    <div className="Footer">
      <div className="footer_upersection">
        <img
          src="https://printcalgary.com/wp-content/uploads/2021/10/PrintCalgary-Logo-1.png"
          alt="logo"
        />
      </div>
      <div className="footer_lowersection">
        <div className="black-box_box">
          <p className="pink">
            We are open to support Calgary businesses producing rush orders
            everyday.
          </p>
          <div className="icons_footer_div">
            <BsFacebook className="footer_icons" />
            <BsInstagram className="footer_icons" />
          </div>
          <p className="copyrights">
            Copyright @ 2022 Print Calgary. All Rights Reserved.
          </p>
          <p>Built By Qhr Solutions</p>
        </div>
        <div className="Footer_quicklinks">
          <h2>Quick Links</h2>
          <ul className="footer_links">
            <li>FAQ'S</li>
            <li>Blog</li>
            <li>Wishlist</li>
            <li>All products</li>
            <li>Request A Quote</li>
            <li>Request A Quote</li>
          </ul>
        </div>
        <div className="Footer_quicklinks w_fix">
          <h2>Recent News</h2>
          <ul className="footer_links">
            <li>Tips to create an effective signage Calgary</li>
            <li className="pink">JANUARY 19, 2022</li>
            <li>Building a Relationship with a Good Printer</li>
            <li className="pink">OCTOBER 24, 2021</li>
          </ul>
        </div>
        <div className="Footer_quicklinks">
          <h2>Contact us</h2>
          <ul className="footer_links">
            <li className="pink flex-gap">
              <IoLocationOutline /> STORE LOCATION
            </li>
            <li>3632 Burnsland Rd SE</li>
            <li>--------------------------</li>
            <li className="pink flex-gap">
              <SlCallIn />
              CALL US
            </li>

            <li>(403) 235-1616</li>
            <li>--------------------------</li>
            <li className="pink flex-gap">
              <AiOutlineMail />
              DROP A LINE
            </li>
            <li>orders@printcalgary.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
