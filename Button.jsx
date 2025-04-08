import React from 'react';

const Button = ({ label = "See all team", onClick = () => {} }) => {
  const buttonStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px 35px',
    backgroundColor: '#191a23',
    borderRadius: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    width: '199px',
    height: '68px',
  };

  const labelStyles = {
    color: '#ffffff',
    fontFamily: 'Space Grotesk, sans-serif',
    fontSize: '20px',
    fontWeight: 400,
    lineHeight: '28px',
    textAlign: 'center',
    margin: 0,
  };

  const hoverStyles = {
    transform: 'translateY(-2px)',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
  };

  return (
    <button 
      style={buttonStyles}
      onClick={onClick}
      onMouseEnter={(e) => {
        Object.assign(e.currentTarget.style, hoverStyles);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span style={labelStyles}>{label}</span>
    </button>
  );
};

export default Button;

