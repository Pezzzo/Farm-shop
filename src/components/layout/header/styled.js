import styled from "styled-components";
import { defaultTheme } from "../../../thems/default";

export const StyledHeader = styled.header`
padding: 10px 90px;
display: flex;
justify-content: space-between;


@media (max-width: 900px) {
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
}
`;
