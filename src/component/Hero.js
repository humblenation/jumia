import React from 'react'
import ladyHero from '../../src/images/hanen-souhail-F5EO6OD9kBo-unsplash 1.png'
import left from '../../src/images/hanen-souhail-F5EO6OD9kBo-unsplash 2.png'
import right from '../../src/images/hanen-souhail-F5EO6OD9kBo-unsplash 3.png'
import './style/Hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <p className='hero-detail'>Products for every need, at the distance of a click.</p>
        <div className="images">
            <img src={ladyHero} alt="" className='ladyhero'/>
            <img src={left} alt="" className='left'/>
            <img src={right} alt="" className='right'/>
        </div>
    </div>
  )
}

export default Hero