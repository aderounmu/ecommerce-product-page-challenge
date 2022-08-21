import React from 'react'
import CartIcon from '../images/icon-cart.svg'

const AddToCart = ({onClick}) => {
  return (
    <div className='customOrange-bg flex flex-row px-4 py-3 rounded-lg'>
      <button className='flex flex-row justify-center items-center w-full customWhite-text ' onClick={()=>onClick()}>
        <img className='w-4 h-4' src={CartIcon}/>
        <div className=' font-bold text-sm ml-3'>Add to Cart</div>
      </button>
    </div>

  )
}

export default AddToCart