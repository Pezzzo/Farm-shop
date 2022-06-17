import styled from "styled-components";

export const StyledMain = styled.main`
position: absolute;
top: 80px;
bottom: 80px;
background-color: ${(props) => props.theme.colorGrey};
display: grid;
grid-template-columns: 1fr 2fr;
column-gap: 20px;
padding: 40px 90px 0 90px ;

@media (max-width: 768px) {
  top: 0;
  grid-template-columns: 1fr;
  padding: 20px 20px ;
  position: relative;
}
`;
