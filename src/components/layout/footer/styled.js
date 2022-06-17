import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: 18px 90px;
display: flex;
align-items: center;
justify-content: space-between;
border-top: 1px solid rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.colorWhite};

@media (max-width: 900px) {
  flex-direction: column;
  align-items: center;
  padding: 0 10px 10px 10px;
}
`;

export const Span = styled.span`
@media (max-width: 768px) {
  font-size: 14px;
  line-height: 10px;
  padding-right: 20px;
  margin-left: auto;
}
`;
