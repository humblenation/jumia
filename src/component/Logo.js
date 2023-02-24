import React from 'react'
import './style/Logo.css'

const Logo = (props) => {
  return (
    <div>
        <h3 className={props.h3cN}><span className={props.className}>The</span>Shop</h3>
    </div>
  )
}

export default Logo