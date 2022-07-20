import React from "react";
import { Link } from "react-router-dom";

export default function DropdownCatItem({ id, img, nombre, categoria, pack }) {
  const cat = categoria;

  return (
    <>
      {cat == undefined ? (
        <Link
          className="text-dark d-flex nav__cat-itemLeft align-items-center"
          key={id}
          to={`/ItemDetailContainer/${id}`}
        >
          <img src={img} alt="" className="me-2" />
          <p className="mb-1">{nombre}</p>
        </Link>
      ) : (
        <Link
          className="text-dark d-flex nav__cat-itemRight align-items-center"
          key={id}
          to={`/ItemDetailContainer/${id}`}
        >
          <p className="mb-1">
            {nombre} pack {pack}un
          </p>
        </Link>
      )}
    </>
  );
}
