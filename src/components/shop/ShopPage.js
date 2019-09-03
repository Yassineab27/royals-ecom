import React from "react";
import { connect } from "react-redux";
import Collection from "./Collection";
import { selectCollections } from "../selectors/shopDataSelectors";

const ShopPage = props => {
  return (
    <div className="shop-page container">
      <h1 className="text-center">Collections</h1>
      <div className="small-underline" />
      {props.collections.map(collection => (
        <Collection key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return { collections: selectCollections(state) };
};

export default connect(mapStateToProps)(ShopPage);
