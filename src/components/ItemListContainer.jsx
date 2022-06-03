import React from "react";
import ItemCount from "./ItemCount";

export default function ItemListContainer({ greeting }) {
  return (
    <div
      className="container d-flex flex-row justify-content-center align-items-center"
      id="listContainer"
    >
      <ItemCount
        stock={10}
        initial={1}
        onAdd={() => console.log("Agregado al carrito!")}
      />
    </div>
  );
}
