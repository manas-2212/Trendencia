'use client';
import React, { useEffect, useState } from 'react';
import { useCart } from '@/app/CartContext';
import './checkout.css';
import { useRouter } from 'next/navigation';

// Used Gpt to make this logic

const ReviewPage = () => {
  const { cart, clearCart } = useCart();
  const [shipping, setShipping] = useState<any>(null);
  const router = useRouter();

  const total = Array.isArray(cart)
    ? cart.reduce((sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 1), 0)
    : 0;

  useEffect(() => {
    const details = localStorage.getItem('shippingDetails');
    if (details) {
      setShipping(JSON.parse(details));
    }
  }, []);

  const handlePlaceOrder = () => {
    const existingOrders = JSON.parse(localStorage.getItem('orderHistory') || '[]');
    const newOrder = {
      id: Date.now(),
      cart,
      shipping,
      total,
      date: new Date().toISOString(),
    };

    // Used GPT to understand localstorage
    localStorage.setItem('orderHistory', JSON.stringify([newOrder, ...existingOrders]));


    router.push('/checkout/success');
  };

  return (
    <div className="checkout-page">
      <h2>Review & Payment</h2>

      {shipping && (
        <div className="review-section">
          <h4>Shipping To:</h4>
          <p>
            {shipping.fullName}, {shipping.address}, {shipping.city}, {shipping.pincode}, {shipping.phone}
          </p>
        </div>
      )}

      <div className="review-section">
        <h4>Your Cart:</h4>
        {Array.isArray(cart) && cart.map((item) => (
          <div key={item.id} className="cart-review-item">
            {item.name} × {item.quantity} = ₹{(item.price ?? 0) * (item.quantity ?? 1)}
          </div>
        ))}
      </div>

      <h3>Total: ₹{total}</h3>
      <button className="pay-btn" onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default ReviewPage;
