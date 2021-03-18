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

function App() {
  return (
    <Container fluid className="container_wrapper">
      <Row>
          <Navbar/>
      </Row>
    </Container>
  );
}

export default App;
