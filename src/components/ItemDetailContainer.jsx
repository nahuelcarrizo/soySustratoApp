import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer({ selectItem }) {
  const [detailOpen, setDetailOpen] = useState([]);

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
