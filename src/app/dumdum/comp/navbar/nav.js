'use client';
import React, { useState, useEffect } from 'react';
import './nav.css';
import Link from 'next/link';
import { useWishlist } from '@/app/WishlistContext';
import { useCart } from '@/app/CartContext';

const Nav = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const [showWishlist, setShowWishlist] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [initials, setInitials] = useState('U');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('dummyUser') || '{}');
    if (user?.name) {
      const nameParts = user.name.split(' ');
      const initialsStr = nameParts.map(n => n[0]).join('').toUpperCase();
      setInitials(initialsStr);
    }
  }, []);

  return (
    <>
      <nav className="nav-container">
        <div className="nav-left">
          <div className="logo">Trendencia</div>
        </div>

        <div className="nav-center">
          <div className="categories">
            <Link href="/mens" className="nav-btn">Men</Link>
            <Link href="/womens" className="nav-btn">Women</Link>
            <Link href="/kids" className="nav-btn">Kids</Link>
          </div>
        </div>

        <div className="nav-right">
          <div className="wishlist-container">
            <button className="wishlist-btn" onClick={() => setShowWishlist(!showWishlist)}>Wishlist</button>
            {showWishlist && (
              <div className="wishlist-dropdown">
                {wishlist.length === 0 ? (
                  <div className="empty-text">No items in wishlist</div>
                ) : (
                  wishlist.map(item => (
                    <div key={item.id} className="wishlist-item">
                      <span>{item.name}</span>
                      <span>₹{item.price}</span>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="cart-container">
            <Link href="/cart" className="cart-btn-wrapper">
              <button className="cart-btn">Cart</button>
              {cart.length > 0 && <div className="cart-badge">{cart.length}</div>}
            </Link>
          </div>

          <div className="profile-wrapper">
            <div className="profile-circle" onClick={() => setShowProfile(!showProfile)}>
              {initials}
            </div>
            {showProfile && (
              <div className="profile-dropdown">
                <Link href="/profile">My Orders</Link>
                <Link href="/login">Logout</Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
