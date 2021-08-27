import React from 'react';
import "./checkout.styles.scss";

import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';

import {selectCartItems, selectCartItemsCount} from "../../redux/cart/cart.selectors";

const CheckoutPage = () => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default CheckoutPage;
