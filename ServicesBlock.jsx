import React from 'react';

const ServicesBlock = ({
  card1Title = 'Search engine optimization',
  card1Image = 'https://dashboard.codeparrot.ai/api/image/Z_Qne4Di91IKZZkl/illustra.png',
  card1Icon = 'https://dashboard.codeparrot.ai/api/image/Z_Qne4Di91IKZZkl/icon.png',
  card2Title = 'Pay-per-click advertising',
  card2Image = 'https://dashboard.codeparrot.ai/api/image/Z_Qne4Di91IKZZkl/illustra-2.png',
  card2Icon = 'https://dashboard.codeparrot.ai/api/image/Z_Qne4Di91IKZZkl/icon-2.png',
}) => {
  const cardStyle = {
    width: '600px',
    padding: '50px',
    borderRadius: '45px',
    border: '1px solid #191a23',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const headingStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const labelStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '30px',
    fontWeight: 500,
    color: '#000000',
    padding: '7px',
    borderRadius: '7px',
    width: 'fit-content',
    backgroundColor: '#ffffff',
  };

  const linkStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    fontFamily: 'Space Grotesk',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '28px',
    color: '#000000',
    textDecoration: 'none',
  };

  const containerStyle = {
    display: 'flex',
    gap: '40px',
    padding: '0 100px',
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.02)';
  };

  const handleLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      <div 
        style={{
          ...cardStyle,
          backgroundColor: '#f3f3f3',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div style={headingStyle}>
          <div style={labelStyle}>{card1Title}</div>
          <a href="#" style={linkStyle}>
            <img src={card1Icon} alt="icon" width="41" height="41" />
            <span>Learn more</span>
          </a>
        </div>
        <img src={card1Image} alt="illustration" width="210" height="170" />
      </div>

      <div 
        style={{
          ...cardStyle,
          backgroundColor: '#b9ff66',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div style={headingStyle}>
          <div style={labelStyle}>{card2Title}</div>
          <a href="#" style={linkStyle}>
            <img src={card2Icon} alt="icon" width="41" height="41" />
            <span>Learn more</span>
          </a>
        </div>
        <img src={card2Image} alt="illustration" width="210" height="147.62" />
      </div>
    </div>
  );
};

export default ServicesBlock;

