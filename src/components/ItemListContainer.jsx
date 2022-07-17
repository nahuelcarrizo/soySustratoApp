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

  return (
    <>
      <section className="d-flex flex-row">
        <div className="container w-25">Filter</div>
        <div className="container-fluid mb-4 w-75">
          <ItemList productos={products} />
        </div>
      </section>
    </>
  );
}
