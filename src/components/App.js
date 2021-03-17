import './App.scss';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';

function App() {
  return (
    <Container fluid className="container_wrapper">
      <Row>
        <Col lg={12}>
          <Navbar/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
