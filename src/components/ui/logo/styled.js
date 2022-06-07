import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

export const NameOfShop = styled.span`
line-height: 32px;
font-size: 28px;
font-weight: bold;
margin-left: 24px;

@media (max-width: 600px) {
  font-size: 22px;
}
`;

export const Link = styled.a`
text-decoration: none;
color: ${defaultTheme.colorBlack};
display: flex;
align-items: center;

@media (max-width: 900px) {
  padding-top: 7px;
  padding-bottom: 20px;
}
`;
