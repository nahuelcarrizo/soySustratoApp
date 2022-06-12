import React from "react";
import ItemCount from "./ItemCount";
import "./item.css";
import { Link } from "react-router-dom";

export default function Item({ id, nombre, precio, img, categoria }) {
  return (
    <>
      <div className="col-lg-3 col-12 border m-4 p-3 d-flex flex-column justify-content-between">
        <img className="itemImg" src={img} alt="Card image cap" />
        <small className="text-muted">{categoria}</small>
        <div className="itemBody">
          <h3>{nombre}</h3>
          <span>{precio}</span>
          <br />

          <Link to={`/ItemDetailContainer/${id}`}>+ Info del producto</Link>
        </div>

        <ItemCount
          stock={10}
          initial={1}
          onAdd={() => console.log("Agregado al carrito!")}
        />
      </div>
    </>
  );
}
