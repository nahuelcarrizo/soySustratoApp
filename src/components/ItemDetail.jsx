import React from "react";
import productosData from "../json/productosData.json";

export default function ItemDetail({ idItem }) {
  const prods = productosData;
  const item = prods.filter((i) => i.id == idItem);

  return <div>{idItem}</div>;
}
