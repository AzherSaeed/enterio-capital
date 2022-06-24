import styled from 'styled-components';
import { setAPartHeader, ourApproachHeader } from 'assets';
import { GrayColor, PrimaryColor, SecondaryColor, WhiteColor } from 'components/GlobalStyle';

export const HeaderContainer = styled.div`
  background-image: url(${setAPartHeader});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 365px;
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

    @media screen and (max-width: 768px) {
      font-size: 40px;
    }
  }
`;

export const UniqueModelContainer = styled.div`
overflow: hidden;
  .unique-model-content {
    padding: 100px 0 !important;
    &-heading {
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
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
        color: ${SecondaryColor};
        margin-bottom: 25px;
      }
      h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 84.02%;
        color: ${GrayColor};
        margin: 40px 0;
      }
      @media screen and (max-width: 768px) {
        h1 {
          font-size: 35px;
        }
        h6 {
          font-size: 16px;
          line-height: 133.2%;
        }
      }
    }
    &-sections {
      &-detail {
        h2 {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 145.52%;
          color: ${SecondaryColor};
          margin-bottom: 37px;
          @media screen and (max-width: 768px) {
            font-size: 20px;
          }
        }

        &-list {
          display: flex;
          flex-direction: column;
          gap: 23px;
          img {
            width: 9px;
            height: 9px;
          }
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 148.02%;
            color: ${GrayColor};
            margin: 0;
            display: flex;
            gap: 10px;
          }
        }
      }
      &-img {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
        @media screen and (max-width: 768px) {
          max-width: 540px;
          margin: 0 auto;
          img {
            margin-top: 30px;
          }
        }
      }
    }
    &-desc {
      margin-top: 40px;
      text-align: center;
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200.02%;
        color: ${GrayColor};

        span {
          font-weight: 600;
          color: ${SecondaryColor};
        }
      }
    }
  }
`;

export const OurApproachContainer = styled.div`
overflow: hidden;
  .our-approach-content {
    &-header {
      background-image: url(${ourApproachHeader});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 243px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 128.52%;
        color: ${WhiteColor};
        max-width: 1041px;
        margin: 0 auto;
        padding: 58px 0;

        @media screen and (max-width: 768px) {
          font-size: 16px;
        }
      }
    }

    &-detail {
      &-img {
        height: 678px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media screen and (max-width: 768px) {
          max-width: 540px;
          margin: 0 auto;
          margin-bottom: 40px;
          height: 478px;
        }
      }
      &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        p {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 85.52%;
          color: ${PrimaryColor};
          margin-bottom: 6px;
        }
        h1 {
          font-family: 'Spectral';
          font-style: normal;
          font-weight: 700;
          font-size: 48px;
          line-height: 85.52%;
          color: ${SecondaryColor};
        }
        h6 {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 200.02%;
          color: ${GrayColor};
        }
        @media screen and (max-width: 768px) {
          h1 {
            font-size: 35px;
            margin: 20px 0;
          }
        }
        &-desc {
          h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 24px;
            line-height: 84.02%;
            color: ${PrimaryColor};
          }
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 200.02%;
            color: ${GrayColor};
          }

          @media screen and (max-width: 768px) {
          h1 {
            line-height: 133.02%;
            font-size: 18px;
          }
        }
        }
      }
    }
  }
`;

export const MeetTeamContainer = styled.div`
  background: rgba(0, 117, 255, 0.06);
  padding: 60px 0;
  overflow: hidden;

  .meetTeam-content {
    &-heading {
      text-align: center;
      margin-bottom: 60px;
      p {
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
        margin-bottom: 25px;
      }
      @media screen and (max-width: 768px) {
        h1 {
          font-size: 35px;
        }
      }
    }
    &-detail {
      &-desc {
        display: flex;
        flex-direction: column;
        gap: 49px;
        height: 100%;

        p {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 24px;
          line-height: 121.52%;
          color: ${SecondaryColor};
        }
        @media screen and (max-width: 768px) {
          p {
            font-size: 18px;
          }
        }

        &-one {
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 57.02%;
            color: ${GrayColor};
            margin-bottom: 6px !important;
          }
          h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 136.52%;
            color: ${PrimaryColor};
          }
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 23px;
            }
          }
        }
        &-two {
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 57.02%;
            color: ${GrayColor};
            margin-bottom: 6px !important;
          }
          h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 136.52%;
            color: #ff7a00;
          }
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 23px;
            }
          }
        }
        &-three {
          p {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 57.02%;
            color: ${GrayColor};
            margin-bottom: 6px !important;
          }
          h1 {
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 36px;
            line-height: 136.52%;
            color: #2f994c;
          }
          @media screen and (max-width: 768px) {
            h1 {
              font-size: 23px;
            }
          }
        }
      }

      &-img {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media screen and (max-width : 768px) {
          max-width: 500px;
          margin: 0 auto;
        }
      }
    }
  }
`;
