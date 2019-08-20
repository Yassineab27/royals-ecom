import React from "react";

import "../../App.css";

const Home = () => {
  return (
    <div className="homepage container">
      <div className="menu-main">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">MEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">WOMEN</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
      <div className="menu-secondary">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">PANTS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SHIRTS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SHOES</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">HATS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
