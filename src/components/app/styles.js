import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;
}

body,
html {
  margin: 0 auto;
}

body {
  position: relative;
  min-height: 100%;
  line-height: 27px;
  font-weight: 400;
  max-width: ${(props) => props.theme.pageWidth};
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizeDefault};
  color: ${(props) => props.theme.colorBlackText};
}
`;
