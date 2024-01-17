import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AuctionsList.css";

const AuctionsList = () => {
    const [auctions, setAuctions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios("http://localhost:3000/api/auctions");
        setAuctions(result.data);
        };
        fetchData();
    }, []);
    
    return (
        <div className="auctions-list">
            <h1 className="auctions-list__title">Auctions</h1>
            {auctions.map((auction) => (
                <li className="auctions-list__item" key={auction.id}>
                    <h2 className="auctions-list__item-title">{auction.title}</h2>
                </li>
            ))}
        </div>
    );
}

export default AuctionsList;