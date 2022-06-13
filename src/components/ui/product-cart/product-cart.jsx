import React, {useEffect, useRef} from "react";
import { CartWrapper, Img, Price, P, Title, TabsWrapper } from "./styled";
import Tabs from "../tabs/tabs";
import TabsContent from "../tabs-content/tabs-content";



const ProductCart = React.forwardRef(( {product, selectProductId}, ref ) => {

  const tabsList = [
    {
      title: "Oписание",
      content: <P>{product.description}</P>
    },
    {
      title: "Характеристики",
      content: <TabsContent data={product.specifications} />
    },
    {
      title: "Свойства",
      content: <TabsContent data={product.structure} />
    }
  ];

  return (<>
    <CartWrapper>
      <Img src={product.image}  id={product.id} ref={ selectProductId == product.id ? ref : null}/>
      <TabsWrapper>
        <Title>{product.name}</Title>
        <Tabs dataList={tabsList} />
        <Price>{product.price} руб. / {product.weight} гр.</Price>
      </TabsWrapper>
    </CartWrapper>
    </>
  )
});

export default ProductCart;

