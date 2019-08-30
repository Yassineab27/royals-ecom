import React from "react";

const CartItem = ({ cartItem }) => {
  return (
    <div className="item">
      <img src={cartItem.imageUrl} alt={cartItem.name} />
      <div className="item-info">
        <p>{cartItem.name}</p>
        <p className="item-price">
          {cartItem.quantity} X {cartItem.price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
