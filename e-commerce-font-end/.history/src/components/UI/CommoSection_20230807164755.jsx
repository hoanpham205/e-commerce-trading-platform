import React from 'react';
import { Container } from 'react-bootstrap';
import '../..'

const CommoSection = ({title}) => {
    return <section className="common__section">
        <Container className='text-center'>
            <h1>{title}</h1>
        </Container>
    </section>
}

export default CommoSection;
