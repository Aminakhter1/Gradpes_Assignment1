
import React from 'react';

import '../styles/Resource.css'; // Custom CSS for additional styles
import 'bootstrap-icons/font/bootstrap-icons.css';
import re1 from "../Assets/re1.png";
import re2 from "../Assets/re2.png";
import re3 from "../Assets/re3.png";

const Resource = () => {
  return (
    <div className="container py-5">
      <div className=" mb-4">
        <h3 className="fw-bold">The best in the country <span className="text-danger">trust us</span></h3>
      </div>

      <div className="row mb-4">
        <div className="col-md-3 col-6">
          <h2 className="text-warning">30</h2>
          <p>Top Institutions</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-success">13</h2>
          <p>in A/A+/A++ Tier</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-warning">3000</h2>
          <p>Faculty Connect</p>
        </div>
        <div className="col-md-3 col-6">
          <h2 className="text-success">90,000</h2>
          <p>Students Benefited</p>
        </div>
      </div>
      <hr/>

      <div className="marquee-section">
        <div className="marquee"> 
        
        <img src={re1}/>
          
        
        
        <img src={re2}/>
          
        
        
        <img src={re3}/>
          
        
        
        </div>

        
      </div>
      <hr/>
      
    </div>
  );
};

export default Resource;
