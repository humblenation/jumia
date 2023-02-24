import React from 'react'
import Whatwedo from './Whatwedo'
import shopItemsdis from './shopItemsdis'
import './style/Input.css'



const DisplayShopItems=(itr, id)=>{
  return  <Whatwedo 
    id = {id}
    key = {itr.shopImg}
    img={itr.shopImg}
    title={itr.shopTitle}
    price={itr.shopPrice}
    ratings={itr.shopRatings}
    desc={itr.shopDesc}
    cart={itr.shopCart}
    heart={itr.shopHeart}
    zoom={itr.shopZoom}
    ratingClassname1 = {itr.ratingClassname1}
    ratingClassname2 = {itr.ratingClassname2}
    ratingClassname3 = {itr.ratingClassname3}
    ratingClassname4 = {itr.ratingClassname4}
    ratingClassname5 = {itr.ratingClassname5}
    />

}

const ShopItems = () => {
  return (
    <div>
      {shopItemsdis.map(DisplayShopItems)}
      {/* <Whatwedo 
      img={testImage}
      title='Dicom morbi'
      price='$26.00'
      ratings= {<RiStarSLine />}
      desc= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.'
      cart={<BsCart2 />}
      heart={<AiOutlineHeart />}
      zoom={<AiOutlineZoomIn />}
      /> */}
    </div>
  )
}

export default ShopItems