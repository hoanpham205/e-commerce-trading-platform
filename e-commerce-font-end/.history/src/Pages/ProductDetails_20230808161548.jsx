import React from 'react';
import {Container, Row,Col} from 'reactstrap'
import { useParams } from 'react-router-dom';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

const ProductDetails = () => {
    return <Helmet>
        <CommonSection>
            <section>
                <Container>
                    <Row>
                        
                    </Row>
                </Container>
            </section>
        </CommonSection>
    </Helmet>
}

export default ProductDetails;
