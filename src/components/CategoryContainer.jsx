import React from "react";
import { useParams } from "react-router-dom";
import productosData from "../json/productosData.json";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";

export default function CategoryContainer() {
  const [prodsOk, setProdsOk] = useState([]);

  const { categoria } = useParams();
  const catReq = categoria;
  console.log(prodsOk);

  const productos = productosData;
  const prods = productos.filter((el) => el.categoria === catReq);
  console.log(prods);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods);
      }, 2000);
    });

    getProducts
      .then((prods) => setProdsOk(prods))
      .catch(() => {
        <h5>Falló la carga.</h5>;
      });
  }, []);

  return (
    <>
      <section>
        <div className="mb-5 mt-5 text-center">
          <h1>{catReq}</h1>
        </div>
        <div className="container">
          {prodsOk && <ItemList productos={prodsOk} />}
        </div>
      </section>
    </>
  );
}
