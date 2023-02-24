import React from 'react'
import './style/Input.css'
const Input = (props) => {
  return (
    <div>
      <label className="container">{props.label}
        <input type={props.type} checked={props.checked} className='container-input' />
        <span className="checkmark"></span>
      </label>
    </div>
  )
}

export default Input