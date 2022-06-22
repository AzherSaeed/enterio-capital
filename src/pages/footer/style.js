import { PrimaryColor, WhiteColor } from 'components/GlobalStyle';

const { default: styled } = require('styled-components');

const FooterContainer = styled.div`
  background-color: ${PrimaryColor};
  color: white;
  min-height: 437px;
  padding-top: 70px;
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
      p {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 85.52%;
        margin-bottom: 24px;
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
      }
    }
    &-contact {
      max-width: 208px;
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


          img{
            width: 24px;
            height: 24px;
          }
        }
      }
    }
  }
  hr{
    background-color: ${WhiteColor};
    height: 2px;
    border-radius: 5px;
  }
  p{
    margin: 0;
  }
`;

export default FooterContainer;
