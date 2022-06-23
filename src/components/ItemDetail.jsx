import React, { useState, useContext } from "react";
import productosData from "../json/productosData.json";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function ItemDetail({ itemReq }) {
  /*   console.log(itemReq); // []
   */

  const { addItem } = useContext(MiContexto);
  function addCant(cant) {
    addItem(cant, itemReq);
  }

  return (
    <>
      <div className="d-flex flex-row mt-5 ms-5">
        <img className="itemImg w-25" src={itemReq.img} alt="Card image cap" />

        <div className="itemBody ps-5 d-flex flex-column justify-content-start">
          <small className="text-muted">{itemReq.categoria}</small>
          <h3>{itemReq.nombre}</h3>
          <span>{itemReq.precio}</span>
          <p>{itemReq.descripcion}</p>
          {/* {cantReq ? (
            <>
              <Link to={`/Cart`}>Finalizar Compra</Link>
            </>
          ) : ( */}
          <div className="w-50">
            <ItemCount stock={itemReq.stock} initial={1} addCant={addCant} />
          </div>
        </div>
      </div>
    </>
  );
}
