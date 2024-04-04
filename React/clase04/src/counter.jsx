import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (count % 10 === 0 && count !== 0) {
      console.log("Es multiplo de 10");
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 3000);
    }
  }, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Sumar 1
      </button>
      {show && <div>Es multiplo de 10</div>}
    </div>
  );
}

export default Counter;
