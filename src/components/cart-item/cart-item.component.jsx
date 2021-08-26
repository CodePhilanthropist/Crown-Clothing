import React from 'react';
import "./cart-item.styles.scss";

const Cartitem = ({item: {imageUrl, price, name }}) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">
                    
                </span>
            </div>
        </div>
    )
}

export default Cartitem
