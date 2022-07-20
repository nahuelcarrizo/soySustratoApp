import React from "react";
import CuboTapa from "./imgs/cubotapa.png";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  collectionGroup,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const db = getFirestore();

  useEffect(() => {
    if (categoryId !== undefined) {
      const prodCollection = query(
        collection(db, "productos"),
        where("categoria", "==", categoryId)
      );
      getDocs(prodCollection).then((res) => {
        products = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      });
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryId == undefined) {
      const prodsCollection = collection(db, "productos");

      getDocs(prodsCollection).then((res) => {
        setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, []);

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
        <section>
          <div className="container-fluid m-4">
            <ItemList productos={products} />
          </div>
        </section>
      </div>
    </>
  );
}
