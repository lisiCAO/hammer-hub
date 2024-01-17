import React, { useState, useEffect } from "react";
import axios from "axios";

const AuctionsList = () => {
    const [auctions, setAuctions] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
        const result = await axios("/api/auctions");
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
                    <p className="auctions-list__item-description">{auction.description}</p>
                    <p className="auctions-list__item-price">{auction.lastPrice}</p>
                </li>
            ))}
        </div>
    );
}

export default AuctionsList;