import styled from "styled-components";
import { StyledLi } from "../../styled/li/styled";

export const StyledUl = styled.ul`
display: flex;
flex-direction: column;
margin: 0;
height: 100%;
`;

export const Li = styled(StyledLi)`
min-height: 288px;
border: 1px solid rgba(0, 0, 0, 0.1);
margin-bottom: 12px;
background-color: ${(props) => props.theme.colorWhite}
`;

export const Section = styled.section`
grid-column: 2 / 3;
height: 100%;
`;
