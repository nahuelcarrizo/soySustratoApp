import React, { useState, useEffect } from "react";
import Item from "./Item";

export default function ItemList({ productos }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOk, setIsOk] = useState([]);
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
  }, []);

  return (
    <div className="row justify-content-center">
      {isLoading && <h1>Cargando</h1>}
      {isOk &&
        isOk.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            img={item.img}
            descripcion={item.descripcion}
            categoria={item.categoria}
          />
        ))}
    </div>
  );
}
