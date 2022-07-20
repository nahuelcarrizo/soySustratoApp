import React, { useState, useEffect } from "react";
import Item from "./item/Item";
import { Link } from "react-router-dom";

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
    <>
      {isLoading ? (
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
      ) : (
        <div className="item-list mb-4 pb-3 mt-5 text-center d-flex flex-row">
          <Link to={"/ItemListContainer"} className="me-2">
            Home page
          </Link>{" "}
          /
          <Link to={"/ItemListContainer"} className="me-2 ms-2">
            Tienda
          </Link>{" "}
          /
          <Link to={"/ItemListContainer"} className="me-2 ms-2">
            Todos los productos
          </Link>
        </div>
      )}
      <div className="container">
        <div className="row gx-5 gy-3">
          {isOk && isOk.map((item) => <Item key={item.id} item={item} />)}
        </div>
      </div>
    </>
  );
}
