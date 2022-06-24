import React from 'react';
import { footerLogo, phoneIcon, mailIcon, locationIcon } from 'assets';
import { Link } from 'react-router-dom';
import FooterContainer from './style';

const footer = () => (
  <FooterContainer>
    <div className="container footer-content">
      <div className="footer-content-desc">
        <div className="footer-content-desc-logo">
          <Link to='/' >
            <img src={footerLogo} alt="footerLogo" />
          </Link>
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
          <Link to="/">Home</Link>
          <Link to="/project-structure">Project Structure</Link>
          <Link to="/what-sets-us-apart">What Sets us a Part</Link>
          <Link to="/team">Our Team</Link>
          <Link to="/contactus">Contact</Link>
        </div>
      </div>
      {/* <div className="footer-content-useFulLink">
        <h1>Useful Links</h1>
        <div className="footer-content-useFulLink-list">
          <p>Privacy Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div> */}
      <div className="footer-content-contact">
        <h1>Contact</h1>
        <div className="footer-content-contact-list">
          <p>
            <img src={phoneIcon} alt="phoneIcon" />
            <span> <a href='tel: 614 207-1369' target='_blank' rel="noreferrer" >(614) 207-1369</a></span>
          </p>
          <p>
            <img src={mailIcon} alt="mailIcon" />
            <span> <a target='_blank' rel="noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ToddHolstlaw@EntiraCapital.com' >ToddHolstlaw@EntiraCapital.com</a></span>
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
