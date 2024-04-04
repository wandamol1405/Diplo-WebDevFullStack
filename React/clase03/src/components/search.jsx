import React, { useState } from "react";

const categorys = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function Search({ handleSearch }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(name, price, category, order);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Filtrado</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Buscar nombre"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Bucar precio"
      />
      <select
        name="categorys"
        id="categorys"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        defaultValue={""}
      >
        <option value="" disabled>
          Selecciona una categoria
        </option>
        {categorys.map((category) => {
          return (
            <option value={category} key={category}>
              {category}
            </option>
          );
        })}
      </select>

      <input
        type="checkbox"
        checked={order}
        onChange={() => setOrder((prev) => !prev)}
      />

      <button>Buscar</button>
    </form>
  );
}

export default Search;
