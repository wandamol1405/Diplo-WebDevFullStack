import React from 'react'
import NavContainer from './navContainer'

function Nav() {
  return (
    <NavContainer>
        <h1 style={{color: 'white', fontSize: '2rem'}}>FakeStore</h1>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <a href="/cart.html"><img id="cart-img" width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/shopping-cart--v1.png" alt="shopping-cart--v1"/></a>
            <p style={{color:'white'}}>Items en el carrito: <span id="carrito-total"></span></p>
        </div>
    </NavContainer>
  )
}
 
export default Nav