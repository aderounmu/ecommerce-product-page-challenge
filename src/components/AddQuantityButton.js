import React  from 'react'
import PlusIcon from '../images/icon-plus.svg'
import MinusIcon from '../images/icon-minus.svg'

const AddQuantityButton = ({localQuantity , setlocalQuantity}) => {
  return (
    <div className='flex flex-row customCustomLightGrayishBlue-bg justify-between px-4 py-3 rounded-lg'>
      <button onClick={()=>setlocalQuantity(prev => prev - 1 < 0 ?  0 : prev - 1)}>
        <img src={MinusIcon}/>
      </button>
      <div className='font-bold'>
        {localQuantity}
      </div>
      <button onClick={()=>setlocalQuantity(prev => prev + 1)}>
        <img src={PlusIcon}/>
      </button>
    </div>
  )
}

export default AddQuantityButton