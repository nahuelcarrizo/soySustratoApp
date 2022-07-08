import React from "react";

export default function CheckOutItem({
  id,
  nombre,
  costo,
  img,
  categoria,
  cantidad,
}) {
  const total = cantidad * costo;

  return (
    <div className="border border-dark row mb-1 p-2">
      <div className="col-2">
        <img className="img-thumbnail" src={img} alt="Card image cap" />
      </div>
      <div className="col-7">
        <div className="col">
          <div className="col m-0">
            <p className="h6 m-0">{nombre}</p>
            <span className="checkout-span">{categoria}</span>
          </div>
          <div className="col m-0">
            <p className="h6 m-0">
              {cantidad}un x $ {total}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
