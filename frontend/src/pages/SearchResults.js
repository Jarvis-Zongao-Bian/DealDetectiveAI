import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchProducts } from '../services/api';
import ProductCard from '../components/ProductCard';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const query = searchParams.get('query');
        if (query) {
            searchProducts(query).then(setProducts);
        }
    }, [searchParams]);

    return (
        <div className="container">
            <h2>Search Results</h2>
            <div className="grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default SearchResults;
