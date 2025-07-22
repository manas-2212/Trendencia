'use client';
import React, { useState } from 'react';
import styles from './kids.module.css';
import Link from 'next/link';
import { useCart } from '../CartContext';

const allProducts = [
  { id: 1, name: "Cartoon Print T-Shirt", category: "Topwear", price: 499, image: "/kidscartoon.jpg" },
  { id: 2, name: "Denim Dungarees", category: "Bottomwear", price: 999, image: "/denimdungaree.jpg" },
  { id: 3, name: "Hooded Jacket", category: "Outerwear", price: 1199, image: "/hoodedjacket.jpg" },
  { id: 4, name: "Striped Shorts", category: "Bottomwear", price: 699, image: "/stripedshorts.jpg" },
  { id: 5, name: "Polo T-Shirt", category: "Topwear", price: 599, image: "/polotshirt.jpg" },
  { id: 6, name: "Puffer Jacket", category: "Outerwear", price: 1399, image: "/pufferjacket.jpg" },
  { id: 7, name: "Printed Pyjamas", category: "Bottomwear", price: 599, image: "/kidspyjama.jpg" },
  { id: 8, name: "Floral Dress", category: "Topwear", price: 899, image: "/floraldress.jpg" },
  { id: 9, name: "Sweatshirt", category: "Outerwear", price: 1099, image: "/kidssweatshirt.jpg" },
  { id: 10, name: "Cotton Shorts", category: "Bottomwear", price: 499, image: "/cottonshorts.jpg" }
];

const categories = ['All', 'Topwear', 'Bottomwear', 'Outerwear'];

const KidsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const { addToCart, cart } = useCart();

  const filteredProducts = allProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  return (
    <div className={styles['kids-page']}>
      <div className={styles['top-bar']}>
        <div className="page-title">Trendencia</div>
        <div className={styles['cart-wrapper']}>
          <Link href="/cart">
            <button className={styles['top-cart-btn']}>
              Cart
              {cart.length > 0 && <span className={styles['cart-count']}>{cart.length}</span>}
            </button>
          </Link>
        </div>
      </div>

      <div className={styles['kids-container']}>
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
            <h1>Kid's Collection</h1>
            <p>Colorful, comfy and fun outfits for the little ones</p>
          </div>

          <div className={styles['products-grid']}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles['product-card']}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidsPage;
