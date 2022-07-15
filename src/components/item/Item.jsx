import { useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import { ReactComponent as StartIcon } from "../../icons/star.svg";

export default function Item({ item }) {
  const { addItem } = useContext(MiContexto);
  const costoItem = item.costo;

  const addCant = (cant) => {
    const subt = costoItem * cant;
    addItem(cant, item, subt);
  };
  return (
    <>
      <div className="col-lg-3 col-md-6 d-inline-flex">
        <div className="item-all d-flex justify-content-between p-3">
          <img className="itemImg w-100" src={item.img} alt="Card image cap" />
          <div className="itemBody h-100 d-flex flex-column pt-2 ps-1 pe-1">
            <Link
              to={`/itemDetailContainer/${item.id}`}
              className="d-block mb-1 lh-sm flex-grow-1"
            >
              {item.nombre}
            </Link>
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
