import React from "react";
import "./Home.css";
import "antd/dist/antd.css";
import Header from "../header/Header";
import Slider from "./Slider/Slider";
import About from "../About/About";
import Product from "../products/Product";
import Footer from "../fOOTER/Footer";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <About/>
      <Product/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
