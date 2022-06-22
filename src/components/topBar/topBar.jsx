import React from 'react';
import { phoneIcon, mailIcon } from 'assets';
import { Container } from 'react-bootstrap';
import TopBArContainer from './style';

const topBar = () => (
  <TopBArContainer>
    <Container>
      <div className="top-bar-contaienr-content">
        <div className="top-bar-contaienr-content-phone">
          <img src={phoneIcon} alt="phone" />
          <p>(614) 207-1369</p>
        </div>
        <div className="top-bar-contaienr-content-mail">
          <img src={mailIcon} alt="mailIcon" />
          <p>ToddHolstlaw@EntiraCapitalPartners.com</p>
        </div>
      </div>
    </Container>
  </TopBArContainer>
);

export default topBar;
