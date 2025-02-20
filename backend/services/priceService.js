const axios = require('axios');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
require('dotenv').config();

const rapidApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST
    }
};

// OPTION 1: Using RapidAPI (Recommended)
const getPricesFromAPIs = async (query) => {
    try {
        const url = `https://amazon-data.p.rapidapi.com/search?query=${encodeURIComponent(query)}`;
        const response = await axios.request({ url, ...rapidApiOptions });
        return response.data.data.map(item => ({
            name: item.product_title,
            price: item.product_price,
            url: item.product_url,
            source: 'Amazon'
        }));
    } catch (err) {
        console.error('API Error:', err.message);
        throw new Error('Failed to fetch prices from APIs');
    }
};

// OPTION 2: Web Scraping with Puppeteer (Fallback)
const getPricesFromScraping = async (query) => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const searchUrl = `https://www.amazon.com/s?k=${encodeURIComponent(query)}`;

    try {
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });
        const content = await page.content();
        const $ = cheerio.load(content);

        const products = [];
        $('.s-result-item').each((index, element) => {
            const name = $(element).find('h2 a span').text().trim();
            const price = $(element).find('.a-price-whole').text().trim();
            const url = $(element).find('h2 a').attr('href');
            if (name && price && url) {
                products.push({
                    name,
                    price: `$${price}`,
                    url: `https://www.amazon.com${url}`,
                    source: 'Amazon'
                });
            }
        });

        return products;
    } catch (err) {
        console.error('Scraping Error:', err.message);
        throw new Error('Failed to scrape prices');
    } finally {
        await browser.close();
    }
};

// Main Function to Compare Prices
const comparePrices = async (query) => {
    try {
        // First, try using APIs
        const apiResults = await getPricesFromAPIs(query);
        if (apiResults.length > 0) return apiResults;

        // Fallback: Use Web Scraping
        const scrapeResults = await getPricesFromScraping(query);
        return scrapeResults;
    } catch (err) {
        console.error('Comparison Error:', err.message);
        throw new Error('Price comparison failed');
    }
};

module.exports = { comparePrices };
