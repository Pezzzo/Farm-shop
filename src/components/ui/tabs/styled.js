import styled, { css } from "styled-components";

export const TabButton = styled.button`
padding: 8px 12px;
margin-right: 8px;
font-size: 14px;
line-height: 21px;
margin-bottom: 16px;
cursor: pointer;
color: ${(props) => props.theme.colorBlackText};

${(props) =>
  props.$isSelect
    ? css`
        background-color: ${props.theme.colorGreen};
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: ${props.theme.colorWhite};
      `
    : css`
        background-color: ${props.theme.colorGrey};
        border: 1px solid rgba(0, 0, 0, 0.1);
        color: ${props.theme.colorBlackText};
      `}
`;

export const TabsList = styled.ul`
display: flex;
flex-wrap: wrap;
align-items: center;
padding-left: 0;
margin: 0;
`;

export const Description = styled.div`
font-size: 14px;
line-height: 21px;
margin: 0;
margin-bottom: 40px;
padding-bottom: 14px;
height: 105px;
overflow-y: auto;
`;

