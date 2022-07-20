import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [itemInfoOk, setItemInfoOk] = useState({});

  const db = getFirestore();
  const { id } = useParams();

  useEffect(() => {
    const item = doc(db, "productos", id);
    getDoc(item).then((res) => {
      setItemInfoOk(res.data());
    });
  }, [id]);
  return (
    <>
      <div className="test d-flex flex-row">
        <div className="product-intro-left p-0 w-50"></div>
        <div className="product-intro-right p-0 w-50"></div>
      </div>
      <div className="product-intro-white"></div>
      <div className="position-absolute item-detail w-100 d-flex align-items-center">
        <ItemDetail itemReq={itemInfoOk} id={id} />
      </div>
    </>
  );
}
