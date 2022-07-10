import { useContext } from "react";
import ItemCount from "./ItemCount";
import "./item.css";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";
import { ReactComponent as StartIcon } from "../icons/star.svg";

export default function Item({ item }) {
  const { addItem } = useContext(MiContexto);
  const costoItem = item.costo;

  const addCant = (cant) => {
    const subt = costoItem * cant;
    addItem(cant, item, subt);
  };
  return (
    <>
      <div className="item-all col-lg-2 col-md-4 col-12 mb-5 ms-4 me-4 p-4">
        <img className="itemImg" src={item.img} alt="Card image cap" />
        <div className="itemBody d-inline pt-4 ps-1 pe-1">
          <Link to={`/itemDetailContainer/${item.id}`} className="d-block mb-1">
            {item.nombre}
          </Link>
          <span className="d-block pt-2">$ {item.precio}</span>
          <div>
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
            <StartIcon />
          </div>
        </div>
        <ItemCount stock={item.stock} initial={1} addCant={addCant} />
      </div>
    </>
  );
}
