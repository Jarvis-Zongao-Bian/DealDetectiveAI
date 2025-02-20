const express = require('express');
const { addBrowsingHistory, getBrowsingHistory } = require('../services/historyService');
const router = express.Router();

// Save browsing history
router.post('/add', async (req, res) => {
    const { userId, productName, searchQuery } = req.body;

    if (!userId || !productName || !searchQuery) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        await addBrowsingHistory(userId, productName, searchQuery);
        res.status(201).json({ message: 'Browsing history saved' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Retrieve browsing history
router.get('/recent/:userId', async (req, res) => {
    const { userId } = req.params;

    try {
        const history = await getBrowsingHistory(userId);
        res.json(history);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
