import React from 'react'
import Logo from './Logo'
import './style/Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <Logo className='foot-head' h3cN='h3'/>
        <div className='category'>
            <h4 className='category-head'>Categories</h4>
            <div className="category-details">
                <p className='category-item'>Laptop & Computers</p>
                <p className='category-item'>Cameras & Photography</p>
                <p className='category-item'>Smart Phones & Tablets</p>
                <p className='category-item'>Video Games & Consoles</p>
                <p className='category-item'>Waterproof Headphones</p>
            </div>
        </div>
        <div className="my-account">
            <h4 className='my-account-head'>My account</h4>
            <div className="my-account-details">
                <p className='my-account-item'>My Account</p>
                <p className='my-account-item'>Discount</p>
                <p className='my-account-item'>Returns</p>
                <p className='my-account-item'>Orders History</p>
                <p className='my-account-item'>Order Tracking</p>
            </div>
        </div>
        <div className="follow">
            <h4 className='follow-head'>Follow us</h4>
            <div className="follow-details">
                <span className='follow-icon'><FaFacebookF /></span>
                <span className='follow-icon'><RiInstagramFill /></span>
                <span className='follow-icon'><FaTwitter /></span>
            </div>
        </div>
    </div>
  )
}

export default Footer