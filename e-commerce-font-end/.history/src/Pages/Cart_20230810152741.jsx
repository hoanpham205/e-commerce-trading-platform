import { motion } from 'framer-motion';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { cartActions } from '../redux/slices/cartSlice';
import '../styles/cart.css';


const Cart = () => {
    const cartItems = useSelector(state=> state.cart.cartItems);
    const totalAmount = useSelector(state=> state.cart.totalAmount)
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
                                    cartItems.map((item,index) =>(
                                        <Tr item={item} key={index}/>
                                    ))
                                }
                            </tbody>
                        </table>
                    }
                        
                    </Col>
                    <Col lg='3'>
                        <div>
                            <h6>Subtotal</h6>
                            <span></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
   
    </Helmet>
};
const Tr =({item})=>{
    const dispatch = useDispatch()
    const deleteProduct = ()=>{
        dispatch(cartActions.deleteItem(item.id))
    }
    return <tr >
    <td><img src={item.imgUrl} alt="" /></td>
    <td>{item.productName}</td>
    <td>${item.price}</td>
    <td>{item.quantity}px</td>
    <td><motion.i whileTap={{scale:1.2}} onClick={deleteProduct} class="ri-delete-bin-6-line"></motion.i></td>
</tr>
}

export default Cart;
