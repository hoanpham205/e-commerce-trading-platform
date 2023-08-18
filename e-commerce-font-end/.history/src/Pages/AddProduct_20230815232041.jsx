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
                        <span>Product Titke</span>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AddProduct