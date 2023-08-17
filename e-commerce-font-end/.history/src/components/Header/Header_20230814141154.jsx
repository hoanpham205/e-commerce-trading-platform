import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import userIcon from '../../assets/img/user-icon.png'
import './header.css'
import useAuth from '../custom-hooks/use-auth'

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
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const stickyHeaderFunc = () =>{
        window.addEventListener('scroll', ()=>{
            if(
                document.body.scrollTop > 80 || 
                document.documentElement.scrollTop >80){
                headerRef.current.classList.add("sticky__header");
            }else {
                headerRef.current.classList.remove("sticky__header");
            }
        });
    };
    useEffect(()=>{
        stickyHeaderFunc();
        return () => window.removeEventListener('scroll', stickyHeaderFunc)
    })
    const navigateToCart = () =>{
        navigate('/cart')
    }
  return <header className="header" ref={headerRef}>
    <Container>
        <Row>
            <div className='nav__wrapper'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                    <div>
                        <h1>HT Store</h1>
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
                       <i class="ri-heart-line"></i>
                        <span className='badge'>1</span>
                    </span>
                    <span className='cart__icon' onClick={navigateToCart}>
                        <i class="ri-shopping-cart-line">
                        <span className='badge'>{totalQuantity}</span>
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