import React from 'react'
import Logo from './Logo'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import './style/SecondFoot.css'


const SecondFoot = () => {
  return (
    <div className='foot'>
        <Logo className='foot-header' h3cN='h-3'/>
        <div className='categori'>
            <h4 className='categori-head'>Categories</h4>
            <div className="categori-details">
                <p className='categori-item'>Laptop & Computers</p>
                <p className='categori-item'>Cameras & Photography</p>
                <p className='categori-item'>Smart Phones & Tablets</p>
                <p className='categori-item'>Video Games & Consoles</p>
                <p className='categori-item'>Waterproof Headphones</p>
            </div>
        </div>
        <div className="my-accounts">
            <h4 className='my-accounts-head'>My account</h4>
            <div className="my-accounts-details">
                <p className='my-accounts-item'>My Account</p>
                <p className='my-accounts-item'>Discount</p>
                <p className='my-accounts-item'>Returns</p>
                <p className='my-accounts-item'>Orders History</p>
                <p className='my-accounts-item'>Order Tracking</p>
            </div>
        </div>
        <div className="follows">
            <h4 className='follows-head'>Follow us</h4>
            <div className="follows-details">
                <span className='follows-icon'><FaFacebookF /></span>
                <span className='follows-icon'><RiInstagramFill /></span>
                <span className='follows-icon'><FaTwitter /></span>
            </div>
        </div>
    </div>
  )
}

export default SecondFoot