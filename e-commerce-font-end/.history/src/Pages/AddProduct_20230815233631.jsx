import React, { useState } from 'react'
import { Col, Container, Form, FormGroup, Row } from 'react-bootstrap'

function AddProduct() {
    const [enterTitle,setEnterTitle]= useState('')
    const [enterShortDesc,setEnterShortDesc]= useState('')
    const [enterDescription,setEnterDescription]= useState('')
    const [enterCategory,setEnterCategory]= useState('')
    const [enterPrice,setEnterPrice]= useState('')
    const [enterImage,setEnterImage]= useState(null)

    const addProduct = async(e)=>{
        e.pr
    }
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
                    <div className='d-flex align-items-center justify-content-between gap-5'>
                    <FormGroup className='form__group w-50'>
                        <span>Price</span>
                        <input type="number"  placeholder='$...'/>
                    </FormGroup>
                    <FormGroup className='form__group w-50'>
                        <span>Category</span>
                        <select className='w-100 p-2'>
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
                        <input type="file"  />
                    </FormGroup>
                    </div>
                    <button className=' buy__btn '>Add</button>
                </Form>
            </Col>
        </Row>
    </Container>
  </section>
}

export default AddProduct