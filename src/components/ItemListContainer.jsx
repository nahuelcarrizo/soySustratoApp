import React from "react";
import ItemList from "./ItemList";
import productosData from "../json/productosData.json";
import ItemDetailContainer from "./ItemDetailContainer";

export default function ItemListContainer() {
  const prods = productosData;

  return (
    <>
      <section>
        <div className="mb-5 mt-5 text-center">
          <h1>Tienda.</h1>
          <h2>CONOCE NUESTROS PRODUCTOS QUE SE HACEN TIERRA EN 180 DÍAS.</h2>
        </div>
        <div className="container">
          <ItemList productos={prods} />
        </div>
      </section>
    </>
  );
}
