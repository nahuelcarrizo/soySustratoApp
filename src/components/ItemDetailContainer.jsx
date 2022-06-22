import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productosData from "../json/productosData.json";

export default function ItemDetailContainer() {
  const [itemInfoOk, setItemInfoOk] = useState([]);

  const { id } = useParams();
  //aca poner un find con el id y quedarme con el {}. Guardarlo en el estado y pasar el estado por props a itemdetail.jsx
  const item = productosData.find((el) => el.id == id);
  console.log(item);
  /*   const item = id;
   */
  useEffect(() => {
    const getElement = new Promise((res, rej) => {
      setTimeout(() => {
        res(item);
      }, 2000);
    });

    getElement
      .then((item) => setItemInfoOk(item))
      .catch(() => {
        <h5>Falló la carga.</h5>;
      });
  }, []);

  return (
    <div>
      <ItemDetail itemReq={itemInfoOk} />
    </div>
  );
}
