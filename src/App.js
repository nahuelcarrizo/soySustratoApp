//@ts-check
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoriesNav from "./components/CategoriesNav.jsx";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";
import { initializeApp } from "firebase/app";

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
          <CategoriesNav />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/ItemListContainer" element={<ItemListContainer />} />
            <Route
              path="/ItemListContainer/:categoryId"
              element={<ItemListContainer />}
            />
            <Route
              path="/ItemDetailContainer/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}
