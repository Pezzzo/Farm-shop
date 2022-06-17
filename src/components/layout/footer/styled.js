import styled from "styled-components";

export const StyledFooter = styled.footer`
position: fixed;
bottom: 0;
left: 0;
right: 0;
padding: 18px 90px;
display: flex;
align-items: center;
justify-content: center;
border-top: 1px solid rgba(0, 0, 0, 0.1);
background-color: ${(props) => props.theme.colorWhite};

@media (max-width: 768px) {
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

  @media (max-width: 768px) {
    margin: 0 auto;
  }
}
`;

export const Div = styled.div`
width: 1100px;
display: flex;
align-items: center;
justify-content: space-between;

@media (max-width: 768px) {
  flex-direction: column;
}
`;
