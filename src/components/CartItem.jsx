import { useContext } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../context/CartContext";

export default function CartItem({
  id,
  nombre,
  costo,
  img,
  categoria,
  cantidad,
}) {
  const { removeItem } = useContext(MiContexto);
  return (
    <>
      <div className="col-lg-3 col-12 border m-4 p-3 d-flex flex-column justify-content-between">
        <img className="itemImg" src={img} alt="Card image cap" />
        <small className="text-muted">{categoria}</small>
        <div className="itemBody">
          <h3>{nombre}</h3>
          <span>Cantidad: {cantidad}</span>
          <br />
          <span>Subtotal: ${costo * cantidad}</span>
          <br />

          <Link to={`/ItemDetailContainer/${id}`}>+ Info del producto</Link>
        </div>
        <button className="btn btn-danger mt-3" onClick={() => removeItem(id)}>
          Remover Item
        </button>
      </div>
    </>
  );
}
