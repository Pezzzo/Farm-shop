import styled from "styled-components";

export const StyledHeader = styled.header`
padding: 10px 90px;
min-height: 80px;
display: flex;
align-items: center;
justify-content: space-between;
background-color: ${(props) => props.theme.colorWhite};


@media (max-width: 768px) {
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
}
`;
