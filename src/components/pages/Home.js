import React from "react";

import MenuMain from "../Home-menu/MenuMain";
import MenuSec from "../Home-menu/MenuSec";

const Home = () => {
  return (
    <div className="homepage container">
      <MenuMain />
      <MenuSec />
    </div>
  );
};

export default Home;
