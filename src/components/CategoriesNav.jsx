import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import productosData from "../json/productosData.json";

export default function CategoriesNav() {
  const prods = productosData;
  const categories = prods.map((el) => el.categoria);
  const uniqueCategories = Array.from(new Set(categories));
  console.log(uniqueCategories);
  return (
    <>
      <div className="container">
        <nav className="nav">
          {uniqueCategories.map((el) => (
            <Link
              className="nav-item"
              key={el}
              to={`/CategoryContainer/${el}`}
            />
          ))}
        </nav>
      </div>
    </>
  );
}
