import React from "react";
import ItemList from "./ItemList";
import productosData from "../../../json/productosData.json";

export default function ItemListContainer() {
  const prods = productosData;

  return (
    <>
      <section>
        <div className="container">
          <ItemList productos={prods} />
        </div>
      </section>
    </>
  );
}
