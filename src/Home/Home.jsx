import React from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Header from "../header/Header";
import Slider from "./Slider/Slider";
import About from "../About/About";
import Product from "../products/Product";
import Footer from "../fOOTER/Footer";
import Contact from "../Contact/Contact";
import Banner from "../banner/Banner";
import Services from "../Services/Services"

const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
        <Slider />
        <About />
        <Product />
        <Services />
        <Banner />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
