import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";

export default function ItemCount({ stock, initial, addCant }) {
  const [cant, setCant] = useState(initial);
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
          {!toCart ? (
            <>
              <button
                className="btn btn-outline-primary mt-3"
                onClick={() => {
                  addCant(cant);
                  setToCart(true);
                }}
              >
                agregar al carrito
              </button>
            </>
          ) : (
            <Link className="btn btn-success mt-3" to={"/Cart"}>
              Ir al carrito
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
