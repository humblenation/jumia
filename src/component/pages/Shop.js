import React from 'react'
import Hero from '../Hero'
import ShopItems from '../ShopItems'
import Categories from '../Categories'
import RatingItem from '../RatingItem'
import Price from '../Price'
import NavBar from '../NavBar'
import Footer from '../Footer'

const Shop = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ShopItems/>
      <Categories />
      <RatingItem />
      <Price />
      <Footer />
    </div>
  )
}

export default Shop