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
      <div className="container">
        <h1>Shop Page</h1>
        {collections.map(collection => (
          <Collection key={collection.id} collection={collection} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
