import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Form } from 'react-bootstrap';

function Contacto() {
  return (
    <section className="section container container_section" id="contact">
      <Row>
          <Col lg="5">
            <div className="">
              <div className="redes_wrapper">
                <a href="#"><FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size="3x" /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedin} size="3x" /></a>
              </div>

              <div className="datos_wrapper">
                <p>
                ¿Tienes un proyecto en mente?

                Nosotros te ayudamos a hacerlo realidad, estaremos encantados de conocerte.
                Dejanos un mensaje o comunicate al

                442 43 56 590

                contacto@hakastudio.com
                </p>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="">
              <h2>Contáctanos</h2>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
      </Row>
    </section>
  );
}

export default Contacto;
