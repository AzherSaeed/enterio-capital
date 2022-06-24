/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { logo, bars, times } from 'assets';
import NavBarContainer from './style';

const index = () => {
  const [navToggler, setnavToggler] = useState(false);
  return (
    <NavBarContainer>
      <div className="container">
        <navbar className="navbar">
          <div className="navbar-logo">
            <Link to='/' >
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="navbar-outer">
            <div className={navToggler ? 'navbar-navItem toggler-active' : 'navbar-navItem'}>
              <NavLink exact activeClassName="active" to="/">
                Home
              </NavLink>
              <NavLink activeClassName="active" to="/project-structure">
                Project Structure
              </NavLink>
              <NavLink activeClassName="active" to="/what-sets-us-apart">
                What Sets Us Apart
              </NavLink>
              <NavLink activeClassName="active" to="/team">
                Our Team
              </NavLink>
              <NavLink activeClassName="active" to="/contactus">
                Contact
              </NavLink>
            </div>
            <div className="navbar-toggler" onClick={() => setnavToggler(!navToggler)}>
              {navToggler ? <img src={times} alt="times" /> : <img src={bars} alt="bars" />}
            </div>
          </div>
        </navbar>
      </div>
    </NavBarContainer>
  );
};

export default index;
