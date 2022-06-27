import React from 'react';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import HeroSection from './HeroSection';
import WhoWeAre from './WhoWeAre';
import HowWeDoIt from './HowWeDoIt';
import OurAdvantages from './OurAdvantages';
import Team from '../team/Team';
import ContactUs from './ContactUs';
import { TeamContainer } from './style';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhoWeAre />
      <HowWeDoIt />
      <OurAdvantages />
      <TeamContainer>
        <div className="team-content-title">
          <p>Our Team</p>
          <h1>Meet the Team</h1>
          <SaparateLine bgColor={PrimaryColor} margin="0 auto" />
        </div>
        <Team heading="asdf" para="asdf" />
      </TeamContainer>
      <ContactUs />
    </div>
  );
}

export default HomePage;
