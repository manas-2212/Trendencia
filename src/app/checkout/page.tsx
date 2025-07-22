'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import './checkout.css';

const CheckoutPage = () => {
  const router = useRouter();
  const [shipping, setShipping] = useState({
    fullName: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShipping({ ...shipping, [e.target.name]: e.target.value });
  };

  const handleContinue = () => {
    localStorage.setItem('shippingDetails', JSON.stringify(shipping));
    router.push('/checkout/review');
  };

  return (
    <div className="checkout-page">
      <h2>Shipping Details</h2>
      <div className="checkout-form">
        {['fullName', 'address', 'city', 'pincode', 'phone'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            placeholder={field.replace(/^\w/, (c) => c.toUpperCase())}
            value={shipping[field as keyof typeof shipping]}
            onChange={handleChange}
            required
          />
        ))}
        <button className="continue-btn" onClick={handleContinue}>Continue to Review</button>
      </div>
    </div>
  );
};

export default CheckoutPage;
