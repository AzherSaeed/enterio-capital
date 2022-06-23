import React from 'react';
import { advantageListIcon, ourAdvantageImg } from 'assets';
import {useNavigate} from 'react-router-dom';
import { PrimaryColor, WhiteColor, SaparateLine } from 'components/GlobalStyle';
import CustomButton from '../../components/CustomButton';
import { OurAdvantagesContainer } from './style';

function OurAdvantages() {
  const navigate = useNavigate()

  const navigateHandler = () => {
    navigate('/what-sets-us-apart')
  }
  return (
    <OurAdvantagesContainer>
      <div className="our-advantages-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="our-advantages-content-detail">
                <div>
                  <p>Benefits</p>
                  <h1>Our Advantage</h1>
                </div>
                <SaparateLine bgColor={PrimaryColor} />
                <div className="our-advantages-content-detail-list">
                  <div className="our-advantages-content-detail-list-item">
                    <img src={advantageListIcon} alt="advantageListIcon" />
                    <h6>Experience</h6>
                  </div>
                  <div className="our-advantages-content-detail-list-item">
                    <img src={advantageListIcon} alt="advantageListIcon" />
                    <h6>Innovation</h6>
                  </div>
                  <div className="our-advantages-content-detail-list-item">
                    <img src={advantageListIcon} alt="advantageListIcon" />
                    <h6>Purpose</h6>
                  </div>
                  <div className="our-advantages-content-detail-list-item">
                    <img src={advantageListIcon} alt="advantageListIcon" />
                    <h6>Success</h6>
                  </div>
                </div>
                <div className="our-advantages-content-detail-btn">
                  <CustomButton
                    bgColor={PrimaryColor}
                    color={WhiteColor}
                    text="Strategic Advantages"
                    padding="10px 25px"
                    clicked={navigateHandler}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="our-advantages-content-image">
                <img src={ourAdvantageImg} alt="ourAdvantageImg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </OurAdvantagesContainer>
  );
}

export default OurAdvantages;
