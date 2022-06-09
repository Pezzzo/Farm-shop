import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

html {
  height: 100%;
  background-color: ${(props) => props.theme.colorWhite}
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
  background-color: ${(props) => props.theme.colorGrey}
}

h1, h2, h3, h4 {
  margin: 0;
  padding: 0;
  font-weight: bold;
}

h1 {
  font-size: 44px;
  line-height: 50px;
}
h2 {
  font-size: 36px;
  line-height: 41px;
}
h3 {
  font-size: 24px;
  line-height: 31px;
}
h4 {
  font-size: 18px;
  line-height: 27px;
}
`;
