import React from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    
});

export default CartIcon;
