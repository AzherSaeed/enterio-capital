import styled from "styled-components";


export const PrimaryColor = '#0075FF';
export const SecondaryColor = '#272727';
export const WhiteColor = '#ffff'
export const GrayColor = '#666666'
export const InputColor = '##FBFBFB;'
export const lightGray = '##F4F4F4'


export const SaparateLine = styled.div`
    background-color: ${(props) => props.bgColor};
    width: 95px;
    height: 3px;
    border-radius: 5px;
    margin: ${(props) => props.margin};

`

export const FlexDirection = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;

    @media screen  and (max-width : 420px) {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

`
