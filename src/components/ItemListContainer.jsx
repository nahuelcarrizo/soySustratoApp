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
  });

  /*   useEffect(() => {
    const prodQueryCollection = query(
      collection(db, "productos"),
      where("categoria", "==", "Vajilla Desechable")
    );
    getDocs(prodQueryCollection).then((res) => {
      let prds = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(prds);
    });
    getDocs().catch(() => {
      console.log("falló prodQueryCollection");
    });
  }, [categoryId]); */

  return (
    <>
      <section>
        <div className="container">
          <ItemList productos={products} />
        </div>
      </section>
    </>
  );
}
