import React from "react";


const Card = ({ title, price, img, id }) => {
  return(
    <div className="card">
      <img src={img}></img>
      <h2>{title}</h2>
      <h3>${price}</h3>
      <p>ID: {id}</p>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Card;
