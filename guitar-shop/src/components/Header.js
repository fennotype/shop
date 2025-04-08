import React, {useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";


export default function Header() {
  let [cartOpen, setCartOpen] = React.useState(false)


  return (
    <header>
        <div>
        <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && `active`}`}/>
            <span className='logo'>Guitar Staff</span>
            <ul className='nav'>
              <li>про нас</li>
              <li>контакты</li>
              <li>кабинет</li>
            </ul>
            

              {cartOpen && { 
             
              }}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
 
