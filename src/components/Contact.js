import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Col, Row, Button, Form } from 'react-bootstrap';

function Contact() {
  return (
    <section className="section container container_section">
      <Row>
          <Col lg="5">
            <div className="container_contacto">
                <div className="redes_wrapper">
                  <div className="redes_content">
                    <a href="#"><FontAwesomeIcon className="icon_face" icon={faFacebook} size="3x" /></a>
                    <a href="#"><FontAwesomeIcon className="icon_insta" icon={faInstagram} size="3x" /></a>
                    <a href="#"><FontAwesomeIcon className="icon_linke" icon={faLinkedin} size="3x" /></a>
                  </div>
                </div>

                <div className="datos_wrapper">
                  <p>Duis nisi sem, lobortis eu arcu a</p>
                  <p>Praesent ac dui a purus suscipit efficitur. Nullam semper congue posuere. Morbi pellentesque ipsum non enim porta, , vel iaculis odio mattis. Maecenas porta dolor quis iaculis sagittis. </p>
                  <a href="tel:+4424356590"><p>442 XX XX XXX</p></a>
                  <a href="mailto:contacto@hakastudio.com"><p>ejemplo@algo.com</p></a>
                </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="container_contacto">
              <div >
                <h2 className="title">Contáctanos. <br/> Será un placer atenderte</h2>
                <br/>
              </div>
              <Form>
                <Form.Group controlId="formBasicName">
                  {/* <Form.Label>Nombre</Form.Label> */}
                  <Form.Control type="Name" placeholder="Nombre" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicEmail">
                  {/* <Form.Label>Correo</Form.Label> */}
                  <Form.Control type="email" placeholder="Correo" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicTeléfono">
                  {/* <Form.Label>Teléfono</Form.Label> */}
                  <Form.Control type="email" placeholder="Teléfono" />
                </Form.Group>
                <br />
                <Form.Group controlId="formBasicMensaje.ControlTextarea1">
                  {/* <Form.Label>Mensaje</Form.Label> */}
                  <Form.Control as="textarea" rows={3} placeholder="Mensaje"/>
                </Form.Group>
                <br />
                <div className="btn_wrapper">
                  <Button variant="" type="submit">
                    Enviar
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
      </Row>
    </section>
  );
}

export default Contact;
