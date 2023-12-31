import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <p>{process.env.URL}</p>
      <Nav />
      <Carousel />
      <div className="mt-5">
        <Card />
      </div>
      <h1 className="mt-5">Recommended Recipes</h1>
      <Card />
      <center>
        <button className="btn btn-primary m-5">Load More</button>
      </center>
      <Footer />
    </>
  );
};

export default Home;
