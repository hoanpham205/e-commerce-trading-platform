import { motion } from 'framer-motion'
import React, {useRef, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import userIcon from '../../assets/img/user-icon.png'
import './header.css'

const nav__links = [
    {
    path:'home',
    display:'Home',
    },
    {
    path:'shop',
    display:'Shop',
    },
    {
    path:'cart',
    display:'Cart',
    },
]

const Header=()=> {
    const headerRef = useRef(null)
    const stickyHeaderFunc = () =>{
        window.addEventListener('')
    }
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
                        {
                            nav__links.map((item,index) =>(
                                <li className='nav__item' key={index}>
                                    <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav__active':''}>{item.display}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='nav__icons'>
                    <span className='fav__icon'>
                        <i class="ri-shopping-cart-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span className='cart__icon'>
                        <i class="ri-shopping-cart-line">
                        <span className='badge'>1</span>
                    </i></span>
                    <span ><motion.img whileTap={{scale:1.1}} src={userIcon} alt=''/></span>
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