import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts, getEnhancedRecommendations, saveBrowsingHistory } from '../services/api';
import ProductCard from '../components/ProductCard';

const EnhancedSearchResults = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);
    const userId = 1; // Simulate user ID (replace with actual auth system if available)

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            searchProducts(query).then((result) => {
                setProducts(result);
                result.forEach((product) => {
                    saveBrowsingHistory(userId, product.name, query);
                });
            });
            getEnhancedRecommendations(userId, query).then(setRecommendations);
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

            <h2>Personalized AI Recommendations</h2>
            <ul>
                {recommendations.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default EnhancedSearchResults;
