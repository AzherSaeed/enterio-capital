import { GrayColor, PrimaryColor } from 'components/GlobalStyle';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  background: rgba(255, 255, 255, 0.76);
  box-shadow: 0px -2px 13px rgba(0, 0, 0, 0.27);
  .navbar {
    height: 78px;
  }

  .navbar-outer {
    display: flex;
    align-items: center;
    gap: 2px;
    .navbar-navItem {
      display: flex;
      align-items: center;
      gap: 60px;

      @media screen and (max-width: 991px) {
        position: absolute;
        left: 0;
        height: 250px;
        width: 100%;
        background: #ff000038;
        top: 100%;
        z-index: 1000;
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 30px;
        background-color: white;
        clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
        box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
        border: 1px solid var(--light-gray2);
      }

      a {
        text-decoration: none;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 77.52%;
        color: ${GrayColor};

        :hover {
          color: ${PrimaryColor};
          text-decoration: underline;
          text-underline-offset: 12px;
        }
      }
      .active{
        color: ${PrimaryColor};
          text-decoration: underline;
          text-underline-offset: 12px;
      }
    }
    .toggler-active{
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }
  .navbar-toggler {
    display: none;

    @media screen and (max-width: 991px) {
        display: block;
    }
  }
`;

export default NavBarContainer;
