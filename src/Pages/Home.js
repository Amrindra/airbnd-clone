import React from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Ukraine from "../components/Ukraine";

function Home() {
  return (
    <div className="home">
      <Ukraine />
      <div className="home__section">
        <Banner />
      </div>

      <div className="home__section">
        {/* <Card
          src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
          title="3 Bedroom Flat in Bournemouth"
          description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
          price="£130/night"
        />
        <Card
          src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
          title="Penthouse in London"
          description="Enjoy the amazing sights of London with this stunning penthouse"
          price="£350/night"
        />
        <Card
          src="https://media.nomadicmatt.com/2018/apartment.jpg"
          title="1 Bedroom apartment"
          description="Superhost with great amenities and a fabolous shopping complex nearby"
          price="£70/night"
        /> */}
      </div>
    </div>
  );
}

export default Home;
