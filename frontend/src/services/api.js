import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5001/api';

export const fetchProducts = async () => {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
};

export const searchProducts = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/products/search`, {
            params: { name: query }
        });
        return response.data;
    } catch (err) {
        console.error('API Error:', err); // <-- Log the exact Axios error
        throw err;
    }
};
