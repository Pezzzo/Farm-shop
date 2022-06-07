import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

export const NavButton = styled.button`
position: relative;
background-color: ${defaultTheme.colorOrange};
color: ${defaultTheme.colorWhite};
font-size: 18px;
line-height: 27px;
font-weight: 700;
border: none;
padding: 16px 98px;
cursor: pointer;

&:hover,
&:active {
  background-color: ${defaultTheme.colorOrangeHover};
  box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }
}

&:active {
  box-shadow: none;
}

&:disabled {
  opacity: 0.5;
}
`;
