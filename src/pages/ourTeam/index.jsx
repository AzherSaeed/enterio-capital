import React from 'react';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import Team from '../team/Team';
import Footer from '../footer/footer';
import { OurTeamContainer, OurTeamContant } from './style';

const index = () => (
  <OurTeamContainer>
    <div className="our-team-header">
      <h1>Our Team</h1>
    </div>
    <div className="our-team-content">
      <h6>Our Team</h6>
      <h1>Meet the Team</h1>
      <SaparateLine bgColor={PrimaryColor} margin="20px auto" />
      <p>
        Entira Capital has assembled an elite team of specialists in tax-exempt bond financing
        utilizing asset monetization for the higher education sector. Our founder is a career
        enterpreneur proven by time & success. Our president has 25 years of specializing in the
        areas of management, construction, development & finance. Our bond specialist has completed
        over $6 Billion in bond financing deals & our bond counselar is a Harvard lawyer that
        specialize in bond law, securities, public/private debt, state & federal tax matters. Our
        team has over 110 years of combined experience in all facts of asset monetization, municipal
        bond financing, bond law, tax law, structured finance & sale-leaseback finance structures.
        We are proud to introduce the talent responsible for our model’s success in providing
        innovative capital solution.
      </p>
    </div>
    <OurTeamContant>
        <h1>Expertise, combined with purpose yields success!</h1>
        <Team para='Expertise, combined with purpose yields success!' heading='' />
    </OurTeamContant>
    <Footer />
  </OurTeamContainer>
);

export default index;
