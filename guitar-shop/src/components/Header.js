    import React, {useState} from 'react'
    import { FaShoppingCart } from "react-icons/fa";
    import { FaUser } from "react-icons/fa";
    import { Link, useLocation } from 'react-router-dom';

    export default function Header() {
      const location = useLocation()
      const isDashboard = location.pathname === '/dashboard'
      const isAutorization = location.pathname === '/authorization'
      const isRegistration = location.pathname === '/registration'
      let [cartOpen, setCartOpen] = React.useState(false)


      return (
        <header>
            <div>
              
            <FaShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && `active`}`}/>
              <Link to="/authorization">
            <FaUser className='user-button'/>
            </Link>
        

                <Link to= "/">
                <span className='logo'>Guitar Staff</span>
                </Link>


                <ul className='nav'>
                  <li>про нас</li>
                  <li>контакты</li>
                  <li>кабинет</li>
                </ul>
                

                  {cartOpen && { 
                
                  }}
            </div>
            
            {!isRegistration && !isAutorization && !isDashboard && (
          <div className="presentation"></div>
        )}
        </header>
      )
    }
    
