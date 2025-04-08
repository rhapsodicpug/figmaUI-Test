import React, { useState } from 'react';

// ✅ Move this up so it's available for the default parameter
const defaultTestimonials = [
  {
    id: 1,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
    bubbleImage: "https://dashboard.codeparrot.ai/api/image/Z_Qmk6264jGQAeKy/bubble.png"
  },
  {
    id: 2,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
    bubbleImage: "https://dashboard.codeparrot.ai/api/image/Z_Qmk6264jGQAeKy/bubble-2.png"
  },
  {
    id: 3,
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    author: "John Smith",
    position: "Marketing Director at XYZ Corp",
    bubbleImage: "https://dashboard.codeparrot.ai/api/image/Z_Qmk6264jGQAeKy/bubble-3.png"
  }
];

const TestimonialsBlock = ({ testimonials = defaultTestimonials }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const styles = {
    container: {
      backgroundColor: '#191a23',
      borderRadius: '45px',
      padding: '84px 40px',
      width: '1240px',
      margin: '0 auto',
    },
    cardsContainer: {
      display: 'flex',
      gap: '50px',
      overflowX: 'hidden',
      marginBottom: '50px',
    },
    card: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      minWidth: '606px',
    },
    bubble: {
      position: 'relative',
      width: '606px',
      height: '266px',
    },
    bubbleImage: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
    },
    testimonialText: {
      position: 'absolute',
      top: '48px',
      left: '52px',
      width: '502px',
      color: '#ffffff',
      fontFamily: 'Space Grotesk',
      fontSize: '18px',
      fontWeight: 400,
      lineHeight: '1.5',
    },
    author: {
      color: '#ffffff',
      fontFamily: 'Space Grotesk',
      fontSize: '18px',
      fontWeight: 400,
      marginLeft: '80px',
    },
    navigation: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
    },
    navDot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#ffffff',
      cursor: 'pointer',
      opacity: 0.5,
      transition: 'opacity 0.3s ease',
    },
    navDotActive: {
      opacity: 1,
    },
    navButton: {
      background: 'none',
      border: 'none',
      color: '#ffffff',
      fontSize: '24px',
      cursor: 'pointer',
      padding: '0 20px',
      opacity: 0.7,
      transition: 'opacity 0.3s ease',
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={styles.container}>
      <div style={{
        ...styles.cardsContainer,
        transform: `translateX(-${currentSlide * (606 + 50)}px)`,
        transition: 'transform 0.5s ease'
      }}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} style={styles.card}>
            <div style={styles.bubble}>
              <img 
                src={testimonial.bubbleImage} 
                alt="Speech bubble" 
                style={styles.bubbleImage}
              />
              <p style={styles.testimonialText}>{testimonial.text}</p>
            </div>
            <div style={styles.author}>
              <div>{testimonial.author}</div>
              <div>{testimonial.position}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={styles.navigation}>
        <button 
          style={styles.navButton}
          onClick={handlePrevSlide}
          onMouseOver={(e) => e.target.style.opacity = 1}
          onMouseOut={(e) => e.target.style.opacity = 0.7}
        >
          ←
        </button>
        {testimonials.map((_, index) => (
          <div
            key={index}
            style={{
              ...styles.navDot,
              ...(currentSlide === index ? styles.navDotActive : {})
            }}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
        <button 
          style={styles.navButton}
          onClick={handleNextSlide}
          onMouseOver={(e) => e.target.style.opacity = 1}
          onMouseOut={(e) => e.target.style.opacity = 0.7}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default TestimonialsBlock;
