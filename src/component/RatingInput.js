import React from 'react'
import './style/Rating.css'
import {RiStarSLine} from 'react-icons/ri'

const RatingInput = (props) => {
  return (
    <div>
        <div>
        <label className="container">
          <span className={props.className1}><RiStarSLine /></span>
          <span className={props.className2}><RiStarSLine /></span>
          <span className={props.className3}><RiStarSLine /></span>
          <span className={props.className4}><RiStarSLine /></span>
          <span className={props.className5}><RiStarSLine /></span>
          <input type={props.type} />
          <span className="checkmar"></span>
          </label>
        </div>
    </div>
  )
}

export default RatingInput