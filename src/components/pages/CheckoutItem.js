import React from "react";

import { connect } from "react-redux";
import { deleteItem, addItem, removeQuantity } from "../../actions";

const CheckoutItem = props => {
  const { name, imageUrl, quantity, price, id } = props.cartItem;

  const onDeleteItem = id => {
    const confirm = window.confirm(
      "Are you sure you want to remove this item ??"
    );

    if (confirm) {
      return props.deleteItem(id);
    }
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">
        <i
          style={{ cursor: "pointer" }}
          onClick={() => props.removeQuantity(id)}
          className="fas fa-less-than color-main"
        ></i>{" "}
        {quantity}{" "}
        <i
          style={{ cursor: "pointer" }}
          onClick={() => props.addItem(props.cartItem)}
          className="fas fa-greater-than color-main"
        ></i>
      </div>
      <div className="price">${price}</div>
      <div onClick={() => onDeleteItem(id)} className="delete-button">
        &#10005;
      </div>
    </div>
  );
};

export default connect(
  null,
  { deleteItem, addItem, removeQuantity }
)(CheckoutItem);
