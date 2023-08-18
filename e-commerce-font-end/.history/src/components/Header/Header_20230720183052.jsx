import React from 'react'
import './header.css'
import { Container,Row } from 'react-bootstrap'
import logo from '../../assets/images/github-logo.png'

function Header() {
  return <header className="header">
    <Container>
        <Row>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <img src={logo} alt=''/>
                    <div>
                        
                    </div>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}
export default Header