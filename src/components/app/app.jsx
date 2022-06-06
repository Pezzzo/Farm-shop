import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantages';
import { GlobalStyle } from "./styles";


const App = () => {
  return (
    <>
    <GlobalStyle />
    <PageWrapper advantages={advantages} />
    </>
  );
}
export default App;
