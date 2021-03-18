import React from 'react';
import './App.scss';
import logo from '../images/logo.png';
import Home from './Home';
import About from './About';
import { NavHashLink } from 'react-router-hash-link';
import { Col, Container, Row } from 'react-bootstrap';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

function Navbar() {
  return (
    <Router>
        <div className="navbar_wrapper">
            <nav className="navbar_content">
                <ul>
                    <li className="logo_wrapper">
                        <Link to="/">
                            <div className="logo">
                                <img src={logo} />
                            </div>
                        </Link>
                    </li>
                    <div>
                        <li>
                            <NavHashLink to="/#home" smooth>Home</NavHashLink>
                        </li>
                        <li>
                            <NavHashLink to="/#services" smooth>Servicios</NavHashLink>
                        </li>
                        <li>
                            <Link to="/about">Nosotros</Link>
                        </li>
                        <li>
                            <NavHashLink to="/#contact" smooth>Contacto</NavHashLink>
                        </li>
                    </div>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default Navbar;