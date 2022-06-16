import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

export default function CategoryContainer() {
  /*   const categories = categorias;
/*   console.log(categorias);
 */ const { el } = useParams();
  const element = el;

  console.log(el);
  return (
    <>
      <section>
        <div className="mb-5 mt-5 text-center">
          <h1>Tienda.</h1>
        </div>
        <div className="container">
          {/* {categories.map((el) => (
            <>
              <ItemList category={categories} />
            </>
          ))}
          <ItemList productos={categories} /> */}
        </div>
      </section>
    </>
  );
}
