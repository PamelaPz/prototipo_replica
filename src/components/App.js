import React from 'react';
import './App.scss';
import Navbar from './Navbar';
import { Col, Container, Row } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Footer';

function App() {
  return (
    <Container fluid className="container_wrapper">
      <Row>
          <Navbar/>
          <Footer />
      </Row>
    </Container>
  );
}

export default App;
