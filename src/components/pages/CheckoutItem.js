import React from "react";

const CheckoutItem = props => {
  const { name, imageUrl, quantity, price } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="name">{name}</div>
      <div className="quantity">{quantity}</div>
      <div className="price">${price}</div>
      <div className="delete-button">&#10005;</div>
    </div>
  );
};

export default CheckoutItem;
