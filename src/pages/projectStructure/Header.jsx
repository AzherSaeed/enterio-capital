import React from 'react';
import {projectHeader} from 'assets';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import {HeaderContainer} from './style';

function Header() {
  return (
    <HeaderContainer>
        <div className='header-content' >
            <div className='header-content-detail' >
                <div className='container' >
                    <p>Planning</p>
                    <h1>Project Structure</h1>
                    <SaparateLine bgColor={PrimaryColor} margin='0 auto' />
                    <h6><span>Entira Capital </span>acts as a thought partner creating innovative capital solutions by incorporating our unique model which requires an investment in the institutions future, making the university a true partner while inspiring strategic financial intellection.</h6>
                </div>
            </div>
            <div className='header-content-img' >
                <img src={projectHeader} alt='projectHeader' />
            </div>
            <div className='header-content-desc' >
                <div className='container' >
                    <p>Our model allows us to build new, acquire existing assets, modernize existing assets and/or restructure current debt while supplying the institution with much-needed capital to balance financial deficits and incorporate strategic program transition initiatives. We monetize individual assets by leasing the buildings footprint, utilizing a Master Lease Agreement which allows Entira Capital to offer tax-exempt financing to fund the university. We also utilize an Operating Agreement which allows the asset’s value and income stream to be annually donated over the term of the Lease without the University using their own upfront capital or debt. Our model allows us to finance through existing debt restrictive covenants, listed in the Master Bond Indenture while keeping the debt off of the institutions balance sheet without negatively affecting the institutions current bond rating.</p>
                    <p>For example, Entira Capital purchases a university facility valued at $15,000,000, utilizing a ground lease with a 30-year Master Lease and an Operating Agreement allowing an annual donation factor of 3% of the assets value and net income stream. The asset donation factor would have a first-year valuation of $450,000 and escalate 3% annually, producing an increasing asset on the balance sheet until the end of the term at which time the rest of the asset is fully donated, fee simple. The agreement also provides an additional 3% annual increasing donation of the shared income stream worth $4.2M ($140,000/avg/yr), over the term for a total cash infusion of $19.2M by collateralizing one $15.0M asset.</p>
                </div>
            </div>
        </div>
    </HeaderContainer>
  )
}

export default Header