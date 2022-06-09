import styled from "styled-components";

export const CartWrapper = styled.div`
background-color: ${(props) => props.theme.colorWhite};
min-height: 248px;
border: 1px solid rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
padding: 20px;
display: flex;
`;

export const Img = styled.img`
width: 248px;
height: 248px;
padding-right: 20px;

`;

export const P = styled.p`
font-size: 14px;
line-height: 21px;
`;


