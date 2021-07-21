import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Footer() {
    return (
        <footer className="container">
      <div className="container">
        <div className="row">
          <div>
            <footer className="footer">
            <ul>
              <li><a href="https://www.linkedin.com/in/brandongeorgemerritt/" target="_blank" rel="noreferrer" alt="LinkedIn Profile page">LinkedIn</a></li>
              <li><a href="mailto:brandongmerritt@gmail.com" target="_blank" rel="noreferrer" alt="Direct Link to Email">Email</a></li>
              <li><a href="tel:+9894449084" target="_blank" rel="noreferrer" alt="PhoneNumber">PhoneNumber</a></li>
          </ul>
          </footer>
          </div>
        </div>
        </div>
      </footer>
    )
}
export default Footer;