import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap" 
import { BrowserRouter as Routes, Router, Route, Link } from 'react-router-dom'
import Cart from "./Cart"


function Header() {
  return (
      <header> 
        <Navbar expand="lg" variant="dark" bg="dark" collapseOnSelect>
        <Container> 
           <Navbar.Brand> iShop </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="mr-auto">            
                  <Link to="/cart">
                    <i className="fas fa-shopping-cart text-white"> Cart </i>
                  </Link>
                  <Link to="/login"><i className="fas fa-user text-white px-3"> Login </i></Link>
                </Nav>
                </Navbar.Collapse>               
          </Container>
        </Navbar>
      </header>
    
  )
}

export default Header
