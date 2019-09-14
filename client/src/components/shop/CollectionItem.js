import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../actions";

const CollectionItem = props => {
  const { name, imageUrl, price } = props.item;
  return (
    <div className="collection-item">
      <div
        className="item-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="item-footer">
        <span className="item-name">{name}</span>
        <span className="item-price">$ {price}</span>
      </div>
      <button
        onClick={() => props.addItem(props.item)}
        className="btn btn-invert btn-block"
      >
        Add to cart
      </button>
    </div>
  );
};

export default connect(
  null,
  { addItem }
)(CollectionItem);
