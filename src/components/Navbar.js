import './App.scss';
import Home from './Home';
import Contacto from './Contacto';
import About from './About';
import logo from '../images/logo.png';
import { Col, Container, Row } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
        <div className="navbar_wrapper">
            <nav className="navbar_content">
                <ul>
                    <li className="logo_wrapper">
                        <Link to="/" href="#home">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                        </Link>
                    </li>
                    <div>
                        <li>
                            <a href="#services">Servicios</a>
                        </li>
                        <li>
                            <Link to="/portfolio">Portafolio</Link>
                        </li>
                        <li>
                            <Link to="/about">Nosotros</Link>
                        </li>
                        <li>
                            <a href="#contact">Contacto</a>
                        </li>
                    </div>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/">
                    <Home />
                    <Contacto />
                    <Contacto />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default Navbar;