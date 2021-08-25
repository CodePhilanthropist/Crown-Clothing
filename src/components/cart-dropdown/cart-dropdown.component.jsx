import React from 'react';
import {CustomButton} from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdpwn = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>Checkout</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdpwn
