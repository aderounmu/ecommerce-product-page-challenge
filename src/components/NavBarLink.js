import React from 'react'

const NavBarLink = ({item , className}) => {
  
    return (<li className={className}>
         <a href='#'>{item}</a>
    </li>)
  
}

export default NavBarLink