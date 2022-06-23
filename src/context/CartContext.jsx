//@ts-check

import { logDOM } from "@testing-library/react";
import { createContext, useState } from "react";

export const MiContexto = createContext({});

export default function CartContext({ children }) {
  const [cart, setCart] = useState([]);
  const onCartId = cart.map((el) => el.producto.id);
  const onCart = [...cart];

  const addItem = (cant, itemReq) => {
    const indexed = onCartId.findIndex((id) => id == itemReq.id);
    const isOnCart = () => {
      onCart[indexed].cantidad += cant;
      setCart(onCart);
    };
    indexed === -1
      ? setCart([...cart, { cantidad: cant, producto: itemReq }])
      : isOnCart();
  };

  const removeItem = (id) => {
    const indexed = onCartId.findIndex((el) => el == id);
    onCart.splice(indexed, 1);
    setCart(onCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  /* function removeItem(itemId) // Remover un item del cart por usando su id
  function clear() // Remover todos los items
  function isInCart: (id) => i | -1  */

  return (
    <MiContexto.Provider value={{ addItem, cart, removeItem, clearCart }}>
      {children}
    </MiContexto.Provider>
  );
}
