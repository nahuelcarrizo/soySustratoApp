import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import productosData from "../json/productosData.json";

export default function ItemDetailContainer() {
  /* const [detailOpen, setDetailOpen] = useState([]);

  const prods = productosData;

  const { id } = useParams();

  const getElementId = () => {
    return id;
  };

  useEffect(() => {
    const data = async () => {
      const item = await getElementId;

      setDetailOpen(item);
    };
    data([]);
  }, []); */

  const [itemInfoOk, setItemInfoOk] = useState([]);

  const { id } = useParams();
  const item = id;

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
      <ItemDetail idItem={itemInfoOk} />
    </div>
  );
}
