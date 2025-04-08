import React from 'react';

const Footer_Navigation_ContactInfo_SubscriptionBlock_FooterLineText = () => {
  const footerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '1241px',
    backgroundColor: '#191a23',
    padding: '55px 60px 50px 60px',
    gap: '50px',
    color: '#ffffff',
    fontFamily: 'Space Grotesk, sans-serif',
    boxSizing: 'border-box',
    margin: '0 auto',
  };

  const headerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  };

  const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  };

  const navStyle = {
    display: 'flex',
    gap: '40px',
  };

  const navLinkStyle = {
    textDecoration: 'underline',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '154px',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const contactStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '27px',
    flex: '1 1 300px',
  };

  const contactLabelStyle = {
    backgroundColor: '#B9FF66',
    padding: '7px',
    borderRadius: '7px',
    color: '#000000',
    fontSize: '20px',
    fontWeight: '500',
  };

  const contactInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    fontSize: '18px',
  };

  const subscriptionStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    backgroundColor: '#292A32',
    padding: '58px 40px',
    borderRadius: '14px',
    flex: '1 1 300px',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '22px 35px',
    borderRadius: '14px',
    border: '1px solid #ffffff',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '18px',
    flex: '1',
    minWidth: '150px',
  };

  const buttonStyle = {
    padding: '20px 35px',
    borderRadius: '14px',
    border: 'none',
    backgroundColor: '#B9FF66',
    color: '#000000',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  };

  const footerBottomStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '50px',
    marginTop: '50px',
  };

  const dividerStyle = {
    width: '100%',
    height: '1px',
    backgroundColor: '#ffffff',
  };

  const bottomTextStyle = {
    display: 'flex',
    gap: '40px',
    fontSize: '18px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  return (
    <div style={footerStyle}>
      <div style={headerStyle}>
        <div style={logoStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_Ql2q264jGQAeKv/icon.png" alt="Icon" width="30" height="29" />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_Ql2q264jGQAeKv/positivu.png" alt="Positivus" width="140" height="23" />
        </div>
        <nav style={navStyle}>
          <a style={navLinkStyle}>About us</a>
          <a style={navLinkStyle}>Services</a>
          <a style={navLinkStyle}>Use Cases</a>
          <a style={navLinkStyle}>Pricing</a>
          <a style={navLinkStyle}>Blog</a>
        </nav>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_Ql2q264jGQAeKv/social-i.png" alt="Social Icons" width="130" height="30" />
      </div>

      <div style={contentStyle}>
        <div style={contactStyle}>
          <span style={contactLabelStyle}>Contact us:</span>
          <div style={contactInfoStyle}>
            <div>Email: info@positivus.com</div>
            <div>Phone: 555-567-8901</div>
            <div>Address: 1234 Main St<br />Moonstone City, Stardust State 12345</div>
          </div>
        </div>
        <div style={subscriptionStyle}>
          <input 
            style={inputStyle} 
            type="email" 
            placeholder="Email"
          />
          <button 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#a8eb55'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#B9FF66'}
          >
            Subscribe to news
          </button>
        </div>
      </div>

      <div style={footerBottomStyle}>
        <div style={dividerStyle} />
        <div style={bottomTextStyle}>
          <span>© 2023 Positivus. All Rights Reserved.</span>
          <a style={navLinkStyle}>Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer_Navigation_ContactInfo_SubscriptionBlock_FooterLineText;

