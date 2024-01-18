import React, { useState } from "react";
import ApiService from "./../../service/ApiService";
import { useNavigate, Link } from 'react-router-dom';
import "./AddAuction.css";

const AddAuction = () => {
    const initialFormData = Object.freeze({
        sellerEmail: "",
        itemName: "",
        itemDescription: "",
        startingPrice: 0,
    });

    const navigate = useNavigate();

    const [formData, setFormData] = useState({ ...initialFormData })

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!validateEmail(formData.sellerEmail)) {
            alert('Please enter a valid email address.');
            return;
        }
        if (formData.startingPrice <= 0) {
            alert('Starting price must be greater than zero.');
            return;
        }
        try {
            const response = await ApiService.createAuction(formData);
            console.log(response);
            alert(`${formData.itemName} successfully added!`);
            setFormData({ ...initialFormData });
            navigate('/auctions'); 
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
                <label htmlFor="itemDescription">
                    itemDescription:
                    <input
                        type="text"
                        name="itemDescription"
                        value={formData.itemDescription}
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
            <Link to="/auctions"> Back to Auctions </Link>
        </div>
    );
}

export default AddAuction;