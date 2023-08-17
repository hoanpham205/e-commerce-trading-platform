import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
const Home = () => {
    return <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__container">
                            <p className="hero__subtitle">Trending </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}
export default Home;