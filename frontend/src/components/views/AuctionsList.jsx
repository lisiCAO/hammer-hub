import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AuctionsList.css";

const AuctionsList = () => {
    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {      
            const result = await axios("http://localhost:3000/api/auctions");
            setAuctions(result.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
            };
        fetchData();
    }, []);
    if(isLoading) {
        return <div>Loading...</div>
    }
    
    return (
        <div className="auctions-list">
            <h1 className="auctions-list__title">Auctions</h1>
            {auctions.map((auction) => (
                <li className="auctions-list__item" key={auction.id}>
                    <h2 className="auctions-list__item-title">{auction.itemName}</h2>
                    <p>{auction.itemDescription}</p>
                    <p>Last Bid: ${auction.lastPrice}</p>
                    <p>Last Bidder: {auction.lastBidderEmail}</p>
                </li>
            ))}
        </div>
    );
}

export default AuctionsList;