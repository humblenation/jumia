import React from 'react'
import DisPrice from './DisPrice'
import Input from './Input'
import './style/Price.css'

const DisPriceVal=(itr)=>{
    return (<Input 
    key={itr.priceLabel}
    label={itr.priceLabel}
    type={itr.priceType}
    />)
}
const Price = () => {
  return (
    <div className='pate'>
        <h4 className='pate-head'>Price</h4>
        {DisPrice.map(DisPriceVal)}
    </div>
  )
}

export default Price