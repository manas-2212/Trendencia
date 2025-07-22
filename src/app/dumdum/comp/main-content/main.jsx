import React from 'react';
import Link from 'next/link'
import './main.css';



const productImages = [
  '/tshirt.jpg', '/shirt.jpg', '/goggles.jpg', '/jeans.jpeg',
  '/lingerie.jpg', '/shoes.jpeg', '/Sports.jpeg', '/Jacket.avif',
  '/chappal.jpg', '/socks.jpg', '/hoodies.jpg', '/cargos.jpg'
];

const Main = () => {
  return (
    
    <div className="main-container">
      <div className="top-categories">
        <div className="category-box">
          <img src="/nike.jpg" alt="Nike" className="category-img" />
        </div>
        <div className="category-box">
          <img src="/hnm.jpg" alt="H&M" className="category-img" />
        </div>
        <div className="category-box">
          <img src="/wrogn.jpg" alt="Wrogn" className="category-img" />
        </div>
        <div className="category-box">
          <img src="/killer-jeans-strip-2-4e7021572fb05b08366e9798fd.jpg" alt="Killer Jeans" className="category-img" />
        </div>
      </div>

      <div className="sale-strip">
        Upto 40% OFF on Clothing Items - FLAT 50% OFF on Eyewears - Upto 20% OFF on Lingeries
      </div>

      <div className="featured-products">
        <div className="product-feature">
          <img src="/oversize.jpg" alt="oversize" />
          <div className="feature-overlay">
            Oversized T-shirt
            <div style={{ gap: '10px', fontSize: '12px', fontWeight: 'lighter' }}>4.5k+</div>
          </div>
        </div>
        <div className="product-feature">
          <img src="/raybans.jpg" alt="raybans" />
          <div className="feature-overlay">
            RayBan Shades
            <div style={{ gap: '10px', fontSize: '12px', fontWeight: 'lighter' }}>7k+</div>
          </div>
        </div>
        <div className="product-feature">
          <img src="/beach.jpg" alt="beach" />
          <div className="feature-overlay">
            Crochet Shirt
            <div style={{ gap: '10px', fontSize: '12px', fontWeight: 'lighter' }}>2.9k</div>
          </div>
        </div>
      </div>

      <div className="grid-title">
        <div className="title-of-grid">Products Available on TD</div>
      </div>

      <div className="product-grid">
        {productImages.map((src, index) => (
          <div className="product-card" key={index}>
            <img src={src} alt={`product-${index}`} />
          </div>
        ))}
      </div>

      <div className="footer-info">
        <div className="footer-line"></div>
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>TD Clothing brings you the latest trends at unbeatable prices. Quality, style, and service – all in one place.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/mens">Men's</Link></li>
              <li><Link href="/womens">Women's</Link></li>
              <li><Link href="/kids">Kids</Link></li>
              
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><img src='/fb.png' alt="Facebook" />FB</a>
              <a href="#"><img src='/ig.png' alt="Instagram" />IG</a>
              <a href="#"><img src='/x.png' alt="Twitter" />X</a>
            </div>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: '#888', marginTop: '10px' }}>
           2025 TD Clothing. All rights reserved.
        </p>
      </div>

      </div>
  );
};

export default Main;
