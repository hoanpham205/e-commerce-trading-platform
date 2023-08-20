import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import useAuth from '../../custom-hooks/useAuth'
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
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const profileActionRef = useRef(null)
    const {currentUser} = useAuth()
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
    const toggleProfileAction = () =>profileActionRef.current.classList.toggle('show__profileActions')
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
                        <i class="ri-shopping-cart-line"></i>
                        <span className='badge'>{totalQuantity}</span>
                    </span>

                    <div className='profile'>
                        <motion.img whileTap={{scale:1.1}} 
                        src={currentUser.avatarUrl} alt='' onClick={toggleProfileAction} />
                        console.log(currentUser);

                        

                        
                        <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileAction}>
                        {
                            currentUser ? 
                                <span>Logout</span>
                                :
                            <div>
                                <Link to='/login'>Login</Link>
                                <Link to='/signup'>Sign Up</Link>
                            </div>
                        }
                        </div>
                    </div>
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