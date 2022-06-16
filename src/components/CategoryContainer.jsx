import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

export default function CategoryContainer({ categorias }) {
  const categories = categorias;
  console.log(categorias);

  return (
    <>
      <section>
        <div className="mb-5 mt-5 text-center">
          <h1>Tienda.</h1>
        </div>
        <div className="container">
          <ItemList productos={categories} />
        </div>
      </section>
    </>
  );
}
