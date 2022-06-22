import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import React from 'react';
import { uniqueModelImg, uniqueModelListIcon } from 'assets';
import { UniqueModelContainer } from './style';

function UniqueModel() {
  return (
    <UniqueModelContainer>
      <div className="container">
        <div className="unique-model-content">
          <div className="unique-model-content-heading">
            <p>Model</p>
            <h1>Our Unique Model</h1>
            <SaparateLine bgColor={PrimaryColor} margin="0 auto" />
            <h6>Strategic Development of Capitalizing Initiatives Yielding Impactful Solutions</h6>
          </div>
          <div className="row gy-4 unique-model-content-sections">
            <div className="col-lg-6 col-md-6 unique-model-content-sections-detail">
              <h2>Why use us instead of other sale/leaseback companies?</h2>
              <div className="unique-model-content-sections-detail-list">
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  Donation Factors- we annually donate cash flow and asset value back to the
                  institution over the term
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  Overcome weak financials
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  Off-Balance Sheet transaction using a valid FASB/GASB one-year lease
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  No equity or debt required-we are able to finance all of the closing costs and
                  escrow funds (if required) regardless of appraisal value
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  We purchase any essential institutional asset
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  Our network of over 100 Institutional lenders guarantees the lowest rates
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  45-day close from the signing of Master Lease
                </p>
                <p>
                  <span>
                    <img src={uniqueModelListIcon} alt="uniqueModelListIcon" />
                  </span>
                  Model flexibility-ability to adjust variables to customize each deal per specific
                  need
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 unique-model-content-sections-img">
              <img src={uniqueModelImg} alt="uniqueModelImg" />
            </div>
          </div>
          <div className="unique-model-content-desc">
            <p>
              <span>Entira Capital </span> provides institutions innovative capital, immediately
              improving their financial positions. Stronger financial positions will expedite
              strategic plan implementation; enhancing colleges and universities competitive
              advantages increasing enrollment. Entira Capital purchases, renovates or builds new
              institutional assets via master leases providing the favorable cost of funds and
              longer amortization schedules. We incrementally donate a percentage of the asset and
              income stream annually through completion of the term at which time the remaining
              asset value reverts back entiraly to the institution - fee simple.
            </p>
          </div>
        </div>
      </div>
    </UniqueModelContainer>
  );
}

export default UniqueModel;
