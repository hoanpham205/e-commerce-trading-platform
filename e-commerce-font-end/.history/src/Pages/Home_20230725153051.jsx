import { motion } from 'framer-motion';
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import products from '../assets/data/products';
import heroImg from '../assets/img/hero-img.png';
import Helmet from "../components/Helmet/Helmet";
import ProductsList from '../components/UI/ProductsList';
import Services from "../services/Services";
import '../styles/home.css';
const Home = () => {
    const [trendingProducts,setTrendingProducts] = useState([]);
    const [bestSalesProducts,setBestSalesProducts] = useState([]);
    const year = new Date().getFullYear();

    useEffect(() =>{
        const filterdTrendingProducts = products.filter(item => item.category == 'chair');
        const filterdBestSalesProducts = products.filter(item => item.category == 'sofa');
        setTrendingProducts(filterdTrendingProducts)
        setBestSalesProducts(filterdBestSalesProducts)
    },[])
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
                        <h2 className="section__title">Treding Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts}/>
                </Row>
            </Container>
        </section>
        <section className="best__sales">
        <Container>
                <Row>
                    <Col lg ='12' className='text-center'>
                        <h2 className="section__title">Best Sales</h2>
                    </Col>
                    <ProductsList data={bestSalesProducts}/>
                </Row>
            </Container>
        </section>
    </Helmet>
}
export default Home;