import React from 'react';

const TestimonialHeader = ({
  title = "Testimonials",
  description = "Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
}) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '40px',
    padding: '0 100px',
    width: '1240px',
    alignItems: 'center'
  };

  const labelContainerStyle = {
    backgroundColor: '#b9ff66',
    padding: '7px',
    borderRadius: '7px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const labelTextStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '40px',
    fontWeight: '500',
    color: '#000000'
  };

  const descriptionStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontWeight: '400',
    color: '#000000',
    marginLeft: '40px',
    width: '473px'
  };

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        <span style={labelTextStyle}>{title}</span>
      </div>
      <p style={descriptionStyle}>
        {description}
      </p>
    </div>
  );
};

export default TestimonialHeader;

