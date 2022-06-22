import React from 'react';
import { SaparateLine, WhiteColor } from 'components/GlobalStyle';
import {modelIcon , accountingIcon} from 'assets';
import { MonitizationContainer } from './style';

function Monetization() {
  return (
    <MonitizationContainer>
      <div className="container monetization-content">
        <p>Monetization Plan</p>
        <h1>Our Asset Monetization Model</h1>
        <SaparateLine bgColor={WhiteColor} margin="0 auto" />

        <div className="monetization-content-cards">
            <div className="monetization-content-cards-card">
              <div className="monetization-content-cards-card-icon">
                <img src={modelIcon} alt='modelIcon' />
              </div>
              <div className="monetization-content-cards-card-detail">
                <h1>Model Flow & Components</h1>
                <p>This model illustrates the different components and customized documents that are necessary to transfer capital from Entira Capital to the institution.</p>
              </div>
            </div>
            <div className="monetization-content-cards-card">
              <div className="monetization-content-cards-card-icon">
                <img src={accountingIcon} alt='accountingIcon' />
              </div>
              <div className="monetization-content-cards-card-detail">
                <h1>Accounting & Tax Law</h1>
                <p>Entira Capitals team of CPAs and tax attorneys continually review and update our agreements.  Every deal is reviewed and customized to ensure GASB and FASB tax code compliance.</p>
              </div>
            </div>
        </div>
      </div>
    </MonitizationContainer>
  );
}

export default Monetization;
