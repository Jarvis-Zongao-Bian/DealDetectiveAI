import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to DealDetectiveAI</h1>
            <SearchBar />
        </div>
    );
};

export default Home;
