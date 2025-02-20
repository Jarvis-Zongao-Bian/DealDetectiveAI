import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts, getRecommendations, comparePrices } from '../services/api';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const [priceComparisons, setPriceComparisons] = useState([]);

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            searchProducts(query).then(setProducts);
            getRecommendations(query).then(setRecommendations);
            comparePrices(query).then(setPriceComparisons);
        }
    }, [searchParams]);

    return (
        <div className="container">
            <h2>Search Results</h2>
            <div className="grid">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

            <h2>Price Comparison from Multiple Retailers</h2>
            <ul className="price-list">
                {priceComparisons.map((item, index) => (
                    <li key={index}>
                        <strong>{item.name}</strong> - {item.price} from <a href={item.url} target="_blank" rel="noopener noreferrer">{item.source}</a>
                    </li>
                ))}
            </ul>

            <h2>AI-Powered Recommendations</h2>
            <ul>
                {recommendations.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default SearchResults;
