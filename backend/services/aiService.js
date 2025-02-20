require('dotenv').config();
const OpenAI = require('openai');
const { getBrowsingHistory } = require('./historyService');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Ensure your environment variable is set
});

const getRecommendations = async (query) => {
    try {
        const prompt = `Recommend 5 products based on the following search query: "${query}". 
                        Include product name, category, and a brief description.`;

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });

        // Extract AI response
        const recommendations = response.data.choices[0].message.content;
        return recommendations;
    } catch (error) {
        console.error('OpenAI Error:', error.response?.data || error.message);
        throw new Error('Failed to fetch AI recommendations');
    }
};

module.exports = { getRecommendations };

const getEnhancedRecommendations = async (userId, query) => {
    try {
        const history = await getBrowsingHistory(userId);
        const historyString = history.map(h => `${h.product_name} (searched: ${h.search_query})`).join(', ');

        const prompt = `
            Based on the user's recent browsing history: ${historyString}, 
            and their current search query: "${query}", 
            recommend 5 personalized products. Include product name, category, and a brief description.
        `;

        const response = await openai.chat.completions.create({
            model: "gpt-4",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
        });

        const recommendations = response.data.choices[0].message.content;
        return recommendations;
    } catch (error) {
        console.error('OpenAI Error:', error.response?.data || error.message);
        throw new Error('Failed to fetch enhanced AI recommendations');
    }
};

module.exports = { getEnhancedRecommendations };