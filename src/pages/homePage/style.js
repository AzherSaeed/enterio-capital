import styled from 'styled-components';
import {
  heroBackgroudImage,
  whoWeAreBefore,
  whoWeAreAfter,
  howDoItLeft,
  ourAdvantageBg,
} from 'assets';
import { GrayColor, PrimaryColor, SecondaryColor, WhiteColor } from '../../components/GlobalStyle';

export const HeroSectionContainer = styled.div`
  background-image: url(${heroBackgroudImage});
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* position: relative; */

  .hero-section-content {
    /* position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%); */
    text-align: center;
    padding-top: 94px;

    h1 {
      font-family: 'Spectral';
      font-style: normal;
      font-weight: 700;
      font-size: 58px;
      line-height: 86.52%;

      @media screen and (max-width: 600px) {
        font-size: 40px;
      }
    }
    p {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 77.52%;
      color: ${GrayColor};

      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }
  }
`;

export const WhoWeAreContainer = styled.div`
  .who-we-are-section {
    overflow: hidden;
  }
  .who-we-are-content {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 30px;
    row-gap: 60px;

    @media screen and (max-width: 740px) {
      grid-template-columns: 1fr;
    }

    &-image {
      position: relative;

      ::before {
        content: '';
        position: absolute;
        top: -24px;
        left: -20px;
        width: 215px;
        height: 99px;
        background-image: url(${whoWeAreBefore});
        z-index: -1;
      }

      ::after {
        content: '';
        position: absolute;
        bottom: -15px;
        right: 60px;
        width: 78px;
        height: 66px;
        background-image: url(${whoWeAreAfter});
        z-index: -1;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      @media screen and (max-width: 745px) {
        max-width: 420px;
        margin: 0 auto;
      }
    }
    &-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      h6 {
        color: ${PrimaryColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 13px;
      }
      p {
        color: ${GrayColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 200.02%;
      }
      h1 {
        color: ${SecondaryColor};
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
      }

      @media screen and (max-width: 745px) {
        h1 {
          font-size: 35px;
          margin: 15px 0;
        }
        p {
          margin-top: 10px;
        }
      }
    }
  }
`;

export const HowDoItContainer = styled.div`
  .howDoIt-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    min-height: 327px;

    @media screen and (max-width: 740px) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }

    &-left {
      background: url(${howDoItLeft});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      height: 100%;
      padding-left: 25%;
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      color: white;

      h1 {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
      }
      h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 74.02%;
      }

      @media screen and (max-width: 960px) {
        padding-left: 15%;
        h1 {
          font-size: 35px;
        }
        h6 {
          font-size: 14px;
        }
      }
    }
    &-right {
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }
  }

  .howDoIt-details {
    padding: 50px 0;
    h2 {
      color: ${SecondaryColor};
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 130.02%;
    }
    p {
      color: ${GrayColor};
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 200.02%;
    }
    @media screen and (max-width: 740px) {
      h2 {
        font-size: 18px;
      }
      p {
        font-size: 14px;
      }
    }
    &-list {
      margin-top: 40px;
      margin-bottom: 10px;
      &-item {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 10px 0;

        &-content {
          p {
            margin-bottom: 5px;
            color: ${GrayColor};
            font-family: 'Poppins';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 140.02%;
          }
        }
      }
      @media screen and (max-width: 740px) {
        margin-top: 10px;
      }
    }
  }
`;

export const OurAdvantagesContainer = styled.div`
  background-image: url(${ourAdvantageBg});
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;

  .our-advantages-content {
    padding: 80px 0;
    &-detail {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      height: 100%;
      row-gap: 10px;

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
      }
      h6 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 84.02%;
        color: ${SecondaryColor};
      }

      @media screen and (max-width: 990px) {
        h1 {
          font-size: 30px;
        }
        h6 {
          font-size: 18px;
        }
      }
      &-list {
        &-item {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 15px auto;

          p {
            margin-bottom: 6px;
          }
        }
      }
    }
    &-image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media screen and (max-width: 740px) {
        margin-top: 30px;
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
`;

export const TeamContainer = styled.div`
  padding: 100px 0;

  h1 {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 105.52%;
    color: ${WhiteColor};
    z-index: 1;
  }

  .team-content-title {
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

  @media screen and (max-width: 620px) {
    h1 {
      font-size: 35px !important;
    }
  }
`;

export const ContactUsContainer = styled.div`
  background: #fbfbfb;

  .contact-us-content {
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 30px;
    &-detail {
      p {
        color: ${PrimaryColor};
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 10px;
      }
      h1 {
        font-family: 'Spectral';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 85.52%;
        color: ${SecondaryColor};
      }
      @media screen and (max-width: 620px) {
        h1 {
          font-size: 35px;
          margin-bottom: 0;
        }
      }
    }
    &-form {
      &-field {
        width: 100%;
        margin-top: 20px;
      }
      &-btn {
        text-align: end;
      }
    }
  }
  .contact-us-image {
    height: 100%;
    img {
      width: 50vw;
      object-fit: cover;
      height: 100%;

      @media screen and (max-width: 991px) {
        max-width: 500px;
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }

    @media screen and (max-width: 991px) {
      display: flex;
      justify-content: center;
    }
  }
`;
