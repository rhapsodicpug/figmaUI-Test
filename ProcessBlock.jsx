import React, { useState } from 'react';

const ProcessBlock = ({ defaultExpanded1 = true, defaultExpanded2 = false }) => {
  const [isExpanded1, setIsExpanded1] = useState(defaultExpanded1);
  const [isExpanded2, setIsExpanded2] = useState(defaultExpanded2);

  const cardStyle = {
    width: '1234px',
    padding: '41px 60px',
    borderRadius: '45px',
    border: '1px solid #191a23',
    marginBottom: '30px',
    transition: 'all 0.3s ease'
  };

  const contentRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    gap: '352px'
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '25px',
    alignItems: 'center'
  };

  const numberStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '60px',
    fontWeight: 500,
    color: '#000000'
  };

  const titleStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '30px',
    fontWeight: 500,
    color: '#000000'
  };

  const descriptionStyle = {
    fontFamily: 'Space Grotesk',
    fontSize: '18px',
    fontWeight: 400,
    color: '#000000',
    marginTop: '30px',
    width: '100%'
  };

  const lineStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#000000',
    marginBottom: '30px'
  };

  const iconStyle = {
    width: '58px',
    height: '58px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease'
  };

  return (
    <div style={{ padding: '100px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      {/* Card 1 */}
      <div style={{ ...cardStyle, backgroundColor: '#b9ff66' }}>
        <div style={contentRowStyle}>
          <div style={labelStyle}>
            <span style={numberStyle}>01</span>
            <h2 style={titleStyle}>Consultation</h2>
          </div>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z_QnLYDi91IKZZki/plus-ico.png" 
            alt="toggle" 
            style={{ ...iconStyle, transform: isExpanded1 ? 'rotate(45deg)' : 'rotate(0)' }}
            onClick={() => setIsExpanded1(!isExpanded1)}
          />
        </div>
        {isExpanded1 && (
          <>
            <div style={lineStyle} />
            <p style={descriptionStyle}>
              During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
            </p>
          </>
        )}
      </div>

      {/* Card 2 */}
      <div style={{ ...cardStyle, backgroundColor: '#f3f3f3' }}>
        <div style={contentRowStyle}>
          <div style={labelStyle}>
            <span style={numberStyle}>02</span>
            <h2 style={titleStyle}>Research and Strategy Development</h2>
          </div>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z_QnLYDi91IKZZki/plus-ico-2.png" 
            alt="toggle" 
            style={{ ...iconStyle, transform: isExpanded2 ? 'rotate(45deg)' : 'rotate(0)' }}
            onClick={() => setIsExpanded2(!isExpanded2)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProcessBlock;

