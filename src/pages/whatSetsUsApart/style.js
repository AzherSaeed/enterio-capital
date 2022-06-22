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
  }
`;

export const UniqueModelContainer = styled.div`
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
        }
      }
    }
  }
`;

export const MeetTeamContainer = styled.div`
  background: rgba(0, 117, 255, 0.06);
  padding: 60px 0;

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
        }
      }

      &-img {
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;
