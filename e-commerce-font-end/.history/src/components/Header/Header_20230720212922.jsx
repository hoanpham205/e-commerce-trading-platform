import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import './header.css'

function Header() {
  return <header className="header">
    <Container>
        <Row>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                    <div>
                        <h1>HT Store</h1>
                        <p>Welcome to HT Store</p>
                    </div>
                </div>
                <div className='navigation'>
                    <ul className='menu'>
                        <li className='nav__item'>
                            <NavLink to='home'>Home</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='shop'>Shop</NavLink>
                        </li>
                        <li className='nav__item'>
                            <NavLink to='cart'>Cart</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='nav__icons'>
                    <span className='fav__icon'><i class="ri-shopping-cart-line"></i></span>
                    <span className='cart__icon'><i class="ri-shopping-cart-line"></i></span>
                    <span ><img src={use} alt=''/></span>

                </div>
            </div>
        </Row>
    </Container>
  </header>
}
export default Header