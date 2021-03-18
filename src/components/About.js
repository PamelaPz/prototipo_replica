import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Button, Form } from 'react-bootstrap';

function About() {
  return (
    <section className="section container container_section" id="about">
      <Row>
        <div className="nosotros">
            <div className="datos_wrapper">
              <p>Duis nisi sem, lobortis eu arcu a</p>
              <p>Praesent ac dui a purus suscipit efficitur. Nullam semper congue posuere. Morbi pellentesque ipsum non enim porta, , vel iaculis odio mattis. Maecenas porta dolor quis iaculis sagittis. </p>
              <a href="tel:+4424356590"><p>442 XX XX XXX</p></a>
              <a href="mailto:contacto@hakastudio.com"><p>ejemplo@algo.com</p></a>
            </div>
        </div>
      </Row>
    </section>
  );
}

export default About;