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
        <div>
        <h1>Auctions</h1>
        {auctions.map((auction) => (
            <div key={auction.id}>
            <h2>{auction.title}</h2>
            <p>{auction.description}</p>
            </div>
        ))}
        </div>
    );
    }

export default AuctionsList;