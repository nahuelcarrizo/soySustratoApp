import React from "react";

export default function MenuMobileProducts({ prods }) {
  const ArrayProducts = prods;

  return (
    <>
      <div className="container">
        <div>
          <h3>ENVASES RÍGIDOS</h3>
          <ul className="ps-0">
            {ArrayProducts.map((element) => {
              return (
                element.subcategory === "ENVASES RÍGIDOS" && (
                  <li className="mob-prods" key={element.id}>
                    <a href={element.href}>
                      <span className="img-wrap">
                        <img src={element.img} />
                      </span>
                      <em>{element.prod}</em>
                    </a>
                  </li>
                )
              );
            })}
          </ul>
          <div className="pt-3">
            <h5>Personalizar envases</h5>
          </div>
          <h3>ENVASES FLEXIBLES</h3>
          <ul className="ps-0">
            {ArrayProducts.map((element) => {
              return (
                element.subcategory === "ENVASES FLEXIBLES" && (
                  <li className="mob-prods" key={element.id}>
                    <a href={element.href}>
                      <span className="img-wrap">
                        <img src={element.img} />
                      </span>
                      <em>{element.prod}</em>
                    </a>
                  </li>
                )
              );
            })}
          </ul>
          <div className="pt-3">
            <h5>Láminas</h5>
          </div>
          <div className="pt-3">
            <h5>Bolsas</h5>
          </div>
          <div className="pt-3">
            <h5>Vajilla de salvado</h5>
          </div>
        </div>
      </div>
    </>
  );
}
