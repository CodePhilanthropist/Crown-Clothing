import React from 'react';
import "./cart-item.styles.scss";

const Cartitem = ({item: {imageUrl, price, name }}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
        </div>
    )
}

export default Cartitem
