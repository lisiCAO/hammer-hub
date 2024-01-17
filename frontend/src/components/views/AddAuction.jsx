import React, { useState } from "react";
import axios from "axios";
import "./AddAuction.css";

const AddAuction = () => {
    const [formData, setFormData] = useState({
        sellerEmail: "",
        itemName: "",
        description: "",
        startingPrice: 0,
    })

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/api/auctions", {
                sellerEmail: formData.sellerEmail,
                itemName: formData.itemName,
                description: formData.description,
                lastPrice: formData.startingPrice,
        })
            console.log(response);
            alert(formData.itemName + "created!");
            setFormData({sellerEmail:"", itemName: "", description: "", startingPrice: 0});
        } catch (error) {
         console.error(error);
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value});
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
                        value={formData.sellerEmail}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label htmlFor="itemName">
                    Item Name:
                    <input
                        type="text"
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="description">
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="startingPrice">
                    Starting Price:
                    <input
                        type="number"
                        name="startingPrice"
                        value={formData.startingPrice}
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default AddAuction;