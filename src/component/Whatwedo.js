import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style/ShopItems.css'


const Whatwedo = ({img, title, price, ratings, desc, cart, heart, zoom, ratingClassname1, ratingClassname2, ratingClassname3, ratingClassname4, ratingClassname5, id}) => {
  const nvg = useNavigate();
  return (
    <div className='shop-items'>
        <img src={img} alt="" className='shop-img' />
        <div className='details'>
            <p className='shop-title'>{title}</p>
            <div className='shop-details'>
            <p className='shop-price'>{price}</p>
            <div className='shop-ratings'>
              <span className={ratingClassname1}>{ratings}</span>
              <span className={ratingClassname2}>{ratings}</span>
              <span className={ratingClassname3}>{ratings}</span>
              <span className={ratingClassname4}>{ratings}</span>
              <span className={ratingClassname5}>{ratings}</span>
            </div>
            </div>
            <p className='shop-desc'>{desc}</p>
            <div className='shop-icons'>
              <span className='shop-cart'>{cart}</span>
              <span className='shop-heart'>{heart}</span>
              <span className='shop-zoom'onClick={()=>{nvg('/products/' + id)}}>{zoom}</span>
            </div>
        </div>
    </div>
  )
}

export default Whatwedo