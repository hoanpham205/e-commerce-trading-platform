import React from 'react'
import './header.css'
import { Container,Row } from 'react-bootstrap'
import logo from '../../assets/images/github-logo.png'
import { NavLink } from 'react-router-dom'

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
                        <li className='nav-item'>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}
export default Header