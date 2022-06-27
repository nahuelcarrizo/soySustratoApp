import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  const [isOk, setIsOk] = useState([]);

  console.log("se renderiza ItemList");

  useEffect(() => {
    const respOk = new Promise((res, rej) => {
      res(productos);
    });

    respOk
      .then((r) => {
        setIsOk(r);
      })
      .catch(() => {
        console.log("Algo falló");
      });
  }, [productos]);

  return (
    <div className="row justify-content-center">
      <div className="mb-5 mt-5 text-center">
        <h1>Tienda.</h1>
        <h2>CONOCE NUESTROS PRODUCTOS QUE SE HACEN TIERRA EN 180 DÍAS.</h2>
      </div>

      {isOk && isOk.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
}
