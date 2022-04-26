import React from 'react';
import { Link } from "react-router-dom";
import './Menu.css';

const Menu = () => {
    return (
        <div>
            <nav>
                <Link to="/" style={{ textDecoration: "none" }}>
                    <button className="headerButton" id="menuBackButton">
                        &#9665;
                    </button>
                </Link>
            </nav>
            <nav className="Menu">
                <Link to="/Info" style={{ textDecoration: "none" }}>About</Link>
                <br />
                <Link to="/Account" style={{ textDecoration: "none" }}> Account</Link>
                <br />
                <Link to="/Messages" style={{ textDecoration: "none" }}>Messages</Link>
                <br />
                <Link to="/Login" style={{ textDecoration: "none" }}>Login</Link>
                <br />
            </nav>
        </div>
    );
};

export default Menu;