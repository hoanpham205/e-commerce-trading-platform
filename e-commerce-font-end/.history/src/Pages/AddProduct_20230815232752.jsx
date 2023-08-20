import React from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'

function AddProduct() {
  return <section>
    <Container>
        <Row>
            <Col lg='12'>
                <h4 className='mb-5 '>Add Product</h4>
                <Form>
                    <FormGroup className='form__group'>
                        <span>Product Title</span>
                        <input type="text"  placeholder='Double sofa'/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                        <span>Short Description</span>
                        <input type="text"  placeholder='lorem...'/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                        <span>Description</span>
                        <input type="text"  placeholder='Description...'/>
                    </FormGroup>
                    <div>
                    <FormGroup className='form__group'>
                        <span>Price</span>
                        <input type="number"  placeholder='$...'/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                        <span>Category</span>
                        <select>
                            <option value="chair">Chair</option>
                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>
                        </select>
                    </FormGroup>
                    </div>
                    <div>
                    <FormGroup className='form__group'>
                        <span>Product Image</span>
                        <input type="number"  placeholder='$...'/>
                    </FormGroup>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AddProduct