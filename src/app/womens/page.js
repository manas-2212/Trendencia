'use client';
import React, { useState } from 'react';
import styles from './womens.module.css';
import Link from 'next/link';

const allProducts = [
  { id: 1, name: "Floral Print Dress", category: "Dresses", price: 1299, image: "/floral.jpg" },
  { id: 2, name: "High-Waist Jeans", category: "Bottomwear", price: 1499, image: "/high waist.jpg" },
  { id: 3, name: "Casual Crop Top", category: "Topwear", price: 599, image: "/croptop.jpg" },
  { id: 4, name: "Beige Cardigan", category: "Outerwear", price: 1799, image: "/cardigan.jpg" },
  { id: 5, name: "Black Leggings", category: "Bottomwear", price: 899, image: "/leggings.jpg" },
  { id: 6, name: "Sleeveless Blouse", category: "Topwear", price: 699, image: "/blouse.jpg" },
  { id: 7, name: "Denim Jacket", category: "Outerwear", price: 2199, image: "/denimjacket.jpg" },
  { id: 8, name: "Pleated Skirt", category: "Bottomwear", price: 999, image: "/pleated.jpg" },
  { id: 9, name: "Printed Kurti", category: "Ethnic", price: 1199, image: "/kurti.jpg" },
  { id: 10, name: "Anarkali Suit", category: "Ethnic", price: 2499, image: "/anarkali.jpg" }
];

const categories = ['All', 'Topwear', 'Bottomwear', 'Outerwear', 'Dresses', 'Ethnic'];

const WomensPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = allProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory);

  return (
    <div className={styles['womens-page']}>
      <div className={styles['top-bar']}>
        <Link href="./"><div className="page-title">Trendencia</div></Link>
        <button className={styles['top-cart-btn']}>Cart</button>
      </div>

      <div className={styles['mens-container']}>
        <div className={styles.sidebar}>
          <h2>Filter</h2>
          <h4>Category</h4>
          {categories.map(category => (
          <div key={category}>
            <input
              type="radio"
              id={`category-${category}`}
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={() => setSelectedCategory(category)}
            />
            <label htmlFor={`category-${category}`}>{category}</label>
          </div>
        ))}
        </div>

        <div className={styles['products-section']}>
          <div className={styles['page-header']}>
            <h1>Women's Collection</h1>
            <p>Discover our curated selection of elegant, everyday, and ethnic wear</p>
          </div>

          <div className={styles['products-grid']}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles['product-card']}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensPage;
