import React from 'react';
import Footer from './Footer';
import Navigation from './Navigation';
import ContactInfo from './ContactInfo';
import SubscriptionBlock from './SubscriptionBlock';
import FooterLineText from './FooterLineText';

const FooterLayout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '1241px',
    height: 'auto',
    backgroundColor: '#191a23',
    padding: '55px 60px 50px 60px',
    gap: '50px',
    color: '#ffffff',
    fontFamily: 'Space Grotesk, sans-serif',
    boxSizing: 'border-box',
    margin: '0 auto',
  };

  return (
    <div style={layoutStyle}>
      <Navigation />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '154px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <ContactInfo />
        <SubscriptionBlock />
      </div>
      <FooterLineText />
    </div>
  );
};

export default FooterLayout;

