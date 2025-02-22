const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

const aiRoutes = require('./routes/ai');
app.use('/api/ai', aiRoutes);

const historyRoutes = require('./routes/history');
app.use('/api/history', historyRoutes);

const priceRoutes = require('./routes/prices');
app.use('/api/prices', priceRoutes);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
