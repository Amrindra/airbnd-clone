import Card from "./Card";
// import { Button } from "@mui/material";
// import React, { useState } from "react";
// import { useHistory } from "react-router";
import "../styles/Banner.css";
// import Search from "./Search";
import { Link } from "react-router-dom";

function Banner() {
  // const history = useHistory();
  // const [showSearch, setShowSearch] = useState(false);

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

        <h3> Inspiration for your next trip</h3>
        <div className="card-section">
          <Card
            src="https://a0.muscache.com/im/pictures/73250991-433e-4950-b7d1-59bba711bb57.jpg?im_w=320"
            title="Stowe"
            description="167 miles away"
            className="first-card"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/e68a0a87-e41a-489e-a03e-e11236d9b679.jpg?im_w=320"
            title="Portland"
            description="99 miles away"
            className="second-card"
          />
          <Card
            src="https://a0.muscache.com/im/pictures/aef20929-0d6a-40e7-8ac9-321ff0edf8c9.jpg?im_w=320"
            title="Lincoln"
            description="120 miles away"
            className="third-card"
          />

          <Card
            src="https://a0.muscache.com/im/pictures/54582c41-77ef-4f41-aa88-6a4ed0068f4b.jpg?im_w=320"
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
              src="https://a0.muscache.com/im/pictures/1ca4a497-ba40-4429-be1c-ac6abe4209c6.jpg?im_w=2560"
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

      {/* <div className="banner-homepage-background">
        <img
          src="https://a0.muscache.com/im/pictures/6dbfc87a-22a4-4d4a-b352-99aa93a98e78.jpg?im_w=720"
          alt=""
        />
        <h3>Let your curiosity do the booking</h3>
      </div> */}

      {/* <div className="banner__search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner__searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div> */}

      {/* <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>

        <h5>
          {" "}
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div> */}
    </div>
  );
}

export default Banner;
