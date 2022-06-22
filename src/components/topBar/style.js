const { default: styled } = require('styled-components');

export const TopBarContainer = styled.div`
  background-color: #272727;
  padding: 20px 0;

  .top-bar-contaienr-content {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 30px;

    &-phone {
      display: flex;
      align-items: center;
      gap: 7px;

      p {
        color: white;
        font-weight: 400;
        font-size: 14px;
        line-height: 77.52%;
        margin: 0;
      }
    }
    &-mail {
      display: flex;
      align-items: center;
      gap: 7px;
      p {
        color: white;
        font-weight: 400;
        font-size: 14px;
        line-height: 77.52%;
        margin: 0;

      }
    }
  }
`;

export default TopBarContainer;
