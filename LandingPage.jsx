import React from 'react';

const LandingPage = ({
  navItems = ['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'],
  companyLogos = [
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company.png',
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company-2.png',
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company-3.png',
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company-4.png',
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company-5.png',
    'https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/company-6.png'
  ],
}) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      gap: '70px',
      padding: '0',
      width: '100%',
      maxWidth: '1440px',
      margin: '0 auto',
    },
    nav: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '6px 100px',
      width: '100%',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      padding: '10px 0',
    },
    logoIcon: {
      width: '36px',
      height: '36px',
    },
    logoText: {
      width: '170px',
      height: '29px',
    },
    navMenu: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center',
    },
    navLink: {
      fontFamily: 'Space Grotesk',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#000000',
      cursor: 'pointer',
      textDecoration: 'none',
    },
    button: {
      padding: '20px 35px',
      borderRadius: '14px',
      fontFamily: 'Space Grotesk',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    primaryButton: {
      backgroundColor: '#191a23',
      color: '#ffffff',
      border: 'none',
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#000000',
      border: '1px solid #191a23',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 100px',
      gap: '206px',
    },
    headerContent: {
      display: 'flex',
      flexDirection: 'column',
      gap: '35px',
      maxWidth: '531px',
    },
    headerTitle: {
      fontFamily: 'Space Grotesk',
      fontSize: '60px',
      fontWeight: 500,
      color: '#000000',
      margin: 0,
    },
    headerText: {
      fontFamily: 'Space Grotesk',
      fontSize: '20px',
      fontWeight: 400,
      lineHeight: '28px',
      color: '#000000',
      margin: '0',
    },
    illustration: {
      width: '600px',
      height: '515px',
      objectFit: 'contain',
    },
    logotypes: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 100px',
      gap: '206px',
    },
    companyLogo: {
      height: '48px',
      objectFit: 'contain',
    },
  };

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/icon.png" alt="Icon" style={styles.logoIcon} />
          <img src="https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/positivu.png" alt="Positivus" style={styles.logoText} />
        </div>
        <div style={styles.navMenu}>
          {navItems.map((item, index) => (
            <a key={index} href="#" style={styles.navLink}>{item}</a>
          ))}
          <button style={{...styles.button, ...styles.secondaryButton}}>
            Request a quote
          </button>
        </div>
      </nav>

      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.headerTitle}>
            Navigating the digital landscape for success
          </h1>
          <p style={styles.headerText}>
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button style={{...styles.button, ...styles.primaryButton}}>
            Book a consultation
          </button>
        </div>
        <img src="https://dashboard.codeparrot.ai/api/image/Z_Qny6264jGQAeK8/illustra.png" alt="Illustration" style={styles.illustration} />
      </header>

      <div style={styles.logotypes}>
        {companyLogos.map((logo, index) => (
          <img 
            key={index}
            src={logo}
            alt={`Company logo ${index + 1}`}
            style={styles.companyLogo}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;

