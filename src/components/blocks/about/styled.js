import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

import aboutFarmer from "../../../assets/Farmer.svg";

export const AboutSection = styled.section`
background-color: ${defaultTheme.colorLightBlue};
background-image: url(${aboutFarmer});
background-repeat: no-repeat;
background-position: 744px 100%;
padding-left: ${defaultTheme.pagePadding};
min-height: 600px;
display: flex;
align-items: center;
margin-bottom: 100px;
`;

export const Div = styled.div`
max-width: 538px;
`;
