import styled from "styled-components";

export const Section = styled.section`
grid-column: 2 / 3;
overflow-y: scroll;

@media (max-width: 824px) {
  grid-column: 1 / -1;
}
`;


