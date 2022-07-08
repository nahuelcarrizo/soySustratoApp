import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from "../../context/CartContext";
import CheckOutItem from "./CheckOutItem";
import { addDoc, collection, getFirestore } from "firebase/firestore";

export default function CheckOut() {
  const { cart } = useContext(MiContexto);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [cel, setCel] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buy, setBuy] = useState(false);
  const [buyId, setBuyId] = useState();
  const total = cart.reduce((prev, curr) => prev + curr.subtotal, 0);
  const db = getFirestore();
  const orderCollection = collection(db, "orders");

  //Validar con formik
  function handleClick() {
    setBuy(true);
    const order = {
      buyer: { name, company, city, cel, email, password },
      cart,
      total,
    };
    addDoc(orderCollection, order).then(({ id }) => {
      setBuyId(id);
    });
  }

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-12 row p-5">
        <h1>Detalles de facturación</h1>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Nombre completo *</p>
          <input
            className="w-75"
            onChange={(e) => setName(e.target.value)}
            placeholder="Juan Gonzalez"
            type="text"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Nombre de la empresa (opcional) </p>
          <input
            className="w-75"
            onChange={(e) => setCompany(e.target.value)}
            type="text"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Ciudad *</p>
          <input
            className="w-75"
            onChange={(e) => setCity(e.target.value)}
            type="text"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Celular (opcional)</p>
          <input
            className="w-75"
            onChange={(e) => setCel(e.target.value)}
            type="tel"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Email *</p>
          <input
            className="w-75"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
        </div>
        <div className="col-lg-6 col-12 pt-2 ps-0">
          <p className="m-0">Contraseña *</p>
          <input
            className="w-75"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>
        <Link className="mt-4 btn btn-success w-25" to={"/UserLogin"}>
          Ya tengo usuario
        </Link>
        <div className="d-flex flex-column mt-5">
          <label>
            <input type="checkbox" className="d-inline-block" />
            Enviar a una dirección diferente?
          </label>
          <textarea
            className="w-50"
            name="textarea"
            id="textarea"
            cols="2"
            rows="5"
          >
            Notas para su orden, por ejemplo instrucciones específicas para la
            entrega.
          </textarea>
        </div>
      </div>
      {buy == false ? (
        <div className="col-8 p-5 border border-dark col mb-5">
          <h4>Resumen del pedido</h4>
          {cart.map((item) => (
            <CheckOutItem
              key={item.producto.id}
              id={item.producto.id}
              nombre={item.producto.nombre}
              costo={item.producto.costo}
              img={item.producto.img}
              categoria={item.producto.categoria}
              cantidad={item.cantidad}
            />
          ))}
          <div className="col">
            <p className="h3">El total de su compra es: $ {total}</p>
            <button className="btn btn-success mt-4 w-50" onClick={handleClick}>
              Ir a pagar
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center mt-5 mb-5">
          <div
            className="spinner-border"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <h3 className="mb-3">Redireccionando al sitio de pago</h3>
          {buyId && (
            <>
              <span className="d-flex flex-block h6">
                <p>Su orden ha sido generada </p>: {buyId}
              </span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
