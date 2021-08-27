import React from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ?
        cartItems.map((cartItem) => (
          <CartItem key={CartItem.id} item={cartItem} />
        ))
        :
          <span className="empty-message">
            Your Cart is Empty
          </span>
        }
        
      </div>
      <CustomButton onClick={()=>history.push('/checkout')}>Go to Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
