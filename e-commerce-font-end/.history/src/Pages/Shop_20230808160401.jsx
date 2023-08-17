import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import ProductsList from '../components/UI/ProductsList';
import '../styles/shop.css';


const Shop = () => {
    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=> {
        const filterValue = e.target.value
        if (filterValue==='sofa'){
            const filteredProducts = products.filter(item => item.category === 'sofa')
            setProductsData(filteredProducts)
        }
        if (filterValue==='mobile'){
            const filteredProducts = products.filter(item => item.category === 'mobile')
            setProductsData(filteredProducts)
        }
        if (filterValue==='chair'){
            const filteredProducts = products.filter(item => item.category === 'chair')
            setProductsData(filteredProducts)
        }
        if (filterValue==='watch'){
            const filteredProducts = products.filter(item => item.category === 'watch')
            setProductsData(filteredProducts)
        }
        if (filterValue==='wireless'){
            const filteredProducts = products.filter(item => item.category === 'wireless')
            setProductsData(filteredProducts)
        }
    }
    const handleSearch = e=>{}

    return <Helmet title='shop'>
        <CommonSection title='Products' />
        <section>
            <Container>
                <Row>
                    <Col lg='3' md='3'>
                        <div className="filter__widget">
                            <select onChange={handleFilter}>
                                <option>Filter by Category</option>
                                <option value="sofa">Sofa</option>
                                <option value="mobile">Mobile</option>
                                <option value="chair">Chair</option>
                                <option value="watch">Watch</option>
                                <option value="wireless">Wireless</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='3' md='3'>
                    <div className="filter__widget">
                            <select>
                                <option>Sort by</option>
                                <option value="ascending">Ascending</option>
                                <option value="descending">Descending</option>
                            </select>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="search__box">
                            <input type="text" placeholder='Search...' />
                            <span><i class="ri-search-2-line"></i></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row className='pt-0'>
                    {
                        productsData.length===0?<h1>No Products are found</h1>: <ProductsList data={productsData}/>
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
        
}

export default Shop;
