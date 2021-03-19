import React from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    let newDate = new Date()
    let year = newDate.getFullYear();
    return (
        <div className="footer_wrapper">
            <ul className="list_footer">
                <li>© {year} Tooring</li>
                <li>
                    <div className="redes_content">
                        <a href="https://www.facebook.com/TooringMX"><FontAwesomeIcon className="text-blak" icon={faFacebook} size="lg" /></a>
                        <a href="https://www.instagram.com/tooringmx/"><FontAwesomeIcon className="text-blak" icon={faInstagram} size="lg" /></a>
                        <a href="#home"><FontAwesomeIcon className="text-blak" icon={faLinkedin} size="lg" /></a>
                    </div>
                </li>
                <li>Snisi sem lobortis</li>
            </ul>
        </div>
    );
}

export default Footer;