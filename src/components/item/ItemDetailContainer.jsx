import { doc, getFirestore, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

export default function ItemDetailContainer() {
  const [itemInfoOk, setItemInfoOk] = useState({});
  const db = getFirestore();
  const { id } = useParams();
  /*   const item = productosData.find((el) => el.id == id); */

  /*   const item = id;
   */
  const item = doc(db, "productos", id);
  useEffect(() => {
    const item = doc(db, "productos", id);

    getDoc(item).then((res) => {
      setItemInfoOk(res.data());
    });
  }, []);

  return (
    <div>
      <ItemDetail itemReq={itemInfoOk} />
    </div>
  );
}
