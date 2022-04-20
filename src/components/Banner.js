import Card from "./Card";
import "../styles/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  return (
    <div className="banner">
      <div className="banner-wrapper">
        <div className="banner-homepage-image">
          <div className="banner-homepage-image-desc">
            <h1>Let your curiosity do the booking</h1>
            <Link to="/search">
              <button>I'm flexible</button>
            </Link>
          </div>
        </div>

        <div className="slider-container">
          <h3> Inspiration for your next trip</h3>
          <div className="slider-icons">
            <i
              className="fa-solid fa-angle-left slider-icon left"
              onClick={sliderLeft}
            ></i>
            <i
              className="fa-solid fa-angle-right slider-icon right"
              onClick={sliderRight}
            ></i>
          </div>
        </div>

        <div className="card-section" id="slider">
          <Card
            src="https://user-images.githubusercontent.com/70451928/159596344-c6a58234-0493-43b9-9bc9-d1a5f5cef6ed.jpg"
            title="Stowe"
            description="167 miles away"
            className="first-card"
          />
          <Card
            src="https://user-images.githubusercontent.com/70451928/159596347-e83475dc-1725-4c4d-976e-1ca796a79441.jpg"
            title="Portland"
            description="99 miles away"
            className="second-card"
          />
          <Card
            src="https://user-images.githubusercontent.com/70451928/159596357-966f935c-b9ea-45dd-8d3f-0afc13ebf3a9.jpg"
            title="Lincoln"
            description="120 miles away"
            className="third-card"
          />

          <Card
            src="https://user-images.githubusercontent.com/70451928/159596346-c102ba66-05d0-48b6-8ed0-5be25b3066ed.jpg"
            title="Newport"
            description="61 miles away"
            className="forth-card"
          />
        </div>

        <h3 className="title">Discover Airbnb Experiences</h3>

        {/* FEATURE SECTION */}
        <div className="feature-wrapper">
          <div className="feature-left">
            <div className="feature-desc">
              <h3>Things to do on your trip</h3>
              <button>Experiences</button>
            </div>
          </div>

          <div className="feature-right">
            <div className="feature-desc">
              <h3>Things to do from home</h3>
              <button>Online Experiences</button>
            </div>
          </div>
        </div>

        {/* GIFT CARDS SECTION */}
        <div className="banner-gift-card-wrapper">
          <div className="banner-gift-card-left">
            <h3>Shop Airbnb gift cards</h3>
            <button>Learn more</button>
          </div>

          <div className="banner-gift-card-right">
            <img
              src="https://user-images.githubusercontent.com/70451928/159596356-068963f1-0e07-48f4-ba08-9c8f711f4a1f.jpg"
              alt=""
            />
          </div>
        </div>

        {/* QUESTION SECTION  */}
        <div className="question-container">
          <div className="question-wrapper">
            <h1>Questions about hosting?</h1>
            <button>Ask a Superhost</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
