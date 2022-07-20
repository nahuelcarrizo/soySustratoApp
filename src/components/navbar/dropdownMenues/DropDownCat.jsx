import { collection, getDocs, getFirestore } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ItemDetail from "../../item/ItemDetail";
import DropdownCatItem from "./DropdownCatItem";
import { BsArrowRight } from "react-icons/bs";

export default function DropDownCat() {
  const [products, setProducts] = useState([]);
  const db = getFirestore();
  const EnvRig = products.filter((item) => item.categoria == "Envases Rígidos");
  const VajDes = products.filter(
    (item) => item.categoria == "Vajilla Desechable"
  );
  const sobresDoypack = products.filter(
    (item) => item.categoria == "Sobres y Doypack"
  );

  useEffect(() => {
    const prodCollection = collection(db, "productos");
    getDocs(prodCollection).then((res) => {
      setProducts(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <div className="dropdown-cat position-absolute bg-light d-flex">
      <div className="col col-4 me-5">
        <h6>Envases Rigidos.</h6>
        <ul className="row mb-3">
          {products &&
            EnvRig.map((item) => (
              <li className="col-6 h6 m-0">
                <DropdownCatItem
                  id={item.id}
                  img={item.img}
                  nombre={item.nombre}
                  key={item.id}
                />
              </li>
            ))}
        </ul>
        <Link className="nav-cat-button" to={"/TestShop"}>
          <span>Ver Envases</span>
          <BsArrowRight className="h5" />
        </Link>
        <h6 className="mt-4">Vajilla.</h6>
        <ul className="row nav-vaj mb-2">
          {products &&
            VajDes.map((item) => (
              <li className="col-6 h6">
                <DropdownCatItem
                  id={item.id}
                  img={item.img}
                  nombre={item.nombre}
                  key={item.id}
                />
              </li>
            ))}
        </ul>
        <Link className="nav-cat-button" to={"/TestShop"}>
          <span>Ver Vajilla</span>
          <BsArrowRight className="h5" />
        </Link>
      </div>

      {/* w/o images */}
      <div className="col col-4 ms-4">
        <h6>Ofertas del mes.</h6>
        <ul className="row mb-3 mt-3 d-flex flex-column">
          {products &&
            sobresDoypack.map((item) => (
              <li className="col-12 h6 mb-1">
                <DropdownCatItem
                  id={item.id}
                  img={item.img}
                  nombre={item.nombre}
                  key={item.id}
                  categoria={item.categoria}
                  pack={item.pack}
                />
              </li>
            ))}
        </ul>
        <Link className="nav-cat-button btn-all" to={"/TestShop"}>
          <span>Ver mas ofertas</span>
          <BsArrowRight className="h5" />
        </Link>
      </div>
      <div className="w-100 h-100 m-0 nav__cat-all">
        <Link to={"/TestShop"} className="all-link">
          <span>
            <font>Ver todos</font>
            {<BsArrowRight className="h5" />}
          </span>
          <span className="all-span"></span>
        </Link>
      </div>
    </div>
  );
}
