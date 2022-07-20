//@ts-check
import { initializeApp } from "firebase/app";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ItemDetailContainer from "./components/item/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import CartContext from "./context/CartContext";
import UserLogin from "./components/UserLogin";
import CheckOut from "./components/checkout/CheckOut";

export default function App() {
  initializeApp({
    apiKey: "AIzaSyAbKPpePDHV3lgErwLRzVO5TChMWvn7Ebo",
    authDomain: "soysustrato-213fd.firebaseapp.com",
    projectId: "soysustrato-213fd",
    storageBucket: "soysustrato-213fd.appspot.com",
    messagingSenderId: "778700963230",
    appId: "1:778700963230:web:60bc34a12097cdcd5c6a8f",
  });
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/Shop" element={<ItemListContainer />} />
            <Route path="/Shop/:categoryId" element={<ItemListContainer />} />
            <Route
              path="/ItemDetailContainer/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/UserLogin" element={<UserLogin />} />
            <Route path="/Checkout" element={<CheckOut />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}
