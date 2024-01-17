import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { set } from "../../../backend/database";

const BidOnAuction = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState({});
    const [lastPrice, setLastPrice] = useState(0); 
    const [bidderEmail, setBidderEmail] = useState("");

    useEffect(() => {
        axios.get(`/api/auctions/${id}`)
        .then((response) => {
            setAuction(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    }
    , [id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.patch(`/api/auctions/${id}`, {
            amount: lastPrice,
            email: bidderEmail,
        })
        .then((response) => {
            setAuction(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
    };

    if(!auction.id) {
        return <div>Loading...</div>;
    }

    return (
        <div className="auctions-list">
            <h1 className="auctions-list__title">Auction: {auction.itemName}</h1>
            <h2 className="auctions-list__item-title">Current Price: ${auction.lastPrice}</h2>
            <h2 className="auctions-list__item-title">Bidder: {auction.bidderEmail}</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Bidder Email:
                    <input
                        type="text"
                        name="bidderEmail"
                        value={bidderEmail}
                        onChange={(event) => setBidderEmail(event.target.value)}
                    />
                </label>
                <label>
                    Bid Amount:
                    <input
                        type="number"
                        name="lastPrice"
                        value={lastPrice}
                        onChange={(event) => setLastPrice(event.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}