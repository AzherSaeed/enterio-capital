/* eslint-disable eqeqeq */
import React from 'react';
import { PrimaryColor, SaparateLine } from 'components/GlobalStyle';
import {useParams} from 'react-router-dom';
import teamData from '../../teamData';
import { OurTeamContainer } from './style';

const singleTeamMemver = () => {
  const {id} = useParams()

  const singleTeamMember = teamData.find((member) => member.id == id )


  return (


    <OurTeamContainer>
      <div className="our-team-header">
        <h1>Our Team</h1>
      </div>
      <div className="container">
        <div className="our-teamMember-detail">
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
      </div>
    </OurTeamContainer>
  )
};

export default singleTeamMemver;
