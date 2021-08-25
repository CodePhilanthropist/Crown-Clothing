import React from 'react';
import "./cart-icon.styles.scss";
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";

import {connect} from "react-redux";
import {toggleCartHidden} from "../../redux/cart/cart.types";
const CartIcon = () => {
    return (
        <div className="cart-icon">
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);
