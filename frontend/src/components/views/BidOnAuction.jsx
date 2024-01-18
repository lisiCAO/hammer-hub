import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ApiService from "./../../service/ApiService";
import { useParams, Link } from "react-router-dom";
import './AddAuction.css';

const BidOnAuction = () => {
    const { id } = useParams();
    const [auction, setAuction] = useState({});
    const [bid, setBid] = useState(0); 
    const [bidderEmail, setBidderEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();



    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            try {
                const response = await ApiService.getAuctionById(id);
                setAuction(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
                setIsLoading(false);
            }
        }
        fetchData();
    }, [id]);

    const validateForm = () => {
        if (isNaN(bid) || parseFloat(bid) <= parseFloat(auction.lastPrice)) {
            alert("Bid must be higher than current price!");
            return false;
        }
    
        const emailRegex = /\S+@\S+\.\S+/;
        if (bidderEmail === "") {
            alert("Bidder email cannot be empty!");
            return false;
        } else if (!emailRegex.test(bidderEmail)) { 
            alert("Bidder email is not valid!");
            return false;
        }
    
        return true;
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!validateForm()) {
            return;
        }
        const data = {
            lastBidderEmail: bidderEmail,
            lastPrice: bid,
        };

        ApiService.patchAuction(id, data)
            .then((response) => {
                console.log(response.data);
                setAuction(response.data); 
                alert("Bid successfully!");
                navigate("/auctions");
            })
            .catch((error) => {
                console.error(error);
                alert("Error!");
            });
        
    };

    if(isLoading) {
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
                        value={bid}
                        onChange={(event) => setBid(parseFloat(event.target.value) || 0)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <Link to="/auctions"> View Auctions </Link>
        </div>
    );
}

export default BidOnAuction;