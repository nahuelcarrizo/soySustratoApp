import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "../json/productosData.json";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  let prods = productosData;
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsByCategory = new Promise((res, rej) => {
      res(prods.filter((el) => el.categoria === categoryId));
    });

    getProductsByCategory
      .then((productos) => {
        setProducts(productos);
      })
      .catch(() => {
        console.log("falló");
      });
  }, [categoryId]);

  return (
    <>
      <section>
        <div className="mb-5 mt-5 text-center">
          <h1>Tienda.</h1>
          <h2>CONOCE NUESTROS PRODUCTOS QUE SE HACEN TIERRA EN 180 DÍAS.</h2>
        </div>
        <div className="container">
          {categoryId !== undefined ? (
            <ItemList productos={products} />
          ) : (
            <ItemList productos={prods} />
          )}
        </div>
      </section>
    </>
  );
}
