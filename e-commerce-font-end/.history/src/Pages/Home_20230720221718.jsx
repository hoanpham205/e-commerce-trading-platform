import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Helmet from "../components/Helmet/Helmet";
const Home = () => {
    const year = new Date().getFullYear();
    return <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__container">
                            <p className="hero__subtitle">Trending product in {year}</p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi earum officia velit consequuntur dolorum temporibus, molestiae odit eligendi quas quo non beatae, voluptas dolores dignissimos modi. Magnam harum consectetur alias?</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}
export default Home;