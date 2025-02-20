const express = require('express');
const { getRecommendations } = require('../services/aiService');
const router = express.Router();

// Route to get AI recommendations
router.get('/recommendations', async (req, res) => {
    const { query } = req.query;

    if (!query) return res.status(400).json({ error: 'Search query is required' });

    try {
        const recommendations = await getRecommendations(query);
        res.json({ recommendations });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Route to get enhanced AI recommendations
router.get('/enhanced-recommendations', async (req, res) => {
    const { userId, query } = req.query;

    if (!userId || !query) {
        return res.status(400).json({ error: 'User ID and search query are required' });
    }

    try {
        const recommendations = await getEnhancedRecommendations(userId, query);
        res.json({ recommendations });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
