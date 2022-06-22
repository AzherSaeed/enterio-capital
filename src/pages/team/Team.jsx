/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {useNavigate} from 'react-router-dom';
import users from '../../teamData'
import TeamContainer from './style';


function Team() {
  const navigate = useNavigate()

  const teamHandler = (user) => {
    navigate(`/team/${user.id}`)
  }


  return (
    <TeamContainer>
      <div className="container team-content">
        <div className="team-content-cards">
          {users.map((user) => (
            <div key={user.title} onClick={() => teamHandler(user) } className="team-content-cards-card">
              <img src={user.img} alt={user.title} />
              <div className="team-content-cards-card-title">
                <p>{user.title}</p>
                <h6>{user.designation}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TeamContainer>
  );
}

export default Team;
