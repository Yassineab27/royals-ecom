import React from "react";

import MenuMain from "../home-menu/MenuMain";
import MenuSec from "../home-menu/MenuSec";

const Home = () => {
  return (
    <div className="homepage container">
      <MenuMain />
      <MenuSec />
    </div>
  );
};

export default Home;
