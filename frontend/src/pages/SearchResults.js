import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts, getRecommendations } from '../services/api';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            searchProducts(query).then(setProducts);
            getRecommendations(query).then(setRecommendations);
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
