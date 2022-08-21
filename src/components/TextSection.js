import React,{useState , useEffect} from 'react'
import AddQuantityButton from './AddQuantityButton'
import AddToCart from './AddToCart'
import { useAddToCart } from '../context/AddToCartContext'
const TextSection = () => {
  const [localQuantity , setlocalQuantity] = useState(1)
  const {amountOrder,setAmountOrder} = useAddToCart()

  const AddItemToCart = () => {
    setAmountOrder(prev_state => prev_state + localQuantity)
    setlocalQuantity(1)
  }
  return (
    <div className='text-left px-4 my-3 lg:pr-14 lg:ml-25 lg:mr-48 '>
      <div className='customOrange-text text-sm uppercase my-2 sm:my-4'>Sneaker Company</div>
      <div className='text-2xl sm:text-3xl font-extrabold my-2 sm:my-4'>Fall Limited Edition Sneakers</div>
      <div className='customDarkGrayishBlue-text text-sm my-2 sm:my-4'>
        These low-profile sneakers are your perfect casual wear companion. Featuring a 
        durable rubber outer sole, they’ll withstand everything the weather can offer.
      </div>

      <div className='flex flex-row sm:flex-col justify-between content-center my-2 sm:my-4'>
        <div className='flex flex-row content-center'>
          <div className='font-extrabold text-xl' >$125.00</div>
          <div className=' customOrangeOpacity-bg customOrange-text text-sm uppercase font-black py-0.5 px-2 mx-4 rounded-md h-6'>
            50%
          </div>
        </div>
        <div className='text-sm customDarkGrayishBlue-text line-through sm:my-2'>
          $250.00
        </div>
      </div>

      <div className='flex flex-col sm:flex-row'>
          <div className='my-2 sm:my-4 sm:w-1/3'>
            <AddQuantityButton localQuantity={localQuantity} setlocalQuantity={setlocalQuantity}/>
          </div>
          <div className='my-2 sm:my-4 sm:w-2/3 sm:ml-3'>
            <AddToCart
            onClick={()=> AddItemToCart()}
            ></AddToCart>
          </div>
      </div>
    </div>
  )
}

export default TextSection