import React from 'react'
import CloseIcon from '../images/icon-close.svg'
import NavBarLink from './NavBarLink'


const Sidebar = ({items , closeSideBar}) => {
  return (
    <div
    // className='absolute top-0 bottom-0 w-full'
    className='absolute top-0 h-full customModal-bg w-full z-50 sm:hidden'
    >
      <div className='customWhite-bg h-full w-3/5 flex flex-col text-left py-4 px-5'>
        <div><button onClick={() => closeSideBar()} className='close-btn w-auto'>
            <img src={CloseIcon}/>
        </button></div>
        <ul className='mt-5'>
         {
          items.map((item) => <NavBarLink item={item} className={'my-3 font-bold'}/>)
         }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar