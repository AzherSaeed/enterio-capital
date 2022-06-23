import { PrimaryColor, SecondaryColor, WhiteColor } from 'components/GlobalStyle';
import styled from 'styled-components';

const TeamContainer = styled.div`
  .team-content-cards-card:hover .team-content-cards-card-title {
    background-color: ${PrimaryColor};

    p {
      color: white;
    }
    h6 {
      color: white;
    }
  }

  .team-content {
    &-title {
      text-align: center;

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        color: ${PrimaryColor};
      }
      h1 {
        color: ${SecondaryColor};
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
        margin: 20px 0;
      }
    
    }

    &-cards {
      display: flex;
      justify-content: center;
      align-items: center;
      row-gap: 70px;
      column-gap: 30px;
      flex-wrap: wrap;
      padding: 50px 0;
      &-card {
        position: relative;
        width: 255px;
        height: 282px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }

        &-title {
          background-color: white;
          position: absolute;
          bottom: -40px;
          left: 22px;
          width: 211px;
          height: 78px;
          text-align: center;
          box-shadow: 0px 0px 44px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-radius: 3px;

          p {
            font-family: 'Spectral';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 84.02%;
            color: ${PrimaryColor};
            margin: 0;
          }
          h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 105.52%;
            color: ${WhiteColor};
          }
          h6 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 200.02%;
            color: ${SecondaryColor};
            margin: 0;
          }
        }
      }
    }
  }
`;

export default TeamContainer;
