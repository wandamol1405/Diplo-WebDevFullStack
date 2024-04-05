import React, { useEffect, useState } from "react";
import Card from "./card";
import ProductsContainer from "./productsContainer";

function Products({data = []}) {
  return (
    <ProductsContainer>
      {data.map((producto) => (
        <Card
          key={producto.id}
          title={producto.title}
          price={producto.price}
          img={producto.image}
          id={producto.id}
        />
      ))}
    </ProductsContainer>
  );
}

export default Products;
