import React from 'react';
import './App.scss';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';
import Footer from './Footer';

function App() {
  return (
    <Container fluid className="container_wrapper">
      <Navbar/>
      <Footer />
    </Container>
  );
}

export default App;
