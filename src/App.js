import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryContainer from "./components/CategoryContainer";
import CategoriesNav from "./components/CategoriesNav.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CategoriesNav />
        <Routes>
          <Route
            path="/CategoryContainer/:categoria"
            element={<CategoryContainer />}
          />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/ItemListContainer" element={<ItemListContainer />} />
          <Route
            path="/ItemDetailContainer/:id"
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
