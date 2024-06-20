import React, { Component } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Favorites from '../../Pages/Favorites/Favorites';
import Catalog from '../../Pages/Catalog/Catalog';
import Basket from '../../Pages/Basket/Basket';
import ProductDetails from '../ProductDetails/ProductDetails';

export default class Header extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar collapseOnSelect expand="md" bg="gray" variant="light">
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto" style={{ gap: '100px', justifyContent: 'center', display: 'flex', margin: 'auto'}}> {}
                  <Button variant="outline-danger" as={Link} to="/" size="lg" style={{ borderWidth: 3, fontSize: '30px', borderColor: 'cornflowerblue', color: 'cornflowerblue' }}> {}
                    Главная
                  </Button>
                  <Button variant="outline-danger" as={Link} to="/catalog" size="lg" style={{ borderWidth: 3, fontSize: '30px', borderColor: 'cornflowerblue', color: 'cornflowerblue' }}>
                    Каталог
                  </Button>
                  <Button variant="outline-danger" as={Link} to="/favorites" size="lg" style={{ borderWidth: 3, fontSize: '30px', borderColor: 'cornflowerblue', color: 'cornflowerblue' }}>
                    Избранное
                  </Button>
                  <Button variant="outline-danger" as={Link} to="/basket" size="lg" style={{ borderWidth: 3, fontSize: '30px', borderColor: 'cornflowerblue', color: 'cornflowerblue' }}>
                    Корзина
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/basket' element={<Basket />} />
            <Route path='/product/:productId' element={<ProductDetails />} />
          </Routes>
        </>
      </Router>
    );
  }
}
