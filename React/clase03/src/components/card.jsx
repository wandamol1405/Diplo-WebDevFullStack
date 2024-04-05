import React from "react";
import CardContainer from "./cardContainer";
import ProductImage from "./productImage";
import ProductButton from "./productButton";

const Card = ({ title, price, img, id }) => {
  return (
    <CardContainer>
      <ProductImage src={img} />
      <h2 style={{ color: "#007bff", margin: "10px", textAlign: "center" }}>
        {title}
      </h2>
      <h3 style={{ color: "#28a745", margin: "10px", textAlign: "center" }}>${price}</h3>
      <p style={{ color: "#6c757d", margin: "10px", textAlign: "center" }}>ID: {id}</p>
      <ProductButton>Agregar al carrito</ProductButton>
    </CardContainer>
  );
};

export default Card;
