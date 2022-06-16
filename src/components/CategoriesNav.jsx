import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import productosData from "../json/productosData.json";

export default function CategoriesNav() {
  const prods = productosData;
  const categories = prods.map((el) => el.categoria);
  const uniqueCategories = Array.from(new Set(categories));

  return (
    <>
      <div className="d-flex justify-content-center pt-4">
        <nav className="nav">
          {uniqueCategories.map((el) => (
            <Link
              className="nav-item nav-link ms-3 me-3 text-black"
              key={el}
              to={`/CategoryContainer/${el}`}
            >
              {el}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
