import React from 'react'
import './nav.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <div className='nav-container'>
        <div className='logo'>Trendencia</div>
        <div className='categories'>
          <div><Link href="/mens" className='nav-btn'>Men</Link></div>
          <div><Link href="/womens" className='nav-btn'>Women</Link></div>
          <div><Link href="/kids" className='nav-btn'>Kids</Link></div>
          <div><Link href="/accessories" className='nav-btn'>Accessories</Link></div>
        </div>
        <div className='search'>
          <input className='text' placeholder='Search for Products, Categories etc.'></input>
        </div>
      </div>


      <div className="lower-nav">
  <div className='buttons-lowers'>
    <div className="dropdown">
      <button className="lower-btn">Sell</button>
      <div className="dropdown-content">
        <a href="#">Start Selling</a>
        <a href="#">Seller Dashboard</a>
        <a href="#">Shipping Info</a>
      </div>
    </div>

    <div className="dropdown">
      <button className="lower-btn">Member</button>
      <div className="dropdown-content">
        <a href="#">Join Membership</a>
        <a href="#">Benefits</a>
        <a href="#">Refer & Earn</a>
      </div>
    </div>

    <div className="dropdown">
      <button className="lower-btn">Tokens</button>
      <div className="dropdown-content">
        <a href="#">Earn Tokens</a>
        <a href="#">Redeem Tokens</a>
        <a href="#">Token FAQs</a>
      </div>
    </div>

    <div className="dropdown">
      <button className="lower-btn">Cashback</button>
      <div className="dropdown-content">
        <a href="#">How It Works</a>
        <a href="#">Track Cashback</a>
        <a href="#">Offers</a>
      </div>
    </div>
  </div>

          <div className='user-items'>          
            <button className="wishlist-btn"><div>Wishlist</div></button>
            <button className="cart-btn"><div>Cart</div></button>
            <div className="profile-circle">MS</div>
          </div>

        </div>


    </>

  )
}

export default Nav