import styled from 'styled-components';

const CustomTextAreaContaienr = styled.div`
  width: 100%;
  textarea {
    background-color: ${(props) => props.bgColor};
    border: 1px solid #929292;
    border-radius: 5px;
    width: 100%;
    padding: 13px;
    min-height: 150px;
    margin-bottom: 13px;
    resize: none;
    :focus {
      outline: none;
    }
  }
`;

export default CustomTextAreaContaienr;
