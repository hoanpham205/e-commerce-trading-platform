import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'react-bootstrap'

function AddProduct() {
  return <section>
    <Container>
        <Row>
            <Col lg='12'>
                <h4>Add Product</h4>
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
                        <span>price</span>
                        <input type="text"  placeholder='lorem...'/>
                    </FormGroup>
                    <FormGroup className='form__group'>
                        <span>Description</span>
                        <input type="text"  placeholder='Description...'/>
                    </FormGroup>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AddProduct