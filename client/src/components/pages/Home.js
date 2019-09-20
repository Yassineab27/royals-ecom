import React from "react";

import MenuMain from "../home-menu/MenuMain";
import MenuSec from "../home-menu/MenuSec";
import Footer from "../layout/Footer";

const Home = () => {
  return (
    <div className="homepage container">
      <div className="home-hero"></div>
      <h1>Be Royal in your Own Fashion</h1>
      <h2 className="text-center">Choose Your Style.</h2>
      <div className="small-underline" />
      <MenuMain />
      <h2 className="text-center">Collections</h2>
      <div className="small-underline" />
      <MenuSec />
      <Footer />
    </div>
  );
};

export default Home;
