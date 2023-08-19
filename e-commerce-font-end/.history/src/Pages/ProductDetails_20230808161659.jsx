import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import products
 from '../assets/data/products';

const ProductDetails = () => {
    const {id} = useParams();

    return <Helmet>
        <CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg='6'></Col>
                        <Col lg='6'></Col>
                    </Row>
                </Container>
            </section>
        </CommonSection>
    </Helmet>
}

export default ProductDetails;
