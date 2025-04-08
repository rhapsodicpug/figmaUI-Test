import React from 'react';

const ServicesHeader = ({ title = "Services", description = "At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" }) => {
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
    justifyContent: 'center'
  };

  const labelTextStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '40px',
    fontWeight: '500',
    color: '#000000',
    margin: 0
  };

  const descriptionStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontWeight: '400',
    color: '#000000',
    width: '580px',
    margin: 0
  };

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        <h1 style={labelTextStyle}>{title}</h1>
      </div>
      <p style={descriptionStyle}>
        {description}
      </p>
    </div>
  );
};

export default ServicesHeader;

