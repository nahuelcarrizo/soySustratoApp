import React, { useEffect, useState } from "react";

export default function ItemCount({ stock, initial, onAdd }) {
  const [cant, setCant] = useState(initial);
  const [sStock, setsStock] = useState(false);

  //no deberia tener estados. El estado no maneja itemDetail. Este solo recibe.
  useEffect(() => {
    if (cant > stock) {
      setCant(stock);
      setsStock(true);
    } else if (cant < stock) {
      setsStock(false);
    }
  }, [cant]);

  return (
    <>
      <div className="row justify-content-center p-4" id="itemCountContainer">
        <div className="row m-auto position-relative">
          <div className="row m-0 bg-white" id="buttonCount">
            <button
              className="col-4 bg-white"
              onClick={() => {
                setCant(cant - 1);
                setsStock(false);
              }}
            >
              -
            </button>
            <p className="col-4 text-center m-0">{cant}</p>
            <button
              className="col-4 bg-white"
              onClick={() => {
                initial < stock ? setCant(cant + 1) : setsStock(true);
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
          <button
            className="btn btn-outline-primary mt-3"
            onClick={() => onAdd(cant)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}
