import React from 'react'
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";

export const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <div className="option" to="/shop">Shop</div>
                <div className="option" to="/shop">Contact</div>
            </div>
        </div>
    )
}
