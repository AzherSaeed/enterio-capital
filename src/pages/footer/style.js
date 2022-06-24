import { PrimaryColor, WhiteColor } from 'components/GlobalStyle';

const { default: styled } = require('styled-components');

const FooterContainer = styled.div`
  background-color: ${PrimaryColor};
  color: white;
  min-height: 437px;
  padding-top: 70px;
  overflow: hidden;
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;

    &-desc {
      max-width: 380px;
      &-logo {
        width: 179px;
        margin-bottom: 40px;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &-detail {
        p {
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 32px;
          color: #ffffff;

          @media screen and (max-width: 620px) {
            font-size: 14px;
            line-height: 25px;
          }
        }
      }
    }
    &-quickLink {
      max-width: 155px;
      h1 {
        font-weight: 600;
        font-size: 24px;
        line-height: 91.02%;
        margin-bottom: 40px;
      }
      a {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 24px;
        color: ${WhiteColor};
        text-decoration: none;
      }
      @media screen and (max-width: 620px) {
        h1 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        p {
          font-size: 14px;
          margin-bottom: 15px;
        }
      }
      &-list{
        display: flex;
        flex-direction: column;
      }
    }
    &-useFulLink {
      max-width: 148px;
      h1 {
        font-weight: 600;
        font-size: 24px;
        line-height: 91.02%;
        margin-bottom: 40px;
      }
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 24px;
        cursor: pointer;
      }
      @media screen and (max-width: 620px) {
        h1 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        p {
          font-size: 14px;
          margin-bottom: 15px;
        }
      }
    }
    &-contact {
      max-width: 208px;

      &-list{
        p{
          margin: 11px 0 ;
        }
      }
      h1 {
        font-weight: 600;
        font-size: 24px;
        line-height: 91.02%;
        margin-bottom: 40px;
      }
      a {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 24px;
        color: ${WhiteColor};
        text-decoration: none;
      
      }

      @media screen and (max-width: 620px) {
        h1 {
          font-size: 18px;
          margin-bottom: 20px;
        }
        p {
          font-size: 14px !important;
          line-height: 20px !important;
        }
      }
      &-list {
        p {
          display: flex;
          align-items: center;
          gap: 15px;
          font-family: 'Poppins';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 107.52%;

          img {
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  hr {
    background-color: ${WhiteColor};
    height: 2px;
    border-radius: 5px;
  }
  p {
    margin: 0;
  }
`;

export default FooterContainer;
