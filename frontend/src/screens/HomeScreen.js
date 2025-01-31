import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap"
import Product from '../components/Product'
import { listProducts } from "../actions/productActions"
import Loader from '../components/Loader'
import Message from '../components/Message'

export default function HomeScreen() {
  
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, product, loading } = productList

  useEffect(() => {
    dispatch(listProducts())
    
  },[])

  console.log(product)
  
  
  return (
    <div>
        <h1> Latest Products </h1>
        {loading ? <Loader /> :
          error ? <Message variant='danger'> {error} </Message>
        :
        <Row> 
        {product.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}> 
                <Product product={product} />
            </Col>
        ))}
        </Row>
          
        }
        
    </div>
  )
}
