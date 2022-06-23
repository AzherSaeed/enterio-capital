import {
  GrayColor,
  lightGray,
  PrimaryColor,
  SecondaryColor,
  WhiteColor,
} from 'components/GlobalStyle';
import { monetizationBack } from 'assets';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  .header-content {
    text-align: center;
    padding: 50px 0;
    &-detail {
      background-color: ${lightGray};
      max-width: 970px;
      margin: 0 auto;

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 10px;
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
      }
      h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 151.52%;
        color: ${GrayColor};
        margin: 40px 0;
        span {
          font-weight: 700;
          color: ${SecondaryColor};
        }
      }

      @media screen and (max-width : 620px){
        h1{
          font-size: 30px;
        }
        h6{
          font-size: 16px;
          font-weight: normal;
        }
      }
    }
    &-img {
      img {
        width: 100vw;
      }
    }
    &-desc {
      text-align: center;
      padding: 50px 0;
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200.02%;
        color: ${GrayColor};
      }
    }
  }
`;

export const MonitizationContainer = styled.div`
  background-image: url(${monetizationBack});
  background-repeat: no-repeat;
  width: 100vw;
  background-position: center;
  background-size: cover;
  min-height: 488px;
  padding: 67px 0;




  .monetization-content {
    padding: 50px 0;
    text-align: center;
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 85.52%;
      color: ${WhiteColor};
      margin-bottom: 10px;
    }
    h1 {
      font-family: 'Spectral';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      line-height: 85.52%;
      color: ${WhiteColor};
      margin-bottom: 30px !important;
    }

    @media screen and (max-width: 780px) {
      h1 {
        font-size: 29px !important;
      }
    }

    &-cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;

      @media screen and (max-width: 780px) {
        margin-top: 40px;
      }

      @media screen and (max-width: 780px) {
        grid-template-columns: 1fr;
      }

      &-card {
        background-color: ${WhiteColor};
        display: flex;
        gap: 20px;
        padding: 21px;
        margin-top: 50px;
        border-radius: 5px;
        min-height: 210px;

        @media screen and (max-width: 780px) {
          margin: 0;
        }

        &-detail {
          text-align: left;
          @media screen and (max-width: 780px) {
            h1 {
              font-size: 19px !important;
            }
          }

          h1 {
            color: ${SecondaryColor};
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 500;
            font-size: 24px;
            line-height: 84.02%;
            margin-bottom: 15px !important;
          }
          p {
            color: ${GrayColor};
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 200.02%;
          }
        }
      }
    }
  }
`;

export const StructureFlowContainer = styled.div`
  max-width: 921px;
  /* max-height: 660px; */
  margin: 0 auto;
  padding: 60px 0;

  @media screen and (max-width : 900px ){
    max-width: 520px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
