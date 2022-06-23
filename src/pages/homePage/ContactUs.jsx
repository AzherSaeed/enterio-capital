import React from 'react';
import { PrimaryColor, SaparateLine, FlexDirection, InputColor, WhiteColor } from 'components/GlobalStyle';
import { ctaTestimonial } from 'assets';
import CustomInput from '../../components/CustomInput';
import CustomTextArea from '../../components/CustomTextArea';
import CustomButton from '../../components/CustomButton'

import { ContactUsContainer } from './style';

function ContactUs() {
  return (
    <ContactUsContainer>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="contact-us-content">
              <div className="contact-us-content-detail">
                <p>Let’s Talk</p>
                <h1>Contact Us</h1>
              </div>
              <SaparateLine bgColor={PrimaryColor} />
              <div className="contact-us-content-form">
                <div className="contact-us-content-form-    ">
                  <CustomInput
                    type="text"
                    placeholder="John Smith"
                    label="Name"
                    bgColor={InputColor}
                  />
                </div>
                <FlexDirection>
                  <div className="contact-us-content-form-field">
                    <CustomInput
                      type="email"
                      placeholder="johnsmith@gmail.com"
                      label="Email"
                      bgColor={InputColor}
                    />
                  </div>
                  <div className="contact-us-content-form-field">
                    <CustomInput
                      type="text"
                      placeholder="645-4564-4545"
                      label="Phone"
                      bgColor={InputColor}
                    />
                  </div>
                </FlexDirection>
                <FlexDirection>
                  <div className="contact-us-content-form-field">
                    <CustomInput
                      type="email"
                      placeholder="Institution Name"
                      label="Institution"
                      bgColor={InputColor}
                    />
                  </div>
                  <div className="contact-us-content-form-field">
                    <CustomInput
                      type="text"
                      placeholder="Position"
                      label="Position"
                      bgColor={InputColor}
                    />
                  </div>
                </FlexDirection>
                <div className="contact-us-content-form-field">
                  <CustomTextArea
                    type="text"
                    placeholder="Position"
                    label="Position"
                    bgColor={InputColor}
                  />
                </div>
                <div className="contact-us-content-form-btn">
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
          <div className="col-lg-6 col-md-12">
            <div className="contact-us-image">
              <img src={ctaTestimonial} alt="ctatestimonial" />
            </div>
          </div>
        </div>
      </div>
    </ContactUsContainer>
  );
}

export default ContactUs;
