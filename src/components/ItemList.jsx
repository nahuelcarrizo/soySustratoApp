import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState([]);

  console.log(" se renderiza ItemList");
  useEffect(() => {
    const respOk = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos);
      }, 2000);
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
      {isLoading && <h1>Cargando</h1>}
      {isOk && isOk.map((item) => <Item key={item.id} item={item} />)}
    </div>
  );
}
