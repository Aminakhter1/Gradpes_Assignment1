import React, { useRef } from 'react';
import '../styles/CardSection.css';

const CardSection = () => {
  const carouselRef = useRef(null);

  const cards = [
    {
      title: "Accreditation & Compliance",
      description:
        "Bring real-time monitoring for all users’ accreditation requirements for continuous quality improvement.",
      icon: "📜",
    },
    {
      title: "ILMS",
      description:
        "Customize the learning system by giving users a unified platform for all academic needs with easy-to-use technology.",
      icon: "🎓",
    },
    {
      title: "Exam Management System",
      description:
        "Streamline the examination process with Online Examinations, Live Proctoring, and more.",
      icon: "📄",
    },
    {
      title: "Learning Analytics",
      description:
        "Gain insights into learner behavior and course effectiveness with powerful analytics tools.",
      icon: "📊",
    },
    {
      title: "Exam Management System",
      description:
        "Streamline the examination process with Online Examinations, Live Proctoring, and more.",
      icon: "📄",
    },
    {
      title: "Learning Analytics",
      description:
        "Gain insights into learner behavior and course effectiveness with powerful analytics tools.",
      icon: "📊",
    },
  ];

  // Unified drag and scroll handler
  const handleDragScroll = (event, type) => {
    const carousel = carouselRef.current;

    if (type === 'start') {
      carousel.isDragging = true;
      carousel.startX = event.pageX || event.touches[0].pageX;
      carousel.scrollLeftStart = carousel.scrollLeft;
    } else if (type === 'move') {
      if (!carousel.isDragging) return;
      event.preventDefault();
      const x = event.pageX || event.touches[0].pageX;
      const walk = x - carousel.startX;
      carousel.scrollLeft = carousel.scrollLeftStart - walk;
    } else if (type === 'end') {
      carousel.isDragging = false;
    }
  };

  return (
    <>
    <div>
    <h2 className=" mb-4">
        Learn more about <span className="headerred">what we solve</span>
      </h2>
    </div>
    <div
      className="carousel-container"
      ref={carouselRef}
      onMouseDown={(e) => handleDragScroll(e, 'start')}
      onMouseMove={(e) => handleDragScroll(e, 'move')}
      onMouseUp={(e) => handleDragScroll(e, 'end')}
      onMouseLeave={(e) => handleDragScroll(e, 'end')}
      onTouchStart={(e) => handleDragScroll(e, 'start')}
      onTouchMove={(e) => handleDragScroll(e, 'move')}
      onTouchEnd={(e) => handleDragScroll(e, 'end')}
      
      
      style={{ overflowX: '10%', cursor: 'grab', display: 'flex', gap: '150px', padding: '10px 0', whiteSpace: 'nowrap', }}
    >
      <div className="carousel-row d-flex" style={{ display: 'flex', gap: '15px', padding: '10px' }}>
        {cards.map((card, index) => (
          <div 
            className="card mx-2 responsive-card" 
            key={index}
            style={{ width: "300px", flexShrink: 0, overflow: "hidden", textOverflow: "ellipsis" }}
          >
            <div className="card-body">
              <div className="icon mb-3" style={{ fontSize: "2rem" }}>
                {card.icon}
              </div>
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text" style={{ wordWrap: "break-word", whiteSpace: "normal" }}>
                {card.description}
              </p>
              <div className="cardbtn">Learn More</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CardSection;
