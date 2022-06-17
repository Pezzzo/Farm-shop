import React, { useRef } from "react";
import { CartWrapper, Img, Price, P, Title, TabsWrapper, MobileCheckbox } from "./styled";
import Tabs from "../tabs/tabs";
import TabsContent from "../tabs-content/tabs-content";
import { Input, Label } from "../checkbox/styled";



const ProductCart = React.forwardRef(({
  product,
  productId,
  updateProducts,
  updateId }, ref) => {

  const handleProductId = (event) => {
    if (event.target.checked) {
      updateId(event.target.id);
    }
  };

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
      <Img
        src={product.image}
        id={product.id}
        ref={productId == product.id ? ref : null} />
      <TabsWrapper>
        <Title>{product.name}</Title>
        <Tabs dataList={tabsList} />
        <Price>{product.price} руб. / {product.weight} гр.</Price>
      </TabsWrapper>
      <MobileCheckbox>
        <Label>
          <span>В корзину</span>
          <Input
            type="checkbox"
            id={product.id}
            onChange={handleProductId}
            onClick={() => updateProducts(product)} />
        </Label>
      </MobileCheckbox>
    </CartWrapper>
  </>
  )
});

export default ProductCart;

