import React, { useEffect, useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [cont, setCont] = useState(initial);
  const [sStock, setsStock] = useState(false);

  useEffect(() => {
    if (cont > stock) {
      setCont(stock);
      setsStock(true);
    } else if (cont < stock) {
      setsStock(false);
    }
  }, [cont]);

  return (
    <>
      <div className="row" id="itemCountContainer">
        <p className="m-auto">Camisa tiger</p>
        <div className="row m-auto position-relative">
          <div className="row m-0 bg-white" id="buttonCount">
            <button
              className="col-4 bg-white"
              onClick={() => {
                setCont(cont - 1);
              }}
            >
              -
            </button>
            <p className="col-4 text-center m-0">{cont}</p>
            <button
              className="col-4 bg-white"
              onClick={() => {
                setCont(cont + 1);
              }}
            >
              +
            </button>
          </div>
          {sStock && (
            <>
              <p className="h7 text-danger">
                <em>Stock agotado!</em>
              </p>
            </>
          )}
        </div>
        <div className="row m-auto">
          <button className="btn btn-outline-primary" onClick={() => onAdd()}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}
