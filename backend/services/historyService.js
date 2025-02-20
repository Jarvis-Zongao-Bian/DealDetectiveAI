const pool = require('../config/db');

const addBrowsingHistory = async (userId, productName, searchQuery) => {
    try {
        await pool.query(
            'INSERT INTO user_browsing_history (user_id, product_name, search_query) VALUES ($1, $2, $3)',
            [userId, productName, searchQuery]
        );
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to save browsing history');
    }
};

const getBrowsingHistory = async (userId) => {
    try {
        const result = await pool.query(
            'SELECT product_name, search_query FROM user_browsing_history WHERE user_id = $1 ORDER BY timestamp DESC LIMIT 5',
            [userId]
        );
        return result.rows;
    } catch (err) {
        console.error('Database Error:', err);
        throw new Error('Failed to retrieve browsing history');
    }
};

module.exports = { addBrowsingHistory, getBrowsingHistory };
