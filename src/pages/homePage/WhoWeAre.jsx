import React from 'react';
import { Container } from 'react-bootstrap';
import { whoWeAre } from 'assets';
import { WhoWeAreContainer } from './style';
import {PrimaryColor, SaparateLine} from '../../components/GlobalStyle'

function WhoWeAre() {
  return (
    <WhoWeAreContainer>
      <section className='who-we-are-section' >
        <Container>
          <div className="who-we-are-content">
            <div className="who-we-are-content-image">
              <img src={whoWeAre} alt="whoWeAre" />
            </div>
            <div className="who-we-are-content-detail">
              <span>
                <h6>About Us</h6>
                <h1>Who We Are</h1>
              </span>
              <SaparateLine bgColor={PrimaryColor} />
              <p>
                Entira Capital is a specialized finance company that creates innovative funding for
                higher education. Entira Capital model monetizes existing assets using tax-exempt
                municipal bonds, efficiently funding these institutions with capital, ensuring their
                financial sustainability by utilizing their most underutilized asset, REAL ESTATE!
                We turn existing assets into Capital, then annually donate the asset and asset cash
                flow back to the institution over the lease term, without requiring the institutio
                capital or debt!
              </p>
            </div>
          </div>
        </Container>
      </section>
    </WhoWeAreContainer>
  );
}

export default WhoWeAre;
