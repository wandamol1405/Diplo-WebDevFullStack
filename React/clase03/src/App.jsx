import React, { useEffect, useState } from "react";
import Products from "./components/products";
import "./components/styles.css";
import Search from "./components/search";

const App = (props) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  function filterProducts(name, price, category, order) {
    let newProducts = products.filter((prod) => {
      return prod.title.toLowerCase().includes(name.toLowerCase());
    });
    if (price > 0) {
      newProducts = newProducts.filter((prod) => {
        return prod.price >= price;
      });
    }
    if (category !== "") {
      newProducts = newProducts.filter((prod) => {
        return prod.category === category;
      });
    }
    console.log({name, price, category, order});
    if (order) {
      newProducts = newProducts.sort((a, b) => {
        if((order)){return a.title.localeCompare(b.title);}
      });
    }
    
    setFilteredProducts(newProducts);
  }

  useEffect(() => {
    async function getProducts() {
      const result = await fetch("https://fakestoreapi.com/products");
      const data = await result.json();
      console.log(data);
      setProducts(data);
      setFilteredProducts(data);
    }
    getProducts();
  }, []);
  return (
    <>
      <Search handleSearch={filterProducts} />
      <Products data={filteredProducts} />
    </>
  );
};

export default App;
