import React from "react";
import { Link } from "react-router-dom";

const MenuItem = props => {
  const { title, imgUrl, size, routeName } = props.section;
  return (
    <div className={`menu-item ${size}`}>
      <div
        className="background-img"
        style={{ backgroundImage: `url(${imgUrl})` }}
      />
      <div className="content">
        <Link to={`/shop/${routeName}`}>
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </Link>
      </div>
    </div>
  );
};

export default MenuItem;
