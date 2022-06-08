import styled from "styled-components";

export const StyledMain = styled.main`
min-height: 100%;
background-color: ${(props) => props.theme.colorGrey};
display: grid;
grid-template-columns: 1fr 2fr;
column-gap: 20px;
padding: 40px 90px;
`;
