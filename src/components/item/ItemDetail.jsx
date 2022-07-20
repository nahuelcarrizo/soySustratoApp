import { collectionGroup, getDocs, getFirestore } from "firebase/firestore";
import React, { useContext } from "react";
import { MiContexto } from "../../context/CartContext";
import ItemCount from "./ItemCount";

import { useEffect, useState } from "react";

export default function ItemDetail({ itemReq, id }) {
  const [collection, setCollection] = useState();
  const db = getFirestore();

  const { addItem } = useContext(MiContexto);
  function addCant(cant) {
    addItem(cant, itemReq);
  }
  console.log(itemReq.coleccion);
  const col = itemReq.coleccion;
  console.log(col);

  useEffect((col) => {
    const prodsCollection = collectionGroup(db);
    getDocs(prodsCollection).then((res) => {
      setCollection(res.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  console.log(collection);

  return (
    <>
      <div className="det-cont row justify-content-between">
        <div className="col-6 ps-5 d-flex flex-column justify-content-start">
          <small className="text-muted">{itemReq.categoria}</small>
          <h3>{itemReq.nombre}</h3>
          <span>{itemReq.precio}</span>
          <p>{itemReq.descripcion}</p>
          {/* {cantReq ? (
            <>
              <Link to={`/Cart`}>Finalizar Compra</Link>
            </>
          ) : ( */}
          <div className="text-light">
            <ItemCount stock={itemReq.stock} initial={1} addCant={addCant} />
          </div>
        </div>

        <div className="col-4 ms-2">
          <img
            className="itemImg img-detail m-0"
            src={itemReq.img}
            alt="Card image cap"
          />
        </div>
      </div>
    </>
  );
}
