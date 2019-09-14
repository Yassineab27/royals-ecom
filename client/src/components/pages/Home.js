import React from "react";

import MenuMain from "../home-menu/MenuMain";
import MenuSec from "../home-menu/MenuSec";

const Home = () => {
  return (
    <div className="homepage container">
      <h2 className="text-center">Choose Your Style.</h2>
      <div className="small-underline" />
      <MenuMain />
      <h2 className="text-center">Collections</h2>
      <div className="small-underline" />
      <MenuSec />
    </div>
  );
};

export default Home;
