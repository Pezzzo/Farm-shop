import styled from "styled-components";

export const NavButton = styled.button`
position: relative;
background-color: ${(props) => props.theme.colorOrange};
color: ${(props) => props.theme.colorWhite};
font-size: 18px;
line-height: 27px;
font-weight: 700;
border: none;
padding: 16px 98px;
cursor: pointer;

&:hover,
&:active {
  background-color: ${(props) => props.theme.colorOrangeHover};
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
