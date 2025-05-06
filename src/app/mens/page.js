'use client';
import React, { useState } from 'react';
import './mens.css';


const allProducts = [
  { id: 1, name: "Classic White T-Shirt", category: "Topwear", price: 799, image: "/mens white.jpg" },
  { id: 2, name: "Blue Denim Jeans", category: "Bottomwear", price: 1499, image: "/mens jeans.jpg" },
  { id: 3, name: "Black Leather Jacket", category: "Outerwear", price: 2999, image: "/mens leather.jpg" },
  { id: 4, name: "Grey Hoodie", category: "Outerwear", price: 1699, image: "/mens hoodie.jpg" },
  { id: 5, name: "Slim Fit Chinos", category: "Bottomwear", price: 1299, image: "/mens chino.jpg" },
  { id: 6, name: "Striped Casual Shirt", category: "Topwear", price: 999, image: "/mens casual.jpg" },
  { id: 7, name: "Navy Blue Blazer", category: "Outerwear", price: 3499, image: "/mens blazer.jpg" },
  { id: 8, name: "Printed Round Neck T-Shirt", category: "Topwear", price: 899, image: "/mens round.jpg" },
  { id: 9, name: "Black Formal Trousers", category: "Bottomwear", price: 1599, image: "/mens trousers.jpg" },
  { id: 10, name: "Beige Shorts", category: "Bottomwear", price: 699, image: "/mens beige.jpg" }
];

const categories = ['All', 'Topwear', 'Bottomwear', 'Outerwear'];

const MensPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const handleSortChange = (e) => setSortOrder(e.target.value);



  
  const filteredProducts = allProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });




  return (
    <div className="mens-container">
      <div className="sidebar">
        <h2>Filter</h2>
        <h4>Category</h4>
        {categories.map(category => (
          <div key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryChange(category)}
            />
            <label>{category}</label>
          </div>
        ))}
      </div>

      <div className="products-section">
        <div className="products-header">
          <h1>Men's Clothing</h1>

        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MensPage;