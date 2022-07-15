import React, { useEffect, useState } from "react";
import { ReactComponent as ChevronDown } from "../../icons/ChevronDown.svg";
import { ReactComponent as ChevronUp } from "../../icons/ChevronUp.svg";
import { ReactComponent as CartFill } from "../../icons/CartFill.svg";

export default function ItemCount({ stock, initial, addCant }) {
  const [cant, setCant] = useState(initial);
  const [subt, setSubt] = useState(0);
  const [sStock, setsStock] = useState(false);
  const [toCart, setToCart] = useState(false);

  useEffect(() => {
    if (cant > stock) {
      setCant(stock);
      setsStock(true);
    } else if (cant < stock) {
      setsStock(false);
      setCant(cant);
    }
  }, [cant]);

  return (
    <>
      <div className="row pt-3 ps-2 pe-2">
        <div
          className="col-2 d-inline-flex flex-column align-items-center justify-content-center bg-white flex-grow-0"
          id="buttonCount"
        >
          <button
            className="bg-white border-0 text-dark"
            onClick={() => {
              initial < stock ? setCant(cant + 1) : setsStock(true);
            }}
          >
            <ChevronUp />
          </button>
          <input
            type="text"
            defaultValue={cant}
            className="w-100 text-center border-0 lh-1"
          />
          <button
            className="bg-white border-0 text-dark"
            onClick={() => {
              setCant(cant - 1);
              setsStock(false);
            }}
          >
            <ChevronDown />
          </button>
        </div>
        <div className="col-10 d-flex flex-row align-self-center justify-content-center ">
          <button
            className="btn btn-success rounded"
            onClick={() => {
              addCant(cant);
              setToCart(true);
            }}
          >
            <CartFill />
            agregar al carrito
          </button>
          {sStock && (
            <>
              <p className="h7 text-danger">
                <em>Stock agotado!</em>
              </p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
