import React from "react";
import CuboTapa from "./imgs/cubotapa.png";

export default function TestShop() {
  return (
    <>
      <div>
        <div className="shop-intro w-100">
          <div className="shop-intro__back">
            <span className="w-100 h-100 position-absolute"></span>
          </div>
          <div className="shop-intro__inner d-flex justify-content-center">
            <div className="shop-intro__text text-light d-flex align-items-center justify-content-end">
              <h1>
                Tienda de <br /> insumos
                <br />
                <span>sustentables</span>
              </h1>
            </div>
            <div className="shop-intro__img d-flex align-items-center ms-2">
              <img src={CuboTapa} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
