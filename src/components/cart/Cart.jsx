import { MiContexto } from "../../context/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, clearCart } = useContext(MiContexto);

  return (
    <div className="row justify-content-center">
      <div className="m-auto d-flex">
        <button className="btn btn-danger m-auto" onClick={() => clearCart()}>
          Vaciar Carrito
        </button>
        <Link className="btn btn-succes m-auto" to={"/CheckOut"}>
          Finalizar compra
        </Link>
      </div>
      {cart.length != 0 ? (
        cart.map((item) => (
          <CartItem
            key={item.producto.id}
            id={item.producto.id}
            nombre={item.producto.nombre}
            costo={item.producto.costo}
            img={item.producto.img}
            descripcion={item.producto.descripcion}
            categoria={item.producto.categoria}
            cantidad={item.cantidad}
          />
        ))
      ) : (
        <>
          <Link to={"/ItemListContainer"}>
            No tiene elementos en el Carrito. Volver a la tienda
          </Link>
        </>
      )}
    </div>
  );
}
