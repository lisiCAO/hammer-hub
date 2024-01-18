import axios from "axios";
const createURL = (path) => `${API_URL}${path}`;
const API_URL = "http://localhost:3000/api/";
const handleApiError = (error) => {
    if (error.response) {
    throw error;
    } else if (error.request) {
    throw error;
    }
    throw error;
};
const ApiService = {
    createAuction: async (formData) => {
        try{
        const response = await axios.post(createURL("auctions"), {
            sellerEmail: formData.sellerEmail,
            itemName: formData.itemName,
            itemDescription: formData.itemDescription,
            lastPrice: formData.startingPrice,
        });
        return response;
    } catch (error) {
        handleApiError(error);
    }
},
    getAuctions: async () => {
        try {
            const response = await axios.get(createURL("auctions"));
            return response;
        } catch (error) {
            handleApiError(error);
        }
    },
    getAuctionById: async (id) => {
        try {
            const response = await axios.get(createURL(`auctions/${id}`));
            return response;
        } catch (error) {
            handleApiError(error);
        }
    },
    patchAuction: async (id, data) => {
        try {
            const response = await axios.patch(createURL(`auctions/${id}`), data);
            return response;
        } catch (error) {
            handleApiError(error);
        }
    },
    deleteAuction: async (id) => {
        try {
            const response = await axios.delete(createURL(`auctions/${id}`));
            return response;
        } catch (error) {
            handleApiError(error);
        }
    },
};

export default ApiService;
