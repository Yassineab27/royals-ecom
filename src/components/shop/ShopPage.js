import React from "react";
import CollectionOverview from "./CollectionOverview";

const ShopPage = props => {
  return (
    <div className="shop-page container">
      <h1 className="text-center">Collections</h1>
      <div className="small-underline" />
      <CollectionOverview />
    </div>
  );
};

export default ShopPage;
