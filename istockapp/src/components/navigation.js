import React from "react";
import { Link } from "react-router-dom";

const Navigation = (props) => {
    return (
        <div className="nav">
            <Link to="/dashboard">
                <div>Home</div>
            </Link>
            <Link to="/about">
                <div>About</div>
            </Link>
            <Link to="/dashboard">
                <div>Dashboard</div>
            </Link>
            <Link to="/stock">
                <div>Stocks</div>
            </Link>
        </div>
    );
};

export default Navigation;
