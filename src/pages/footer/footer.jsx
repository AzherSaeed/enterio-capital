import React from 'react';
import { footerLogo, phoneIcon, mailIcon, locationIcon } from 'assets';
import FooterContainer from './style';

const footer = () => (
  <FooterContainer>
    <div className="container footer-content">
      <div className="footer-content-desc">
        <div className="footer-content-desc-logo">
          <img src={footerLogo} alt="footerLogo" />
        </div>
        <div className="footer-content-desc-detail">
          <p>
            We look forward to meeting with you and explaining in-depth how our unique asset
            monetization model is superior to traditional financing. We are confident in our ability
            to deliver competitive funding that your institution needs to ensure financial
            sustainability.
          </p>
        </div>
      </div>
      <div className="footer-content-quickLink">
        <h1>Quick Links</h1>
        <div className="footer-content-quickLink-list">
          <p>Home</p>
          <p>Project Structure</p>
          <p>What Sets us a Part</p>
          <p>Our Team</p>
          <p>Contact</p>
        </div>
      </div>
      <div className="footer-content-useFulLink">
        <h1>Useful Links</h1>
        <div className="footer-content-useFulLink-list">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
      <div className="footer-content-contact">
        <h1>Contact</h1>
        <div className="footer-content-contact-list">
          <p>
            <img src={phoneIcon} alt="phoneIcon" />
            <span>(614) 207-1369</span>
          </p>
          <p>
            <img src={mailIcon} alt="mailIcon" />
            <span>ToddHolstlaw@Entira CapitalPartners.com</span>
          </p>
          <p>
            <img src={locationIcon} alt="locationIcon" />
            <span>Entira Capital Reed Road, Suite D | Columbus, OH 43220</span>
          </p>
        </div>
      </div>
    </div>
    <div className="container subfooter-content">
      <hr />
      <p>All Rights Reserved</p>
    </div>
  </FooterContainer>
);

export default footer;
