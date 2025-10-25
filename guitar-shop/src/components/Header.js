import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation()
  const isDashboard = location.pathname === '/dashboard'
  const isAutorization = location.pathname === '/authorization'
  const isRegistration = location.pathname === '/registration'
  const isDashboardAdmin = location.pathname === '/dashboardAdmin'
  const isCart = location.pathname === '/cart'
  const isInfo = location.pathname === '/info'
  const isProduct = location.pathname.startsWith('/product/');
  const isContacts = location.pathname === '/contacts'
  let [cartOpen, setCartOpen] = React.useState(false)


  return (
    <header>
      <div>

        <Link to="/cart">
          <FaShoppingCart className={`shop-cart-button ${cartOpen && `active`}`} />
        </Link>
        <Link to="/authorization">
          <FaUser className='user-button' />
        </Link>


        <Link to="/">
          <span className='logo'>kerama marazzi</span>
        </Link>


        <ul className='nav'>
          <Link to='/info'>  <li>про нас</li> </Link>
          <Link to='/contacts'> <li>контакты</li> </Link>
          <Link to="/authorization"> <li>кабинет</li> </Link>
        </ul>


        {cartOpen && {

        }}
      </div>

      {!isRegistration && !isAutorization && !isDashboard && !isDashboardAdmin && !isCart && !isInfo && !isProduct && !isContacts && (
        <div className="presentation"></div>
      )}
    </header>
  )
}

