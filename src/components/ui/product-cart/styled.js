import styled from "styled-components";

export const CartWrapper = styled.div`
position: relative;
background-color: ${(props) => props.theme.colorWhite};
min-height: 248px;
border: 1px solid rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
padding: 20px;
display: flex;

@media (max-width: 1110px) {
  flex-direction: column;
  align-items: center;
}
`;

export const Img = styled.img`
width: 248px;
height: 248px;
margin-right: 20px;
float: left;

@media (max-width: 768px) {
  margin-right: 0;
  object-fit: cover;
}
`;

export const Title = styled.h3`
margin: 0;
padding-bottom: 16px;
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

export const P = styled.p`
font-size: 14px;
line-height: 21px;
margin: 0;
padding-bottom: 14px;
`;

export const TabsWrapper = styled.div`
width: 100%;

@media (max-width: 1110px) {
  padding-top: 10px;
}
`;

export const MobileCheckbox = styled.div`
position: absolute;
padding: 0;
right: 0;
bottom: 4px;

@media (min-width: 768px) {
  display: none;
}
`;
