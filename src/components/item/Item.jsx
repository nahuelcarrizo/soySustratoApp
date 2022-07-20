import { useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import { ReactComponent as StartIcon } from "../../icons/star.svg";

export default function Item({ item }) {
  const { addItem } = useContext(MiContexto);

  const costoItem = item.precio;

  const addCant = (cant) => {
    const subt = costoItem * cant;
    addItem(cant, item, subt);
  };
  return (
    <>
      <div className="col-lg-4">
        <div className="item-all row align-items-center justify-content-between p-3">
          <img
            className="item-img m-0"
            src={item.img}
            alt="imagen de producto"
          />
          <div className="itemBody d-flex flex-column pt-2 ps-1 pe-1">
            <Link
              to={`/itemDetailContainer/${item.id}`}
              className="d-block mb-1 lh-sm flex-grow-1"
            >
              {item.nombre}
            </Link>
            <p className="m-0">Pack de {item.pack}</p>{" "}
            <span className="d-block pt-1 lh-1">$ {item.precio}</span>
            <div className="d-block lh-1">
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
              <StartIcon />
            </div>
          </div>
          <ItemCount stock={item.stock} initial={1} addCant={addCant} />
        </div>
      </div>
    </>
  );
}
