import React from 'react';
import { howDoItRight, listIcon } from 'assets';
import { HowDoItContainer } from './style';
import { PrimaryColor, SaparateLine, WhiteColor } from '../../components/GlobalStyle';
import CustomButton from '../../components/CustomButton';

function HowWeDoIt() {
  return (
    <HowDoItContainer>
      <div className="howDoIt-content">
        <div className="howDoIt-content-left">
          <div>
            <p>How To Do</p>
            <h1>How We Do It?</h1>
          </div>
          <SaparateLine bgColor={WhiteColor} />
          <h6>Entira Capital’s Unique Capitalization Model</h6>
          <CustomButton
            bgColor={WhiteColor}
            color={PrimaryColor}
            text="Structure"
            padding="10px 25px"
          />
        </div>
        <div className="howDoIt-content-right">
          <img src={howDoItRight} alt="howDoItRight" />
        </div>
      </div>
      <div className="container">
        <div className="howDoIt-details">
          <h2>
            Entira Capital recognizes current financial challenges facing colleges and universities.
          </h2>
          <div className="howDoIt-details-list">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Inability to repair outdated facilities</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Credit to fund new facilities</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>State budget/scholarship cuts</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Rising drop-out rates</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Cash to make necessary curricular improvements</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Declining enrollment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Stagnant endowments</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Fierce student competition</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="howDoIt-details-list-item">
                  <div className="howDoIt-details-list-item-icon">
                    <img src={listIcon} alt="listIcon" />
                  </div>
                  <div className="howDoIt-details-list-item-content">
                    <p>Covid-19</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>The old tuition-based model has proven to be ineffective and outdated. It Is a time of challenges that must be met by conviction, nimbleness and imagination. The solutions to these challenges must be funded with a strategic approach to capital. Our unique asset monetization model is innovative because we become true strategic partners with the resources to monetize existing assets, overcome existing debt restrictive covenants, collateralize individual assets and do not require capital use restrictions.</p>
          <p>Imagine an influx of capital that allows administration the flexibility to invest strategically ensuring the highest ROI. We create innovative, cost-effective capital solutions that are GASB and FASB tax code compliant by creating an off-balance sheet transaction that protects the institutions current bond rating. The model affords the institution to raise discretionary capital to fund its strategic plan addressing current issues by incorporating curriculum changes, competitive amenities, new technologies and modernized facilities, creating a unique campus experience that prospective student pools highly value.</p>
        </div>
      </div>
    </HowDoItContainer>
  );
}

export default HowWeDoIt;
