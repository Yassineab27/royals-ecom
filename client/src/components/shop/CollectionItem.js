import React from "react";

import { connect } from "react-redux";
import { addItem } from "../../actions";
import { selectCurrentUser } from "../selectors/userSelectors";

const CollectionItem = props => {
  const handleAddItem = item => {
    if (!props.currentUser) {
      return alert("Please Login first.");
    }
    props.addItem(props.currentUser._id, item);
  };

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
        onClick={() => handleAddItem(props.item)}
        className="btn btn-invert btn-block"
      >
        Add to cart
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return { currentUser: selectCurrentUser(state) };
};

export default connect(
  mapStateToProps,
  { addItem }
)(CollectionItem);
