import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

export const DivWrapper = styled.div`
background-color: ${(props) => (props.isNegative ? '#f8ddd7' : '#e1edce')};
height: 100%;
text-align: start;
`;

export const Div2 = styled.div`
display: flex;

@media (max-width: 500px) {
  flex-direction: column;
  align-items: center;
  text-align: center;
}
`;

export const Div1 = styled.div`
padding: ${defaultTheme.indent} ${defaultTheme.indent} 0 ${defaultTheme.indent};
min-height: 200px;
`;

export const StyledTitle = styled.h3`
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 27px;
}
`;

export const Img = styled.img`
width: 56px;
height: 56px;
margin-right: ${(props) => props.theme.indent};;
`;

export const Span = styled.span`
padding: 4px 10px;
margin-bottom: 34px;
font-size: 14px;
line-height: 25px;
color: ${(props) => props.theme.colorWhite};
background-color: ${(props) =>
  props.isNegative
    ? props.theme.colorRed
    : props.theme.colorGreen};
`;

export const P = styled.p`
@media (max-width: 768px) {
  font-size: 14px;
  line-height: 18px;
}
`;
