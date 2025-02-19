import React from 'react';

const ProductCard = ({ product }) => {
    return (
        <div className="card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <a href={product.url} target="_blank" rel="noopener noreferrer">View Product</a>
        </div>
    );
};

export default ProductCard;
