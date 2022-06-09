import React from "react";
import Header from "../header/header";
import MainPage from "../../pages/main-page/main-page";
import Footer from "../footer/footer";
import advantages from "../../../mocks/advantages";
import products from "../../../mocks/products";
import BuyPage from "../../pages/buy-page/buy-page";


const PageWrapper = () => {
  return (
    <>
      <Header />
          <BuyPage products={products}/>
      <Footer />
    </>
  );
};

export default PageWrapper;

//<MainPage advantages={advantages} />
