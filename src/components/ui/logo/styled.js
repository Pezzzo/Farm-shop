import styled from "styled-components";

export const NameOfShop = styled.span`
display: block;
line-height: 32px;
font-size: 28px;
font-weight: bold;
margin-left: 24px;

@media (max-width: 768px) {
  font-size: 22px;
}
`;

export const Div = styled.div`
text-decoration: none;
color: ${(props) => props.theme.colorBlackText};
display: flex;
align-items: center;
cursor: pointer;

@media (max-width: 768px) {
  padding-top: 7px;
  padding-bottom: 20px;
}
`;
