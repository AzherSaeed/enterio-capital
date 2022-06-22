import { FlexDirection, InputColor, PrimaryColor, SaparateLine, WhiteColor } from 'components/GlobalStyle';
import React from 'react';
import { contactUsLogo, bluePhone , blueLocation , blueMail } from 'assets';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'
import CustomTextArea from '../../components/CustomTextArea';
import { ContactUsContainer } from './style';

const index = () => (
  <ContactUsContainer>
    <div className="contactus-heading">
      <p>Lets Talk</p>
      <h1>Contact Us</h1>
      <SaparateLine bgColor={PrimaryColor} margin="0 auto" />
    </div>
    <div className="contactus-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.808802525471!2d-1.2565554842972038!3d51.75481970040363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2s!4v1655908100611!5m2!1sen!2s"
        width="100%"
        height="441"
        // allowfullscreen=""
        title="ad"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </div>
    <div className="container">
      <div className="contactus-form">
        <div className="contactus-form-left">
          <img src={contactUsLogo} alt="contactUsLogo" />
          <h1>Our Contacts</h1>
          <SaparateLine bgColor={PrimaryColor} />
          <div className="contactus-form-left-items">
            <div className="contactus-form-left-items-item">
              <img src={bluePhone} alt="bluePhone" />
              <p>(614) 207-1369</p>
            </div>
            <div className="contactus-form-left-items-item">
              <img src={blueMail} alt="bluePhone" />
              <p>ToddHolstlaw@CampusCapitalPartners.com</p>
            </div>
            <div className="contactus-form-left-items-item">
              <img src={blueLocation} alt="bluePhone" />
              <span>
                <p>Entira Capital</p>
                <p>Road, Suite D | Columbus, OH 43220</p>
              </span>
            </div>
          </div>
        </div>
        <div className="contactus-form-right">
          <h1>Send Us a Message</h1>
          <div className="contactus-form-right-form">
            <div className="contactus-form-right-form-field">
              <CustomInput type="text" placeholder="John Smith" label="Name" bgColor={InputColor} />
            </div>
            <FlexDirection>
              <div className="contactus-form-right-form-field">
                <CustomInput
                  type="text"
                  placeholder="johnsmith@gmail.com"
                  label="Email"
                  bgColor={InputColor}
                />
              </div>
              <div className="contactus-form-right-form-field">
                <CustomInput
                  type="text"
                  placeholder="645-4564-4545"
                  label="Phone"
                  bgColor={InputColor}
                />
              </div>
            </FlexDirection>
            <FlexDirection>
              <div className="contactus-form-right-form-field">
                <CustomInput
                  type="text"
                  placeholder="Institution Name"
                  label="Institution"
                  bgColor={InputColor}
                />
              </div>
              <div className="contactus-form-right-form-field">
                <CustomInput
                  type="text"
                  placeholder="Position"
                  label="Position"
                  bgColor={InputColor}
                />
              </div>
            </FlexDirection>
            <div className="contactus-form-right-form-field">
              <CustomTextArea
                type="text"
                placeholder="Type your message here"
                label="Message"
                bgColor={InputColor}
              />
            </div>
          </div>
          <div className="contactus-form-right-btn">
            <CustomButton
              bgColor={PrimaryColor}
              color={WhiteColor}
              text="Send"
              padding="10px 25px"
            />
          </div>
        </div>
      </div>
    </div>
  </ContactUsContainer>
);

export default index;
