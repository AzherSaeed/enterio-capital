/* eslint-disable jsx-a11y/iframe-has-title */
import {
  FlexDirection,
  InputColor,
  PrimaryColor,
  SaparateLine,
  WhiteColor,
} from 'components/GlobalStyle';
import React from 'react';
import { contactUsLogo, bluePhone, blueLocation, blueMail } from 'assets';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195657.27345284304!2d-83.13091377058056!3d39.98286713490184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883889c1b990de71%3A0xe43266f8cfb1b533!2sColumbus%2C%20OH%2C%20USA!5e0!3m2!1sen!2s!4v1655992896168!5m2!1sen!2s"
        width="100%"
        height="441"
        loading="lazy"
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
