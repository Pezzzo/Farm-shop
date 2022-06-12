import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: 18px 90px;
display: flex;
justify-content: space-between;
border-top: 1px solid rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.colorWhite};

@media (max-width: 900px) {
  flex-direction: column;
  align-items: center;
  padding: 10px 10px;
}
`;
