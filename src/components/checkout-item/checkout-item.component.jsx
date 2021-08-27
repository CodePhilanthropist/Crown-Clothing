import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({cartItem: {name, imageUrl, price, quantity}}) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name"></span>
      <span className="quantity"></span>
      <span className="price"></span>
      <div className="remove-button">&#1005;</div>
    </div>
  );
};

export default CheckoutItem;
