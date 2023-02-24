import React from 'react'
import {BsPerson} from 'react-icons/bs';
// import {CiSearch} from 'react-icons/ci'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import './style/secondNavbar.css'


const SecondNavbar = () => {
  return (
    <div className='nav-bars'>
        <Logo h3cN='head-three' className='nav-heads'/>
        <div className='nav-detail'>
            <p><NavLink className='page' to='/'>Home</NavLink></p>
            <p><NavLink className='page' to='/products'>Products</NavLink></p>
            <p><NavLink className='page' to='/blog'>Blog</NavLink></p>
            <p className='shops'><NavLink className='page' to='/shop'>Shop</NavLink></p>
            <p><NavLink className='page' to='/contact'>Contact</NavLink></p>
        </div>
        <input type="text" className='second-search'/>
        <div className='icon'>
          <BsPerson />
          <BsCart2 />
          <AiOutlineHeart />
        </div>
    </div>
  )
}

export default SecondNavbar