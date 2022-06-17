import styled from "styled-components";


export const StyledButton = styled.div`
position: relative;
background-color: ${(props) => props.theme.colorOrange};
color: ${(props) => props.theme.colorWhite};
font-size: 18px;
line-height: 27px;
font-weight: 700;
padding: 16px 98px;
cursor: pointer;
transition: 0.5s;

&:hover,
&:active {
  background-color: ${(props) => props.theme.colorOrangeHover};
  box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

&:active {
  box-shadow: none;
}

&:disabled {
  opacity: 0.5;
}
`;

export const StyledButtonOrder = styled.button`
position: relative;
background-color: ${(props) => props.theme.colorOrange};
color: ${(props) => props.theme.colorWhite};
font-size: 18px;
line-height: 27px;
font-weight: 700;
border: none;
padding: 16px 98px;
cursor: pointer;
transition: 0.5s;

&:hover,
&:active {
  background-color: ${(props) => props.theme.colorOrangeHover};
  box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

&:active {
  box-shadow: none;
}

&:disabled {
  opacity: 0.5;
}
`;

export const StyledButtonBase = styled.div`
position: relative;
color: ${(props) => props.theme.colorBlackText};
font-size: 18px;
line-height: 18px;
font-weight: 700;
cursor: pointer;
transition: 0.5s;


&:hover,
&:active {
  color: ${(props) => props.theme.colorOrangeHover};
}

&:disabled {
  opacity: 0.5;
}
`;

