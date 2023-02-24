import React, { useState } from 'react'
import './style/Review.css'
import {AiFillStar} from 'react-icons/ai'

const Review = (props) => {
    const [ratingCol1, setRatingCol1] = useState(false)
    const [ratingCol2, setRatingCol2] = useState(false)
    const [ratingCol3, setRatingCol3] = useState(false)
    const [ratingCol4, setRatingCol4] = useState(false)
    const [ratingCol5, setRatingCol5] = useState(false)
    const colRating1 =()=>{
        setRatingCol1(!ratingCol1)
    }
    const colRating2 =()=>{
        setRatingCol2(!ratingCol2)
    }
    const colRating3 =()=>{
        setRatingCol3(!ratingCol3)
    }
    const colRating4 =()=>{
        setRatingCol4(!ratingCol4)
    }
    const colRating5 =()=>{
        setRatingCol5(!ratingCol5)
    }
  return (
    <div className={props.className}>
        <div className="review-head">
        <h1>Add Review</h1>
        </div>
        <p>Name</p>
        <input type="text" />
        <p>Ratings</p>
        <div className="review-ratings">
            <span onClick={()=>{
                colRating1();
                }} className={ratingCol1 ? 'show-rating' : 'no-rating'}><AiFillStar /></span>
            <span onClick={()=>{
                colRating2()}} className={ratingCol2 ? 'show-rating' : 'no-rating'}><AiFillStar /></span>
            <span onClick={()=>{
                colRating3();
                }} className={ratingCol3 ? 'show-rating' : 'no-rating'}><AiFillStar /></span>
            <span onClick={()=>{
                colRating4()}} className={ratingCol4 ? 'show-rating' : 'no-rating'}><AiFillStar /></span>
            <span onClick={()=>{
                colRating5()}} className={ratingCol5 ? 'show-rating' : 'no-rating'}><AiFillStar /></span>
        </div>
    </div>
  )
}

export default Review