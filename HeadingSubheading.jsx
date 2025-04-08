import React from 'react';

const HeadingSubheading = ({ heading = "Our Working Process", subheading = "Step-by-Step Guide to Achieving Your Business Goals" }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '1240px',
    padding: '0 100px',
    gap: '40px',
    alignItems: 'center'
  };

  const labelContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 7px',
    backgroundColor: '#b9ff66',
    borderRadius: '7px',
  };

  const headingStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '40px',
    fontWeight: 500,
    color: '#000000',
    margin: 0,
  };

  const subheadingStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontWeight: 400,
    color: '#000000',
    margin: 0,
  };

  return (
    <div style={containerStyle}>
      <div style={labelContainerStyle}>
        <h1 style={headingStyle}>{heading}</h1>
      </div>
      <p style={subheadingStyle}>{subheading}</p>
    </div>
  );
};

export default HeadingSubheading;

