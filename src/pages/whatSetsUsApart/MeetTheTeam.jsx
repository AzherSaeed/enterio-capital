import React from 'react';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import {meetTheTeam} from 'assets';
import {MeetTeamContainer} from './style'

function MeetTheTeam() {
  return (
    <MeetTeamContainer>
        <div className='container' >
            <div className='meetTeam-content' >
                <div className='meetTeam-content-heading' >
                    <p>Our Team</p>
                    <h1>Meet the Team</h1>
                    <SaparateLine bgColor={PrimaryColor}  margin='0 auto' />
                </div>
                <div className='meetTeam-content-detail' >
                    <div className='row' >
                        <div className='col-lg-6 col-md-6' >
                            <div className='meetTeam-content-detail-desc' >
                                <p>We have experienced people with the right skills to lead you through our process.</p>
                                <SaparateLine bgColor={PrimaryColor} />
                                <div className='meetTeam-content-detail-desc-one' >
                                    <p>We Have</p>
                                    <h1>FINANCIAL INTELLECT</h1>
                                </div>
                                <div className='meetTeam-content-detail-desc-two' >
                                    <p>We Have</p>
                                    <h1>EXPERIENCE</h1>
                                </div>
                                <div className='meetTeam-content-detail-desc-three' >
                                    <p>We Have</p>
                                    <h1>EXPERIENCE</h1>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6' >
                            <div className='meetTeam-content-detail-img' >
                                <img src={meetTheTeam} alt='meetTheTeam' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </MeetTeamContainer>
  )
}

export default MeetTheTeam