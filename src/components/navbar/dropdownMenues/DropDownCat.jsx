import { collection, getDocs, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../../item/ItemDetail";
import DropdownCatItem from "./DropdownCatItem";

export default function DropDownCat() {
  const [products, setProducts] = useState([]);
  /*   const categories = products.map((el) => el.categoria);
  const uniqueCategories = Array.from(new Set(categories)); */
  const db = getFirestore();
  useEffect(() => {
    const prodCollection = collection(db, "productos");
    getDocs(prodCollection).then((res) => {
      setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  console.log(products);
  const EnvRig = products.filter((item) => item.categoria == "Envases Rígidos");

  return (
    <div className="dropdown-cat position-absolute bg-light d-flex">
      <div className="d-flex flex-column ">
        <h4>Envases Rigidos</h4>
        <ul className="row">
          {products &&
            EnvRig.map((item) => (
              <li className="col-6 h6">
                <Link
                  className="text-dark d-flex"
                  key={item.id}
                  to={`/ItemListContainer/ItemDetailContainer/${item.id}`}
                >
                  <img src={item.img} alt="" />
                  {item.nombre}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
