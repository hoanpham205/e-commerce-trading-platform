import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
const AdminNav = () => {
    return <header className ='admin__header'>
        <div className="admin__nav-">
            <Container>
                <div className="admin__nav-wrapper-top">
                    <div className="logo">
                    <h2>HT Store</h2>
                    </div>
                </div>
            </Container>
        </div>
    </header>
}

export default AdminNav;
