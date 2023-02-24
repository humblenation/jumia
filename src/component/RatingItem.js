import React from 'react'
import RatingInput from './RatingInput'
import './style/Rating.css'
import DisRatings from './DisRatings'

const DisRatingVal=(itr)=>{
  return (<RatingInput 
    key={itr.ratingClassname5}
    type={itr.ratingType}
    className1={itr.ratingClassname1}
    className2={itr.ratingClassname2}
    className3={itr.ratingClassname3}
    className4={itr.ratingClassname4}
    className5={itr.ratingClassname5}
  />)
}

const RatingItem = () => {
  return (
    <div className='rate'>
      <h4 className='rate-head'>Ratings</h4>
        {DisRatings.map(DisRatingVal)}
    </div>
  )
}

export default RatingItem