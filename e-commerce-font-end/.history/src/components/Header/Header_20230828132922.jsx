import axios from 'axios'
import { motion } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/img/github-logo.png'
import userIcon from '../../assets/img/user-icon.png'
import { logOut } from '../../redux/slices/authSlice'
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
    const isLoggedIn = useSelector(state => state.auth.login.isLoggedIn)
    const [currentUser, setCurrentUser] = useState(null);
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const profileActionRef = useRef(null)

    useEffect(() => {
        // Gửi yêu cầu API để lấy dữ liệu người dùng
        axios.get('http://localhost:8080/trading-platform/login/')
          .then(response => {
            setCurrentUser(response.data); 
            console.log(response.data)// Cập nhật state với dữ liệu người dùng
          })
          .catch(error => {
            console.error('Lỗi khi lấy dữ liệu người dùng:', error);
          });
      }, []);
      
    
    const dispatch = useDispatch();
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
    const logout=()=>{
        dispatch(logOut());
        navigate('/home')
    }
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
                        src={isLo ? currentUser.avatar :   userIcon } alt='' onClick={toggleProfileAction} />
                        
                        <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileAction}>
                        {
                            isLoggedIn ?
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <span onClick={logout}><i class="ri-logout-box-r-line"></i> Logout</span>
                                
                                 <Link to='/seller/addproduct'><i class="ri-user-line"></i> Profile</Link>
                            </div>:
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <Link to='/login'><i class="ri-login-box-line"></i> Login</Link>
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