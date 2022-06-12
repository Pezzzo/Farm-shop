import React from 'react';
import PageWrapper from '../layout/page-wrapper/page-wrapper';
import advantages from '../../mocks/advantages';
import products from '../../mocks/products';
import { GlobalStyle } from "./styles";


const App = () => {

  return (
    <>
    <GlobalStyle />
    <PageWrapper advantages={advantages} products={products} />
    </>
  );
}
export default App;
