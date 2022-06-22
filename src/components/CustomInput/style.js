import { SecondaryColor } from 'components/GlobalStyle';
import styled from 'styled-components';

const CustomInputContainer = styled.div`
  width: 100%;
  p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 85.52%;
    color: ${SecondaryColor};
    margin-bottom: 13px;
  }
  input {
    background-color: ${(props) => props.bgColor};
    border: 1px solid #929292;
    border-radius: 5px;
    width: 100%;
    padding: 13px;
    :focus {
      outline: none;
    }
  }
`;

export default CustomInputContainer;
