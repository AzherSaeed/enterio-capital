import styled from 'styled-components';
import { ourTeamHeader, teamBackground } from 'assets';
import { GrayColor, PrimaryColor, SecondaryColor, WhiteColor } from 'components/GlobalStyle';

export const OurTeamContainer = styled.div`
  .our-team-header {
    background-image: url(${ourTeamHeader});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 367px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: 'Spectral';
      font-style: normal;
      font-weight: 700;
      font-size: 58px;
      line-height: 85.52%;
      color: ${WhiteColor};
    }
  }

  .our-team-content {
    text-align: center;
    max-width: 1110px;
    margin: 0 auto;
    padding: 100px 0;

    h6 {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 85.52%;
      color: ${PrimaryColor};
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 200.02%;
      margin-bottom: 8px;
      color: ${GrayColor};
    }
    h1 {
      font-family: 'Spectral';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 85.52%;
      margin-bottom: 30px;
      color: ${SecondaryColor};
    }
  }

  .our-teamMember-detail {
    padding: 50px 0;
    &-img {
      width: 100%;
      height: 387px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: relative;

        /* ::before{
          content: "";
          position: absolute;
          background-color: ${PrimaryColor};
          width: 100px;
          height: 200px;
          top: -20px;
          left: -60px;
        } */
      }
    }

    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 200.02%;
      color: ${GrayColor};
    }

    &-desc {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;

      h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        color: ${PrimaryColor};
      }
      h1 {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
        color: ${SecondaryColor};
        margin-bottom: 20px;
        margin-top: 15px;
      }
      h5 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 84.02%;
        color: ${GrayColor};
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200.02%;
        color: ${GrayColor};
        margin-bottom: 0;
      }
    }
  }
`;

export const OurTeamContant = styled.div`
  padding: 57px 0;
  position: relative;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 303px;
    z-index: -1;
    background-image: url(${teamBackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  text-align: center;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 105.52%;
    color: ${WhiteColor};
  }
`;
