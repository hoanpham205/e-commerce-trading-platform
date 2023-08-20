import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/cart.css';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';


const Cart = () => {
    const cartItems = useSelector(state=> state.cart.cartItems);
    
    return <Helmet title='Cart'>
        <CommonSection title='Shopping Cart'/>
        <section>
            <Container>
                <Row>
                    <Col lg='9'>
                    {
                        cartItems.length===0? <h2>No item added to the cart</h2>: <table className='table bordered'>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Qty</th>
                                    <th >Delete</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    cartItems.map((item,index)=>(
                                        <Tr item={item} key={index}/>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                        
                    </Col>
                    <Col lg='3'></Col>
                </Row>
            </Container>
        </section>
   
    </Helmet>
};
const Tr =(item)=>{
    const dispatch = useDispatch()
    const deleteProduct = ()=>{
        dispatch(deleteProduct
    }
    return <tr >
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <td><motion.i whileTap={{scale:1.2}} class="ri-delete-bin-6-line"></motion.i></td>
</tr>
}

export default Cart;
