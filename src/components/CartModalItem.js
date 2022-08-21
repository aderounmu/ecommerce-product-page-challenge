import React from 'react'
import ItemImage from '../images/image-product-1-thumbnail.jpg'
import DeleteIcon from '../images/icon-delete.svg'

const CartModalItem = ({number , setAmountOrder}) => {
  return (
    <div className='flex flex-row justify-between'>
      <div className='h-10 w-10'>
        <img className='rounded' src={ItemImage}/>
      </div>
      <div className='text-left'>
        <div className='text-sm customDarkGrayishBlue-text'>Fall Limited Edition Sneakers</div>
        <div className='text-sm customDarkGrayishBlue-text'>$125.00 x {number} <span className='text-sm font-extrabold customBlack-text'>${125 * number}.00</span></div>
      </div>
      <div className='flex flex-row items-center'>
        <button onClick={()=>setAmountOrder(0)}>
          <img src={DeleteIcon}/>
        </button>
      </div>
    </div>
  )
}

export default CartModalItem