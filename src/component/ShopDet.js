import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {FaTwitter} from 'react-icons/fa'
import Hero from './Hero';
import NavBar from './NavBar';
import shopItemsdis from './shopItemsdis'
import {IoClose} from 'react-icons/io5'
import './style/Review.css'
import Star from './Star'


const ShopDet = () => {
  const {id} = useParams();
  const list = shopItemsdis[id];
  const [reviewBtn, setReviewBtn] = useState(false)
  const review =()=>{
    setReviewBtn(!reviewBtn)
  }
  const [reviewdet, setReviewDet] = useState({
    name: '',
    review: ''
  })
  const reviewNameChange=(e)=>{
    setReviewDet({...reviewdet, name: e.target.value})
  }
  const reviewTextChange=(e)=>{
    setReviewDet({...reviewdet, review: e.target.value})
  }
  const onBtnClick=(e)=>{
    e.preventDefault();
    review()
    console.log(reviewdet);
  }
  const onCloseClick=()=>{
    review();
  }
  // const btnDis =()=>{
  //   if(reviewdet.name === ''){
  //     return true
  //   }else if(reviewdet.review === ''){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  // const [ratingCol1, setRatingCol1] = useState(false)
    // const [ratingCol2, setRatingCol2] = useState(false)
    // const [ratingCol3, setRatingCol3] = useState(false)
    // const [ratingCol4, setRatingCol4] = useState(false)
    // const [ratingCol5, setRatingCol5] = useState(false)
    // const colRating1 =()=>{
      //     setRatingCol1(!ratingCol1)
      // }
      // const colRating2 =()=>{
        //     setRatingCol2(!ratingCol2)
        // }
        // const colRating3 =()=>{
          //     setRatingCol3(!ratingCol3)
          // }
    // const colRating4 =()=>{
    //     setRatingCol4(!ratingCol4)
    // }
    // const colRating5 =()=>{
    //     setRatingCol5(!ratingCol5)
    // }
  return (
    <div>
      <NavBar />
      <Hero />
      <div className='shophead'>
        <NavLink className='home-link' to='/'>Home</NavLink>
        <NavLink className='shop-link' to='/shop'>.Shop</NavLink>
        <p className='shop-title-link'>.{list.shopTitle}</p>
      </div>
      <div className="shop-det-dis">
      <div className="shopimages">
        <div className="mini-imgs">
          <div>
          <img src={list.shopImg} alt="img2" className='mini-img-img' />
          </div>
          <div>
          <img src={list.shopImg} alt="img2" className='mini-img-img' />
          </div>
          <div>
          <img src={list.shopImg} alt="img2" className='mini-img-img' />
          </div>
        </div>
        <img src={list.shopImg} alt="" className='big-img'/>
      </div>
      <div className="shop-det-dis-2">
      <div className="rev-shop-details">
        <h4 className='rev-shop-title'>{list.shopTitle}</h4>
        <div className="rev-shop-ratings">
        <span className={list.ratingClassname1}>{list.shopRatings}</span>
        <span className={list.ratingClassname2}>{list.shopRatings}</span>
        <span className={list.ratingClassname3}>{list.shopRatings}</span>
        <span className={list.ratingClassname4}>{list.shopRatings}</span>
        <span className={list.ratingClassname5}>{list.shopRatings}</span>
        <p className='rev-22'>(22)</p>
        <button onClick={(e)=>{
          e.preventDefault();
          review();
        }} className='add-review-btn'>Add review</button>
        </div>
      </div>
      <p className='review-price'>{list.shopPrice}</p>
      <p className='review-description'>{list.shopDesc}</p>
      <div className="review-icons">
      <button className='rev-add-to-cart'><span className='rev-cart'>{list.shopCart}</span> Add to cart</button>
      <button className='rev-fav'><span className='rev-heart'>{list.shopHeart}</span>Favorite</button>
      <p className='rev-categ'>Categories: {list.shopCategory}</p>
      </div>
      <div className="rev-socials">
        <p className='rev-share'>Share</p>
        <span className='rev-share-icons-fb'><FaFacebookF /></span>
        <span className='rev-share-icons-insta'><RiInstagramFill /></span>
        <span className='rev-share-icons-tweet'><FaTwitter /></span>
      </div>
      </div>
      </div>
      <div className={reviewBtn ? 'show':'hide'}>
        <div className="review-body">
        <div className="review-head">
          <h1 className='rev-head'>Add Review</h1>
          <span onClick={onCloseClick} className='review-close'><IoClose /></span>
        </div>
        <p className='reviewer-name'>Name</p>
        <input type="text" className='reviewer-name-input' onChange={reviewNameChange}/>
        <p className='rev-rate'>Ratings</p>
        <Star />
        <div className="review-review">
          <p className='review-review-head'>Review</p>
          <textarea name="" id="" cols="30" rows="10" className='reveiw-ta' onChange={reviewTextChange}></textarea>
        </div>
        <button onClick={onBtnClick} className='submit-review' disabled={reviewdet.name ==="" || reviewdet.review ==='' ? true : false}>Submit</button>
        </div>
        </div>
    </div>
  )
}

export default ShopDet