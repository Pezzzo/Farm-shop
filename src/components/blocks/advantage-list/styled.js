import styled from "styled-components";
import { StyledButton } from "../../ui/button/styled";

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

@media (max-width: 768px) {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 100px;
}
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

export const ButtonAdvantage = styled(StyledButton)`
width: 260px;
margin: 0 auto;
padding: 0;
`;
