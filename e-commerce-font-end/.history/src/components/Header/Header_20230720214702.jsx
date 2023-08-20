import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import userIcon from '../../assets/img/user-icon.png'
import './header.css'

const nav__link = [{
    path:'home',
    display:'Home',
},
]

const Header=()=> {
  return <header className="header">
    <Container>
        <Row>
            <div className='nav__wrapper'>
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
                    <span ><img src={userIcon} alt=''/></span>
                </div>
                <div className='mobile__menu'>
                    <span><i class="ri-menu-line"></i></span>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}
export default Header