
import React from 'react';
import '../styles/ContactPage.css'; // Custom CSS for additional styles

const ContactPage = () => {
  return (
    <>
    <div className="line1"></div>
    <div className="container-fluid">
      
      <div className="row ">
        <div className="col-md-4 contact">
          <h3 className="fw-bold">
            Ready to give your </h3><h3><span className="text-danger">institution</span></h3> <h3><span>an upgrade?</span></h3>
            <div className="contactbtn">Contact Us</div>
          
        </div>
        <div className="col-md-8 d-flex imagemain">
          <div className="image-wrapper">
            <img
              src="https://media.istockphoto.com/id/609801866/photo/contact-us.jpg?s=2048x2048&w=is&k=20&c=gxBAhRQyZIY2U9p04-_tZ4h9QDZtM-kD9TVQ2i74lK8="
              alt="Student holding books"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
