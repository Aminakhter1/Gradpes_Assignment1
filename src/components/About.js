import React from "react";
import "../styles/About.css"; //For custom styles
//This is About Section code
const About= () => {
  const features = [
    { icon: "🎨", text: "Simple and easy-to-use interface" },
    { icon: "📊", text: "Multi-institutional dashboard" },
    { icon: "🤖", text: "AI-based alerts for all activities to be conducted" },
    { icon: "📈", text: "Track learning behaviour and learning outcomes" },
    { icon: "📜", text: "Build a new culture of compliance and accreditation" },
    { icon: "🔗", text: "Integration with your campus website" },
  ];

  return (
    <div className="container-fluid aboutcontainer">
      <div className="row  align-items-center aboutrow">
        {/* Left Section */}
        <div className="col-md-5 mb-4">
          <h3>
            Why your</h3><h3>educational </h3><h3>institution needs{" "}</h3>
            <h3><span className="text-primary">Campus Tech</span>
          </h3>
          <div className="aboutbtn">About Us</div>
          
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <div className="row">
            {features.map((feature, index) => (
              <div
                className="col-md-6 d-flex align-items-start mb-4"
                key={index}
              >
                <div className="icon me-3">{feature.icon}</div>
                <p className="mb-0">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
