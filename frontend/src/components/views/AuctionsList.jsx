import React, { useState, useEffect } from "react";
import ApiService from "./../../service/ApiService";
import { Link } from "react-router-dom";
import "./AuctionsList.css";
const AuctionItem = ({ auction }) => (
    <li className="auctions-list__item">
        <h2 className="auctions-list__item-title">{auction.itemName}</h2>
        <p>{auction.itemDescription}</p>
        <p>Last Bid: ${auction.lastPrice}</p>
        <p>Last Bidder: {auction.lastBidderEmail}</p>
        <Link to={`/auction/${auction.id}`}>Bid on This Auction</Link>
    </li>
);

const AuctionsList = () => {
    const [auctions, setAuctions] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            try {
                const response = await ApiService.fetchAuctions();
                setAuctions(response.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    if(isLoading) {
        return <div>Loading...</div>
    }
    if(error) {
        return <div>Error loading auctions: {error}</div>
    }
    
    return (
        <div className="auctions-list">
            <h1 className="auctions-list__title">Auctions</h1>
            <Link to="/add-auction" className="add-auction-button">Add New Auction</Link> 
            {auctions.map((auction) => <AuctionItem key={auction.id} auction={auction} />)}
        </div>
    );
}

export default AuctionsList;