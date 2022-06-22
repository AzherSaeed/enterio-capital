import { PrimaryColor, SecondaryColor } from 'components/GlobalStyle';
import styled from 'styled-components';

export const ContactUsContainer = styled.div`
  margin-bottom: 60px;
  .contactus-heading {
    background: rgba(0, 117, 255, 0.06);
    text-align: center;
    padding-top: 66px;
    padding-bottom: 48px;
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
      margin: 15px 0;
    }
  }

  .contactus-form {
    transform: translateY(-110px);
    min-height: 600px;
    background: #ffffff;
    box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.11);
    border-radius: 16px;
    /* padding: 35px; */
    display: grid;
    grid-template-columns: minmax(0, 445px) minmax(0, 665px);

    @media screen and (max-width : 991px){
        grid-template-columns: 1fr;
        max-width: 628px ;
        margin: 0 auto;

    }


    &-left {
      background: #f0f7ff;
      border-radius: 16px 0px 0px 16px;
      padding: 64px 41px;
      display: flex;
      flex-direction: column;
      gap: 30px;

      @media screen and (max-width : 420px){
        padding: 10px;

        

        img{
            width: 100%;
            height: auto;
        }
      }

      img {
        width: 224px;
        height: 70px;
      }

      &-items {
        &-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 38px;

          img {
            width: 24px;
            height: 24px;
          }
          p {
            margin-bottom: 0;
            word-break: break-all;
            
          }
        }
      }
    }
    &-right {
      padding: 35px;

      @media screen and (max-width : 420px){
        padding: 10px;
      }

      h1 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 21px;
        color: ${SecondaryColor};
      }

      &-btn{
        float: right;
      }

      &-form {
        &-field {
          width: 100%;
          margin-top: 15px;
        }
      }
    }
  }
`;

export const ContactUsForm = styled.div``;
