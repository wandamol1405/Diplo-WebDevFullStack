import React, { useEffect, useState } from "react";
import Card from "./card";

function Products({data = []}) {
  return (
    <div className="products">
      {data.map((producto) => (
        <Card
          key={producto.id}
          title={producto.title}
          price={producto.price}
          img={producto.image}
          id={producto.id}
        />
      ))}
    </div>
  );
}

export default Products;
