import React from "react";
import productosData from "../json/productosData.json";

export default function ItemDetail({ idItem }) {
  const prods = productosData;

  let idProductos = prods.map((el) => el.id);
  let itemReqIndex = idProductos.findIndex((el) => el === Number(idItem));
  let itemReq = prods[itemReqIndex]; //objeto

  return (
    <>
      <div className="d-flex flex-column mt-5 ms-5">
        <img className="itemImg w-25" src={itemReq.img} alt="Card image cap" />
        <small className="text-muted">{itemReq.categoria}</small>
        <div className="itemBody">
          <h3>{itemReq.nombre}</h3>
          <span>{itemReq.precio}</span>
          {itemReq.descripcion}
        </div>
      </div>
    </>
  );
}
