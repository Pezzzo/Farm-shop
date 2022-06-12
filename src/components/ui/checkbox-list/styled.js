import styled from "styled-components";

export const FieldsetCheckbox = styled.fieldset`
background-color: ${(props) => props.theme.colorWhite};
margin-bottom: 18px;
border: 1px solid rgba(0, 0, 0, 0.1);
padding: 24px 20px 12px 20px;
display: flex;
flex-direction: column;
`;

export const Title = styled.h4`
margin: 0;
padding-bottom: 24px;
`;
