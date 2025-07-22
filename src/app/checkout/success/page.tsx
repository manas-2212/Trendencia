'use client';
import React, { useEffect, useRef } from 'react';
import { useCart } from '@/app/CartContext';
import { useRouter } from 'next/navigation';
import './checkout.css';

const SuccessPage = () => {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const hasSaved = useRef(false); // Prevent duplicate saves

  useEffect(() => {
    if (hasSaved.current) return;
  
    hasSaved.current = true; // ✅ Prevent further saves
  
    const shipping = localStorage.getItem('shippingDetails');
    const order = {
      id: Date.now(),
      items: cart,
      shipping: shipping ? JSON.parse(shipping) : {},
      date: new Date().toLocaleString(),
    };
  
    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    existingOrders.push(order);
    localStorage.setItem('orders', JSON.stringify(existingOrders));
  
  }, []);
  return (
    <div className="checkout-page">
      <h1>🎉 Order Placed Successfully!</h1>
      <p>Your order has been placed. You can track it in your profile.</p>
      <button onClick={() => router.push('/profile')} className="pay-btn">Go to Profile</button>
    </div>
  );
};

export default SuccessPage;
