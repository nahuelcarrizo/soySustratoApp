import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import productosData from "../json/productosData.json";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  //With Firebase
  const db = getFirestore();
  useEffect(() => {
    if (categoryId !== undefined) {
      const prodCollection = query(
        collection(db, "productos"),
        where("categoria", "==", categoryId)
      );
      getDocs(prodCollection).then((res) => {
        setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, [categoryId]);

  useEffect(() => {
    if (categoryId == undefined) {
      const prodCollection = collection(db, "productos");
      getDocs(prodCollection).then((res) => {
        setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });
    }
  }, []);

  //With JSON

  /*  const prods = productosData;

  useEffect(() => {
    const prom = new Promise((resolve, reject) => {
      resolve(prods);
    });

    prom.then((r) => {
      setProducts(r);
    });
    console.log(prods);
  }, []);

  useEffect(() => {
    const prd = prods.filter((el) => el.categoria == categoryId);
    const prom = new Promise((resolve, reject) => {
      resolve(prd);
    });

    prom.then((r) => {
      setProducts(r);
    }); */
  /* }, [categoryId]); */

  return (
    <>
      <section className="d-flex flex-row">
        <div className="container w-25">Filter</div>
        <div className="container-fluid ps-5 pe-4">
          <ItemList productos={products} />
        </div>
      </section>
    </>
  );
}
