import React, { useState } from 'react';

import '../styles/Header.css'; // Assuming custom styles are in this file
import 'bootstrap-icons/font/bootstrap-icons.css';
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className={activeIndex === 0 ? "active" : ""}
          aria-current={activeIndex === 0 ? "true" : "false"}
          aria-label="Slide 1"
          onClick={() => setActiveIndex(0)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          className={activeIndex === 1 ? "active" : ""}
          aria-label="Slide 2"
          onClick={() => setActiveIndex(1)}
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          className={activeIndex === 2 ? "active" : ""}
          aria-label="Slide 3"
          onClick={() => setActiveIndex(2)}
        ></button>
      </div>
      <div className="carousel-inner">
        <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
          <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
            <div className="row align-items-center headerrow">
              <div className="col-md-6 text-start">
                <h2>
                  A <span className="text-danger">power-packed solution</span> to streamline all educational and institutional
                  processes.
                </h2>
                <p>
                  Campus Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment
                  activities rolled into one for your institution.
                </p>
                <div className="headerbtn">Get a Demo</div>
                
              </div>
              <div className="col-md-6">
                <img
                  src="https://media.istockphoto.com/id/1361938330/vector/team-of-programmers-working-on-program-code-with-laptops.jpg?s=2048x2048&w=is&k=20&c=neG3pDPhT0c1I2NN44bSRSTFVekz5QfpkcUWLTdHggI="
                  className="img-fluid"
                  alt="Educational Processes"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
          
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
            <div className="row align-items-center headerrow">
              <div className="col-md-6 text-start">
                <h2>
                  A <span className="text-danger">power-packed solution</span> to streamline all educational and institutional
                  processes.
                </h2>
                <p>
                  Puma Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment
                  activities rolled into one for your institution.
                </p>
                <div className="headerbtn">Get a Demo</div>
              </div>
              <div className="col-md-6">
                <img
                  src="https://media.istockphoto.com/id/1407812943/vector/customer-service-flat-illustration-concept-on-white-background.jpg?s=1024x1024&w=is&k=20&c=vqsoNywBAUqhf_YDL6XnbPZ9pu8snKJMqRX71ubQULE="
                  className="img-fluid"
                  alt="Educational Processes"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>


        </div>
        <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: '300px' }}>
            <div className="row align-items-center headerrow">
              <div className="col-md-6 text-start">
                <h2>
                  A <span className="text-danger">power-packed solution</span> to streamline all educational and institutional
                  processes.
                </h2>
                <p>
                  Mens Tech is a robust solution packed with best-in-class software, consulting, audits, and empowerment
                  activities rolled into one for your institution.
                </p>
                <div className="headerbtn">Get a Demo</div>
              </div>
              <div className="col-md-6">
                <img
                  src="https://media.istockphoto.com/id/1172133594/vector/flat-banner-development-relationships-at-work.jpg?s=1024x1024&w=is&k=20&c=aNYnpRozreE6ko4k6IbNNsdw0XSFo1LkGCGAsgkQJFw="
                  className="img-fluid"
                  alt="Educational Processes"
                  style={{ maxHeight: '300px' }}
                />
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="carousel-controls d-flex justify-content-end position-absolute bottom-0 end-0 mb-3 me-3">
        <button
          className="btnarrow"
          type="button"
          onClick={handlePrev}
        >
          <i class="bi bi-chevron-left"></i>
        </button>
        <button
          className="btnarrow"
          type="button"
          onClick={handleNext}
        >
          <i class="bi bi-chevron-right"></i>
        
        </button>
      </div>
      <div className="carousel-points mt-3">
        <i className={`bi ${activeIndex === 0 ? "bi-circle-fill text-danger" : "bi-circle"} mx-1`}></i>
        <i className={`bi ${activeIndex === 1 ? "bi-circle-fill text-danger" : "bi-circle"} mx-1`}></i>
        <i className={`bi ${activeIndex === 2 ? "bi-circle-fill text-danger" : "bi-circle"} mx-1`}></i>
      </div>
      
      
    </div>
     <div className='line'></div>
     </>
    
  );
};

export default Header;
