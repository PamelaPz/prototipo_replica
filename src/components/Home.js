import React from 'react';
import './App.scss';
import img1 from '../images/bk101.jpg';
import img2 from '../images/bk102.jpg';
import img3 from '../images/bk103.jpg';
import Contact from './Contact';
import Services from './Services';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div>
      <div id="home">
        <Carousel fade className="carousel_wrapper" indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <Services />
      </div>
      
      <div>
        <Contact />
      </div>
    </div>
  )
}

export default Home;
