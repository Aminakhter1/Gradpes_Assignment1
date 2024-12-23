
import React from 'react';
import '../styles/Footer.css'; // Custom CSS for additional styles
import 'bootstrap-icons/font/bootstrap-icons.css';

import logo from "../Assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            
            <img className="footerlogo" src={logo}/><hr/>
            <ul className="list-unstyled">
              <li>Resources</li>
              <li>Solutions</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Contact Us</h5><hr/>
            <p>support@campus.technology</p>
            <p>+91 99809-74722</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold">Chat with us</h5><hr/>
            <div className="d-flex">
              <a href="#" className="me-3 text-dark"><i class="bi bi-linkedin"></i></a>
              <a href="#" className="me-3 text-dark"><i class="bi bi-messenger"></i></a>
              <a href="#" className="me-3 text-dark"><i class="bi bi-send"></i></a>
              <a href="#" className="text-dark"><i class="bi bi-twitter"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-6 text-muted">
            <p>&copy; 2022, Kahan Technologies Pvt. Ltd.</p>
          </div>
          <div className="col-md-6 text-end text-muted">
            <p>Designed by Amin</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
