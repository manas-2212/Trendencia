'use client';
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/app/CartContext';
import './cart.css';

const CartPage = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1 className="cart-heading">Your Shopping Bag</h1>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your bag is currently empty.</p>
          <Link href="/" className="explore-btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p className="price">₹{item.price} × {item.quantity}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ₹{total}</h2>
            <Link href="/checkout">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
