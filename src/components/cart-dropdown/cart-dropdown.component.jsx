import React from 'react';
import {CustomButton} from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import Cartitem from '../cart-item/cart-item.component';
import {connect} from "react-redux";

const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Go to Checkout</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown;
