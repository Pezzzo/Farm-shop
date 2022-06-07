import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

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

export const Link = styled.a`
text-decoration: none;
color: ${defaultTheme.colorBlackText};
display: flex;
align-items: center;

@media (max-width: 768px) {
  padding-top: 7px;
  padding-bottom: 20px;
}
`;
