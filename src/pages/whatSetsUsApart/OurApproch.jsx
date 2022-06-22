import React from 'react';
import { ourApproach } from 'assets';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import { OurApproachContainer } from './style';

function OurApproch() {
  return (
    <OurApproachContainer>
      <div className="our-approach-content">
        <div className="our-approach-content-header">
          <p>
            -- We were anxious to work with Entira Capital and their asset monetization model. We
            found the model transparent, straightforward, and innovative. If your institution is
            seeking funding, I recommend Mr. Holstlaw and Entira Capital as your strategic partner!
            Beverly Rodgers, President Macmurray College
          </p>
        </div>
        <div className="container">
          <div className="our-approach-content-detail">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="our-approach-content-detail-img">
                  <img src={ourApproach} alt="ourApproach" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="our-approach-content-detail-content">
                  <div>
                    <p>Method</p>
                    <h1>Our Approach</h1>
                  </div>
                  <SaparateLine bgColor={PrimaryColor} />
                  <h6>
                    Entira Capital has proven it asset monetization model requires an integrated
                    approach with the ability to reach diverse institutions, build meaningful
                    partnerships and inspire innovative and entrepreneurial leadership
                  </h6>
                  <div className="our-approach-content-detail-content-desc">
                    <h1>HIGH-IMPACT PARTNERSHIPS</h1>
                    <p>
                      Entira Capital aligns with colleges and universities as a true vested partner
                      with deep pockets generating the capacity to work together and build highly
                      productive, often inventive, ways to generate sustainable capital
                    </p>
                  </div>
                  <div className="our-approach-content-detail-content-desc">
                    <h1>STRATEGIC FINANCE</h1>
                    <p>
                      Entira Capital collaborates across financial sectors to inspire new ways of
                      leveraging capital. Our strength lies within our ability to build
                      relationships, earn trust and monetize collective assets yielding competitive
                      advantages.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OurApproachContainer>
  );
}

export default OurApproch;
