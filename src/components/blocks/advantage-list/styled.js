import styled from "styled-components";

export const GridList = styled.ul`
margin: 0;
padding: 0;
display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-flow: row;
gap: 20px;
padding-bottom: 64px;
padding-top: 64px;

@media (max-width: 768px) {
  grid-template-columns: 1fr;

}
`;

export const AdvantageSection = styled.section`
text-align: center;
padding-bottom: 180px;
padding-left: 80px;
padding-right: 80px;
`;

export const StyledTitle = styled.h2`
@media (max-width: 768px) {
  font-size: 24px;
  line-height: 31px;
}

@media (max-width: 550px) {
  font-size: 24px;
  line-height: 31px;
}
`;
