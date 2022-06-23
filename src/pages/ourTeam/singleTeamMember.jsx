/* eslint-disable eqeqeq */
import React from 'react';
import { grayListIcon } from 'assets';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import { Link, useParams } from 'react-router-dom';
import teamData from '../../teamData';
import Footer from '../footer/footer';
import { OurTeamContainer } from './style';

const singleTeamMemver = () => {
  const { id } = useParams();

  const singleTeamMember = teamData.find((member) => member.id == id);

  return (
    <div>
      <OurTeamContainer>
        <div className="our-team-header">
          <h1>Our Team</h1>
        </div>
        <div className="container">
          <div className="our-teamMember-detail">
            <p className="back-link">
              <Link to="/team">
                <span>{'<'}</span>
                <span>Back</span>
              </Link>
            </p>

            <div className="row mb-4">
              <div className="col-lg-5 col-md-6">
                <div className="our-teamMember-detail-img">
                  <img src={singleTeamMember.img} alt="DavidFumi" />
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="our-teamMember-detail-desc">
                  <div>
                    <h6>Team Member</h6>
                    <h1>{singleTeamMember.title}</h1>
                    <h5>{singleTeamMember.designation}</h5>
                  </div>
                  <SaparateLine bgColor={PrimaryColor} />
                  <p>{singleTeamMember.teamDesc}</p>
                </div>
              </div>
            </div>
            <p>{singleTeamMember.paraOne}</p>
            <p>{singleTeamMember.paraTwo}</p>
            <p>{singleTeamMember.paraThree}</p>

            <p>{singleTeamMember.paraFour}</p>
            <p>{singleTeamMember.paraFive}</p>
            <p>{singleTeamMember.paraSix}</p>
          </div>
          <div className="our-teamMember-detail-desc">
            {id == 4 ? (
              <>
                <div className="our-teamMember-detail-desc-significant">
                  <h1>Significant Financings</h1>
                  <p>David has acted as bond, structuring or underwriters counsel for the:</p>
                  <div className="our-teamMember-detail-desc-content-list">
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First AAA (S&P) and Aaa (Moodys) rated Sales Tax Revenue Bond in the
                        country, issued by Franklin County, Ohio.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First TIF (tax increment finance) infrastructure bond issue backed by
                        special assessments in Ohio.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>First swaption for a governmental unit in Ohio.</p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First multi-jurisdictional PACE advanced energy special improvement district
                        in Ohio.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>First securitization of tax-exempt bonds in Ohio.</p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First securitization of defaulted tax-exempt housing bonds in the nation
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First securitization of defaulted tax-exempt housing bonds in the nation
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>First governmental synthetic lease financing in Ohio.</p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First taxable and tax-exempt infrastructure bonds collateralized by the U.S.
                        EB-5 Immigrant Investor program in Ohio.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        First NAIC-1 rated taxable bond backed by a credit tenant lease in Ohio.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        Counsel to the successful bidder for the first public private partnership
                        long-term lease and concession of the parking system assets for The Ohio
                        State University; and
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        Special Counsel to the Toledo-Lucas County Port Authority for the
                        acquisition and monetization with tax-exempt bonds of the downtown parking
                        assets of the City of Toledo.
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-content-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        Bond Counsel to the Western Reserve Port Authority on its stand alone PACE
                        (Property Assessed Clean Energy) bond financing for a retail centers energy
                        efficiency upgrade.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="our-teamMember-detail-desc-legalwork">
                  <h1>Legal Work Highlights</h1>
                  <p>FBT Assists Hospital with Modern Master Indenture Bond Financing</p>
                  <h6>
                    Two members of our Public Finance Practice Group in Columbus, Ohio, Emmett Kelly
                    and David Rogers, acted as Bond Counsel for an issuance of $63,045,000 City of
                    Middleburg Heights, Ohio Hospital Facilities Revenue and Refunding Bonds, Series
                    2011, and implemented a new modern master indenture.
                  </h6>
                  <h6>
                    David led the firms team of attorneys representing Queensland Investment
                    Corporation and CampusParc LLC as the lessee/concessionaire from The Ohio State
                    University of all parking facilities in its landmark public university P3
                    transaction.
                  </h6>
                  <h6>
                    Acting as both bond counsel and as a municipal advisor, David is assisting
                    Franklin County, Ohio in its participation in financing a new MLS (Major League
                    Soccer) stadium and related infrastructure development in Columbus, Ohios Arena
                    District.
                  </h6>
                </div>
                <div className="our-teamMember-detail-desc-highlights">
                  <h1>Highlights</h1>
                  <div className="our-teamMember-detail-desc-highlights-list">
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>The Best Lawyers in America©, Public Finance Law, 2005-2020</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>AV Preeminent™, Martindale-Hubbell®</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>Professional Affiliations</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>American College of Bond Counsel, Member</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        American Bar Association, Tax-Exempt Financing Committee of the Section of
                        Taxation, Adjunct member
                      </p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>Ohio State Bar Association</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>American Bar Association</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>Columbus Bar Association</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>National Association of Bond Lawyers, Member</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>Council of Development Finance Agencies (CDFA)</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>CDFA Ohio Financing Roundtable</p>
                    </div>
                    <div className="our-teamMember-detail-desc-highlights-list-item">
                      <img src={grayListIcon} alt="grayListIcon" />
                      <p>
                        Task Force on Clean Energy Bond Finance (sponsored by the Clean Energy Group
                        and CDFA)
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </OurTeamContainer>
      <Footer />
    </div>
  );
};

export default singleTeamMemver;
