import React, { Fragment } from "react";
import Navbar from "../layouts/Navbar";
import Slider from "../Slider";
import Category from "../Category";
import Products from "../Products";
import NewsLetter from "../NewsLetter";
import Footer from "../Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <NewsLetter />
      <Footer />
    </Fragment>
  );
};

export default Home;
