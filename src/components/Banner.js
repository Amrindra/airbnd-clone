import Card from "./Card";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router";
import "../styles/Banner.css";
import Search from "./Search";

function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
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
