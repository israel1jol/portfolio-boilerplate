import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="navbar ">
            <div className="navbar-brand">Company.io</div>
            <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}

export default Navbar;