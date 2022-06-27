import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productosData from "../json/productosData.json";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  let prods = productosData;
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductsByCategory = new Promise((res, rej) => {
      setTimeout(() => {
        res(prods.filter((el) => el.categoria === categoryId));
      }, 2200);
    });

    getProductsByCategory
      .then((productos) => {
        setProducts(productos);
      })
      .catch(() => {
        console.log("falló");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId]);

  console.log(products.length == 0);
  return (
    <>
      <section>
        <div className="container">
          {isLoading && (
            <div className="d-flex flex-column align-items-center mt-5">
              <div
                className="spinner-border"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p>Cargando todos los productos</p>
            </div>
          )}
          {products.length == 0 ? (
            <ItemList productos={products} />
          ) : (
            <ItemList productos={prods} />
          )}
        </div>
      </section>
    </>
  );
}
