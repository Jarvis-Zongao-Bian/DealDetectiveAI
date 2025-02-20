const express = require('express');
const { comparePrices } = require('../services/priceService');
const router = express.Router();

// Compare prices from different retailers
router.get('/compare', async (req, res) => {
    const { query } = req.query;

    if (!query) return res.status(400).json({ error: 'Search query is required' });

    try {
        const prices = await comparePrices(query);
        res.json(prices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
