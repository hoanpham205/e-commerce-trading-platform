import React from 'react'
import './header.css'
import { Container,Row } from 'react-bootstrap'
import logo from 

function Header() {
  return <header className="header">
    <Container>
        <Row>
            <div className='nav-wrapper'>
                <div className='logo'>
                    <img src='' alt=''/>
                </div>
            </div>
        </Row>
    </Container>
  </header>
}
export default Header