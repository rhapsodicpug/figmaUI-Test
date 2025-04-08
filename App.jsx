// src/App.jsx
import React from 'react';

import Button from './assets/components/Button';
import Footer from './assets/components/Footer';
import Footer_Navigation_ContactInfo_SubscriptionBlock_FooterLineText from './assets/components/const Footer_Navigation_ContactInfo_SubscriptionBlock_FooterLineText = () => {';
import FooterLayout from './assets/components/FooterLayout';
import HeadingSubheading from './assets/components/HeadingSubheading';
import LandingPage from './assets/components/LandingPage';
import ProcessBlock from './assets/components/ProcessBlock';
import ServicesBlock from './ServicesBlock';
import TestimonialHeader from './assets/components/TestimonialsBlock.jsx';
import TestimonialsBlock from './assets/components/TestimonialsBlock.jsx';

const App = () => {
  return (
    <div>
      <Button />
      <footer2 />
      <ProcessBlock />
      <ServicesBlock />
      <TestimonialHeader />
      <FooterLayout />
      <FooterNavigationContactInfo />
      <Footer />
      <HeadingSubheading />
      <LandingPage />
    </div>
  );
};

export default App;
