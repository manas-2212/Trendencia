'use client';
import React, { useState } from 'react';
import styles from './mens.module.css';
import Link from 'next/link';
import { useWishlist } from '../WishlistContext';
import { useCart } from '../CartContext';

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
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart, cart } = useCart();

  const filteredProducts = allProducts
    .filter(product => selectedCategory === 'All' || product.category === selectedCategory)
    .sort((a, b) => {
      if (sortOrder === 'low') return a.price - b.price;
      if (sortOrder === 'high') return b.price - a.price;
      return 0;
    });

  const isInWishlist = (productId) => wishlist.some(item => item.id === productId);

  return (
    <div className={styles['mens-page']}>
      <div className={styles['top-bar']}>
        <div className="page-title">Trendencia</div>
        <div className={styles['cart-wrapper']}>
          <Link href="/cart">
            <button className={styles['top-cart-btn']}>Cart</button>
          </Link>
          {cart.length > 0 && <div className={styles['cart-count']}>{cart.length}</div>}
        </div>
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
            <h1>Men's Clothing</h1>
            <p>Explore our stylish and comfortable collection for everyday and formal wear</p>
          </div>

          <div className={styles['products-grid']}>
            {filteredProducts.map(product => (
              <div key={product.id} className={styles['product-card']}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                  <button onClick={() => addToCart(product)}>Add to Cart</button>
                  {isInWishlist(product.id) ? (
                    <button onClick={() => removeFromWishlist(product.id)}>♥</button>
                  ) : (
                    <button onClick={() => addToWishlist(product)}>♡</button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MensPage;
