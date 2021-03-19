import React from 'react';
import './App.scss';
import img1 from '../images/bk104.jpg';
import client1 from '../images/client1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Row} from 'react-bootstrap';

function About() {
  return (
    <div>
      <section className="section container_section" id="about">
        <div className="content-about">
          <Row>
              <Col lg="6">
                <div className="wrapper-img">
                  <img src={img1} className="" alt="team"/>
                </div>
              </Col>
              <Col lg="6">
                <div className="wrapper-info">
                  <h1 className="title">Tooring</h1>
                  <div className="wrapper_text">
                    <p>Sed vitae tristique felis, nec ornare tortor. Curabitur egestas mauris vitae elit vehicula, eget congue libero varius. Vivamus ligula diam, venenatis id augue ut, euismod tincidunt tortor. Donec et nisi molestie, porta neque in, laoreet quam. Integer ac ipsum augue. In sed gravida lectus. Integer elementum sed ligula vel tincidunt. Donec porta turpis in velit sodales, vel suscipit erat tincidunt. Nullam laoreet urna sed tortor pulvinar blandit. Maecenas a tellus libero. Nullam a convallis dolor, nec accumsan libero.</p>
                    <p>Nam eget semper quam, at sollicitudin nibh. Donec efficitur eget eros a sodales. Fusce vulputate eros augue, quis fringilla sapien sodales ut. Sed varius nulla et nisl euismod, quis blandit purus pulvinar. Donec efficitur eget eros a sodales. Fusce vulputate eros quis blandit purus pulvinar.</p>
                  </div>
                </div>
              </Col>
          </Row>
        </div>
      </section>
      <section className="container container_section">
        <div className="grid_clients text-center">
          <h2 className="title_2">Nuestros Clientes</h2>
          <div className="content_img">
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
            <img src={client1} alt="cliente"/>
          </div>
        </div>
      </section>
      <section className="banner bg-black text-white">
        <ul className="list_banner">
          <li>Sed vitaetristique Refstn</li>
          <li>
              <div className="redes_content">
                  <a href="https://www.facebook.com/TooringMX"><FontAwesomeIcon className="text-white" icon={faFacebook} size="lg" /></a>
                  <a href="https://www.instagram.com/tooringmx/"><FontAwesomeIcon className="text-white" icon={faInstagram} size="lg" /></a>
                  <a href="#about"><FontAwesomeIcon className="text-white" icon={faLinkedin} size="lg" /></a>
              </div>
          </li>
          <li>Mauris ultricies argcal</li>
        </ul>
      </section>
    </div>
  )
}

export default About;
