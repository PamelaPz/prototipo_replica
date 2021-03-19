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
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>WWW</span>
                          </div>
                          <p className="text-list">Páginas Web</p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={WWW} alt="img_web"/>
                        </div>
                      </li>
                      <li>
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>VR</span> 
                          </div>
                          <p className="text-list">Realidad Virtual </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={VR} alt="img_vr"/>
                        </div>
                      </li>
                      <li>
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>AR</span> 
                          </div>
                          <p className="text-list">Realidad Aumentada </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={AR} alt="img_ar"/>
                        </div>
                      </li>
                      <li>
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>APP</span> 
                          </div>
                          <p className="text-list">Aplicaciones Móviles </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={App} alt="img_app"/>
                        </div>
                      </li>
                      <li>
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>DR</span> 
                          </div>
                          <p className="text-list">Drones de mapeo </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={DR} alt="img_dr"/>
                        </div>
                      </li>
                      <li>
                        <a href="#home" className="text-li">
                          <div className="icon">
                            <span>LIKE</span> 
                          </div>
                          <p className="text-list">Redes Sociales </p>
                        </a>
                        <div className="imagen_wrapper">
                          <img className="img_service" src={LIKE} alt="like"/>
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
