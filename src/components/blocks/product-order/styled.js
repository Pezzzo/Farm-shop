import styled from "styled-components";
import { NavButton } from "../../ui/button/styled";

export const Section = styled.section`
grid-column: 1 / 2;
`;

export const FieldsetCheckbox = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
margin-bottom: 18px;
border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FieldsetOrder = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
border: 1px solid rgba(0, 0, 0, 0.1);
`;

export const FormButton = styled(NavButton)`
width: 100%;
`;
