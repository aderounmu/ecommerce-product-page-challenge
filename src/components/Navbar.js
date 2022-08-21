import React,{useState} from 'react'
import Sidebar from './Sidebar'
import HamBurger from '../images/icon-menu.svg'
import CartIcon from '../images/icon-cart.svg'
import Avatar from '../images/image-avatar.png'
import Logo from '../images/logo.svg'
import NavBarLink from './NavBarLink'
import CartModal from './CartModal'


const Navbar = () => {
  const items = ['Collections', 'Men' , 'Women', 'About', 'Contact'] ;
  const [sidebarVisible, setSideBarVisible] = useState(false)
  const [cartModalVisible, setCartModalVisible] = useState(false)
  return (
    <>
      {sidebarVisible && <Sidebar items={items}
        closeSideBar={()=> setSideBarVisible(false)}
      />}
      <div className='sm:px-10 lg:px-20'>
        <div className='flex flex-row justify-between py-5 px-4 customWhite-bg items-center sm:border-b-2 '>

              <div className='flex flex-row items-center'>

                <div className='w-4 mr-3 h-[15px] sm:hidden'>
                  <button onClick={()=> setSideBarVisible(true)}>
                    <img className=''  src={HamBurger}/>
                  </button>
                </div>

                <div className='w-25'>
                    <img className='' src={Logo}/>
                </div>

              <div className='ml-6 hidden sm:block '>
                  <ul className='flex flex-row'>
                  {
                      items.map((item) => <NavBarLink item={item} className={'mx-2 text-sm'}/>)
                  }
                  </ul>
              </div>
              </div>

            <div className='flex flex-row items-center'>
              <div className='h-5 w-5 mr-4 sm:mr-7'>
                  <button onClick={()=> setCartModalVisible(prevState => !prevState)}>
                    <img className='w-full h-full' src={CartIcon}/>
                  </button>
                  <CartModal
                  isVisible={cartModalVisible}
                  />
              </div>
              <div className='h-5 w-5 sm:h-10 sm:w-10'>
                  <img className='w-full h-full' src={Avatar}
                  />
              </div>

            </div>
        </div>
      </div>
    </>
  )
}

export default Navbar