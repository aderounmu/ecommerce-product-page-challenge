import React from 'react'
import { useAddToCart } from '../context/AddToCartContext'
import CartModalItem from './CartModalItem'
const CartModal = ({isVisible}) => {
  const {amountOrder ,  setAmountOrder } = useAddToCart()
  return (
    <>
    {isVisible && <div className='px-2 mt-5 absolute w-screen left-0 sm:relative sm:w-[320px] sm:left-[-200px] sm:mt-3 z-30'>
       <div className={`customWhite-bg rounded-md shadow-md flex flex-col  align-left min-h-[200px] ${amountOrder > 0 ? '': 'sm:min-h-[250px]'}`}>
        <div className="border-b-[1px] px-4 text-left py-4 flex-none">Cart</div>
          { amountOrder > 0 ? <div className='px-4 py-4 flex flex-col flex-1'>
              <CartModalItem
              number={amountOrder}
              setAmountOrder={setAmountOrder}
              />
              <div className='customOrange-bg flex flex-row px-4 py-3 rounded-lg mt-4'>
                <button className='flex flex-row justify-center items-center w-full customWhite-text '>
                  <div className=' font-bold text-sm ml-3 '>Checkout</div>
                </button>
              </div>
          </div>:
          <div className='px-4 py-4 flex flex-row justify-center items-center flex-1 customDarkGrayishBlue-text'>
              Your cart is empty
          </div>}
       </div>
    </div>}
    </>
  )
}

export default CartModal