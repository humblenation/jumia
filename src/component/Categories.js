import React from 'react'
import Input from './Input'
import DisInputValue from './DisInputValue'

const DisInpVal=(itr)=>{
    return (<Input 
        key={itr.inputLabel}
        type= {itr.inputType}
        label= {itr.inputLabel}
        checked={itr.inputChecked}
    />)
}

const Categories = () => {
  return (
    <div className='cate'>
        <h4 className='cate-head'>Categories</h4>
        <div className="categories">
            {DisInputValue.map(DisInpVal)}
        </div>
        <div className='access'>
            <p className='access-item'>Accessories</p>
            <p className='access-item'>Jewellery</p>
        </div>
        <Input label='Watches' type='checkbox' />
    </div>
  )
}

export default Categories