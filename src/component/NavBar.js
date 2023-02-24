import React from 'react'
import {BsPerson} from 'react-icons/bs';
// import {CiSearch} from 'react-icons/ci'
import {BsCart2} from 'react-icons/bs'
import {AiOutlineHeart} from 'react-icons/ai'
import './style/NavBar.css'
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const NavBar =()=> {
  return (
    <div className='navbar'>
        <Logo className='navhead' h3cN='navhead-h3' />
        <div className='navdetails'>
            <p><NavLink className='pages' to='/'>Home</NavLink></p>
            <p><NavLink className='pages' to='/products'>Products</NavLink></p>
            <p><NavLink className='pages' to='/blog'>Blog</NavLink></p>
            <p className='shop'><NavLink className='pages' to='/shop'>Shop</NavLink></p>
            <p><NavLink className='pages' to='/contact'>Contact</NavLink></p>
        </div>
        <input type="text" className='navbar-search' />
        <div className='icons'>
          <BsPerson />
          <BsCart2 />
          <AiOutlineHeart />
        </div>
    </div>
  )
}

export default NavBar