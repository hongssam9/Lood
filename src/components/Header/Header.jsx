import React from 'react';
import './Header.css'
import logo from '../images/logo512.png'
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <Link to="/">
                <img id="header__logo" src={logo} alt="Logo" />
            </Link>
            {/* <Link to="/Menu">
                <button id="header__menu">
                    <div className="header__menu--bar"></div>
                    <div className="header__menu--bar"></div>
                    <div className="header__menu--bar"></div>
                </button>
            </Link> */}
        </div>
    );
};

export default Header;