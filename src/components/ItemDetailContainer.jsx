import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

export default function ItemDetailContainer({ selectItem }) {
  const [detailOpen, setDetailOpen] = useState([]);

  const id = useParams();
  useEffect(() => {
    const detailOk = new Promise((res, rej) => {
      setTimeout(() => {
        res(selectItem);
      }, 2000);
    });

    detailOk
      .then((item) => setDetailOpen(item))
      .catch(() => {
        console.log("algo falló");
      });
  }, []);

  return <div>{detailOpen && <ItemDetail handle={detailOpen} />}</div>;
}
