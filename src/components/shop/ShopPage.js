import React from "react";

import Collection from "./Collection";
import SHOP_DATA from "./shop-data";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page container">
        <h1 className="text-center">Collections</h1>
        <div className="small-underline" />
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
