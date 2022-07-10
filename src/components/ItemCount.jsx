import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ChevronUp } from "../icons/ChevronUp.svg";
import { ReactComponent as ChevronDown } from "../icons/ChevronDown.svg";

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
      <div className="d-flex flex-row justify-content-center align-items-stretch pt-3">
        <div
          className="d-flex flex-column align-items-start bg-white"
          id="buttonCount"
        >
          <button
            className="bg-white border-0 text-dark w-50 h-50"
            onClick={() => {
              initial < stock ? setCant(cant + 1) : setsStock(true);
            }}
          >
            <ChevronUp />
          </button>
          <input
            type="text"
            defaultValue={cant}
            className="w-50 h-50 text-center border-0"
          />
          <button
            className="bg-white border-0 text-dark w-50"
            onClick={() => {
              setCant(cant - 1);
              setsStock(false);
            }}
          >
            <ChevronDown />
          </button>
        </div>
        <div className="flex-shrink-0 d-flex align-items-center">
          <button
            className="btn btn-success h-75"
            onClick={() => {
              addCant(cant);
              setToCart(true);
            }}
          >
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
