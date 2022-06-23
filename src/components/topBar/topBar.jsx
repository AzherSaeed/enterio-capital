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
          <a href='tel: 614 207-1369' target='_blank' rel="noreferrer" >(614) 207-1369</a>
        </div>
        <div className="top-bar-contaienr-content-mail">
          <img src={mailIcon} alt="mailIcon" />
          <a target='_blank' rel="noreferrer" href='https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=ToddHolstlaw@EntiraCapitalPartners.com' >ToddHolstlaw@EntiraCapitalPartners.com</a>
        </div>
      </div>
    </Container>
  </TopBArContainer>
);

export default topBar;
