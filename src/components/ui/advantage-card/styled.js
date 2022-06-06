import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

export const DivWrapper = styled.div`
background-color: ${(props) => (props.isNegative ? '#f8ddd7' : '#e1edce')};
min-height: 200px;
text-align: start;

`;

export const Div2 = styled.div`
display: flex;
`;

export const Div1 = styled.div`
padding: ${defaultTheme.indent} ${defaultTheme.indent} 0 ${defaultTheme.indent};
`;

export const Div3 = styled.div`
display: flex;
flex-direction: column;
`;
