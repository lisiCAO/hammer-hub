import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    return (
        <div className="welcome">
            <h1 className="welcome__title">Welcome to Auctions!</h1>
            <p className="welcome__description">Auctions is a simple web application that allows users to create auctions and bid on them.</p>
            <Link to="/auctions" style={{ display: 'block', margin: '10px 0' }}> View Auctions </Link>
            <Link to="/add-auction" style={{ display: 'block', margin: '10px 0' }}> Add Auction </Link>
        </div>
    );
}

export default Welcome;