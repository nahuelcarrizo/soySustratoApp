import React from "react";
import ItemCount from "./ItemCount";
import "./item.css";

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
          <a target="_blank">+ Info del producto</a>
        </div>
        r
        <ItemCount
          stock={10}
          initial={1}
          onAdd={() => console.log("Agregado al carrito!")}
        />
      </div>
    </>
  );
}
