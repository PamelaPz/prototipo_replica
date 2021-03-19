import React from 'react';
import './App.scss';
import img1 from '../images/bk104.jpg';
import { Container, Col, Row} from 'react-bootstrap';

function ServiciosFull() {
  return (
    <div>
      <section className="section container_section" id="about">
        <div className="content-about">
          <Row>
              <Col lg="6">
                <div className="wrapper-img">
                  <img src={img1} className=""/>
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
    </div>
  )
}

export default ServiciosFull;
