import { motion } from 'framer-motion';
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from '../assets/img/hero-img.png';
import Helmet from "../components/Helmet/Helmet";
import Services from "../services/Services";
import '../styles/home.css';
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
                            <motion.button whileTap={{scale:1.2}} className="buy__btn"><Link to  ='/shop'>Shop Now</Link></motion.button>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img"></div>
                        <img src={heroImg} alt="" />
                    </Col>
                </Row>
            </Container>
        </section>
        <Services />
        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg ='12' className='text-center'>
                        h2.section__til
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}
export default Home;