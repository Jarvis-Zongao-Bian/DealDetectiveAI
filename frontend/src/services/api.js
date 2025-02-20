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

export const getRecommendations = async (query) => {
    try {
        const response = await axios.get(`${API_URL}/ai/recommendations`, {
            params: { query },
        });
        return response.data.recommendations;
    } catch (err) {
        console.error('AI API Error:', err);
        throw err;
    }
};

export const getEnhancedRecommendations = async (userId, query) => {
    try {
        const response = await axios.get(`${API_URL}/ai/enhanced-recommendations`, {
            params: { userId, query },
        });
        return response.data.recommendations;
    } catch (err) {
        console.error('AI Enhanced API Error:', err);
        throw err;
    }
};

export const saveBrowsingHistory = async (userId, productName, searchQuery) => {
    try {
        await axios.post(`${API_URL}/history/add`, {
            userId,
            productName,
            searchQuery,
        });
    } catch (err) {
        console.error('Save History Error:', err);
    }
};
