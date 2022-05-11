import React from "react";
import "../styles/Home.css";
import Banner from "../components/Banner";
// import Card from "../components/Card";
import Footer from "../components/Footer";
import Ukraine from "../components/Ukraine";

function Home() {
  return (
    <div className="home">
      <Ukraine />
      <Banner />
      <Footer />
    </div>
  );
}

export default Home;
