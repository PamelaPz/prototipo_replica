import React from 'react';
import './App.scss';
import WWW from '../images/www.png';
import VR from '../images/VR.png';
import AR from '../images/AR.png';
import App from '../images/APP.png';
import LIKE from '../images/LIKE.png';
import DR from '../images/DR.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Row } from 'react-bootstrap';

function Services() {
  return (
    <section className="section container_section bg-black" id="services">
      <Row>
          <Col lg="12">
            <div className="container_services container">
              <h2 className="title text-white">Nuestros Servicios</h2>
              
              <Row>
                <Col lg="12">
                  <div className="container_list">
                    <ul className="list_service">
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>WWW</span>
                          </div>
                          <p className="text-list">Páginas Web</p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={WWW}/>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>VR</span> 
                          </div>
                          <p className="text-list">Realidad Virtual </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={VR}/>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>AR</span> 
                          </div>
                          <p className="text-list">Realidad Aumentada </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={AR}/>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>APP</span> 
                          </div>
                          <p className="text-list">Aplicaciones Móviles </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={App}/>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>DR</span> 
                          </div>
                          <p className="text-list">Drones de mapeo </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={DR}/>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="text-li">
                          <div className="icon">
                            <span>LIKE</span> 
                          </div>
                          <p className="text-list">Redes Sociales </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={LIKE}/>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
      </Row>
    </section>
  );
}

export default Services;
