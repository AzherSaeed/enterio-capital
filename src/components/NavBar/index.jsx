/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React , {useState} from 'react';
import { Link } from 'react-router-dom';
import { logo, bars , times } from 'assets';
import NavBarContainer from './style';

const index = () => {
  const [navToggler, setnavToggler] = useState(false)
  return (
    <NavBarContainer>
      <div className="container">
        <navbar className="navbar">
          <div className="navbar-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar-outer">
            <div className={navToggler ? 'navbar-navItem toggler-active' : 'navbar-navItem'}>
              <Link to="/">Home</Link>
              <Link to="/project-structure">Project Structure</Link>
              <Link to="/what-sets-us-apart">What sets us a part</Link>
              <Link to="/team">Our Team</Link>
              <Link to="/contactus">Contact</Link>
            </div>
            <div className="navbar-toggler" onClick={() => setnavToggler(!navToggler)} >
              {
                navToggler ? (
                  <img src={times}  alt="times" />
                ) : (
                  <img src={bars}  alt="bars" />
                )
              }
             
            </div>
          </div>
        </navbar>
      </div>
    </NavBarContainer>
  );
};

export default index;
