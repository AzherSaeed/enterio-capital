import styled from 'styled-components';

export const CustomButtonContainer = styled.div`
  button {
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    height: auto;
    border-radius: 4px;
    font-size: 16px;
    border: none;
  }
`;

export const nouse = styled.div``;
