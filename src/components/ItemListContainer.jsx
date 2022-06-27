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
      setTimeout(() => {
        res(prods.filter((el) => el.categoria === categoryId));
      }, 200);
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
