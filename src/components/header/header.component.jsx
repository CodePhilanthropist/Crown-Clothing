import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";

import {connect} from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        <Link className="option" to="/shop">
          {currentUser ? <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div> : <Link className="option" to="/sign-in">SIGN IN</Link>}
        </Link>
        <CartIcon/>
      </div>
      <CartDropdown></CartDropdown>
    </div>
  );
};

const mapStateToProps = (state) =>({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);