'use client';
import React from 'react';
import Link from 'next/link';
import './profile.css'

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <h2 className="profile-heading">👤 Your Profile</h2>
      <p className="no-orders">This page will soon include your preferences and account details.</p>

      <Link href="/" className="home-btn">
        Go to Home Page
      </Link>
    </div>
  );
};

export default ProfilePage;
