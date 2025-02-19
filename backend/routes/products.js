const express = require('express');
const pool = require('../config/db');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM products');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Search product by name
router.get('/search', async (req, res) => {
    const { name } = req.query;
    try {
        if (!name) return res.status(400).json({ error: 'Search query is required' });
        const result = await pool.query('SELECT * FROM products WHERE LOWER(name) LIKE LOWER($1)', [`%${name}%`]);
        res.json(result.rows);
    } catch (err) {
        console.error(err); // <-- Check what error is logged here
        res.status(500).json({ error: err.message });
    }
});


module.exports = router;
