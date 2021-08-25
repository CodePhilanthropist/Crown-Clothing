import React from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingIcon/>
            <span>0</span>
        </div>
    )
}

export default CartIcon
