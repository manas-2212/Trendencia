'use client';
import React, { useState } from 'react';
import './womens.css';

const allProducts = [
    {
      "id": 1,
      "name": "Floral Print Dress",
      "category": "Dresses",
      "price": 1299,
      "image": "/womens floral.jpg"
    },
    {
      "id": 2,
      "name": "High-Waist Jeans",
      "category": "Bottomwear",
      "price": 1499,
      "image": "/womens jeans.jpg"
    },
    {
      "id": 3,
      "name": "Casual Crop Top",
      "category": "Topwear",
      "price": 599,
      "image": "/womens crop.jpg"
    },
    {
      "id": 4,
      "name": "Beige Cardigan",
      "category": "Outerwear",
      "price": 1799,
      "image": "/womens cardigan.jpg"
    },
    {
      "id": 5,
      "name": "Black Leggings",
      "category": "Bottomwear",
      "price": 899,
      "image": "/womens leggings.jpg"
    },
    {
      "id": 6,
      "name": "Sleeveless Blouse",
      "category": "Topwear",
      "price": 699,
      "image": "/womens blouse.jpg"
    },
    {
      "id": 7,
      "name": "Denim Jacket",
      "category": "Outerwear",
      "price": 2199,
      "image": "/womens jacket.jpg"
    },
    {
      "id": 8,
      "name": "Pleated Skirt",
      "category": "Bottomwear",
      "price": 999,
      "image": "/womens skirt.jpg"
    },
    {
      "id": 9,
      "name": "Printed Kurti",
      "category": "Ethnic",
      "price": 1199,
      "image": "/womens kurti.jpg"
    },
    {
      "id": 10,
      "name": "Anarkali Suit",
      "category": "Ethnic",
      "price": 2499,
      "image": "/womens anarkali.jpg"
    }
  ]
  ;


const categories = ['All', 'Topwear', 'Bottomwear', 'Outerwear'];


const WomensPage = () => {
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
            <h1>Women's Clothing</h1>
  
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
}

export default WomensPage