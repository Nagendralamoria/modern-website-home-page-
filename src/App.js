import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Promotioncard from "./Components/Promotioncard";
import { AiFillHeart, AiOutlineMail } from "react-icons/ai";
import { SlCallIn } from "react-icons/sl";
import { BsFillPersonFill } from "react-icons/bs";
import Buycard from "./Components/Buycard";
import Buycard2 from "./Components/Buycard2";
function App() {
  return (
    <div className="App">
      <div className="Nav-top">
        <p>
          <SlCallIn className="navtop-icons" />
          (403) 235-1616 | <AiOutlineMail className="navtop-icons" />
          orders@printcalgary.com
        </p>
        <p>
          <BsFillPersonFill className="navtop-icons" />
          My Account | <AiFillHeart className="navtop-icons" />
          Wishlist
        </p>
      </div>
      <Navbar />
      <div className="hero-page">
        <div className="hero-page-details">
          <h1>
            Rush <br />
            Printing
          </h1>
          <h3>24 - 48 Hours Tornaround</h3>
          <p>
            We are open to support calgory businesses <br />
            producing rush orders everday.
          </p>
          <button>Request a quote </button>
        </div>
        <img
          src="https://www.cheapleaflets.net/templates/yootheme/cache/artwork-graphic-design-services-1762fbd0.jpeg"
          alt="heroimage"
        />
      </div>
      <div className="products">
        <h1>Products</h1>
        <div className="products-details">
          <ul>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
          </ul>
          <ul>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
          </ul>
          <ul>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
          </ul>
          <ul>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
          </ul>
          <ul>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
            <li>A-Frames</li>
          </ul>
        </div>
      </div>
      <div className="promotions">
        <h1>Promotions</h1>
        <div className="promotions-cards">
          <Promotioncard />
          <Promotioncard />
          <Promotioncard />
        </div>
      </div>
      <div className="clients">
        <h1>Some of our clients...</h1>
        <div className="logo-grid">
          <div className="client-logo">
            <img
              src="https://printcalgary.com/wp-content/uploads/2021/11/1.png"
              alt="logo"
            />
          </div>
          <div className="client-logo">
            <img
              src="https://printcalgary.com/wp-content/uploads/2021/11/2.png"
              alt="logo"
            />
          </div>
          <div className="client-logo">
            <img
              src="https://printcalgary.com/wp-content/uploads/2021/11/3.png"
              alt="logo"
            />
          </div>
          <div className="client-logo">
            <img
              src="https://printcalgary.com/wp-content/uploads/2021/11/4.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div className="products_title">
        <h1>Popular Products</h1>
        <p className="pink">View a few of our most popular products.</p>
      </div>
      <div className="products_grid">
        <Buycard />
        <Buycard2 />
        <Buycard />
        <Buycard2 />
        <Buycard />
        <Buycard2 />
        <Buycard />
        <Buycard2 />
      </div>
      <Footer />
    </div>
  );
}

export default App;
