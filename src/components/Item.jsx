import { useContext } from "react";
import ItemCount from "./ItemCount";
import "./item.css";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function Item({ item }) {
  const { addItem } = useContext(MiContexto);
  const addCant = (cant) => {
    addItem(cant, item);
  };
  return (
    <>
      <div className="col-lg-3 col-12 border m-4 p-3 d-flex flex-column justify-content-between">
        <img className="itemImg" src={item.img} alt="Card image cap" />
        <small className="text-muted">{item.categoria}</small>
        <div className="itemBody">
          <h3>{item.nombre}</h3>
          <span>{item.precio}</span>
          <br />

          <Link to={`/ItemDetailContainer/${item.id}`}>
            + Info del producto
          </Link>
        </div>

        <ItemCount stock={item.stock} initial={1} addCant={addCant} />
      </div>
    </>
  );
}
