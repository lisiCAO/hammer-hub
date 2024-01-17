import React, { useState } from "react";
import axios from "axios";

const AddAuction = () => {
    const [sellerEmail, setSellerEmail] = useState(""); // [1
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [startingPrice, setStartingPrice] = useState(0);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("/api/auctions", {
            sellerEmail: sellerEmail,
            itemName: itemName,
            description: description,
            lastPrice: startingPrice,
        })
        .then((response) => {
            console.log(response);
            alert(response.itemName + " created!");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div className="auction-add">
            <h1 className="auction-add__title">Add Auction</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="sellerEmail">
                    Seller Email:
                    <input
                        type="text"
                        name="sellerEmail"
                        value={sellerEmail}
                        onChange={(event) => setSellerEmail(event.target.value)}
                        retuired
                    />
                </label>
                <label htmlFor="itemNmae">
                    Item Name:
                    <input
                        type="text"
                        name="itemName"
                        value={itemName}
                        onChange={(event) => setItemName(event.target.value)}
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </label>
                <label htmlFor="startingPrice">
                    Starting Price:
                    <input
                        type="number"
                        name="startingPrice"
                        value={startingPrice}
                        onChange={(event) => setStartingPrice(event.target.value)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddAuction;