//@ts-check
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer";
import CategoriesNav from "./components/CategoriesNav.jsx";
import CartContext from "./context/CartContext";
import Cart from "./components/Cart";

export default function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />
          <CategoriesNav />
          <Routes>
            <Route
              exact
              path="/CategoryContainer/:categoria"
              element={<CategoryContainer />}
            />
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
