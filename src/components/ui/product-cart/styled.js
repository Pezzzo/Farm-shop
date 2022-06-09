import styled from "styled-components";
import { StyledLi } from "../../styled/li/styled";

export const CartWrapper = styled.div`
position: relative;
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
margin-right: 20px;
float: left;
`;

export const TabsList = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-left: 0;
margin: 0;
`;

export const Tab = styled.button`
padding: 8px 12px;
background-color: ${(props) => props.theme.colorGrey};
border: 1px solid rgba(0, 0, 0, 0.1);
margin-right: 8px;
font-size: 14px;
line-height: 21px;
margin-bottom: 16px;
cursor: pointer;
color: ${(props) => props.theme.colorBlackText};


&:focus {
  background-color: ${(props) => props.theme.colorGreen};
  color: ${(props) => props.theme.colorWhite}
}
`;

export const Title = styled.h3`
margin: 0;
padding-bottom: 16px;
`;

export const Description = styled.p`
font-size: 14px;
line-height: 21px;
margin: 0;
padding-bottom: 14px;
height: 105px;
overflow-y: auto;
`;

export const Price = styled.span`
position: absolute;
bottom: 20px;
font-size: 14px;
line-height: 21px;
font-weight: bold;
background-color: ${(props) => props.theme.colorLightBlue};
padding: 4px 8px;
`;
