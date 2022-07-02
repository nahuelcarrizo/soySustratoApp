import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState([]);

  useEffect(() => {
    const respOk = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2600);
    });

    respOk
      .then((r) => {
        setIsOk(r);
      })
      .catch(() => {
        console.log("Algo falló");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [productos]);

  return (
    <div className="row justify-content-center">
      {!isLoading && (
        <div className="mb-5 mt-5 text-center">
          <h1>Tienda.</h1>
          <h2>CONOCE NUESTROS PRODUCTOS QUE SE HACEN TIERRA EN 180 DÍAS.</h2>
        </div>
      )}
      {isLoading && (
        <div className="d-flex flex-column align-items-center mt-5">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <p>Cargando todos los productos</p>
        </div>
      )}
      {isOk && isOk.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
}
